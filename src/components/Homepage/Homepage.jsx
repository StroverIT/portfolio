import Navigation from "./nav/Navigation"
import React from 'react';
import Header from './header/Header';
import About from './about/About';
import Contact from './contact/Contact';
import Projects from "./projects/Projects"

const Homepage = () => {
    return (
        <>  
        <Navigation />
        <div className="container">
              <Header />
      <About />
      <Projects />
      <Contact />
        </div>
        </>
    );
}

export default Homepage;
