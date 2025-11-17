import { Menu, Github, Shield } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 shadow-sm" />
          <span className="text-slate-900 font-semibold text-lg tracking-tight">FlameWire</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-slate-700">
          <a className="hover:text-slate-900 transition" href="#features">Features</a>
          <a className="hover:text-slate-900 transition" href="#chains">Chains</a>
          <a className="hover:text-slate-900 transition" href="#pricing">Pricing</a>
          <a className="hover:text-slate-900 transition" href="#cta">Get Started</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 text-slate-700 hover:bg-white/80 shadow-sm"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-500 hover:to-blue-500 shadow-md"
          >
            <Shield className="h-4 w-4" />
            Launch
          </a>
        </div>
        <button
          className="md:hidden p-2 rounded-md border border-slate-200 text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/80">
          <a className="block py-2" href="#features">Features</a>
          <a className="block py-2" href="#chains">Chains</a>
          <a className="block py-2" href="#pricing">Pricing</a>
          <a className="block py-2" href="#cta">Get Started</a>
        </div>
      )}
    </header>
  );
}
