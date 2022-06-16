import { GetServerSideProps, NextPage } from "next";
import { Container, Button, Typography, Divider, Paper } from "@mui/material";
import { InvoiceBillingData } from "../../components/invoice/InvoiceBillingData";
import { InvoiceTable } from "../../components/invoice/InvoiceTable";
import { grey } from "@mui/material/colors";
import { makeAuthorizationRequest } from "../../utils/makeAuthorizationRequest";

const Invoice: NextPage = (props: any) => {
  const invoice = props.invoice;
  const file = props.file;

  console.log(file);

  const handleDownloadClick = () => {
    return file;
  };

  return (
    <Container sx={{ padding: 2 }}>
      <Button variant="contained" href="/" sx={{ marginY: 1 }}>
        back to overview
      </Button>

      <Container
        sx={{
          padding: 10,
          border: `1px solid ${grey[200]}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component={Paper}
      >
        <Typography variant="h3">INVOICE #{invoice.billing_number}</Typography>
        <InvoiceBillingData invoice={invoice} />
        <Divider sx={{ width: "100%" }} />
        <InvoiceTable invoice={invoice} />
        <Button sx={{ marginTop: 3 }} onClick={handleDownloadClick}>
          Download invoice
        </Button>
      </Container>
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

  const fetchFile = async (token: string) => {
    try {
      const token = await makeAuthorizationRequest();
      const res = await fetch(invoice.file.file_url, {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename=${invoice.file.filename}`,
          Authorization: `Bearer ${token}`,
          encoding: "binary",
          responseType: "blob",
        },
      });

      return res;
    } catch (e) {
      console.error(e);
    }
  };
  const file = await fetchFile(token);
  console.log(file);

  return {
    props: { invoice },
  };
};

export default Invoice;
