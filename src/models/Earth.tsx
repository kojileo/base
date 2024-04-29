import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import jpgSrc from "../assets/3d/earth.jpg";

export function Earth(props) {
  const earthRef = useRef();
  // texture を Texture 型としてアサートする
  const texture = useLoader(TextureLoader, jpgSrc) as THREE.Texture;

  return (
    <mesh ref={earthRef} {...props}>
      <sphereGeometry args={[20, 32, 32]} />
      <meshStandardMaterial map={texture} />
      <OrbitControls />
    </mesh>
  );
}
