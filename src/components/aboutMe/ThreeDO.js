import { useFrame } from '@react-three/fiber';
import React, {useRef} from 'react';

export default function ThreeDO() {
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
