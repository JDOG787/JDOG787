import * as React from 'react';
import './SideBar.css';
import homeIcon from "./icons/Home.svg";
import aboutIcon from "./icons/Profile.svg";
import workIcon from "./icons/Star.svg";
import skillsIcon from "./icons/Chart.svg";
import profilesIcon from "./icons/Location.svg";
import logo from "./logos/logo.svg";
import SideBarItem from './SideBarItem';

const SideBar: React.FC = () => {
    return(
        <div className="sidebar">
            <a href="/">
                <img className="sb-logo" src={logo} alt="logo"/>
            </a>
            <div className="sidebar-items">
                <SideBarItem name="Home" icon={homeIcon}/>
                <SideBarItem name="About" icon={aboutIcon}/>
                <SideBarItem name="Work" icon={workIcon}/>
                <SideBarItem name="Skills" icon={skillsIcon}/>
                <SideBarItem name="Profiles" icon={profilesIcon}/>
            </div>
        </div>
    )  
}

export default SideBar;