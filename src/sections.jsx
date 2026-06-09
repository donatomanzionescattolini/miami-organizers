import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  IMG, GALLERY, LINKS, ROUTES, lines,
  useLang, useT, IgIcon, FbIcon, PhoneIcon, WhatsAppIcon,
} from './content.jsx'

/* ============================================================
   NAV
   ============================================================ */
export function Nav() {
  const { lang, setLang, t } = useLang()
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

  const links = [
    [ROUTES.services, t.nav.services],
    [ROUTES.work, t.nav.work],
    [ROUTES.guides, t.nav.guides],
    [ROUTES.about, t.nav.about],
    [ROUTES.contact, t.nav.contact],
  ]

  return (
    <>
      <header className={`nav${stuck ? ' is-stuck' : ''}`}>
        <Link to={ROUTES.home} className="nav__brand" aria-label="Miami Organizers">
          <img src={IMG.logo} alt="" className="nav__mark" />
          <span className="nav__word">Miami&nbsp;Organizers</span>
        </Link>
        <nav className="nav__links" aria-label="Primary">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'is-active' : undefined}>{label}</NavLink>
          ))}
        </nav>
        <div className="nav__right">
          <button className="langtoggle" onClick={swap} aria-label={`Switch to ${t.otherFull}`}>
            <span className="langtoggle__on">{t.label}</span>
            <span className="langtoggle__off">{t.other}</span>
          </button>
          <a href={`tel:${LINKS.phone}`} className="nav__phone" aria-label={t.nav.call}><PhoneIcon /></a>
          <Link to={ROUTES.contact} className="nav__cta">{t.nav.book}</Link>
        </div>
        <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={toggle}>
          <span></span><span></span>
        </button>
      </header>

      <div className={`mobilemenu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <Link to={ROUTES.home} onClick={close}>{t.nav.home}</Link>
        {links.map(([to, label]) => <Link key={to} to={to} onClick={close}>{label}</Link>)}
        <Link to={ROUTES.contact} className="mobilemenu__cta" onClick={close}>{t.nav.book}</Link>
        <button className="mobilemenu__lang" onClick={() => { swap(); close() }}>{t.otherFull}</button>
      </div>
    </>
  )
}

/* ============================================================
   PAGE HERO (small banner for inner pages)
   ============================================================ */
export function PageHero({ eyebrow, title }) {
  return (
    <section className="pagehero">
      <div className="pagehero__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="pagehero__title">{lines(title)}</h1>
      </div>
    </section>
  )
}

/* ============================================================
   HERO (home)
   ============================================================ */
export function Hero() {
  const t = useT()
  return (
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
          <Link to={ROUTES.contact} className="btn btn--solid">{t.hero.ctaBook}</Link>
          <Link to={ROUTES.services} className="btn btn--ghost">{t.hero.ctaServices}</Link>
        </div>
        <div className="hero__social">
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IgIcon /></a>
          <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FbIcon /></a>
          <a href={`tel:${LINKS.phone}`} className="hero__phone">{LINKS.phoneDisplay}</a>
        </div>
      </div>
    </section>
  )
}

export function Strip() {
  const t = useT()
  return (
    <section className="strip">
      <p className="strip__line">{t.strip.line} — <span className="strip__muted">{t.strip.muted}</span></p>
    </section>
  )
}

/* ============================================================
   SERVICES
   ============================================================ */
export function Services({ preview = false }) {
  const t = useT()
  const imgs = [IMG.cardHome, IMG.cardOffice, IMG.cardMove]
  return (
    <section className="section services reveal in" id="services">
      <div className="section__head">
        <p className="eyebrow">{t.services.eyebrow}</p>
        <h2 className="section__title">{lines(t.services.title)}</h2>
        <p className="section__intro">{t.services.intro}</p>
      </div>
      <div className="cards">
        {imgs.map((src, i) => (
          <article className="card" key={t.services.cards[i].t}>
            <div className="card__media"><img src={src} alt={t.services.cards[i].t} loading="lazy" /></div>
            <div className="card__body">
              <span className="card__no">{String.fromCodePoint(65 + i)}</span>
              <h3>{t.services.cards[i].t}</h3>
              <p>{t.services.cards[i].d}</p>
            </div>
          </article>
        ))}
      </div>
      {preview ? (
        <div className="section__more"><Link to={ROUTES.services} className="btn btn--ghost">{t.services.more}</Link></div>
      ) : (
        <div className="specialties">
          <span className="specialties__label">{t.services.specialtiesTitle}</span>
          <ul className="specialties__list">{t.services.specialties.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      )}
    </section>
  )
}

/* ============================================================
   CONCIERGE
   ============================================================ */
export function Concierge() {
  const t = useT()
  return (
    <section className="concierge" id="concierge">
      <div className="concierge__media"><img src={IMG.concierge} alt="Organized space detail" loading="lazy" /></div>
      <div className="concierge__copy">
        <p className="eyebrow eyebrow--light">{t.concierge.eyebrow}</p>
        <h2 className="concierge__title">{lines(t.concierge.title)}</h2>
        <p className="concierge__text">{t.concierge.text}</p>
        <ul className="concierge__list">{t.concierge.list.map((l) => <li key={l}>{l}</li>)}</ul>
        <a href={LINKS.form} className="btn btn--light" target="_blank" rel="noopener noreferrer">{t.concierge.cta}</a>
      </div>
    </section>
  )
}

/* ============================================================
   GALLERY
   ============================================================ */
export function Gallery({ preview = false }) {
  const t = useT()
  const items = preview ? GALLERY.slice(0, 6) : GALLERY
  return (
    <section className="section gallery reveal in" id="gallery">
      <div className="section__head section__head--center">
        <p className="eyebrow">{t.gallery.eyebrow}</p>
        <h2 className="section__title">{lines(t.gallery.title)}</h2>
        <p className="section__intro">{t.gallery.intro}</p>
      </div>
      <div className="gallery__grid">
        {items.map((src, i) => (
          <a className="gallery__item" key={src} href={src} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={`Miami Organizers project ${i + 1}`} loading="lazy" />
          </a>
        ))}
      </div>
      {preview && <div className="section__more"><Link to={ROUTES.work} className="btn btn--ghost">{t.gallery.more}</Link></div>}
    </section>
  )
}

/* ============================================================
   VIDEO
   ============================================================ */
export function Video() {
  const t = useT()
  return (
    <section className="video reveal in" id="video">
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
  )
}

/* ============================================================
   MISSION
   ============================================================ */
export function Mission() {
  const t = useT()
  return (
    <section className="section mission reveal in" id="mission">
      <div className="section__head section__head--center">
        <p className="eyebrow">{t.mission.eyebrow}</p>
        <h2 className="section__title">{lines(t.mission.title)}</h2>
      </div>
      <div className="mission__grid">
        {t.mission.items.map((m, i) => (
          <div className="mission__item" key={m.t}>
            <span className="mission__no">0{i + 1}</span>
            <h3>{m.t}</h3>
            <p>{m.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function QuoteBand() {
  const t = useT()
  return (
    <section className="quote">
      <div className="quote__media"><img src={IMG.portrait} alt="Sherezade Vacas" loading="lazy" /></div>
      <blockquote className="quote__text">
        <p>{t.quote.text}</p>
        <cite>{t.quote.cite}</cite>
      </blockquote>
    </section>
  )
}

/* ============================================================
   PACKAGES
   ============================================================ */
export function Packages() {
  const t = useT()
  return (
    <section className="section packages reveal in" id="packages">
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
  )
}

/* ============================================================
   REVIEWS CAROUSEL
   ============================================================ */
export function Reviews() {
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
    <section className="section reviews reveal in" id="reviews">
      <div className="section__head section__head--center">
        <p className="eyebrow">{t.reviews.eyebrow}</p>
        <h2 className="section__title">{lines(t.reviews.title)}</h2>
        <p className="section__intro">{t.reviews.intro}</p>
      </div>
      <div className="rev">
        <button className="rev__arrow" aria-label="Previous" onClick={() => go(idx - 1)}>←</button>
        <div className="rev__window">
          <div className="rev__track" style={{ transform: `translateX(${-idx * 100}%)` }}>
            {items.map((r) => (
              <figure className="rev__card" key={r.n + r.s}>
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
        {items.map((r, i) => (
          <button key={r.n + r.s} className={`rev__dot${i === idx ? ' is-on' : ''}`} onClick={() => go(i)} aria-label={`Review ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}

