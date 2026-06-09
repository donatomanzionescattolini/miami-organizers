import { useState, useEffect, useMemo } from 'react'
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { T, LangCtx, ROUTES, useT } from './content.jsx'
import {
  Nav, Footer, Fab, PageHero,
  Hero, Strip, Services, Concierge, Gallery, Video, Mission,
  QuoteBand, Packages, Reviews, Products, Press, About, Contact, CtaBand,
} from './sections.jsx'

/* detect initial language from the browser */
const detectLang = () => {
  if (typeof navigator === 'undefined') return 'en'
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

/* scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' }) }, [pathname])
  return null
}

/* set <title> per page */
function usePageTitle(key) {
  const t = useT()
  useEffect(() => { document.title = t.pageTitles[key] }, [t, key])
}

/* ============================================================
   PAGES
   ============================================================ */
function HomePage() {
  usePageTitle('home')
  return (
    <>
      <Hero />
      <Strip />
      <Services preview />
      <Concierge />
      <Gallery preview />
      <Reviews />
      <CtaBand />
    </>
  )
}

function ServicesPage() {
  usePageTitle('services')
  const t = useT()
  return (
    <>
      <PageHero eyebrow={t.nav.services} title={t.services.title} />
      <Services />
      <Concierge />
      <Packages />
      <CtaBand />
    </>
  )
}

function WorkPage() {
  usePageTitle('work')
  const t = useT()
  return (
    <>
      <PageHero eyebrow={t.nav.work} title={t.gallery.title} />
      <Gallery />
      <Video />
      <CtaBand />
    </>
  )
}

function AboutPage() {
  usePageTitle('about')
  const t = useT()
  return (
    <>
      <PageHero eyebrow={t.nav.about} title={t.mission.title} />
      <Mission />
      <QuoteBand />
      <About />
      <Press />
      <CtaBand />
    </>
  )
}

function GuidesPage() {
  usePageTitle('guides')
  const t = useT()
  return (
    <>
      <PageHero eyebrow={t.nav.guides} title={t.products.title} />
      <Products />
      <CtaBand />
    </>
  )
}

function ContactPage() {
  usePageTitle('contact')
  return <Contact />
}

/* ============================================================
   LAYOUT
   ============================================================ */
function Layout() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Fab />
    </>
  )
}

/* ============================================================
   APP
   ============================================================ */
export default function App() {
  const [lang, setLang] = useState(detectLang)
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  const ctx = useMemo(() => ({ lang, setLang, t: T[lang] }), [lang])

  return (
    <LangCtx.Provider value={ctx}>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.services} element={<ServicesPage />} />
            <Route path={ROUTES.work} element={<WorkPage />} />
            <Route path={ROUTES.about} element={<AboutPage />} />
            <Route path={ROUTES.guides} element={<GuidesPage />} />
            <Route path={ROUTES.contact} element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </LangCtx.Provider>
  )
}




