import { memo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import vertexShader from "./shaders/simple.vert";
import fragmentShader from "./shaders/moon.frag";

interface MoonProps {
  parentPos: [number, number, number];
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  yAmplitude: number;
  zRadius: number;
  phaseOffset?: number;
}

export const Moon = memo(function Moon({
  parentPos,
  orbitRadius,
  orbitSpeed,
  size,
  yAmplitude,
  zRadius,
  phaseOffset = 0,
}: MoonProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(phaseOffset);

  useFrame(() => {
    time.current += 0.004;
    const angle = time.current * orbitSpeed;
    if (meshRef.current) {
      meshRef.current.position.set(
        parentPos[0] + Math.cos(angle) * orbitRadius,
        parentPos[1] + Math.sin(angle) * yAmplitude,
        parentPos[2] + Math.sin(angle) * zRadius,
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 32, 32]} />
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
