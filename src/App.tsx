import { lazy, Suspense, useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Overlays } from "@/components/Overlays";
import { MouseGlow } from "@/components/MouseGlow";
import { CornerMarkers } from "@/components/CornerMarkers";
import { AudioToggle } from "@/components/AudioToggle";
import { EasterEgg } from "@/components/EasterEgg";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/features/hero/Hero";
import { Divider } from "@/components/Divider";
import { Projects } from "@/features/projects/Projects";
import { Connect } from "@/features/connect/Connect";

const SpaceScene = lazy(() => import("@/scene/SpaceScene"));

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen visible={!loaded} />
      <Suspense fallback={null}>
        <SpaceScene />
      </Suspense>
      <Overlays />
      <MouseGlow />
      <CornerMarkers />
      <Header />
      <AudioToggle />
      <EasterEgg />

      <main className="relative z-10">
        <Hero started={loaded} />
        <Divider />
        <Projects />
        <Divider />
        <Connect />
      </main>

      <Footer />
    </>
  );
}
