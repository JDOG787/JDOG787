import React from 'react';
import Box from '../components/Box';
import Button from '../components/Button';


class Projects extends React.Component {
    render() {
        return(
            <div className="Projects" id="Projects">
                <h1 className="header">Projects</h1>
                <div className="boxes">
                    <Box href="https://patatap-clone.jdog787.repl.co" header="Patatap Clone" text="A simple clone of patatap.com"/>
                    <Box href="https://hexaguess.jdog787.repl.co/" header="HexAguess" text="A simple yet fun game where you try to guess a hex color code provided"/>
                    <Box href="https://Weather-App.jdog787.repl.co" header="Weather App" text="A weather app using the openweathermap api"/>
                    <Box href="https://Weekly-dictionary.jdog787.repl.co" header="Dictionary" text="A Dictoinary app using another api"/>
                </div>
                <div className="btns">
                    <h2 className="subHeader">View More Projects</h2>
                    <Button text="Github" href="https://github.com/JDOG787"/>
                    <Button text="Repl.it" href="https://repl.it/@JDOG787"/>
                </div>

                <style jsx>{`
                    .Projects {
                        height: 100vh;
                        padding-top: 20px;
                    }
                    
                    .header {
                        font-size: 3rem;
                        color: white;
                    }
                    
                    .boxes {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 20px;
                    }

                    .subHeader {
                        color: white;
                        font-size: 1.9rem;

                    }

                    @media only screen and (max-width: 1045px) {
                        .boxes {
                            grid-template-columns: auto;
                        }
                        .Projects {
                            height: auto;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Projects;