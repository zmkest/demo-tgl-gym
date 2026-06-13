import { brand, contact, footer, seo } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-canvas pt-16 pb-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-14">
          <div>
            <div className="flex items-center mb-4">
              <a href="/" className="relative w-24 h-24 overflow-hidden">
              <img src={brand.logoUrl} alt={seo.altLogo}
                className="w-full h-full object-contain object-center" />
            </a>
            </div>
            <p
              className="text-muted leading-[1.65]"
              style={{ fontSize: "0.82rem", maxWidth: "28ch" }}
            >
              {brand.tagline}
            </p>
          </div>

          <div>
            <p className="text-[0.63rem] font-semibold uppercase tracking-[0.22em] text-muted mb-5">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {footer.links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[0.8rem] text-secondary hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.63rem] font-semibold uppercase tracking-[0.22em] text-muted mb-5">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={contact.googleMap}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.8rem] text-secondary hover:text-primary transition-colors"
              >
                {contact.address}
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.8rem] text-secondary hover:text-primary transition-colors"
              >
                WhatsApp ↗
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.8rem] text-secondary hover:text-primary transition-colors"
              >
                Instagram ↗
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.8rem] text-secondary hover:text-primary transition-colors"
              >
                Facebook ↗
              </a>
              <p className="text-[0.8rem] text-muted leading-[1.7]">
                {contact.hours.weekdays}
              </p>
            </div>
          </div>
        </div>
        
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p className="text-[0.72rem] text-muted">
            © {year} {brand.nameAccent} {brand.namePrimary}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
