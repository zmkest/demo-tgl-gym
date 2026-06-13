import { socialProof } from "@/lib/config";

export default function SocialProof() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-canvas" id="testimonios">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary mb-4">
              ● {socialProof.sectionLabel}
            </p>
            <h2
              className="font-display uppercase leading-[0.97] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              <span className="block">{socialProof.headlineLine}</span>
              <span className="block text-primary">{socialProof.headlineAccent}</span>
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px"
            style={{ background: "var(--border-subtle)" }}
          >
            {socialProof.testimonials.map(({ quote, name, starts }) => (
              <div key={name} className="bg-mist-900 p-8 flex flex-col gap-5">
                <span
                  className="font-display text-primary leading-none select-none"
                  style={{ fontSize: "3.5rem" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="text-muted font-semibold text-[0.9rem] leading-[1.65] flex-1 -mt-4">
                  {quote}
                </p>
                <div
                  className="pt-5"
                  style={{ borderTop: "1px solid var(--border-subtle)" }}
                >
                  <div className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-secondary">
                    {name}
                  </div>
                  <div className="text-[0.63rem] font-medium uppercase tracking-widest text-amber-400 mt-1">
                    {starts}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
