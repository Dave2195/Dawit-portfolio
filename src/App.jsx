import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
    
      <Navbar  darkMode={darkMode}
                setDarkMode={setDarkMode}/>
       <Hero />
       <About />
       <Skills/>
      <Projects />
        <Contact />
        <Education/>
        <Footer />
      </div>
    
  );
}

export default App;
