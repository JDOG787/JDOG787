import React from 'react';
import "./Home.css";
import Headers from './Header';
import Btn from './Btn';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="intro">
                {/* <h1 className="intro-header">JDOG787</h1> */}
                <Headers mainHeader="JDOG787"/>
                <p className="intro-text sub-header">
                    Aspiring Software Developer / Web Developer
                </p>
                <Btn text="About" href="/about"/>
            </div>

            <svg className="spinning-logo" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="logo1" d="M297 312.75C331.517 312.75 359.5 284.768 359.5 250.25C359.5 234.443 353.632 220.006 343.955 209C370.196 236.951 386.268 274.561 386.268 315.925C386.268 342.542 379.612 367.604 367.875 389.538C366.587 390.195 365.289 390.834 363.981 391.455C343.681 401.102 320.971 406.5 297 406.5L203.25 406.5L172 406.5L172 305.25C179.903 305.25 187.121 302.317 192.624 297.479C199.138 291.752 203.25 283.355 203.25 274L203.25 187.75L47.0001 187.75L47.0001 94L297 94L297 312.75Z" fill="url(#paint0_linear)"/>
                <path className="logo2" d="M453.25 250.25C453.25 163.956 383.295 94 297 94L203.25 94L203.25 274C203.25 283.355 199.139 291.752 192.625 297.479C187.122 302.317 179.904 305.25 172 305.25C154.741 305.25 140.75 291.259 140.75 274L140.75 250.25L47 250.25L47.0004 281.5C47.0004 300.677 51.3188 318.845 59.0361 335.085C59.5333 336.132 60.0444 337.171 60.5695 338.201C81.2378 378.739 123.377 406.501 172 406.501C241.036 406.501 297 350.537 297 281.502L297 187.75C315.711 187.75 332.501 195.972 343.955 209C370.196 236.951 386.268 274.561 386.268 315.925C386.268 342.543 379.613 367.604 367.875 389.538C418.547 363.703 453.25 311.029 453.25 250.25Z" fill="url(#paint1_linear)"/>
                <defs>
                <linearGradient id="paint0_linear" x1="47" y1="94" x2="385.75" y2="406.499" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2E5DD6"/>
                <stop offset="1" stop-color="#5000B6"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="140" y1="176" x2="472.333" y2="374.658" gradientUnits="userSpaceOnUse">
                <stop offset="0.194439" stop-color="#2E71D6"/>
                <stop offset="0.788709" stop-color="#5000B6"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Home;