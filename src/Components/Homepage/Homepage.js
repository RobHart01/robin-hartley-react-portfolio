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
                </div>
                <div className="bio-info">
                    <p className="content-1">Hi, my name is Robin, I make websites, drink coffee, and take Photos.</p>
                    <p className="content-2">I'm a Full-Stack Developer currently located in Seattle WA, with passion in creating simple, yet elegant designs.</p>
                </div>
                <div className="homie-link">
                    <Link className="gang-link" to="/projects">Continue</Link>
                </div>
            </div>
        </div>

    )
}

export default Homepage;