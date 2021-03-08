import React, { useEffect } from "react";
import Btn from "./Btn";
import './ProjectCard.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

interface Props {
    name: string;
    desc: string;
    github?: string;
    website?: string;
}

const ProjectCard: React.FC<Props> = (props) => {
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
                <h2>{props.name}</h2>
                <p className="project-info">
                    {props.desc}
                </p>
                <div className="btn-container">
                    {
                        props.github ?
                        
                        <div className="card-btn hover-item">
                            <a href={props.github}>Github</a>
                        </div>

                        :

                        ""
                    }

                    {
                        props.website ?

                        <div className="card-btn hover-item">
                            <a href={props.website}>Website</a>
                        </div>

                        :

                        ""
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;