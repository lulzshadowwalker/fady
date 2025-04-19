import { Hero } from "./components/hero";
import { InfoCard } from "./components/info-card";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="max-w-7xl mx-4 h-[2px] bg-base-content-300/60 mt-12 mb-24 mx-auto rounded-md" />

      <InfoCard />
    </main>
  );
}
