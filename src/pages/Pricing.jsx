import { Check, Flame } from "lucide-react";
import Layout from "../components/Layout";

const tiers = [
  {
    name: "Community",
    price: "$0",
    badge: "Best for hobby & testing",
    features: [
      "Shared global anycast",
      "Basic rate limits",
      "Fair‑use access",
    ],
  },
  {
    name: "Pro",
    price: "$49/mo",
    badge: "Teams & production",
    features: [
      "Dedicated capacity",
      "Higher limits",
      "Analytics dashboard",
      "Email support",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact",
    badge: "Mission‑critical",
    features: [
      "SLAs & custom limits",
      "Private routing",
      "SAML/SSO",
      "24/7 support",
    ],
  },
];

export default function Pricing() {
  return (
    <Layout>
      <section className="pt-28 pb-20 relative">
        <div className="mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-rose-400/30 bg-rose-500/10 text-rose-200 text-xs font-medium">
            <Flame className="h-3.5 w-3.5" /> Pricing
          </div>
          <h1 className="mt-4 text-4xl font-black text-white">Simple, predictable pricing</h1>
          <p className="mt-2 text-slate-300">Choose a plan that scales with your traffic and needs.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-white/20">
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-3xl font-black text-white mt-2">{t.price}</div>
                <div className="text-xs text-rose-300/90 mt-1">{t.badge}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-rose-400" /> {f}</li>
                  ))}
                </ul>
                <a href="#cta" className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-gradient-to-r from-red-600 to-orange-500 text-white glow-red">Get started</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
