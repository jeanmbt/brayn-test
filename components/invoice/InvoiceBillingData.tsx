import { Container, Box, Typography } from "@mui/material";
import { formatDate } from "../../utils/formatDate";
import { BillingRow } from "./BillingRow";
import { BillTo } from "./BillTo";

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
          <BillTo debitor={debitor} />
        </Box>
        <Box sx={{ display: "grid", width: 200 }}>
          <BillingRow
            title="Invoice date:"
            label={invoice.receipt_date ? formatDate(invoice.receipt_date) : "not available"}
          />
          <BillingRow title="Due date:" label={invoice.due_date && formatDate(invoice.due_date)} />
          <BillingRow
            title="Open amount:"
            label={`${invoice.balance} ${invoice.foreign_currency}`}
          />
          {invoice.state === "paid" && (
            <BillingRow
              margin={1}
              label={` This invoice was paid by ${invoice.payment_method.replace("_", " ")}`}
            />
          )}
        </Box>
      </Container>
    </>
  );
};
