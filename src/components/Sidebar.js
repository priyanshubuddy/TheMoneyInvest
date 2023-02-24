/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
// import { bubble as Menu } from "react-burger-menu";
// import { elastic as Menu } from "react-burger-menu";



function Sidebar () {
  return (
    <div>
      <Menu>
        <Link className="menu-item" href="/">
          Home
        </Link>
        <Link className="menu-item" href="/News">
          News
        </Link>
        <Link className="menu-item" href="/Ebook">
          Ebook
        </Link>
        <Link className="menu-item" href="/Markets">
          Markets
        </Link>
        <Link className="menu-item" href="/Blogs">
          Blogs
        </Link>
        <Link className="menu-item" href="/Portfolio">
          Portfolio
        </Link>
      </Menu>
    </div>
  );
};

export default Sidebar;