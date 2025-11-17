import { KeyRound, Activity } from "lucide-react";

export default function CTA() {
  const backend = import.meta.env.VITE_BACKEND_URL || "";
  const sample = backend ? `${backend}/api/health` : "/api/health";
  return (
    <section id="cta" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">Get your decentralized endpoint</h2>
        <p className="mt-3 text-slate-300">Provision a key in seconds. Route traffic across a global mesh of independent operators.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-white text-slate-900 hover:bg-slate-100 shadow">
            <KeyRound className="h-4 w-4" />
            Create API key
          </a>
          <a href={sample} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20">
            <Activity className="h-4 w-4" />
            Check API health
          </a>
        </div>
      </div>
    </section>
  );
}
