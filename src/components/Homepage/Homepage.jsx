import Navigation from "./nav/Navigation"
import React from 'react';
import Header from './header/Header';
import About from './about/About';
import Contact from './contact/Contact';
import Projects from "./projects/Projects"
import Footer from "./footer/Footer"

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
        <Footer />
        </>
    );
}

export default Homepage;
