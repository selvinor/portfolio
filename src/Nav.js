import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/nav.css';

export default function Nav() {
  return (
    <React.Fragment>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </React.Fragment>  
  );
}