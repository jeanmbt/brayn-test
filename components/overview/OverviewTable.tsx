import { Table, TableBody, Pagination, TableRow, Button, TableFooter } from "@mui/material";

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

  // console.log("trigger" + trigger);

  // const triggerFetch = () => {
  //   setTrigger(true);
  //   console.log(trigger);
  // };

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

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
        // if first or last page
        page >= 1 && page <= pageCount && console.log("page" + page);
        // once authorized, fetches list of invoices
        fetch(
          `https://api.fynbill.fynbird.io/v1/invoices/debit/list?page=${page}`,
          fetchOptions
        ).then(async (response) => {
          const data = await response.json();
          console.log(data.page);
          const listData = data._embedded?.list_debits;
          listData && setCurrentList(listData);

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
    page === 0 && setCurrentList(list);
  }, []);

  // console.log(currentList);
  // console.log("was fetched?" + wasFetched);

  return (
    <>
      <Table>
        <OverviewTableHeader />
        <TableBody>
          <OverviewItemRow list={currentList} />
        </TableBody>
      </Table>
      <TableFooter>
        <Pagination page={page} count={pageCount} onChange={handleChangePage}></Pagination>
      </TableFooter>

      {/* Infinte Scroll */}
      {/* <InView
        onChange={() => {
          let newPage = 1;
          if (page <= pageCount) {
            newPage = page + 1;
            setPage(newPage);
            console.log(page);
            triggerFetch();
          }
        }}
      /> */}

      {/* <Button
        onClick={() => {
          triggerFetch();
        }}
      >
        Load More
      </Button> */}
    </>
  );
};
