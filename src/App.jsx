import { useState, useEffect, useRef, useCallback } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

/* ── data ── */
const RATE = 90
const TIERS = [
  { hrs: 3, tag: '' },
  { hrs: 4, tag: '' },
  { hrs: 5, tag: 'Most booked', feature: true },
  { hrs: 6, tag: '' },
  { hrs: 7, tag: '' },
  { hrs: 8, tag: 'Best value' },
]

const REVIEWS = [
  {
    quote: "I promise you this is the best service you'll ever receive. I reached out on Monday morning to unpack after a cross-country move — it was done by Monday night. I've never seen something so organized in my life.",
    name: 'Heather C.',
    service: 'Cross-country move & unpack',
  },
  {
    quote: 'They turned my third bedroom into a glamorous closet that is my sweet haven. Clothes are color-coordinated, purses are on display, shoes are safely stored — and everything has a place.',
    name: 'Chanilia N.',
    service: 'Closet design',
  },
  {
    quote: 'I had an urgent packing project on short notice, and Sherezade responded promptly, completed it on time and on budget, and made me feel like an old customer instead of a first-timer. Fully recommended.',
    name: 'Miguel L.',
    service: 'Move preparation',
  },
  {
    quote: "Shere and her team are incredible — non-judgemental, speedy, professional, and kind. To be a well-oiled machine is one thing, but they're a well-oiled machine that's a joy to work with.",
    name: 'Thumbtack client',
    service: 'Home organizing',
  },
  {
    quote: 'She started with a Zoom review of my space and a quote — so efficient for a busy person like myself. The team showed up on time and literally transformed my room and closet into a totally organized oasis.',
    name: 'Houzz client',
    service: 'Bedroom & closet',
  },
]

