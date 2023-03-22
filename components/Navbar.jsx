/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

function Navbarmenu() {
  return (
    <Navbar className="NavMenu" expand="lg" variant="light">
      <div className="NavItemDiv">
        <a className="NavItems" href="/">
          Home
        </a>
        <a className="NavItems" href="/News">
          News
        </a>
        <a className="NavItems" href="/Ebook">
          Ebook
        </a>
        <a className="NavItems" href="/Markets">
          Markets
        </a>
        <a className="NavItems" href="/Blogs">
          Blogs
        </a>
        <a className="NavItems" href="/Portfolio">
          Portfolio
        </a>
        <div class="dropdown">
          <a class="NavItems Ext" href="/AboutUs">
            About-Us
          </a>
          <div class="dropdown-content">
            <a href="/PrivacyPolicy">Privacy Policy</a>
            <a href="/TermAndConditions">Term & Conditions</a>
            <a href="/Disclaimer">Disclaimer</a>
          </div>
        </div>
        <a className="NavItems Ext" href="/ContactUs">
          Contact-Us
        </a>
      </div>
      <div className="IconPack mr-5">
        <div class="container-2">
          <FontAwesomeIcon className="Icons icon" icon={faSearch} />
          <input type="search" id="search" placeholder="Search..." />
        </div>
        <FontAwesomeIcon className="Icon" icon={faBell} />
      </div>
    </Navbar>
  );
}

export default Navbarmenu;
