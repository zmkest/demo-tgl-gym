import { benefits } from "@/lib/config";

export default function Beneficios() {
  return (
    <section className="py-24 lg:py-32 bg-canvas" id="beneficios">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary mb-4">
              ● {benefits.sectionLabel}
            </p>
            <h2
              className="font-display uppercase text-primary leading-[0.97] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              <span className="block text-secondary">{benefits.headlineLine}</span>
              <span className="block text-primary">{benefits.headlineAccent}</span>
            </h2>
          </div>
          <a
            href="#instalaciones"
            className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-secondary hover:text-primary transition-colors shrink-0 self-start sm:self-auto"
          >
            {benefits.ctaLink}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {benefits.items.map(({ num, title, desc }) => (
            <div
              key={num}
              className="bg-canvas p-8 group hover:bg-card transition-colors flex flex-col"
              style={{
                borderTop: "1px solid var(--color-primary)",
                borderRight: "1px solid var(--color-primary)",
                borderBottom: "1px solid var(--color-primary)",
              }}
            >
              <div className="text-[0.9rem] font-semibold uppercase tracking-[0.22em] text-muted mb-5">
                {num}
              </div>
              <h3 className="font-display text-[1.05rem] uppercase text-primary mb-3 leading-tight">
                {title}
              </h3>
              <p className="text-[0.85rem] text-secondary leading-[1.65]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
