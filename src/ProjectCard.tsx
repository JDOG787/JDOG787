import React, { useEffect } from "react";
import Btn from "./Btn";
import './ProjectCard.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectCard: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 450 });
    }, [])

    return (
        <div className="project-card" data-aos="fade-up">
            <span className="card-line"></span>
            <span className="card-line"></span>
            <span className="card-line"></span>
            <span className="card-line"></span>
            <div className="content">
                <h2>Name of project</h2>
                <p className="project-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore est nam?
                </p>
                <div className="btn-container">
                    <div className="card-btn hover-item">
                        <a href="/">Github</a>
                    </div>
                    <div className="card-btn hover-item">
                        <a href="/">Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;