import React from "react";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div>

      <h1
        style={{
          height: "100%",
          color: "purple",
          borderRadius: "50px",
          border: "double black 10px",
          marginBottom: "5%",
        }}
      >
        Who Are We ?
      </h1>
      <h3 style={{ margin: "5%" }}>
        “All intelligent investing is value investing. Acquiring more that you
        are paying for. You must value the business in order to value the
        stock.” – Charlie Munger
      </h3>
      <div
        style={{
          display: "flex",
          width: "",
          margin: "10px",
          marginBottom: "5%",
          border: "2px solid black",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <h2> OUR MISSION </h2>
          <h6 style={{ width: "50%" }}>
            The Most Relevant information. 100% Privacy Protected! Find what you
            are looking for Here. Get the Best Results for Market Research
            Companies and 100% Secure. Discover us now! Easy Access To
            Information. All the Answers. Fast and trusted. Multiple sources
            combined.
          </h6>
        </div>
        <img src="https://www.themoneyinvest.com/wp-content/uploads/2022/05/19333414-300x169.jpg" />
      </div>
      <h6 style={{ margin: "5%" }}>
        Starting off as a financial portal that began by offering end-of-day
        stock prices. India’s best store of news (text and videos), analysis,
        data and tools on investing, personal finance, the business sector and
        the economy.
      </h6>

      <Footer />
    </div>
  );
}
