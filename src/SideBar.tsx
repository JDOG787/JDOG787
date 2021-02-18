import * as React from 'react';
import './SideBar.css';
import homeIcon from "./icons/Home.svg";
import logo from "./logos/logo.svg";

const SideBar: React.FC = () => {
    return(
        <div className="sidebar">
            <img className="sb-logo" src={logo} alt="logo"/>
            <div className="sidebar-items">
                <img className="sb-icon" src={homeIcon} alt="home"/>
                <img className="sb-icon" src={homeIcon} alt="home"/>
                <img className="sb-icon" src={homeIcon} alt="home"/>
                <img className="sb-icon" src={homeIcon} alt="home"/>
                <img className="sb-icon" src={homeIcon} alt="home"/>
            </div>
        </div>
    )  
}

export default SideBar;