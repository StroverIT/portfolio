import React, { useEffect, useRef, useState } from 'react';

import {  BsGithub } from "react-icons/bs";
import { FiExternalLink} from "react-icons/fi"

import SoftOfficeVideo from "../video/Video";

export default function Project({title, description, technologies, video, projectUrl}) {
    const [isStarted, startVideo] = useState(false)
    const text = useRef(null)
    useEffect(()=>{
        if(isStarted){
            text.current.classList.add("d-none")
        }
        if(!isStarted){
            text.current.classList.remove("d-none")
        }

    },[isStarted,text])
    function showTechs(array){
        return array.map(e=>{
            return <li key={e}>{e}</li>
        })
    }
  return (
    <li className="project projects-right row">
              <section className="text justify-content-center flex-column d-none" ref={text}>
                      <div className="container">
                          <a href={projectUrl} className="projects-title title-color">{title}</a>
                          <p className="reading-text-color">
                              {description}
                          </p>
                          <ul className="technologies reading-text-color">
                              {showTechs(technologies)}
                               
                          </ul>
                          <section className="icons icons__right reading-text-color">
                                <a><BsGithub /></a>
                                <a><FiExternalLink /></a>
                          </section>
                      </div>
                  </section>
                  <section className="image" onMouseEnter={()=> startVideo(true)} onMouseLeave={()=> startVideo(false)}>
                      <a href={projectUrl}>
                            <SoftOfficeVideo source={video} />
                      </a>
                  </section>
                  
              </li>
  )
}
