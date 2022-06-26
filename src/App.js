import { useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections"></div>
    </div>
  );
}

export default App;
