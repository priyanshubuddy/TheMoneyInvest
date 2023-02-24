import React from "react";
import StockdioChart from "./Stockchart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Content = () => {
  return (
    <div className="ContentDiv">
      <div>
        <h5 className="TagLine"> Your Financial Market Boss </h5>
        <h1 className="Heading">The Money Invest</h1>

        <div style={{ display: "flex" }}>
          <div className="HomeLinksDiv">
            <FontAwesomeIcon icon={solid("user")} />
            <a style={{ textDecoration: "none", marginLeft: "5px" }} href="">
              Open Demat Account{" "}
            </a>
          </div>
          <div className="HomeLinksDiv">
            <FontAwesomeIcon icon={solid("book")} />
            <a
              style={{ textDecoration: "none", marginLeft: "5px" }}
              href="./Ebook"
            >
              E-Book{" "}
            </a>
          </div>
        </div>
      </div>

      <div>
        <StockdioChart />
      </div>
    </div>
  );
};

export default Content;
