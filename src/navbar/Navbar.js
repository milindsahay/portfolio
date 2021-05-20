import React from "react";
import Navitem from "./Navitem";
import profile from "./profile.jpeg";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.toggle ? "navbar show-sidebar" : "navbar hide-sidebar" } >
        <div className="navbar-close-button" onClick={ () => this.props.changeToggle(false) }><i
            className="fa fa-times"></i> </div>
        <div className="image-container">
          <img className="profile" src={profile} />
        </div>
        <div className="links">
          <Navitem item="HOME" toLink="/" changeToggle={ this.props.changeToggle }/>
          <Navitem item="ABOUT" toLink="/about" changeToggle={ this.props.changeToggle } />
          <Navitem item="PROJECTS" toLink="/projects" changeToggle={ this.props.changeToggle } />
          <Navitem item="EXPERIENCE" toLink="/experience" changeToggle={ this.props.changeToggle } />
          <Navitem item="CONTACT" toLink="/contact" changeToggle={ this.props.changeToggle }/>
        </div>
      </div>
    );
  }
}

export default Navbar;
