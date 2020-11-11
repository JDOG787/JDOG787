import React from 'react';

class About extends React.Component {
    render() {
        return(
            <div className="About" id="About">
                <img className="image" src="/person2.svg"/>
                <div className="text">
                    <h1 className="header">About Me</h1>
                    <p className="info">15 year old full stack web developer with experience in html, css, js, and node.js! I also know some React.js and Next.js. Additionally I've played around with python, swift, basic, and c++ a bit. I'm an avid programmer always try to learn more and boost my coding skills. I've learned a lot of what I know from Udemy but I've also learned a lot from some awesome people on repl.it!</p>
                </div>

                <style jsx>{`
                    .About {
                        height: 100vh;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        padding-top: 100px;
                    }

                    .text {
                        padding: 20px;
                        padding-top: 150px;
                    }

                    .header {
                        color: white;
                        font-size: 3rem;
                    }

                    .info {
                        color: white;
                        font-size: 1.5rem;
                    }

                    .image {
                        width: 100%;
                        height: 100%;
                    }

                    @media only screen and (max-width: 1045px) {
                        .About {
                            grid-template-rows: repeat(2, 1fr);
                            grid-template-columns: auto;
                            height: 130vh;
                        }
                        
                        .text {
                            grid-row: 1 / 2;
                            padding-top: 0;
                        }

                        .image {
                            height: auto;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default About;