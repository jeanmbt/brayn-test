import { TableCell, TableHead, TableRow } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const InvoiceTableHead = () => {
  return (
    <>
      <TableHead sx={{ bgcolor: blueGrey[50] }}>
        <TableRow>
          <TableCell>Amount</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Unit Price</TableCell>
          <TableCell>VAT total</TableCell>
          <TableCell>VAT</TableCell>
          <TableCell>Subtotal</TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};
