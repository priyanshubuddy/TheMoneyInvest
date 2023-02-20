import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function Navbarmenu() {
  return (
    <Navbar
      className={styles.NavMenu}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container className={styles.navContainer}>
        <Navbar.Brand >
          <a href="/">
            <Image
              className={styles.logo}
              src="/logo.jpg"
              height="50"
              width="50"
              alt="company-logo"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className={styles.navIcons}>
            <Nav className="me-auto">
              <Nav.Link href="/News">News</Nav.Link>
              <Nav.Link href="/Ebook">Ebook</Nav.Link>{" "}
              <Nav.Link href="/Markets">Markets</Nav.Link>
              <Nav.Link href="/Blogs">Blogs</Nav.Link>{" "}
              <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/ContactUs">Contact-Us</Nav.Link>
              {/* <Nav.Link href="#AboutUs">About-Us</Nav.Link> */}
              <NavDropdown title="About-Us" id="collasible-nav-dropdown">
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
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
      <div className={styles.ButtonContainer}>
        <button className={styles.buttonlogin} href="/login">
          login
        </button>
        <button className={styles.buttonlogin} href="/Register">
          Register
        </button>
      </div>
    </Navbar>
  );
}

export default Navbarmenu;
