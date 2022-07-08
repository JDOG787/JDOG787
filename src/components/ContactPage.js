import '../styles/ContactPage.css';
import Footer from './Footer';
import logo from '../images/logo.svg';
import mail from '../images/mail.svg';
import discord from '../images/github.svg';
import github from '../images/discord.svg';
import polywork from '../images/twitter.svg';



const ContactPage = () => {
    return (
        <div className="page" id="contact">
            <div className='contact-section'>
                <div className='contact-info'>
                    <div>
                        <h1>Contact</h1>
                        <p>
                            Let's get in touch!
                        </p>
                        {/* <h2></h2> */}
                        <div className='contact-info-items'>
                            <a href="mailto:hello@jdog.dev">
                                <div className='contact-info-item'>
                                    <img src={mail} alt="logo" />
                                    <p>Email</p>
                                </div>
                            </a>                            
                            <a href="https://github.com/jdog787">
                                <div className='contact-info-item'>
                                    <img src={github} alt="logo" />
                                    <p>Github</p>
                                </div>
                            </a>   
                            <a href="https://discord.com/users/660229063142539306">
                                <div className='contact-info-item'>
                                    <img src={discord} alt="logo" />
                                    <p>Discord</p>
                                </div>
                            </a>  
                            <a href="https://twitter.com/@jdog787dev">
                                <div className='contact-info-item'>
                                    <img src={polywork} alt="logo" />
                                    <p>Twitter</p>
                                </div>
                            </a>  
                        </div>
                    </div>
                </div>
                <div className='doggo'>
                    <div className='doggo-box'>
                        <img src={logo}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage;