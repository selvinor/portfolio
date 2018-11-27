import React from 'react';
import './styles/about.css';
import Nav from './Nav'
export default function About() {
  return (
    <React.Fragment>
      <Nav />
      <main className="about">   
        <section>
          <article className="about">
            <h2>About Me</h2>         
            <div className="avatar">
              <img src={require('./img/me_200.jpg')} alt="it's me"/> 
            </div>
            <p>My passion is solving clunky human problems with user-friendly technology. I like to help make it easier for people to get things done.</p>
            <p>My experience ranges from working with small scale mom and pop businesses, financial institutions processing millions of daily transactions, to deploying network and server infrastructure across the globe.</p>
            <p>I'm committed to delivering value to my team and project, whether it is new development, adding enhancements to existing systems, or providing utility to other teams.</p>             
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}