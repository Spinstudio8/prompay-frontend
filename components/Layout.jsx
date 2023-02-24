import React from "react";
import Meta from "./Meta";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {/* <div className=""> */}
      <main>{children}</main>
      {/* </div> */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
