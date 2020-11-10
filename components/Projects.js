import React from 'react';
import Box from '../components/Box';

class Projects extends React.Component {
    render() {
        return(
            <div className="Projects" id="Projects">
                <h1 className="header">Projects</h1>
                <div className="boxes">
                    <Box href="https://patatap-clone.jdog787.repl.co" header="Patatap Clone" text="A simple clone of patatap.com"/>
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
                `}</style>
            </div>
        )
    }
}

export default Projects;