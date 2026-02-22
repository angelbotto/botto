varying vec3 vN;

void main() {
  float f = pow(1.0 - abs(dot(vN, vec3(0, 0, 1.0))), 3.0);
  vec3 c = vec3(0.0, 0.6, 0.9);
  gl_FragColor = vec4(c * (0.03 + f * 0.2), f * 0.25 + 0.015);
}
