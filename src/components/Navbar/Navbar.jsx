import "./Navbar.css";
import { FaGithub } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
function Navbar({ darkMode, setDarkMode }) {
  //const [darkMode, setDarkMode] = useState(true);
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <nav className="navbar">

      <div className="logo">
            <FaGithub />
        <span>Dawit Portfolio</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
         <li>
          <a href="#education">Education</a>
        </li>
      </ul>

       <button
    className="theme-btn"
    onClick={() => setDarkMode(!darkMode)}
>

    {darkMode ? <FaSun /> : <FaMoon />}

</button>

     <button

className="menu-btn"

onClick={()=>setMenuOpen(!menuOpen)}

>

<FaBars/>

</button>
    </nav>
  );
}

export default Navbar;