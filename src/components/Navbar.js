// Navbar.js
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import ContactDropdown from "./Contactdropdown";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navcontainer">
        <div className="logo">
        <Image src="/logo.jpg" height="50" width="50" href="/" alt="company-logo" />
        </div>
    <div>
        <nav className={styles.navbar}>
          <Link href="/">Home</Link>
          <Link href="/News">News</Link>
          <Link href="/Ebook">E-Book</Link>
          <Link href="/Markets">Markets</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Portfolio">Portfolio</Link>
          <Link href="/Contact">Contact-us</Link>
          <Link href="/Register">Register</Link>
          <Link href="/Login">Login</Link>

          {/* <div className="dropdown">
            <button className="dropbtn" onClick={handleDropdown}>
              Dropdown ▼
            </button>
            {showDropdown && (
              <div className="dropdown-content">
                <Link href="#">Link 1</Link>
                <Link href="#">Link 2</Link>
                <Link href="#">Link 3</Link>
              </div>
            )}
          </div> */}
        </nav>
      
    </div>

    </div>
  );
};

export default Navbar;