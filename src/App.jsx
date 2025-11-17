import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Chains from "./components/Chains";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen relative">
      {/* subtle moving background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Chains />
      <CTA />

      <footer className="py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} FlameWire • Decentralized Multi-Chain Infrastructure
      </footer>
    </div>
  );
}

export default App;
