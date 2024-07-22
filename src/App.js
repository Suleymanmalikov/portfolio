import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Education" element={<Education />} />
            <Route exact path="/Projects" element={<Projects />} />
            <Route exact path="/Skills" element={<Skills />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
