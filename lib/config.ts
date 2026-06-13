
// ── MARCA ─────────────────────────────────────────────────────────────────────
export const brand = {
  logoUrl: "/imgs/logo.png",
  nameAccent: "The Glute Lab",   // parte del logo en color acento
  namePrimary: "Fitness",  // parte del logo en color primario
  tagline: "Rodéate de mujeres fuertes, valientes y decididas",
  openStatus: "Exclusivo para mujeres",
};

// ── CONTACTO ──────────────────────────────────────────────────────────────────
export const contact = {
  whatsapp: "https://wa.me/+593990483085",
  instagram: "https://www.instagram.com/theglutelab.ec/",
  facebook: "https://www.facebook.com/profile.php?id=61573456326055&locale=es_LA#",
  hours: {
    weekdays: [
      "Lun–Vie: 6am – 11am",
      "Lun–Vie: 4pm – 9pm",
      "Sáb: 8am – 11am",
    ],
  },
  address: "Av. Real Audiencia y Av. Luis Tufiño, Quito Norte",
  googleMap: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.bing.com%2Fmaps%2Fdefault.aspx%3Fv%3D2%26pc%3DFACEBK%26mid%3D8100%26where1%3DAv.%2520Real%2520Audicencia%2520y%2520Av.%2520Luis%2520Tufi%25C3%25B1o.%252C%2520Quito%252C%2520Ecuador%252C%2520180209%26FORM%3DFBKPL1%26mkt%3Des-ES%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExOW9vN3VEY2N4VVhoNmZ6cXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5hg-KI9hv6Vk1dxyA4uzdd3KqCOaRVHzyXDLN357dImVmwM_FTUITTwN0qWA_aem_5bbIq8OiXWoBUlJljo1anw&h=AUAXiiCaAvcnMsRSK93Q7ypaBhhqWkV88uSDD2hS1_5_wduy6UTmZZIHWXjznfVdjriEJW3aMO94X8fRO6UXavmxCmD8csPjjEwqXYUOUAaoauGlw5a3PlV0vMS8OO9RKVSU"
};

// ── SEO ───────────────────────────────────────────────────────────────────────
export const seo = {
  altLogo: "Logo The Glute Lab",
  siteUrl: "https://demo-theglutelab.vercel.app/",

  title: "The Glute Lab — Gym exclusivo para mujeres en Quito",
  titleTemplate: "%s | The Glute Lab",
  description:
    "Gimnasio exclusivo para mujeres en el norte de Quito. Entrenamientos dirigidos y personalizados, clases de yoga, baile, boxeo y combat fitness. ¡Primera clase gratis!",

  keywords: [
    "gimnasio para mujeres Quito",
    "gym exclusivo mujeres Quito",
    "the glute lab Quito",
    "clases de yoga Quito mujeres",
    "clases de boxeo mujeres Quito",
    "combat fitness Quito",
    "masterclass baile Quito",
    "entrenamiento personalizado mujeres Quito",
    "gimnasio norte Quito",
    "membresía gimnasio Quito",
    "clase gratis gimnasio Quito",
    "gimnasio Real Audiencia Quito",
  ],

  ogImage: "/imgs/logo.png",
  locale: "es_EC",

  business: {
    name: "The Glute Lab",
    type: "HealthClub",
    phone: "+593990483085",
    email: "",
    address: {
      street: "Av. Real Audiencia y Av. Luis Tufiño",
      city: "Quito",
      state: "Pichincha",
      zip: "170318",
      country: "EC",
    },
    geo: {
      latitude: -0.128536,
      longitude: -78.487513,
    },
    priceRange: "$$",
    openingHours: [
      "Mo-Fr 06:00-11:00",
      "Mo-Fr 16:00-21:00",
      "Sa 08:00-11:00",
    ],
  },

  googleVerification: "",
};

