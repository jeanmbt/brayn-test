import { TableBody, TableCell, TableRow } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Invoice } from "../../../types/invoice";
import { roundSubtotal } from "../../../utils/roundSubtotal";
import { sumAmount } from "../../../utils/sumAmount";

export const InvoiceTotalsRow = (props: { invoice: Invoice }) => {
  const invoice = props.invoice;

  return (
    <>
      <TableBody>
        <TableRow sx={{ bgcolor: blueGrey[50] }}>
          <TableCell colSpan={2}>{sumAmount(invoice)}</TableCell>
          <TableCell>
            {invoice.netto} {invoice.foreign_currency}
          </TableCell>
          <TableCell colSpan={3}>
            {invoice.brutto &&
              invoice.netto &&
              `${roundSubtotal(invoice.brutto, invoice.netto)} ${invoice.foreign_currency}`}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={5} align="right" sx={{ fontWeight: "bold" }}>
            Total:
          </TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>
            {invoice.brutto} {invoice.foreign_currency}
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};
