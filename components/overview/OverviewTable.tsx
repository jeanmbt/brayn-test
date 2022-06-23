/* eslint-disable react-hooks/exhaustive-deps */
import { Table, TableBody, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { makeAuthorizationRequest } from "../../api/makeAuthorizationRequest";

import { OverviewItemRow, OverviewTableHead } from "./OverviewTableParts";

export const OverviewTable = (props: any) => {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
        return "";
      }
      try {
        setLoading(true);
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
        setError(e);
        console.log(error);
      }
      setLoading(false);
    };
    getInvoices();
  }, [page]);

  useEffect(() => {
    page === 0 && setCurrentList(list);
  }, []);

  if (loading) {
    return <div> loading...</div>;
  }

  return (
    <>
      <Table>
        <OverviewTableHead />
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
