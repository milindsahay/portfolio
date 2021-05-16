import React from "react";
const ProjectCard = ({project}) =>{
    const {name, content, image} = project
    return (
        <div className="card mb-5">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">{content}</p>
            </div>
            <div className="card-footer text-center">
                <h5 className=""><span className="card-symbol">&lt;</span> {name} <span className="card-symbol">/&gt;</span></h5>
            </div>
        </div>
    )
}


export default ProjectCard;