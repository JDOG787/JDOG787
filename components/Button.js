import React from 'react';
import Link from 'next/link';

class Button extends React.Component {
    render() {
        return(
            <div className="container">
                <Link href={this.props.href}><a className="Button">{this.props.text}</a></Link>

                <style jsx>{`
                    .container {
                        display: inline;
                    }

                    .Button {
                        text-decoration: none;
                        padding: 10px;
                        border-radius: 4px;
                        background-color: #0892d0;
                        font-size: 1.5rem;
                        color: white;
                        margin-right: 10px;
                        transition: all ease 0.2s;
                    }
                    
                    .Button:hover {
                        background-color: #16a8ec;
                    }
                `}</style>
            </div>
        )
    }
}

export default Button;