import Layout from "../components/Layout";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const backend = import.meta.env.VITE_BACKEND_URL || "";
  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch(`${backend || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      setStatus(data?.status || (res.ok ? 'ok' : 'error'));
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-xl px-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-rose-400/30 bg-rose-500/10 text-rose-200 text-xs font-medium">
            <Mail className="h-3.5 w-3.5" /> Contact
          </div>
          <h1 className="mt-4 text-4xl font-black text-white">Let's talk</h1>
          <p className="mt-2 text-slate-300">Reach out for partnerships, enterprise, or press.</p>

          <form onSubmit={submit} className="mt-8 glass-dark rounded-2xl p-6 space-y-4">
            <div>
              <label className="text-sm text-slate-300 flex items-center gap-2"><User className="h-4 w-4"/> Name</label>
              <input name="name" required className="mt-1 w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-white outline-none focus:border-rose-400/40" />
            </div>
            <div>
              <label className="text-sm text-slate-300 flex items-center gap-2"><Mail className="h-4 w-4"/> Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-white outline-none focus:border-rose-400/40" />
            </div>
            <div>
              <label className="text-sm text-slate-300 flex items-center gap-2"><MessageSquare className="h-4 w-4"/> Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-white outline-none focus:border-rose-400/40" />
            </div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-red-600 to-orange-500 text-white glow-red"><Send className="h-4 w-4"/> Send</button>
            {status && (
              <div className={`text-sm mt-2 ${status==='ok'?'text-emerald-400':'text-rose-400'}`}>
                {status==='ok'?'Thanks! We\'ll be in touch.':'Something went wrong.'}
              </div>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}
