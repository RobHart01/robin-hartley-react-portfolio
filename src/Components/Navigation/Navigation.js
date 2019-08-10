import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Bio from '../Bio/Bio';
import Contact from '../Contact/Contact';
import Homepage from '../Homepage/Homepage';
import Projects from '../Projects/Projects';
import './Navigation';

function Navigation() {
    return (
        <Router>
            <div className="Navigation">
                <Link className="home-link" to="/">home</Link>
                <Link to="/projects">projects</Link>
                <Link to="/bio">bio</Link>
                <Link to="/contact">contact</Link>
            </div>
            <Route exact path="/" component={Homepage} />
            <Route path="/contact" component={Contact} />
            <Route path="/bio" component={Bio} />
            <Route path="/projects" component={Projects} />
        </Router>
    );
}

export default Navigation;
