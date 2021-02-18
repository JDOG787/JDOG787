import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="intro">
                <h1 className="intro-header">JDOG787</h1>
                <p className="intro-text">
                    Aspiring Software Developer / Web Developer
                </p>
                <a href="/about">
                    <div className="btn">About</div>
                </a>
            </div>
        </div>
    )
}

export default Home;