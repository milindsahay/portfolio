import React, { useRef } from "react";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const Achievements = () => {
    const scrollRef = useRef(null);
    const achievements = [
        {
            icon: "fa fa-trophy",
            title: "Data Hack — Winner",
            description: "Won North India's largest Data Science hackathon by prize money, competing against teams from top engineering colleges across the region."
        },
        {
            icon: "fa fa-trophy",
            title: "Infineon India Campus Hackathon — First Runner-up",
            description: "Secured first runner-up position in the AI/ML track at the Infineon India Campus Hackathon held in Bengaluru."
        },
        {
            icon: "fa fa-pencil",
            title: "Towards Data Science — Writer",
            description: "Published articles on machine learning and data science for the Medium publication 'Towards Data Science', reaching a global audience of data practitioners."
        }
    ];

    return (
        <div className="achievements-container" ref={scrollRef}>
            <div className="title mb-5 title-sm">
                <span className="first-name">Achieve</span>
                <span className="last-name">ments.</span>
            </div>
            {achievements.map((item, i) => (
                <div className="achievement-card" key={i}>
                    <div className="achievement-icon">
                        <i className={item.icon}></i>
                    </div>
                    <div className="achievement-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
            <Footer />
            <BackToTop scrollRef={scrollRef} />
        </div>
    );
};

export default Achievements;
