import React from 'react';
import './styles/contact.css';
import Nav from './Nav'
export default function Contact() {
  return (
    <React.Fragment>
      <Nav />
      <main>   
        <section>
          <article>
            <h2 className="contactMe">Contact Me @</h2>
            <div class="contact">
              <img src="" alt=""/>
              <ul className="contacts">
                <li><img src={require('./img/github.png')} alt="Contact me via github"/></li>
                <li><img src={require('./img/linkedin-logo.png')} alt="Contact me via linkedin"/></li>
                <li><img src={require('./img/email.png')} alt="Contact me via email"/></li>
              </ul>
            </div>
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}