import { blueGrey } from "@mui/material/colors";
import { isOdd } from "./isOdd";

export const setBackgroundColor = (number: number) => {
  return isOdd(number) ? blueGrey[50] : "white";
};
