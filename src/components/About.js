// src/components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="title">About Me</h2>
        <div className="para">
          <h3>
            Hello! My name is <strong>Suleymanguly Malikov</strong>, and I am an
            aspiring <strong>software developer</strong> currently based in
            Wroclaw, Poland. I am pursuing a
            <strong>Bachelor of Science in Applied Computer Science</strong> at
            the <strong>Wroclaw University of Science and Technology</strong>,
            where I maintain an impressive <strong>CGPA of 4.48</strong>.
          </h3>
          <h3>
            I am proficient in a variety of{" "}
            <strong>programming languages and frameworks</strong> including
            <strong>
              {" "}
              Java, JavaScript, React.js, Bootstrap, Spring, Git, HTML, CSS, and
              SASS(SCSS)
            </strong>
            . My passion for coding extends beyond academics, as I enjoy solving
            coding problems on platforms like <strong>
              Hackerrank
            </strong> and <strong>Leetcode</strong>, constantly challenging
            myself to improve and innovate.
          </h3>
          <h3>
            Fluent in <strong>Turkmen, English, and Turkish</strong>, I thrive
            in multicultural environments and enjoy collaborating with peers
            from diverse backgrounds. My commitment to learning and development
            is reflected in my academic achievements and the successful projects
            I have undertaken.
          </h3>
          <h3>
            Feel free to connect with me on{" "}
            <strong>
              <a href="https://www.linkedin.com/in/suleymanguly-malikov/">
                Linkedin
              </a>
            </strong>
            . I am always excited to engage in meaningful projects and
            discussions in the realm of software development. Thank you for
            visiting my personal website!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
