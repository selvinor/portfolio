import React, { Component } from 'react';
import { Route, withRouter, BrowserRouter, Switch } from 'react-router-dom';
import Container from './Container'
import './styles/App.css';

class App extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <BrowserRouter>
      <div className="app">
      <Switch>
          <Route exact path="/" component={Container} 
          
            // onUpdate={document.getElementById("home-section").scrollIntoView()}
          />
          <Route exact path="/about" component={Container} 
          
            // onUpdate={document.getElementById("about-section").scrollIntoView()}

          />
          <Route exact path="/projects" component={Container} 
            // onUpdate={document.getElementById("projects-section").scrollIntoView()}
          />

          <Route exact path="/contact" component={Container} 
            // onUpdate={document.getElementById("contact-section").scrollIntoView()} 
          />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
