import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Bio from '../Bio/Bio';
import Contact from '../Contact/Contact';
import Homepage from '../Homepage/Homepage';
import Projects from '../Projects/Projects';
import './Navigation.css';
import Head from '../../Assets/Images/head-icon.png';
import Folder from '../../Assets/Images/folder-icon.png';
import Home from '../../Assets/Images/home-icon.png';
import Add from '../../Assets/Images/add-icon.png';

function Navigation() {
    return (
        <Router>
            <div className="navigation">
                <ul className="nav-list">
                    <li><Link className="home-link" to="/"><img src={Home} alt="home icon" /></Link></li>
                    <li><Link className="project-link" to="/projects"><img src={Folder} alt="folder icon" /></Link></li>
                    <li><Link className="bio-link" to="/bio"><img src={Head} alt="head icon" /></Link></li>
                    <li><Link className="contact-link" to="/contact"><img src={Add} alt="add icon" /></Link></li>                
                </ul>
            </div>
            <Route exact path="/" component={Homepage} />
            <Route path="/contact" component={Contact} />
            <Route path="/bio" component={Bio} />
            <Route path="/projects" component={Projects} />
        </Router>
    );
}

export default Navigation;
