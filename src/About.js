import React, { Component }  from 'react';
import './styles/about.css';
export default class About extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <main id="about-main">   
          <section id="about-section">
            <article className="about-article">
              <h2>About Me</h2>         
              <div className="avatar">
                <img src={require('./img/me_160_circle.png')} alt=""/>
              </div>
              <div className="about-desc">
                <p className="about-text">Hello, I'm a full stack developer based in Portland Oregon.  My passion is developing useful software that makes it easier to do business.</p>
              </div>
            </article> 
          </section>
        </main>    
      </React.Fragment>  
    );  
  }
}