import React from "react";

const ProjectCard = ({project}) => {
    const {name, content, image, link} = project
    return (
        <a href={link} style={{textDecoration: 'none'}} className="card mb-5" target="_blank">
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text">{content}</p>
            </div>
            <div className="card-footer text-center">
                <h5><span className="card-symbol">&lt;</span> {name} <span className="card-symbol">/&gt;</span></h5>
            </div>
        </a>
    )
}


export default ProjectCard;