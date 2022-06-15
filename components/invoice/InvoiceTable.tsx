import { Table, TableBody, TableContainer } from "@mui/material";
import { Item } from "../../types/item";
import { ItemRow } from "./TableParts/ItemRow";
import { TableHeader } from "./TableParts/TableHeader";
import { TotalsRow } from "./TableParts/TotalsRow";

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
      <TableContainer sx={{ padding: 3, marginTop: 5 }}>
        <Table>
          <TableHeader />
          <TableBody>
            {/* Render a table row for each Invoice item */}
            {invoice.items.map((item: Item) => {
              return <ItemRow key={`item-${item.id}`} item={item} computeVat={computeVat} />;
            })}
          </TableBody>
          <TotalsRow invoice={invoice} />
        </Table>
      </TableContainer>
    </>
  );
};
