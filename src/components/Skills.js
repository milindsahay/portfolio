import React, { useRef } from "react";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const Skills = () => {
    const scrollRef = useRef(null);
    const categories = [
        {
            title: "Languages",
            skills: ["Go", "Python", "Java", "C++", "JavaScript"]
        },
        {
            title: "ML / AI",
            skills: ["GenAI / LLMs", "TensorFlow", "Scikit-learn", "NumPy", "Pandas"]
        },
        {
            title: "Infrastructure",
            skills: ["Distributed Systems", "Microservices", "Kafka", "Docker", "Bazel", "MySQL", "PostgreSQL", "Redis", "Cassandra"]
        }
    ];

    return (
        <div className="skills-container" ref={scrollRef}>
            <div className="title mb-5 title-sm">
                <span className="first-name">My </span>
                <span className="last-name">Skills.</span>
            </div>
            {categories.map((cat, i) => (
                <div className="skill-category" key={i}>
                    <h4>{cat.title}</h4>
                    <div className="skill-pills">
                        {cat.skills.map((skill, j) => (
                            <span className="skill-pill" key={j}>{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
            <Footer />
            <BackToTop scrollRef={scrollRef} />
        </div>
    );
};

export default Skills;
