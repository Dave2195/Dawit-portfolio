import "./Hero.css";
import profile from "../../assets/images/profile.jpg";
import resume from "../../assets/resume/resume.pdf";
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-text"  data-aos="fade-right">

        <h3>Hello 👋</h3>

        <h1>I'm Dawit Daniel</h1>

        <h2>Computer Science Graduate Student</h2>

        <p>
          I build modern web applications using
          React, Django, Python, and MySQL.
        </p>

        <div className="hero-buttons">

          <a
            href={resume}
              download
            >
           <button className="btn-primary">
              Download CV
          </button>
          </a>
        <a href="#projects">
          <button className="btn-secondary">
            View Projects
          </button>
        </a>
        </div>

      </div>

      <div className="hero-image"  data-aos="fade-left">

        <img
          src={profile}
          alt="Dawit Daniel"
        />

      </div>

    </section>
  );
}

export default Hero;