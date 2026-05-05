import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import aiImg from "../images/ai.png";
import securityImg from "../images/security.png";
import chartImg from "../images/chart.png";
import reactImg from "../images/react.png";
import petImg from "../images/pet.png";
import jsImg from "../images/javascript.png";

const Projects = () => {
    const scrollRef = useRef(null);
    const projects = [
        {
            name: "Neural Style Transfer",
            content: "A deep learning model using transfer learning to take two images — a content image and a style reference image and blend them together so that the output converges to be a mixture of two.",
            image: aiImg,
            link: "https://github.com/milindsahay/NeuralStyleTransfer",
            tags: ["Python", "TensorFlow", "CNN", "Transfer Learning"]
        },
        {
            name: "Credit Card Fraud Detection",
            content: "A deep learning model using encoder decoder architecture to detect frauds in credit card transactions.",
            image: securityImg,
            link: "https://github.com/milindsahay/CreditCardFraudDetection",
            tags: ["Python", "TensorFlow", "Autoencoder"]
        },
        {
            name: "Recommender System",
            content: "A statistical machine learning model using user based collaborative filtering and exploratory data analysis to build a real time adaptive question recommendation system.",
            image: chartImg,
            link: "https://github.com/milindsahay/RecommenderSystem",
            tags: ["Python", "Scikit-learn", "Pandas", "Collaborative Filtering"]
        },
        {
            name: "Think Tank",
            content: "A social, user authenticated website using react, redux and firebase, supporting realtime updates.",
            image: reactImg,
            link: "https://github.com/milindsahay/ThinkTank",
            tags: ["React", "Redux", "Firebase"]
        },
        {
            name: "Adopt Me",
            content: "Adopt a pet as they appeal to you in their own words! A pet adoption website using incoming features of ReactJS",
            image: petImg,
            link: "https://github.com/milindsahay/AdoptMe",
            tags: ["React", "Hooks", "Parcel"]
        },
        {
            name: "Fox Game",
            content: "Cater to fox's needs and make sure you keep him alive day/night, every season until time runs out! A state machine game built with vanilla javascript, html and css.",
            image: jsImg,
            link: "https://github.com/milindsahay/FoxGame",
            tags: ["JavaScript", "HTML", "CSS", "State Machine"]
        },
    ]
    return (
        <div className="about-container" ref={scrollRef}>
            <div className="title mb-5 title-sm">
                <span className="first-name">My </span>
                <span className="last-name">Projects.</span>
            </div>
            <div className="row" style={{'justifyContent': 'center'}}>
                {
                    projects.map((project, i) => (
                        <div className="col-12 col-md-6 col-lg-4 card-deck text-center" key={i}>
                            <ProjectCard project={project}/>
                        </div>
                    ))
                }
            </div>
            <div className="row">
                <div className="col-12 text-center mt-3">
                    <a href="https://github.com/milindsahay?tab=repositories" className="button btn btn-danger" target="_blank">Show all</a>
                </div>
            </div>
            <Footer />
            <BackToTop scrollRef={scrollRef} />
        </div>
    )
}

export default Projects;
