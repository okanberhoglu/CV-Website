import React, { useEffect, useState } from "react";
import "./Home.css";
import { AiOutlineDown } from "@react-icons/all-files/ai/AiOutlineDown";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import ReactTextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";

const Script = (url) => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let spots = [];

    const mouse = {
      x: undefined,
      y: undefined,
    };

    canvas.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
      for (let i = 0; i < 3; i++) {
        spots.push(new Particle());
      }
    });

    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 2 + 0.3;
        this.speedX = Math.random() * 2 - 2;
        this.speedY = Math.random() * 2 - 2;
        this.color = "#0F3352";
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.3) this.size -= 0.01;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function handleParticle() {
      for (let i = 0; i < spots.length; i++) {
        spots[i].update();
        spots[i].draw();
        for (let j = i; j < spots.length; j++) {
          const dx = spots[i].x - spots[j].x;
          const dy = spots[i].y - spots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 90) {
            ctx.beginPath();
            ctx.strokeStyle = spots[i].color;
            ctx.linewidth = spots[i].size / 80;
            ctx.moveTo(spots[i].x, spots[i].y);
            ctx.lineTo(spots[j].x, spots[j].y);
            ctx.stroke();
          }
        }
        if (spots[i].size <= 0.3) {
          spots.splice(i, 1);
          i--;
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticle();
      requestAnimationFrame(animate);
    }
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    window.addEventListener("mouseout", function () {
      mouse.x = undefined;
      mouse.y = undefined;
    });
    animate();
  }, [url]);
};

export default function Home({ url }) {
  const words = ["Jr. Full Stack Developer", "Mechanical Engineering Student"];
  Script(url);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <motion.div
      className="home"
      id="home"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.3 }}
    >
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
      <div className="roleContainer">
        <ReactTextTransition springConfig={presets.wobbly} className="roles">
          <span>{words[index % words.length]}</span>
        </ReactTextTransition>
      </div>
      <div className="getResumeButton">
        <a
          href="../../assets/Resume_OkanBerhoglu.pdf"
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
