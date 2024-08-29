import React from "react";
import "./Home.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <p>Hi there, I'm</p>
        <h1 style={{ display: "none" }}>
          Suleymanguly Malikov | Applied CS Student & Front-End Developer
        </h1>
        <h1 className="name">Suleymanguly Malikov.</h1>
        <h2 className="job">
          I am a <span>Front-end Developer</span> with a passion for creating
          interactive and dynamic web applications.
        </h2>
        <ul className="icons">
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/suleymanguly-malikov/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="github">
            <a href="https://github.com/Suleymanmalikov" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li className="instagram">
            <a
              href="https://www.instagram.com/malikov.suleyman/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="leetcode">
            <a href="https://leetcode.com/u/suleymanmalikov03/" target="_blank">
              <SiLeetcode />
            </a>
          </li>
          <li className="hackerrank">
            <a
              href="https://www.hackerrank.com/profile/suleymanmalikov1"
              target="_blank"
            >
              <SiHackerrank />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
