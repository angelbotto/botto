import { memo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import vertexShader from "./shaders/simple.vert";
import fragmentShader from "./shaders/distantPlanet.frag";

export const DistantPlanet = memo(function DistantPlanet() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0004;
    }
  });

  return (
    <mesh ref={meshRef} position={[-16, -5, -40]}>
      <sphereGeometry args={[1.5, 48, 48]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
});
