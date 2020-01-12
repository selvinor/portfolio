import React, { Component }  from 'react';
import './styles/home.css';
export default class Home extends Component {
  componentWillMount() {
    
  }
  render() {
    return (
      <React.Fragment>
        <main id="home-main">   
          <section id="home-section">
            <article id="home-article">
              <h2 className="home-h2">Sel Norman</h2>
              <p>is a Full Stack Developer who creates mobile-first business software.</p>
            </article> 
          </section>
        </main>   

  
      </React.Fragment>  
    );  
  }
}