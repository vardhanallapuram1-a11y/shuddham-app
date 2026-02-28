import { useScrollProgress, useActiveSection } from "./hooks";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import FlavorSystem from "./components/Flavors";
import Story from "./components/Story";
import SeasonalBanner from "./components/SeasonalBanner";
import Dairy from "./components/Dairy";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const progress = useScrollProgress();
  const active = useActiveSection(["hero", "flavors", "story", "dairy", "why", "contact"]);

  return (
    <>
      <Cursor />
      <div className="pg" style={{ width: `${progress}%` }} aria-hidden="true" />
      <Header active={active} />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <FlavorSystem />
        <Story />
        <SeasonalBanner />
        <Dairy />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}