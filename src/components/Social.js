import React from "react";

const Social = () => {
  return (
    <div className="social">
      <a href="https://github.com/milindsahay" target="_blank">
        {" "}
        <div className="icon-box">
          <i className="fa fa-github icon"></i>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/milindsahay/" target="_blank">
        <div className="icon-box">
          <i className="fa fa-linkedin icon"></i>
        </div>
      </a>
      <a href="https://medium.com/@milind_sahay" target="_blank">
        {" "}
        <div className="icon-box">
          <i className="fa fa-medium icon"></i>
        </div>
      </a>
      <a href="https://www.instagram.com/milindsahay/" target="_blank">
        <div className="icon-box">
          <i className="fa fa-instagram icon"></i>
        </div>
      </a>
    </div>
  );
};
export default Social;
