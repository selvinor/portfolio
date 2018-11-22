import React from 'react';
//import '../styles/footer.css';

export default function Footer() {
  return (
    <footer>
      <a className="social-icons" href="https://github.com/selvinor/portfolio">
        <i className="fab fa-github social-icons" title="Link to github"></i>
      </a>
      <a href="https://www.linkedin.com/in/selnorman">
        <i className="fab fa-linkedin social-icons"  title="Link to instagram" />
      </a>
      <p className='whiteFont'>selnorman.com © 2018</p>
    </footer>
  );
}