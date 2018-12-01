import React, { Component }  from 'react';
import './styles/contact.css';
import Nav from './Nav'
export default class Contact extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <main id="contact-main">   
          <section id="contact-section">
            <article id="contact-article">
              <h3 className="contactMe">Contact Me @</h3>
              <div class="contact-form">
                <input type="email" maxlength="50" placeholder="Title..." value="" />
                <textarea rows="8" maxlength="500" placeholder="Contents..." />               
              </div>
              <button><a href="mailto:selnorman.developer@gmail.com?subject=&amp;body=">Send E-mail</a></button>
              <ul className="contacts">
                <li><a href="https://github.com/selvinor"><img src={require('./img/github.png')} alt="Contact me via github"/></a></li>
                <li><a href="https://www.linkedin.com/in/selvin-norman-6ba4aa2b/"><img src={require('./img/linkedin-logo.png')} alt="Contact me via linkedin"/></a></li>
              </ul>
            </article> 
          </section>
        </main>    
      </React.Fragment>  
    );  
  }
}