/* ============================================================
   PRODUCTS
   ============================================================ */
export function Products() {
  const t = useT()
  return (
    <section className="section products reveal in" id="products">
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
          <div className="pcard" key={tool.t}>
            <span className="pcard__no">0{i + 1}</span>
            <h4>{tool.t}</h4>
            <p>{tool.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ============================================================
   PRESS
   ============================================================ */
export function Press() {
  const t = useT()
  return (
    <section className="media reveal in" id="press">
      <div className="media__inner">
        <p className="eyebrow">{t.press.eyebrow}</p>
        <div className="media__kicker">{t.press.kicker}</div>
        <h2 className="media__quote">{t.press.quote}</h2>
        <p className="media__excerpt">{t.press.excerpt}</p>
        <a href={LINKS.press} className="textlink" target="_blank" rel="noopener noreferrer">{t.press.cta}</a>
      </div>
    </section>
  )
}

/* ============================================================
   ABOUT
   ============================================================ */
export function About() {
  const t = useT()
  return (
    <section className="section about reveal in" id="about">
      <div className="about__media"><img src={IMG.portrait} alt="Sherezade Vacas, founder" loading="lazy" /></div>
      <div className="about__copy">
        <p className="eyebrow">{t.about.eyebrow}</p>
        <h2 className="section__title">{t.about.title}</h2>
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <Link to={ROUTES.guides} className="textlink">{t.about.cta}</Link>
      </div>
    </section>
  )
}

/* ============================================================
   CONTACT
   ============================================================ */
export function Contact() {
  const t = useT()
  return (
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
  )
}

/* slim CTA band for home/inner pages */
export function CtaBand() {
  const t = useT()
  return (
    <section className="ctaband">
      <div className="ctaband__inner">
        <h2 className="ctaband__title">{t.cta.title}</h2>
        <p className="ctaband__text">{t.cta.text}</p>
        <Link to={ROUTES.contact} className="btn btn--solid btn--lg">{t.cta.btn}</Link>
      </div>
    </section>
  )
}

/* ============================================================
   FOOTER
   ============================================================ */
export function Footer() {
  const t = useT()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__top">
        <Link to={ROUTES.home}><img src={IMG.logo} alt="Miami Organizers" className="footer__logo" /></Link>
        <div className="footer__social">
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IgIcon /></a>
          <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FbIcon /></a>
          <a href={`tel:${LINKS.phone}`} aria-label={t.nav.call}><PhoneIcon /></a>
        </div>
      </div>
      <div className="footer__cols">
        <div className="footer__col">
          <h4>{t.footer.colServices}</h4>
          <Link to={ROUTES.services}>{t.footer.l.home}</Link>
          <Link to={ROUTES.services}>{t.footer.l.office}</Link>
          <Link to={ROUTES.services}>{t.footer.l.moving}</Link>
        </div>
        <div className="footer__col">
          <h4>{t.footer.colBook}</h4>
          <a href={LINKS.form} target="_blank" rel="noopener noreferrer">{t.footer.l.quote}</a>
          <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer">{t.footer.l.schedule}</a>
          <a href={LINKS.portal} target="_blank" rel="noopener noreferrer">{t.footer.l.portal}</a>
        </div>
        <div className="footer__col">
          <h4>{t.footer.colMore}</h4>
          <Link to={ROUTES.guides}>{t.footer.l.guide}</Link>
          <Link to={ROUTES.home}>{t.footer.l.reviews}</Link>
          <a href={LINKS.press} target="_blank" rel="noopener noreferrer">{t.footer.l.press}</a>
          <Link to={ROUTES.about}>{t.footer.l.about}</Link>
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
  )
}

/* floating WhatsApp */
export function Fab() {
  return (
    <a href={LINKS.whatsapp} className="fab" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <WhatsAppIcon />
    </a>
  )
}

