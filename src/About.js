import React from 'react';
import './styles/about.css';
import Nav from './Nav'
export default function About() {
  return (
    <React.Fragment>
      <Nav />
      <main className="about-main">   
        <section>
          <article className="about-article">
            <h2>About Me</h2>         
            <div className="avatar">
              <img src={require('./img/me_200_circle.png')} alt=""/>
            </div>
            <p class="about-text">My passion is rooted at the crossroads of technology and art. As an avid computer technician, photographer, electronic musician, graphic artist, and now full stack developer, I enjoy combining my skills to create products that provide customer satisfaction.</p>
            <p class="about-text">I like to help people get things done easier and better, and as a developer my goal is creating apps that fulfill that goal.</p>
            <p class="about-text">My work experience ranges from small business ownership to software development and support for financial institutions processing millions of daily transactions, to deploying network and server infrastructure across the globe.</p>
            <p class="about-text">I am committed to delivering value to my team and project.</p>             
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}