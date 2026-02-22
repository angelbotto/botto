uniform float uTime;
varying vec3 vN;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1, 0)), f.x),
    mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

void main() {
  float fresnel = pow(1.0 - abs(dot(vN, vec3(0, 0, 1.0))), 2.5);
  float lat = vUv.y;
  float flow = uTime * 0.008;

  float bands = 0.0;
  bands += sin(lat * 28.0 + fbm(vec2(vUv.x * 4.0 + flow, lat * 6.0)) * 2.0) * 0.5;
  bands += sin(lat * 14.0 + fbm(vec2(vUv.x * 3.0 + flow * 0.7, lat * 4.0)) * 1.5) * 0.3;
  bands += sin(lat * 42.0 + fbm(vec2(vUv.x * 6.0 + flow * 1.3, lat * 8.0)) * 0.8) * 0.2;
  bands = bands * 0.5 + 0.5;

  float turb = fbm(vec2(vUv.x * 8.0 + flow * 1.5, lat * 12.0 + flow * 0.3));
  float storm = fbm(vec2(vUv.x * 16.0 + flow * 2.0, lat * 20.0));

  vec3 c1 = vec3(0.72, 0.52, 0.32);
  vec3 c2 = vec3(0.85, 0.65, 0.38);
  vec3 c3 = vec3(0.55, 0.35, 0.22);
  vec3 c4 = vec3(0.92, 0.78, 0.52);
  vec3 c5 = vec3(0.40, 0.25, 0.15);

  vec3 col = mix(c1, c2, bands);
  col = mix(col, c3, smoothstep(0.3, 0.5, turb));
  col = mix(col, c4, smoothstep(0.55, 0.65, bands) * smoothstep(0.4, 0.6, turb));
  col = mix(col, c5, smoothstep(0.6, 0.8, storm) * 0.3);

  float spotD = length(vec2((vUv.x - 0.35 + fract(flow * 0.5)) * 3.0, lat - 0.55) * vec2(2.0, 1.0));
  col = mix(col, vec3(0.75, 0.3, 0.15), smoothstep(0.3, 0.0, spotD) * 0.4);

  col *= 1.0 - fresnel * 0.6;
  col += vec3(0.85, 0.7, 0.45) * fresnel * 0.15;

  gl_FragColor = vec4(col * 0.55, 1.0 - smoothstep(0.92, 1.0, fresnel) * 0.5);
}
