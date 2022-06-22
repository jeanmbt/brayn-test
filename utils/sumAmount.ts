export    const sumAmount = (invoice: any) => {
  let result = 0;
  invoice.items.forEach((item: any) => {
    result += item.amount;
  });
  return result;
};