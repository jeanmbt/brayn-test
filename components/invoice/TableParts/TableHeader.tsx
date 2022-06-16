import { TableCell, TableHead, TableRow } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const TableHeader = () => {
  return (
    <>
      <TableHead sx={{ bgcolor: blueGrey[50] }}>
        <TableRow>
          <TableCell>Amount</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Unit Price</TableCell>
          <TableCell>VAT total</TableCell>
          <TableCell>Subtotal</TableCell>
          <TableCell>VAT</TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};
