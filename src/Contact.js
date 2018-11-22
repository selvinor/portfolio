import React from 'react';
//import '../styles/home.css';
import Header from './Header'
import Nav from './Nav'
export default function Contact() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <main>   
        <section>
          <article>
            <h2>Contact</h2>
            <h3>Summary</h3>
            <div class="contact">
              <img src="" alt=""/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat eveniet reprehenderit officia soluta, et quae recusandae doloremque aperiam eligendi perferendis corrupti totam at, repellendus hic animi debitis sint dolorem porro!</p>
            </div>
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}