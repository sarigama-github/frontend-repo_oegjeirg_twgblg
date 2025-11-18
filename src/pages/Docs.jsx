import Layout from "../components/Layout";
import { Code2, BookOpen, KeyRound, Shield, Activity } from "lucide-react";

export default function Docs() {
  const backend = import.meta.env.VITE_BACKEND_URL || "";
  const base = backend ? `${backend}/api` : "/api";

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-rose-400/30 bg-rose-500/10 text-rose-200 text-xs font-medium">
            <BookOpen className="h-3.5 w-3.5" /> Documentation
          </div>
          <h1 className="mt-4 text-4xl font-black text-white">API Reference</h1>
          <p className="mt-2 text-slate-300">Use one key across multiple chains. Replace BASE with your backend URL.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm">
            <div className="glass-dark rounded-2xl p-6">
              <div className="text-white font-semibold flex items-center gap-2"><KeyRound className="h-4 w-4"/> Authentication</div>
              <pre className="mt-3 p-3 rounded-lg bg-black/80 border border-white/10 overflow-x-auto"><code>{`curl -X POST \\
${base}/rpc/eth \\
 -H "Content-Type: application/json" \\
 -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'`}</code></pre>
            </div>
            <div className="glass-dark rounded-2xl p-6">
              <div className="text-white font-semibold flex items-center gap-2"><Activity className="h-4 w-4"/> Health</div>
              <pre className="mt-3 p-3 rounded-lg bg-black/80 border border-white/10 overflow-x-auto"><code>{`GET ${base}/health`}</code></pre>
            </div>
            <div className="glass-dark rounded-2xl p-6">
              <div className="text-white font-semibold flex items-center gap-2"><Shield className="h-4 w-4"/> Chains</div>
              <pre className="mt-3 p-3 rounded-lg bg-black/80 border border-white/10 overflow-x-auto"><code>{`GET ${base}/chains`}</code></pre>
            </div>
            <div className="glass-dark rounded-2xl p-6">
              <div className="text-white font-semibold flex items-center gap-2"><Code2 className="h-4 w-4"/> Examples</div>
              <pre className="mt-3 p-3 rounded-lg bg-black/80 border border-white/10 overflow-x-auto"><code>{`fetch('${base}/rpc/eth',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:1,method:'eth_blockNumber',params:[]})}).then(r=>r.json())`}</code></pre>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
