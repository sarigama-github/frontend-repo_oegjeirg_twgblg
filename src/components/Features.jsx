import { Server, Landmark, Shield, Globe, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Server,
    title: "Multi-chain endpoints",
    desc: "Unified RPC across Ethereum, Bittensor, Sui, Polkadot, and more with a single auth key.",
  },
  {
    icon: Globe,
    title: "Global anycast",
    desc: "Edge routing to the closest node for consistently low latency anywhere.",
  },
  {
    icon: Shield,
    title: "Censorship resistance",
    desc: "Distributed node operators ensure availability without single points of failure.",
  },
  {
    icon: Cpu,
    title: "Auto-failover + QoS",
    desc: "Health-checked routing with smart retries, rate limiting, and SLA tiers.",
  },
  {
    icon: Landmark,
    title: "Enterprise controls",
    desc: "Per-chain quotas, usage analytics, IP allowlists, and signed request enforcement.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-24 w-[40rem] bg-gradient-to-r from-red-600/20 via-orange-500/20 to-transparent blur-2xl rounded-full" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Why FlameWire</h2>
        <p className="mt-2 text-slate-300">Decentralized by design. Production-ready by default.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05 * i }}
              className="rounded-2xl glass-dark p-6 hover:bg-white/10 hover:border-white/20 transition group"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 grid place-items-center glow-red-soft">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-3 font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
