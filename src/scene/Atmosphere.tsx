import { memo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import vertexShader from "./shaders/simple.vert";
import fragmentShader from "./shaders/atmosphere.frag";

export const Atmosphere = memo(function Atmosphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.00016;
    }
  });

  return (
    <mesh ref={meshRef} position={[11, 8, -22]}>
      <sphereGeometry args={[4.6, 48, 48]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  );
});
