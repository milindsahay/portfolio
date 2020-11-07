import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "./Social";

const Home = () => {
  return (
    <div className="container my-container">
      <div className="name">
        <span className="first-name">MILIND </span>
        <span className="last-name">SAHAY.</span>
      </div>
      <ReactTypingEffect
        className="type"
        text={[
          "Software Engineer",
          "Delhi College Of Engineering",
          "Batch of 2020",
          "Occasional Time Traveller",
        ]}
        speed={50}
        eraseSpeed={50}
        eraseDelay={1400}
      />
      <div className="description">
        I am a Software Developer, currently working at Flipkart. Being someone
        observing the technological world closely, i believe there are a million
        things to learn in terms of technology and life skills in general.
      </div>
      <Social />
    </div>
  );
};

export default Home;
