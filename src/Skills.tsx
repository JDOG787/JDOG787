import React from 'react';
import Header from './Header';
import './Skills.css';

const Skills: React.FC = () => {
    return (
        <div className="skills">
        <Header mainHeader="Skills"/>
        <p className="sub-header">Here's what I can do</p>
        <div className="bars">
            <div className="general">
                <h2 className="bar-header">General skills</h2>
                <p className="label">Frontend</p>
                <div className="bar"><div className="inner-bar frontend"></div></div>
                <p className="label">Backend</p>
                <div className="bar"><div className="inner-bar backend"></div></div>
            </div>
            <div className="specific">
                <h2 className="bar-header">Specific skills</h2>
                <p className="label">React.js</p>
                <div className="bar"><div className="inner-bar react"></div></div>
                <p className="label">Design</p>
                <div className="bar"><div className="inner-bar design"></div></div>
                <p className="label">Mongodb</p>
                <div className="bar"><div className="inner-bar mongodb"></div></div>
                <p className="label">Html / Css / Js</p>
                <div className="bar"><div className="inner-bar basic-web"></div></div>
            </div>
        </div>
    </div>
    )
}

export default Skills;