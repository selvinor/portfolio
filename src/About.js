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
                <p className="about-text"> As a full stack developer, I enjoy creating apps that make it easy for businesses and customers to interact with products and services.  </p>
                <p className="about-text">I am passionate about delivering value to my team and project. My passion is fueled by a mix of skills as a developer, photographer, electronic musician and graphic artist.</p>
                <p className="about-text">My experience ranges from local small business ownership, to financial institution software development and support, to deploying network and server infrastructure across the globe.</p>
              </div>
            </article> 
          </section>
        </main>    
      </React.Fragment>  
    );  
  }
}