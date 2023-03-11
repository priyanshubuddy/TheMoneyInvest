import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {solid,regular,brands,icon,duotone,} from "@fortawesome/fontawesome-svg-core/import.macro";


const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="PhoneHead">
        <div>
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
        </div>
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
        <div className="BellIconDiv">
        <a href="" style={{textDecoration: "none" , color: "black"}}>
        <FontAwesomeIcon className="Icons BellIcon" icon={solid("bell")} />
        </a>
        </div>
      </div>
      <Navbar />
    </div>
  );
}


export default Header;
