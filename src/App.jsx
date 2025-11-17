import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Chains from "./components/Chains";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Chains />
      <CTA />
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} FlameWire • Decentralized Multi-Chain Infrastructure
      </footer>
    </div>
  );
}

export default App;
