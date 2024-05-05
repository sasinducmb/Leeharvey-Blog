import React from 'react';
import './styles.css';

const Header = () => (
  <header>
    <a href="https://leeharvey.co.uk/" className="blog-goBack">
      <span> &#8592;</span> <span>Leeharvey.co.uk</span>
    </a>

    <div className="home-header">
      <h2>Inc. This Day</h2>
      <h1>
        <span>“</span> Leeharvey Blogspot <span>”</span>
      </h1>
      <p>
        awesome place to make oneself <br /> productive and entertained through
        daily updates.
      </p>
    </div>
  </header>
);

export default Header;
