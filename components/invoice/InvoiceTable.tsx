import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import { Invoice } from "../../types/invoice";
import { Item } from "../../types/item";
import { computeVat } from "../../utils/computeVat";
import { InvoiceItemRow, InvoiceTableHead, InvoiceTotalsRow } from "./InvoiceTableParts";

export const InvoiceTable = (props: any) => {
  const invoice: Invoice = props.invoice;

  return (
    <>
      <TableContainer sx={{ padding: 3, marginTop: 5 }} component={Paper}>
        <Table>
          <InvoiceTableHead />
          <TableBody>
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
