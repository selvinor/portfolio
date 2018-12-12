import React, { Component }  from 'react';
import './styles/about.css';
export default class About extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <main id="about-main">   
          <section id="about-section">
            <article className="about-article">
              <h2>About Me</h2>         
              <div className="avatar">
                <img src={require('./img/me_160_circle.png')} alt=""/>
              </div>
              <div className="about-desc">
                <p className="about-text">Hello, I'm a full stack developer based in Portland Oregon.  My passion has always been tinkering with machines, gadgets, and software - figuring out how they work, why they broke, and how to give them new abilities. I'm an avid electronic musician, photographer and gearhead. </p>
                <p>I spent the last couple of years as the co-owner of a small flower shop in downtown Portland, Oregon. My struggles with existing floral industry software and vendors influenced me to want to develop my own software for the business, so the next step was to go for intensive training to update my skills.</p>
                <p>Prior to becoming a small business owner, I worked in the videogame industry, designing and deploying server and network infrastructure on a global scale. After several years of climbing up and down ladders and doing all the other related physical activities, software development started looking more and more attractive.</p>
                <p>Before switching to hardware, I traveled extensively as a banking software consultant, but after 10 years, left to focus more on family.</p>
                <p>It's very exciting to be starting a new career as a developer. I'm looking forward to joining a team that values collaboration and fosters personal and professional growth.</p>
              </div>
            </article> 
          </section>
        </main>    
      </React.Fragment>  
    );  
  }
}