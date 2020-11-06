import React from "react";
import { render } from "react-dom";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
