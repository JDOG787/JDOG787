import '../styles/ContactPage.css';
import Footer from './Footer';
import logo from '../images/logo.svg';
import mail from '../images/mail.svg';
import discord from '../images/github.svg';
import github from '../images/discord.svg';
import twitter from '../images/twitter.svg';
import Tilt from 'react-tilt';



const ContactPage = () => {
    return (
        <div className="page" id="contact">
            <div className='contact-section'>
                <div className='contact-info'>
                    <div>
                        <h1 data-aos='fade-right'>Contact</h1>
                        <p data-aos='fade-left'>
                            Let's get in touch!
                        </p>
                        
                        <div className='contact-info-items' data-aos='fade-up' data-aos-delay={350}>
                            <Tilt>
                            <a href="mailto:hello@jdog.dev">
                                <div className='contact-info-item'>
                                    <img src={mail} alt="logo" />
                                    <p>Email</p>
                                </div>
                            </a>     
                            </Tilt> 
                            <Tilt>              
                            <a href="https://github.com/jdog787">
                                <div className='contact-info-item'>
                                    <img src={github} alt="logo" />
                                    <p>Github</p>
                                </div>
                            </a>   
                            </Tilt>

                            <Tilt>
                            <a href="https://discord.com/users/660229063142539306">
                                <div className='contact-info-item'>
                                    <img src={discord} alt="logo" />
                                    <p>Discord</p>
                                </div>
                            </a>  
                            </Tilt>
                            <Tilt>
                                <a href="https://twitter.com/@jdog787dev">
                                    <div className='contact-info-item'>
                                        <img src={twitter} alt="logo" />
                                        <p>Twitter</p>
                                    </div>
                                </a>  
                            </Tilt>
                        </div>
                    </div>
                </div>
                <div className='doggo'>
                    <Tilt>
                    <div className='doggo-box' data-aos='flip-right'>
                        <img src={logo}/>
                    </div>
                    </Tilt>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage;