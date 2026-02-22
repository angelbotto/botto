varying vec3 vN;

void main() {
  float f = pow(1.0 - abs(dot(vN, vec3(0, 0, 1.0))), 3.5);
  vec3 c = mix(vec3(0.85, 0.65, 0.35), vec3(0.6, 0.4, 0.2), f);
  gl_FragColor = vec4(c, f * 0.1);
}
