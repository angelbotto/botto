import { memo, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 2000;

const vertexShader = `
attribute float size;
attribute vec3 color;
attribute float phase;
varying vec3 vC;
varying float vA;
uniform float uTime, uPR;

void main() {
  vC = color;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float d = length(mv.xyz);
  vA = smoothstep(60.0, 3.0, d);
  float tw = 0.82 + 0.18 * sin(uTime * 0.4 + phase);
  gl_PointSize = size * uPR * (6.0 / -mv.z) * tw;
  gl_Position = projectionMatrix * mv;
}`;

const fragmentShader = `
varying vec3 vC;
varying float vA;

void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  float core = smoothstep(0.5, 0.02, d);
  float glow = exp(-d * 3.5) * 0.5;
  gl_FragColor = vec4(vC, (core + glow) * vA * 0.85);
}`;

export const MidStars = memo(function MidStars() {
  const pointsRef = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, sizes, colors, phases } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const sz = new Float32Array(COUNT);
    const col = new Float32Array(COUNT * 3);
    const ph = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      const r = 8 + Math.random() * 50;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      pos[i3] = r * Math.sin(p) * Math.cos(t);
      pos[i3 + 1] = r * Math.sin(p) * Math.sin(t);
      pos[i3 + 2] = r * Math.cos(p) - 15;
      sz[i] = Math.random() * 2.5 + 0.8;
      ph[i] = Math.random() * 6.28;

      const tp = Math.random();
      if (tp < 0.5) {
        col[i3] = 0.9; col[i3 + 1] = 0.95; col[i3 + 2] = 1;
      } else if (tp < 0.75) {
        col[i3] = 0; col[i3 + 1] = 0.94; col[i3 + 2] = 1;
      } else {
        col[i3] = 0.71; col[i3 + 1] = 0; col[i3 + 2] = 1;
      }
    }

    return { positions: pos, sizes: sz, colors: col, phases: ph };
  }, []);

  useFrame(() => {
    if (matRef.current) {
      matRef.current.uniforms.uTime!.value += 0.032;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.000048;
      pointsRef.current.rotation.x += 0.000016;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-phase" args={[phases, 1]} />
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
