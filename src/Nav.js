import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  componentWillMount() {
    
  }

  render() {

  function scrollToTargetAdjusted(section){
    const element = document.getElementById(section);
    const headerOffset = 60;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}
  return (
    <React.Fragment>
      {/* <div className="Navbar__menu"  onClick={() => {toggleMenu()}}><img src={require('./img/hamburger.png')} alt='' /></div> */}
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