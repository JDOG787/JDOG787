import React from 'react';
import Header from './Header';
import './Work.css';

const Work: React.FC = () => {
    return (
        <div className="work">
            <Header mainHeader="My work"/>
            <p className="sub-header">Check out some of my projects</p>
            <div className="projects">
                <div className="col">
                    <div className="project">
                        <h2>Name of project</h2>
                        <p className="project-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore est nam?
                        </p>
                    </div>
                    <div className="project">
                        <h2>Name of project</h2>
                        <p className="project-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore est nam?
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="project">
                        <h2>Name of project</h2>
                        <p className="project-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore est nam?
                        </p>
                    </div>
                    <div className="project">
                        <h2>Name of project</h2>
                        <p className="project-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore est nam?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;