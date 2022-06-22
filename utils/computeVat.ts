export const computeVat = (amount: any, vat_rate: any) => {
  if (amount && vat_rate) {
    const vatTotal = (amount * vat_rate) / 100;
    return vatTotal;
  }
};
