/* eslint-disable react/jsx-no-undef */
import React from "react";
import NewsApp from "../components/NewsApp";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

function News() {
  return (
    <div className="NewsContainer">
      <Header />

      <div
        className="NewsHead"
        style={{ position: "relative", height: "200px" }}
      >
      <Image
        src="/images/NewsHead.jpg"
        className="HeadImage"
        alt="News-Head"
        // width="1080"
        // height="100"
        layout="fill"
        objectFit="contain"
      />
      </div>

      {/* <div class="news-container">
        <div class="quick-news-section">
          <NewsApp />
        </div>
        <div class="popular-news-section">
        <NewsApp />
        </div>
        <div class="trending-news-section">
        <NewsApp />
        </div>
      </div> */}

      <div>
        <div>
          {" "}
          <NewsApp />{" "}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default News;
