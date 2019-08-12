import React from 'react';

import Hobbies from './Hobbies/Hobbies';
import Kyoto from '../../Assets/Images/Robin-Kyoto.jpg';
import Technologies from './Technologies/Technologies';

import './Bio.css';

function Bio() {
    return (
        <div className="bio">
            <p className="bio-title">Biography</p>
            <p className="bio-sub-title">Robin Taku Hartley</p>
            <img className="bio-image" src={Kyoto} alt="Kyoto" />
            <p className="bio-image-desc">Picture of me in Kyoto</p>
            <Hobbies />
            <Technologies />
        </div>
    )
}

export default Bio;