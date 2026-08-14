import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
// import Journey from "@/components/Journey";


export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <CommandPalette />
      <main>
        <Hero />
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-divider" />
        </div>
        <TechStack />
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-divider" />
        </div>
        {/* <Journey /> */}
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-divider" />
        </div>
        <Projects />
        <div className="mx-auto max-w-5xl px-6">
          <div className="section-divider" />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
