import { memo, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 8000;
const palette = [
  { r: 0.9, g: 0.93, b: 1 },
  { r: 0.7, g: 0.75, b: 1 },
  { r: 0.5, g: 0.55, b: 1 },
  { r: 0.85, g: 0.8, b: 1 },
  { r: 1, g: 0.95, b: 0.9 },
  { r: 0.6, g: 0.4, b: 1 },
];

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
  vA = smoothstep(280.0, 15.0, d);
  gl_PointSize = size * uPR * (3.5 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;

const fragmentShader = `
varying vec3 vC;
varying float vA;

void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  float core = smoothstep(0.5, 0.02, d);
  float glow = exp(-d * 4.0) * 0.3;
  gl_FragColor = vec4(vC, (core + glow) * vA * 0.85);
}`;

export const BackgroundStars = memo(function BackgroundStars() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, sizes, colors } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const sz = new Float32Array(COUNT);
    const col = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      const r = 40 + Math.random() * 220;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      pos[i3] = r * Math.sin(p) * Math.cos(t);
      pos[i3 + 1] = r * Math.sin(p) * Math.sin(t);
      pos[i3 + 2] = r * Math.cos(p);
      sz[i] = Math.random() * 1.2 + 0.15;

      const c = palette[Math.floor(Math.random() * palette.length)]!;
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }

    return { positions: pos, sizes: sz, colors: col };
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.000032;
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
