import React, { useEffect, useState } from "react";
import "./Home.css";
import { AiOutlineDown } from "@react-icons/all-files/ai/AiOutlineDown";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import Script from "./Script.js";
import ReactTextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";

export default function Home({ url }) {
  const words = ["Jr. Full Stack Developer", "Mechanical Engineering Student"];
  Script(url);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <motion.div className="home" id="home" initial={{x:"-100vw"}} animate={{x:0}} transition={{duration:1, type:"spring", bounce:0.3}}>
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
      <div className="roleContainer"s>
        <ReactTextTransition
          springConfig={presets.wobbly}
          className="roles"
        >
          <span>{words[index % words.length]}</span>
        </ReactTextTransition>
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
    </motion.div>
  );
}
