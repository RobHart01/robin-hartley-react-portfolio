import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Bio from './Components/Bio/Bio';
import Contact from './Components/Contact/Contact';
import Homepage from './Components/Homepage/Homepage';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
 
function App() {
  return (
    <div>
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
