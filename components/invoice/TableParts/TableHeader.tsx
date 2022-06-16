import { TableCell, TableHead } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const TableHeader = () => {
  return (
    <>
      <TableHead sx={{ bgcolor: blueGrey[50] }}>
        <TableCell>Amount</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Unit Price</TableCell>
        <TableCell>VAT total</TableCell>
        <TableCell>Subtotal</TableCell>
        <TableCell>VAT</TableCell>
      </TableHead>
    </>
  );
};
