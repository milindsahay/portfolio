import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {
            name: "Neural Style Transfer",
            content: "A deep learning model used to take two images—a content image and a style reference image (such as an artwork by a famous painter)—and blend them together so that the output converges to be a mixture of two.",
            image: "https://florencefennel.co.in/image/cache/catalog/florencefennel/Machine--Learning-1000x1000.jpg",
            link: "https://github.com/milindsahay/NeuralStyleTransfer"
        },
        {
            name: "Credit Card Fraud Detection",
            content: "A deep learning model using encoder decoder architecture to detect frauds in credit card transactions.",
            image: "https://florencefennel.co.in/image/cache/catalog/florencefennel/Machine--Learning-1000x1000.jpg",
            link: "https://github.com/milindsahay/CreditCardFraudDetection"
        },
        {
            name: "Recommender System",
            content: "A statistical machine learning model using user based collaborative filtering and exploratory data analysis to build a real time adaptive question recommendation system.",
            image: "https://florencefennel.co.in/image/cache/catalog/florencefennel/Machine--Learning-1000x1000.jpg",
            link: "https://github.com/milindsahay/RecommenderSystem"
        },
        {
            name: "Think Tank",
            content: "A social blogging user authenticated application using react, redux and firebase.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnbjer-oBSRn1W5DLULk9eIOVm4ZY95cSPJG-OMNFN76KU41OhpJ7kjWQJQYVuqs_it0&usqp=CAU",
            link: "https://github.com/milindsahay/ThinkTank"
        },
        {
            name: "Adopt Me",
            content: "A pet adoption website using react",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnbjer-oBSRn1W5DLULk9eIOVm4ZY95cSPJG-OMNFN76KU41OhpJ7kjWQJQYVuqs_it0&usqp=CAU",
            link: "https://github.com/milindsahay/AdoptMe"
        },
        {
            name: "Fox Game",
            content: "A state machine game built with vanilla javascript, html and css.",
            image: "https://brandslogo.net/wp-content/uploads/2015/07/javascript-logo-vector-download.jpg",
            link: "https://github.com/milindsahay/FoxGame"
        },


    ]
    return (
        <div className="about-container">
            <div className="row" style={{'justify-content': 'center'}}>
                {
                    projects.map(project => (
                        <div className="col-12 col-md-6 col-lg-4 card-deck text-center">
                            <ProjectCard
                                project={project}/>
                        </div>
                    ))
                }
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <a href="https://github.com/milindsahay?tab=repositories" className="button btn btn-danger" target="_blank">Show all</a>
                </div>
            </div>
        </div>
    )
}


export default Projects;