import React, { useEffect, useRef } from "react";
import "./PandE.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={8.5}>
      <MeshDistortMaterial
        color="#00ADB5"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughnes={1}
      />
    </Sphere>
  );
}

export default function PandE() {
  const projectsData = [
    {
      id: 1,
      name: "Shopping website backend",
      img: "./assets/NET_Core_Logo.png",
    },
    {
      id: 2,
      name: "Rent a car website backend",
      img: "./assets/NET_Core_Logo.png",
    },
    {
      id: 3,
      name: "PC Holder Design Matlab App",
      img: "./assets/matlab.png",
    },
    {
      id: 4,
      name: "Sigun mobile app",
      img: "./assets/React.png",
    },
  ];
  const experienceData = [
    {
      id: 1,
      name: "Anova R&D",
      dscr: undefined,
      logo: undefined,
    },
    {
      id: 2,
      name: "Teknopar",
      dscr: undefined,
      logo: undefined,
    },
  ];
  return (
    <div className="pande" id="pande">
      <div className="experiences">
        <h1>EXPERIENCES</h1>
        <div className="experienceContainer">
          {experienceData.map((item) => (
            <div key={item.id} className="item">
              <img src={item.img} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="projects">
        <Canvas className="canvas">
          <PerspectiveCamera makeDefault position={[10, 20, 0.5]} />
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enabled={false}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
        <div className="projectsContainer">
          <h1>PROJECTS</h1>
          <div className="projectContainer">
            {projectsData.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.img} />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
