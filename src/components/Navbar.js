import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>SULEYMANGULY MALIKOV</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/education">Education</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/About">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
