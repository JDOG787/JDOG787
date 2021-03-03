import React from "react";
import './ProjectCard.css';

const ProjectCard: React.FC = () => {
    return (
        <div className="project-card hover-item">
            <h2>Name of project</h2>
            <p className="project-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore est nam?
            </p>
        </div>
    )
}

export default ProjectCard;