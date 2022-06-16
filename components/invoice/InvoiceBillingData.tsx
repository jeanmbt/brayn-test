import { Container, Box, Typography } from "@mui/material";
import { StyledBox, StyledTypography } from "../../styles/componentsStyle";

export const InvoiceBillingData = (props: any) => {
  const invoice = props.invoice;
  const debitor = invoice.Debitor;

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "space-between", padding: 5 }}>
        <Box sx={{}}>
          <Typography variant="h6" fontSize={15}>
            Bill to:
          </Typography>
          {/* TODO: abstract into function, make conditional */}
          <StyledBox>{debitor.name}</StyledBox>
          <StyledBox>{debitor.email}</StyledBox>
          <StyledBox>{debitor.phone}</StyledBox>
          <StyledBox>
            {debitor.street}
            {debitor.postcode}, {debitor.location}
          </StyledBox>
        </Box>

        <Box sx={{ display: "grid", width: 200 }}>
          {/* INVOICE DATE */}
          <StyledBox>
            <StyledTypography>Invoice date:</StyledTypography> {invoice.receipt_date}
          </StyledBox>

          {/* DUE DATE */}
          <StyledBox>
            <StyledTypography>Due date:</StyledTypography>
            {invoice.due_date}
          </StyledBox>

          {/* OPEN AMOUNT */}
          <StyledBox>
            <StyledTypography>Open amount:</StyledTypography> {invoice.balance}{" "}
            {invoice.foreign_currency}
          </StyledBox>

          {/* PAYMENT METHOD */}
          {invoice.state === "paid" && (
            <StyledBox sx={{ marginTop: 1 }}>
              <Typography>
                This invoice was paid by {invoice.payment_method.replace("_", " ")}
              </Typography>
            </StyledBox>
          )}
        </Box>
      </Container>
    </>
  );
};
