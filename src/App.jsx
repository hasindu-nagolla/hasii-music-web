import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Commands from "./components/Commands";
import Stats from "./components/Stats";
import OpenSource from "./components/OpenSource";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

function App() {
  return (
    <div className="relative min-h-screen bg-brand-surface-light dark:bg-brand-dark text-brand-dark dark:text-white overflow-hidden font-sans selection:bg-brand-primary/30 selection:text-brand-primary dark:selection:bg-brand-primary/30 dark:selection:text-brand-accent">
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
  );
}

export default App;
