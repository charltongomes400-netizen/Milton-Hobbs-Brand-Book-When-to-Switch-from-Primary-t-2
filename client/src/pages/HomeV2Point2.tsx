import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";
import miltonHobbsLogo from "@assets/Milton_hobbs_logo_1775554832004.png";
import miltonHobbsWordmark from "@assets/image_1776101259071.png";
import imgCorp   from "@assets/sean-pollock-PhYq704ffdA-unsplash_1776241615811.jpg";
import imgTax    from "@assets/phil-desforges-ow1mML1sOi0-unsplash_1776241615811.jpg";
import imgBank   from "@assets/marc-olivier-jodoin--HIiNFXcbtQ-unsplash_1776241615811.jpg";
import imgTech   from "@assets/donny-jiang-42gFAgdIUC8-unsplash_1776241615811.jpg";
import imgIp     from "@assets/simone-hutsch-iDSfeuoxM0o-unsplash_1776241615811.jpg";
import imgEstate from "@assets/alexander-abero-OypnYfdiQgg-unsplash_1776241615811.jpg";
import imgEmploy from "@assets/daniele-colucci-Xt48I3ps6Pg-unsplash_1776241615811.jpg";
import imgLitig  from "@assets/sasha-yudaev-FOYsU4uQqqM-unsplash_1776241615811.jpg";
import heroBg0 from "@assets/verne-ho-0LAJfSNa-xQ-unsplash_1775562755413.jpg";
import heroBg1 from "@assets/tim-stief-dH6IjhWHNQQ-unsplash_1775562755413.jpg";
import heroBg2 from "@assets/joakim-nadell-K67sBVqLLuw-unsplash_1775562755414.jpg";
import heroBg3 from "@assets/maarten-deckers-T5nXYXCf50I-unsplash_1775562755414.jpg";
import heroBg4 from "@assets/anders-jilden-Sc5RKXLBjGg-unsplash_1775562755415.jpg";

const HERO_BG_IMAGES = [heroBg0, heroBg1, heroBg2, heroBg3, heroBg4];

