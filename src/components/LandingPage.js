import Navbar from './Navbar';
import '../styles/LandingPage.css';
import logo from '../images/logo.svg';
import { Link } from 'react-scroll';
import { IoArrowDownOutline } from 'react-icons/io5';

const LandingPage = () => {
    return (
        <div className="landingPage page" id='landing'>
            <Navbar/>

            <div className="landingPageContent">
                <div className='logoContainer'>
                    <div className='logoBox'>
                        <img className='heroLogo' src={logo} alt='logo'/>
                    </div>
                </div>
                <div className='content'>
                    <h1 className='heroHeader'>JDOG787</h1>
                    <p className='heroSubHeader'>Tech nerd \ Software Dev \ Proud dog owner</p>
                    <div className='heroBtns'>
                        <a href='#projects'>
                            <div className='primaryBtn'>projects</div>
                        </a>
                        <a href='#contact'>
                            <div className='secondaryBtn'>contact</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='scrollDown'>
                <Link
                    to={'about'}
                    smooth
                    spy
                    activeClass='active-link'
                    className="scrollDownLink">
                    <IoArrowDownOutline color='#fff' size={26}/>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;