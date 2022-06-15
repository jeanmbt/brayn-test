import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { authorizationOptions } from "../utils/authorizationOptions";
import { Container, TableContainer, Paper, Typography } from "@mui/material";
import { OverviewTable } from "../components/OverviewTable";

const Home: NextPage = (props: any) => {
  const list = props.result._embedded.list_debits;
  const { page, page_count, page_size, totalItems } = props.result;
  const { first, last, next, self, previous } = props.result._links;

  return (
    <div>
      <Head>
        <title>Brayn Challenge</title>
        <meta name="description" content="Brayn challenge by Jean Michel Battirola" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h3" marginBottom={2}>
          Overview
        </Typography>
        <Container>
          <TableContainer component={Paper}>
            <OverviewTable list={list} />
          </TableContainer>
        </Container>
      </main>

      <footer className={styles.footer}>
        <a href="https://jeanbattirola.com" target="_blank" rel="noopener noreferrer">
          By Jean Michel Battirola
        </a>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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

  //Fetches List of results
  const fetchedResults = fetch("https://api.fynbill.fynbird.io/v1/invoices/debit/list", options)
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

export default Home;
