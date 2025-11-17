import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const chains = [
  { name: "Ethereum", code: "eth", color: "from-red-600 to-orange-500" },
  { name: "Bittensor", code: "bittensor", color: "from-rose-600 to-fuchsia-600" },
  { name: "Sui", code: "sui", color: "from-amber-500 to-orange-500" },
  { name: "Polkadot", code: "dot", color: "from-pink-600 to-rose-600" },
  { name: "Solana", code: "sol", color: "from-emerald-600 to-teal-600" },
];

export default function Chains() {
  return (
    <section id="chains" className="py-20 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 right-10 h-24 w-24 rounded-full bg-gradient-to-tr from-red-600/30 to-orange-500/10 blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Supported chains</h2>
            <p className="mt-2 text-slate-300">One key. Any chain. Dynamic routing under the hood.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-flex items-center gap-2 text-rose-300 hover:text-white font-medium">
            Get an endpoint <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {chains.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.06 * i }}
              className="rounded-2xl glass-dark p-5 hover:border-white/20 hover:bg-white/10"
            >
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${c.color} mb-3 glow-red-soft`} />
              <div className="font-semibold text-white">{c.name}</div>
              <div className="text-xs text-slate-400">/{c.code}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
