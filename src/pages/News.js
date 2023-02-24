/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const news = () => {
  return (
    <div className="NewsContainer">
      <Header />

      <div
        className="NewsHead"
        style={{ position: "relative", height: "200px" }}
      >
        <Image
          className="HeadImage"
          src="/images/NewsHead.jpg"
          layout="fill"
          objectFit="contain"
          alt="Ebook Header"
        />
      </div>

      <div className="NewsDiv">
        <div className="NewsSections">
          <h3>Quick News</h3>
          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
        </div>

        <div className="NewsSections PopularNews">
          <h1>Popular News</h1>

          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
        </div>
        <div className="NewsSections">
          <h1>Trending News</h1>

          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
          <div className="NewsItem">
            <img src="./images/NewsEx.jpg" alt="News"></img>
            <div className="NewsText">
              <a>Kaine: Trump Jr. may have committed treason</a>
              <a>NEWS</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default news