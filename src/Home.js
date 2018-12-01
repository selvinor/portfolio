import React from 'react';
import './styles/home.css';
import Nav from './Nav'
export default function Home() {
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
      <div className="links">
        <ul className="home-contacts">
          <li className="home-contact home-contact1"><a href="https://github.com/selvinor"><img src={require('./img/github.png')} alt="Contact me via github"/></a></li>
          <li className="home-contact home-contact2"><a href="https://www.linkedin.com/in/selvin-norman-6ba4aa2b/"><img src={require('./img/linkedin-logo.png')} alt="Contact me via linkedin"/></a></li>
          <li className="home-contact home-contact3 email"><a href="mailto:selvin715@gmail.com"><img src={require('./img/email.png')} alt="Email me"/></a></li>
        </ul> 
       </div>

    </React.Fragment>  
  );
}