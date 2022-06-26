import { useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu.js";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home.js";
import About from "./components/aboutMe/About.js";
import Skills from "./components/skills/Skills.js";
import Projects from "./components/projects/Projects.js";
import Experiences from "./components/experiences/Experiences.js";
import Contact from "./components/contact/Contact.js";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
      </div>
    </div>
  );
}

export default App;
