import React from "react";
import StockdioChart from "./Stockchart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import Polling from "./PollingSection";
import Image from "next/image";

const Content = () => {
  return (
    <div className="MainDataDiv">
      <div className="ContentDiv">
        <h5 className="TagLine"> YOUR FINANACIAL MARKET BOSS </h5>
        <h1 className="Heading" style={{ textAlign: "start" }}>
          The Money Invest
        </h1>

        <div style={{ display: "flex", fontWeight: "700" }}>
          <div className="HomeLinksDiv">
            {/* <FontAwesomeIcon icon={solid("user")} />
             */}
            <Image
              className="logoimage"
              src="/images/StockPhone.png"
              height="40"
              width="40"
              alt="StockAccount"
            />
            <a
              className="Headlink"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "5px",
              }}
              href="https://zerodha.com/open-account?c=AL3820"
            >
              Open Demat Account{" "}
            </a>
          </div>
          <div className="HomeLinksDiv">
            <Image
              className="logoimage"
              src="/images/EbookLogo.png"
              height="40"
              width="40"
              alt="StockAccount"
            />

            <a
              className="Headlink"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "5px",
              }}
              href="./Ebook"
            >
              E-Book{" "}
            </a>
          </div>
        </div>
      </div>
        <div style={{ display: "flex" , margin: "0 70px 0 70px"}}>
          <div>
            <div
              className="PollContainer"
              style={{
                width: "100%",
                backgroundImage: "url('./images/QuizBg.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h1>Market Sentiments</h1>
              <Polling />
              <div className="MStext">
                <a href="">Learn More</a> about Market Status{" "}
              </div>
            </div>

            <div className="DivChart" style={{ width: "100%" }}>
              <h1>Market Data</h1>
              <StockdioChart />
            </div>
          </div>
          <div
            className="NewsBlock"
            style={{
              backgroundColor: "white",
              border: '1px solid',
              width: "330px",
              height: "400px",
              marginLeft: "10%",
            }}
          >
          <h1>Latest Posts</h1>

          </div>
        </div>
    </div>
  );
};

export default Content;
