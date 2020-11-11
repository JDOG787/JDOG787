import React from 'react';

class Skills extends React.Component {
    render() {
        return(
            <div className="Skills" id="Skills">
                <div className="text">
                    <h1 className="header">Skills</h1>
                    <i className="devicon-html5-plain-wordmark colored icon"></i>
                    <i className="devicon-css3-plain-wordmark colored icon"></i>
                    <i className="devicon-javascript-plain colored icon"></i>
                    <i className="devicon-nodejs-plain colored icon"></i>
                    <i className="devicon-react-original-wordmark colored icon"></i>
                    <i className="devicon-mongodb-plain-wordmark colored icon"></i>
                    <div className="moreInfo">
                        <h4 className="subHeader">I Develop web apps with Node.js</h4>
                        <p>I make websites with simple and minimalistic user interfaces. I also use mongodb for a database when needed. Moreover I sometimes use React.js in my web apps!</p>
                    </div>
                </div>
                <div className="graph">
                    <div className="graphContainer">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <span className="label">Frontend</span>
                    <span className="label">Backend</span>
                    <span className="label">React.js/Next.js</span>
                </div>

                <style jsx>{`
                    .Skills {
                        display: grid;
                        height: 100vh;
                        grid-template-columns: repeat(2, 1fr);
                        grid-gap: 20px;
                    }   
                    
                    .text {
                        color: white;
                    }
                    
                    .header {
                        font-size: 3rem;
                    }
                    
                    .graph {
                        padding-top: 40px;
                    }
                    
                    .graphContainer {
                        width: 500px;
                        height: 500px;
                        position: relative;
                        border-left: 2px solid #0892d0;
                        border-bottom: 2px solid #0892d0;
                        border-bottom-left-radius: 4px;
                    }
                    
                    .bar1, .bar2, .bar3 {
                        width: 80px;
                        background-color: #0892d0;
                        position: absolute;
                        border-top-left-radius: 4px;
                        border-top-right-radius: 4px;
                    }
                    
                    .bar1 {
                        bottom: 0;
                        height: 70%;
                        left: 0;
                    }
                    
                    .bar2 {
                        bottom: 0;
                        height: 60%;
                        left: 100px;
                    }
                    
                    .bar3 {
                        bottom: 0;
                        height: 50%;
                        left: 200px;
                    }
                    
                    .label {
                        color: white;
                        margin-right: 20px;
                        font-size: 18px;
                    }
                    
                    .subHeader {
                        font-size: 1.5rem;
                    }


                    @media only screen and (max-width: 1045px) {
                        .Skills {
                            grid-template-rows: repeat(2, 1fr);
                            grid-template-columns: auto;
                            height: auto;
                        }
                    }


                    @media only screen and (max-width: 570px) {
                        .graphContainer {
                            width: 300px;
                            height: 300px;
                        }

                        .bar1, .bar2, .bar3 {
                            width: 60px;
                        }

                        .bar2 {
                            left: 75px;
                        }

                        .bar3 {
                            left: 150px;
                        }

                        .label {
                            margin-right: 20px;
                            font-size: 13px;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Skills;