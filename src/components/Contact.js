import React from "react";
import Social from "./Social";

const Contact = () => {
  return (
    <div className="my-container">
      <div className="name">
        <span className="first-name">Contact </span>{" "}
        <span className="last-name">Me.</span>
      </div>
      <div className="text">
        Let's work together? Or possibly discuss some fictional endings to Game
        of Thrones?
      </div>
      <div className="text">Drop me a message!</div>
      <div className="row form">
        <div className="col-8">
          <textarea className="form-control" rows="10"></textarea>
        </div>
        <div className="col-4 button-container">
          <button className="align-middle button btn btn-danger">
            Send message!
          </button>
        </div>
      </div>
      <div className="text mt-5 mb-2">
        We can connect over other platforms as well!
      </div>
      <Social />
    </div>
  );
};

export default Contact;
