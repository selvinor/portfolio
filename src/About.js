import React from 'react';
import './styles/about.css';
import Header from './Header'
import Nav from './Nav'
export default function About() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <main>   
        <section>
          <article className="about">
            <h2>About Me</h2>         
            <div>
              <img src="src\img\me.jpg" alt="it's me"/>
            </div>
            <p>I have spent my life as a creative and passionate problem-solver who has enjoyed melding disparate technical and artistic interests into unique experiences and career opportunities. </p>
            <p>My experience as a Software Developer, Hardware Technician, Electronic Musician, Photographer, Graphic Artist, Traveler, and Flower Shop owner has enabled me to design, build and run sites and promotions with digital assets that I created myself.</p>
            <p>My return to software development comes after almost five years of immersion in the world of videogames and hardware deployment. It's exciting to be making the switch to developing software that runs on the bare metal that I embraced for so long (No more smashed fingers and dropping 60 pound servers on my foot!).</p>
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}