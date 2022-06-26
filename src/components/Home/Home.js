import React, { useEffect, useState } from "react";
import "./Home.css";
import { AiOutlineDown } from "@react-icons/all-files/ai/AiOutlineDown";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import Script from "./Script.js";

export default function Home({ url }) {
  Script(url);
  const roleArray = [
    "Jr. Full Stack Developer",
    "Mechanical Engineering Student",
  ];
  const [text, setText] = useState(roleArray[0].split(""));
  const [countUp, setCountUp] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (countUp === roleArray.length - 1) {
        setCountUp(0);
      } else {
        setCountUp((prev) => prev + 1);
      }
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, [countUp]);
  useEffect(() => {
    setText(roleArray[countUp].split(""));
  }, [countUp]);
  return (
    <div className="home" id="home">
      <canvas id="canvas" />
      <div className="socialMedia">
        <a href="https://www.instagram.com/berhokan/" target="_blank">
          <AiFillInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/okan-berho%C4%9Flu-1073601a3/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/okanberhoglu" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div className="hello">
        <h1 className="alpha">H</h1>
        <h1 className="alpha">e</h1>
        <h1 className="alpha">l</h1>
        <h1 className="alpha">l</h1>
        <h1 className="alpha">o</h1>
        <h1 className="alpha">,</h1>
        <span className="Iam">
          <h1 className="alpha">I</h1>
          <h1 className="alpha">'</h1>
          <h1 className="alpha">m</h1>
        </span>
      </div>
      <br />
      <div className="nameBox">
        <span className="name">
          <h1 className="alpha">O</h1>
          <h1 className="alpha">K</h1>
          <h1 className="alpha">A</h1>
          <h1 className="alpha">N</h1>
        </span>
        <span className="lastName">
          <h1 className="alpha">B</h1>
          <h1 className="alpha">E</h1>
          <h1 className="alpha">R</h1>
          <h1 className="alpha">H</h1>
          <h1 className="alpha">O</h1>
          <h1 className="alpha">Ğ</h1>
          <h1 className="alpha">L</h1>
          <h1 className="alpha">U</h1>
        </span>
      </div>
      <div className="role">
        {text.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div className="getResumeButton">
        <a
          href="assets/Resume_OkanBerhoglu.pdf"
          download="Resume_OkanBerhoglu.pdf"
        >
          <button> Get Resume </button>
        </a>
      </div>
      <a href="#about" className="down">
        <AiOutlineDown />
      </a>
    </div>
  );
}
