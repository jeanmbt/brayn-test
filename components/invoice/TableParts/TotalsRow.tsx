import { TableBody, TableCell, TableFooter, TableRow } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import { Item } from "../../../types/item";

export const TotalsRow = (props: { invoice: any }) => {
  const invoice = props.invoice;

  const roundSubtotal = (brutto: number, netto: number) => {
    return (Math.round((brutto - netto) * 100) / 100).toFixed(2);
  };

  const sumAmount = () => {
    let result = 0;
    invoice.items.forEach((item: any) => {
      result = result + item.amount;
    });
    return result;
  };

  console.log(sumAmount());

  return (
    <>
      <TableBody>
        <TableRow sx={{ bgcolor: blueGrey[50] }}>
          <TableCell>{sumAmount()}</TableCell>
          <TableCell />
          <TableCell>
            {invoice.netto} {invoice.foreign_currency}
          </TableCell>
          <TableCell>
            {roundSubtotal(invoice.brutto, invoice.netto)} {invoice.foreign_currency}
          </TableCell>
          <TableCell />
          <TableCell />
        </TableRow>
        <TableRow>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell sx={{ fontWeight: "bold" }}>Total: </TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>
            {invoice.brutto} {invoice.foreign_currency}
          </TableCell>
        </TableRow>
        <TableFooter />
      </TableBody>
    </>
  );
};
