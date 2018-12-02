import React, { Component }  from 'react';
import './styles/home.css';
import Nav from './Nav'
export default class Home extends Component {
  componentWillMount() {
    
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main id="home-main">   
          <section id="home-section">
            <article id="home-article">
              <h2 className="home-h2">Sel Norman</h2>
              <p>is a Full Stack Developer looking to create mobile-first software for entrepreneurs and businesses.</p>
            </article> 
          </section>
        </main>   

  
      </React.Fragment>  
    );  
  }
}