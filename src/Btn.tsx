import React from 'react';
import './Btn.css';

interface Props {
    text: string;
    href: string;
}

const Btn: React.FC<Props> = (props) => {
    return (
        <div className="btn hover-item">
                <span className="btn-line"></span>
                <span className="btn-line"></span>
                <span className="btn-line"></span>
                <span className="btn-line"></span>
                <a href={props.href}>
                    <div className="btn-text">{props.text}</div>
                </a>
        </div>
    )
}

export default Btn;