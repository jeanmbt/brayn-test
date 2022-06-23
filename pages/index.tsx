import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container, TableContainer, Paper, Typography } from "@mui/material";
import { OverviewTable } from "../components/overview/OverviewTable";
import { paginationStyle } from "../styles/componentStyles";
import { fetchFirstData } from "../api/fetchFirstData";

const Home: NextPage = (props: any) => {
  const errorMessage = props.data.message;
  const list = props.data?._embedded?.list_debits;
  const { page, page_count, total_items } = props.data;

  if (errorMessage) {
    return (
      <Container sx={{ textAlign: "center", marginTop: 5 }}>
        there was an error: {errorMessage}
      </Container>
    );
  }

  return (
    <div data-testid="home">
      <Head>
        <title>Brayn.io Challenge</title>
        <meta name="description" content="Brayn challenge by Jean Michel Battirola" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h2" marginBottom={4}>
          Invoices overview
        </Typography>
        <Container>
          <TableContainer component={Paper} sx={paginationStyle}>
            <OverviewTable page={page} list={list} pageCount={page_count} count={total_items} />
          </TableContainer>
        </Container>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Gets first page of invoices before rendering page
  const data = await fetchFirstData();
  return {
    props: { data: data },
  };
};

export default Home;
