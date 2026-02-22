"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-cs-border/40"
      style={{ background: "rgba(7,10,18,0.85)", backdropFilter: "blur(16px)" }}
    >
      <div className="max-w-6xl mx-auto px-5 flex h-16 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-xl font-black tracking-tight text-cs-text">
            Car<span className="text-cs-red">Snap</span>
          </span>
          <span
            className="hidden sm:inline text-[10px] font-mono uppercase tracking-[0.18em] px-2 py-0.5 rounded border"
            style={{ color: "#22D3EE", borderColor: "rgba(34,211,238,0.35)", background: "rgba(34,211,238,0.07)" }}
          >
            Season 1
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-cs-muted">
          <Link href="/#features"    className="hover:text-cs-text transition-colors">Features</Link>
          <Link href="/#how-it-works" className="hover:text-cs-text transition-colors">How It Works</Link>
          <Link href="/#gallery"     className="hover:text-cs-text transition-colors">Gallery</Link>
          <Link href="/privacy"      className="hover:text-cs-text transition-colors">Privacy</Link>
        </nav>

        {/* Download CTA */}
        <a
          href="#download"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-bold rounded-full text-white transition-all hover:brightness-110"
          style={{ background: "linear-gradient(135deg, #D61F19, #991410)" }}
        >
          Download
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cs-muted hover:text-cs-text transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-cs-border/40 bg-cs-surface/95 backdrop-blur-xl">
          <nav className="flex flex-col px-5 py-5 gap-5 text-sm font-medium">
            <Link href="/#features"    onClick={() => setOpen(false)} className="text-cs-muted hover:text-cs-text transition-colors">Features</Link>
            <Link href="/#how-it-works" onClick={() => setOpen(false)} className="text-cs-muted hover:text-cs-text transition-colors">How It Works</Link>
            <Link href="/#gallery"     onClick={() => setOpen(false)} className="text-cs-muted hover:text-cs-text transition-colors">Gallery</Link>
            <Link href="/privacy"      onClick={() => setOpen(false)} className="text-cs-muted hover:text-cs-text transition-colors">Privacy Policy</Link>
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="w-fit px-5 py-2 font-bold rounded-full text-white"
              style={{ background: "linear-gradient(135deg, #D61F19, #991410)" }}
            >
              Download
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
