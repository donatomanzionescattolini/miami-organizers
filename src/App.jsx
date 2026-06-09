import { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react'
import './App.css'

/* ============================================================
   MEDIA — served from the existing WordPress host
   ============================================================ */
const BASE = 'https://miamiorganizers.com/wp-content/uploads'
const IMG = {
  logo:     `${BASE}/2023/08/logo-Mo.jpg`,
  hero:     `${BASE}/2023/04/92E1DA0C-5D8A-4E2E-B05E-D45F0639A6CC.jpg`,
  proj1:    `${BASE}/2023/07/Proyect-1-1.png`,
  proj2:    `${BASE}/2023/07/Proyect-2-1.png`,
  proj3:    `${BASE}/2023/07/Proyect-3-1.png`,
  concierge:`${BASE}/2023/07/IMG_14421-768x1024.jpg`,
  portrait: `${BASE}/elementor/thumbs/IMG_3105-scaled-ppfs8a1y2ar9sxj9p7oj32o2eufryqwovnjsom3vk8.jpg`,
  book:     `${BASE}/2024/09/Organizing-for-a-better-lifestyle-by-Sherezade-Vacas-642x1024.png`,
}
const GALLERY = [
  `${BASE}/2023/07/Proyect-1-1.png`,
  `${BASE}/2023/07/IMG_09051-768x1024.jpg`,
  `${BASE}/2023/07/Proyect-2-1.png`,
  `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM-5.jpeg`,
  `${BASE}/2023/07/IMG_14421-768x1024.jpg`,
  `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM-4.jpeg`,
  `${BASE}/2023/07/Proyect-3-1.png`,
  `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM-3.jpeg`,
  `${BASE}/2023/07/IMG_78821-768x1024.jpg`,
  `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM-2.jpeg`,
  `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM-1.jpeg`,
  `${BASE}/2023/07/IMG_78851.jpg`,
  `${BASE}/2023/07/WhatsApp-Image-2023-07-25-at-10.12.08-AM.jpeg`,
]

/* ============================================================
   LINKS
   ============================================================ */
const LINKS = {
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

/* ============================================================
   COPY — fully bilingual (English / Español)
   ============================================================ */
const T = {
  en: {
    code: 'en', label: 'EN', other: 'ES', otherFull: 'Español',
    nav: { services: 'Services', gallery: 'Our Work', mission: 'Our Why', reviews: 'Reviews', products: 'Guides', about: 'About', book: 'Get a quote', call: 'Call us' },
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
    nav: { services: 'Servicios', gallery: 'Proyectos', mission: 'Nuestra Misión', reviews: 'Reseñas', products: 'Guías', about: 'Nosotros', book: 'Cotiza gratis', call: 'Llámanos' },
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
const LangCtx = createContext(T.en)
const useT = () => useContext(LangCtx)

/* ── icons ── */
const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-.97.05-1.5.21-1.85.34-.46.18-.8.4-1.15.74-.34.35-.56.69-.74 1.15-.13.35-.29.88-.34 1.85-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05.97.21 1.5.34 1.85.18.46.4.8.74 1.15.35.34.69.56 1.15.74.35.13.88.29 1.85.34 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.97-.05 1.5-.21 1.85-.34.46-.18.8-.4 1.15-.74.34-.35.56-.69.74-1.15.13-.35.29-.88.34-1.85.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-.97-.21-1.5-.34-1.85a3.1 3.1 0 0 0-.74-1.15 3.1 3.1 0 0 0-1.15-.74c-.35-.13-.88-.29-1.85-.34-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.5-.4a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0Z"/>
  </svg>
)
const FbIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z"/>
  </svg>
)

/* ============================================================
   NAV
   ============================================================ */
function Nav({ lang, setLang }) {
  const t = useT()
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = useCallback(() => { setOpen(false); document.body.style.overflow = '' }, [])
  const toggle = useCallback(() => {
    setOpen(p => { const n = !p; document.body.style.overflow = n ? 'hidden' : ''; return n })
  }, [])
  const swap = () => setLang(lang === 'en' ? 'es' : 'en')

  return (
    <>
      <header className={`nav${stuck ? ' is-stuck' : ''}`}>
        <a href="#top" className="nav__brand" aria-label="Miami Organizers">
          <img src={IMG.logo} alt="" className="nav__mark" />
          <span className="nav__word">Miami&nbsp;Organizers</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#services">{t.nav.services}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#mission">{t.nav.mission}</a>
          <a href="#reviews">{t.nav.reviews}</a>
          <a href="#about">{t.nav.about}</a>
        </nav>
        <div className="nav__right">
          <button className="langtoggle" onClick={swap} aria-label={`Switch to ${t.otherFull}`}>
            <span className="langtoggle__on">{t.label}</span>
            <span className="langtoggle__off">{t.other}</span>
          </button>
          <a href={`tel:${LINKS.phone}`} className="nav__phone" aria-label={t.nav.call}><PhoneIcon /></a>
          <a href="#contact" className="nav__cta">{t.nav.book}</a>
        </div>
        <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={toggle}>
          <span></span><span></span>
        </button>
      </header>

      <div className={`mobilemenu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <a href="#services" onClick={close}>{t.nav.services}</a>
        <a href="#gallery" onClick={close}>{t.nav.gallery}</a>
        <a href="#mission" onClick={close}>{t.nav.mission}</a>
        <a href="#reviews" onClick={close}>{t.nav.reviews}</a>
        <a href="#products" onClick={close}>{t.nav.products}</a>
        <a href="#about" onClick={close}>{t.nav.about}</a>
        <a href="#contact" className="mobilemenu__cta" onClick={close}>{t.nav.book}</a>
        <button className="mobilemenu__lang" onClick={() => { swap(); close() }}>{t.otherFull}</button>
      </div>
    </>
  )
}

/* ============================================================
   REVIEWS CAROUSEL
   ============================================================ */
function Reviews() {
  const t = useT()
  const items = t.reviews.items
  const n = items.length
  const [idx, setIdx] = useState(0)
  const timer = useRef(null)
  const reduce = useRef(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches).current

  const auto = useCallback(() => {
    if (reduce) return
    clearInterval(timer.current)
    timer.current = setInterval(() => setIdx(i => (i + 1) % n), 6500)
  }, [n, reduce])

  useEffect(() => { setIdx(0); auto(); return () => clearInterval(timer.current) }, [auto])
  const go = (i) => { setIdx(((i % n) + n) % n); auto() }

  return (
    <section className="section reviews reveal" id="reviews">
      <div className="section__head section__head--center">
        <p className="eyebrow">{t.reviews.eyebrow}</p>
        <h2 className="section__title">{t.reviews.title.split('\n').map((l, i, a) => <span key={i}>{l}{i < a.length - 1 && <br />}</span>)}</h2>
        <p className="section__intro">{t.reviews.intro}</p>
      </div>
      <div className="rev">
        <button className="rev__arrow" aria-label="Previous" onClick={() => go(idx - 1)}>←</button>
        <div className="rev__window">
          <div className="rev__track" style={{ transform: `translateX(${-idx * 100}%)` }}>
            {items.map((r, i) => (
              <figure className="rev__card" key={i}>
                <div className="rev__stars" aria-label="5 / 5">★★★★★</div>
                <blockquote>{r.q}</blockquote>
                <figcaption><span>{r.n}</span>{r.s}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <button className="rev__arrow" aria-label="Next" onClick={() => go(idx + 1)}>→</button>
      </div>
      <div className="rev__dots" aria-hidden="true">
        {items.map((_, i) => (
          <button key={i} className={`rev__dot${i === idx ? ' is-on' : ''}`} onClick={() => go(i)} aria-label={`Review ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}

/* ── scroll reveal ── */
function useScrollReveal(dep) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = document.querySelectorAll('.reveal')
    if (!reduce && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
      }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' })
      els.forEach(el => io.observe(el))
      return () => io.disconnect()
    }
    els.forEach(el => el.classList.add('in'))
  }, [dep])
}

