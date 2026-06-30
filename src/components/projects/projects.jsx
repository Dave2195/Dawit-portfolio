import "./Projects.css";

import projects from "../../data/projects";

import ProjectCard from "./ProjectCard";

function Projects(){

    return(

        <section className="projects" id="projects">

            <h2>My Projects</h2>

            <div className="projects-grid">

                {projects.map((project)=>(

                    <ProjectCard

                        key={project.id}
                    
                        image={project.image}
                        title={project.title}

                        description={project.description}

                        technologies={project.technologies}

                        github={project.github}

                        demo={project.demo}

                    />

                ))}

            </div>

        </section>

    );

}

export default Projects;