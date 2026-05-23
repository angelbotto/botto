import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { DNA } from "@/components/sections/DNA";
import { Focus } from "@/components/sections/Focus";
import { Investments } from "@/components/sections/Investments";
import { Team } from "@/components/sections/Team";
import { Connect } from "@/components/sections/Connect";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <DNA />
        <Focus />
        <Investments />
        <Team />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