function snapScrollTo(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const container = document.querySelector('.v2-snap-container');
  if (container) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/* ─── HEADER ────────────────────────────────────────────────────────────── */

function HeaderV15() {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home,      href: "#home" },
    { label: t.nav.firm,      href: "#firm" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.insights,  href: "#insights" },
    { label: t.nav.careers,   href: "/careers" },
    { label: t.nav.contact,   href: "#contact" },
  ];

  const mainLinks = navLinks.filter(l => l.href !== "#contact");
  const contactLink = navLinks.find(l => l.href === "#contact")!;

  const textCol   = "rgba(0,20,137,0.55)";
  const textHover = "#001489";

  return (
    <motion.header
      data-testid="header"
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "#FFFFFF",
        borderBottom: "1px solid rgba(0,20,137,0.08)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between" style={{ height: 92 }}>

        {/* Logo */}
        <a href="#home" data-testid="logo" className="shrink-0" style={{ transition: "filter 0.45s ease" }} onClick={e => { e.preventDefault(); snapScrollTo("#home"); }}>
          <img
            src={miltonHobbsLogo}
            alt="Milton Hobbs"
            style={{ height: 72, width: "auto", display: "block" }}
          />
        </a>

        {/* Desktop nav */}
        <nav data-testid="nav-desktop" className="hidden lg:flex items-center gap-10 xl:gap-12">
          {mainLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.href.replace(/[#/]/g, "")}`}
              className="relative whitespace-nowrap"
              style={{
                color: textCol,
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.25s ease",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
              onClick={e => { if (link.href.startsWith("#")) { e.preventDefault(); snapScrollTo(link.href); } }}
              onMouseEnter={e => (e.currentTarget.style.color = textHover)}
              onMouseLeave={e => (e.currentTarget.style.color = textCol)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-7 shrink-0">

          {/* Language toggle */}
          <div
            data-testid="lang-toggle"
            className="flex items-center"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.10em" }}
          >
            <button
              onClick={() => setLang("EN")}
              data-testid="lang-en"
              style={{ color: lang === "EN" ? textHover : "rgba(0,20,137,0.28)", transition: "color 0.25s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >EN</button>
            <span style={{ color: "rgba(0,20,137,0.15)", margin: "0 8px", fontWeight: 300, fontSize: 11 }}>|</span>
            <button
              onClick={() => setLang("FR")}
              data-testid="lang-fr"
              style={{ color: lang === "FR" ? textHover : "rgba(0,20,137,0.28)", transition: "color 0.25s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >FR</button>
          </div>

          {/* Thin divider */}
          <div style={{ width: 1, height: 16, background: "rgba(0,20,137,0.12)" }} />

          {/* Contact — solid blue */}
          <a
            href={contactLink.href}
            data-testid="nav-link-contact"
            className="inline-flex items-center whitespace-nowrap"
            onClick={e => { e.preventDefault(); snapScrollTo(contactLink.href); }}
            style={{
              border: "1px solid #001489",
              color: "#001489",
              background: "transparent",
              padding: "9px 22px",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "background 0.25s, color 0.25s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#001489";
              el.style.color = "#FFFFFF";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#001489";
            }}
          >
            {contactLink.label}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col gap-[5px] w-8 h-8 items-center justify-center focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span style={{ background: "#001489" }} className={`block w-5 h-px transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span style={{ background: "#001489" }} className={`block w-5 h-px transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span style={{ background: "#001489" }} className={`block w-5 h-px transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>

      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{ background: "#001489", borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="px-8 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  onClick={() => setLang("EN")}
                  style={{ color: lang === "EN" ? "#FFFFFF" : "rgba(255,255,255,0.30)", fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >EN</button>
                <span style={{ color: "rgba(255,255,255,0.15)", margin: "0 10px", fontSize: 11, fontWeight: 300 }}>|</span>
                <button
                  onClick={() => setLang("FR")}
                  style={{ color: lang === "FR" ? "#FFFFFF" : "rgba(255,255,255,0.30)", fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >FR</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────────── */

const HERO_CYCLE_MS = 12000;

// ── Floating background tiles — scattered in the photo area (right side) ─────
// Panel is 55% wide with clip-path bottom at 65% = 35.75% of viewport.
// Tiles are placed in the right photo field and use multiply blend to show
// as visible deep-blue rectangular masses over the architectural image.
const DIAG_TILE_SZ = 110;
const DIAG_TILES: { left: string; top: string; col: string; dur: number; delay: number }[] = [
  { left: "58%",  top: "6%",  col: "#001489", dur: 20, delay: 0  },
  { left: "74%",  top: "12%", col: "#001050", dur: 23, delay: 6  },
  { left: "63%",  top: "26%", col: "#001489", dur: 19, delay: 3  },
  { left: "82%",  top: "20%", col: "#001050", dur: 26, delay: 10 },
  { left: "70%",  top: "40%", col: "#001489", dur: 22, delay: 14 },
  { left: "57%",  top: "54%", col: "#001050", dur: 18, delay: 4  },
  { left: "78%",  top: "58%", col: "#001489", dur: 24, delay: 8  },
  { left: "65%",  top: "70%", col: "#001050", dur: 20, delay: 2  },
  { left: "86%",  top: "75%", col: "#001489", dur: 21, delay: 12 },
  { left: "60%",  top: "86%", col: "#001050", dur: 23, delay: 7  },
  { left: "76%",  top: "88%", col: "#001489", dur: 19, delay: 16 },
];

function HeroV15() {
  const { t } = useLang();
  const ins = t.insights;
  const totalArticles = ins.articles.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const bgIndex = currentIndex % HERO_BG_IMAGES.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalArticles);
    }, HERO_CYCLE_MS);
    return () => clearInterval(timer);
  }, [timerKey, totalArticles]);

  function goTo(i: number) {
    setCurrentIndex(i);
    setTimerKey(k => k + 1);
  }

  const featuredArticle = ins.articles[currentIndex];
  const featuredSlug = articles[currentIndex]?.slug ?? "";

  const otherCategories = ins.articles
    .map((a, i) => ({ label: a.category, index: i }))
    .filter(({ index }) => index !== currentIndex)
    .filter(({ label }, i, arr) => arr.findIndex(x => x.label === label) === i)
    .slice(0, 5);

  return (
    <section
      id="home"
      data-testid="hero-section"
      data-header-theme="dark"
      className="relative min-h-screen overflow-hidden v2-snap-section"
      style={{ background: "#001489" }}
    >
      {/* ── Full-bleed architectural photo — multiply blend ── */}
      <AnimatePresence>
        <motion.img
          key={bgIndex}
          src={HERO_BG_IMAGES[bgIndex]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ objectPosition: "center 30%", mixBlendMode: "multiply" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
      </AnimatePresence>
      {/* ── Floating tiles — multiply blend in photo area ─── */}
      {DIAG_TILES.map((tile, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none hidden lg:block"
          style={{
            left: tile.left, top: tile.top,
            width: DIAG_TILE_SZ, height: DIAG_TILE_SZ,
            backgroundColor: tile.col, mixBlendMode: "multiply",
          }}
          animate={{ opacity: [0, 0, 0.80, 0.80, 0, 0] }}
          transition={{ duration: tile.dur, delay: tile.delay, repeat: Infinity, ease: "easeInOut", times: [0, 0.12, 0.38, 0.62, 0.88, 1] }}
        />
      ))}
      {/* ════════════════════════════════════════════════════════════
          DESKTOP — Broadsheet editorial bar anchored at bottom
      ════════════════════════════════════════════════════════════ */}
      <motion.div
        className="hidden lg:grid absolute bottom-0 left-0 right-0 z-10"
        style={{
          gridTemplateColumns: "55% 45%",
          background: "#FFFFFF",
          minHeight: 280,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      >
        {/* Animated progress timer — left edge of the bar */}
        <motion.div
          key={currentIndex}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background: "#001489",
            transformOrigin: "top",
            zIndex: 2,
          }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: HERO_CYCLE_MS / 1000, ease: "linear" }}
        />

        {/* ── LEFT: eyebrow + headline + dots ── */}
        <div
          style={{
            padding: "44px 0 44px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: "1px solid rgba(0,20,137,0.07)",
            paddingRight: "8%",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              {/* Category eyebrow */}
              <div className="flex items-center gap-3 mb-5" data-testid="hero-eyebrow">
                <div style={{ width: 20, height: 1.5, background: "#4A58AA", flexShrink: 0 }} />
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#4A58AA",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.40em",
                  textTransform: "uppercase",
                }}>
                  {featuredArticle?.category}
                </p>
              </div>

              {/* Headline */}
              <h1
                className="font-heading font-bold"
                data-testid="hero-headline"
                style={{
                  fontSize: "clamp(1.75rem, 3.6vw, 3.25rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: "#001489",
                  maxWidth: "20ch",
                }}
              >
                {featuredArticle?.title}
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center gap-2 mt-6"
            data-testid="hero-dots"
          >
            {ins.articles.map((_, i) => (
              <button
                key={i}
                data-testid={`hero-dot-${i}`}
                onClick={() => goTo(i)}
                aria-label={`Article ${i + 1}`}
                className="focus:outline-none cursor-pointer transition-all duration-300"
                style={{
                  width: i === currentIndex ? 28 : 7,
                  height: 2,
                  backgroundColor: i === currentIndex ? "#001489" : "rgba(0,20,137,0.18)",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: date + excerpt + CTA ── */}
        <div
          style={{
            padding: "44px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
              style={{ display: "flex", flexDirection: "column", gap: 0 }}
            >
              {/* Date · read-time */}
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#848484",
                marginBottom: 20,
              }}>
                {featuredArticle?.date}&ensp;·&ensp;{featuredArticle?.readTime}
              </p>

              {/* Thin rule */}
              <div style={{ height: 1, background: "rgba(0,20,137,0.07)", marginBottom: 20 }} />

              {/* Excerpt */}
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#595959",
                fontSize: 14,
                lineHeight: 1.78,
                maxWidth: "38ch",
                marginBottom: 28,
              }}>
                {featuredArticle?.excerpt}
              </p>

              {/* Read Article CTA */}
              <a
                href={`/insights/${featuredSlug}`}
                data-testid="hero-read-link"
                className="inline-flex items-center gap-2.5 whitespace-nowrap"
                style={{
                  border: "1px solid #001489",
                  color: "#001489",
                  background: "transparent",
                  padding: "9px 22px",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "background 0.25s, color 0.25s",
                  width: "fit-content",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#001489";
                  el.style.color = "#FFFFFF";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.color = "#001489";
                }}
              >
                {ins.read}
                <svg width="11" height="11" fill="none" viewBox="0 0 14 14">
                  <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      {/* ── Category strip — sits above the white bar, desktop only ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="hidden lg:flex absolute right-10 z-10 items-center gap-0"
          style={{ bottom: "calc(280px + 24px)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          data-testid="hero-category-strip"
        >
          {otherCategories.map(({ label, index: idx }, i) => (
            <button
              key={i}
              data-testid={`hero-cat-${i}`}
              onClick={() => goTo(idx)}
              style={{ background: "none", border: "none", cursor: "pointer", outline: "none", display: "flex", alignItems: "center", gap: 0, padding: 0 }}
            >
              {i > 0 && <div style={{ width: 1, height: 10, background: "rgba(255,255,255,0.18)", margin: "0 16px" }} />}
              <span
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 8, fontWeight: 700, letterSpacing: "0.30em", textTransform: "uppercase", color: "rgba(255,255,255,0.30)", transition: "color 0.2s", whiteSpace: "nowrap" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.30)"; }}
              >
                {label}
              </span>
            </button>
          ))}
        </motion.div>
      </AnimatePresence>
      {/* ════════════════════════════════════════════════════════════
          MOBILE — full-bleed dark gradient, bottom-pinned content
      ════════════════════════════════════════════════════════════ */}
      <div
        className="lg:hidden relative z-10 flex flex-col min-h-screen"
        style={{ background: "linear-gradient(to top, rgba(0,14,80,0.90) 0%, rgba(0,14,80,0.55) 55%, transparent 100%)" }}
      >
        <div className="flex-1" />
        <div className="px-6 pb-14 pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-5" data-testid="hero-eyebrow-mobile">
                <div style={{ width: 16, height: 1, background: "#4A58AA" }} />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#4A58AA", fontSize: 9, fontWeight: 700, letterSpacing: "0.36em", textTransform: "uppercase" }}>
                  {featuredArticle?.category}
                </p>
              </div>
              <h1
                className="font-heading text-white font-bold"
                style={{ fontSize: "clamp(2rem, 7vw, 3rem)", lineHeight: 1.06, letterSpacing: "-0.02em", maxWidth: "16ch", marginBottom: "1.5rem" }}
                data-testid="hero-headline-mobile"
              >
                {featuredArticle?.title}
              </h1>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.50)", fontSize: 13, lineHeight: 1.75, maxWidth: "32ch", marginBottom: "1.5rem" }}>
                {featuredArticle?.excerpt}
              </p>
              <a href={`/insights/${featuredSlug}`} data-testid="hero-read-link-mobile" className="inline-flex items-center gap-3" style={{ textDecoration: "none" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, border: "1px solid rgba(255,255,255,0.28)" }}>
                  <svg width="11" height="11" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="rgba(255,255,255,0.80)" strokeWidth="1.4" /></svg>
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 9, fontWeight: 700, letterSpacing: "0.30em", textTransform: "uppercase" }}>
                  {ins.read}
                </span>
              </a>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center gap-2 mt-7" data-testid="hero-dots">
            {ins.articles.map((_, i) => (
              <button key={i} data-testid={`hero-dot-${i}`} onClick={() => goTo(i)} aria-label={`Article ${i + 1}`} className="focus:outline-none cursor-pointer transition-all duration-300"
                style={{ width: i === currentIndex ? 24 : 6, height: 2, backgroundColor: i === currentIndex ? "#FFFFFF" : "rgba(255,255,255,0.25)" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── DIFFERENTIATORS (Why Milton Hobbs) ───────────────────────────────── */

const CYCLE_MS = 8500;

function FounderVisual() {
  const spokes = 8;
  const cx = 160, cy = 130, innerR = 22, outerR = 100;
  return (
    <svg viewBox="0 0 320 260" fill="none" className="w-full h-full">
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i / spokes) * 2 * Math.PI - Math.PI / 2;
        const x1 = cx + innerR * Math.cos(angle);
        const y1 = cy + innerR * Math.sin(angle);
        const x2 = cx + outerR * Math.cos(angle);
        const y2 = cy + outerR * Math.sin(angle);
        return (
          <motion.line
            key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#FFFFFF" strokeWidth={1}
            animate={{ strokeOpacity: [0.15, 0.6, 0.15] }}
            transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i / spokes) * 2 * Math.PI - Math.PI / 2;
        const x = cx + outerR * Math.cos(angle);
        const y = cy + outerR * Math.sin(angle);
        return (
          <motion.circle
            key={i} cx={x} cy={y} r={3}
            fill="#FFFFFF" fillOpacity={0.5}
            animate={{ fillOpacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={outerR} stroke="#FFFFFF" strokeOpacity={0.12} strokeWidth={1} fill="none" />
      <circle cx={cx} cy={cy} r={innerR} stroke="#FFFFFF" strokeOpacity={0.22} strokeWidth={1} fill="none" />
      <circle cx={cx} cy={cy} r={8} fill="#FFFFFF" fillOpacity={0.9} />
      <motion.circle
        cx={cx} cy={cy} r={innerR}
        stroke="#FFFFFF" strokeWidth={1} fill="none"
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
    </svg>
  );
}

function PrecisionVisual() {
  const CX = 160, CY = 130;
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const [locked, setLocked] = useState(false);
  const [flashKey, setFlashKey] = useState(0);
  const running = useRef(true);

  useEffect(() => {
    running.current = true;
    const POSITIONS: [number, number][] = [
      [-60, -40], [50, -50], [-25, 45], [65, 30],
      [-50, -15], [30, -55], [55, 40], [-40, 55],
      [70, -20], [-65, 30], [20, 60], [-30, -55],
    ];
    let idx = 0;

    async function loop() {
      while (running.current) {
        setLocked(false);
        for (let s = 0; s < 4; s++) {
          if (!running.current) return;
          const [tx, ty] = POSITIONS[idx % POSITIONS.length];
          idx++;
          await Promise.all([
            animate(rx, tx, { duration: 1.0, ease: "easeInOut" }),
            animate(ry, ty, { duration: 1.0, ease: "easeInOut" }),
          ]);
          await new Promise(r => setTimeout(r, 400));
        }
        if (!running.current) return;
        await Promise.all([
          animate(rx, 0, { duration: 0.8, ease: [0.22, 1, 0.36, 1] }),
          animate(ry, 0, { duration: 0.8, ease: [0.22, 1, 0.36, 1] }),
        ]);
        setLocked(true);
        setFlashKey(k => k + 1);
        await new Promise(r => setTimeout(r, 2400));
      }
    }

    loop();
    return () => { running.current = false; };
  }, [rx, ry]);

  return (
    <svg viewBox="0 0 320 260" fill="none" className="w-full h-full">
      {[88, 64, 44].map((r, i) => (
        <circle
          key={i} cx={CX} cy={CY} r={r} fill="none"
          stroke="#FFFFFF"
          strokeOpacity={locked ? 0.20 + i * 0.10 : 0.10 + i * 0.06}
          strokeWidth={1}
          style={{ transition: "stroke-opacity 0.4s" }}
        />
      ))}
      <line x1={CX} y1={30} x2={CX} y2={230} stroke="#FFFFFF" strokeOpacity={0.14} strokeWidth={1} />
      <line x1={40} y1={CY} x2={280} y2={CY} stroke="#FFFFFF" strokeOpacity={0.14} strokeWidth={1} />
      <circle cx={CX} cy={CY} r={4}
        fill="#FFFFFF"
        fillOpacity={locked ? 1 : 0.65}
        style={{ transition: "fill-opacity 0.3s" }}
      />
      {locked && (
        <AnimatePresence>
          <motion.circle
            key={flashKey}
            cx={CX} cy={CY} r={22}
            stroke="#FFFFFF" strokeWidth={2} fill="none"
            initial={{ scale: 1, opacity: 0.85 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />
        </AnimatePresence>
      )}
      <motion.g style={{ x: rx, y: ry }}>
        <circle cx={CX} cy={CY} r={22} stroke="#FFFFFF" strokeWidth={1.5} fill="none" strokeOpacity={0.7} />
        <path d={`M${CX-22} ${CY-9} L${CX-22} ${CY-22} L${CX-9} ${CY-22}`} stroke="#FFFFFF" strokeWidth={1.5} fill="none" strokeOpacity={0.7} />
        <path d={`M${CX+9} ${CY-22} L${CX+22} ${CY-22} L${CX+22} ${CY-9}`} stroke="#FFFFFF" strokeWidth={1.5} fill="none" strokeOpacity={0.7} />
        <path d={`M${CX+22} ${CY+9} L${CX+22} ${CY+22} L${CX+9} ${CY+22}`} stroke="#FFFFFF" strokeWidth={1.5} fill="none" strokeOpacity={0.7} />
        <path d={`M${CX-9} ${CY+22} L${CX-22} ${CY+22} L${CX-22} ${CY+9}`} stroke="#FFFFFF" strokeWidth={1.5} fill="none" strokeOpacity={0.7} />
        <line x1={CX-9} y1={CY} x2={CX+9} y2={CY} stroke="#FFFFFF" strokeWidth={1} strokeOpacity={0.5} />
        <line x1={CX} y1={CY-9} x2={CX} y2={CY+9} stroke="#FFFFFF" strokeWidth={1} strokeOpacity={0.5} />
      </motion.g>
      {locked && (
        <motion.text
          x={CX + 30} y={CY - 28}
          fill="rgba(255,255,255,0.65)" fontSize="8" fontFamily="'Satoshi', sans-serif" letterSpacing="0.15em"
          initial={{ opacity: 0 }} animate={{ opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 2.2, times: [0, 0.15, 0.85, 1] }}
        >
          LOCKED
        </motion.text>
      )}
    </svg>
  );
}

function CrossBorderVisual() {
  const nodes = [
    { cx: 55,  cy: 100, label: "FR"  },
    { cx: 55,  cy: 160, label: "EU"  },
    { cx: 265, cy: 100, label: "UAE" },
    { cx: 265, cy: 160, label: "GCC" },
  ];
  const paths = [
    { d: "M60 100 Q160 70 260 100",  delay: 0   },
    { d: "M60 160 Q160 190 260 160", delay: 0.6 },
    { d: "M60 100 Q160 130 260 160", delay: 1.2 },
    { d: "M60 160 Q160 130 260 100", delay: 1.8 },
  ];
  return (
    <svg viewBox="0 0 320 260" fill="none" className="w-full h-full">
      {paths.map((p, i) => (
        <motion.path
          key={i} d={p.d}
          stroke="#FFFFFF"
          strokeOpacity={i < 2 ? 0.6 : 0.3}
          strokeWidth={i < 2 ? 1.2 : 1}
          strokeDasharray="220"
          animate={{ strokeDashoffset: [220, 0, -220] }}
          transition={{ duration: 3, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={5} fill="#FFFFFF" fillOpacity={0.7} />
          <text x={n.cx} y={n.cy + (i < 2 ? -12 : 18)}
            fill="#FFFFFF" fillOpacity={0.5} fontSize="8"
            fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle"
          >{n.label}</text>
        </g>
      ))}
      <circle cx={160} cy={130} r={7} fill="#FFFFFF" fillOpacity={0.9} />
      <motion.circle
        cx={160} cy={130} r={18}
        stroke="#FFFFFF" strokeWidth={1} fill="none"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: "160px 130px" }}
      />
    </svg>
  );
}

function DiscretionVisual() {
  const cx = 160, cy = 130;
  const rings = [95, 72, 52, 34, 18];
  return (
    <svg viewBox="0 0 320 260" fill="none" className="w-full h-full">
      {rings.map((r, i) => {
        const circumference = 2 * Math.PI * r;
        const gap = i % 2 === 0 ? 0.15 : 0.25;
        return (
          <motion.circle
            key={i} cx={cx} cy={cy} r={r}
            stroke="#FFFFFF"
            strokeOpacity={i === rings.length - 1 ? 0.7 : 0.12 + i * 0.07}
            strokeWidth={1}
            strokeDasharray={`${circumference * (1 - gap)} ${circumference * gap}`}
            fill="none"
            animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
            transition={{ duration: 10 + i * 4, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        );
      })}
      <motion.rect
        x={cx - 7} y={cy - 4} width={14} height={11}
        stroke="#FFFFFF" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d={`M${cx-4} ${cy-4} Q${cx-4} ${cy-11} ${cx} ${cy-11} Q${cx+4} ${cy-11} ${cx+4} ${cy-4}`}
        stroke="#FFFFFF" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function DiffVisual({ index }: { index: number }) {
  const V = [FounderVisual, PrecisionVisual, CrossBorderVisual, DiscretionVisual][index];
  return <V />;
}

function DifferentiatorsV15() {
  const { t } = useLang();
  const d = t.diff;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const start = Date.now();
    const tick = setInterval(() => {
      if (Date.now() - start >= CYCLE_MS) {
        setActive(prev => (prev + 1) % d.cards.length);
        clearInterval(tick);
      }
    }, 80);
    return () => clearInterval(tick);
  }, [active, paused, d.cards.length]);

  const VISUALS = [FounderVisual, PrecisionVisual, CrossBorderVisual, DiscretionVisual];

  return (
    <section
      id="firm"
      data-header-theme="light"
      data-testid="differentiators-section"
      className="v2-snap-section"
      style={{ background: "#FFFFFF" }}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ════════════════════════════════════════════════════════════
          DESKTOP — Editorial split: white left / dark right
      ════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:grid" style={{ gridTemplateColumns: "55% 45%", minHeight: "100dvh" }}>

        {/* ── LEFT: white content column ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 72px 80px 64px",
            borderRight: "1px solid #E8EDF5",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.40em",
              textTransform: "uppercase",
              color: "#4A58AA",
              marginBottom: 20,
            }}>
            {d.eyebrow}
          </p>

          {/* Headline */}
          <h2
            className="font-heading font-bold text-[#001489]"
            style={{
              fontSize: "clamp(2rem, 3.2vw, 3rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              marginBottom: 80,
            }}
          >
            {d.headline}
          </h2>

          {/* ── Pillar rows ──────────────────────────────────────────── */}
          <div style={{ borderTop: "1px solid #E8EDF5" }}>
            {d.cards.map((card, i) => {
              const isActive = active === i;
              return (
                <div
                  key={i}
                  data-testid={`diff-row-${i}`}
                  style={{ borderBottom: "1px solid #E8EDF5", position: "relative" }}
                >
                  {/* Active left accent bar */}
                  <motion.div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 2,
                      background: "#001489",
                      transformOrigin: "top",
                    }}
                    animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />

                  {/* Row header — always visible, clickable */}
                  <button
                    onClick={() => { setActive(i); setPaused(true); }}
                    onMouseEnter={() => { setActive(i); setPaused(true); }}
                    aria-expanded={isActive}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      width: "100%",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      outline: "none",
                      padding: "28px 0 28px 20px",
                    }}
                  >
                    {/* Number */}
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.30em",
                        color: isActive ? "#4A58AA" : "rgba(74,88,170,0.35)",
                        flexShrink: 0,
                        transition: "color 0.3s",
                        minWidth: 22,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <span
                      className="font-heading font-bold"
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        color: isActive ? "#001489" : "rgba(0,20,137,0.28)",
                        flex: 1,
                        transition: "color 0.3s",
                      }}
                    >
                      {card.title}
                    </span>

                    {/* Animated arrow */}
                    <motion.div
                      animate={{ x: isActive ? 4 : 0, opacity: isActive ? 1 : 0.3 }}
                      transition={{ duration: 0.3 }}
                      style={{ flexShrink: 0 }}
                    >
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <path d="M3 8h10M8 3l5 5-5 5" stroke="#001489" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </button>

                  {/* Progress bar — thin line below the active row's title */}
                  {isActive && (
                    <motion.div
                      key={`prog-${active}`}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: 2,
                        background: "#001489",
                        opacity: 0.15,
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
                    />
                  )}

                  {/* Description — slides in below title when active */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={`desc-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <motion.p
                          initial={{ y: 8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -4, opacity: 0 }}
                          transition={{ duration: 0.35, delay: 0.1 }}
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            color: "#595959",
                            fontSize: "0.9375rem",
                            lineHeight: 1.82,
                            padding: "0 0 28px 42px",
                            maxWidth: 460,
                          }}
                        >
                          {card.description}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CTA — always below all 4 rows */}
          <div style={{ marginTop: 40 }}>
            <a
              href="#contact"
              data-testid="diff-cta"
              className="inline-flex items-center gap-3"
              style={{
                color: "#001489",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                border: "1px solid #001489",
                padding: "13px 28px",
                background: "transparent",
                transition: "background 0.25s, color 0.25s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#001489";
                el.style.color = "#FFFFFF";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.color = "#001489";
              }}
            >
              <span>{d.learnMore}</span>
              <svg width="11" height="11" fill="none" viewBox="0 0 14 14">
                <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* ── RIGHT: fixed dark animation window ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2 }}
          style={{
            background: "linear-gradient(145deg, #001489 0%, #001050 100%)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Caustic shimmer — always running */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(125deg, rgba(255,255,255,0.07) 0%, transparent 20%, rgba(255,255,255,0.04) 45%, transparent 60%, rgba(255,255,255,0.06) 80%, transparent 95%)",
              backgroundSize: "200% 200%",
              pointerEvents: "none",
            }}
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />

          {/* Top specular edge highlight */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "8%",
              right: "8%",
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.28) 30%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.28) 70%, transparent)",
              pointerEvents: "none",
            }}
          />

          {/* Subtle inner depth glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at 35% 25%, rgba(255,255,255,0.07) 0%, transparent 55%)",
              pointerEvents: "none",
            }}
          />

          {/* Pillar label — fades in, anchored bottom-left */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`label-${active}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "absolute",
                bottom: 32,
                left: 36,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.30)",
                zIndex: 2,
              }}
            >
              {d.cards[active].title}
            </motion.p>
          </AnimatePresence>

          {/* The animation — cross-fades on change, always large */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              style={{
                position: "absolute",
                inset: "6%",
                zIndex: 1,
              }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {(() => { const V = VISUALS[active]; return <V />; })()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      {/* ════════════════════════════════════════════════════════════
          MOBILE — simple accordion, white throughout
      ════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden" style={{ padding: "100px 24px 100px" }}>
        {/* Header */}
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.40em",
            textTransform: "uppercase",
            color: "#4A58AA",
            marginBottom: 16,
          }}
        >
          {d.eyebrow}
        </p>
        <h2
          className="font-heading font-bold text-[#001489]"
          style={{
            fontSize: "clamp(1.75rem, 7vw, 2.25rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 48,
          }}
        >
          {d.headline}
        </h2>

        {/* Pillar accordion */}
        <div style={{ borderTop: "1px solid #E8EDF5" }}>
          {d.cards.map((card, i) => {
            const isActive = active === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid #E8EDF5" }}>
                <button
                  onClick={() => { setActive(i); setPaused(true); }}
                  data-testid={`diff-mobile-${i}`}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "22px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    outline: "none",
                  }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.28em", color: "#4A58AA", flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading font-bold flex-1" style={{ fontSize: "1.05rem", lineHeight: 1.2, color: isActive ? "#001489" : "rgba(0,20,137,0.45)", transition: "color 0.25s" }}>
                    {card.title}
                  </span>
                  <motion.svg
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    width="16" height="16" fill="none" viewBox="0 0 16 16"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M8 3v10M3 8h10" stroke="#001489" strokeWidth="1.5" strokeLinecap="round" />
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#595959", fontSize: "0.9rem", lineHeight: 1.8, paddingBottom: 24 }}>
                        {card.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 40 }}>
          <a
            href="#contact"
            data-testid="diff-cta-mobile"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "#001489",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              border: "1px solid #001489",
              padding: "13px 24px",
              background: "transparent",
              transition: "background 0.25s, color 0.25s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#001489";
              el.style.color = "#FFFFFF";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#001489";
            }}
          >
            <span>{d.learnMore}</span>
            <svg width="10" height="10" fill="none" viewBox="0 0 14 14">
              <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── PRACTICE AREAS (CASE FILE STRIP) ──────────────────────────────────── */

const CASE_FILE_ITEMS = [
  {
    num: "01", title: "Corporate & Commercial",             tag: "Transactional",
    brief: "Cross-border transactions, joint ventures, and commercial agreements.",
    desc:  "Structuring complex transactions, joint ventures, and commercial agreements for businesses operating across borders and sectors. We advise on the full lifecycle of corporate matters, from entity formation to complex multi-party deals.",
    img: imgCorp,
  },
  {
    num: "02", title: "Tax & Compliance",                   tag: "Advisory",
    brief: "Strategic tax planning and regulatory advisory across jurisdictions.",
    desc:  "Strategic tax planning, regulatory compliance, and advisory services to keep businesses aligned with evolving legal frameworks. Our team delivers forward-looking counsel across domestic and international tax environments.",
    img: imgTax,
  },
  {
    num: "03", title: "Mergers & Acquisitions",             tag: "Strategic",
    brief: "End-to-end M&A counsel from structuring through post-closing integration.",
    desc:  "End-to-end counsel on acquisitions, disposals, restructurings, and due diligence for domestic and cross-border deals. We guide clients through every phase — from initial structuring to seamless post-merger integration.",
    img: imgBank,
  },
  {
    num: "04", title: "Startups & Venture Capital",         tag: "Emerging",
    brief: "Legal frameworks for founders, investors, and scaling ventures.",
    desc:  "Legal frameworks for fundraising rounds, equity structuring, founder agreements, and scaling ventures. We partner with entrepreneurs and investors at every stage of the startup lifecycle.",
    img: imgTech,
  },
  {
    num: "05", title: "Intellectual Property & Technology", tag: "Innovation",
    brief: "Protecting IP portfolios and advising on licensing and data law.",
    desc:  "Protecting trademarks, patents, copyrights, trade secrets, and advising on technology licensing and data regulations. We build and defend the intellectual assets that define competitive advantage.",
    img: imgIp,
  },
  {
    num: "06", title: "Real Estate & Property Law",         tag: "Property",
    brief: "Acquisitions, development projects, and portfolio management.",
    desc:  "Advising on acquisitions, leasing, development projects, title disputes, and property portfolio management. Our practice spans residential, commercial, and mixed-use real estate across the UAE and Europe.",
    img: imgEstate,
  },
  {
    num: "07", title: "Employment & Labor Law",             tag: "Workforce",
    brief: "Navigating workforce regulations and employment dispute resolution.",
    desc:  "Navigating workforce regulations, employment contracts, terminations, and workplace dispute resolution. We advise employers and executives on the full spectrum of employment law obligations across jurisdictions.",
    img: imgEmploy,
  },
  {
    num: "08", title: "Litigation & Dispute Resolution",    tag: "Disputes",
    brief: "Strategic advocacy in civil, commercial, and arbitration proceedings.",
    desc:  "Representing clients in civil and commercial disputes, arbitration, and enforcement proceedings across jurisdictions. Our litigators combine rigorous strategy with efficient resolution across forums including DIFC and ICC.",
    img: imgLitig,
  },
];

type CaseFileItem = typeof CASE_FILE_ITEMS[0];

function FolderTab({ item, isOpen, onClick }: { item: CaseFileItem; isOpen: boolean; onClick: () => void }) {
  const [hovering, setHovering] = useState(false);
  const lifted = isOpen || hovering;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      data-testid={`case-file-tab-${item.num}`}
      style={{
        flexShrink: 0,
        width: 280,
        background: lifted ? "#FCFCFC" : "#F9F9F9",
        border: `1px solid ${isOpen ? "#4A58AA" : hovering ? "rgba(74,88,170,0.45)" : "rgba(132,132,132,0.2)"}`,
        boxShadow: lifted
          ? "0 8px 28px rgba(0,20,137,0.13), 0 2px 8px rgba(0,20,137,0.06)"
          : "0 2px 8px rgba(0,20,137,0.06), 0 1px 3px rgba(0,20,137,0.03)",
        transform: lifted ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease",
        cursor: "pointer",
        textAlign: "left",
        padding: "28px 24px 22px",
        position: "relative",
        outline: "none",
      }}
    >
      {/* Tab notch accent at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 20,
          width: 56,
          height: 3,
          background: isOpen ? "#4A58AA" : hovering ? "rgba(74,88,170,0.45)" : "rgba(74,88,170,0.15)",
          transition: "background 0.22s ease",
        }}
      />

      {/* Gold foil number */}
      <span
        style={{
          display: "block",
          color: isOpen || hovering ? "#4A58AA" : "rgba(74,88,170,0.6)",
          fontSize: 11,
          fontFamily: "'Satoshi', 'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.22em",
          marginBottom: 14,
          marginTop: 6,
          transition: "color 0.22s ease",
        }}
      >
        {item.num}
      </span>

      {/* Practice area name */}
      <h3
        className="font-heading"
        style={{
          color: "#001489",
          fontWeight: 700,
          fontSize: "clamp(0.88rem, 1.05vw, 1rem)",
          lineHeight: 1.35,
          marginBottom: 10,
        }}
      >
        {item.title}
      </h3>

      {/* One-liner brief */}
      <p
        style={{
          color: "#848484",
          fontSize: "0.775rem",
          lineHeight: 1.65,
        }}
      >
        {item.brief}
      </p>

      {/* Active bottom bar */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "#4A58AA",
          }}
        />
      )}
    </button>
  );
}

function CaseFileStripV18() {
  const [open, setOpen] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollStrip(dir: number) {
    scrollRef.current?.scrollBy({ left: dir * 310, behavior: "smooth" });
  }

  function toggle(i: number) {
    setOpen(prev => (prev === i ? null : i));
  }

  const activeItem = open !== null ? CASE_FILE_ITEMS[open] : null;

  return (
    <section
      id="expertise"
      data-testid="practice-areas-section"
      className="py-24 overflow-hidden"
      style={{ background: "#F9F9F9" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 w-full">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="uppercase font-medium mb-3"
            style={{ color: "#4A58AA", fontSize: 16, letterSpacing: "0.3em", paddingLeft: "calc(3px + 1rem)" }}
          >
            Our Expertise
          </p>
          <h2
            className="font-heading font-semibold text-[#001489] leading-[1.25]"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.375rem)", paddingLeft: "calc(3px + 1rem)" }}
          >
            Areas of Practice
          </h2>
        </motion.div>

        {/* Strip + arrow buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Left arrow */}
          <button
            aria-label="Scroll left"
            onClick={() => scrollStrip(-1)}
            data-testid="strip-scroll-left"
            className="hidden md:flex absolute z-10 w-10 h-10 items-center justify-center"
            style={{
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              background: "#001489",
              borderRadius: "50%",
              boxShadow: "0 2px 12px rgba(0,20,137,0.22)",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#192B94")}
            onMouseLeave={e => (e.currentTarget.style.background = "#001489")}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
              <path d="M9 2L4 7l5 5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Scrollable strip */}
          <div
            ref={scrollRef}
            className="flex gap-4 pb-3"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {CASE_FILE_ITEMS.map((item, i) => (
              <FolderTab
                key={i}
                item={item}
                isOpen={open === i}
                onClick={() => toggle(i)}
              />
            ))}
            <div style={{ flexShrink: 0, width: 4 }} />
          </div>

          {/* Right arrow */}
          <button
            aria-label="Scroll right"
            onClick={() => scrollStrip(1)}
            data-testid="strip-scroll-right"
            className="hidden md:flex absolute z-10 w-10 h-10 items-center justify-center"
            style={{
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              background: "#001489",
              borderRadius: "50%",
              boxShadow: "0 2px 12px rgba(0,20,137,0.22)",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#192B94")}
            onMouseLeave={e => (e.currentTarget.style.background = "#001489")}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
              <path d="M5 2l5 5-5 5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>

        {/* Expanded panel — slides down below the strip */}
        <AnimatePresence>
          {open !== null && activeItem && (
            <motion.div
              key={`panel-${open}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div
                data-testid="case-file-panel"
                className="grid grid-cols-1 md:grid-cols-[1fr_300px]"
                style={{
                  background: "#001489",
                  borderTop: "2px solid #4A58AA",
                }}
              >
                {/* Text content */}
                <div style={{ padding: "48px 48px 52px" }}>
                  <span
                    style={{
                      display: "block",
                      color: "rgba(255,255,255,0.65)",
                      fontSize: 10,
                      fontFamily: "'Satoshi', 'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.26em",
                      marginBottom: 18,
                      textTransform: "uppercase",
                    }}
                  >
                    {activeItem.num} — {activeItem.tag}
                  </span>
                  <h3
                    className="font-heading font-bold text-white mb-6"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: 1.15 }}
                  >
                    {activeItem.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.62)",
                      fontSize: "clamp(0.875rem, 1vw, 1rem)",
                      lineHeight: 1.8,
                      maxWidth: 520,
                      marginBottom: 40,
                    }}
                  >
                    {activeItem.desc}
                  </p>
                  <a
                    href="#contact"
                    data-testid="case-file-enquire-cta"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      color: "rgba(255,255,255,0.85)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.3)",
                      paddingBottom: 2,
                    }}
                  >
                    Enquire About This Area
                    <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

                {/* Panel image */}
                <div
                  className="hidden md:block relative overflow-hidden"
                  style={{ minHeight: 280 }}
                >
                  <img
                    src={activeItem.img}
                    alt={activeItem.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.5,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to right, #001489 0%, transparent 45%)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

/* ─── CONTACT ────────────────────────────────────────────────────────────── */

function ContactFormV15() {
  const { t } = useLang();
  const c = t.contact;
  const f = t.footer;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      data-header-theme="light"
      data-testid="contact-section"
      className="v2-snap-section"
      style={{ background: "#FFFFFF", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 w-full" style={{ paddingTop: 80, paddingBottom: 80 }}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: 88 }}
        >
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#4A58AA",
            marginBottom: 20,
          }}>
            {c.eyebrow}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-20 items-end">
            <h2
              className="font-heading font-bold"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)", lineHeight: 1.06, letterSpacing: "-0.03em", color: "#001489" }}
            >
              {c.headline}
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(0,0,0,0.50)", fontSize: 15, lineHeight: 1.78, maxWidth: 440 }}>
              {c.subtext}
            </p>
          </div>
        </motion.div>

        {/* ── Form + offices ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-[7fr_4fr]"
          style={{ borderTop: "1px solid rgba(0,20,137,0.10)" }}
        >
          {/* ── Form — blue boxes ── */}
          <div style={{ paddingTop: 48, paddingRight: "clamp(0px, 5vw, 72px)", paddingBottom: 0 }}>
            {submitted ? (
              <motion.div
                data-testid="contact-success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-5"
                style={{ minHeight: 360, justifyContent: "center" }}
              >
                <div style={{ width: 52, height: 52, background: "#001489", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 20 20">
                    <path d="M4 10l4 4 8-8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold" style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", color: "#001489" }}>
                  {c.successTitle}
                </h3>
                <p style={{ color: "rgba(0,0,0,0.50)", fontSize: 14, lineHeight: 1.72 }}>{c.successText}</p>
              </motion.div>
            ) : (
              <div className="w-full">
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#4A58AA", fontSize: 18, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 32 }}>
                  Send a Message
                </p>
                <form onSubmit={handleSubmit} data-testid="contact-form" className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder={c.namePlaceholder} data-testid="input-name"
                      style={{ background: "#FFFFFF", border: "1px solid rgba(0,20,137,0.18)", color: "#0A0A1A", padding: "13px 16px", fontSize: 14, outline: "none", transition: "border-color 0.2s", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      className="placeholder-[rgba(0,0,0,0.30)]"
                      onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#001489"}
                      onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,20,137,0.18)"}
                    />
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder={c.emailPlaceholder} data-testid="input-email"
                      style={{ background: "#FFFFFF", border: "1px solid rgba(0,20,137,0.18)", color: "#0A0A1A", padding: "13px 16px", fontSize: 14, outline: "none", transition: "border-color 0.2s", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      className="placeholder-[rgba(0,0,0,0.30)]"
                      onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#001489"}
                      onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,20,137,0.18)"}
                    />
                  </div>
                  <div className="relative">
                    <select
                      name="subject" required value={form.subject} onChange={handleChange}
                      data-testid="select-subject"
                      style={{ width: "100%", background: "#FFFFFF", border: "1px solid rgba(0,20,137,0.18)", color: form.subject ? "#0A0A1A" : "rgba(0,0,0,0.30)", padding: "13px 40px 13px 16px", fontSize: 14, outline: "none", appearance: "none", cursor: "pointer", transition: "border-color 0.2s", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#001489"}
                      onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,20,137,0.18)"}
                    >
                      <option value="" disabled hidden>{c.subjectPlaceholder}</option>
                      {c.subjectOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3" style={{ color: "rgba(0,20,137,0.40)" }} fill="none" viewBox="0 0 12 12">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <textarea
                    name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder={c.messagePlaceholder} data-testid="input-message"
                    style={{ background: "#FFFFFF", border: "1px solid rgba(0,20,137,0.18)", color: "#0A0A1A", padding: "13px 16px", fontSize: 14, outline: "none", resize: "none", transition: "border-color 0.2s", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="placeholder-[rgba(0,0,0,0.30)]"
                    onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#001489"}
                    onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,20,137,0.18)"}
                  />
                  <div className="flex items-center gap-6 mt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      data-testid="button-submit"
                      style={{
                        background: "#001489",
                        color: "#FFFFFF",
                        border: "none",
                        padding: "15px 40px",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        cursor: submitting ? "not-allowed" : "pointer",
                        opacity: submitting ? 0.6 : 1,
                        transition: "opacity 0.2s, background 0.2s",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                      onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLElement).style.background = "#0019A8"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#001489"; }}
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2.5">
                          <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
                            <path d="M8 2a6 6 0 016 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                          {c.submitting}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2.5">
                          {c.submit}
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                          </svg>
                        </span>
                      )}
                    </button>
                    <p style={{ color: "rgba(0,0,0,0.35)", fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Typically replies within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* ── Offices — right column ── */}
          <div
            style={{
              paddingTop: 48,
              paddingLeft: "clamp(24px, 4vw, 56px)",
              borderLeft: "1px solid rgba(0,20,137,0.10)",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#4A58AA", fontSize: 18, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 32 }}>
              {c.officeLabel}
            </p>

            {/* Dubai */}
            <div style={{ marginBottom: 32 }}>
              <p className="font-heading font-semibold" style={{ fontSize: 14, color: "#001489", marginBottom: 10 }}>
                {c.dubaiLabel}
              </p>
              {f.dubaiAddr.map((line, i) => (
                <p key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#000000", fontSize: 13, lineHeight: 1.7 }}>{line}</p>
              ))}
              <a
                href="tel:+97145232421"
                data-testid="contact-address-phone-dubai"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#001489", fontSize: 13, textDecoration: "none", display: "inline-block", marginTop: 6 }}
              >
                +971 4 523 2421
              </a>
            </div>

            <div style={{ height: 1, background: "rgba(0,20,137,0.08)", marginBottom: 32 }} />

            {/* Paris */}
            <div style={{ marginBottom: 32 }}>
              <p className="font-heading font-semibold" style={{ fontSize: 14, color: "#001489", marginBottom: 10 }}>
                {c.parisLabel}
              </p>
              {f.parisAddr.map((line, i) => (
                <p key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#000000", fontSize: 13, lineHeight: 1.7 }}>{line}</p>
              ))}
              <a
                href="tel:+33180270067"
                data-testid="contact-address-phone-paris"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#001489", fontSize: 13, textDecoration: "none", display: "inline-block", marginTop: 6 }}
              >
                +33 1 80 27 00 67
              </a>
            </div>

            <div style={{ height: 1, background: "rgba(0,20,137,0.08)", marginBottom: 24 }} />

            {/* Email */}
            <div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#4A58AA", fontSize: 18, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 8 }}>
                Email
              </p>
              <a
                href={`mailto:${f.email}`}
                data-testid="contact-email"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#001489", fontSize: 14, textDecoration: "none" }}
              >
                {f.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────────────────── */

function FooterV15() {
  const { t } = useLang();
  const f = t.footer;
  const navEntries = [
    { label: t.nav.home,      href: "#home" },
    { label: t.nav.firm,      href: "#firm" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.insights,  href: "#insights" },
    { label: t.nav.careers,   href: "#careers" },
    { label: t.nav.contact,   href: "#contact" },
  ];

  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const fmtTime = (tz: string) =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now);

  const dubaiTime = fmtTime("Asia/Dubai");
  const parisTime = fmtTime("Europe/Paris");

  return (
    <footer id="footer" data-testid="footer" className="v2-snap-end" style={{ background: "#001489", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* ── Motto whisper — very top ── */}
      <div className="max-w-[1400px] mx-auto px-8" style={{ paddingTop: 40, paddingBottom: 36, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.50em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          textAlign: "center",
        }}>
          Reason&ensp;·&ensp;Rigor&ensp;·&ensp;Resolution
        </p>
      </div>

      {/* ── Main band: wordmark · nav · contact ── */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12"
          style={{ paddingTop: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Wordmark */}
          <img
            src={miltonHobbsWordmark}
            alt="Milton Hobbs"
            style={{
              width: "clamp(110px, 12vw, 148px)",
              height: "auto",
              filter: "brightness(0) invert(1)",
              opacity: 1,
              display: "block",
              flexShrink: 0,
            }}
          />

          {/* Inline nav */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {navEntries.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "#FFFFFF",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact cluster */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:flex-shrink-0">
            <a
              href={`mailto:${f.email}`}
              data-testid="footer-email"
              style={{ color: "#FFFFFF", fontSize: 12, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {f.email}
            </a>
            <span style={{ width: 1, height: 12, background: "rgba(255,255,255,0.30)", flexShrink: 0 }} />
            <a
              href={`tel:${f.phone}`}
              data-testid="footer-phone-dubai"
              style={{ color: "#FFFFFF", fontSize: 12, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {f.phone}
            </a>
            <a
              href="tel:+33180270067"
              data-testid="footer-phone-paris"
              style={{ color: "#FFFFFF", fontSize: 12, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              +33 1 80 27 00 67
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom band: clocks · copyright · legal ── */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ padding: "16px 0 18px" }}
        >
          {/* Live clocks */}
          <div className="flex items-center gap-5">
            {[
              { label: "Dubai", time: dubaiTime, dot: "#7A84BE" },
              { label: "Paris", time: parisTime, dot: "#4A58AA" },
            ].map((o, i) => (
              <div key={o.label} className="flex items-center gap-2">
                {i > 0 && <span style={{ width: 1, height: 10, background: "rgba(255,255,255,0.30)", marginRight: 6 }} />}
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: o.dot, flexShrink: 0 }} />
                <span style={{ color: "#FFFFFF", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{o.label}</span>
                <span style={{ color: "#FFFFFF", fontSize: 11, fontFamily: "'Plus Jakarta Sans', monospace", letterSpacing: "0.04em", minWidth: "6ch" }}>{o.time}</span>
              </div>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span style={{ color: "#FFFFFF", fontSize: 10 }}>{f.copyright}</span>
            <a href="#" style={{ color: "#FFFFFF", fontSize: 10, textDecoration: "none" }}>{f.privacy}</a>
            <a href="#" style={{ color: "#FFFFFF", fontSize: 10, textDecoration: "none" }}>{f.cookie}</a>
          </div>
        </div>

        <p
          data-testid="footer-disclaimer"
          style={{ color: "rgba(255,255,255,0.35)", fontSize: 9, lineHeight: 1.6, paddingBottom: 18, maxWidth: "85ch" }}
        >
          {f.disclaimer}
        </p>
      </div>
    </footer>
  );
}

/* ─── PRACTICE AREAS ────────────────────────────────────────────────────── */

const EXPERTISE_ITEMS_V18 = [
  { num: "01", short: "Corporate",   title: "Corporate & Commercial",             desc: "Structuring complex transactions, joint ventures, and commercial agreements for businesses operating across borders and sectors.",                               img: imgCorp   },
  { num: "02", short: "Tax",         title: "Tax & Compliance",                   desc: "Strategic international tax planning, regulatory compliance frameworks, and risk mitigation for corporations and high-net-worth individuals.",                    img: imgTax    },
  { num: "03", short: "M&A",         title: "Mergers & Acquisitions",             desc: "End-to-end advisory on M&A transactions, due diligence, valuations, and seamless post-merger integration across sectors.",                                      img: imgBank   },
  { num: "04", short: "Startups",    title: "Startups & Venture Capital",         desc: "Funding rounds, term sheets, shareholder agreements, and robust legal infrastructure for founders, operators, and investors.",                                  img: imgTech   },
  { num: "05", short: "IP & Tech",   title: "Intellectual Property & Technology", desc: "Patent strategy, trademark registration, licensing structures, and data protection compliance across jurisdictions.",                                          img: imgIp     },
  { num: "06", short: "Real Estate", title: "Real Estate & Property Law",         desc: "Cross-border property acquisitions, development financing, and sophisticated real estate structuring in the UAE and Europe.",                                   img: imgEstate },
  { num: "07", short: "Employment",  title: "Employment & Labor Law",             desc: "Employment contracts, executive compensation structures, workforce restructuring, and workplace dispute resolution.",                                           img: imgEmploy },
  { num: "08", short: "Litigation",  title: "Litigation & Dispute Resolution",    desc: "Strategic advocacy in commercial litigation, DIFC arbitration, and international dispute proceedings across forums.",                                          img: imgLitig  },
];

const PRACTICE_CYCLE_MS = 5000;

function PracticeAreasV18() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % EXPERTISE_ITEMS_V18.length);
    }, PRACTICE_CYCLE_MS);
    return () => clearInterval(timer);
  }, [active, paused]);

  return (
    <section
      id="expertise"
      data-testid="practice-areas-section"
      data-header-theme="dark"
      className="v2-snap-section"
      style={{ background: "#001489", position: "relative", overflow: "hidden" }}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── DESKTOP: Vertical photo accordion ── */}
      <div
        className="hidden lg:flex"
        style={{ height: "100dvh", minHeight: 600, flexDirection: "column" }}
      >
        {/* Section header — white strip above accordion */}
        <div
          style={{
            paddingTop: 92,
            paddingBottom: 40,
            paddingLeft: 52,
            paddingRight: 52,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexShrink: 0,
            background: "#FFFFFF",
            borderBottom: "1px solid rgba(0,20,137,0.08)",
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "#4A58AA",
              marginBottom: 14,
            }}>
              Our Expertise
            </p>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.06, letterSpacing: "-0.03em", color: "#001489" }}
            >
              Practice Areas.
            </h2>
          </div>
          {/* Counter + dot nav */}
          <div className="flex items-center gap-4">
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(0,20,137,0.28)", letterSpacing: "0.06em" }}>
              {String(active + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(EXPERTISE_ITEMS_V18.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1.5">
              {EXPERTISE_ITEMS_V18.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setPaused(true); }}
                  style={{ width: active === i ? 20 : 5, height: 2, background: active === i ? "#001489" : "rgba(0,20,137,0.18)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Panels row — fills remaining height */}
        <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
          {EXPERTISE_ITEMS_V18.map((item, i) => {
            const isActive = active === i;
            return (
              <div
                key={i}
                data-testid={`expertise-item-${i}`}
                onMouseEnter={() => { setActive(i); setPaused(true); }}
                onClick={() => { setActive(i); setPaused(true); }}
                style={{
                  flex: isActive ? 5 : 0.65,
                  transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  borderRight: i < EXPERTISE_ITEMS_V18.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  background: "#001489",
                }}
              >
                {/* Photo — renders normally, no blend mode */}
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isActive ? "scale(1.04)" : "scale(1)",
                  }}
                />

                {/* Solid #001489 multiply layer — exact Photoshop equivalent */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "#001489",
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                }} />

                {/* Bottom gradient for text legibility — sits above multiply layer */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: isActive
                    ? "linear-gradient(to bottom, transparent 30%, rgba(0,0,20,0.68) 60%, rgba(0,0,20,0.90) 100%)"
                    : "linear-gradient(to bottom, transparent 20%, rgba(0,0,20,0.72) 100%)",
                  transition: "background 0.5s ease",
                  pointerEvents: "none",
                }} />

                {/* Progress bar — bottom of active panel */}
                {isActive && (
                  <motion.div
                    key={`pa-prog-${active}`}
                    style={{ position: "absolute", bottom: 0, left: 0, height: 2, background: "rgba(255,255,255,0.40)", zIndex: 3 }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: PRACTICE_CYCLE_MS / 1000, ease: "linear" }}
                  />
                )}

                {/* COLLAPSED LABEL — vertical rotated text, bottom-center */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      style={{
                        position: "absolute",
                        bottom: 28,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 10,
                        zIndex: 2,
                      }}
                    >
                      <span style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 8,
                        fontWeight: 700,
                        letterSpacing: "0.30em",
                        color: "rgba(255,255,255,0.38)",
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}>
                        {item.num}
                      </span>
                      <span
                        className="font-heading font-bold"
                        style={{
                          fontSize: "0.72rem",
                          color: "rgba(255,255,255,0.55)",
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          whiteSpace: "nowrap",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {item.short}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* EXPANDED CONTENT — bottom-anchored */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "36px 32px 40px",
                        zIndex: 2,
                      }}
                    >
                      {/* Number */}
                      <p style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 8,
                        fontWeight: 700,
                        letterSpacing: "0.34em",
                        textTransform: "uppercase",
                        color: "#7A84BE",
                        marginBottom: 10,
                      }}>
                        {item.num}
                      </p>

                      {/* Title */}
                      <h3
                        className="font-heading font-bold"
                        style={{
                          fontSize: "clamp(1.15rem, 1.6vw, 1.6rem)",
                          lineHeight: 1.12,
                          letterSpacing: "-0.02em",
                          color: "#FFFFFF",
                          marginBottom: 18,
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Thin rule */}
                      <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.22)", marginBottom: 18 }} />

                      {/* Description */}
                      <p style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: "rgba(255,255,255,0.62)",
                        fontSize: 13,
                        lineHeight: 1.75,
                        marginBottom: 24,
                        maxWidth: "26ch",
                      }}>
                        {item.desc}
                      </p>

                      {/* Enquire CTA */}
                      <a
                        href="#contact"
                        data-testid={`expertise-enquire-${i}`}
                        className="inline-flex items-center gap-2"
                        style={{
                          color: "#FFFFFF",
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: "0.26em",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          border: "1px solid #FFFFFF",
                          padding: "11px 20px",
                          background: "transparent",
                          transition: "background 0.25s, color 0.25s",
                          display: "inline-flex",
                        }}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = "#FFFFFF";
                          el.style.color = "#001489";
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = "transparent";
                          el.style.color = "#FFFFFF";
                        }}
                      >
                        Enquire
                        <svg width="10" height="10" fill="none" viewBox="0 0 14 14">
                          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE: Stacked photo rows ── */}
      <div className="lg:hidden" style={{ paddingTop: 88 }}>
        {/* Header */}
        <div style={{ padding: "0 24px 40px" }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.40em", textTransform: "uppercase", color: "#7A84BE", marginBottom: 14 }}>
            Our Expertise
          </p>
          <h2 className="font-heading font-bold" style={{ fontSize: "clamp(1.75rem, 7vw, 2.25rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#FFFFFF" }}>
            Practice Areas.
          </h2>
        </div>

        {EXPERTISE_ITEMS_V18.map((item, i) => {
          const isActive = active === i;
          return (
            <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <button
                onClick={() => { setActive(isActive ? -1 : i); setPaused(true); }}
                data-testid={`expertise-item-${i}`}
                style={{
                  width: "100%",
                  height: 200,
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "none",
                  background: "#001489",
                  display: "block",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "#001489", mixBlendMode: "multiply" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,20,0.75) 0%, transparent 100%)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 24px", gap: 16 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.28em", color: "#7A84BE", flexShrink: 0 }}>
                    {item.num}
                  </span>
                  <span className="font-heading font-bold" style={{ fontSize: "clamp(1rem, 4vw, 1.25rem)", color: "#FFFFFF", flex: 1, textAlign: "left", lineHeight: 1.2 }}>
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.28 }}
                    style={{ flexShrink: 0 }}
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                      <path d="M9 3v12M3 9h12" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "20px 24px 28px" }}>
                      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.60)", fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
                        {item.desc}
                      </p>
                      <a
                        href="#contact"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          color: "#FFFFFF", fontSize: 9, fontWeight: 700,
                          letterSpacing: "0.26em", textTransform: "uppercase",
                          textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif",
                          border: "1px solid #FFFFFF", padding: "11px 20px",
                          background: "transparent", transition: "background 0.25s, color 0.25s",
                        }}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = "#FFFFFF";
                          el.style.color = "#001489";
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = "transparent";
                          el.style.color = "#FFFFFF";
                        }}
                      >
                        Enquire
                        <svg width="10" height="10" fill="none" viewBox="0 0 14 14">
                          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

function HomeV2Point2Inner() {
  return (
    <div className="bg-[#FCFCFC] min-h-screen v2-snap-container" data-testid="home-v1-5-page">
      <HeaderV15 />
      <main>
        <HeroV15 />
        <DifferentiatorsV15 />
        <PracticeAreasV18 />
        <ContactFormV15 />
      </main>
      <FooterV15 />
    </div>
  );
}

export default function HomeV2Point2() {
  return (
    <LanguageProvider>
      <HomeV2Point2Inner />
    </LanguageProvider>
  );
}
