import { GetServerSideProps, NextPage } from "next";
import { Container, Button, Typography, Divider, ButtonGroup, Tooltip } from "@mui/material";
import { InvoiceBillingData, InvoiceTable } from "../../components/invoice/";
import { makeAuthorizationRequest } from "../../utils/makeAuthorizationRequest";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { fetchFile } from "../../utils/fetchFile";
import { InvoiceContainer } from "../../styles/componentStyles";
import DownloadIcon from "@mui/icons-material/Download";

const Invoice: NextPage = (props: any) => {
  const invoice = props.invoice;

  return (
    <Container sx={{ padding: 2, marginBottom: 5 }}>
      <ButtonGroup variant="text" aria-label="outlined button group">
        <Tooltip title="Back to invoice overview">
          <Button href="/">
            <ArrowBackIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Download invoice">
          <Button
            onClick={() => {
              fetchFile(invoice);
            }}
          >
            <DownloadIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>

      <InvoiceContainer>
        <Typography variant="h3">INVOICE #{invoice.id}</Typography>
        <InvoiceBillingData invoice={invoice} />
        <Divider sx={{ width: "100%" }} />
        <InvoiceTable invoice={invoice} />
        <Button
          sx={{ marginY: 4 }}
          variant="contained"
          onClick={() => {
            fetchFile(invoice);
          }}
        >
          Download invoice
        </Button>
      </InvoiceContainer>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  // Authorizes API call with oAuth
  const token = await makeAuthorizationRequest();

  const getInvoice = async () => {
    const token = await makeAuthorizationRequest();
    try {
      const res = await fetch(`https://api.fynbill.fynbird.io/v1/invoices/debit/list/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  const invoice = await getInvoice();

  return {
    props: { invoice },
  };
};

export default Invoice;
