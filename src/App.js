import React, { Component } from 'react';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import Container from './Container'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
          <Route exact path="/" component={Container} 
             onEnter={function(){
              document.getElementById("home-section").scrollIntoView();
              }
            }
          />
          <Route exact path="/about" component={Container} 
             onEnter={function(){
              document.getElementById("about-section").scrollIntoView();
              }
            }
          />
          <Route exact path="/projects" component={Container} 
             onEnter={function(){
              document.getElementById("projects-section").scrollIntoView();
              }
            }
          />

          <Route exact path="/contact" component={Container} 
             onEnter={function(){
              document.getElementById("contact_section").scrollIntoView();
              }
            }
          />

      </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
