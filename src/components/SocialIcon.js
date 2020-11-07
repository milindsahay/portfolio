import React from "react";

const SocialIcon = (props) => {
  return (
    <a href={props.tolink} target="_blank">
      <div className="icon-box">
        <i className={props.icon}></i>
      </div>
    </a>
  );
};
export default SocialIcon;
