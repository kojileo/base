import React from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

export function Web({ position, scale, onClick }) {
  const { camera } = useThree(); // useThree フックから camera を取得

  return (
    <>
      {/* Text コンポーネントにポインタイベントを適用 */}
      <mesh
        position={position}
        scale={scale}
        onClick={(e) => {
          // カメラや他の要素の操作を防ぐためにイベントの伝播を止める
          e.stopPropagation();
          onClick?.(); // onClick プロパティが渡されていれば呼び出す
        }}
      >
        <Text fontSize={20} color={"#E2000C"} anchorX="center" anchorY="middle">
          Web
        </Text>
      </mesh>
      <OrbitControls enableRotate={true} camera={camera} />
    </>
  );
}
