import React from 'react';
import './styles/projects.css';
import Nav from './Nav'
export default function Projects() {
  return (
    <React.Fragment>
      <Nav />
      <main>  
        <section id="project-section">
        <h2>Projects</h2>
          <article className="project-article">
            <h3 className="projectTitle">Project: Blooms Florist Subscriptions</h3>
            <div className="projects">
              <div className="projImg"></div>
                <a href="https://blooms-pdx.herokuapp.com/"><img src={require('./img/blooms_screen_640.jpg')} alt="blooms"/></a>
                <div className="summary">
                  <p>https://github.com/selvinor/selvin-subscription-client</p>
                  <p>Blooms Subscriptions is a florist app that enables customers to send flowers to a recipient at a residence or business according to a schedule.</p>
                  <p>Tech Stack: React, Redux, Node.js, Express, Mongo, Mongoose, Bcrypt, Passport</p>
              </div>            
            </div>
          </article> 
          <article className="project-article">
            <h3 className="projectTitle">Project: Cozy Spaces</h3>
            <div className="projects">
              <div className="projImg">
                <a href="https://cozy-spaces-client.herokuapp.com/"><img src={require('./img/cozy_640.jpg')} alt="cozy"/></a>
              </div>
              <div className="summary">
                <p>https://github.com/thinkful-ei23/cozy-spaces-client</p>
                <p>Cozy Spaces is an app that allows people to find and recommend cozy spots to hang out in their vicinity.  They can rate places and even add their own favorite cozy spaces.</p>
                <p>Tech Stack: React, Redux, Node.js, Express, Mongo, Mongoose, Bcrypt, Passport</p>
                </div>
            </div>
          </article> 
          <article className="project-article">
            <h3 className="projectTitle">Project: Blooms Orders</h3>
            <div className="projects">
              <div className="projImg">
                <img className="about-img" src={require('./img/bloomsOrders_640.jpg')} alt="emoji"/>
              </div>
              <div className="summary">
                <p>https://github.com/selvinor/order-entry-app</p>
                <p>The Blooms Order App is a Mobile app built with React Native that provides an alternative to taking phone and walk-in orders on paper.</p>
                <p>The florist can capture the details of walk-in and phone orders using a tablet or phone.</p>
                <p>The app will integrate with existing systems to synch orders from all sources and serve as a single source of truth on pending orders.</p>
                <p>Offers the potential to easily update orders and set statuses.</p>
                <p>Tech Stack: React Native, Redux, Node.js, Express, Mongo, Mongoose</p>
              </div>
            </div>
          </article> 
          <article className="project-article">
            <h3 className="projectTitle">Project: Emoji Madness</h3>
            <div className="projects">
              <div className="projImg">
                <a href="https://emoji-space-rep-client.herokuapp.com"><img className="about-img" src={require('./img/emojiScreens.jpg')} alt="emoji"/></a>
              </div>
              <div className="summary">
                <p>https://github.com/thinkful-ei23/Client-Emoji-Tim-Sel</p>
                <p>The Emoji Madness App will help you to learn the emoji language, which is based on symbols that easily bridge language barriers, save time, and add emotional nuance that is difficult to achieve in brief text exchanges. The app utilizes Spaced Repetition Learning to help users retain knowledge easier by testing them more often on the things they forget most frequently.  </p>
                <p>Tech Stack: React, Redux, Node.js, Express, Mongo, Mongoose, Bcrypt, Passport</p>
              </div>
            </div>
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}