import { contact, finalCta } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <img
        src={finalCta.background}
        alt="Instalaciones del gimnasio"
        className="absolute inset-0 w-full h-full object-cover object-[20%_center] drop-shadow-primary"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(14,11,9,0.93) 10%, rgba(14,11,9,0.55) 50%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border-subtle)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2"
            style={{ border: "1px solid var(--border-subtle)", borderRadius: "2px" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-secondary">
              {finalCta.badge}
            </span>
          </div>

          <h2
            className="font-display uppercase leading-[0.97] tracking-[-0.01em] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {finalCta.headlineLines.map((line) => (
              <span key={line} className="block text-white">{line}</span>
            ))}
            <span className="block text-primary">{finalCta.headlineAccent}</span>
          </h2>

          <p
            className="text-secondary leading-[1.65] mb-10"
            style={{ fontSize: "0.92rem", maxWidth: "50ch" }}
          >
            {finalCta.body}
          </p>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-(--color-btn-hover) text-white text-[0.75rem] font-bold uppercase tracking-widest px-8 py-4 mb-8 transition-colors group"
            style={{ borderRadius: "3px" }}
          >
            {finalCta.ctaLabel}
            <span className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px">
              ↗
            </span>
          </a>

          <div className="flex flex-wrap gap-3">
            {finalCta.trustChips.map((chip) => (
              <div
                key={chip}
                className="inline-flex items-center gap-2 text-[0.67rem] font-semibold uppercase tracking-[0.12em] text-muted px-3 py-2"
              >
                <span className="text-primary">✓</span>
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
