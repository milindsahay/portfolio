import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineIcon from "./TimelineIcon";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import uberIcon from "../images/uber.png";
import graduationIcon from "../images/graduation.png";
import careerLauncherIcon from "../images/career-launcher.png";

const Experience = () => {
  const scrollRef = useRef(null);
  return (
    <div className="timeline-container" ref={scrollRef}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - Present"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<TimelineIcon src={uberIcon} />}
        >
          <h3 className="vertical-timeline-element-title">Uber</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineer
          </h4>
          <p>
            Building intelligent systems for the Eats Post-Delivery Experience
            team, leveraging Gen AI models and data signals to power merchant
            chargeback and refund decisions at scale.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2020 - 2024"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<TimelineIcon src="https://indiaeducationdiary.in/wp-content/uploads/2020/08/Flipkart.jpg" />}
        >
          <h3 className="vertical-timeline-element-title">Flipkart</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Developer
          </h4>
          <p>
            Worked as a part of the Fulfillment team, designing and developing
            highly scalable systems on Flipkart's cloud, facilitating the supply
            chain nationally.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2020"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<TimelineIcon src={graduationIcon} />}
        >
          <h3 className="vertical-timeline-element-title">
            Delhi College of Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Technology
          </h4>
          <p>Electronics and Communication Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2019 - Apr 2020"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<TimelineIcon src="https://i.ibb.co/0hqXpt7/centricwave.png" />}
        >
          <h3 className="vertical-timeline-element-title">
            Centricwave Infotech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Machine Learning Intern
          </h4>
          <p>
            Worked on Credit card fraud detection and Stock market prediction
            and trained various neural network architectures such as
            Encoder-Decoder network, LSTM networks, Fbprophet model.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jun 2019 - Aug 2019"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<TimelineIcon src={careerLauncherIcon} />}
        >
          <h3 className="vertical-timeline-element-title">Career Launcher</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Data Science Intern
          </h4>
          <p>
            Designed and built a real time adaptive question recommender system
            using exploratory data analysis and user based collaborative
            filtering. Trained and designed a machine learning model using the
            leads generated from user's online activities by rigorous data
            cleaning and extracting relevant features to predict future probable
            customers.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--star"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<TimelineIcon src="https://i.ibb.co/QCmPFhr/star.jpg" />}
        />
      </VerticalTimeline>
      <Footer />
      <BackToTop scrollRef={scrollRef} />
    </div>
  );
};

export default Experience;
