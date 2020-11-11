import React from 'react';
import Button from "./Button";

class Intro extends React.Component {
    render() {
        return(
            <div className="Intro">
                <h1 className="hero">Hello! 👋 <br/> I'm <span className="username">JDOG787</span>!</h1>
                <p className="info">Full stack web developer with experience in HTML, CSS, JS, and Node.js! I also know some React.js and Next.js.</p>
                <Button href="#About" text="About Me"/>
                <Button href="#Projects" text="Projects"/>
                <div>
                    <img className="image" src="/person.svg"/>
                </div>

                <style jsx>{`
                    .Intro {
                        background-image: url("/person.svg");
                        background-repeat: no-repeat;
                        background-position-x: right;
                        height: 100vh;
                        padding-left: 20px;
                    }

                    .hero {
                        font-size: 3.5rem;
                        color: white;
                    }

                    .username {
                        color: #0892d0;
                    }

                    .info {
                        color: white;
                        font-size: 1.7rem;
                        width: 50vw;
                    }

                    .image {
                        width: 100%;
                        display: none;
                    }

                    @media only screen and (max-width: 1045px) {
                        .Intro {
                            text-align: center;
                            background: none;
                            height: auto;
                        }
                        .info {
                            width: auto;
                        }

                        .image {
                            display: block;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Intro;