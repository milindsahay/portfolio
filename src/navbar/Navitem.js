import React from "react";
import { Link } from "@reach/router";

class Navitem extends React.Component {
  render() {
    return (
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="navitem">{this.props.item}</div>
      </Link>
    );
  }
}

export default Navitem;
