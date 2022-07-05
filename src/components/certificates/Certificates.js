import React, { useState } from "react";
import "./Certificates.css";
import Matlabimage from "../../assets/MATLABOnramp.jpg";
import SimulinkImage from "../../assets/SimulinkOnramp.jpg";
import SimscapeImage from "../../assets/SimscapeOnramp.jpg";

export default function Certificates() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <div className="certificates" id="certificates">
      <div className="container">
        <div
          className={"box " + (activeImage === 1 && "b")}
          onClick={() => setActiveImage(1)}
        >
          <img src={Matlabimage} alt="Matlab" />
        </div>
        <div
          className={"box " + (activeImage === 2 && "b")}
          onClick={() => setActiveImage(2)}
        >
          <img src={SimulinkImage} alt="Simulink" />
        </div>
        <div
          className={"box " + (activeImage === 3 && "b")}
          onClick={() => setActiveImage(3)}
        >
          <img src={SimscapeImage} alt="Simscape" />
        </div>
        <div className="matlabImg">
          <img src="./assets/MatlabIMG.jpg" alt="matlab"/>
        </div>
      </div>
    </div>
  );
}
