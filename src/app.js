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
    const [loading, setLoading] = useState(false);
  return (
    <div className="app">
      <Navbar toggle={toggleSidebar} changeToggle={useToggleSidebar} setIsLoading={setLoading} loading={loading}/>
        {!toggleSidebar && <div className="toggle-sidebar-button" onClick={()=>{
          useToggleSidebar(prevState => !prevState );
      }}><i className="fa fa-list" aria-hidden="true"></i></div>}
      <Router>
        <Home path="/" loading={loading}/>
        <About path="/about" loading={loading}/>
        <Experience path="/experience" loading={loading}/>
        <Contact path="/contact" loading={loading}/>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
