import { Globe2, Link, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-28 pb-12 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/10 to-cyan-400/10 blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-indigo-200 bg-white/70 text-indigo-700 text-xs font-medium shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" />
              Decentralized multi-chain RPC
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              FlameWire powers Ethereum, Bittensor, SUI, and more
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Global decentralized RPC/API infrastructure designed for availability and censorship resistance — preserving crypto's core values while delivering enterprise-grade reliability.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 shadow">
                Start building
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-slate-200 bg-white/80 text-slate-800 hover:bg-white shadow-sm">
                Learn more
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-slate-600 text-sm">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-600"/> Sub-300ms</div>
              <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-indigo-600"/> Global PoPs</div>
              <div className="flex items-center gap-2"><Link className="h-4 w-4 text-indigo-600"/> Multi-chain</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl border border-slate-200 bg-white/70 shadow-lg p-4">
              <div className="font-mono text-xs text-slate-600">
                {`curl -X POST \\
$FLAMEWIRE_URL/eth \\
 -H "Content-Type: application/json" \\
 -d '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}'`}
              </div>
              <div className="mt-3 p-3 rounded-lg bg-slate-900 text-slate-100 text-xs font-mono">
                {`{"jsonrpc":"2.0","id":1,"result":"0x12ab34"}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
