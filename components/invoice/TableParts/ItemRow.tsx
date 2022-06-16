import { TableCell, TableRow } from "@mui/material";
import { Item } from "../../../types/item";

export const ItemRow = (props: { item: Item; computeVat: any }) => {
  const { item, computeVat } = props;

  const hasVat = item.vat_rate ? true : false;

  const sumSubtotal = (price: any, vat_rate: any) => {
    if (price && vat_rate) {
      return computeVat(price, vat_rate) + price;
    }
  };

  return (
    <>
      <TableRow>
        <TableCell>{item.amount}</TableCell>
        <TableCell>{item.description}</TableCell>
        <TableCell>
          {item.price} {item.currency}
        </TableCell>
        <TableCell>
          {computeVat(item.price, item.vat_rate)} {hasVat && item.currency}
        </TableCell>
        <TableCell>
          {sumSubtotal(item.price, item.vat_rate)} {hasVat && item.currency}
        </TableCell>
        <TableCell>{item.vat_rate}%</TableCell>
      </TableRow>
    </>
  );
};
