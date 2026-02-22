import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GasGiant } from "./GasGiant";
import { Atmosphere } from "./Atmosphere";
import { Moon } from "./Moon";
import { BackgroundStars } from "./BackgroundStars";
import { MidStars } from "./MidStars";
import { Nebula } from "./Nebula";
import { SpaceNebula } from "./SpaceNebula";
import { GalaxySpiral } from "./GalaxySpiral";
import { DistantPlanet } from "./DistantPlanet";
import { ShootingStars } from "./ShootingStars";
import { Comets } from "./Comets";

const GAS_GIANT_POS: [number, number, number] = [11, 8, -22];

function CameraController() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const cNx = useRef(0);
  const cNy = useRef(0);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    const scrollY = window.scrollY;
    const scrollMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const sR = scrollY / scrollMax;

    cNx.current += ((mouse.current.x - 0.5) * 0.2 - cNx.current) * 0.03;
    cNy.current += ((mouse.current.y - 0.5) * 0.2 - cNy.current) * 0.03;

    camera.position.set(cNx.current, -cNy.current + sR * 3, 8 - sR * 12);
    camera.rotation.x = -sR * 0.15;
    camera.lookAt(cNx.current * 2, -cNy.current + sR * 2, -10 - sR * 15);
  });

  return null;
}

export default function SpaceScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ fov: 55, near: 0.1, far: 2000, position: [0, 0, 8] }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x020010, 1);
        }}
      >
        <CameraController />
        {/* Layer 1: Deep space background */}
        <SpaceNebula />
        <BackgroundStars />
        {/* Layer 2: Mid-field stars + streaks */}
        <MidStars />
        <Nebula />
        <GalaxySpiral />
        <ShootingStars />
        <Comets />
        {/* Layer 3: Celestial bodies */}
        <GasGiant />
        <Atmosphere />
        <Moon parentPos={GAS_GIANT_POS} orbitRadius={6} orbitSpeed={0.2} size={0.5} yAmplitude={0.5} zRadius={6} />
        <Moon parentPos={GAS_GIANT_POS} orbitRadius={4.8} orbitSpeed={0.35} size={0.3} yAmplitude={1.2} zRadius={3} phaseOffset={2} />
        <DistantPlanet />
      </Canvas>
    </div>
  );
}
