import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Home = () => (
  <div>
    <Head>
      <title>TheMoneyInvest</title>
    </Head>
    <Header />
    <div>
    <h1> Content </h1>
    </div>
    <Footer />
  </div>
);

export default Home;
