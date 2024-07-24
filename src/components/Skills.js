import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiVisualstudiocode,
  SiIntellijidea,
  SiPostman,
  SiMysql,
  SiSpring,
} from "react-icons/si";
import "../components/Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <h2 className="title">Skills</h2>
        <div className="category">
          <h2 className="sub-title">Languages</h2>
          <ul className="icons">
            <li>
              <IoLogoJavascript className="icon" />
              <p className="icon-name">JavaScript</p>
            </li>
            <li>
              <FaJava className="icon" />
              <p className="icon-name">Java</p>
            </li>
          </ul>
        </div>
        <div className="category">
          <h2 className="sub-title">Libraries & Frameworks</h2>
          <ul className="icons">
            <li>
              <RiReactjsFill className="icon" />
              <p className="icon-name">React.js</p>
            </li>
            <li>
              <FaHtml5 className="icon" />
              <p className="icon-name">HTML</p>
            </li>
            <li>
              <FaCss3 className="icon" />
              <p className="icon-name">CSS</p>
            </li>
            <li>
              <FaSass className="icon" />
              <p className="icon-name">Sass</p>
            </li>
            <li>
              <FaBootstrap className="icon" />
              <p className="icon-name">Bootstrap</p>
            </li>
            <li>
              <SiSpring className="icon" />
              <p className="icon-name">Spring</p>
            </li>
          </ul>
        </div>
        <div className="category">
          <h2 className="sub-title">Tools & Platforms</h2>
          <ul className="icons">
            <li>
              <FaGitAlt className="icon" />
              <p className="icon-name">Git</p>
            </li>
            <li>
              <FaGithub className="icon" />
              <p className="icon-name">GitHub</p>
            </li>
            <li>
              <SiPostman className="icon" />
              <p className="icon-name">Postman</p>
            </li>
            <li>
              <SiMysql className="icon" />
              <p className="icon-name">MySQL</p>
            </li>
            <li>
              <SiVisualstudiocode className="icon" />
              <p className="icon-name">VS Code</p>
            </li>
            <li>
              <SiIntellijidea className="icon" />
              <p className="icon-name">IntelliJ IDEA</p>
            </li>
            <li>
              <FaNpm className="icon" />
              <p className="icon-name">npm</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
