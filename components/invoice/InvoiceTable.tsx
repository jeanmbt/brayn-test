import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import { Item } from "../../types/item";
import { InvoiceItemRow, InvoiceTableHead, InvoiceTotalsRow } from "./InvoiceTableParts";

export const InvoiceTable = (props: { invoice: any }) => {
  const invoice = props.invoice;

  const computeVat = (amount: any, vat_rate: any) => {
    if (amount && vat_rate) {
      const vatTotal = (amount * vat_rate) / 100;
      return vatTotal;
    }
  };

  return (
    <>
      <TableContainer sx={{ padding: 3, marginTop: 5 }} component={Paper}>
        <Table>
          <InvoiceTableHead />
          <TableBody>
            {/* Render a table row for each Invoice item */}
            {invoice.items.map((item: Item) => {
              return <InvoiceItemRow key={`item-${item.id}`} item={item} computeVat={computeVat} />;
            })}
          </TableBody>
          <InvoiceTotalsRow invoice={invoice} />
        </Table>
      </TableContainer>
    </>
  );
};
