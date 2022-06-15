import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { authorizationOptions } from "../../utils/authorizationOptions";
import { Container, Button, Typography, Divider } from "@mui/material";
import { InvoiceBillingData } from "../../components/invoice/InvoiceBillingData";
import { InvoiceTable } from "../../components/invoice/InvoiceTable";
import { grey } from "@mui/material/colors";

const Invoice: NextPage = (props: any) => {
  const invoice = props.result;

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
      >
        <Typography variant="h3">INVOICE #{invoice.billing_number}</Typography>
        <InvoiceBillingData invoice={invoice} />
        <Divider sx={{ width: "100%" }} />
        <InvoiceTable invoice={invoice} />
      </Container>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  // Authorizes API call with oAuth
  const buildAuthorizedOptions = await fetch(
    "https://api.fynbill.fynbird.io/oauth",
    authorizationOptions
  )
    .then(async (response) => {
      const authorizationData = await response.json();
      // Returns Promise with error if no response
      if (!response.ok) {
        const error = (authorizationData && authorizationData.message) || response.status;
        return Promise.reject(error);
      }

      const fetchOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorizationData.access_token}`,
        },
      };

      return fetchOptions;
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });

  // Avoids passing empty fetchOptions when fetching data
  const options: any = buildAuthorizedOptions && buildAuthorizedOptions;

  //Fetches Invoice
  const fetchedResults = fetch(
    `https://api.fynbill.fynbird.io/v1/invoices/debit/list/${id}`,
    options
  )
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      } else {
        return JSON.parse(JSON.stringify(data));
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });

  const result = await fetchedResults;
  return {
    props: { result },
  };
};

export default Invoice;
