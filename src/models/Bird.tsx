import React, { useEffect, useRef } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import birdScene from "../assets/3d/bird.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Bird() {
  const birdRef = useRef<THREE.Mesh>(null);
  // GLTFファイルから3Dモデルとアニメーションを読み込む
  const gltf = useGLTF(birdScene) as unknown as GLTF;
  const animations = gltf.animations;

  // 鳥のアニメーションにアクセスする
  const { actions } = useAnimations(animations, birdRef);
  // Play the "Take 001" animation when the component mounts
  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  useFrame(({ clock, camera }) => {
    if (birdRef.current) {
      // Update the Y position to simulate bird-like motion using a sine wave
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      // Check if the bird reached a certain endpoint relative to the camera
      if (birdRef.current.position.x > camera.position.x + 10) {
        // Change direction to backward and rotate the bird 180 degrees on the y-axis
        birdRef.current.rotation.y = Math.PI;
      } else if (birdRef.current.position.x < camera.position.x - 10) {
        // Change direction to forward and reset the bird's rotation
        birdRef.current.rotation.y = 0;
      }

      // Update the X and Z positions based on the direction
      if (birdRef.current.rotation.y === 0) {
        // Moving forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      } else {
        // Moving backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}
