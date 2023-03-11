/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
  duotone,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import Sidebar from "./Sidebar";

function Navbarmenu() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Navbar className="NavMenu" expand="lg" variant="light">
      <Nav className="NavDiv" style={{ width: "100%" }}>
        <div className="NavItemDiv d-flex">
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
          <a className="NavItems" href="/AboutUs">
            About-Us
          </a>
          <a className="NavItems" href="/ContactUs">
            Contact-Us
          </a>
        </div>
      </Nav>
      <div className="IconPack">
      <div class="container-2">
        <FontAwesomeIcon
          className="Icons icon"
          icon={solid("magnifying-glass")}
        />
        <input type="search" id="search" placeholder="Search..." />
        </div>
        <FontAwesomeIcon className="Icons NavBell" icon={solid("bell")} />
      </div>
    </Navbar>
  );
}

export default Navbarmenu;
