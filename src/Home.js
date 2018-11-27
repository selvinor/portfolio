import React from 'react';
import './styles/home.css';
import Nav from './Nav'
export default function Home() {
  return (
    <React.Fragment>
      <Nav />
      <main className="home-main">   
        <section id="home-section">
          <article id="home-article">
            <h2 className="home-h2">Sel Norman</h2>
            <h3 className="home-h3">Full Stack Developer</h3>
            <p className="home-p">Portland, Oregon</p>
          </article> 
        </section>
      </main>   
      <div className="links">
        <ul className="home-contacts">
          <li className="home-contact1"><a href="https://github.com/selvinor"><img src={require('./img/github.png')} alt="Contact me via github"/><br />github.com/selvinor</a></li>
          <li className="home-contact2"><a href="https://www.linkedin.com/in/selvin-norman-6ba4aa2b/"><img src={require('./img/linkedin-logo.png')} alt="Contact me via linkedin"/><br />www.linkedin.com/in/selnorman</a></li>
          <li className="home-contact3 email"><a href="mailto:selvin715@gmail.com"><img src={require('./img/email.png')} alt="Contact me via email"/><br />Contact me via email</a></li>
        </ul> 
       </div>

    </React.Fragment>  
  );
}