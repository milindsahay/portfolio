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
        <Navitem item="HOME" />
        <Navitem item="ABOUT" />
        <Navitem item="CONTACT" />
      </div>
    );
  }
}

export default Navbar;
