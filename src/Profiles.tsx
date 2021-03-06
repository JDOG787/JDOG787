import React from 'react';
import Header from './Header';
import ProfileItem from './ProfileItem';
import './Profiles.css';

const Profiles: React.FC = () => {
    return (
        <div className="profiles">
            <Header mainHeader="Profiles"/>
            <p className="sub-header">Here are some places you can find me!</p>
            <ProfileItem/>
        </div>
    )
}

export default Profiles;