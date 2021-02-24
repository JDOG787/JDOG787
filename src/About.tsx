import React, { useState } from 'react';
import './About.css';
import Header from './Header';

const About: React.FC = () => {
    return (
        <div className="about">
            <Header mainHeader="About me"/>
            <p className="sub-header">Developer / Nerd / Programmer / Computer Geek</p>

            <div className="about-info">
                    
            </div>
        </div>
    )
}

export default About;