import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Ai, Bird, Cloud, Earth, Star, Web } from "../models";
import React from "react";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [currentCenter, setCurrentCenter] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Web コンポーネントをクリックした時のハンドラ
  const handleWebClick = () => {
    setCurrentStage(2); // currentStage を 2 に設定
    setCurrentCenter(1);
  };

  // Cloud コンポーネントをクリックした時のハンドラ
  const handleCloudClick = () => {
    setCurrentStage(3); // currentStage を 3 に設定
    setCurrentCenter(2);
  };

  // Ai コンポーネントをクリックした時のハンドラ
  const handleAiClick = () => {
    setCurrentStage(4); // currentStage を 4 に設定
    setCurrentCenter(3);
  };

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustEarthForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -86.8];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -86.8];
    }

    return [screenScale, screenPosition];
  };

  const adjustOneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const adjustTwoForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [-86.8, -6.5, -86.8];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [-86.8, -6.5, -86.8];
    }

    return [screenScale, screenPosition];
  };

  const adjustThreeForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [86.8, -6.5, -86.8];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [86.8, -6.5, -86.8];
    }

    return [screenScale, screenPosition];
  };

  const [earthScale, earthPosition] = adjustEarthForScreenSize();
  const [oneScale, onePosition] = adjustOneForScreenSize();
  const [twoScale, twoPosition] = adjustTwoForScreenSize();
  const [threeScale, threePosition] = adjustThreeForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000, position: [0, 0, 7] }}
        style={{ background: "black" }} // ここで背景色を設定
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Star isRotating={isRotating} />
          <Earth position={earthPosition} scale={earthScale} />
          {currentCenter === 1 && (
            <>
              <Web
                position={onePosition}
                scale={oneScale}
                onClick={handleWebClick}
              />
              <Cloud
                position={twoPosition}
                scale={twoScale}
                onClick={handleCloudClick}
              />
              <Ai
                position={threePosition}
                scale={threeScale}
                onClick={handleAiClick}
              />
            </>
          )}
          {currentCenter === 2 && (
            <>
              <Cloud
                position={onePosition}
                scale={oneScale}
                onClick={handleCloudClick}
              />
              <Web
                position={twoPosition}
                scale={twoScale}
                onClick={handleWebClick}
              />
              <Ai
                position={threePosition}
                scale={threeScale}
                onClick={handleAiClick}
              />
            </>
          )}
          {currentCenter === 3 && (
            <>
              <Ai
                position={onePosition}
                scale={oneScale}
                onClick={handleAiClick}
              />
              <Web
                position={twoPosition}
                scale={twoScale}
                onClick={handleWebClick}
              />
              <Cloud
                position={threePosition}
                scale={threeScale}
                onClick={handleCloudClick}
              />
            </>
          )}
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
