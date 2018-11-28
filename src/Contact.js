import React from 'react';
import './styles/contact.css';
import Nav from './Nav'
export default function Contact() {
  return (
    <React.Fragment>
      <Nav />
      <main>   
        <section className="contact-section">
          <article className="contact-article">
            <h2 className="contactMe">Contact Me @</h2>
            <div class="contact">
              <ul className="contacts">
                <li><a href="https://github.com/selvinor"><img src={require('./img/github.png')} alt="Contact me via github"/><br />github.com/selvinor</a></li>
                <li><a href="https://www.linkedin.com/in/selvin-norman-6ba4aa2b/"><img src={require('./img/linkedin-logo.png')} alt="Contact me via linkedin"/><br />www.linkedin.com/in/selnorman</a></li>
                <li><a href="mailto:selvin715@gmail.com"><img src={require('./img/email.png')} alt="Contact me via email"/><br />Contact me via email</a></li>
              </ul>
            </div>
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}