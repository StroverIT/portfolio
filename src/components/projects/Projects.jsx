import React from 'react';
import "./projects.scss"

const Projects = () => {
    return (
        <section className="projects">
      <h3 className="title title-color secondSection">Some Things I've Built</h3>
      <section className="projects-content">
          <ul>
              <li className="projects-right">
                  <h3>My first project</h3>
                  <p>
                      My first deployed e-commerce website. It was fully made from me end to end project for my friend's "client".
                  </p>
                  <ul className="technologies-left d-flex">
                        <li>Nginx</li>
                        <li>MongoDb</li>
                        <li>NodeJs</li>
                        <li>Express</li>
                        <li>Boostrap</li>
                        <li>Jquery</li>
                  </ul>
              </li>
          </ul>
      </section>
            {/* Show some work */}
        </section>
    );
}

export default Projects;
