/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon, duotone } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function Navbarmenu() {
  return (
    <div className="NavbarContainer">
      <Navbar className={styles.NavMenu} expand="lg" bg="light" variant="light">
      
        <Container className={styles.navContainer}>
           {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.NavItems} href="/">
                Home
              </Nav.Link>
              <Nav.Link className={styles.NavItems} href="/News">
                News
              </Nav.Link>
              <Nav.Link className={styles.NavItems} href="/Ebook">
                Ebook
              </Nav.Link>
              <Nav.Link className={styles.NavItems} href="/Markets">
                Markets
              </Nav.Link>
              <Nav.Link className={styles.NavItems} href="/Blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className={styles.NavItems} href="/Portfolio">
                Portfolio
              </Nav.Link>
              <NavDropdown
                className={styles.NavItems}
                title="About-Us"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className={styles.NavItems} href="/ContactUs">
                Contact-Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
          {/* <FontAwesomeIcon className={styles.Icons} icon={solid("bar")} /> */}
          <FontAwesomeIcon className={styles.Icons} icon={solid("bars")} />

          <Nav
            className="NavDiv justify-content-center"
            style={{ width: "100%" }}
          >
            <div className="d-flex">
              <Nav.Link className={styles.NavItems} href="/">
                Home
              </Nav.Link>
              <Nav.Link className={styles.NavItems} href="/News">
                News
              </Nav.Link>
              <Nav.Link className={styles.NavItems} href="/Ebook">
                Ebook
              </Nav.Link>
              <Nav.Link className={styles.NavItems} href="/Markets">
                Markets
              </Nav.Link>
              <Nav.Link className={styles.NavItems} href="/Blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className={styles.NavItems} href="/Portfolio">
                Portfolio
              </Nav.Link>
            </div>
            <div className={styles.ButtonContainer}>
              {/* <button className={styles.buttonlogin} href="/login">
                login
              </button>
              <button className={styles.buttonlogin} href="/Register">
                Register
              </button> */}
            </div>
          </Nav>
        </Container>
        <FontAwesomeIcon
          className={styles.Icons}
          icon={solid("magnifying-glass")}
        />
        <FontAwesomeIcon className={styles.Icons} icon={solid("bell")} />
      </Navbar>
    </div>
  );
}

export default Navbarmenu;
