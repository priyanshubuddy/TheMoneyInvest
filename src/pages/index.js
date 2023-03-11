import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Polling from "../components/PollingSection";
import Sidebar from "../components/Sidebar";


const Home = () => (
  <div>
    <Head>
      <title>TheMoneyInvest</title>
    </Head>
      <div className="App" id="outer-container">
    <div>
    <Header />
        <div id="page-wrap">
      <Content />
      </div>
    </div>
    </div>
    <Footer />
  </div>
);

export default Home;
