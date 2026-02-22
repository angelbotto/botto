import { memo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface Comet {
  mesh: THREE.Mesh;
  trail: THREE.Line;
  life: number;
  max: number;
  velocity: THREE.Vector3;
  startPos: THREE.Vector3;
}

export const Comets = memo(function Comets() {
  const { scene } = useThree();
  const comets = useRef<Comet[]>([]);

  useFrame(() => {
    if (Math.random() < 0.001 && comets.current.length < 1) {
      const side = Math.random() > 0.5 ? 1 : -1;
      const x = side * (20 + Math.random() * 15);
      const y = 5 + Math.random() * 15;
      const z = -15 - Math.random() * 25;
      const startPos = new THREE.Vector3(x, y, z);

      const velocity = new THREE.Vector3(
        -side * (0.15 + Math.random() * 0.1),
        -(0.05 + Math.random() * 0.05),
        0.02,
      );

      const cometGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const cometMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0.6, 0.7, 1.0),
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(cometGeo, cometMat);
      mesh.position.copy(startPos);

      const trailLen = 20;
      const trailPositions = new Float32Array(trailLen * 3);
      const trailColors = new Float32Array(trailLen * 4);
      for (let i = 0; i < trailLen; i++) {
        trailPositions[i * 3] = startPos.x;
        trailPositions[i * 3 + 1] = startPos.y;
        trailPositions[i * 3 + 2] = startPos.z;
        const t = i / trailLen;
        trailColors[i * 4] = 0.3 + t * 0.3;
        trailColors[i * 4 + 1] = 0.2 + t * 0.5;
        trailColors[i * 4 + 2] = 0.8 + t * 0.2;
        trailColors[i * 4 + 3] = (1 - t) * 0.6;
      }

      const trailGeo = new THREE.BufferGeometry();
      trailGeo.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3));
      trailGeo.setAttribute("color", new THREE.BufferAttribute(trailColors, 4));
      const trailMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      });
      const trail = new THREE.Line(trailGeo, trailMat);

      scene.add(mesh);
      scene.add(trail);

      comets.current.push({
        mesh,
        trail,
        life: 0,
        max: 200 + Math.random() * 150,
        velocity,
        startPos: startPos.clone(),
      });
    }

    for (let i = comets.current.length - 1; i >= 0; i--) {
      const c = comets.current[i]!;
      c.life++;
      const lr = c.life / c.max;

      const fadeIn = Math.min(lr * 8, 1);
      const fadeOut = lr > 0.7 ? (1 - lr) / 0.3 : 1;
      const alpha = fadeIn * fadeOut;

      (c.mesh.material as THREE.MeshBasicMaterial).opacity = alpha;
      (c.trail.material as THREE.LineBasicMaterial).opacity = alpha * 0.7;

      c.mesh.position.add(c.velocity);

      const posAttr = c.trail.geometry.getAttribute("position") as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let j = arr.length - 3; j >= 3; j -= 3) {
        arr[j] = arr[j - 3]!;
        arr[j + 1] = arr[j - 2]!;
        arr[j + 2] = arr[j - 1]!;
      }
      arr[0] = c.mesh.position.x;
      arr[1] = c.mesh.position.y;
      arr[2] = c.mesh.position.z;
      posAttr.needsUpdate = true;

      if (c.life >= c.max) {
        scene.remove(c.mesh);
        scene.remove(c.trail);
        c.mesh.geometry.dispose();
        (c.mesh.material as THREE.Material).dispose();
        c.trail.geometry.dispose();
        (c.trail.material as THREE.Material).dispose();
        comets.current.splice(i, 1);
      }
    }
  });

  return null;
});
