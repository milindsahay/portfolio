import React from "react";
import { render } from "react-dom";
import Navbar from "./navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Router } from "@reach/router";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
