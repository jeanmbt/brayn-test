/* eslint-disable react-hooks/exhaustive-deps */
import { Table, TableBody, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { makeAuthorizationRequest } from "../../utils/makeAuthorizationRequest";
import { OverviewItemRow } from "./OverviewItemRow";
import { OverviewTableHeader } from "./OverviewTableHeader";

export const OverviewTable = (props: any) => {
  const { pageCount, list } = props;
  const [currentList, setCurrentList] = useState([]);
  const [page, setPage] = useState(0);

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  // Fetches more results and change current list when page changes
  useEffect(() => {
    const getInvoices = async () => {
      if (page === 0) {
        return "";
      }
      try {
        // ideally it would use the same authorization token as before and if it expired (401), use the refresh token
        const token = await makeAuthorizationRequest();
        const res = await fetch(
          `https://api.fynbill.fynbird.io/v1/invoices/debit/list?page=${page}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",

              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        setCurrentList(data._embedded?.list_debits);
      } catch (e) {
        console.error(e);
      }
    };
    getInvoices();
  }, [page]);

  useEffect(() => {
    page === 0 && setCurrentList(list);
  }, []);

  return (
    <>
      <Table>
        <OverviewTableHeader />
        <TableBody>
          <OverviewItemRow list={currentList} />
        </TableBody>
      </Table>
      <Pagination
        defaultPage={1}
        color="primary"
        sx={{ padding: 1 }}
        page={page}
        count={pageCount}
        onChange={handleChangePage}
        showFirstButton
        showLastButton
      ></Pagination>
    </>
  );
};
