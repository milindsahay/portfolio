import React, {useState} from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Navbar from "./navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

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
        <Experience path="/experience" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
