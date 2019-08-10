import React from 'react';
import './Bio.css';
import Kyoto from '../../Assets/Images/Robin-Kyoto.jpg';

function Bio() {
    return (
        <div className="bio">
            <p className="title">Biography</p>
            <p className="sub-title">Robin Taku Hartley</p>
            <img className="bio-image" src={Kyoto} alt="Kyoto" />
            <p>Picture of me in Kyoto</p>
            <p className="content">Born in Columbus Ohio in 1997, moved to Washington, then to Japan, </p>
            <p>Component of hobbies</p>
            <p>Component of accomplishments</p>
            <h3>Technical Languages</h3>
        </div>
    )
}

export default Bio;