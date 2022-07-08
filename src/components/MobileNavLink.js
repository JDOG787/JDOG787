import '../styles/MobileNavlink.css';
import { Link } from 'react-scroll';
import { useRef } from 'react';


const MobileNavlink = ({ text, to, closeSidebar }) => {
    const link = useRef(null);

    const close = () => {
        closeSidebar()
    }

    return (
        <Link
        to={to}
        smooth
        spy
        className='mobile-navlink' 
        ref={link}
        onClick={close}>

            {text}

        </Link>
    )
}

export default MobileNavlink;