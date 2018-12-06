import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  componentWillMount() {
    
  }

  render() {

  function scrollToTargetAdjusted(section){

    const ele = document.querySelector(section);
    console.log('ele: ',ele);
   // const headerOffset = 45;
    const elementPosition = ele.getBoundingClientRect().top;
    console.log('elementPosition: ',elementPosition);

    
    const element = document.querySelector(section);
    element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
  return (
    <div className="top">
      <div className="top-left">Sel Norman</div>
      <div className="top-right">
        <nav id="Navbar_links">
          <Link className="Navbar__Link" onClick={() => { scrollToTargetAdjusted('#home-main')}} to='/'>Home</Link>
          <Link className="Navbar__Link" onClick={() => { scrollToTargetAdjusted('#about-main')}} to='/about'>About</Link>
          <Link className="Navbar__Link" onClick={() => {document.querySelector('#project-main').scrollIntoView({ block: 'start',  behavior: 'smooth' })}} to='/projects'>Projects</Link>
          <Link className="Navbar__Link" onClick={() => { scrollToTargetAdjusted('#contact-main')}} to='/contact'>Contact</Link>
        </nav>
      </div>
    </div>  
  );
}
}