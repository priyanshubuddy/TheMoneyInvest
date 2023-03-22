import React, { useState, useEffect } from "react";
// import TradingViewWidget from "react-tradingview-widget";
// import {TickerTape} from "react-ts-tradingview-widgets";


const Markets = () => {
  return (
    <>
      <div>
        <h1 className="HeadText"> Market Data </h1>
        <p>You can find all the information about Market here !</p>
      </div>
      {/* <div>
        <TickerTape colorTheme="dark"></TickerTape>
      </div>
      <div className="AppContainer">
        <TradingViewWidget
          symbols={[
            { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
            { proName: "FOREXCOM:NSXUSD", title: "US 100" },
            { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
            { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
            { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
          ]}
          colorTheme="light"
          isTransparent={false}
          displayMode="adaptive"
          locale="in"
        />
      </div> */}
    </>
  );
};


export default Markets;
