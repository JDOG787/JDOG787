import React from 'react';
import './SideBarItem.css';

interface Props {
    icon: string;
    name: string;
    href: string;
}

const SideBarItem: React.FC<Props> = (props) => {
    return(
        <div className="sidebar-item hover-item">
            <a href={props.href}>
                <img className="sb-icon" src={props.icon} alt={props.name}/>
                {/* <div className="sb-text">{props.name}</div> */}
            </a>
        </div>
    )
}

export default SideBarItem;