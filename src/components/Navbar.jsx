import { Menu, Github, Flame, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="relative">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-red-600 via-orange-500 to-amber-400 glow-red-soft" />
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-tr from-red-600/20 via-orange-500/10 to-transparent blur-2xl -z-10" />
          </Link>
          <Link to="/" className="text-white font-semibold text-lg tracking-tight">FlameWire</Link>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-rose-300/90 px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-400/20">
            <Sparkles className="h-3.5 w-3.5" /> v0.1 alpha
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <Link className="hover:text-white transition" to="/about">About</Link>
          <Link className="hover:text-white transition" to="/docs">Docs</Link>
          <Link className="hover:text-white transition" to="/operators">Operators</Link>
          <Link className="hover:text-white transition" to="/pricing">Pricing</Link>
          <Link className="hover:text-white transition" to="/contact">Contact</Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 text-slate-200 hover:bg-white/5"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-500 hover:to-orange-400 glow-red"
          >
            <Flame className="h-4 w-4" />
            Launch
          </Link>
        </div>
        <button
          className="md:hidden p-2 rounded-md border border-white/10 text-slate-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black/60 backdrop-blur">
          <Link onClick={close} className="block py-2 text-slate-200" to="/about">About</Link>
          <Link onClick={close} className="block py-2 text-slate-200" to="/docs">Docs</Link>
          <Link onClick={close} className="block py-2 text-slate-200" to="/operators">Operators</Link>
          <Link onClick={close} className="block py-2 text-slate-200" to="/pricing">Pricing</Link>
          <Link onClick={close} className="block py-2 text-slate-200" to="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}
