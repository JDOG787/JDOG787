import React from 'react';
import Link from 'next/link';

class RoundedButton extends React.Component {
    render() {
        return(
            <div className="container">
                <Link href={this.props.href}>
                    <div className="rounded-button">
                        {this.props.svg}
                    </div>
                </Link>

                <style jsx>{`
                    .rounded-button {
                        background-color: #fff;
                        padding: 15px;
                        border-radius: 50%;
                        width: 50px;
                        // height: 50px;
                        transition: all ease 0.2s;
                    }

                    .rounded-button:hover {
                        background-color: #ddd;
                    }
                `}</style>
            </div>
        )
    }
}

export default RoundedButton;