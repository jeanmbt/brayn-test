import { Container, Box, Typography } from "@mui/material";
import { StyledBox, StyledTypography } from "../../styles/componentStyles";
import { formatDate } from "../../utils/formatDate";

const Row = (props: any) => {
  const { title, label, margin } = props;
  return (
    <StyledBox sx={{ marginTop: margin }}>
      <StyledTypography>{title}</StyledTypography>
      {label}
    </StyledBox>
  );
};

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

          <StyledBox>{debitor.name}</StyledBox>
          <StyledBox>{debitor.email}</StyledBox>
          <StyledBox>{debitor.phone}</StyledBox>
          <StyledBox>
            {debitor.street}
            {debitor.postcode}, {debitor.location}
          </StyledBox>
        </Box>

        <Box sx={{ display: "grid", width: 200 }}>
          <Row
            title="Invoice date:"
            label={invoice.receipt_date ? formatDate(invoice.receipt_date) : "not available"}
          />
          <Row title="Due date:" label={invoice.due_date && formatDate(invoice.due_date)} />
          <Row title="Open amount:" label={`${invoice.balance} ${invoice.foreign_currency}`} />
          {invoice.state === "paid" && (
            <Row
              margin={1}
              label={` This invoice was paid by ${invoice.payment_method.replace("_", " ")}`}
            />
          )}
        </Box>
      </Container>
    </>
  );
};
