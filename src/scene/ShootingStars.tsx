import { memo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface ShootingStar {
  line: THREE.Line;
  life: number;
  max: number;
  dx: number;
  dy: number;
}

export const ShootingStars = memo(function ShootingStars() {
  const { scene } = useThree();
  const stars = useRef<ShootingStar[]>([]);

  useFrame(() => {
    if (Math.random() < 0.006 && stars.current.length < 3) {
      const geo = new THREE.BufferGeometry();
      const x = (Math.random() - 0.5) * 50;
      const y = Math.random() * 18 + 2;
      const z = -8 - Math.random() * 25;
      const len = 2.5 + Math.random() * 5;
      const ang = -Math.PI / 4.5 + (Math.random() - 0.5) * 0.4;

      geo.setAttribute(
        "position",
        new THREE.BufferAttribute(
          new Float32Array([x, y, z, x + Math.cos(ang) * len, y + Math.sin(ang) * len, z]),
          3,
        ),
      );

      const bright = Math.random() > 0.5;
      geo.setAttribute(
        "color",
        new THREE.BufferAttribute(
          new Float32Array(
            bright
              ? [0.7, 0.8, 1, 0.3, 0.2, 0.7]
              : [0.5, 0.6, 1, 0.15, 0.05, 0.5],
          ),
          3,
        ),
      );

      const mat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        linewidth: 1,
      });

      const line = new THREE.Line(geo, mat);
      scene.add(line);

      stars.current.push({
        line,
        life: 0,
        max: 35 + Math.random() * 35,
        dx: Math.cos(ang) * 0.6,
        dy: Math.sin(ang) * 0.6,
      });
    }

    for (let i = stars.current.length - 1; i >= 0; i--) {
      const s = stars.current[i]!;
      s.life++;
      const lr = s.life / s.max;
      (s.line.material as THREE.LineBasicMaterial).opacity =
        lr < 0.1 ? lr * 10 : lr > 0.75 ? (1 - lr) / 0.25 : 1;
      s.line.position.x += s.dx;
      s.line.position.y += s.dy;

      if (s.life >= s.max) {
        scene.remove(s.line);
        s.line.geometry.dispose();
        (s.line.material as THREE.Material).dispose();
        stars.current.splice(i, 1);
      }
    }
  });

  return null;
});
