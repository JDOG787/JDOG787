import React from 'react';
import Header from './Header';
import ProjectCard from './ProjectCard';
import './Work.css';

const Work: React.FC = () => {
    return (
        <div className="work">
            <div className="work-headers">
                <Header mainHeader="My work"/>
                <p className="sub-header">Check out some of my projects</p>
            </div>
            <div className="projects">
                <ProjectCard name="Oauth-Cord" desc="A package to quicken and simplify the use of discord's Oauth2 api." github="https://github.com/JDOG787/oauth-cord"/>
                <ProjectCard name="Patatap Clone" desc="This is a remake of patatap.com. It uses the same sounds as the orignal, but the animations are mine." website="https://patatap.jdog.codes"/>
                <ProjectCard name="HexaGuess Bot" desc="A color guessing game in a discord bot." github="https://github.com/JDOG787/Hexaguess-game-bot"/>
            </div>
        </div>
    )
}

export default Work;