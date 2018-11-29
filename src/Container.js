import React from 'react';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
export default function Container() {
  return (
    <React.Fragment>
      <Home/>
      <About/> 
      <Projects/>
      <Contact/>
    </React.Fragment>  
  );
}