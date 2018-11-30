import React from 'react';
import './styles/contact.css';
import Nav from './Nav'
export default function Contact() {
  return (
    <React.Fragment>
      <Nav />
      <main className="contact-main">   
        <section id="contact-section">
          <article id="contact-article">
            <h3 className="contactMe">Contact Me @</h3>
            <div className="contact">
              <ul className="contacts">
                <li><a href="https://github.com/selvinor"><img src={require('./img/github.png')} alt="Contact me via github"/></a></li>
                <li><a href="https://www.linkedin.com/in/selvin-norman-6ba4aa2b/"><img src={require('./img/linkedin-logo.png')} alt="Contact me via linkedin"/></a></li>
                <li><a href="mailto:selvin715@gmail.com"><img src={require('./img/email.png')} alt="Contact me via email"/></a></li>
              </ul>
            </div>
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}
