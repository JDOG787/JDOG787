import * as React from 'react';
import './SideBar.css';
import homeIcon from "./icons/Home.svg";
import aboutIcon from "./icons/Profile.svg";
import workIcon from "./icons/Star.svg";
import skillsIcon from "./icons/Chart.svg";
import profilesIcon from "./icons/Location.svg";
import logo from "./logos/logo.svg";

const SideBar: React.FC = () => {
    return(
        <div className="sidebar">
            <img className="sb-logo" src={logo} alt="logo"/>
            <div className="sidebar-items">
                <img className="sb-icon" src={homeIcon} alt="home"/>
                <img className="sb-icon" src={aboutIcon} alt="home"/>
                <img className="sb-icon" src={workIcon} alt="home"/>
                <img className="sb-icon" src={skillsIcon} alt="home"/>
                <img className="sb-icon" src={profilesIcon} alt="home"/>
            </div>
        </div>
    )  
}

export default SideBar;