/* ── Nav ── */
function Nav() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [])

  const toggleMenu = useCallback(() => {
    setOpen(prev => {
      const next = !prev
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }, [])

  return (
    <>
      <header className={`nav${stuck ? ' is-stuck' : ''}`}>
        <a href="#top" className="nav__brand" aria-label="Miami Organizers home">
          <span className="nav__word">Miami&nbsp;Organizers</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#concierge">Concierge</a>
          <a href="#packages">Packages</a>
          <a href="#reviews">Reviews</a>
          <a href="#about">About</a>
        </nav>
        <a href="#book" className="nav__cta">Book a consultation</a>
        <button
          className="nav__toggle"
          aria-label="Open menu"
          aria-expanded={open ? 'true' : 'false'}
          onClick={toggleMenu}
        >
          <span></span><span></span>
        </button>
      </header>

      <div
        className={`mobilemenu${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#concierge" onClick={closeMenu}>Concierge</a>
        <a href="#packages" onClick={closeMenu}>Packages</a>
        <a href="#reviews" onClick={closeMenu}>Reviews</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#book" className="mobilemenu__cta" onClick={closeMenu}>Book a consultation</a>
      </div>
    </>
  )
}

/* ── Reviews Carousel ── */
function Reviews() {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)
  const n = REVIEWS.length
  const reduce = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ).current

  const go = useCallback((i) => {
    setIdx(((i % n) + n) % n)
  }, [n])

  const resetAuto = useCallback(() => {
    if (reduce) return
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % n), 6000)
  }, [n, reduce])

  useEffect(() => {
    resetAuto()
    return () => clearInterval(timerRef.current)
  }, [resetAuto])

  return (
    <section className="section reviews reveal" id="reviews">
      <div className="section__head section__head--center">
        <p className="eyebrow">04 — Client reviews</p>
        <h2 className="section__title">Rated 4.7 across<br />39 verified reviews.</h2>
        <p className="section__intro">
          Clients return to Miami Organizers for the same reasons they recommend it:
          speed, discretion, and spaces that keep working long after the team leaves.
        </p>
      </div>

      <div className="rev">
        <button
          className="rev__arrow rev__arrow--prev"
          aria-label="Previous review"
          onClick={() => { go(idx - 1); resetAuto() }}
        >←</button>
        <div className="rev__window">
          <div
            className="rev__track"
            style={{ transform: `translateX(${-idx * 100}%)` }}
          >
            {REVIEWS.map((r, i) => (
              <figure className="rev__card" key={i}>
                <div className="rev__stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>{r.quote}</blockquote>
                <figcaption>
                  <span>{r.name}</span>{r.service}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <button
          className="rev__arrow rev__arrow--next"
          aria-label="Next review"
          onClick={() => { go(idx + 1); resetAuto() }}
        >→</button>
      </div>

      <div className="rev__dots" aria-hidden="true">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            className={`rev__dot${i === idx ? ' is-on' : ''}`}
            aria-label={`Review ${i + 1}`}
            onClick={() => { go(i); resetAuto() }}
          />
        ))}
      </div>
    </section>
  )
}

/* ── Scroll Reveal ── */
function useScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = document.querySelectorAll('.reveal')
    if (!reduce && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      )
      els.forEach(el => io.observe(el))
      return () => io.disconnect()
    } else {
      els.forEach(el => el.classList.add('in'))
    }
  }, [])
}

/* ── App ── */
function App() {
  useScrollReveal()
  const year = new Date().getFullYear()

  return (
    <>
      <Nav />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero__media">
            <img src={heroImg} alt="Sherezade Vacas in a styled, organized Miami kitchen" fetchpriority="high" />
          </div>
          <div className="hero__panel">
            <p className="eyebrow">Miami&nbsp;·&nbsp;Dade County</p>
            <h1 className="hero__title">
              A home that<br />
              <span className="ink-block">runs quietly.</span>
            </h1>
            <p className="hero__lede">
              Professional home organizing and white-glove kitchen concierge,
              designed for households that value order, calm, and a little discretion.
            </p>
            <div className="hero__actions">
              <a href="#book" className="btn btn--solid">Book a 30-min consultation</a>
              <a href="#services" className="btn btn--ghost">See how it works</a>
            </div>
          </div>
        </section>

        {/* STRIP */}
        <section className="strip">
          <p className="strip__line">
            Edit · Systemize · Style · Maintain —{' '}
            <span className="strip__muted">so the everyday feels effortless.</span>
          </p>
        </section>

        {/* SERVICES */}
        <section className="section services reveal" id="services">
          <div className="section__head">
            <p className="eyebrow">01 — What we do</p>
            <h2 className="section__title">Considered spaces,<br />start to finish.</h2>
            <p className="section__intro">
              Every project begins with how you actually live. We edit what no longer
              serves the space, build systems that hold, and style the result so it
              photographs as well as it functions.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <div className="card__media"></div>
              <div className="card__body">
                <span className="card__no">A</span>
                <h3>Kitchens &amp; Pantries</h3>
                <p>Functional zones, decanted essentials, and a daily flow built around how your household cooks and gathers.</p>
              </div>
            </article>
            <article className="card">
              <div className="card__media"></div>
              <div className="card__body">
                <span className="card__no">B</span>
                <h3>Whole-Home Editing</h3>
                <p>Closets, living areas, garages, and the rooms that quietly hold a household together — reset and restyled.</p>
              </div>
            </article>
            <article className="card">
              <div className="card__media"></div>
              <div className="card__body">
                <span className="card__no">C</span>
                <h3>Moves &amp; Unpacks</h3>
                <p>Arrive to a home that already works. We unpack, place, and style so day one feels like you've always lived there.</p>
              </div>
            </article>
          </div>
        </section>

        {/* CONCIERGE */}
        <section className="concierge" id="concierge">
          <div className="concierge__media"></div>
          <div className="concierge__copy">
            <p className="eyebrow eyebrow--light">02 — Kitchen Concierge</p>
            <h2 className="concierge__title">The pantry,<br /><em>quietly kept.</em></h2>
            <p className="concierge__text">
              A standing service for clients who would simply prefer it handled.
              Our white-glove team shops, restocks the refrigerator and pantry, and
              maintains the systems we build — so your kitchen is always prepared,
              and you never think about it.
            </p>
            <ul className="concierge__list">
              <li>Weekly or bi-weekly refrigerator &amp; pantry restock</li>
              <li>Preferred brands, markets, and dietary preferences honored</li>
              <li>Systems maintained between visits, discreetly</li>
            </ul>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdWtuDrqKjFndcpOoiwIIyh-WYKcZUxHL-rfiSbv_bjkMRYMw/viewform"
              className="btn btn--light"
              target="_blank"
              rel="noopener noreferrer"
            >Begin with a short intake</a>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="section packages reveal" id="packages">
          <div className="section__head section__head--center">
            <p className="eyebrow">03 — Organizing packages</p>
            <h2 className="section__title">Booked by the hour,<br />built around the project.</h2>
            <p className="section__intro">
              Professional organizing is <strong>$90 per hour</strong>. Choose the block
              that fits your space — most kitchens land between three and five hours,
              whole-home projects between six and eight.
            </p>
          </div>
          <div className="tiers">
            {TIERS.map((t) => (
              <div key={t.hrs} className={`tier${t.feature ? ' tier--feature' : ''}`}>
                {t.tag && <span className="tier__tag">{t.tag}</span>}
                <span className="tier__hrs">{t.hrs}</span>
                <span className="tier__unit">hours</span>
                <span className="tier__price">${(t.hrs * RATE).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <p className="packages__note">
            Not sure which to choose? Book a complimentary 30-minute consultation and
            we'll estimate the hours for your space.
          </p>
        </section>

        {/* QUOTE BAND */}
        <section className="quote">
          <div className="quote__media"></div>
          <blockquote className="quote__text">
            <p>"Organizing isn't about owning less. It's about making room for the life you actually want."</p>
            <cite>Sherezade Vacas — Founder</cite>
          </blockquote>
        </section>

        {/* REVIEWS */}
        <Reviews />

        {/* PRESS */}
        <section className="media reveal" id="media">
          <div className="media__inner">
            <p className="eyebrow">05 — In the press</p>
            <div className="media__feature">
              <div className="media__kicker">MiamiBusiness.com · Rising Stars</div>
              <h2 className="media__quote">
                "A beautiful space that doesn't function properly still creates stress."
              </h2>
              <p className="media__excerpt">
                Profiled as a Miami Rising Star, Sherezade Vacas was recognized for building
                Miami Organizers through resilience and a purpose-driven approach — combining
                organization, functional design, and lifestyle strategy for homes, offices,
                and luxury residences across Miami and beyond.
              </p>
              <a
                href="https://miamibusiness.com/miami-rising-star-organizer-shere-vacas/"
                className="textlink"
                target="_blank"
                rel="noopener noreferrer"
              >Read the feature on MiamiBusiness.com&nbsp;→</a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about reveal" id="about">
          <div className="about__media"></div>
          <div className="about__copy">
            <p className="eyebrow">06 — The founder</p>
            <h2 className="section__title">Sherezade Vacas</h2>
            <p>
              Miami Organizers was founded on a simple belief: a well-ordered home gives
              you your time, attention, and calm back. Sherezade leads every project
              personally, bringing an editor's eye and a host's warmth to homes across
              Miami-Dade.
            </p>
            <p>
              Beyond client work, she's an author and entrepreneur who built Miami
              Organizers into a name local households trust for both hands-on organizing
              and discreet, ongoing care.
            </p>
            <a
              href="https://miamiorganizers.thinkific.com/products/digital_downloads/Organizing-for-a-better-lifestyle"
              className="textlink"
              target="_blank"
              rel="noopener noreferrer"
            >Explore the digital guide&nbsp;→</a>
          </div>
        </section>

        {/* BOOK */}
        <section className="book" id="book">
          <div className="book__inner">
            <p className="eyebrow eyebrow--light">07 — Let's begin</p>
            <h2 className="book__title">Book a 30-minute<br />video consultation.</h2>
            <p className="book__text">
              We'll talk through your space, your goals, and the right approach —
              whether that's a one-time project or standing concierge care. No pressure,
              no obligation.
            </p>
            <div className="book__actions">
              <a
                href="https://calendly.com/sherevacas/30min?month=2026-06"
                className="btn btn--light btn--lg"
                target="_blank"
                rel="noopener noreferrer"
              >Schedule on Calendly</a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdWtuDrqKjFndcpOoiwIIyh-WYKcZUxHL-rfiSbv_bjkMRYMw/viewform"
                className="btn btn--outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >Kitchen Concierge intake</a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__top">
          <span className="footer__wordtext">Miami Organizers</span>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Services</h4>
            <a href="#services">Home organizing</a>
            <a href="#concierge">Kitchen concierge</a>
            <a href="#packages">Packages &amp; rates</a>
          </div>
          <div className="footer__col">
            <h4>Book</h4>
            <a href="https://calendly.com/sherevacas/30min?month=2026-06" target="_blank" rel="noopener noreferrer">30-min consultation</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWtuDrqKjFndcpOoiwIIyh-WYKcZUxHL-rfiSbv_bjkMRYMw/viewform" target="_blank" rel="noopener noreferrer">Concierge intake form</a>
            <a href="https://miamiorganizers.base44.app" target="_blank" rel="noopener noreferrer">Client menu portal</a>
          </div>
          <div className="footer__col">
            <h4>More</h4>
            <a href="https://miamiorganizers.thinkific.com/products/digital_downloads/Organizing-for-a-better-lifestyle" target="_blank" rel="noopener noreferrer">Digital guide</a>
            <a href="#reviews">Client reviews</a>
            <a href="https://miamibusiness.com/miami-rising-star-organizer-shere-vacas/" target="_blank" rel="noopener noreferrer">Press feature</a>
            <a href="#about">About Sherezade</a>
          </div>
          <div className="footer__col">
            <h4>Studio</h4>
            <p>Miami-Dade County, Florida</p>
            <p>By appointment</p>
          </div>
        </div>
        <div className="footer__base">
          <span>© {year} Miami Organizers, LLC</span>
          <span className="footer__tag">Edit · Systemize · Style · Maintain</span>
        </div>
      </footer>
    </>
  )
}

export default App
