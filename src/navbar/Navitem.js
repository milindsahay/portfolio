import React from "react";
import { Link } from "@reach/router";

class Navitem extends React.Component {
  render() {
    return (
      <Link to={this.props.toLink} style={{ textDecoration: "none" }}>
        <div className="navitem" onClick={ () => {
          this.props.changeToggle(false);
        }}>{ this.props.item }</div>
      </Link>
    );
  }
}

export default Navitem;
