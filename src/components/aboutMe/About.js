import React, { useEffect, useRef } from "react";
import "./About.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

function ThreeDO() {
  const myMesh = useRef();
  useFrame(({clock}) => {
      const x = clock.getElapsedTime();
      const y = clock.getElapsedTime();
      myMesh.current.rotation.x = x;
      myMesh.current.rotation.y = y;
  });
return (
  <mesh rotation={[90,0,20]} ref={myMesh}>
      <torusGeometry attach="geometry" args={[6,1.5,16,200]}/>
      <meshPhongMaterial attach="material" />
  </mesh>
)
}


export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="caption">
          <span className="me">
            <h1 className="alpha">M</h1>
            <h1 className="alpha">e</h1>
            <h1 className="alpha">,</h1>
          </span>
          <span className="myself">
            <h1 className="alpha">M</h1>
            <h1 className="alpha">y</h1>
            <h1 className="alpha">s</h1>
            <h1 className="alpha">e</h1>
            <h1 className="alpha">l</h1>
            <h1 className="alpha">f</h1>
          </span>
          <span className="and">
            <h1 className="alpha">&</h1>
          </span>
          <span className="ben">
            <h1 className="alpha">I</h1>
          </span>
          <br />
        </div>
        <div className="profile">
          <p>
            &nbsp; &nbsp; &nbsp;Computer programming and producing something in
            the computer environment is a hobby for me, I develop myself in the
            field of software. Also, as a mechanical engineering student, I am
            interested in working on mechanical design topic. I am someone who
            constantly wants to improve himself in various subjects. I am highly
            motivated and eager to learn.
          </p>
        </div>
      </div>
      <div className="right">
        <Canvas className="canvas">
          <PerspectiveCamera makeDefault position={[10, 20, 0.5]} />
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <ThreeDO />
        </Canvas>
      </div>
    </div>
  );
}
