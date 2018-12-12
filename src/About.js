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
                <p className="about-text">Hello, I'm a full stack developer based in Portland Oregon.  My passion has always been tinkering with machines, gadgets, and software - figuring out how they work, why they broke, and how to give them new abilities.</p>
                <p>I've spent the last couple of years as a co-owner of a small flower shop in downtown Portland, Oregon. In my spare time, I play live music around town with an array of synthesizers.  I'm an avid electronic musician, photographer and gearhead. </p>
                <p>I'm looking forward to joining a team where I can collaborate with awesome people and continue to grow.</p>
              </div>
            </article> 
          </section>
        </main>    
      </React.Fragment>  
    );  
  }
}