import { Typography, Container, Box } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import { styled } from "@mui/system";

export const paginationStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  bgcolor: blueGrey[100],
};

export const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export  const StyledTypography = styled(Typography)({
  fontWeight: "500",
});

export const InvoiceContainer = styled(Container)({
  padding: 10,
  border: `1px solid ${grey[200]}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});