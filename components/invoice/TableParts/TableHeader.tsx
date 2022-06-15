import { TableCell, TableHead } from "@mui/material";

export const TableHeader = () => {
  return (
    <>
      <TableHead>
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
