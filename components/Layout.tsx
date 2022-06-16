import { Box, Toolbar } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import TopicIcon from "@mui/icons-material/Topic";

const Header = ({}) => {
  return (
    <Toolbar style={{ height: "1em", borderBottom: `0.2em solid ${blueGrey[50]}` }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          margin: 0,
        }}
      >
        <Link href="/" passHref>
          <Box
            style={{
              height: "2em",
              width: "2em",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              zIndex: 1,
            }}
          >
            <TopicIcon />
          </Box>
        </Link>
      </Box>
    </Toolbar>
  );
};

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main style={{ height: "max-content", minHeight: "80vh" }}>{children}</main>
      <footer className={styles.footer}>
        <a href="https://jeanbattirola.com" target="_blank" rel="noopener noreferrer">
          By Jean Michel Battirola
        </a>
      </footer>
    </>
  );
};

export default Layout;
