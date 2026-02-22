import { memo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import vertexShader from "./shaders/gasGiant.vert";
import fragmentShader from "./shaders/gasGiant.frag";

const uniforms = {
  uTime: { value: 0 },
};

export const GasGiant = memo(function GasGiant() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state, _delta) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime!.value += 0.032;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.00024;
    }
  });

  return (
    <mesh ref={meshRef} position={[11, 8, -22]}>
      <sphereGeometry args={[4, 96, 96]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite
      />
    </mesh>
  );
});
