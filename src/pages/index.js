import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import Polling from "../components/PollingSection";


const Home = () => (
  <div>
    <Head>
      <title>TheMoneyInvest</title>
    </Head>
      <div className="App" id="outer-container">
    <div>
    <Header />
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">

        <Polling />
      <Content />
      </div>
    </div>
    </div>
    <Footer />
  </div>
);

export default Home;
