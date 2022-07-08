import '../styles/Navlink.css';
import { Link } from 'react-scroll';


const Navlink = ({ text, to }) => {

    return (
        <Link
        to={to}
        smooth
        spy
        activeClass='active-link'
        className='navlink'>

            {text}
                <svg preserveAspectRatio="none" className='highlight' width="138" height="9" viewBox="0 0 138 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.32147 6.6265C23.2176 6.6265 44.1777 5.35645 65.0135 3.83717C88.5524 2.12079 112.21 2.34045 135.801 2.34045" stroke="url(#paint0_linear_172_61)" stroke-width="3" stroke-linecap="round"/>
    <defs>
    <linearGradient id="paint0_linear_172_61" x1="135.801" y1="2.33133" x2="127.23" y2="37.2708" gradientUnits="userSpaceOnUse">
    <stop stop-color="#F39810"/>
    <stop offset="1" stop-color="#E22626"/>
    </linearGradient>
    </defs>
    </svg>

        </Link>
    )
}

export default Navlink;