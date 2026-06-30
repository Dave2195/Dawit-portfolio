import "./Skills.css";
import skills from "../../data/skills";

function Skills(){

    return(

        <section className="skills" id="skills">

            <>
<h2>My Skills</h2>

<div className="skills-grid">

    {skills.map((skill)=>{

        return(

            <div className="skill-card" key={skill.id}>

                <h3>{skill.name}</h3>

                <p>{skill.level}</p>

            </div>

        );

    })}

</div>

</>

        </section>

    );

}

export default Skills;