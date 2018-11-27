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
              <img src={require('./img/me_200.jpg')} alt="it's me"/> 
            </div>
            <p>My passion is solving clunky human problems with user-friendly technology. I like to help make it easier for people to get things done.</p>
            <p>My experience ranges from working with small scale mom and pop businesses, to financial institutions processing millions of daily transactions, to deploying network and server infrastructure across the globe.</p>
            <p>My commitment is to deliver value to my team and project.</p>             
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}