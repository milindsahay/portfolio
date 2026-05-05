import React from "react";
import { Link, Match } from "@reach/router";

const Navitem = ({ item, toLink, changeToggle }) => {
  return (
    <Match path={toLink}>
      {({ match }) => (
        <Link to={toLink} style={{ textDecoration: "none" }}>
          <div
            className={match ? "navitem navitem-active" : "navitem"}
            onClick={() => changeToggle(false)}
          >
            {item}
          </div>
        </Link>
      )}
    </Match>
  );
};

export default Navitem;
