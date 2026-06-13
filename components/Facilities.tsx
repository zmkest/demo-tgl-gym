import { contact, facilities } from "@/lib/config";

export default function HowItWorks() {
  return (

    <section className="py-24 lg:py-32 bg-canvas" id="instalaciones">

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary mb-4">
            ● {facilities.sectionLabel}
          </p>
          <h2
            className="font-display uppercase leading-[0.97] tracking-[-0.01em]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            <span className="block">{facilities.headlineLine}</span>
            <span className="block text-primary">{facilities.headlineAccent}</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto">
          {facilities.imgs.map(({ alt, src }, i) => (
            <div key={i} className="relative group grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
              <img className="h-full w-full object-cover object-center"
                src={src}
                alt={alt} />
            </div>
          ))}

        </div>

        <div className="text-center mt-14">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-(--color-btn-hover) text-white text-[0.75rem] font-bold uppercase tracking-widest px-8 py-4 transition-colors group"
            style={{ borderRadius: "3px" }}
          >
            {facilities.ctaLabel}
            <span className="transition-transform group-hover:translate-x-px">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
