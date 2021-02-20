import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about">
            <div className="terminal">
                <div className="current-dir">jdog787/about.txt <span className="end-current-dir">$</span></div>
            </div>
            {/* <h1 className="about-header">jdog/about <span className="terminal">$</span></h1> */}
        </div>
    )
}

export default About;