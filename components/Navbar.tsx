"use client";

import { useState, useEffect } from "react";
import { brand, contact, navbar, seo } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-canvas/95 backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{ borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between overflow-hidden">
        <a href="/" className="relative w-16 h-16 overflow-hidden">
          <img src={brand.logoUrl} alt={seo.altLogo}
          className="w-full h-full object-cover object-center"/>
        </a>

        <nav className="hidden md:flex items-center gap-10" aria-label="Navegación principal">
          {navbar.links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-(--color-btn) hover:bg-(--color-btn-hover) text-white text-[0.72rem] font-bold uppercase tracking-widest px-5 py-3 transition-colors group"
          style={{ borderRadius: "3px" }}
        >
          {navbar.ctaLabel}
          <span className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px">
            ↗
          </span>
        </a>
      </div>
    </header>
  );
}
