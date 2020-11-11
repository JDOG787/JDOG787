import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <div className="Contact" id="Contact">
                <div className="text">
                    <h1 className="header">Contact Me</h1>
                    <h3 className="subHeader">Would you like to get in touch?</h3>
                </div>
                <div className="imageContainer">
                    <img className="image" src="/person3.svg"/>
                </div>

                <style jsx>{`
                    .Contact {
                        height: 100vh;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .text {
                        color: white;
                    }

                    .header {
                        font-size: 3rem;
                        text-align: right;
                        margin-bottom: 0;
                    }

                    .subHeader {
                        text-align: right;
                        font-size: 1.7rem;
                        margin-top: 5px;
                    }

                    .imageContainer {
                        padding-top: 160px;
                    }

                    .image {
                        width: 100%;
                    }

                    @media only screen and (max-width: 1045px) {
                        .Contact {
                            grid-template-rows: repeat(2, 1fr);
                            grid-template-columns: auto;
                            height: auto;
                        }

                        .imageContainer {
                            padding: 0;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Contact;