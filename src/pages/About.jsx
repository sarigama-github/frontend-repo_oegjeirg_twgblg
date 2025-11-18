import { Shield, Globe2, Network, Flame } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

export default function About() {
  const stats = [
    { label: "Regions", value: "10+" },
    { label: "Chains", value: "5+" },
    { label: "SLO", value: "99.9%" },
    { label: "Latency", value: "<300ms" },
  ];

  return (
    <Layout>
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-48 -right-40 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-red-600/20 via-orange-500/20 to-rose-500/10 blur-3xl animate-aurora" />
        </div>
        <div className="mx-auto max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-rose-400/30 bg-rose-500/10 text-rose-200 text-xs font-medium">
            <Flame className="h-3.5 w-3.5" /> About FlameWire
          </div>
          <h1 className="mt-4 text-4xl font-black text-white">Decentralized by design. Reliable by default.</h1>
          <p className="mt-4 text-slate-300">
            FlameWire is a decentralized multi‑chain RPC network that routes traffic across independent operators around the world. We
            combine the ethos of web3 with the reliability of enterprise infrastructure.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="glass-dark rounded-2xl p-6">
              <Shield className="h-5 w-5 text-rose-300" />
              <h3 className="mt-3 text-white font-semibold">Censorship‑resistant</h3>
              <p className="text-slate-300 text-sm mt-1">Distributed validators and fallback providers ensure requests cannot be easily blocked.</p>
            </motion.div>
            <motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="glass-dark rounded-2xl p-6">
              <Network className="h-5 w-5 text-rose-300" />
              <h3 className="mt-3 text-white font-semibold">Anycast routing</h3>
              <p className="text-slate-300 text-sm mt-1">Traffic is steered to the closest healthy point‑of‑presence with automatic failover.</p>
            </motion.div>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass-dark rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
