import { computeVat } from "./computeVat";

export const sumSubtotal = (price: any, vat_rate: any) => {
  if (price && vat_rate) {
    return computeVat(price, vat_rate) + price;
  }
};