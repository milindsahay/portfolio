import React from "react";
import SocialIcon from "./SocialIcon";
const Social = () => {
  return (
    <div className="social">
      <SocialIcon
        tolink="https://github.com/milindsahay"
        icon="fa fa-github icon"
      />
      <SocialIcon
        tolink="https://www.linkedin.com/in/milindsahay/"
        icon="fa fa-linkedin icon"
      />
      <SocialIcon
        tolink="https://medium.com/@milind_sahay"
        icon="fa fa-medium icon"
      />
      <SocialIcon
        tolink="https://www.instagram.com/milindsahay/"
        icon="fa fa-instagram icon"
      />
    </div>
  );
};
export default Social;
