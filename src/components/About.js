import React, { useRef } from "react";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const About = () => {
  const scrollRef = useRef(null);
  return (
    <div className="about-container" ref={scrollRef}>
      <div className="title mb-5 title-sm">
        <span className="first-name">About </span>
        <span className="last-name">Me.</span>
      </div>
      <div className="text">
        I'm currently a Software Engineer at Uber, working on the Eats
        Post-Delivery Experience team. My work focuses on building intelligent
        systems around merchant chargebacks and refunds — leveraging Generative
        AI models and aggregating diverse signals to accurately determine the
        fairness of a chargeback. It's a fascinating intersection of machine
        learning, data-driven decision making, and real-world financial impact
        at scale.
      </div>
      <br/>
      <div className="text">
        Previously, I spent four years at Flipkart as a Software Developer,
        where I was part of the Fulfillment team. I designed and built highly
        scalable distributed systems on Flipkart's cloud infrastructure,
        powering the national supply chain and ensuring seamless order
        fulfillment for millions of customers.
      </div>
      <br/>
      <div className="text">
        Science and Technology has always been my driving force. My curiosity
        for programming led me deep into the world of Computer Science — from
        web development and distributed systems to machine learning and data
        science. I've worked extensively with C++, Python, Java, and JavaScript,
        along with tools like NumPy, Pandas, Scikit-learn, ReactJS, and Express.
        I've won Data Hack, North India's largest Data Science hackathon by
        prize money, and my team placed first runner-up at the Infineon India
        Campus Hackathon in the AI/ML track. I also occasionally write for the
        Medium publication 'Towards Data Science'.
      </div>
      <br/>
      <div className="text">
        Outside of work, I'm a fiction enthusiast and a sci-fi film fanatic.
        I play guitar in my leisure time and am always on the lookout for the
        next big challenge in technology.
      </div>
      <Footer />
      <BackToTop scrollRef={scrollRef} />
    </div>
  );
};

export default About;
