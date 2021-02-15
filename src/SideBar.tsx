import * as React from 'react';
import './SideBar.css';
import { IoHomeOutline, IoPersonOutline, IoTerminal, IoBarChart, IoAtCircle } from "react-icons/io5";

const SideBar: React.FC = () => {
    return(
        <div className="SideBar">
            <div className="sidebar-items">
                <IoHomeOutline/>
            </div>
            <div className="sidebar-items">
                <IoPersonOutline/>
            </div>
            <div className="sidebar-items">
                <IoTerminal/>
            </div>
            <div className="sidebar-items">
                <IoBarChart/>
            </div>
            <div className="sidebar-items">
                <IoAtCircle/>
            </div>
        </div>
    )  
}

export default SideBar;