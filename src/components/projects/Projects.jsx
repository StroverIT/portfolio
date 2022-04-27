import React from 'react';
import "./projects.scss"
import {  BsGithub } from "react-icons/bs";
import { FiExternalLink} from "react-icons/fi"

import SoftOfficeVideo from "../video/Video";
import softOfficeVideoSource from "../../assets/videos/softOffice.mkv"

const Projects = () => {
    return (
        <section className="projects">
      <h3 className="title title-color secondSection">Some Things I've Built</h3>
      <section className="projects-content">
          <ul>
              <li className="project projects-right row">
                  <section className="image ">
                      <a href="#">
                            <SoftOfficeVideo source={softOfficeVideoSource}/>
                      </a>
                  </section>
                  <section className="text ">
                      <a className="projects-title title-color">SoftOffice</a>
                      <p>
                          My first deployed e-commerce website. It was fully made from me end to end project for my friend's "client".
                      </p>
                      <ul className="technologies-left">
                            <li>Nginx</li>
                            <li>MongoDb</li>
                            <li>NodeJs</li>
                            <li>Express</li>
                            <li>Boostrap</li>
                            <li>Jquery</li>
                      </ul>
                      <section className="icons icons__right">
                            <a><BsGithub /></a>
                            <a><FiExternalLink /></a>
                      </section>
                  </section>
              </li>
          </ul>
      </section>
        </section>
    );
}

export default Projects;
