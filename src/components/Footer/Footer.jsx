import "./Footer.css";
import resume from "../../assets/resume/resume.pdf";

import {
    FaGithub,
    FaLinkedin,
    FaTelegram,
    FaEnvelope,
    FaArrowUp
} from "react-icons/fa";

function Footer(){

    const scrollToTop = () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    return(

        <footer className="footer">

            <h2>Dawit Daniel</h2>

            <p>

                Computer Science Graduate | Full Stack Developer

            </p>

            <div className="social-links">

                <a
                    href="https://github.com/Dave2195/Devadani"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub/>
                </a>

                <a
                    href="https://linkedin.com/in/YOUR_USERNAME"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin/>
                </a>

                <a
                    href="@yante_negn"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaTelegram/>
                </a>

                <a
                    href="dawitdaniel1995@gmail.com"
                >
                    <FaEnvelope/>
                </a>
                <a

    href={resume}

    download

    className="resume-btn"

>

    Download Resume

</a>

            </div>

            <button

                className="top-btn"

                onClick={scrollToTop}

            >

                <FaArrowUp/>

            </button>

            <p className="copyright">

                © 2026 Dawit Daniel. All Rights Reserved.

            </p>

        </footer>

    );

}

export default Footer;