import Layout from "../components/Layout";
import { Users, ShieldCheck, Globe2, Cpu } from "lucide-react";

export default function Operators() {
  const perks = [
    { icon: Globe2, title: "Global traffic", desc: "Requests routed to your PoP when closest/healthiest." },
    { icon: ShieldCheck, title: "Proof‑of‑quality", desc: "Uptime, latency, and correctness scoring." },
    { icon: Cpu, title: "Easy integration", desc: "Bring your existing nodes. Add a lightweight agent." },
  ];

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-rose-400/30 bg-rose-500/10 text-rose-200 text-xs font-medium">
            <Users className="h-3.5 w-3.5" /> Node Operators
          </div>
          <h1 className="mt-4 text-4xl font-black text-white">Run infrastructure. Earn rewards.</h1>
          <p className="mt-2 text-slate-300">Contribute capacity to a decentralized RPC mesh. Get paid based on usage and quality.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="glass-dark rounded-2xl p-6">
                <p.icon className="h-5 w-5 text-rose-300" />
                <div className="text-white font-semibold mt-2">{p.title}</div>
                <div className="text-sm text-slate-300 mt-1">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
