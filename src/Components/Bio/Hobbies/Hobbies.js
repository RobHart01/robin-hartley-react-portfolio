import React from 'react';

import './Hobbies.css';

function Hobbies() {
    return (
        <div className="hobbies">
            <p className="hobbies-title">Hobbies</p>
            <p className="hobbies-subtitle">Things I enjoy doing</p>
            <ul className="hobbies-ul">
                <li className="hobbies-content">Ordering a freshly made espresso from the local Seattle downtown coffee shops.</li>
                <li className="hobbies-content">Doing anything related to photography or videography (going on shoots, editing, etc...).</li>
                <li className="hobbies-content">I spend a lot of time thinking about architecture. Not code architecture, well that too, but more like building wise.</li>
                <li className="hobbies-content">Journaling.</li>
                <li className="hobbies-content">My spotify playlist is my treasure. I spend a lot of time trying to find good modern music.</li>
            </ul>
        </div>
    )
}

export default Hobbies;