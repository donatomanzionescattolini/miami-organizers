import { createContext, useContext } from 'react'

/* ============================================================
   MEDIA — served from the existing WordPress host
   ============================================================ */
const BASE = 'https://miamiorganizers.com/wp-content/uploads'

export const IMG = {
  logo:      `${BASE}/2023/08/logo-Mo.jpg`,
  hero:      `${BASE}/2023/04/92E1DA0C-5D8A-4E2E-B05E-D45F0639A6CC.jpg`,
  // service cards — portrait photos that fit the 4:5 card frame
  cardHome:  `${BASE}/2023/07/IMG_09051-768x1024.jpg`,
  cardOffice:`${BASE}/2023/07/IMG_78821-768x1024.jpg`,
  cardMove:  `${BASE}/2023/07/IMG_14421-768x1024.jpg`,
  concierge: `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM-5.jpeg`,
  portrait:  `${BASE}/elementor/thumbs/IMG_3105-scaled-ppfs8a1y2ar9sxj9p7oj32o2eufryqwovnjsom3vk8.jpg`,
  book:      `${BASE}/2024/09/Organizing-for-a-better-lifestyle-by-Sherezade-Vacas-642x1024.png`,
}

/* gallery — Proyect-2 & Proyect-3 removed per request */
export const GALLERY = [
  `${BASE}/2023/07/Proyect-1-1.png`,
  `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM-4.jpeg`,
  `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM-3.jpeg`,
  `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM-2.jpeg`,
  `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM-1.jpeg`,
  `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM.jpeg`,
  `${BASE}/2023/07/IMG_78851.jpg`,
]

/* ============================================================
   LINKS
   ============================================================ */
export const LINKS = {
  instagram: 'https://www.instagram.com/miamiorganizers/',
  facebook:  'https://www.facebook.com/Miamiorganizers',
  phone:     '+17864388088',
  phoneDisplay: '+1 786 438 8088',
  whatsapp:  'https://wa.me/17864388088',
  youtubeId: 'AZzRUiomccs',
  product:   'https://miamiorganizers.thinkific.com/products/digital_downloads/Organizing-for-a-better-lifestyle',
  calendly:  'https://calendly.com/sherevacas/30min?month=2026-06',
  form:      'https://docs.google.com/forms/d/e/1FAIpQLSdWtuDrqKjFndcpOoiwIIyh-WYKcZUxHL-rfiSbv_bjkMRYMw/viewform',
  portal:    'https://miamiorganizers.base44.app',
  press:     'https://miamibusiness.com/miami-rising-star-organizer-shere-vacas/',
}

/* routes */
export const ROUTES = { home: '/', services: '/services', work: '/work', about: '/about', guides: '/guides', contact: '/contact' }

/* ============================================================
   COPY — fully bilingual (English / Español)
   ============================================================ */
