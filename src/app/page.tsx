import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { DNA } from "@/components/sections/DNA";
import { Focus } from "@/components/sections/Focus";
import { Portfolio } from "@/components/sections/Portfolio";
import { Team } from "@/components/sections/Team";
import { Build } from "@/components/sections/Build";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <DNA />
        <Focus />
        <Portfolio />
        <Team />
        <Build />
      </main>
      <Footer />
    </>
  );
}
