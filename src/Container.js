import React, { Component }  from 'react';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
export default class Container extends Component {
  componentWillMount() {
    
  }


  render() {
    return (
      <React.Fragment>
        <Home/>
        <About/> 
        <Projects/>
        <Contact/>
      </React.Fragment>  
    );  
  }
}