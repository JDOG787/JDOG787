import React from 'react';
import './SideBarItem.css';

interface Props {
    icon: string;
    name: string;
}

const SideBarItem: React.FC<Props> = (props) => {
    return(
        <div className="sidebar-item">
            <img className="sb-icon" src={props.icon} alt={props.name}/>
            {/* <div className="sb-text">{props.name}</div> */}
        </div>
    )
}

export default SideBarItem;