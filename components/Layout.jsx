import React from "react";
import Head from "next/head";
import { Footer, Navbar } from "../components";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Olivra</title>
        {/* You can also use a .png or .svg icon */}
        <link rel="icon" href="/olivra.png" type="image/png" sizes="192x192" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
