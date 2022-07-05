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
import { Route, Routes } from "react-router-dom";
import OSBackendCS from "./components/projectsList/OSBackendCS/OSBackendCS.js";
import RCBackendCS from "./components/projectsList/RCBackendCS/RCBackendCS.js";
import PCHolderMApp from "./components/projectsList/PCHolderMApp/PCHolderMApp.js";
import SMobileApp from "./components/projectsList/SMobileApp/SMobileApp.js";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRoute, setRoute] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="app"
    >
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isRoute={isRoute}
        setRoute={setRoute}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route
          path="/CV-Website"
          element={
            <div className="sections">
              <Home />
              <About />
              <Skills />
              <PandE setRoute={setRoute} />
              <Contact />
            </div>
          }
        />
        <Route path="/OSBackend" component={OSBackendCS} element={<OSBackendCS/>}/>
        <Route path="/RCBackend" element={<RCBackendCS />} />
        <Route path="/PCHolder" element={<PCHolderMApp />} />
        <Route path="/SMobileApp" element={<SMobileApp />} />
      </Routes>
    </motion.div>
  );
}

export default App;
