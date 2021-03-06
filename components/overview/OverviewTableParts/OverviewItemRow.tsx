import { TableRow, TableCell, Button, Tooltip } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { formatDate } from "../../../utils/formatDate";
import { setBackgroundColor } from "../../../utils/setBackgroundColor";

export const OverviewItemRow = (props: any) => {
  const list = props.list;

  return (
    <>
      {/* Iterates over the list of invoices and renders a row with it's data inside the table */}
      {list?.map((invoice: any, index: number) => {
        return (
          <TableRow sx={{ bgcolor: setBackgroundColor(index) }} key={`${invoice.id}`}>
            <TableCell>
              {invoice.billing_number ? `#${invoice.billing_number}` : `ID:${invoice.id}`}
            </TableCell>

            <TableCell>
              {invoice.receipt_date ? formatDate(invoice.receipt_date) : "not available"}
            </TableCell>

            <TableCell>
              {invoice.netto} {invoice.foreign_currency}
            </TableCell>

            <TableCell>
              {invoice.brutto} {invoice.foreign_currency}
            </TableCell>

            <TableCell>{invoice.balance === 0 ? "paid (0)" : invoice.balance}</TableCell>

            <TableCell>{invoice.Debitor.name}</TableCell>

            <TableCell padding="none" align="center">
              <Tooltip
                title={`Open invoice ${
                  invoice.billing_number ? `#${invoice.billing_number}` : `ID:${invoice.id}`
                }`}
                placement="left"
              >
                <Button href={`invoice/${invoice.id}`} variant="contained">
                  <OpenInNewIcon />
                </Button>
              </Tooltip>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
