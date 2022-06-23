export const roundSubtotal = (brutto: number, netto: number) => {
  return (Math.round((brutto - netto) * 100) / 100).toFixed(2);
};