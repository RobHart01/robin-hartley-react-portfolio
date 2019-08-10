import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Homepage.css';
import Location from '../../Assets/Images/location-icon.png';
function Homepage() {
    return (
        <div className="homepage">
            <div className="main-content">
                <div className="title-trio">
                    <p className="title">ROBIN T. HARTLEY</p>
                    <p className="sub-title">Full Stack Web Developer</p>
                    <div className="location-tab">
                        <p className="location">Based in Seattle WA</p>
                        <img className="location-icon" src={Location} alt="location icon" />
                    </div>
                    <p className="quote">You are your own greatest enemy.</p>
                </div>
                <div className="bio-info">
                    <p className="content-1">Hi, my name is Robin. Not like the bird Robin, but more like Batman's Sidekick. We'll go with that one.</p>
                    <p className="content-2">Anways, like my Intro says there, I'm a Full-Stack Developer currently based in Seattle Washington.</p>
                </div>
                <div className="homie-link">
                    <Link className="gang-link" to="/projects">Continue</Link>
                </div>
            </div>
        </div>

    )
}

export default Homepage;