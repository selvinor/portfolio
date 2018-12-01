import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
//import '../styles/nav.css';

export default class Nav extends Component {
  render() {
 // document.getElementById('Navbar_links').style.display = 'flex';
  function toggleMenu() {
    let appLinks = document.getElementById('Navbar_links');

    if (appLinks.style.display === "none") {
      appLinks.style.display = "flex";
    } else {
      appLinks.style.display = "none";
    }

  }
  function scrollToTargetAdjusted(section){
    const element = document.getElementById(section);
    const headerOffset = 45;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}
  return (
    <React.Fragment>
      <div className="Navbar__menu"  onClick={() => {toggleMenu()}}><img src={require('./img/hamburger.png')} alt='' /></div>
      <nav id="Navbar_links">
        <Link className="Navbar__Link" onClick={() => { window.scrollTo(0, 0);scrollToTargetAdjusted('home-main')}} to='/'>Home</Link>
        <Link className="Navbar__Link" onClick={() => { window.scrollTo(0, 0);scrollToTargetAdjusted('about-main')}} to='/about'>About</Link>
        <Link className="Navbar__Link" onClick={() => { window.scrollTo(0, 0);scrollToTargetAdjusted('project-main')}} to='/projects'>Projects</Link>
        <Link className="Navbar__Link" onClick={() => { window.scrollTo(0, 0);scrollToTargetAdjusted('contact-main')}} to='/contact'>Contact</Link>
      </nav>
    </React.Fragment>  
  );
}
}