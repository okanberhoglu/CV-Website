import React, { useState } from "react";
import "./Skills.css";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";
import Certificates from "../certificates/Certificates.js";

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "React",
      icon: "./assets/React.png",
      img: "./assets/ReactImg.jpg",
      desc: "I developed this website which is you looking at :) , using react.js. And also I developed a mobile app with react-native.",
    },
    {
      id: "2",
      title: "C#",
      icon: "./assets/C-Sharp.png",
      img: "./assets/CSImg.jpg",
      desc: "I developed online shoping website backend and rent a car website backend. ",
    },
    {
      id: "3",
      title: "Java",
      icon: "./assets/java.png",
      img: undefined,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: "4",
      title: "Matlab",
      icon: "./assets/matlab.png",
      img: undefined,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: "5",
      title: "SolidWorks",
      icon: "./assets/SolidWorks_Logo.png",
      img: "./assets/SolidIMG.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: "6",
      title: "Python",
      icon: "./assets/Python.png",
      img: "./assets/PythonForDataScience.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="skills" id="skills">
      <div className="caption">
        <h1>S</h1>
        <h1>K</h1>
        <h1>I</h1>
        <h1>L</h1>
        <h1>L</h1>
        <h1>S</h1>
      </div>
      <div className="content">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className="skillContainer" key={d.id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} />
                    </div>
                    <p>{d.desc}</p>
                  </div>
                </div>
                {d.id === "4" ? (
                  <div className="certificaRight">
                    <Certificates />
                  </div>
                ) : (
                  <div className="right">
                    <img className="cImg" src={d.img} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <AiOutlineLeft
          className="arrow arrowLeft"
          onClick={() => handleClick("left")}
        />
        <AiOutlineRight
          className="arrow arrowRight"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
