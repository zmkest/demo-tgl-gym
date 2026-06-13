import { brand, contact, hero } from "@/lib/config";

export default function Hero() {
  return (
    <section className="min-h-screen pt-5 bg-canvas flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
                  background: "radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-primary), transparent 70%), #000000",

        }}
      />
      <div className="max-w-7xl mx-auto px-6 w-full py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                {hero.statusPill}
              </span>
            </div>

            <h1
              className="font-display uppercase text-secondary leading-[0.96] tracking-[-0.01em]"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              {hero.headlineLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
              <span className="block text-primary">{hero.headlineAccent}</span>
            </h1>

            <p
              className="text-muted leading-[1.65]"
              style={{ fontSize: "0.95rem", maxWidth: "50ch" }}
            >
              {hero.body}
            </p>

            <div className="flex flex-row flex-wrap md:flex-nowrap items-center gap-4">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center gap-2 bg-primary hover:bg-(--color-btn-hover) text-white text-[0.75rem] font-bold uppercase tracking-widest px-7 py-3.5 transition-colors group"
                style={{ borderRadius: "3px" }}
              >
                {hero.ctaPrimary}
                <span className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px">
                  ↗
                </span>
              </a>
              <a
                href="#beneficios"
                className="w-full inline-flex items-center gap-2 border text-primary text-[0.75rem] font-semibold uppercase tracking-widest px-7 py-3.5 transition-colors hover:border-primary"
                style={{ borderColor: "var(--border-strong)", borderRadius: "3px" }}
              >
                <span className="text-primary">▷</span>
                {hero.ctaSecondary}
              </a>
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              {hero.stats.map(({ value, label }) => (
                <div key={label}>
                  <div
                    className="font-display text-secondary uppercase leading-none mb-1.5"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
                  >
                    {value}
                  </div>
                  <div className="text-[0.67rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div
              className="relative overflow-hidden w-full"
              style={{ aspectRatio: "3 / 4", borderRadius: "1px" }}
            >
              <img
                src={hero.urlImage}
                alt="Instalaciones del gimnasio"
                className="absolute inset-0 w-full h-full object-cover object-[3%_center] -scale-x-100 drop-shadow-accent-glow"
              />
              <div className="absolute bottom-0 left-0 right-0 h-96 bg-linear-to-t from-black to-transparent" />
              <div className="absolute top-5 left-5">
                <span
                  className="inline-flex items-center gap-2 text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-tertiary bg-white  px-3 py-1.5"
                  style={{ borderRadius: "2px", border: "1px solid var(--border-subtle)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {brand.openStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
