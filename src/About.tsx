import React, { useState } from 'react';
import './About.css';
import Header from './Header';

const About: React.FC = () => {
    return (
        <div className="about">
            <Header mainHeader="About me"/>
            <p>Developer / Nerd / Programmer / Computer Geek</p>
        </div>
    )
}

export default About;