// ── NAVBAR ────────────────────────────────────────────────────────────────────
export const navbar = {
  ctaLabel: "RESERVA TU CLASE GRATIS",
  links: [
    { label: "Beneficios", href: "#beneficios" },
    // { label: "Instalaciones", href: "#instalaciones" },
    { label: "Precios", href: "#precios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "FAQ", href: "#faq" },
  ],
};

// ── MARQUEE ───────────────────────────────────────────────────────────────────
export const marqueeKeywords = [
  "Planes personalizados",
  "Área de pesas",
  "Asesoria de entrenadores",
  "Plan nutricional",
  "Lockers privados",
  "Entrenamientos grupales",
];

// ── HERO ──────────────────────────────────────────────────────────────────────
export const hero = {
  statusPill: "Inscripciones abiertas",
  headlineLines: ["Aquí no", "entrenas"],
  headlineAccent: "sola.",
  body: "Gym exclusivo para mujeres con entrenamientos dirigidos y personalizados",
  ctaPrimary: "RESERVA TU CLASE GRATIS",
  ctaSecondary: "Beneficios",
  stats: [
    { value: "5★", label: "Calificación promedio" },
    { value: "8+", label: "Años en operación" },
    { value: "100%", label: "Acompañamiento" },
    { value: "6 DÍAS", label: "A la semana abiertos" },
  ],
  urlImage: "imgs/cta-final-background.jpg"
};

// ── Beneficios ──────────────────────────────────────────────────────────────────
export const benefits = {
  sectionLabel: "Beneficios",
  headlineLine: "Más que un gym,",
  headlineAccent: "una experiencia completa.",
  ctaLink: "Ver instalaciones ↗",
  items: [
    {
      num: "01",
      title: "Espacio exclusivo para mujeres",
      desc: "Ofrecemos un entorno seguro, cómodo y libre de presiones, diseñado específicamente para el público femenino.",
    },
    {
      num: "02",
      title: "Entrenamientos dirigidos y personalizados",
      desc: "Las rutinas no son genéricas; cada sesión cuenta con la guía de entrenadores que adaptan las cargas y posturas según tu nivel actual.",
    },
    {
      num: "03",
      title: "Especialización en tren inferior",
      desc: "Aunque se trabaja todo el cuerpo, su enfoque principal y maquinaria están optimizados para el desarrollo estético y funcional de piernas y glúteos.",
    },
    {
      num: "04",
      title: "Más de una forma de entrenar",
      desc: "Yoga, baile, boxeo y combat fitness. Porque no todos los días eres la misma.",
    },
  ],
};

// ── Instalaciones ─────────────────────────────────────────────────────────────
// export const facilities = {
//   sectionLabel: "Instalaciones",
//   headlineLine: "Espacios diseñados para",
//   headlineAccent: "tu progreso.",
//   ctaLabel: "Escribir por WhatsApp ahora",
//   imgs: [
//     {
//       alt: "01",
//       src: "/imgs/instalaciones-01.jpg",
//     },
//     {
//       alt: "02",
//       src: "/imgs/instalaciones-02.jpg",
//     },
//     {
//       alt: "03",
//       src: "/imgs/instalaciones-03.jpg",
//     },
//   ],
// };

// ── Precios ─────────────────────────────────────────────────────────────
export const pricing = {
  sectionLabel: "Precios",
  headlineLine: "Precios sencillos",
  headlineAccent: "y asequibles.",
  cta: "Escribir por WhatsApp ahora",
  plans: [
    {
      name: 'Plan Mensual', monthlyPrice: 0, yearlyPrice: 0, priceLabel: '/mes', description: 'Acceso completo al gym y todas las clases.', buttonText: 'Inscríbete ahora', popular: true, pro: true,
      features: ["Sin pago de inscripción", 'Acceso VIP al gym', "Todas la clases incluidas"]
    },
    {
      name: 'Plan Dúo', monthlyPrice: 0, yearlyPrice: 0, priceLabel: '/mes', description: 'Entrena con una amiga y pagan menos las dos.', buttonText: 'Inscríbete ahora', popular: true, pro: false,
      features: ['Inscripción sin costo', '2 membresías por el precio de 1.5 primer mes', 'Mismos beneficios del plan mensual', "Ideal para venir acompañada"]
    },
    {
      name: 'Plan Trimestral', monthlyPrice: 0, yearlyPrice: 0, priceLabel: '/mes', description: 'Compromiso de 3 meses, precio que lo vale.', buttonText: 'Inscríbete ahora', popular: true, pro: false,
      features: ['Inscripción sin costo', '3 meses de acceso total', 'El precio mensual más bajo', 'Mismos beneficios del plan mensual', "Ideal si ya sabes que vas a entrenar"]
    }
  ]
};

// ── Testimonios ─────────────────────────────────────────────────────────────
export const socialProof = {
  sectionLabel: "Testimonios",
  headlineLine: "No promesas.",
  headlineAccent: "Solo resultados.",
  testimonials: [
    {
      quote:
        "Excelente lugar, atención de calidad e instalaciones impecables. Un espacio conformado por profesionales capacitados que fomenta una comunidad de mujeres fuertes, comprometidas con su crecimiento y con convertirse cada día en su mejor versión.",
      name: "Elena C.",
      starts: "★★★★★",
    },
    {
      quote:
        "Excelente servicio y muy buena ubicación. Súper recomendado.",
      name: "Katerine C.",
      starts: "★★★★★",
    },
    {
      quote:
        "Un lugar excelente para entrenar con una instructora muy profesional y exigente, e instalaciones espaciosas con los elementos necesarios.",
      name: "Viviana M.",
      starts: "★★★★★",
    },
  ],
};

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const faq = {
  sectionLabel: "FAQ",
  headlineLine: "Preguntas",
  headlineAccent: "frecuentes.",
  items: [
    {
      q: "¿Necesito experiencia previa para unirme?",
      a: "Para nada. Trabajamos con mujeres de todos los niveles, desde principiantes absolutas hasta quienes regresan al gym después de una pausa. Tu rutina se diseña desde cero según tu objetivo.",
    },
    {
      q: "¿La orientación de las entrenadoras está incluida en la membresía?",
      a: "Sí, 100%. Desde el primer día tienes acompañamiento profesional sin costos adicionales. Sin sorpresas en tu factura.",
    },
    {
      q: "¿Cuáles son los horarios disponibles?",
      a: "Manejamos horarios de mañana, tarde y noche para que encuentres tu momento ideal. Escríbenos por WhatsApp y te confirmamos la disponibilidad actual.",
    },
    {
      q: "¿Puedo probar una clase antes de inscribirme?",
      a: "Sí. Tu primera clase es completamente gratis y sin compromiso. Ven, prueba, y decide con toda la información.",
    },
    {
      q: "¿Solo puedo hacer gym o también hay otras clases?",
      a: "Tenemos mucho más que máquinas. Con tu membresía accedes a clases de yoga, masterclass de baile, boxeo y combat fitness. Siempre hay algo diferente para mantenerte motivada.",
    },
    {
      q: "¿Qué pasa si me cuesta mantener la constancia?",
      a: "Para eso estamos. Tus entrenadoras hacen seguimiento de tu progreso y te acompañan cuando la motivación baja. Aquí no entrenas sola.",
    },
  ],
};

// ── CTA FINAL ─────────────────────────────────────────────────────────────────
export const finalCta = {
  badge: "Solicita más información",
  headlineLines: ["Tu transformación", "tiene que empezar."],
  headlineAccent: "¿Por qué no hoy?",
  body: "Costos accesibles. Sin sorpresas. Solo resultados reales con el apoyo que necesitas desde el primer día.",
  ctaLabel: "Quiero mi clase gratis",
  trustChips: ["Solo para mujeres", "Entrenadoras certificadas", "Yoga · Baile · Boxeo · Combat"],
  background: "/imgs/cta-final-background.jpg"
};

// ── FOOTER ────────────────────────────────────────────────────────────────────
export const footer = {
  links: [
    { label: "Inicio", href: "/" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Instalaciones", href: "#instalaciones" },
    { label: "Precios", href: "#precios" },
    { label: "Testimonios", href: "#testimonios" },
  ],
};
