import React, { useState, useRef, Suspense, useMemo } from "react";
import "./Contact.css";
import * as THREE from "three";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { CameraShake, OrbitControls } from "@react-three/drei";

function Rig({ children }) {
  const ref = useRef();
  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05);
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (-mouse.x * Math.PI) / 20,
      0.1
    );
  });
  return <group ref={ref}>{children}</group>;
}

export default function Contact() {
  const [send, setSend] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        {/* <Canvas dpr={[1, 1.5]} camera={{ position: [1, 0, 15] }}>
          <ambientLight />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <Suspense fallback={null}>
            <Rig>
              <Triangle
                color="white"
                scale={0.009}
                rotation={[0, 0, Math.PI / 3]}
              />
              <Triangle
                color="#00ADB5"
                scale={0.009}
                position={[3, 0, -2]}
                rotation={[0, 0, Math.PI / 3]}
              />
              <Triangle
                color="#00ADB5"
                scale={0.009}
                position={[-3, 0, -2]}
                rotation={[0, 0, Math.PI / 3]}
              />
              <Triangle
                color="white"
                scale={0.009}
                position={[0, 2, -10]}
                rotation={[0, 0, Math.PI / 3]}
              />
            </Rig>
          </Suspense>
          <CameraShake
            yawFrequency={0.2}
            pitchFrequency={0.2}
            rollFrequency={0.2}
          />
        </Canvas> */}
      </div>
      <div className="right">
        <div className="container">
          <h2>Mail Me</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message" />
            <button type="submit">Send</button>
          </form>
          {send && <span> Thanks, I'll reply ASAP :)</span>}
        </div>
      </div>
    </div>
  );
}
