import { memo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const fragmentShader = `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform vec2 uResolution;

// Simplex-like hash
vec3 hash33(vec3 p) {
  p = fract(p * vec3(443.897, 441.423, 437.195));
  p += dot(p, p.yzx + 19.19);
  return fract((p.xxy + p.yxx) * p.zyx);
}

float noise3D(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n = mix(
    mix(mix(dot(hash33(i), f),
            dot(hash33(i + vec3(1,0,0)), f - vec3(1,0,0)), f.x),
        mix(dot(hash33(i + vec3(0,1,0)), f - vec3(0,1,0)),
            dot(hash33(i + vec3(1,1,0)), f - vec3(1,1,0)), f.x), f.y),
    mix(mix(dot(hash33(i + vec3(0,0,1)), f - vec3(0,0,1)),
            dot(hash33(i + vec3(1,0,1)), f - vec3(1,0,1)), f.x),
        mix(dot(hash33(i + vec3(0,1,1)), f - vec3(0,1,1)),
            dot(hash33(i + vec3(1,1,1)), f - vec3(1,1,1)), f.x), f.y), f.z);
  return n * 0.5 + 0.5;
}

float fbm(vec3 p) {
  float v = 0.0;
  float a = 0.5;
  vec3 shift = vec3(100.0);
  for (int i = 0; i < 5; i++) {
    v += a * noise3D(p);
    p = p * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  float t = uTime * 0.008;

  // Layer 1: Large-scale nebula structure
  float n1 = fbm(vec3(p * 1.2 + t * 0.3, t * 0.1));
  float n2 = fbm(vec3(p * 1.8 - t * 0.2, t * 0.15 + 10.0));

  // Layer 2: Fine detail
  float n3 = fbm(vec3(p * 3.5 + t * 0.1, t * 0.05 + 20.0));

  // Combine for cloud shapes
  float cloud = n1 * n2;
  cloud = smoothstep(0.15, 0.65, cloud);
  float detail = n3 * 0.3;

  // Deep purple nebula
  vec3 deepPurple = vec3(0.12, 0.02, 0.28);
  vec3 brightPurple = vec3(0.35, 0.08, 0.55);
  vec3 blueNebula = vec3(0.05, 0.08, 0.35);
  vec3 brightBlue = vec3(0.1, 0.2, 0.6);
  vec3 hotWhite = vec3(0.5, 0.4, 0.7);

  // Color mixing based on noise layers
  vec3 col = mix(deepPurple, blueNebula, n1);
  col = mix(col, brightPurple, cloud * 0.7);
  col = mix(col, brightBlue, n2 * cloud * 0.5);
  col = mix(col, hotWhite, pow(cloud, 3.0) * detail);

  // Radial falloff - nebula fades at edges
  float radial = 1.0 - smoothstep(0.2, 0.9, length(p) * 0.7);

  // Bright core regions
  float core1 = smoothstep(0.6, 0.9, cloud) * 0.4;
  col += hotWhite * core1;

  float alpha = (cloud * 0.35 + detail * 0.1) * radial;
  alpha = clamp(alpha, 0.0, 0.45);

  gl_FragColor = vec4(col, alpha);
}`;

export const SpaceNebula = memo(function SpaceNebula() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  useFrame(() => {
    if (matRef.current) {
      matRef.current.uniforms.uTime!.value += 0.016;
      matRef.current.uniforms.uResolution!.value.set(size.width, size.height);
    }
  });

  return (
    <mesh frustumCulled={false} renderOrder={-1}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(size.width, size.height) },
        }}
        transparent
        depthWrite={false}
        depthTest={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
});
