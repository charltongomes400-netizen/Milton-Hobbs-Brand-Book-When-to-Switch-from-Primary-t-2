import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";
import miltonHobbsLogo from "@assets/Milton_hobbs_logo_1775554832004.png";
import miltonHobbsWordmark from "@assets/image_1776101259071.png";
import imgCorp   from "@assets/stock_images/corporate_commercial.jpg";
import imgTax    from "@assets/stock_images/tax_planning.jpg";
import imgBank   from "@assets/stock_images/banking_finance.jpg";
import imgTech   from "@assets/stock_images/technology_startups.jpg";
import imgIp     from "@assets/stock_images/intellectual_property.jpg";
import imgEstate from "@assets/stock_images/real_estate.jpg";
import imgEmploy from "@assets/stock_images/employment.jpg";
import imgLitig  from "@assets/stock_images/litigation.jpg";
import heroBg0 from "@assets/verne-ho-0LAJfSNa-xQ-unsplash_1775562755413.jpg";
import heroBg1 from "@assets/tim-stief-dH6IjhWHNQQ-unsplash_1775562755413.jpg";
import heroBg2 from "@assets/joakim-nadell-K67sBVqLLuw-unsplash_1775562755414.jpg";
import heroBg3 from "@assets/maarten-deckers-T5nXYXCf50I-unsplash_1775562755414.jpg";
import heroBg4 from "@assets/anders-jilden-Sc5RKXLBjGg-unsplash_1775562755415.jpg";

const HERO_BG_IMAGES = [heroBg0, heroBg1, heroBg2, heroBg3, heroBg4];

/* ─── HEADER ────────────────────────────────────────────────────────────── */

