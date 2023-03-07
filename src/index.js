import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Heading";
import Subheader from "./Subheader";
import RightSideBar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header classname={styles.header} />
    <Subheader classname={styles.subheader} />
    <RightSideBar />
    <LeftSideBar />
    <Footer classname={footer} />
  </div>
);

reportWebVitals();
