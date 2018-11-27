import React from 'react';
import './styles/projects.css';
import Nav from './Nav'
export default function Projects() {
  return (
    <React.Fragment>
      <Nav />
      <main>   
        <section>
          <article>
            <h2 className="projectTitle">Project:</h2>
            <h2 className="project">Blooms Florist Subscriptions</h2>
            <div class="projects">
              <a href="https://blooms-pdx.herokuapp.com/"><img src={require('./img/blooms_400_186.png')} alt="blooms"/></a>
              <h4>Summary:</h4>
              <ul>
                <li>
                  <p>Blooms Subscriptions is a florist app that enables customers to send flowers to a recipient at a residence or business according to a schedule.</p>
                </li>
                <li>
                  <p>React, Redux, Node.js, Express, Mongo, Mongoose, Bcrypt, Passport</p>
                </li>
              </ul>            
            </div>
          </article> 
          <article>
            <h2 className="projectTitle">Project: </h2>
            <h2 className="project">Cozy Spaces</h2>
            <div className="projects">
            <a href="https://emoji-space-rep-client.herokuapp.com/"><img src={require('./img/cozy_400_186.png')} alt="cozy"/></a>
              <h4>Summary:</h4>
              <ul>
                <li>
                  <p>Cozy Spaces is an app that allows people to find and recommend cozy spots to hang out in their vicinity.  They can rate places and even add their own favorite cozy spaces.</p>
                </li>
                <li>
                  <p>React, Redux, Node.js, Express, Mongo, Mongoose, Bcrypt, Passport</p>
                </li>
              </ul>
            </div>
          </article> 
          <article>
            <h2 className="projectTitle">Project:</h2>
            <h2 className="project">Emoji Madness</h2>
            <div class="projects">
            <a href="https://dashboard.heroku.com/apps/emoji-space-rep-client"><img className="about-img" src={require('./img/emoji_400_186.png')} alt="emoji"/></a>
              <h4>Summary:</h4>
              <ul>
                <li>
                  <p>The Emoji Madness App will help you to learn the emoji language, which is based on symbols that easily bridge language barriers, save time, and add emotional nuance that is difficult to achieve in brief text exchanges. The app utilizes Spaced Repetition Learning to help users retain knowledge easier by testing them more often on the things they forget most frequently.  </p>
                  <p>React, Redux, Node.js, Express, Mongo, Mongoose, Bcrypt, Passport</p>
                </li>
              </ul>
            </div>
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}