function HeaderV15() {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 20);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

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

  return (
    <motion.header
      data-testid="header"
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E8EDF5",
        boxShadow: scrolled ? "0 2px 20px rgba(0,20,137,0.06)" : "none",
        transition: "box-shadow 0.35s ease",
      }}
    >
      {/* Brand accent line — top edge */}
      <div className="absolute top-0 left-0 right-0" style={{ height: 3, background: "#001489" }} />
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between" style={{ height: 80 }}>

        {/* Logo */}
        <a href="#home" data-testid="logo" className="shrink-0">
          <img src={miltonHobbsLogo} alt="Milton Hobbs" className="h-16 w-auto block" />
        </a>

        {/* Desktop nav — main links */}
        <nav data-testid="nav-desktop" className="hidden lg:flex items-center gap-8 xl:gap-10">
          {mainLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.href.replace(/[#/]/g, "")}`}
              className="relative whitespace-nowrap"
              style={{
                color: "rgba(0,20,137,0.60)",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#001489")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,20,137,0.60)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Contact CTA + Language */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">

          {/* Contact — filled button */}
          <a
            href={contactLink.href}
            data-testid="nav-link-contact"
            className="inline-flex items-center gap-2 text-white"
            style={{
              background: "#001489",
              padding: "10px 24px",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#192B94"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#001489"}
          >
            {contactLink.label}
          </a>

          {/* Language toggle — plain text */}
          <div
            data-testid="lang-toggle"
            className="flex items-center"
            style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.04em" }}
          >
            <button
              onClick={() => setLang("EN")}
              data-testid="lang-en"
              className="transition-colors duration-200"
              style={{ color: lang === "EN" ? "#001489" : "rgba(0,20,137,0.28)" }}
            >
              EN
            </button>
            <span style={{ color: "rgba(0,20,137,0.18)", margin: "0 7px", fontWeight: 300, fontSize: 12 }}>|</span>
            <button
              onClick={() => setLang("FR")}
              data-testid="lang-fr"
              className="transition-colors duration-200"
              style={{ color: lang === "FR" ? "#001489" : "rgba(0,20,137,0.28)" }}
            >
              FR
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col gap-[5px] w-6 p-1 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block h-px bg-[#001489] transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block h-px bg-[#001489] transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-px bg-[#001489] transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
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
            style={{ background: "#FFFFFF", borderTop: "1px solid #E8EDF5" }}
          >
            <div className="px-8 py-7 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: "#001489",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center pt-2" style={{ borderTop: "1px solid #E8EDF5" }}>
                <button
                  onClick={() => setLang("EN")}
                  style={{
                    color: lang === "EN" ? "#001489" : "rgba(0,20,137,0.30)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    transition: "color 0.2s",
                  }}
                >EN</button>
                <span style={{ color: "rgba(0,20,137,0.18)", margin: "0 8px", fontSize: 14, fontWeight: 300 }}>|</span>
                <button
                  onClick={() => setLang("FR")}
                  style={{
                    color: lang === "FR" ? "#001489" : "rgba(0,20,137,0.30)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    transition: "color 0.2s",
                  }}
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

const TILE_SZ = 150; // px — uniform 150×150px squares (50% bigger)

// ── Strict 5×5 grid ──────────────────────────────────────────────────────────
// Column step ≈ 11.5% (≈ 165px at 1440px wide)
// Row step    ≈ 18%   (≈ 162px at 900px tall)
// Each tile occupies exactly one cell — zero overlaps.
const GRID_COLS = [38, 49.5, 61, 72.5, 84];     // % left values for C0–C4
const GRID_ROWS = [4,  22,   40, 58,   76];      // % top  values for R0–R4

// (colIdx, rowIdx, color, duration, delay)
// Cells chosen so no two tiles share a row+col position:
const TILE_DEFS: [number, number, string, number, number][] = [
  [0, 0, "#001489", 22.0,  0.0],  // C0·R0 — isolated upper-left
  [3, 0, "#001050", 24.0,  6.0],  // C3·R0 — top-right solo
  [2, 1, "#001489", 20.0,  3.0],  // C2·R1 — upper-mid
  [3, 1, "#001050", 23.0,  9.0],  // C3·R1 — adjacent right of above
  [4, 2, "#001489", 21.0,  5.0],  // C4·R2 — far-right mid
  [1, 2, "#001050", 26.0, 12.0],  // C1·R2 — left-mid
  [1, 3, "#001489", 22.0, 14.0],  // C1·R3 — vertical pair with above
  [3, 3, "#001050", 20.0,  7.0],  // C3·R3 — right-mid lower
  [4, 4, "#001489", 24.0,  2.0],  // C4·R4 — bottom-right
];

const ACCENT_TILES = TILE_DEFS.map(([ci, ri, col, dur, delay]) => ({
  left:  `${GRID_COLS[ci]}%`,
  top:   `${GRID_ROWS[ri]}%`,
  col,
  dur,
  delay,
}));


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

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#001489" }}
    >
      {/* ── Full-bleed architectural photo — multiply blend over #001489 ── */}
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

      {/* ── Grid-aligned accent tiles — uniform squares, fade in/hold/fade out ── */}
      {ACCENT_TILES.map((tile, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left:            tile.left,
            top:             tile.top,
            width:           TILE_SZ,
            height:          TILE_SZ,
            backgroundColor: tile.col,
          }}
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{
            duration: tile.dur,
            delay:    tile.delay,
            repeat:   Infinity,
            ease:     "easeInOut",
            times:    [0, 0.15, 0.40, 0.60, 0.85, 1],
          }}
        />
      ))}

      {/* ── Bottom-left content gradient for legibility ─────────────────── */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "70%",
          background: "linear-gradient(to top, rgba(0,14,80,0.80) 0%, rgba(0,14,80,0.40) 45%, transparent 100%)",
        }}
      />

      {/* ── Left accent line ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute left-8 xl:left-14 top-0 bottom-0 z-10 pointer-events-none"
        style={{ width: 1, background: "rgba(255,255,255,0.10)" }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      />

      {/* ── Article counter — top-right ───────────────────────────────────── */}
      <motion.div
        className="absolute top-28 right-12 xl:right-24 z-10 flex items-center gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.45 }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            {String(currentIndex + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
        <div style={{ width: 22, height: 1, background: "rgba(255,255,255,0.22)" }} />
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
          color: "rgba(255,255,255,0.22)",
        }}>
          {String(ins.articles.length).padStart(2, "0")}
        </span>
      </motion.div>

      {/* ── Ghost watermark numeral ───────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`ghost-${currentIndex}`}
          className="absolute right-0 bottom-0 pointer-events-none z-[1] select-none"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(14rem, 30vw, 28rem)",
            lineHeight: 0.82,
            color: "rgba(255,255,255,0.035)",
            letterSpacing: "-0.05em",
            userSelect: "none",
            paddingRight: "2vw",
            paddingBottom: "1rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8 }}
        >
          {String(currentIndex + 1).padStart(2, "0")}
        </motion.div>
      </AnimatePresence>

      {/* ── Main editorial content ────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col min-h-screen pl-16 xl:pl-28 pr-12 xl:pr-24 pt-28 pb-16">

        {/* Spacer to push content toward bottom */}
        <div className="flex-1" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Category row — tick + label + horizontal rule */}
            <div className="flex items-center gap-4 mb-8" data-testid="hero-eyebrow">
              <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.35)", flexShrink: 0 }} />
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(255,255,255,0.45)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.34em",
                textTransform: "uppercase",
              }}>
                {featuredArticle?.category}
              </p>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.10)", maxWidth: 120 }} />
            </div>

            {/* Headline — spans wide, tight leading */}
            <h1
              className="font-heading text-white font-bold"
              style={{
                fontSize: "clamp(2.75rem, 6.5vw, 5.75rem)",
                lineHeight: 0.97,
                letterSpacing: "-0.025em",
                maxWidth: "15ch",
                marginBottom: "2.75rem",
              }}
              data-testid="hero-headline"
            >
              {featuredArticle?.title}
            </h1>

            {/* CTA — circle arrow button + label */}
            <a
              href={`/insights/${featuredSlug}`}
              data-testid="hero-read-link"
              className="group inline-flex items-center gap-4"
              style={{ textDecoration: "none" }}
            >
              <motion.span
                className="flex items-center justify-center"
                style={{
                  width: 44,
                  height: 44,
                  border: "1px solid rgba(255,255,255,0.30)",
                  borderRadius: "50%",
                  flexShrink: 0,
                  transition: "border-color 0.25s, background 0.25s",
                }}
                whileHover={{ scale: 1.08 }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.75)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.30)";
                  (e.currentTarget as HTMLElement).style.background = "";
                }}
              >
                <svg
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                  width="13" height="13" fill="none" viewBox="0 0 12 12"
                >
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.4" />
                </svg>
              </motion.span>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(255,255,255,0.55)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                transition: "color 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
              >
                {ins.read}
              </span>
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Bottom bar — dots left, thin rule right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex items-center gap-6 mt-12"
          data-testid="hero-dots"
        >
          <div className="flex items-center gap-2">
            {ins.articles.map((_, i) => (
              <button
                key={i}
                data-testid={`hero-dot-${i}`}
                onClick={() => goTo(i)}
                aria-label={`Article ${i + 1}`}
                className="block focus:outline-none cursor-pointer transition-all duration-300"
                style={{
                  width:           i === currentIndex ? 28 : 8,
                  height:          2,
                  backgroundColor: i === currentIndex ? "#FFFFFF" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
        </motion.div>
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
            stroke="rgba(255,255,255,1)" strokeWidth={1}
            animate={{ strokeOpacity: [0.1, 0.5, 0.1] }}
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
            fill="rgba(255,255,255,1)" fillOpacity={0.5}
            animate={{ fillOpacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={outerR} stroke="rgba(255,255,255,1)" strokeOpacity={0.15} strokeWidth={1} fill="none" />
      <circle cx={cx} cy={cy} r={innerR} stroke="rgba(255,255,255,1)" strokeOpacity={0.35} strokeWidth={1} fill="none" />
      <circle cx={cx} cy={cy} r={8} fill="rgba(255,255,255,1)" fillOpacity={0.85} />
      <motion.circle
        cx={cx} cy={cy} r={innerR}
        stroke="rgba(255,255,255,1)" strokeWidth={1} fill="none"
        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
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
          stroke={locked ? "rgba(255,255,255,1)" : "rgba(255,255,255,1)"}
          strokeOpacity={locked ? 0.18 + i * 0.1 : 0.14 + i * 0.08}
          strokeWidth={1}
          style={{ transition: "stroke 0.4s, stroke-opacity 0.4s" }}
        />
      ))}
      <line x1={CX} y1={30} x2={CX} y2={230} stroke="rgba(255,255,255,1)" strokeOpacity={0.18} strokeWidth={1} />
      <line x1={40} y1={CY} x2={280} y2={CY} stroke="rgba(255,255,255,1)" strokeOpacity={0.18} strokeWidth={1} />
      <circle cx={CX} cy={CY} r={4}
        fill={locked ? "rgba(255,255,255,1)" : "rgba(255,255,255,1)"}
        fillOpacity={locked ? 1 : 0.55}
        style={{ transition: "fill 0.3s, fill-opacity 0.3s" }}
      />
      {locked && (
        <AnimatePresence>
          <motion.circle
            key={flashKey}
            cx={CX} cy={CY} r={22}
            stroke="rgba(255,255,255,0.85)" strokeWidth={2} fill="none"
            initial={{ scale: 1, opacity: 0.9 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />
        </AnimatePresence>
      )}
      <motion.g style={{ x: rx, y: ry }}>
        <circle cx={CX} cy={CY} r={22} stroke="rgba(255,255,255,1)" strokeWidth={1.5} fill="none" strokeOpacity={0.7} />
        <path d={`M${CX-22} ${CY-9} L${CX-22} ${CY-22} L${CX-9} ${CY-22}`} stroke="rgba(255,255,255,1)" strokeWidth={1.5} fill="none" strokeOpacity={0.7} />
        <path d={`M${CX+9} ${CY-22} L${CX+22} ${CY-22} L${CX+22} ${CY-9}`} stroke="rgba(255,255,255,1)" strokeWidth={1.5} fill="none" strokeOpacity={0.7} />
        <path d={`M${CX+22} ${CY+9} L${CX+22} ${CY+22} L${CX+9} ${CY+22}`} stroke="rgba(255,255,255,1)" strokeWidth={1.5} fill="none" strokeOpacity={0.7} />
        <path d={`M${CX-9} ${CY+22} L${CX-22} ${CY+22} L${CX-22} ${CY+9}`} stroke="rgba(255,255,255,1)" strokeWidth={1.5} fill="none" strokeOpacity={0.7} />
        <line x1={CX-9} y1={CY} x2={CX+9} y2={CY} stroke="rgba(255,255,255,1)" strokeWidth={1} strokeOpacity={0.5} />
        <line x1={CX} y1={CY-9} x2={CX} y2={CY+9} stroke="rgba(255,255,255,1)" strokeWidth={1} strokeOpacity={0.5} />
      </motion.g>
      {locked && (
        <motion.text
          x={CX + 30} y={CY - 28}
          fill="rgba(255,255,255,0.8)" fontSize="8" fontFamily="'Satoshi', sans-serif" letterSpacing="0.15em"
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
          stroke={i < 2 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,1)"}
          strokeOpacity={i < 2 ? 0.5 : 0.30}
          strokeWidth={i < 2 ? 1.2 : 1}
          strokeDasharray="220"
          animate={{ strokeDashoffset: [220, 0, -220] }}
          transition={{ duration: 3, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={5} fill="rgba(255,255,255,1)" fillOpacity={0.65} />
          <text x={n.cx} y={n.cy + (i < 2 ? -12 : 18)}
            fill="rgba(255,255,255,1)" fillOpacity={0.55} fontSize="8"
            fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle"
          >{n.label}</text>
        </g>
      ))}
      <circle cx={160} cy={130} r={7} fill="rgba(255,255,255,1)" fillOpacity={0.85} />
      <motion.circle
        cx={160} cy={130} r={18}
        stroke="rgba(255,255,255,0.8)" strokeWidth={1} fill="none"
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
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
            stroke={i === rings.length - 1 ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,1)"}
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
        stroke="rgba(255,255,255,0.85)" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d={`M${cx-4} ${cy-4} Q${cx-4} ${cy-11} ${cx} ${cy-11} Q${cx+4} ${cy-11} ${cx+4} ${cy-4}`}
        stroke="rgba(255,255,255,0.85)" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (paused) { setProgress(0); return; }
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / CYCLE_MS) * 100, 100);
      setProgress(pct);
      if (elapsed >= CYCLE_MS) {
        setActive(prev => (prev + 1) % d.cards.length);
        clearInterval(tick);
      }
    }, 30);
    return () => clearInterval(tick);
  }, [active, paused, d.cards.length]);

  return (
    <section
      id="firm"
      data-header-theme="light"
      data-testid="differentiators-section"
      className="py-28 px-8"
      style={{ background: "#FFFFFF", borderTop: "1px solid #E8EDF5" }}
    >
      <div className="max-w-[1400px] mx-auto">

        {/* ── Section heading ── */}
        <h1
          className="font-heading font-bold"
          style={{ color: "#001489", fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", lineHeight: 1.15, marginBottom: 40, paddingLeft: "calc(3px + 1rem)" }}
        >
          Why Miltion Hobbs
        </h1>

        <div
          className="grid grid-cols-1 lg:grid-cols-[45fr_55fr]"
          style={{ minHeight: 580 }}
        >

          {/* ── LEFT: content stack ────────────────────────────────── */}
          <div
            className="flex flex-col justify-between"
            style={{ padding: "56px 56px 52px 0", borderRight: "1px solid #E8EDF5" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Card selector list */}
            <div className="flex flex-col mb-10">
              {d.cards.map((card, i) => (
                <button
                  key={i}
                  data-testid={`diff-card-${i}`}
                  onClick={() => { setActive(i); setPaused(true); setProgress(0); }}
                  className="flex items-center gap-4 py-4 text-left focus:outline-none group"
                  style={{ borderBottom: "1px solid #F0F2F8" }}
                >
                  <motion.span
                    className="flex-shrink-0"
                    style={{ width: 3, alignSelf: "stretch", minHeight: 18, backgroundColor: "rgba(0,0,0,0)" }}
                    animate={{ backgroundColor: i === active ? "#4A58AA" : "rgba(0,0,0,0)" }}
                    transition={{ duration: 0.25 }}
                  />
                  <div className="flex items-center justify-between w-full gap-3">
                    <motion.span
                      className="font-heading font-bold leading-[1.2]"
                      animate={{
                        color: i === active ? "#001489" : "#848484",
                        fontSize: i === active
                          ? "clamp(1.125rem, 1.6vw, 1.375rem)"
                          : "clamp(0.9375rem, 1.3vw, 1.125rem)",
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {card.title}
                    </motion.span>
                    <span
                      style={{
                        flexShrink: 0,
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: i === active ? "#4A58AA" : "#C8CDD8",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active card description + CTA */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <p
                  style={{
                    color: "#595959",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    marginBottom: 28,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {d.cards[active].description}
                </p>
                <a
                  href="#contact"
                  data-testid="diff-cta"
                  className="inline-flex items-center gap-3 text-white text-xs tracking-[0.18em] uppercase font-semibold"
                  style={{ background: "#001489", padding: "13px 28px", textDecoration: "none" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#192B94"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#001489"; }}
                >
                  <span>{d.learnMore}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT: large animated visual panel ─────────────────── */}
          <div
            className="relative overflow-hidden"
            style={{ background: "#001489", minHeight: 480 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Full-bleed SVG animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <DiffVisual index={active} />
              </motion.div>
            </AnimatePresence>

            {/* Progress bar — bottom edge */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ height: 2, background: "rgba(255,255,255,0.10)" }}
            >
              <motion.div
                style={{ height: "100%", width: `${progress}%`, background: "#7A84BE" }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

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
      style={{ background: "#FFFFFF", borderTop: "1px solid rgba(0,20,137,0.07)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr]" style={{ minHeight: 900 }}>

        {/* ── LEFT: White info panel ── */}
        <div
          className="relative overflow-hidden flex flex-col justify-between px-8 pt-36 pb-32"
          style={{
            paddingLeft: "clamp(2rem, calc((100vw - 1400px) / 2 + 3.5rem), 8rem)",
            paddingRight: "clamp(2rem, 4vw, 5rem)",
            borderRight: "1px solid rgba(0,20,137,0.07)",
          }}
        >
          {/* ── Top: eyebrow + headline ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative z-10"
          >
            <p
              className="font-medium uppercase mb-5"
              style={{ color: "#4A58AA", fontSize: 13 }}
            >
              {c.eyebrow}
            </p>
            <h2
              className="font-heading font-bold leading-[1.1] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", color: "#001489" }}
            >
              {c.headline}
            </h2>
            <div style={{ width: 40, height: 1, background: "rgba(0,20,137,0.15)", marginBottom: 24 }} />
            <p
              style={{
                color: "#595959",
                fontSize: 14,
                lineHeight: 1.72,
                maxWidth: "38ch",
              }}
            >
              {c.subtext}
            </p>
          </motion.div>

          {/* ── Bottom: offices + email ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative z-10 mt-12 lg:mt-0"
          >
            <p
              className="font-medium uppercase mb-7"
              style={{ color: "#4A58AA", fontSize: 12 }}
            >
              {c.officeLabel}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {/* Dubai */}
              <div>
                <p
                  className="font-heading font-semibold mb-2"
                  style={{ fontSize: 14, color: "#151515" }}
                >
                  {c.dubaiLabel}
                </p>
                {f.dubaiAddr.map((line, i) => (
                  <p key={i} style={{ color: "#595959", fontSize: 13, lineHeight: 1.6 }}>{line}</p>
                ))}
                <a
                  href="tel:+97145232421"
                  data-testid="contact-address-phone-dubai"
                  style={{
                    color: "#848484",
                    fontSize: 13,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#001489"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#848484"}
                >
                  +971 4 523 2421
                </a>
              </div>

              {/* Paris */}
              <div>
                <p
                  className="font-heading font-semibold mb-2"
                  style={{ fontSize: 14, color: "#151515" }}
                >
                  {c.parisLabel}
                </p>
                {f.parisAddr.map((line, i) => (
                  <p key={i} style={{ color: "#595959", fontSize: 13, lineHeight: 1.6 }}>{line}</p>
                ))}
                <a
                  href="tel:+33180270067"
                  data-testid="contact-address-phone-paris"
                  style={{
                    color: "#848484",
                    fontSize: 13,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#001489"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#848484"}
                >
                  +33 1 80 27 00 67
                </a>
              </div>
            </div>

            <div style={{ width: "100%", height: 1, background: "rgba(0,20,137,0.08)", marginBottom: 20 }} />
            <p className="font-medium uppercase mb-2" style={{ color: "#4A58AA", fontSize: 12 }}>
              Email
            </p>
            <a
              href={`mailto:${f.email}`}
              data-testid="contact-email"
              style={{
                color: "#001489",
                fontSize: 14,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#192B94"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#001489"}
            >
              {f.email}
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Light form panel ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center px-8 pt-32 pb-32"
          style={{
            background: "#FFFFFF",
            paddingRight: "clamp(2rem, calc((100vw - 1400px) / 2 + 3.5rem), 8rem)",
            paddingLeft: "clamp(2rem, 4vw, 5rem)",
          }}
        >
          {submitted ? (
            <motion.div
              data-testid="contact-success"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-5 max-w-lg"
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 52,
                  height: 52,
                  background: "#001489",
                  marginBottom: 8,
                }}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 20 20">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-heading text-[#001489] font-bold" style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}>
                {c.successTitle}
              </h3>
              <p style={{ color: "#595959", fontSize: 14, lineHeight: 1.72 }}>{c.successText}</p>
            </motion.div>
          ) : (
            <div className="w-full">
              <p className="font-medium uppercase mb-8" style={{ color: "#4A58AA", fontSize: 12 }}>
                Send a Message
              </p>

              <form onSubmit={handleSubmit} data-testid="contact-form" className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder={c.namePlaceholder} data-testid="input-name"
                      className="border text-[#151515] placeholder-[#848484] text-sm px-4 py-4 outline-none transition-colors"
                      style={{
                        background: "#F9F9F9",
                        borderColor: "rgba(0,20,137,0.12)",
                      }}
                      onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#001489"}
                      onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,20,137,0.12)"}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder={c.emailPlaceholder} data-testid="input-email"
                      className="border text-[#151515] placeholder-[#848484] text-sm px-4 py-4 outline-none transition-colors"
                      style={{
                        background: "#F9F9F9",
                        borderColor: "rgba(0,20,137,0.12)",
                      }}
                      onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#001489"}
                      onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,20,137,0.12)"}
                    />
                  </div>
                </div>

                <div className="relative">
                  <select
                    name="subject" required value={form.subject} onChange={handleChange}
                    data-testid="select-subject"
                    className="w-full border text-sm px-4 py-4 outline-none transition-colors appearance-none cursor-pointer"
                    style={{
                      background: "#F9F9F9",
                      borderColor: "rgba(0,20,137,0.12)",
                      color: form.subject ? "#151515" : "#848484",
                    }}
                    onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#001489"}
                    onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,20,137,0.12)"}
                  >
                    <option value="" disabled hidden>{c.subjectPlaceholder}</option>
                    {c.subjectOptions.map((opt, i) => (
                      <option key={i} value={opt} style={{ color: "#151515", background: "#fff" }}>{opt}</option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3"
                    style={{ color: "#848484" }}
                    fill="none" viewBox="0 0 12 12"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>

                <textarea
                  name="message" required rows={5} value={form.message} onChange={handleChange}
                  placeholder={c.messagePlaceholder} data-testid="input-message"
                  className="border text-[#151515] placeholder-[#848484] text-sm px-4 py-4 outline-none transition-colors resize-none"
                  style={{
                    background: "#F9F9F9",
                    borderColor: "rgba(0,20,137,0.12)",
                  }}
                  onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#001489"}
                  onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,20,137,0.12)"}
                />

                <div className="flex items-center gap-6 mt-1">
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="button-submit"
                    className="bg-[#001489] text-white uppercase font-semibold px-10 py-4 hover:bg-[#000E45] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontSize: 12 }}
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
                  <p style={{ color: "#848484", fontSize: 12 }}>
                    Typically replies within 24 hours
                  </p>
                </div>
              </form>
            </div>
          )}
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

  const TICKER_WORDS = ["REASON", "RIGOR", "RESOLUTION", "RAISON", "RIGUEUR", "RÉSOLUTION"];
  const tickerHalf = Array.from({ length: 12 }).flatMap((_, r) =>
    TICKER_WORDS.map((word, w) => ({ key: `${r}-${w}`, word, bright: w % 3 === 0 }))
  );

  return (
    <footer id="footer" data-testid="footer" style={{ background: "#001489" }}>
      {/* ── Scrolling motto ticker ── */}
      <style>{`
        @keyframes mh-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mh-ticker-track {
          display: inline-flex;
          white-space: nowrap;
          animation: mh-ticker 100s linear infinite;
        }
      `}</style>
      <div
        style={{
          background: "#001489",
          overflow: "hidden",
          padding: "11px 0",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          userSelect: "none",
          width: "100%",
        }}
      >
        <div className="mh-ticker-track">
          {/* Copy A */}
          {tickerHalf.map(({ key, word, bright }) => (
            <span key={`a-${key}`} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", color: bright ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.28)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{word}</span>
              <span style={{ color: "rgba(255,255,255,0.14)", padding: "0 20px", fontSize: 10 }}>◆</span>
            </span>
          ))}
          {/* Copy B — pixel-identical, enables seamless -50% loop */}
          {tickerHalf.map(({ key, word, bright }) => (
            <span key={`b-${key}`} aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", color: bright ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.28)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{word}</span>
              <span style={{ color: "rgba(255,255,255,0.14)", padding: "0 20px", fontSize: 10 }}>◆</span>
            </span>
          ))}
        </div>
      </div>
      {/* ── Main body ── */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 text-[#ffffff40]"
          style={{ paddingTop: 56, paddingBottom: 52, borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >

          {/* LEFT: Giant masthead wordmark */}
          <div className="flex flex-col justify-between gap-10">
            <div>
              <img
                src={miltonHobbsWordmark}
                alt="Milton Hobbs"
                style={{
                  width: "clamp(160px, 22vw, 280px)",
                  height: "auto",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.92,
                  display: "block",
                }}
              />
              <div style={{ width: 48, height: 1, background: "rgba(255,255,255,0.14)", margin: "24px 0 20px" }} />
              <p style={{ color: "#FFFFFF", fontSize: 14, lineHeight: 1.7, maxWidth: "38ch" }}>
                {f.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${f.email}`}
                data-testid="footer-email"
                className="self-start"
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"}
              >
                {f.email}
              </a>
              <div className="flex flex-wrap gap-x-7 gap-y-1 mt-0.5">
                <a
                  href={`tel:${f.phone}`}
                  data-testid="footer-phone-dubai"
                  style={{ color: "#FFFFFF", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"}
                >
                  Dubai {f.phone}
                </a>
                <a
                  href="tel:+33180270067"
                  data-testid="footer-phone-paris"
                  style={{ color: "#FFFFFF", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"}
                >
                  Paris +33 1 80 27 00 67
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Offices + nav */}
          <div className="flex flex-col gap-10 lg:pt-2">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p
                  style={{ color: "#7A84BE", fontSize: 12, textTransform: "uppercase", fontWeight: 600, marginBottom: 14 }}
                >
                  {f.dubaiLabel}
                </p>
                <address className="not-italic" style={{ color: "#FFFFFF", fontSize: 13, lineHeight: 1.7 }}>
                  {f.dubaiAddr.map((line, i) => <span key={i} className="block">{line}</span>)}
                </address>
              </div>
              <div>
                <p
                  style={{ color: "#7A84BE", fontSize: 12, textTransform: "uppercase", fontWeight: 600, marginBottom: 14 }}
                >
                  {f.parisLabel}
                </p>
                <address className="not-italic" style={{ color: "#FFFFFF", fontSize: 13, lineHeight: 1.7 }}>
                  {f.parisAddr.map((line, i) => <span key={i} className="block">{line}</span>)}
                </address>
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24 }}>
              <p style={{ color: "#7A84BE", fontSize: 12, textTransform: "uppercase", fontWeight: 600, marginBottom: 14 }}>
                Navigation
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                {navEntries.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.40)",
                      fontSize: 13,
                      textDecoration: "none",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.40)"}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar: live clocks + legal ── */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ padding: "18px 0 20px" }}
        >
          {/* Live local times */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 7,
                  background: "#7A84BE",
                  borderRadius: "50%",
                  flexShrink: 0,
                  boxShadow: "0 0 0 2px rgba(122,132,190,0.25)",
                }}
              />
              <span style={{ color: "rgba(255,255,255,0.40)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Dubai
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.40)",
                  fontSize: 12,
                  fontFamily: "'Plus Jakarta Sans', monospace",
                  letterSpacing: "0.04em",
                  minWidth: "6.5ch",
                }}
              >
                {dubaiTime}
              </span>
            </div>
            <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.10)" }} />
            <div className="flex items-center gap-2.5">
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 7,
                  background: "#4A58AA",
                  borderRadius: "50%",
                  flexShrink: 0,
                  boxShadow: "0 0 0 2px rgba(74,88,170,0.25)",
                }}
              />
              <span style={{ color: "rgba(255,255,255,0.40)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Paris
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.40)",
                  fontSize: 12,
                  fontFamily: "'Plus Jakarta Sans', monospace",
                  letterSpacing: "0.04em",
                  minWidth: "6.5ch",
                }}
              >
                {parisTime}
              </span>
            </div>
          </div>

          {/* Copyright + legal */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <p style={{ color: "rgba(255,255,255,0.40)", fontSize: 12 }}>{f.copyright}</p>
            <a href="#" style={{ color: "rgba(255,255,255,0.40)", fontSize: 12, textDecoration: "none" }}>{f.privacy}</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.40)", fontSize: 12, textDecoration: "none" }}>{f.cookie}</a>
          </div>
        </div>

        <p
          data-testid="footer-disclaimer"
          style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, lineHeight: 1.6, paddingBottom: 20, maxWidth: "90ch" }}
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

function PracticeAreasV18() {
  const [active, setActive] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [slider, setSlider] = useState({ frac: 0, thumbW: 0.25 });
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const isBarDragging = useRef(false);

  const TOTAL = EXPERTISE_ITEMS_V18.length + 1;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    setSlider({ frac: 0, thumbW: el.clientWidth / el.scrollWidth });
  }, []);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.scrollWidth / TOTAL;
    setCurrentIdx(Math.min(Math.round(el.scrollLeft / cardW), TOTAL - 1));
    const max = el.scrollWidth - el.clientWidth;
    setSlider({
      frac: max > 0 ? el.scrollLeft / max : 0,
      thumbW: el.clientWidth / el.scrollWidth,
    });
  };

  const scrollToCard = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.scrollWidth / TOTAL;
    el.scrollTo({ left: idx * cardW, behavior: "smooth" });
  };

  const onProgressMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isBarDragging.current = true;
    const bar = progressBarRef.current;
    const strip = scrollRef.current;
    if (!bar || !strip) return;

    const move = (ev: MouseEvent) => {
      const rect = bar.getBoundingClientRect();
      const pct = Math.min(1, Math.max(0, (ev.clientX - rect.left) / rect.width));
      strip.scrollLeft = pct * (strip.scrollWidth - strip.clientWidth);
    };

    const up = () => {
      isBarDragging.current = false;
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      if (bar) bar.style.cursor = "grab";
    };

    bar.style.cursor = "grabbing";
    move(e.nativeEvent);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.pageX - el.offsetLeft;
    dragScrollLeft.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = dragScrollLeft.current - (x - dragStartX.current) * 1.6;
  };

  const endDrag = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const CARD_W = "clamp(300px, 28vw, 420px)";

  return (
    <section
      id="expertise"
      data-testid="practice-areas-section"
      data-header-theme="light"
      style={{ background: "#FFFFFF", borderTop: "1px solid rgba(0,20,137,0.07)" }}
    >
      {/* ── Section header with counter + arrows ── */}
      <style>{`.expertise-scroll::-webkit-scrollbar{display:none}`}</style>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        style={{
          paddingLeft: "clamp(2rem, calc((100vw - 1400px) / 2 + 3.5rem), 8rem)",
          paddingRight: "clamp(2rem, calc((100vw - 1400px) / 2 + 3.5rem), 8rem)",
          paddingTop: 72,
          paddingBottom: 48,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            className="font-heading font-bold text-[#001489] leading-[1.15]"
            style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)" }}
          >
            Areas of Practice
          </h2>
        </div>

        {/* Counter + arrow controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0, paddingBottom: 4 }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              color: "#848484",
              letterSpacing: "0.06em",
              minWidth: "4.5ch",
            }}
          >
            {String(currentIdx + 1).padStart(2, "0")} <span style={{ color: "rgba(0,20,137,0.20)" }}>/</span> {String(TOTAL).padStart(2, "0")}
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            {[{ dir: -1, icon: "M10 6H2M2 6l4-4M2 6l4 4" }, { dir: 1, icon: "M2 6h8M10 6L6 2M10 6L6 10" }].map(({ dir, icon }) => (
              <button
                key={dir}
                onClick={() => scrollToCard(Math.max(0, Math.min(TOTAL - 1, currentIdx + dir)))}
                style={{
                  width: 40,
                  height: 40,
                  border: "1px solid rgba(0,20,137,0.18)",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s, border-color 0.2s",
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#001489";
                  (e.currentTarget as HTMLElement).style.borderColor = "#001489";
                  (e.currentTarget.querySelector("svg") as SVGElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,20,137,0.18)";
                  (e.currentTarget.querySelector("svg") as SVGElement).style.color = "#001489";
                }}
              >
                <svg width="14" height="12" fill="none" viewBox="0 0 12 12" style={{ color: "#001489", transition: "color 0.2s" }}>
                  <path d={icon} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Horizontal scroll strip ── */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        className="expertise-scroll"
        style={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          height: 740,
          cursor: "grab",
        }}
      >
        {EXPERTISE_ITEMS_V18.map((item, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              data-testid={`expertise-item-${i}`}
              onMouseEnter={() => !isDragging.current && setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                position: "relative",
                flexShrink: 0,
                width: CARD_W,
                overflow: "hidden",
                background: "#001489",
                cursor: "grab",
                borderRight: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  mixBlendMode: "multiply",
                  transform: isActive ? "scale(1.06)" : "scale(1)",
                  transition: "transform 0.75s ease",
                  pointerEvents: "none",
                }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,6,44,0.96) 0%, rgba(0,20,137,0.22) 52%, transparent 100%)" }}
              />
              <div className="absolute inset-0 flex flex-col justify-end" style={{ padding: "28px 30px 32px" }}>
                <p style={{ color: "#7A84BE", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {item.short}
                </p>
                <h3
                  className="font-heading font-bold text-white"
                  style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)", lineHeight: 1.22 }}
                >
                  {item.title}
                </h3>
                <div style={{ overflow: "hidden", maxHeight: isActive ? "150px" : "0", opacity: isActive ? 1 : 0, transition: "max-height 0.4s ease, opacity 0.28s ease", marginTop: isActive ? 16 : 0 }}>
                  <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 13, lineHeight: 1.72, marginBottom: 18, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {item.desc}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2"
                    style={{ color: "rgba(255,255,255,0.78)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.22)", paddingBottom: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Enquire
                    <svg width="10" height="10" fill="none" viewBox="0 0 12 12">
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Solid CTA card */}
        <div
          data-testid="expertise-cta-card"
          style={{ flexShrink: 0, width: CARD_W, background: "#192B94", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "30px 30px 32px" }}
        >
          <div style={{ alignSelf: "flex-end" }}>
            <div style={{ width: 40, height: 40, border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
                <path d="M3 13L13 3M13 3H6M13 3v7" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div>
            <p style={{ color: "#7A84BE", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              08 Disciplines
            </p>
            <h3 className="font-heading font-bold text-white" style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)", lineHeight: 1.22, marginBottom: 28 }}>
              All Areas of Practice
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center gap-2"
              style={{ color: "rgba(255,255,255,0.60)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.16)", paddingBottom: 2, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.60)"}
            >
              Get in Touch
              <svg width="10" height="10" fill="none" viewBox="0 0 12 12">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Continuous scroll slider ── */}
      <div
        ref={progressBarRef}
        onMouseDown={onProgressMouseDown}
        style={{
          position: "relative",
          height: 16,
          background: "rgba(0,20,137,0.08)",
          cursor: "grab",
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        {/* Thumb */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: `${slider.frac * (100 - slider.thumbW * 100)}%`,
            width: `${slider.thumbW * 100}%`,
            height: "100%",
            background: "#001489",
            transition: isBarDragging.current ? "none" : "left 0.06s linear",
          }}
        />
      </div>

    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

function HomeV2Point2Inner() {
  return (
    <div className="bg-[#FCFCFC] min-h-screen" data-testid="home-v1-5-page">
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
