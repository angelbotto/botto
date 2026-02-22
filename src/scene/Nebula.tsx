import { memo, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 200;

const clusters = [
  { cx: -18, cy: 6, cz: -35, spread: 15 },
  { cx: 22, cy: -3, cz: -45, spread: 18 },
  { cx: 5, cy: 14, cz: -55, spread: 12 },
  { cx: -8, cy: -8, cz: -50, spread: 10 },
];

const vertexShader = `
attribute float size;
attribute vec3 color;
varying vec3 vC;
varying float vA;
uniform float uTime, uPR;

void main() {
  vC = color;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float d = length(mv.xyz);
  vA = smoothstep(90.0, 8.0, d) * 0.12;
  float b = 0.85 + 0.15 * sin(uTime * 0.08 + position.x * 0.3);
  gl_PointSize = size * uPR * (25.0 / -mv.z) * b;
  gl_Position = projectionMatrix * mv;
}`;

const fragmentShader = `
varying vec3 vC;
varying float vA;

void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.0, d) * vA;
  float s = exp(-d * 1.8) * 0.04;
  gl_FragColor = vec4(vC, a + s);
}`;

export const Nebula = memo(function Nebula() {
  const pointsRef = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, sizes, colors } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const sz = new Float32Array(COUNT);
    const col = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      const cl = Math.floor(Math.random() * clusters.length);
      const { cx, cy, cz, spread } = clusters[cl]!;

      pos[i3] = cx + (Math.random() - 0.5) * spread * 2;
      pos[i3 + 1] = cy + (Math.random() - 0.5) * spread * 1.2;
      pos[i3 + 2] = cz + (Math.random() - 0.5) * spread;
      sz[i] = Math.random() * 60 + 25;

      const tt = Math.random();
      if (cl === 0) {
        col[i3] = 0.15 + tt * 0.15;
        col[i3 + 1] = 0.08 + tt * 0.15;
        col[i3 + 2] = 0.6 + tt * 0.4;
      } else if (cl === 1) {
        col[i3] = 0.35 + tt * 0.25;
        col[i3 + 1] = 0.05;
        col[i3 + 2] = 0.55 + tt * 0.35;
      } else if (cl === 2) {
        col[i3] = 0.3 + tt * 0.4;
        col[i3 + 1] = 0.25 + tt * 0.35;
        col[i3 + 2] = 0.7 + tt * 0.3;
      } else {
        col[i3] = 0.5 + tt * 0.3;
        col[i3 + 1] = 0.05;
        col[i3 + 2] = 0.4 + tt * 0.3;
      }
    }

    return { positions: pos, sizes: sz, colors: col };
  }, []);

  useFrame(() => {
    if (matRef.current) {
      matRef.current.uniforms.uTime!.value += 0.032;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.000016;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uPR: { value: Math.min(window.devicePixelRatio, 2) },
        }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
});
