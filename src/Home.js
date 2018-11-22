import React from 'react';
//import '../styles/home.css';
import Header from './Header'
import Nav from './Nav'
export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <main>   
        <section>
          <article>
            <h2>Greeting</h2>
            <h3>Summary</h3>
            <div class="home"></div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat eveniet reprehenderit officia soluta, et quae recusandae doloremque aperiam eligendi perferendis corrupti totam at, repellendus hic animi debitis sint dolorem porro!</p>
          </article> 
        </section>
      </main>    
    </React.Fragment>  
  );
}