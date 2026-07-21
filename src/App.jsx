import { HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Commands from "./components/Commands";
import Stats from "./components/Stats";
import OpenSource from "./components/OpenSource";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import FloatingCTA from "./components/FloatingCTA";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-brand-surface-light text-brand-dark overflow-hidden font-sans">
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Features />
          <Stats />
          <Commands />
          <OpenSource />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
