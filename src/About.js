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
                <p className="about-text"> Hello, I'm a full stack developer based in Portland Oregon.  My passion has always been tinkering with machines, gadgets, and software - figuring out how they work, why they broke, and how to give them new abilities. I'm an avid electronic musician, photographer and gamer.</p>
                <p>Prior to becoming a full stack developer, I spent five years designing and deploying server and network infrastructure on a global scale. After several years of climbing up and down ladders and doing all the other related physical activities, software development started looking more and more attractive. Prior to my years working with hardware, I had a ten year career as a software consultant working on mainframe banking systems across the US and in Mexico.</p>
                <p>It's very exciting to reincarnate myself as a developer in the Internet age. I'm looking forward to joining a team and contributing with my newly-minted skills and broad experience.</p>
              </div>
            </article> 
          </section>
        </main>    
      </React.Fragment>  
    );  
  }
}