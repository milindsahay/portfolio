import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlipkartLogo from "./logos/FlipkartLogo";
import DtuLogo from "./logos/DtuLogo";
import CentricwaveLogo from "./logos/CentricwaveLogo";
import CareerLauncherLogo from "./logos/CareerLauncherLogo";
import StarLogo from "./logos/StarLogo";

const Experience = () => {
  return (
    <div className="timeline-container">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2020 - Present"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<FlipkartLogo />}
        >
          <h3 className="vertical-timeline-element-title">Flipkart</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Developer
          </h4>
          <p>
            Working as a part of the Fulfillment team, designing and developing
            highly scalable systems on Flipkart's cloud, facilitating the supply
            chain nationally.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2020"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<DtuLogo />}
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
          icon={<CentricwaveLogo />}
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
          icon={<CareerLauncherLogo />}
        >
          <h3 className="vertical-timeline-element-title">Career Launcher</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Data Science Intern
          </h4>
          <p>
            Designed and built a real time adaptive question recommender system
            using exploratory data analysis and user based collaborative
            filtering.Trained and designed a machine learning model using the
            leads generated from user's online activities by rigorous data
            cleaning and extracting relevant features to predict future probable
            customers.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarLogo />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
