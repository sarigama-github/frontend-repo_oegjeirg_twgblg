import { ShieldCheck, Zap, Globe2, Link, ArrowRight, Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16">
      {/* Aurora / gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-52 -right-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-red-600/25 via-orange-500/25 to-rose-500/10 blur-3xl animate-aurora" />
        <div className="absolute -bottom-56 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-rose-600/20 via-orange-500/20 to-transparent blur-3xl animate-aurora" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-rose-400/30 bg-rose-500/10 text-rose-200 text-xs font-medium shadow-sm animate-flicker">
              <ShieldCheck className="h-3.5 w-3.5" />
              Decentralized multi-chain RPC
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-white">
              FlameWire — blazing fast, censorship‑resistant RPC
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Global decentralized RPC/API infrastructure engineered for availability and speed — preserving crypto's core values with enterprise‑grade reliability.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-500 hover:to-orange-400 glow-red">
                Ignite
                <Flame className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-white/10 bg-white/5 text-white hover:bg-white/10">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-slate-300 text-sm">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-rose-400"/> Sub‑300ms</div>
              <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-rose-400"/> Global PoPs</div>
              <div className="flex items-center gap-2"><Link className="h-4 w-4 text-rose-400"/> Multi‑chain</div>
            </div>
          </div>

          {/* Code card with motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600/10 via-orange-500/10 to-transparent blur-xl rounded-3xl" />
            <div className="rounded-2xl glass-dark shadow-xl p-4">
              <div className="font-mono text-xs text-slate-300">
                {`curl -X POST \\\n$FLAMEWIRE_URL/eth \\\n -H "Content-Type: application/json" \\\n -d '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}'`}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-3 p-3 rounded-lg bg-black/80 text-rose-200 text-xs font-mono border border-white/10"
              >
                {`{"jsonrpc":"2.0","id":1,"result":"0x12ab34"}`}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
