import { TableRow, TableCell, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export const OverviewItemRow = (props: any) => {
  const list = props.list;
  return (
    <>
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
    </>
  );
};
