import { TableRow, TableCell, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { blueGrey } from "@mui/material/colors";

export const OverviewItemRow = (props: any) => {
  const list = props.list;

  const isOdd = (num: number) => {
    return num % 2;
  };

  const setBackgroundColor = (number: number) => {
    return isOdd(number) ? blueGrey[50] : "white";
  };

  return (
    <>
      {list?.map((invoice: any, index: number) => {
        return (
          <TableRow sx={{ bgcolor: setBackgroundColor(index) }} key={`${invoice.id}`}>
            <TableCell>
              {invoice.billing_number ? invoice.billing_number : `id${invoice.id}`}
            </TableCell>
            <TableCell>{invoice.receipt_date ? invoice.receipt_date : "-"}</TableCell>
            <TableCell>
              {invoice.netto} {invoice.foreign_currency}
            </TableCell>
            <TableCell>
              {invoice.brutto} {invoice.foreign_currency}
            </TableCell>
            <TableCell>{invoice.balance === 0 ? "paid" : invoice.balance}</TableCell>
            <TableCell>{invoice.Debitor.name}</TableCell>
            <TableCell padding="none" align="center">
              <Button href={`invoice/${invoice.id}`} variant="contained">
                <OpenInNewIcon />
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
