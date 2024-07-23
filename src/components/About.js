// src/components/About.js
import React from "react";
import "./About.css"; // We'll create this file next

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm [Your Name], a software engineer with a passion for
              building web applications. I specialize in [Your Specializations].
            </p>
            <p>
              With a background in [Your Background or Experience], I enjoy
              tackling complex problems and delivering clean, efficient code. I
              am always eager to learn new technologies and improve my skills.
            </p>
            <p>Here are a few of the technologies I work with:</p>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Others...</li>
            </ul>
          </div>
          <div className="about-image">
            <img src="/path/to/your/image.jpg" alt="About Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
