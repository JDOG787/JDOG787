import React from 'react';
import Button from "./Button";

class Intro extends React.Component {
    render() {
        return(
            <div className="intro">
                <h1 className="hero">Hello! 👋<br/> I'm <span className="username">JDOG787</span>!</h1>
                <p className="info">Full stack web developer with experience in HTML, CSS, JS, and Node.js! I also know some React.js and Next.js.</p>
                <Button href="#About" text="About Me"/>
                <Button href="" text="Projects"/>

                <style jsx>{`
                    .intro {
                        background-image: url("/person.svg");
                        background-repeat: no-repeat;
                        background-position-x: right;
                        height: 100vh;
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
                `}</style>
            </div>
        )
    }
}

export default Intro;