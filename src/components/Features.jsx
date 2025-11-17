import { Server, Landmark, Shield, Globe, Cpu } from "lucide-react";

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
    <section id="features" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why FlameWire</h2>
        <p className="mt-2 text-slate-600">Decentralized by design. Production-ready by default.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 p-6 bg-white/80 shadow-sm hover:shadow-md transition">
              <f.icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
