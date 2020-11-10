import React from 'react';
import Link from 'next/link';

class Box extends React.Component {
    render() {
        return(
            <Link href={this.props.href}>
                <div className="Box">
                    <h3 className="header">{this.props.header}</h3>
                    <p className="boxInfo">{this.props.text}</p>

                    <style jsx>{`
                        .Box {
                            color: white;
                            background-color: #6259E3;
                            padding: 10px;
                            border-radius: 4px;
                        }
                        
                        .Box:hover {
                            box-shadow: 0 0 12px white;
                        }
                        
                        .boxHeader {
                            font-size: 1.5rem;
                            font-weight: lighter;
                        }
                    `}</style>
                </div>
            </Link>
        )
    }
}

export default Box;