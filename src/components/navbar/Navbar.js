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
            Okan Berhoğlu
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
