import React, { useRef } from "react";
import Social from "./Social";
import ContactForm from "./ContactUs";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const Contact = () => {
  const scrollRef = useRef(null);
  return (
    <div className="contact-container" ref={scrollRef}>
      <div className="title mb-3 title-sm">
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
      <Footer />
      <BackToTop scrollRef={scrollRef} />
    </div>
  );
};

export default Contact;
