import { TableCell, TableHead, TableRow } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const OverviewTableHeader = () => {
  return (
    <>
      <TableHead sx={{ bgcolor: blueGrey[100] }}>
        <TableRow>
          <TableCell width={80}>#</TableCell>
          <TableCell width={150}>Date</TableCell>
          <TableCell width={150}>Net</TableCell>
          <TableCell width={150}>Gross</TableCell>
          <TableCell width={50}>Balance</TableCell>
          <TableCell width={180}>Debitor</TableCell>
          <TableCell width={50}></TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};
