import React from 'react';
import './styles/home.css';
import Header from './Header'
import Nav from './Nav'
export default function Home() {
  return (
    <React.Fragment>
      <Nav />
      <main>   
        <section className="byline">
          <article className="home">
            <h2>Sel Norman</h2>
            <h3>Full Stack Developer</h3>
            <div class="home"></div>
            <p>Portland, Oregon</p>
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}