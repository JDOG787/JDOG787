import React from 'react';
import './MobileNav.css';

const MobileNav: React.FC = () => {

    function handelClick() {
        document.querySelector(".nav-links")?.classList.toggle("open")
        document.body.classList.toggle("no-scoll")
    }

    return (
        <div className="mobile-nav">
            <div className="menu" onClick={() => handelClick()}>
                <div className="menu-bar long-bar"></div>
                <div className="menu-bar short-bar"></div>
                <div className="menu-bar long-bar"></div>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a className="mobile-nav-link" href="/">Home</a></li>
                    <li><a className="mobile-nav-link" href="/about">About me</a></li>
                    <li><a className="mobile-nav-link" href="/work">Work</a></li>
                    <li><a className="mobile-nav-link" href="/skills">Skills</a></li>
                    <li><a className="mobile-nav-link" href="/profiles">Profiles</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNav;