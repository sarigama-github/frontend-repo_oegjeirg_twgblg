import { ArrowRight } from "lucide-react";

const chains = [
  { name: "Ethereum", code: "eth", color: "from-indigo-600 to-purple-600" },
  { name: "Bittensor", code: "bittensor", color: "from-rose-600 to-fuchsia-600" },
  { name: "Sui", code: "sui", color: "from-sky-600 to-cyan-600" },
  { name: "Polkadot", code: "dot", color: "from-pink-600 to-rose-600" },
  { name: "Solana", code: "sol", color: "from-emerald-600 to-teal-600" },
];

export default function Chains() {
  return (
    <section id="chains" className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Supported chains</h2>
            <p className="mt-2 text-slate-600">One key. Any chain. Dynamic routing under the hood.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-800 font-medium">
            Get an endpoint <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {chains.map((c) => (
            <div key={c.code} className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${c.color} mb-3`} />
              <div className="font-semibold text-slate-900">{c.name}</div>
              <div className="text-xs text-slate-500">/{c.code}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
