// src/components/Home.js
import React from "react";
import "./Home.css"; // We'll create this file next
import gifImage from "../assets/5TMy.gif";

const Home = () => {
  return (
    <div className="home" id="home">
      <h1>Welcome to my portfolio!</h1>
      <p>
        I'm a software engineer with a passion for creating and building things.
        I love working with JavaScript and React, but I'm always looking to
        learn new languages and frameworks.
      </p>
    </div>
  );
};

export default Home;
