import React from "react";
import "./navigation.css";
import Logo from "../../assets/Logo.svg";
import { BsInstagram, BsGithub, BsFacebook, BsYoutube } from "react-icons/bs";

const Navigation = () => {
  return (
    <nav className="container-fluid">
      <section className="navTextContainer d-flex justify-content-between">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="d-flex nav-links">
          <ul className="d-flex flex-column flex-md-row align-items-center">
            <li className="secondary-color">
              {" "}
              <a href=""><span className="primary-color">01.</span> About</a>
            </li>
            <li className="secondary-color">
              {" "}
              <a href=""><span className="primary-color">02.</span> Work</a>
            </li>
            <li className="secondary-color">
              {" "}
              <a href=""><span className="primary-color">03.</span> Contact</a>
            </li>
            <li className="btn">Resume</li>
          </ul>
        </div>
      </section>
      <section className="navIconContainer d-none d-lg-block">
          <div className="fixed-wrapper">
              <div className="navSticky nav-social ">
                  <ul className="d-flex flex-column justify-content-between">
                <li>
                  <a href="">
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsYoutube />
                  </a>
                </li>
                </ul>
              </div>
          </div>
          <div className="fixed-wrapper fixed-wrapper-right">
              <div className="navSticky nav-email d-flex flex-column ">
                <a className="d-flex justify-content-center align-content-center secondary-color" href="#">emilzlatinov1@abv.bg</a>
              </div>
          </div>
      </section>
    </nav>
  );
};

export default Navigation;
