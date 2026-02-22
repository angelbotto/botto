varying vec3 vN;

void main() {
  float f = pow(1.0 - abs(dot(vN, vec3(0, 0, 1.0))), 2.2);
  vec3 c = vec3(0.7, 0.55, 0.35);
  gl_FragColor = vec4(c * (0.12 + f * 0.25), f * 0.35 + 0.08);
}
