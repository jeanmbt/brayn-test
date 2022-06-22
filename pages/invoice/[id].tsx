import { GetServerSideProps, NextPage } from "next";
import { Container, Button, Typography, Divider, ButtonGroup, Tooltip } from "@mui/material";
import { InvoiceBillingData, InvoiceTable } from "../../components/invoice/";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { fetchFile } from "../../api/fetchFile";
import { InvoiceContainer } from "../../styles/componentStyles";
import DownloadIcon from "@mui/icons-material/Download";
import Head from "next/head";
import { makeAuthorizationRequest } from "../../api/makeAuthorizationRequest";

const Invoice: NextPage = (props: any) => {
  const invoice = props.invoice;

  return (
    <Container sx={{ padding: 2, marginBottom: 5 }}>
      <Head>
        <title>Brayn.io - Invoice #{invoice.id}</title>
        <meta name="description" content="Brayn challenge by Jean Michel Battirola" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <Typography variant="h3">
          INVOICE {invoice.billing_number ? `#${invoice.billing_number}` : `id: ${invoice.id}`}
        </Typography>
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
          DOWNLOAD INVOICE
        </Button>
      </InvoiceContainer>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

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