export const T = {
  en: {
    code: 'en', label: 'EN', other: 'ES', otherFull: 'Español',
    pageTitles: {
      home: 'Miami Organizers — Home & Office Organizing in South Florida',
      services: 'Services — Miami Organizers',
      work: 'Our Work — Miami Organizers',
      about: 'About — Miami Organizers',
      guides: 'Digital Guides — Miami Organizers',
      contact: 'Contact — Miami Organizers',
    },
    nav: { home: 'Home', services: 'Services', work: 'Our Work', about: 'About', guides: 'Guides', contact: 'Contact', book: 'Get a quote', call: 'Call us' },
    hero: {
      eyebrow: 'Miami · South Florida · Latin America',
      titleA: 'A home that',
      titleB: 'runs quietly.',
      lede: "Whether you're drowning in piles of stuff or just need a little extra help to make your space shine — Miami Organizers is here to handle the chaos and give you your time, calm, and clarity back.",
      ctaBook: 'Request your free quote',
      ctaServices: 'See what we do',
    },
    strip: { line: 'Declutter · Design · Systemize · Maintain', muted: 'so the everyday feels effortless.' },
    services: {
      eyebrow: '01 — What we do',
      title: 'Considered spaces,\nstart to finish.',
      intro: "We're a team of professional organizers who turn cluttered, overwhelming spaces into functional, harmonious ones. We edit what no longer serves you, build systems that hold, and style the result so it's as beautiful as it is practical.",
      cards: [
        { t: 'Home Organizing', d: 'Kitchens, pantries, closets, garages and every room that quietly holds your household together — edited, systemized and restyled.' },
        { t: 'Office & Productivity', d: 'Residential and office systems: filing, storage, schedules and digital cleanup that maximize your time and resources.' },
        { t: 'Moves & Unpacks', d: 'Stress-free moving, renovation planning and full unpacks. Arrive to a home that already works from day one.' },
      ],
      specialtiesTitle: 'Specialized offerings',
      specialties: ['Closet design', 'Wardrobe styling', 'Virtual organizing', 'Renovation planning', 'Stress-free moving', 'Storage solutions', 'Digital file organizing', 'Home & office'],
      more: 'Explore all services',
    },
    concierge: {
      eyebrow: '02 — White-glove care',
      title: 'The space,\nquietly kept.',
      text: 'A standing service for clients who would simply prefer it handled. Our team shops, restocks, and maintains the systems we build — so your home or office stays effortless long after we leave, and you never think about it.',
      list: ['Weekly or bi-weekly maintenance visits', 'Preferred brands, markets & preferences honored', 'Systems kept perfect between visits, discreetly'],
      cta: 'Begin with a short intake',
    },
    gallery: {
      eyebrow: '03 — Our work',
      title: 'Order, made\nbeautiful.',
      intro: 'Real spaces we have transformed for Miami households and businesses. Every project is built around how each client actually lives and works.',
      more: 'See all our work',
    },
    video: {
      eyebrow: '04 — Meet Miami Organizers',
      title: 'See how we work.',
      intro: 'A quick look at our team turning everyday chaos into calm, functional spaces.',
    },
    mission: {
      eyebrow: '05 — Our why',
      title: 'More than a job —\nit\u2019s our passion.',
      items: [
        { t: 'Our goal', d: 'To bring peace of mind, efficient decision-making and energy savings to our clients — while creating job opportunities for women in career transition and making a positive ecological impact through responsible consumption and recycling.' },
        { t: 'Where we go', d: 'Your home, your office, your boat or your RV. Miami Organizers was born in Miami, but we travel anywhere in the US and Latin America. Wherever you need us, we\u2019ll be there.' },
        { t: 'What we do', d: 'We create systems that improve your life — choosing, purchasing and installing organizing equipment; designing, decluttering, categorizing, and even cleaning. We hand you a space that maintains itself.' },
      ],
    },
    quote: { text: '"Organizing isn\u2019t about owning less. It\u2019s about making room for the life you actually want."', cite: 'Sherezade Vacas — Founder' },
    packages: {
      eyebrow: '06 — Packages',
      title: 'Booked by the hour,\nbuilt around the project.',
      intro: 'Professional organizing is $90 per hour. Choose the block that fits your space — most kitchens land between three and five hours, whole-home projects between six and eight.',
      hours: 'hours', tags: { feature: 'Most booked', best: 'Best value' },
      note: "Not sure which to choose? Request a free quote and we'll estimate the hours for your space.",
    },
    reviews: {
      eyebrow: '07 — Client reviews',
      title: 'Rated 4.7 across\n39 verified reviews.',
      intro: 'Clients return to Miami Organizers for the same reasons they recommend it: speed, discretion, and spaces that keep working long after the team leaves.',
      items: [
        { q: "I promise you this is the best service you'll ever receive. I reached out Monday morning to unpack after a cross-country move — it was done by Monday night. I've never seen something so organized in my life.", n: 'Heather C.', s: 'Cross-country move & unpack' },
        { q: 'They turned my third bedroom into a glamorous closet that is my sweet haven. Clothes are color-coordinated, purses on display, shoes safely stored — and everything has a place.', n: 'Chanilia N.', s: 'Closet design' },
        { q: 'I had an urgent packing project on short notice, and Sherezade responded promptly, completed it on time and on budget, and made me feel like an old customer instead of a first-timer.', n: 'Miguel L.', s: 'Move preparation' },
        { q: "Shere and her team are incredible — non-judgemental, speedy, professional, and kind. They're a well-oiled machine that's a joy to work with.", n: 'Thumbtack client', s: 'Home organizing' },
        { q: 'She started with a Zoom review of my space and a quote — so efficient for a busy person like me. The team transformed my room and closet into a totally organized oasis.', n: 'Houzz client', s: 'Bedroom & closet' },
      ],
    },
    products: {
      eyebrow: '08 — Digital guides',
      title: 'Tools to simplify\nyour life.',
      intro: 'Practical resources to bring order and sustainable habits to your everyday — created by Sherezade Vacas.',
      bookTitle: 'Organizing for a Better Lifestyle',
      bookText: 'A complete digital guide to building spaces and habits that last. Discover tools to simplify your life, boost productivity, and find calm by letting go of what no longer serves you.',
      bookCta: 'Get the guide',
      tools: [
        { t: 'Simplify & focus', d: 'Discover tools to simplify your life and boost productivity effectively.' },
        { t: 'Sustainable habits', d: 'Learn how to create spaces and sustainable habits for a more balanced life.' },
        { t: 'Calm & order', d: 'Find calm and order in your daily life by letting go of what no longer serves you.' },
      ],
    },
    press: {
      eyebrow: '09 — In the press',
      kicker: 'MiamiBusiness.com · Rising Stars',
      quote: '"A beautiful space that doesn\u2019t function properly still creates stress."',
      excerpt: 'Profiled as a Miami Rising Star, Sherezade Vacas was recognized for building Miami Organizers through resilience and a purpose-driven approach — combining organization, functional design, and lifestyle strategy for homes, offices, and luxury residences across Miami and beyond.',
      cta: 'Read the feature →',
    },
    about: {
      eyebrow: '10 — The founder',
      title: 'Sherezade Vacas',
      p1: 'Miami Organizers was founded on a simple belief: a well-ordered home gives you your time, attention and calm back. Sherezade leads every project personally, bringing an editor\u2019s eye and a host\u2019s warmth to homes across South Florida.',
      p2: 'Beyond client work, she\u2019s an author and entrepreneur who built Miami Organizers into a name households and businesses trust for hands-on organizing and discreet, ongoing care.',
      cta: 'Explore the digital guide →',
    },
    contact: {
      eyebrow: '11 — Let\u2019s begin',
      title: 'Ready to reclaim\nyour space?',
      text: "Take the first step toward a more organized life. Tell us about your space and goals — whether it's a one-time project or ongoing care. No pressure, no obligation.",
      call: 'Call or text us',
      bookCta: 'Schedule on Calendly',
      formCta: 'Request a quote',
      portalCta: 'Client menu portal',
      follow: 'Follow our work',
    },
    cta: { title: 'Let\u2019s make room for what matters.', text: 'Tell us about your space — we\u2019ll handle the rest.', btn: 'Get your free quote' },
    footer: {
      tag: 'Declutter · Design · Systemize · Maintain',
      rights: 'Miami Organizers, LLC',
      colServices: 'Services', colBook: 'Get started', colMore: 'More', colStudio: 'Studio',
      l: {
        home: 'Home organizing', office: 'Office systems', moving: 'Moves & unpacks',
        quote: 'Request a quote', schedule: '30-min consultation', portal: 'Client portal',
        guide: 'Digital guide', reviews: 'Client reviews', press: 'Press feature', about: 'About Sherezade',
        location: 'Miami-Dade County, Florida', appt: 'By appointment · US & Latin America',
      },
    },
    amazon: 'As an Amazon Associate we earn from qualifying purchases.',
  },

  es: {
    code: 'es', label: 'ES', other: 'EN', otherFull: 'English',
    pageTitles: {
      home: 'Miami Organizers — Organización de Hogar y Oficina en el Sur de Florida',
      services: 'Servicios — Miami Organizers',
      work: 'Proyectos — Miami Organizers',
      about: 'Nosotros — Miami Organizers',
      guides: 'Guías Digitales — Miami Organizers',
      contact: 'Contacto — Miami Organizers',
    },
    nav: { home: 'Inicio', services: 'Servicios', work: 'Proyectos', about: 'Nosotros', guides: 'Guías', contact: 'Contacto', book: 'Cotiza gratis', call: 'Llámanos' },
    hero: {
      eyebrow: 'Miami · Sur de Florida · Latinoamérica',
      titleA: 'Un hogar que',
      titleB: 'fluye en calma.',
      lede: 'Ya sea que estés ahogado entre cosas o solo necesites una mano extra para que tu espacio brille — Miami Organizers está aquí para encargarse del caos y devolverte tu tiempo, tu calma y tu claridad.',
      ctaBook: 'Pide tu cotización gratis',
      ctaServices: 'Ve lo que hacemos',
    },
    strip: { line: 'Despejar · Diseñar · Sistematizar · Mantener', muted: 'para que lo cotidiano se sienta sin esfuerzo.' },
    services: {
      eyebrow: '01 — Lo que hacemos',
      title: 'Espacios pensados,\nde principio a fin.',
      intro: 'Somos un equipo de organizadores profesionales que transforma espacios desordenados y abrumadores en lugares funcionales y armoniosos. Editamos lo que ya no te sirve, creamos sistemas que perduran y damos estilo al resultado para que sea tan bello como práctico.',
      cards: [
        { t: 'Organización del hogar', d: 'Cocinas, despensas, clósets, garajes y cada rincón que sostiene tu hogar — editados, sistematizados y con estilo.' },
        { t: 'Oficina y productividad', d: 'Sistemas para casa y oficina: archivos, almacenamiento, agendas y limpieza digital que maximizan tu tiempo y recursos.' },
        { t: 'Mudanzas y desempaque', d: 'Mudanzas sin estrés, planeación de remodelaciones y desempaque completo. Llega a un hogar que ya funciona desde el primer día.' },
      ],
      specialtiesTitle: 'Servicios especializados',
      specialties: ['Diseño de clósets', 'Estilismo de guardarropa', 'Organización virtual', 'Planeación de remodelación', 'Mudanzas sin estrés', 'Soluciones de almacenaje', 'Organización de archivos', 'Hogar y oficina'],
      more: 'Explora todos los servicios',
    },
    concierge: {
      eyebrow: '02 — Servicio premium',
      title: 'Tu espacio,\nsiempre impecable.',
      text: 'Un servicio continuo para quienes simplemente prefieren que lo resolvamos por ellos. Nuestro equipo compra, reabastece y mantiene los sistemas que creamos — para que tu hogar u oficina siga impecable mucho después de irnos, sin que tengas que pensarlo.',
      list: ['Visitas de mantenimiento semanales o quincenales', 'Marcas, mercados y preferencias respetadas', 'Sistemas perfectos entre visitas, con discreción'],
      cta: 'Comienza con un breve formulario',
    },
    gallery: {
      eyebrow: '03 — Nuestros proyectos',
      title: 'Orden hecho\nbelleza.',
      intro: 'Espacios reales que hemos transformado para hogares y negocios en Miami. Cada proyecto se construye alrededor de cómo vive y trabaja cada cliente.',
      more: 'Ver todos los proyectos',
    },
    video: {
      eyebrow: '04 — Conoce Miami Organizers',
      title: 'Mira cómo trabajamos.',
      intro: 'Un vistazo rápido a nuestro equipo convirtiendo el caos diario en espacios funcionales y en calma.',
    },
    mission: {
      eyebrow: '05 — Nuestra misión',
      title: 'Más que un trabajo —\nes nuestra pasión.',
      items: [
        { t: 'Nuestra meta', d: 'Brindar paz mental, decisiones eficientes y ahorro de energía a nuestros clientes — creando oportunidades laborales para mujeres en transición de carrera y generando un impacto ecológico positivo a través del consumo responsable y el reciclaje.' },
        { t: 'A dónde vamos', d: 'A tu casa, tu oficina, tu bote o tu casa rodante. Miami Organizers nació en Miami, pero viajamos a cualquier lugar de EE. UU. y Latinoamérica. Donde nos necesites, ahí estaremos.' },
        { t: 'Qué hacemos', d: 'Creamos sistemas que mejoran tu vida — eligiendo, comprando e instalando equipo de organización; diseñando, despejando, categorizando e incluso limpiando. Te entregamos un espacio que se mantiene solo.' },
      ],
    },
    quote: { text: '"Organizar no se trata de tener menos. Se trata de hacer espacio para la vida que realmente quieres."', cite: 'Sherezade Vacas — Fundadora' },
    packages: {
      eyebrow: '06 — Paquetes',
      title: 'Por hora,\na la medida del proyecto.',
      intro: 'La organización profesional cuesta $90 por hora. Elige el bloque que se ajuste a tu espacio — la mayoría de las cocinas toman entre tres y cinco horas, y los proyectos de casa completa entre seis y ocho.',
      hours: 'horas', tags: { feature: 'Más solicitado', best: 'Mejor valor' },
      note: '¿No sabes cuál elegir? Pide una cotización gratis y estimamos las horas para tu espacio.',
    },
    reviews: {
      eyebrow: '07 — Reseñas de clientes',
      title: 'Calificación 4.7 en\n39 reseñas verificadas.',
      intro: 'Los clientes regresan a Miami Organizers por las mismas razones que lo recomiendan: rapidez, discreción y espacios que siguen funcionando mucho después de que el equipo se va.',
      items: [
        { q: 'Te prometo que es el mejor servicio que recibirás. Escribí un lunes en la mañana para desempacar tras una mudanza de costa a costa — para el lunes en la noche estaba listo. Nunca había visto algo tan organizado.', n: 'Heather C.', s: 'Mudanza y desempaque' },
        { q: 'Convirtieron mi tercer cuarto en un clóset glamoroso que es mi refugio. La ropa por colores, los bolsos a la vista, los zapatos a salvo — y todo tiene su lugar.', n: 'Chanilia N.', s: 'Diseño de clóset' },
        { q: 'Tenía un proyecto urgente de empaque con poco aviso, y Sherezade respondió de inmediato, lo terminó a tiempo y en presupuesto, y me hizo sentir como cliente de toda la vida.', n: 'Miguel L.', s: 'Preparación de mudanza' },
        { q: 'Shere y su equipo son increíbles — sin juzgar, rápidos, profesionales y amables. Son una máquina bien aceitada con la que da gusto trabajar.', n: 'Cliente de Thumbtack', s: 'Organización del hogar' },
        { q: 'Empezó con una revisión por Zoom y una cotización — súper eficiente para alguien ocupado como yo. El equipo transformó mi cuarto y clóset en un oasis totalmente organizado.', n: 'Cliente de Houzz', s: 'Recámara y clóset' },
      ],
    },
    products: {
      eyebrow: '08 — Guías digitales',
      title: 'Herramientas para\nsimplificar tu vida.',
      intro: 'Recursos prácticos para llevar orden y hábitos sostenibles a tu día a día — creados por Sherezade Vacas.',
      bookTitle: 'Organizing for a Better Lifestyle',
      bookText: 'Una guía digital completa para crear espacios y hábitos que perduran. Descubre herramientas para simplificar tu vida, aumentar tu productividad y encontrar calma soltando lo que ya no te sirve.',
      bookCta: 'Obtén la guía',
      tools: [
        { t: 'Simplifica y enfócate', d: 'Descubre herramientas para simplificar tu vida y aumentar tu productividad de forma efectiva.' },
        { t: 'Hábitos sostenibles', d: 'Aprende a crear espacios y hábitos sostenibles para una vida más equilibrada.' },
        { t: 'Calma y orden', d: 'Encuentra calma y orden en tu día a día soltando lo que ya no te sirve.' },
      ],
    },
    press: {
      eyebrow: '09 — En la prensa',
      kicker: 'MiamiBusiness.com · Rising Stars',
      quote: '"Un espacio hermoso que no funciona bien sigue generando estrés."',
      excerpt: 'Reconocida como una Miami Rising Star, Sherezade Vacas fue destacada por construir Miami Organizers con resiliencia y propósito — combinando organización, diseño funcional y estrategia de estilo de vida para hogares, oficinas y residencias de lujo en Miami y más allá.',
      cta: 'Lee el artículo →',
    },
    about: {
      eyebrow: '10 — La fundadora',
      title: 'Sherezade Vacas',
      p1: 'Miami Organizers nació de una creencia simple: un hogar bien ordenado te devuelve tu tiempo, tu atención y tu calma. Sherezade lidera cada proyecto personalmente, con ojo de editora y la calidez de una anfitriona, en hogares de todo el Sur de Florida.',
      p2: 'Más allá del trabajo con clientes, es autora y emprendedora que convirtió a Miami Organizers en un nombre de confianza para la organización práctica y el cuidado continuo y discreto.',
      cta: 'Explora la guía digital →',
    },
    contact: {
      eyebrow: '11 — Comencemos',
      title: '¿Listo para recuperar\ntu espacio?',
      text: 'Da el primer paso hacia una vida más organizada. Cuéntanos sobre tu espacio y tus metas — ya sea un proyecto único o cuidado continuo. Sin presión, sin compromiso.',
      call: 'Llámanos o escríbenos',
      bookCta: 'Agenda en Calendly',
      formCta: 'Pide tu cotización',
      portalCta: 'Portal de clientes',
      follow: 'Sigue nuestro trabajo',
    },
    cta: { title: 'Hagamos espacio para lo que importa.', text: 'Cuéntanos sobre tu espacio — nosotros nos encargamos del resto.', btn: 'Pide tu cotización gratis' },
    footer: {
      tag: 'Despejar · Diseñar · Sistematizar · Mantener',
      rights: 'Miami Organizers, LLC',
      colServices: 'Servicios', colBook: 'Comienza', colMore: 'Más', colStudio: 'Estudio',
      l: {
        home: 'Organización del hogar', office: 'Sistemas de oficina', moving: 'Mudanzas y desempaque',
        quote: 'Pide cotización', schedule: 'Consulta de 30 min', portal: 'Portal de clientes',
        guide: 'Guía digital', reviews: 'Reseñas', press: 'En la prensa', about: 'Sobre Sherezade',
        location: 'Condado de Miami-Dade, Florida', appt: 'Con cita · EE. UU. y Latinoamérica',
      },
    },
    amazon: 'Como Afiliados de Amazon, ganamos por compras que califican.',
  },
}

