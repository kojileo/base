import { useRef } from "react";
import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

import skyScene from "../assets/3d/sky.glb";
import React from "react";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Star({ isRotating }) {
  const starRef = useRef<Mesh>(null);

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (isRotating && starRef.current) {
      (starRef.current as any).rotation.y += 0.25 * delta; // 回転速度を必要に応じて調整
    }
  });
  return (
    <mesh ref={starRef}>
      {/* 複雑な3Dモデルやシーンを直接埋め込みたい場合は、プリミティブ要素を使用します */}
      <Stars
        radius={100} // 星の点滅(拡大)度合い
        depth={50} // 星の深さ
        count={5000} // 星の数
        factor={6} // 星の大きさ
        saturation={9} // 星の彩度
        speed={3} // 点滅のスピード
      />
    </mesh>
  );
}
