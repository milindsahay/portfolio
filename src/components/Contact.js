import React from "react";
import Social from "./Social";
import ContactForm from "./ContactUs";

const Contact = () => {
  return (
    <div className="about-container">
      <div className="name">
        <span className="first-name">Contact </span>
        <span className="last-name">Me.</span>
      </div>
      <div className="text">
        Let's work together? Or possibly discuss some fictional endings to Game
        of Thrones?
      </div>
      <div className="text mb-3">Drop me a message!</div>
      <ContactForm />
      <div className="text mt-5 mb-2">
        We can connect over other platforms as well!
      </div>
      <Social />
    </div>
  );
};

export default Contact;
