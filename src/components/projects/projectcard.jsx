import "./ProjectCard.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard(props){
       
    return(

        
        <div className="project-card">
             <img

                src={props.image}

                alt={props.title}

                className="project-image"

              />

            <h3>{props.title}</h3>

            <p>{props.description}</p>

            <h4>Technologies</h4>

        <div className="tech-list">

    {props.technologies.map((tech,index)=>(

        <span

            key={index}

            className="badge"

        >

            {tech}

        </span>

    ))}

       </div>

            <div className="buttons">

                <a href={props.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                    GitHub
                </a>

                <a href={props.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                    Live Demo
                </a>

            </div>

        </div>

    );

}

export default ProjectCard;