import * as React from 'react';
import './SideBar.css';
import { IoHomeOutline, IoPersonOutline, IoTerminal, IoBarChart, IoAtCircle } from "react-icons/io5";

const SideBar: React.FC = () => {
    return(
        <div className="SideBar">
            <div className="sidebar-items">
                <a className="sidebar-link" href="/">
                    <IoHomeOutline/>
                    <div className="sidebar-label">Home</div>
                </a>
            </div>
            <div className="sidebar-items">
                <a className="sidebar-link" href="/about">
                    <IoPersonOutline/>
                    <div className="sidebar-label">About</div>
                </a>
            </div>
            <div className="sidebar-items">
                <a className="sidebar-link" href="/projects">
                    <IoTerminal/>   
                    <div className="sidebar-label">Projects</div>
                </a>
            </div>
            <div className="sidebar-items">
                <a className="sidebar-link" href="/skills">
                    <IoBarChart/>
                    <div className="sidebar-label">Skills</div>
                </a>
            </div>
            <div className="sidebar-items">
                <a className="sidebar-link" href="/profiles">
                    <IoAtCircle/>
                    <div className="sidebar-label">Profiles</div>
                </a>
            </div>
        </div>
    )  
}

export default SideBar;