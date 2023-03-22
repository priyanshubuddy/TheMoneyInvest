import React from "react";
import Footer from "../../components/Footer";

const Disclaimer = () => {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <img
          src="/images/DisclaimerImg.jpg"
          style={{
            borderRadius: "30px",
            border: "2px solid black",
            padding: "10px",
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Disclaimer;
