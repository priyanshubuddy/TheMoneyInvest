import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";


const Header = () => {
  return (
    <div className="HeaderContainer">
      <Link href="/" style={{ textDecoration: "none" }}>
        <div className="headerBox">
          <Image
            className="logoimage"
            src="/images/TMI-Logo.png"
            height="100"
            width="100"
            alt="company-logo"
          />
          <div>
            <h1 className="headingText"> The Money Invest </h1>
          </div>
          
        </div>
      </Link>
      <Navbar />
    </div>
  );
}


export default Header;
