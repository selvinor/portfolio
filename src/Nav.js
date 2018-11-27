import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/nav.css';

export default function Nav() {
 // document.getElementById('Navbar_links').style.display = 'flex';
  function toggleMenu() {
    let appLinks = document.getElementById('Navbar_links');

    if (appLinks.style.display === "none") {
      appLinks.style.display = "flex";
    } else {
      appLinks.style.display = "none";
    }

  }

  return (
    <React.Fragment>
      <div className="Navbar__menu"  onClick={() => {toggleMenu()}}><img src={require('./img/hamburger.png')} alt='' /></div>
      <nav id="Navbar_links">
        <Link className="Navbar__Link" to='/'>Home</Link>
        <Link className="Navbar__Link" to='/about'>About</Link>
        <Link className="Navbar__Link" to='/projects'>Projects</Link>
        <Link className="Navbar__Link" to='/contact'>Contact</Link>
      </nav>
    </React.Fragment>  
  );
}