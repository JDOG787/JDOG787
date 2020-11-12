import React from 'react';
import Link from 'next/link';

class MobileBtn extends React.Component {
    render() {
        return(
            <div>
                <Link href={this.props.href}>
                    <a>{this.props.text}</a>
                </Link>

                <style jsx>{`
                    div {
                        padding: 10px;
                        transition: all .2s ease;
                        border-radius: 4px;
                    }

                    div:hover {
                        background-color: #0892d0;
                    }

                    a {
                        color: white;
                        text-decoration: none;
                    }    
                `}</style>
            </div>
        )
    }
}

export default MobileBtn;