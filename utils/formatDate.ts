export const formatDate = (date: string) => {
  const splitted = date.split("-");
  return date.length > 2 ? `${splitted[2]}.${splitted[1]}.${splitted[0]}` : "-";
};
