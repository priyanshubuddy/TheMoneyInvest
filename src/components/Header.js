import React from "react";
import Navbar from "./Navbar";
import styles from "./header.module.css";


const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        {/* <img
          src={logo}
          className="companylogo"
          alt="logo"
          width="100px"
          height="100px"
        /> */}
        <div>
        <h1> The Money Invest </h1>
        </div>
      </div>
      <Navbar />
    </div>
  );
}


export default Header;
