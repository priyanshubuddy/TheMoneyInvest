import React from "react";
import StockdioChart from "./Stockchart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
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
      <div
        className="PollContainer"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/website-faq-section-user-help-desk-customer-support-frequently-asked-questions-problem-solution-quiz-game-confused-man-cartoon-character_335657-1602.jpg?w=740&t=st=1678167598~exp=1678168198~hmac=3fbf3bad46444b80aa6d94e01ea3884fde411b2c5e32e94168d40e82551a388e)",
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

      <div className="DivChart">
        <h1>Market Data</h1>
        <StockdioChart />
      </div>
    </div>
  );
};

export default Content;
