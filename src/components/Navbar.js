import { useRef } from 'react';
import '../styles/Navbar.css';
import MobileNavlink from './MobileNavLink';
import Navlink from './Navlink';


const Navbar = () => {
    const sidebar = useRef(null);
    const overlay = useRef(null);
    const line1 = useRef(null);
    const line2 = useRef(null);

    const openSidebar = () => {
        sidebar.current.classList.toggle("open");
        overlay.current.classList.toggle("shown");
        line1.current.classList.toggle("rotate");
        line2.current.classList.toggle("rotate");
    }

    const closeSidebar = () => {
        sidebar.current.classList.remove("open");
        overlay.current.classList.remove("shown");
        line1.current.classList.remove("rotate");
        line2.current.classList.remove("rotate");
    }

    return (
        <>
            <nav className='mobile'>
                <div className='hamburger' onClick={openSidebar}>
                    <div className='line' ref={line1}></div>
                    <div className='line' ref={line2}></div>
                </div>
                <div className='sidebar' ref={sidebar}>
                    <div className='links'>
                        <MobileNavlink closeSidebar={closeSidebar} text={"home"} to={"landing"}/>
                        <MobileNavlink closeSidebar={closeSidebar} text={"about"} to={"about"}/>
                        <MobileNavlink closeSidebar={closeSidebar} text={"projects"} to={"projects"}/>
                        <MobileNavlink closeSidebar={closeSidebar} text={"contact"} to={"contact"}/>
                    </div>
                </div>
                <div className='overlay' ref={overlay} onClick={closeSidebar}></div>
            </nav>  
            <nav>
                <div style={{opacity: 1, zIndex: 4}}>
                    <Navlink text={"home"} to={"landing"}/>
                    <Navlink text={"about"} to={"about"}/>
                    <Navlink text={"projects"} to={"projects"}/>
                    <Navlink text={"contact"} to={"contact"}/>
                </div>

            </nav>
        </>
    )
}

export default Navbar;