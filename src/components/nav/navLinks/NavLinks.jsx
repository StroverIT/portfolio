import React from 'react';
import "./navLinks.scss"
const Navlinks = () => {

    return (
        <ul className="nav-links flex-column flex-md-row align-items-center d-lg-flex">
        <li className="secondary-color">
          <a href="#about"><span className="primary-color">01.</span> About</a>
        </li>
        <li className="secondary-color">
          <a href="#work"><span className="primary-color">02.</span> Work</a>
        </li>
        <li className="secondary-color">
          <a href="#contact"><span className="primary-color">03.</span> Contact</a>
        </li>
        <li className="btn btn-outlined">Resume</li>
      </ul>
    );
}
export default Navlinks;