/* helper to render \n titles */
const lines = (str) => str.split('\n').map((l, i, a) => <span key={i}>{l}{i < a.length - 1 && <br />}</span>)

/* ============================================================
   APP
   ============================================================ */
function App() {
  const [lang, setLang] = useState(() => (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('es')) ? 'es' : 'en')
  const t = T[lang]
  useScrollReveal(lang)

  useEffect(() => { document.documentElement.lang = lang }, [lang])
  const year = new Date().getFullYear()

  return (
    <LangCtx.Provider value={t}>
      <Nav lang={lang} setLang={setLang} />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero__media">
            <img src={IMG.hero} alt="Organized Miami home" fetchPriority="high" />
            <div className="hero__scrim" />
          </div>
          <div className="hero__panel">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="hero__title">{t.hero.titleA}<br /><span className="ink-block">{t.hero.titleB}</span></h1>
            <p className="hero__lede">{t.hero.lede}</p>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--solid">{t.hero.ctaBook}</a>
              <a href="#services" className="btn btn--ghost">{t.hero.ctaServices}</a>
            </div>
            <div className="hero__social">
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IgIcon /></a>
              <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FbIcon /></a>
              <a href={`tel:${LINKS.phone}`} className="hero__phone">{LINKS.phoneDisplay}</a>
            </div>
          </div>
        </section>

        {/* STRIP */}
        <section className="strip">
          <p className="strip__line">{t.strip.line} — <span className="strip__muted">{t.strip.muted}</span></p>
        </section>

        {/* SERVICES */}
        <section className="section services reveal" id="services">
          <div className="section__head">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 className="section__title">{lines(t.services.title)}</h2>
            <p className="section__intro">{t.services.intro}</p>
          </div>
          <div className="cards">
            {[IMG.proj1, IMG.proj2, IMG.proj3].map((src, i) => (
              <article className="card" key={i}>
                <div className="card__media"><img src={src} alt={t.services.cards[i].t} loading="lazy" /></div>
                <div className="card__body">
                  <span className="card__no">{String.fromCharCode(65 + i)}</span>
                  <h3>{t.services.cards[i].t}</h3>
                  <p>{t.services.cards[i].d}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="specialties">
            <span className="specialties__label">{t.services.specialtiesTitle}</span>
            <ul className="specialties__list">
              {t.services.specialties.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        </section>

        {/* CONCIERGE */}
        <section className="concierge" id="concierge">
          <div className="concierge__media"><img src={IMG.concierge} alt="Organized kitchen detail" loading="lazy" /></div>
          <div className="concierge__copy">
            <p className="eyebrow eyebrow--light">{t.concierge.eyebrow}</p>
            <h2 className="concierge__title">{lines(t.concierge.title)}</h2>
            <p className="concierge__text">{t.concierge.text}</p>
            <ul className="concierge__list">{t.concierge.list.map((l, i) => <li key={i}>{l}</li>)}</ul>
            <a href={LINKS.form} className="btn btn--light" target="_blank" rel="noopener noreferrer">{t.concierge.cta}</a>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section gallery reveal" id="gallery">
          <div className="section__head section__head--center">
            <p className="eyebrow">{t.gallery.eyebrow}</p>
            <h2 className="section__title">{lines(t.gallery.title)}</h2>
            <p className="section__intro">{t.gallery.intro}</p>
          </div>
          <div className="gallery__grid">
            {GALLERY.map((src, i) => (
              <a className="gallery__item" key={i} href={src} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={`Miami Organizers project ${i + 1}`} loading="lazy" />
              </a>
            ))}
          </div>
        </section>

        {/* VIDEO */}
        <section className="video reveal" id="video">
          <div className="video__inner">
            <p className="eyebrow eyebrow--light">{t.video.eyebrow}</p>
            <h2 className="video__title">{t.video.title}</h2>
            <p className="video__intro">{t.video.intro}</p>
            <div className="video__frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${LINKS.youtubeId}?start=2&rel=0`}
                title="Miami Organizers"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="section mission reveal" id="mission">
          <div className="section__head section__head--center">
            <p className="eyebrow">{t.mission.eyebrow}</p>
            <h2 className="section__title">{lines(t.mission.title)}</h2>
          </div>
          <div className="mission__grid">
            {t.mission.items.map((m, i) => (
              <div className="mission__item" key={i}>
                <span className="mission__no">0{i + 1}</span>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTE */}
        <section className="quote">
          <div className="quote__media"><img src={IMG.portrait} alt="Sherezade Vacas" loading="lazy" /></div>
          <blockquote className="quote__text">
            <p>{t.quote.text}</p>
            <cite>{t.quote.cite}</cite>
          </blockquote>
        </section>

        {/* PACKAGES */}
        <section className="section packages reveal" id="packages">
          <div className="section__head section__head--center">
            <p className="eyebrow">{t.packages.eyebrow}</p>
            <h2 className="section__title">{lines(t.packages.title)}</h2>
            <p className="section__intro">{t.packages.intro}</p>
          </div>
          <div className="tiers">
            {[3, 4, 5, 6, 7, 8].map((h) => {
              const feature = h === 5, best = h === 8
              return (
                <div key={h} className={`tier${feature ? ' tier--feature' : ''}`}>
                  {feature && <span className="tier__tag">{t.packages.tags.feature}</span>}
                  {best && <span className="tier__tag">{t.packages.tags.best}</span>}
                  <span className="tier__hrs">{h}</span>
                  <span className="tier__unit">{t.packages.hours}</span>
                  <span className="tier__price">${(h * 90).toLocaleString()}</span>
                </div>
              )
            })}
          </div>
          <p className="packages__note">{t.packages.note}</p>
        </section>

        {/* REVIEWS */}
        <Reviews />

        {/* PRODUCTS */}
        <section className="section products reveal" id="products">
          <div className="section__head section__head--center">
            <p className="eyebrow">{t.products.eyebrow}</p>
            <h2 className="section__title">{lines(t.products.title)}</h2>
            <p className="section__intro">{t.products.intro}</p>
          </div>
          <div className="products__feature">
            <a href={LINKS.product} target="_blank" rel="noopener noreferrer" className="products__book">
              <img src={IMG.book} alt={t.products.bookTitle} loading="lazy" />
            </a>
            <div className="products__copy">
              <h3>{t.products.bookTitle}</h3>
              <p>{t.products.bookText}</p>
              <a href={LINKS.product} className="btn btn--solid" target="_blank" rel="noopener noreferrer">{t.products.bookCta}</a>
            </div>
          </div>
          <div className="products__tools">
            {t.products.tools.map((tool, i) => (
              <div className="pcard" key={i}>
                <span className="pcard__no">0{i + 1}</span>
                <h4>{tool.t}</h4>
                <p>{tool.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRESS */}
        <section className="media reveal" id="press">
          <div className="media__inner">
            <p className="eyebrow">{t.press.eyebrow}</p>
            <div className="media__kicker">{t.press.kicker}</div>
            <h2 className="media__quote">{t.press.quote}</h2>
            <p className="media__excerpt">{t.press.excerpt}</p>
            <a href={LINKS.press} className="textlink" target="_blank" rel="noopener noreferrer">{t.press.cta}</a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about reveal" id="about">
          <div className="about__media"><img src={IMG.portrait} alt="Sherezade Vacas, founder" loading="lazy" /></div>
          <div className="about__copy">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="section__title">{t.about.title}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <a href={LINKS.product} className="textlink" target="_blank" rel="noopener noreferrer">{t.about.cta}</a>
          </div>
        </section>

        {/* CONTACT */}
        <section className="book" id="contact">
          <div className="book__inner">
            <p className="eyebrow eyebrow--light">{t.contact.eyebrow}</p>
            <h2 className="book__title">{lines(t.contact.title)}</h2>
            <p className="book__text">{t.contact.text}</p>

            <a href={`tel:${LINKS.phone}`} className="book__call">
              <span className="book__call-label">{t.contact.call}</span>
              <span className="book__call-num">{LINKS.phoneDisplay}</span>
            </a>

            <div className="book__actions">
              <a href={LINKS.calendly} className="btn btn--light btn--lg" target="_blank" rel="noopener noreferrer">{t.contact.bookCta}</a>
              <a href={LINKS.form} className="btn btn--outline-light" target="_blank" rel="noopener noreferrer">{t.contact.formCta}</a>
              <a href={LINKS.portal} className="btn btn--outline-light" target="_blank" rel="noopener noreferrer">{t.contact.portalCta}</a>
            </div>

            <div className="book__follow">
              <span>{t.contact.follow}</span>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IgIcon /></a>
              <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FbIcon /></a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__top">
          <img src={IMG.logo} alt="Miami Organizers" className="footer__logo" />
          <div className="footer__social">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IgIcon /></a>
            <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FbIcon /></a>
            <a href={`tel:${LINKS.phone}`} aria-label={t.nav.call}><PhoneIcon /></a>
          </div>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>{t.footer.colServices}</h4>
            <a href="#services">{t.footer.l.home}</a>
            <a href="#services">{t.footer.l.office}</a>
            <a href="#services">{t.footer.l.moving}</a>
          </div>
          <div className="footer__col">
            <h4>{t.footer.colBook}</h4>
            <a href={LINKS.form} target="_blank" rel="noopener noreferrer">{t.footer.l.quote}</a>
            <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer">{t.footer.l.schedule}</a>
            <a href={LINKS.portal} target="_blank" rel="noopener noreferrer">{t.footer.l.portal}</a>
          </div>
          <div className="footer__col">
            <h4>{t.footer.colMore}</h4>
            <a href={LINKS.product} target="_blank" rel="noopener noreferrer">{t.footer.l.guide}</a>
            <a href="#reviews">{t.footer.l.reviews}</a>
            <a href={LINKS.press} target="_blank" rel="noopener noreferrer">{t.footer.l.press}</a>
            <a href="#about">{t.footer.l.about}</a>
          </div>
          <div className="footer__col">
            <h4>{t.footer.colStudio}</h4>
            <p>{t.footer.l.location}</p>
            <p>{t.footer.l.appt}</p>
            <a href={`tel:${LINKS.phone}`}>{LINKS.phoneDisplay}</a>
          </div>
        </div>
        <div className="footer__base">
          <span>© {year} {t.footer.rights}</span>
          <span className="footer__tag">{t.footer.tag}</span>
        </div>
        <p className="footer__amazon">{t.amazon}</p>
      </footer>

      {/* floating WhatsApp */}
      <a href={LINKS.whatsapp} className="fab" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M.06 24l1.69-6.16A11.87 11.87 0 0 1 .15 11.9C.15 5.33 5.5 0 12.08 0a11.82 11.82 0 0 1 8.42 3.49 11.78 11.78 0 0 1 3.49 8.42c0 6.57-5.35 11.9-11.93 11.9a11.96 11.96 0 0 1-5.7-1.45L.06 24Zm6.6-3.8c1.68.99 3.28 1.59 5.42 1.59 5.46 0 9.9-4.43 9.9-9.88 0-5.46-4.44-9.9-9.9-9.9-5.46 0-9.9 4.44-9.9 9.9 0 2.24.66 3.92 1.76 5.68l-1 3.65 3.72-.04Zm11.39-5.55c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5l-.56-.01c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.2 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41Z"/>
        </svg>
      </a>
    </LangCtx.Provider>
  )
}

export default App

