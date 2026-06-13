"use client";

import { useState } from "react";
import { faq } from "@/lib/config";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-canvas" id="faq">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div className="lg:sticky lg:top-28 self-start">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary mb-4">
              ● {faq.sectionLabel}
            </p>
            <h2
              className="font-display uppercase leading-[0.97] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              <span className="block">{faq.headlineLine}</span>
              <span className="block text-primary">{faq.headlineAccent}</span>
            </h2>
          </div>

          <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
            {faq.items.map(({ q, a }, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="text-[0.88rem] font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
                    {q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 flex items-center justify-center border text-accent text-base transition-transform"
                    style={{
                      borderColor: "var(--border-strong)",
                      borderRadius: "2px",
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <p
                    className="pb-6 text-secondary leading-[1.65]"
                    style={{ fontSize: "0.87rem", maxWidth: "65ch" }}
                  >
                    {a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
