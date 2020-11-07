import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Navbar from "./navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Experience path="/experience" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
