import React from 'react';
import Header from './Header';
import ProjectCard from './ProjectCard';
import './Work.css';

const Work: React.FC = () => {
    return (
        <div className="work">
            <Header mainHeader="My work"/>
            <p className="sub-header">Check out some of my projects</p>
            <div className="projects">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default Work;