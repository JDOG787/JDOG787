import React from "react";
import './ProjectCard.css';

const ProjectCard: React.FC = () => {
    return (
        <div className="project-card hover-item">
            <span className="card-line"></span>
            <span className="card-line"></span>
            <span className="card-line"></span>
            <span className="card-line"></span>
            <div className="content">
                <h2>Name of project</h2>
                <p className="project-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore est nam?
                </p>
            </div>
        </div>
    )
}

export default ProjectCard;