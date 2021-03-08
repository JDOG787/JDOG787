import React, { useState } from 'react';
import './About.css';
import Header from './Header';

const About: React.FC = () => {
    return (
        <div className="about">
            <Header mainHeader="About me"/>
            <p className="sub-header">Developer / Nerd / Programmer / Computer Geek</p>

            <div className="about-info">
                I'm a homeschooled 15 year old passionate about Web development, who has been programming for over a year. I mostly use Node.js, but I'm branching off, and learning other technologies too.  UI/UX design is something I’m trying to get good at too.

                <br/>
                <br/>

                I just recently built my own pc, which was a fun project to work on. I’m also very interested in networking, and cyber security.
            </div>
        </div>
    )
}

export default About;