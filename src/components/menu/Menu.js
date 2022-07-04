import React from 'react';
import "./Menu.css";

export default function Menu({menuOpen, setMenuOpen}) {
    const clickFunc = () => {
        setMenuOpen(false);
    }
  return (
    <div className={"menu " + (menuOpen && "activeMenu")}>
        <ul>
            <li onClick={() => clickFunc()}>
                <a href='#home'>Home</a>
            </li>
            <li onClick={() => clickFunc()}>
                <a href='#about'>About Me</a>
            </li>
            <li onClick={() => clickFunc()}>
                <a href='#skills'>Skills</a>
            </li>
            <li onClick={() => clickFunc()}>
                <a href='#pande'>Projects & Experiences</a>
            </li>
            <li onClick={() => clickFunc()}>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
  )
}
