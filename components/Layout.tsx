import { Box, Toolbar } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import TopicIcon from "@mui/icons-material/Topic";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Header } from "./layout/Header";
import React, { ReactElement } from "react";
import { Footer } from "./layout/Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main style={{ height: "max-content", minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
