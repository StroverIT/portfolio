import React from 'react';
import Header from './header/Header';
import About from './about/About';
import Contact from './contact/contact';

const Homepage = () => {
    return (
        <div className="container">
              <Header />
      <About />
      <Projects />
      <Contact />
        </div>
    );
}

export default Homepage;
