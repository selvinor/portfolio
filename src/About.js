import React, { Component }  from 'react';
import './styles/about.css';
import Nav from './Nav'
export default class About extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <main id="about-main">   
          <section id="about-section">
            <article className="about-article">
              <h2>About Me</h2>         
              <div className="avatar">
                <img src={require('./img/me_160_circle.png')} alt=""/>
              </div>
              <p className="about-text">My passion is fueled by a mix of technology and art. As a full stack developer, I enjoy creating products and experiences that leverage my skills as a photographer, electronic musician and graphic artist.</p>
              <p className="about-text">My work experience ranges from small business ownership to software development and support, to deploying network and server infrastructure across the globe.</p>
              <p className="about-text">Delivering value to my team and project is my primary focus.</p>             
            </article> 
          </section>
        </main>    
      </React.Fragment>  
    );  
  }
}