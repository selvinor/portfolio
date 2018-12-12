import React, { Component }  from 'react';
import './styles/contact.css';
export default class Contact extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <main id="contact-main">   
          <section id="contact-section">
            <article id="contact-article">
              <h3 className="contactMe">Contact Me</h3>
              <div className="contact-form">
                <input type="email" maxLength="50" placeholder="Title..." />
                <textarea rows="8" maxLength="500" placeholder="Contents..." />               
              </div>
              <ul className="contacts">
                <li><a href="https://github.com/selvinor"><img src={require('./img/GitHub-Mark-120px-plus.png')} alt="Contact me via github"/></a></li>
                <li><a href="/SelNorman.pdf"><img src={require('./img/pdf.png')} alt="View my Resume"/></a></li>
                <li><a href="https://www.linkedin.com/in/selvin-norman-6ba4aa2b/"><img src={require('./img/icons8-linkedin-100.png')} alt="Contact me via linkedin"/></a></li>
              </ul>
            </article> 
          </section>
        </main>    
      </React.Fragment>  
    );  
  }
}
