import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/nav.css';

export default function Nav() {
  return (
    <React.Fragment>
      <nav>
        <Link className="Navbar__Link" to='/'>Home</Link>
        <Link className="Navbar__Link" to='/about'>About</Link>
        <Link className="Navbar__Link" to='/projects'>Projects</Link>
        <Link className="Navbar__Link" to='/contact'>Contact</Link>
      </nav>
    </React.Fragment>  
  );
}