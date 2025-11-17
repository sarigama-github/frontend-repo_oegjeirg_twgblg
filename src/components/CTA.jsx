import { KeyRound, Activity, Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  const backend = import.meta.env.VITE_BACKEND_URL || "";
  const sample = backend ? `${backend}/api/health` : "/api/health";
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-red-600/20 via-orange-500/15 to-transparent blur-3xl animate-aurora" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl font-black text-white"
        >
          Ready to light it up?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-slate-300"
        >
          Provision a key in seconds. Route traffic across a global mesh of independent operators.
        </motion.p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-500 hover:to-orange-400 glow-red">
            <KeyRound className="h-4 w-4" />
            Create API key
          </a>
          <a href={sample} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/10 bg-white/5 text-white hover:bg-white/10">
            <Activity className="h-4 w-4" />
            Check API health
          </a>
        </div>
        <div className="mt-8 inline-flex items-center gap-2 text-rose-300/90 text-sm px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/20">
          <Flame className="h-4 w-4" /> 99.9% uptime target • Global Anycast
        </div>
      </div>
    </section>
  );
}
