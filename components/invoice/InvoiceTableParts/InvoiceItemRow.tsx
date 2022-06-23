import { TableCell, TableRow } from "@mui/material";
import { Item } from "../../../types/item";
import { computeVat } from "../../../utils/computeVat";
import { sumSubtotal } from "../../../utils/sumSubtotal";

interface InvoiceItemRow {
  item: Item;
  computeVat: (price: number, vat: number) => void;
}

export const InvoiceItemRow = (props: InvoiceItemRow) => {
  const { item } = props;
  const hasVat = !!item.vat_rate;

  return (
    <>
      <TableRow>
        <TableCell>{item.amount}</TableCell>
        <TableCell>{item.description}</TableCell>
        <TableCell>
          {item.price} {item.currency}
        </TableCell>
        <TableCell>
          {item.price && hasVat && computeVat(item.price, item.vat_rate)} {hasVat && item.currency}
        </TableCell>
        <TableCell>{item.vat_rate}%</TableCell>
        <TableCell>
          {item.price && hasVat && sumSubtotal(item.price, item.vat_rate)}
          {hasVat && item.currency}
        </TableCell>
      </TableRow>
    </>
  );
};
