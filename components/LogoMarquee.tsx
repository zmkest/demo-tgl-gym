import { marqueeKeywords } from "@/lib/config";

export default function LogoMarquee() {
  const items = [...marqueeKeywords, ...marqueeKeywords];

  return (
    <div
      className="relative overflow-hidden py-4 bg-primary"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((word, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 mx-6 text-[1rem] font-semibold uppercase tracking-[0.28em] text-white"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
