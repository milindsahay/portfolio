import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "./Social";

const Home = () => {
  return (
    <div className="home-container">
      <div className="title mb-2">
        <span className="first-name">MILIND </span>
        <span className="last-name">SAHAY.</span>
      </div>
      <ReactTypingEffect
        className="type"
        text={[
          "Software Engineer",
          "Web Developer",
          "Machine Learning Enthusiast",
          "Delhi College of Engineering",
        ]}
        speed={50}
        eraseSpeed={50}
        eraseDelay={1400}
      />
      <div className="description">
        I am a Software Engineer currently working at Uber, previously at
        Flipkart. Building scalable and performant systems is what I strive
        for. Always looking forward to new challenges when it comes to
        technology.
      </div>
      <Social />
    </div>
  );
};

export default Home;
