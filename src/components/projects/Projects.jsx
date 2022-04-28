import React, { useEffect, useRef, useState } from 'react';
import "./projects.scss"
import {  BsGithub } from "react-icons/bs";
import { FiExternalLink} from "react-icons/fi"

import SoftOfficeVideo from "../video/Video";
import softOfficeVideoSource from "../../assets/videos/softOffice.mkv"

const Projects = () => {
    const [isStarted, startVideo] = useState(false)
    const text = useRef(null)
    useEffect(()=>{
        if(isStarted){
            console.log(text.current);

            text.current.classList.add("d-none")
        }
        if(!isStarted){
            console.log(text.current);
            text.current.classList.remove("d-none")
        }

    },[isStarted,text])
    const projects = {
        first: {
            title: "SoftOffice",
            description: `My first deployed e-commerce website. It was fully made from me end to end project for my friend's "client".`,
            technologies: ["Nginx", "MongoDB", "NodeJS", "Express", "Bootstrap", "Jquery"]
        }
    }
    return (
        <section className="projects">
      <h3 className="title title-color secondSection">Some Things I've Built</h3>
      <p className="reading-text-color">To see demo of the project, hover the image! If you want to see it live, click it!</p>
      <section className="projects-content">
          <ul>
              <li className="project projects-right row">
              <section className=" text   justify-content-center flex-column d-none" ref={text}>
                      <div className="container">
                          <a className="projects-title title-color">{projects.first.title}</a>
                          <p className="reading-text-color">
                              
                          </p>
                          <ul className="technologies-left reading-text-color">
                                <li>Nginx</li>
                                <li>MongoDb</li>
                                <li>NodeJs</li>
                                <li>Express</li>
                                <li>Boostrap</li>
                                <li>Jquery</li>
                          </ul>
                          <section className="icons icons__right reading-text-color">
                                <a><BsGithub /></a>
                                <a><FiExternalLink /></a>
                          </section>
                      </div>
                  </section>
                  <section className="image" onMouseEnter={()=> startVideo(true)} onMouseLeave={()=> startVideo(false)}>
                      <a href="#">
                            <SoftOfficeVideo source={softOfficeVideoSource} />
                      </a>
                  </section>
                  
              </li>
          </ul>
      </section>
        </section>
    );
}

export default Projects;
