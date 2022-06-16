import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container, TableContainer, Paper, Typography } from "@mui/material";
import { OverviewTable } from "../components/overview/OverviewTable";
import { makeAuthorizationRequest } from "../utils/makeAuthorizationRequest";
import { blueGrey, grey } from "@mui/material/colors";

const Home: NextPage = (props: any) => {
  const list = props.data._embedded.list_debits;
  const { page, page_count, page_size, total_items } = props.data;

  return (
    <div>
      <Head>
        <title>Brayn Challenge</title>
        <meta name="description" content="Brayn challenge by Jean Michel Battirola" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h2" marginBottom={4}>
          Invoice overview
        </Typography>
        <Container>
          <TableContainer
            component={Paper}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              bgcolor: blueGrey[100],
            }}
          >
            <OverviewTable page={page} list={list} pageCount={page_count} count={total_items} />
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
  const token = await makeAuthorizationRequest();

  const getFirstData = async (token: string) => {
    try {
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
    props: { data: data },
  };
};

export default Home;
