import React, { useEffect } from "react";
import "./Navbar.css";
import { AiOutlinePhone } from "@react-icons/all-files/ai/AiOutlinePhone";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { useNavigate } from "react-router-dom";

export default function Navbar({ menuOpen, setMenuOpen, isRoute, setRoute }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if(isRoute){
      setRoute(false);
      navigate("/CV-Website");
    }else{
    setMenuOpen(!menuOpen);
    }
  }
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/CV-Website#home" className="logo">
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
          <div className={isRoute ? "hamburger hamburgerActive" : "hamburger"} onClick={()=>handleClick()}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
