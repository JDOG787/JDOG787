import React from "react";
import './ProjectCard.css';

const ProjectCard: React.FC = () => {
    
    window.addEventListener("DOMContentLoaded", () => {
        const fadeIn = document.querySelectorAll(".fade-one")!;

        const observer = new IntersectionObserver(entries => {
            console.log(entries)
            if (entries[0].isIntersecting) {
                entries[0].target.classList.add("animate")
            } else {
                entries[0].target.classList.remove("animate")
            }
        })

        fadeIn.forEach(ele => {
            observer.observe(ele)
        })
    });

    return (
        <div className="project-card hover-item fade-one">
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