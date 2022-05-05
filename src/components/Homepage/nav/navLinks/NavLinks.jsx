import React from 'react';
import "./navLinks.scss"
import {Link} from "react-router-dom";

const Navlinks = () => {

    return (
      <div className="nav-links">

        <ul className=" flex-column flex-md-row align-items-center d-lg-flex">
        <li className="secondary-color">
          <a href="#about"><span className="primary-color">01.</span> About</a>
        </li>
        <li className="secondary-color">
          <a href="#work"><span className="primary-color">02.</span> Work</a>
        </li>
        <li className="secondary-color">
          <a href="#contact"><span className="primary-color">03.</span> Contact</a>
        </li>
      
      <Link to="/cv">
        <li className="btn btn-outlined">Resume</li>
      </Link>
      
      </ul>
      </div>

    );
}
export default Navlinks;
