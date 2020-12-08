import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <div className="Footer">
                <div className="logo-container">
                    <img className="logo" src="/logo.jpeg"/>
                </div>
                <p className="text">Made by JDOG787</p>

                <style jsx>{`
                    .Footer {
                        padding: 20px;
                        text-align: center;
                    }
                    .logo {
                        border-radius: 4px;
                        width: 80px;
                    }
                    .text {
                        color: white;
                        font-size: 20px;
                    }
                `}</style>
            </div>
        )
    }
}

export default Footer;