/* ============================================================
   LANGUAGE CONTEXT
   ============================================================ */
export const LangCtx = createContext({ lang: 'en', setLang: () => {}, t: T.en })
export const useLang = () => useContext(LangCtx)
export const useT = () => useContext(LangCtx).t

/* render a string with \n as <br/> */
export const lines = (str) =>
  str.split('\n').map((l, i, a) => <span key={l}>{l}{i < a.length - 1 && <br />}</span>)

/* ============================================================
   ICONS
   ============================================================ */
export const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-.97.05-1.5.21-1.85.34-.46.18-.8.4-1.15.74-.34.35-.56.69-.74 1.15-.13.35-.29.88-.34 1.85-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05.97.21 1.5.34 1.85.18.46.4.8.74 1.15.35.34.69.56 1.15.74.35.13.88.29 1.85.34 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.97-.05 1.5-.21 1.85-.34.46-.18.8-.4 1.15-.74.34-.35.56-.69.74-1.15.13-.35.29-.88.34-1.85.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-.97-.21-1.5-.34-1.85a3.1 3.1 0 0 0-.74-1.15 3.1 3.1 0 0 0-1.15-.74c-.35-.13-.88-.29-1.85-.34-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.5-.4a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0Z"/>
  </svg>
)
export const FbIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
  </svg>
)
export const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z"/>
  </svg>
)
export const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
    <path d="M.06 24l1.69-6.16A11.87 11.87 0 0 1 .15 11.9C.15 5.33 5.5 0 12.08 0a11.82 11.82 0 0 1 8.42 3.49 11.78 11.78 0 0 1 3.49 8.42c0 6.57-5.35 11.9-11.93 11.9a11.96 11.96 0 0 1-5.7-1.45L.06 24Zm6.6-3.8c1.68.99 3.28 1.59 5.42 1.59 5.46 0 9.9-4.43 9.9-9.88 0-5.46-4.44-9.9-9.9-9.9-5.46 0-9.9 4.44-9.9 9.9 0 2.24.66 3.92 1.76 5.68l-1 3.65 3.72-.04Zm11.39-5.55c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5l-.56-.01c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.2 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41Z"/>
  </svg>
)

