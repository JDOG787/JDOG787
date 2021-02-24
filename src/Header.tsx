import React from 'react';
import './Header.css';

interface Props {
    mainHeader: string;
}

const Header: React.FC<Props> = (props) => {
    return (
        <div className='header'>
            <h1>{props.mainHeader}</h1>
        </div>
    )
}

export default Header;