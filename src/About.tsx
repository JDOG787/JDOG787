import React, { useState } from 'react';
import './About.css';
import Header from './Header';

const About: React.FC = () => {
    return (
        <div className="about">
            <Header mainHeader="About me"/>
            <p className="sub-header">Developer / Nerd / Programmer / Computer Geek</p>

            <div className="about-info">
                I'm a homeschooled 15 year old passionate about Web development, who has been learning web dev for over a year now. I mostly use Node.js, but I'm branching off, and learning other technologies too.
                 {/*finish later  */}
            </div>
        </div>
    )
}

export default About;