import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Blogs = () => {
  return (
    <div className="BlogContainer" style={{ backgroundColor: "#f2f3eb" }}>
      <title>Blogs</title>
      <Header />

      <div
        className="BlogHead"
        style={{ position: "relative", height: "200px" }}
      >
        <Image
          className="BlogHeadImage"
          src="/images/BlogHead.jpg"
          layout="fill"
          objectFit="contain"
          alt="Ebook Header"
        />
      </div>
      <div className="BlogContent">
        <h1>Hello</h1>
      </div>

      <Footer />
    </div>
  );
};



export default Blogs;

