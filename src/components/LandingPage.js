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
                    <div className='logoBox' data-aos='flip-up' data-aos-delay={450}>
                        <img className='heroLogo' src={logo} alt='logo'/>
                    </div>
                </div>
                <div className='content' data-aos='zoom-in-left'>
                    <h1 className='heroHeader'>JDOG787</h1>
                    <p className='heroSubHeader'>Tech nerd \ Software Dev \ Proud dog owner</p>
                    <div className='heroBtns'>
                        <Link
                            to={"projects"}
                            smooth
                            spy>
                            <div className='primaryBtn'>projects</div>
                        </Link>
                        <Link
                            to={"contact"}
                            smooth
                            spy>
                            <div className='secondaryBtn'>contact</div>
                        </Link>
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