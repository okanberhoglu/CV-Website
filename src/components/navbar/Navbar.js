import React from "react";
import "./Navbar.css";
import { AiOutlinePhone } from "@react-icons/all-files/ai/AiOutlinePhone";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            <div>
              <span>O</span>
              <span>K</span>
              <span>A</span>
              <span>N</span>
            </div>
            <div>
              <span>B</span>
              <span>E</span>
              <span>R</span>
              <span>H</span>
              <span>O</span>
              <span>Ğ</span>
              <span>L</span>
              <span>U</span>
            </div>
          </a>
          <div className="itemContainer">
            <AiOutlinePhone size={"33px"} className="phoneIcon" />
            <span>+90 535 063 7001</span>
          </div>
          <div className="itemContainer">
            <AiOutlineMail size={"33px"} className="mailIcon" />
            <span>okanberh@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
