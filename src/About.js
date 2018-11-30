import React from 'react';
import './styles/about.css';
import Nav from './Nav'
export default function About() {
  return (
    <React.Fragment>
      <Nav />
      <main className="about-main">   
        <section id="about-section">
          <article className="about-article">
            <h2>About Me</h2>         
            <div className="avatar">
              <img src={require('./img/me_160_circle.png')} alt=""/>
            </div>
            <p className="about-text">My passion is fueled by a blend of technology and art. As a full stack developer, avid photographer, electronic musician, and graphic artist, I enjoy the challenge of combining skills to solve problems and create new things.</p>
            <p className="about-text">I like to help people get things done easier and better, and my goal as a developer is creating apps that further that objective</p>
            <p className="about-text">My work experience ranges from small business ownership to software development and support for financial institutions processing millions of daily transactions, to deploying network and server infrastructure across the globe.</p>
            <p className="about-text">I am committed to delivering value to my team and project.</p>             
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}