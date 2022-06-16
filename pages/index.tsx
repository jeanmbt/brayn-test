import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { authorizationOptions } from "../utils/authorizationOptions";
import { Container, TableContainer, Paper, Typography } from "@mui/material";
import { OverviewTable } from "../components/overview/OverviewTable";
import { makeAuthorizedRequest } from "../utils/makeAuthorizationRequest";
import { grey } from "@mui/material/colors";

const Home: NextPage = (props: any) => {
  const list = props.data._embedded.list_debits;
  const { page, page_count, page_size, total_items } = props.data;
  const token = props.token;

  return (
    <div>
      <Head>
        <title>Brayn Challenge</title>
        <meta name="description" content="Brayn challenge by Jean Michel Battirola" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h3" marginBottom={4}>
          Invoice Overview
        </Typography>
        <Container>
          <TableContainer
            component={Paper}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              bgcolor: grey[300],
            }}
          >
            <OverviewTable
              token={token}
              list={list}
              pageCount={page_count}
              page={page}
              count={total_items}
            />
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
  const token = await makeAuthorizedRequest();

  const getFirstData = async (token: string) => {
    try {
      console.log(token);
      const res = await fetch(`https://api.fynbill.fynbird.io/v1/invoices/debit/list`, {
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

  const data = await getFirstData(token);

  return {
    props: { data: data, token: token },
  };
};

export default Home;
