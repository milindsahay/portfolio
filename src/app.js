import React, {useState} from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Navbar from "./navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";

const App = () => {
    const [toggleSidebar, useToggleSidebar] = useState(false);
  return (
    <div className="app">
      <Navbar toggle={toggleSidebar} changeToggle={useToggleSidebar}/>
        {!toggleSidebar && <div className="toggle-sidebar-button" onClick={()=>{
          useToggleSidebar(prevState => !prevState );
      }}><i className="fa fa-list" aria-hidden="true"></i></div>}
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Skills path="/skills" />
        <Projects path="/projects" />
        <Experience path="/experience" />
        <Achievements path="/achievements" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
