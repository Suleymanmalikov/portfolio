// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
