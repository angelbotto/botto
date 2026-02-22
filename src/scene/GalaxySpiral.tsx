import { memo, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 3000;

const vertexShader = `
attribute float size;
attribute vec3 color;
varying vec3 vC;
varying float vA;
uniform float uPR;

void main() {
  vC = color;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float d = length(mv.xyz);
  vA = smoothstep(60.0, 5.0, d) * 0.5;
  gl_PointSize = size * uPR * (5.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;

const fragmentShader = `
varying vec3 vC;
varying float vA;

void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.0, d) * vA;
  gl_FragColor = vec4(vC, a);
}`;

export const GalaxySpiral = memo(function GalaxySpiral() {
  const groupRef = useRef<THREE.Points>(null);

  const { positions, sizes, colors } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const sz = new Float32Array(COUNT);
    const col = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      const arm = Math.floor(Math.random() * 3);
      const t = Math.pow(Math.random(), 1.2) * 8;
      const ang = t * 1.2 + arm * ((Math.PI * 2) / 3);
      const r = t;
      const sp = (0.2 + t * 0.1) * (Math.random() - 0.5) * 2;

      pos[i3] = Math.cos(ang) * r + sp;
      pos[i3 + 1] = (Math.random() - 0.5) * 0.3;
      pos[i3 + 2] = Math.sin(ang) * r + sp;
      sz[i] = Math.random() * 1.5 + 0.3;

      const b = 1 - t / 8;
      const ct = Math.random();
      if (ct < 0.5) {
        col[i3] = b * 0.2; col[i3 + 1] = 0.7 + b * 0.24; col[i3 + 2] = 1;
      } else if (ct < 0.8) {
        col[i3] = 0.5 + b * 0.21; col[i3 + 1] = 0.1; col[i3 + 2] = 0.8 + b * 0.2;
      } else {
        col[i3] = 0.8; col[i3 + 1] = 0.1; col[i3 + 2] = 0.5;
      }
    }

    return { positions: pos, sizes: sz, colors: col };
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.00012;
    }
  });

  return (
    <points
      ref={groupRef}
      position={[-12, 6, -45]}
      rotation={[Math.PI / 2.8, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
    >
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ uPR: { value: Math.min(window.devicePixelRatio, 2) } }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
});
