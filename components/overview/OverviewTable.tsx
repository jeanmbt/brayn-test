import { Table, TableBody, Pagination } from "@mui/material";

import { useEffect, useState } from "react";
import { authorizationOptions } from "../../utils/authorizationOptions";
import { InView } from "react-intersection-observer";
import { OverviewItemRow } from "./OverviewItemRow";
import { OverviewTableHeader } from "./OverviewTableHeader";

export const OverviewTable = (props: any) => {
  type List = typeof list;
  const { pageCount, list } = props;
  const [currentList, setCurrentList] = useState([]);
  const [page, setPage] = useState(0);

  // const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
  //   setPage(page);
  // };

  useEffect(() => {
    // Authorizes with oAuth
    fetch("https://api.fynbill.fynbird.io/oauth", authorizationOptions)
      .then(async (response) => {
        const authData = await response.json();

        // Returns Promise with error if no response
        if (!response.ok) {
          const error = (authData && authData.message) || response.status;
          return Promise.reject(error);
        }

        // Set the fetched authorization token as a 'Bearer Token'
        const fetchOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authData.access_token}`,
          },
        };

        page > 1 &&
          // once authorized, fetches list of invoices
          fetch(
            `https://api.fynbill.fynbird.io/v1/invoices/debit/list?page=${page}`,
            fetchOptions
          ).then(async (response) => {
            const data = await response.json();
            console.log(data);
            // data &&
            //   data._embedded.list_debits.map((item: any) => {
            //     setCurrentList([...currentList, item]);
            //   });

            console.log(currentList);
            if (!response.ok) {
              const error = (authData && authData.message) || response.status;
              return Promise.reject(error);
            }
          });
      })

      // Log  error if unsuccesfull
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [page]);

  useEffect(() => {
    setCurrentList(list);
    console.log(list);
  }, [list]);

  return (
    <>
      <Table>
        <OverviewTableHeader />
        <TableBody>
          <OverviewItemRow list={list} />
        </TableBody>
      </Table>
      {/* TODO: make infinite scroll  instead */}

      <InView
        onChange={(inView) => {
          let newPage = 1;
          if (InView && page <= pageCount) {
            newPage = page + 1;
          }
          setPage(newPage);
        }}
      />
    </>
  );
};
