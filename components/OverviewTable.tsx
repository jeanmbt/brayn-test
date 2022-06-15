import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Button,
  TableFooter,
} from "@mui/material";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export const OverviewTable = (props: { list: any }) => {
  type List = typeof list;
  const { list } = props;

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {/* TODO: abstract into function */}
            <TableCell width={80}>#</TableCell>
            <TableCell width={150}>Date</TableCell>
            <TableCell width={150}>Net</TableCell>
            <TableCell width={150}>Gross</TableCell>
            <TableCell width={50}>Balance</TableCell>
            <TableCell width={180}>Debitor</TableCell>
            <TableCell width={50}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((invoice: any) => {
            return (
              <TableRow key={`${invoice.id}`}>
                <TableCell>{invoice.billing_number}</TableCell>
                <TableCell>{invoice.receipt_date}</TableCell>
                <TableCell>
                  {invoice.netto} {invoice.foreign_currency}
                </TableCell>
                <TableCell>
                  {invoice.brutto} {invoice.foreign_currency}
                </TableCell>
                <TableCell>{invoice.balance}</TableCell>
                <TableCell>{invoice.Debitor.name}</TableCell>
                <TableCell padding="none" align="center">
                  <Button href={`invoice/${invoice.id}`} variant="contained">
                    <OpenInNewIcon />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </>
  );
};
