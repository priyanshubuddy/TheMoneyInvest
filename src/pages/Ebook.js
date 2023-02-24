/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Ebook = () => {
  return (
    <div className="EbookContainer">
    <title>Ebook</title>
      <Header />
      <div
        className="EbookHead"
        style={{ position: "relative", height: "200px" }}
      >
        <Image
          className="HeadImage"
          src="/images/Ebookhead.png"
          layout="fill"
          objectFit="contain"
          alt="Ebook Header"
        />
      </div>

      <h1 className="HeadText">E-Books</h1>
      <div className="EbookSection">
        <div className="BookContainer">
          <Image
            className="BookImage"
            src="/images/TheDisciplinedtrader.jpg"
            width="150"
            height="200"
          />
          <h1 className="EbookTitle">The Disciplined trader</h1>
          <button className="btn btn-success Downloadbtn">Download </button>
        </div>
        <div className="BookContainer">
          <Image
            className="BookImage"
            src="/images/TheIntelligentInvestor.jpg"
            width="150"
            height="200"
          />
          <h1 className="EbookTitle">The Intelligent Investor</h1>
          <button className="btn btn-success Downloadbtn">Download</button>
        </div>
        <div className="BookContainer">
          <Image
            className="BookImage"
            src="/images/TradingInTheZone.jpg"
            width="150"
            height="200"
          />
          <h1 className="EbookTitle">Trading In The Zone</h1>
          <button className="btn btn-success Downloadbtn">Download</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ebook;