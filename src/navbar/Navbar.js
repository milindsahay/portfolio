import React from "react";
import Navitem from "./Navitem";
import profile from "./profile.jpeg";
class Navbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navbar">
        <div className="image-container">
          <img className="profile" src={profile} />
        </div>
        <div className="links">
          <Navitem item="HOME" toLink="/" />
          <Navitem item="ABOUT" toLink="/about" />
          <Navitem item="EXPERIENCE" toLink="/experience" />
          <Navitem item="CONTACT" toLink="/contact" />
        </div>
      </div>
    );
  }
}

export default Navbar;
