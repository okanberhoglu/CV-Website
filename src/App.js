import { useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu.js";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home.js";
import About from "./components/aboutMe/About.js";
import Skills from "./components/skills/Skills.js";
import Contact from "./components/contact/Contact.js";
import PandE from "./components/pande/PandE.js";
import { motion } from "framer-motion";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <About />
        <Skills />
        <PandE />
        <Contact />
      </div>
    </motion.div>
  );
}

export default App;
