import "./projects.scss"

import softOfficeVideoSource from "../../../assets/videos/softOffice.mp4"

import Project from './Project';

const Projects = () => {
  
    const projects = {
        first: {
            title: "SoftOffice",
            description: `My first deployed e-commerce website. It was fully made from me end to end project for my friend's "client".`,
            technologies: ["Nginx", "MongoDB", "NodeJS", "Express", "Bootstrap", "Jquery"],
            projectUrl: "https://www.softoffice.bg/",
            gitUrl: "https://github.com/StR0vErBG/softoffice"
        }
    }
   
    return (
        <section className="projects pt-4 mb-3" id="work">
      <h3 className="title title-color secondSection">Some Things I've Built</h3>
      <p className="reading-text-color mt-1 mb-1 ">To see demo of the project, hover the image! If you want to see it live, click it!</p>
      <section className="projects-content">
          <ul>
             <Project title={projects.first.title} description={projects.first.description} technologies={projects.first.technologies} video={softOfficeVideoSource} projectUrl={projects.first.projectUrl} gitUrl={projects.first.gitUrl}/>
          </ul>
      </section>
        </section>
    );
}

export default Projects;
