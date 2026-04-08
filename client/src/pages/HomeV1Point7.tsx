import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";
import miltonHobbsLogo from "@assets/Milton_hobbs_logo_1775554832004.png";
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

  return (
    <motion.header
      data-testid="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled
          ? "rgba(21,21,21,0.82)"
          : "rgba(21,21,21,0.55)",
        backdropFilter: scrolled
          ? "none"
          : "blur(24px) saturate(140%)",
        WebkitBackdropFilter: scrolled
          ? "none"
          : "blur(24px) saturate(140%)",
        boxShadow: scrolled
          ? "0 1px 0 rgba(0,20,137,0.3), 0 4px 24px rgba(0,0,0,0.4)"
          : "0 4px 28px rgba(0,0,0,0.3)",
        borderBottom: scrolled
          ? "1px solid rgba(0,20,137,0.35)"
          : "1px solid rgba(254,254,254,0.08)",
        transition: "background 0.35s ease, backdrop-filter 0.35s ease, -webkit-backdrop-filter 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
      }}
    >
      {/* Subtle top-edge accent line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: scrolled ? 0 : 1, transition: "opacity 0.35s ease" }}>
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,20,137,0.6) 25%, rgba(0,20,137,0.8) 50%, rgba(0,20,137,0.6) 75%, transparent 100%)" }} />
      </div>
      <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between relative">
        <a
          href="#home"
          data-testid="logo"
          className="shrink-0"
        >
          <img
            src={miltonHobbsLogo}
            alt="Milton Hobbs"
            className="h-16 w-auto block"
          />
        </a>

        <nav data-testid="nav-desktop" className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.href.replace(/[#/]/g, "")}`}
              className="text-[16px] tracking-[0.12em] uppercase font-medium whitespace-nowrap transition-colors duration-300"
              style={{ color: "#FEFEFE" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#7A84BE")}
              onMouseLeave={e => (e.currentTarget.style.color = "#FEFEFE")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 shrink-0">
          <div
            data-testid="lang-toggle"
            className="hidden lg:flex items-center text-xs tracking-widest overflow-hidden"
            style={{
              background: "rgba(254,254,254,0.07)",
              backdropFilter: "blur(8px)",
            }}
          >
            <button
              onClick={() => setLang("EN")}
              data-testid="lang-en"
              className="px-4 py-2 transition-all duration-200"
              style={lang === "EN"
                ? { background: "linear-gradient(160deg, #001070 0%, #000A46 40%, #001489 100%)", color: "#ffffff", fontWeight: 600 }
                : { color: "rgba(254,254,254,0.40)" }
              }
            >
              EN
            </button>
            <button
              onClick={() => setLang("FR")}
              data-testid="lang-fr"
              className="px-4 py-2 transition-all duration-200"
              style={lang === "FR"
                ? { background: "linear-gradient(160deg, #001070 0%, #000A46 40%, #001489 100%)", color: "#ffffff", fontWeight: 600 }
                : { color: "rgba(254,254,254,0.40)" }
              }
            >
              FR
            </button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="lg:hidden p-1 transition-colors"
            style={{ color: "rgba(254,254,254,0.65)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="flex flex-col gap-[5px] w-5">
              <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t"
            style={{
              borderColor: "rgba(0,20,137,0.30)",
              background: "rgba(21,21,21,0.97)",
              backdropFilter: "blur(28px)",
            }}
          >
            <div className="px-8 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[16px] tracking-[0.15em] uppercase transition-colors"
                  style={{ color: "#FEFEFE" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-0 mt-2 w-fit"
                >
                <button
                  onClick={() => setLang("EN")}
                  className="text-xs tracking-widest px-4 py-2 transition-all duration-200"
                  style={lang === "EN"
                    ? { background: "linear-gradient(160deg, #001070 0%, #000A46 40%, #001489 100%)", color: "#ffffff", fontWeight: 600 }
                    : { color: "rgba(254,254,254,0.40)" }
                  }
                >EN</button>
                <button
                  onClick={() => setLang("FR")}
                  className="text-xs tracking-widest px-4 py-2 transition-all duration-200"
                  style={lang === "FR"
                    ? { background: "linear-gradient(160deg, #001070 0%, #000A46 40%, #001489 100%)", color: "#ffffff", fontWeight: 600 }
                    : { color: "rgba(254,254,254,0.40)" }
                  }
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

// Elegant tile system: 8×10 grid, ~40 non-adjacent cells fade in/out on slow random schedules.
const TILE_COLS = 8;
const TILE_ROWS = 10;

function buildNonAdjacentCells(cols: number, rows: number): Set<number> {
  const total = cols * rows;
  const active = new Set<number>();
  const order = Array.from({ length: total }, (_, i) => i);
  for (let j = order.length - 1; j > 0; j--) {
    const k = Math.floor(Math.random() * (j + 1));
    [order[j], order[k]] = [order[k], order[j]];
  }
  for (const idx of order) {
    const c = idx % cols;
    const r = Math.floor(idx / cols);
    const nb = [
      r > 0 ? (r - 1) * cols + c : -1,
      r < rows - 1 ? (r + 1) * cols + c : -1,
      c > 0 ? r * cols + (c - 1) : -1,
      c < cols - 1 ? r * cols + (c + 1) : -1,
    ];
    if (nb.every(n => n < 0 || !active.has(n))) active.add(idx);
  }
  return active;
}

const activeCells = buildNonAdjacentCells(TILE_COLS, TILE_ROWS);
const TILE_BLUES = ["#7A84BE", "#6B75B2", "#8A93C8"] as const;

const tiles = Array.from({ length: TILE_COLS * TILE_ROWS }, (_, i) => ({
  color:      TILE_BLUES[i % 3],
  delay:      parseFloat((Math.random() * 14).toFixed(2)),
  duration:   parseFloat((8 + Math.random() * 8).toFixed(2)),
  maxOpacity: activeCells.has(i) ? parseFloat((0.06 + Math.random() * 0.08).toFixed(2)) : 0,
}));

const HERO_CYCLE_MS = 12000;

const ACCENT_SQUARES = [
  { pos: { top: "4%",  left: "52%"  }, size: 90, dur: 6.5, delay: 0.0, minOpacity: 0.50 },
  { pos: { top: "2%",  right: "4%"  }, size: 90, dur: 8.0, delay: 2.8, minOpacity: 0.42 },
  { pos: { top: "22%", left: "46%"  }, size: 90, dur: 5.5, delay: 1.4, minOpacity: 0.45 },
  { pos: { top: "18%", right: "18%" }, size: 90, dur: 9.0, delay: 4.6, minOpacity: 0.40 },
  { pos: { top: "48%", left: "60%"  }, size: 90, dur: 7.0, delay: 0.8, minOpacity: 0.48 },
  { pos: { top: "60%", right: "6%"  }, size: 90, dur: 6.0, delay: 3.5, minOpacity: 0.44 },
  { pos: { top: "72%", left: "50%"  }, size: 90, dur: 8.5, delay: 1.9, minOpacity: 0.41 },
  { pos: { top: "82%", right: "24%" }, size: 90, dur: 7.5, delay: 5.2, minOpacity: 0.47 },
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

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen bg-[#151515] flex overflow-hidden"
    >
      {/* ── LEFT PANEL: Editorial content ───────────────────────────────── */}
      <div className="relative z-10 w-[50%] flex flex-col justify-center px-12 xl:px-24 pt-24 pb-20 overflow-hidden">

        {/* Elegant tile grid — padded cells, non-adjacent, slow smooth fades */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${TILE_COLS}, 1fr)`,
            gridTemplateRows: `repeat(${TILE_ROWS}, 1fr)`,
            gap: "0.5vw",
            WebkitMaskImage: "linear-gradient(to right, black 0%, black 60%, transparent 82%)",
            maskImage: "linear-gradient(to right, black 0%, black 60%, transparent 82%)",
          }}
        >
          {tiles.map((tile, i) => (
            <motion.div
              key={i}
              style={{
                backgroundColor: `${tile.color}33`,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(122,132,190,0.12)",
                boxShadow: "inset 0 0 12px rgba(122,132,190,0.06), 0 2px 8px rgba(122,132,190,0.04)",
              }}
              animate={{ opacity: [0, 0, tile.maxOpacity * 3.5, tile.maxOpacity * 3.5, 0, 0] }}
              transition={{
                duration: tile.duration,
                delay: tile.delay,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                times: [0, 0.15, 0.30, 0.70, 0.85, 1],
              }}
            />
          ))}
        </div>

        {/* Editorial content block — animates on article change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="w-full"
          >
            {/* Gold accent line + Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                style={{ width: 1, height: 32, background: "#7A84BE", flexShrink: 0 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <p
                className="text-[#EEF6FD] tracking-[0.22em] uppercase font-medium text-[16px]"
                data-testid="hero-eyebrow"
              >
                {featuredArticle?.category}
              </p>
            </div>

            {/* Large article headline */}
            <h1
              className="font-heading text-[#FEFEFE] font-bold text-[clamp(1.125rem,4vw,3.4375rem)] mb-8"
              style={{ lineHeight: "clamp(1.5rem, 1.1em, 3.75rem)" }}
              data-testid="hero-headline"
            >
              {featuredArticle?.title}
            </h1>

            {/* Read link */}
            <a
              href={`/insights/${featuredSlug}`}
              data-testid="hero-read-link"
              className="group inline-flex items-center gap-2 text-[#FEFEFE] hover:text-[#EEF6FD] transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-[0.06em] underline underline-offset-4 decoration-[#FEFEFE]/25 group-hover:decoration-[#7A84BE]/60 transition-[text-decoration-color] duration-300">{ins.read}</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 12 12">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Functional carousel dots — bottom-left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="absolute bottom-10 left-12 xl:left-24 flex items-center gap-2.5"
          data-testid="hero-dots"
        >
          {ins.articles.map((_, i) => (
            <button
              key={i}
              data-testid={`hero-dot-${i}`}
              onClick={() => goTo(i)}
              aria-label={`Article ${i + 1}`}
              className="block focus:outline-none cursor-pointer transition-all duration-300"
              style={{
                width:           i === currentIndex ? 20 : 7,
                height:          7,
                borderRadius:    i === currentIndex ? 4 : "50%",
                backgroundColor: i === currentIndex ? "#7A84BE" : "transparent",
                border:          i === currentIndex ? "none" : "1px solid rgba(254,254,254,0.22)",
              }}
            />
          ))}
        </motion.div>
      </div>
      {/* ── RIGHT PANEL: Tile shimmer (original design) ──────────────────── */}
      <div
        className="absolute inset-0 bg-[#000A4F] overflow-hidden"
        style={{ clipPath: "polygon(42% 0%, 100% 0%, 100% 100%, 58% 100%)" }}
      >
        {/* Building photo — subtle background, slow crossfade */}
        <AnimatePresence>
          <motion.img
            key={bgIndex}
            src={HERO_BG_IMAGES[bgIndex]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Soft vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 80% at 70% 50%, transparent 40%, rgba(0,10,80,0.35) 100%)",
          }}
        />
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
      <circle cx={cx} cy={cy} r={innerR} stroke="#7A84BE" strokeOpacity={0.4} strokeWidth={1} fill="none" />
      <circle cx={cx} cy={cy} r={8} fill="#7A84BE" fillOpacity={0.95} />
      <motion.circle
        cx={cx} cy={cy} r={innerR}
        stroke="#7A84BE" strokeWidth={1} fill="none"
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
          stroke={locked ? "#7A84BE" : "rgba(255,255,255,1)"}
          strokeOpacity={locked ? 0.18 + i * 0.1 : 0.14 + i * 0.08}
          strokeWidth={1}
          style={{ transition: "stroke 0.4s, stroke-opacity 0.4s" }}
        />
      ))}
      <line x1={CX} y1={30} x2={CX} y2={230} stroke="rgba(255,255,255,1)" strokeOpacity={0.18} strokeWidth={1} />
      <line x1={40} y1={CY} x2={280} y2={CY} stroke="rgba(255,255,255,1)" strokeOpacity={0.18} strokeWidth={1} />
      <circle cx={CX} cy={CY} r={4}
        fill={locked ? "#7A84BE" : "rgba(255,255,255,1)"}
        fillOpacity={locked ? 1 : 0.55}
        style={{ transition: "fill 0.3s, fill-opacity 0.3s" }}
      />
      {locked && (
        <AnimatePresence>
          <motion.circle
            key={flashKey}
            cx={CX} cy={CY} r={22}
            stroke="#7A84BE" strokeWidth={2} fill="none"
            initial={{ scale: 1, opacity: 0.9 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />
        </AnimatePresence>
      )}
      <motion.g style={{ x: rx, y: ry }}>
        <circle cx={CX} cy={CY} r={22} stroke="#7A84BE" strokeWidth={1.5} fill="none" strokeOpacity={0.9} />
        <path d={`M${CX-22} ${CY-9} L${CX-22} ${CY-22} L${CX-9} ${CY-22}`} stroke="#7A84BE" strokeWidth={1.5} fill="none" />
        <path d={`M${CX+9} ${CY-22} L${CX+22} ${CY-22} L${CX+22} ${CY-9}`} stroke="#7A84BE" strokeWidth={1.5} fill="none" />
        <path d={`M${CX+22} ${CY+9} L${CX+22} ${CY+22} L${CX+9} ${CY+22}`} stroke="#7A84BE" strokeWidth={1.5} fill="none" />
        <path d={`M${CX-9} ${CY+22} L${CX-22} ${CY+22} L${CX-22} ${CY+9}`} stroke="#7A84BE" strokeWidth={1.5} fill="none" />
        <line x1={CX-9} y1={CY} x2={CX+9} y2={CY} stroke="#7A84BE" strokeWidth={1} strokeOpacity={0.7} />
        <line x1={CX} y1={CY-9} x2={CX} y2={CY+9} stroke="#7A84BE" strokeWidth={1} strokeOpacity={0.7} />
      </motion.g>
      {locked && (
        <motion.text
          x={CX + 30} y={CY - 28}
          fill="#7A84BE" fontSize="8" fontFamily="monospace" letterSpacing="0.15em"
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
          stroke={i < 2 ? "#7A84BE" : "rgba(255,255,255,1)"}
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
            fontFamily="sans-serif" textAnchor="middle"
          >{n.label}</text>
        </g>
      ))}
      <circle cx={160} cy={130} r={7} fill="#7A84BE" fillOpacity={0.95} />
      <motion.circle
        cx={160} cy={130} r={18}
        stroke="#7A84BE" strokeWidth={1} fill="none"
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
            stroke={i === rings.length - 1 ? "#7A84BE" : "rgba(255,255,255,1)"}
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
        stroke="#7A84BE" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d={`M${cx-4} ${cy-4} Q${cx-4} ${cy-11} ${cx} ${cy-11} Q${cx+4} ${cy-11} ${cx+4} ${cy-4}`}
        stroke="#7A84BE" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
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
      className="bg-[#151515] py-24 px-8 border-t border-white/[0.07]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-16 items-start">

          {/* Left: card list */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex flex-col"
          >
            <p className="text-[#EEF6FD] text-[22px] tracking-[0.22em] uppercase font-bold mb-8">
              Why Milton Hobbs
            </p>
            <div className="flex flex-col gap-0 pl-6 mt-[95px]">
              {d.cards.map((card, i) => (
                <button
                  key={i}
                  data-testid={`diff-card-${i}`}
                  onClick={() => { setActive(i); setPaused(true); setProgress(0); }}
                  className="group flex items-center gap-4 py-2 text-left focus:outline-none pl-[50px] pt-[0px] mt-[0px]"
                >
                  <motion.span
                    className="flex-shrink-0 self-stretch bg-[#7A84BE]"
                    animate={{
                      opacity: i === active ? 1 : 0,
                      scaleY: i === active ? 1 : 0,
                      width: i === active ? 3 : 3,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{ originY: 0.5, minWidth: 3 }}
                  />
                  <motion.span
                    className="font-heading font-semibold leading-[1.15]"
                    animate={{
                      color: i === active ? "#FEFEFE" : "rgba(254,254,254,0.18)",
                      fontSize: i === active ? "clamp(1.875rem, 3vw, 2.75rem)" : "clamp(1.5rem, 2.4vw, 2.125rem)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {card.title}
                  </motion.span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: visual panel */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative w-full overflow-hidden" style={{
              aspectRatio: "4/3",
              borderRadius: "0px",
              background: "linear-gradient(160deg, rgba(0,16,112,0.85) 0%, rgba(0,10,70,0.92) 40%, rgba(0,20,137,0.80) 100%)",
              backdropFilter: "blur(24px) saturate(1.5)",
              WebkitBackdropFilter: "blur(24px) saturate(1.5)",
              border: "1px solid rgba(30,120,255,0.25)",
              boxShadow: "0 0 20px rgba(30,120,255,0.15), 0 0 60px rgba(0,20,137,0.12), inset 0 1px 0 rgba(100,160,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.2), 0 12px 40px rgba(0,10,60,0.35)",
            }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(180deg, rgba(60,140,255,0.08) 0%, transparent 30%, transparent 85%, rgba(30,100,255,0.05) 100%)",
              }} />
              <div className="absolute inset-0 pointer-events-none" style={{
                boxShadow: "inset 0 0 40px rgba(30,100,255,0.06)",
              }} />
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

              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#001489]/10">
                <motion.div
                  className="h-full bg-[#001489]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="pt-7"
              >
                <h3 className="font-heading text-[#FEFEFE] text-[clamp(1rem,1.4vw,1.25rem)] font-semibold mb-2.5 leading-[1.3]">
                  {d.cards[active].title}
                </h3>
                <p className="text-white/50 text-[0.85rem] leading-[1.6] mb-6 max-w-md">
                  {d.cards[active].description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-[#FEFEFE] text-[11px] tracking-[0.18em] uppercase font-semibold px-6 py-3 transition-all"
                  style={{ background: "linear-gradient(160deg, #001070 0%, #000A46 40%, #001489 100%)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(160deg, #001489 0%, #001070 40%, #000A46 100%)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(160deg, #001070 0%, #000A46 40%, #001489 100%)"}
                >
                  <span>{d.learnMore}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── PRACTICE AREAS ─────────────────────────────────────────────────────── */

const EXPERTISE_ITEMS = [
  { num: "01", short: "Corporate",   title: "Corporate & Commercial",             desc: "Structuring complex transactions, joint ventures, and commercial agreements for businesses operating across borders and sectors.",       img: imgCorp   },
  { num: "02", short: "Tax",         title: "Tax & Compliance",                   desc: "Strategic international tax planning, regulatory compliance frameworks, and risk mitigation for corporations and high-net-worth individuals.", img: imgTax    },
  { num: "03", short: "M&A",         title: "Mergers & Acquisitions",             desc: "End-to-end advisory on M&A transactions, due diligence, valuations, and seamless post-merger integration across sectors.",               img: imgBank   },
  { num: "04", short: "Startups",    title: "Startups & Venture Capital",         desc: "Funding rounds, term sheets, shareholder agreements, and robust legal infrastructure for founders, operators, and investors.",             img: imgTech   },
  { num: "05", short: "IP & Tech",   title: "Intellectual Property & Technology", desc: "Patent strategy, trademark registration, licensing structures, and data protection compliance across jurisdictions.",                     img: imgIp     },
  { num: "06", short: "Real Estate", title: "Real Estate & Property Law",         desc: "Cross-border property acquisitions, development financing, and sophisticated real estate structuring in the UAE and Europe.",              img: imgEstate },
  { num: "07", short: "Employment",  title: "Employment & Labor Law",             desc: "Employment contracts, executive compensation structures, workforce restructuring, and workplace dispute resolution.",                       img: imgEmploy },
  { num: "08", short: "Litigation",  title: "Litigation & Dispute Resolution",    desc: "Strategic advocacy in commercial litigation, DIFC arbitration, and international dispute proceedings across forums.",                     img: imgLitig  },
];

function PracticeAreasV17() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="expertise"
      data-testid="practice-areas-section"
      className="py-28 px-8 bg-[#151515] border-t border-white/[0.07]"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#EEF6FD] text-[22px] tracking-[0.22em] uppercase font-bold mb-4">
            Our Expertise
          </p>
          <p className="text-white/40 text-sm max-w-sm leading-[1.6]">
            Across industries and borders, we deliver precision-crafted legal strategy.
          </p>
        </motion.div>

        {/* ── Desktop: horizontal expanding panels ── */}
        <div
          className="hidden lg:flex border border-white/[0.08]"
          style={{ height: "540px" }}
          onMouseLeave={() => setHovered(null)}
        >
          {EXPERTISE_ITEMS.map((item, i) => {
            const isActive = hovered === i;
            return (
              <div
                key={i}
                data-testid={`expertise-item-${i}`}
                onMouseEnter={() => setHovered(i)}
                style={{
                  flex: isActive ? 5 : 1,
                  transition: "flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: isActive
                    ? "linear-gradient(160deg, #001070 0%, #000A46 40%, #001489 100%)"
                    : "transparent",
                  borderRight: i < EXPERTISE_ITEMS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  minWidth: 0,
                }}
              >
                {/* ── Collapsed: image bg + number + short horizontal label ── */}
                <div
                  className="absolute inset-0 flex flex-col"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 0.22s ease",
                    pointerEvents: isActive ? "none" : "auto",
                  }}
                >
                  {/* Photo */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                    style={{ transform: hovered === i ? "scale(1.05)" : "scale(1)" }}
                  />
                  {/* Dark gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.25) 100%)" }}
                  />
                  {/* Number top-center */}
                  <div className="relative z-10 pt-6 flex justify-center">
                    <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: "rgba(122,132,190,0.75)" }}>
                      {item.num}
                    </span>
                  </div>
                  {/* Short label bottom — horizontal, no rotation */}
                  <div className="relative z-10 mt-auto px-3 pb-6 text-center">
                    <span
                      className="font-heading font-semibold text-white/70 text-[0.65rem] tracking-[0.07em] uppercase block overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      {item.short}
                    </span>
                  </div>
                </div>

                {/* ── Expanded: image behind blue gradient + full content ── */}
                <div
                  className="absolute inset-0 flex flex-col justify-between"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.35s ease 0.18s",
                    pointerEvents: isActive ? "auto" : "none",
                    minWidth: "340px",
                  }}
                >
                  {/* Background: photo at low opacity + gradient */}
                  <img
                    src={item.img}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: 0.12 }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(160deg, rgba(0,16,112,0.93) 0%, rgba(0,10,70,0.97) 40%, rgba(0,20,137,0.90) 100%)" }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-9 flex flex-col h-full justify-between">
                    {/* Ghost number */}
                    <div
                      className="font-heading font-bold select-none leading-none"
                      style={{ fontSize: "clamp(5rem,8vw,7rem)", color: "rgba(122,132,190,0.07)" }}
                    >
                      {item.num}
                    </div>
                    <div>
                      <p className="text-[#EEF6FD]/45 text-[9px] tracking-[0.3em] uppercase font-medium mb-3">
                        Area of Practice
                      </p>
                      <h3 className="font-heading text-[#FEFEFE] font-bold text-[1.25rem] leading-[1.2] mb-4" style={{ whiteSpace: "nowrap" }}>
                        {item.title}
                      </h3>
                      <p className="text-white/50 text-[0.8rem] leading-[1.75] mb-7" style={{ maxWidth: "30ch" }}>
                        {item.desc}
                      </p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-[#EEF6FD] text-[9px] tracking-[0.22em] uppercase font-semibold border-b border-[#7A84BE]/40 pb-0.5 hover:border-[#EEF6FD]/55 transition-colors duration-200"
                      >
                        <span>Enquire</span>
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 12 12">
                          <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile: stacked accordion ── */}
        <div className="flex flex-col lg:hidden divide-y divide-white/[0.07] border border-white/[0.07]">
          {EXPERTISE_ITEMS.map((item, i) => {
            const isOpen = hovered === i;
            return (
              <button
                key={i}
                data-testid={`expertise-item-mobile-${i}`}
                onClick={() => setHovered(isOpen ? null : i)}
                className="text-left focus:outline-none"
              >
                <div className="flex items-center gap-4 px-5 py-4">
                  <span className="font-mono text-[10px] tracking-[0.18em] shrink-0" style={{ color: "rgba(122,132,190,0.6)" }}>
                    {item.num}
                  </span>
                  <span className="font-heading font-semibold text-sm flex-1" style={{ color: isOpen ? "#FEFEFE" : "rgba(255,255,255,0.45)" }}>
                    {item.title}
                  </span>
                  <svg
                    className="w-3 h-3 shrink-0 transition-transform duration-300"
                    style={{ color: "#7A84BE", transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                    fill="none" viewBox="0 0 12 12"
                  >
                    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="px-5 pb-5"
                        style={{ background: "linear-gradient(160deg, #001070 0%, #000A46 40%, #001489 100%)" }}
                      >
                        <p className="text-white/50 text-sm leading-[1.7] pt-4 mb-4">{item.desc}</p>
                        <a href="#contact" className="inline-flex items-center gap-2 text-[#EEF6FD] text-[10px] tracking-[0.2em] uppercase font-semibold border-b border-[#7A84BE]/40 pb-0.5">
                          <span>Enquire</span>
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 12 12">
                            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>

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
      className="bg-[#151515] py-28 px-8 border-t border-white/[0.07]"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[#EEF6FD] text-[22px] tracking-[0.22em] uppercase font-bold mb-6">
            {c.eyebrow}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <p className="text-white/55 text-sm leading-[1.6]">{c.subtext}</p>

            <div>
              <p className="text-[#EEF6FD] text-[22px] tracking-[0.22em] uppercase font-bold mb-4">
                {c.officeLabel}
              </p>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-[#EEF6FD] text-sm font-semibold mb-1">{c.dubaiLabel}</p>
                  {f.dubaiAddr.map((line, i) => (
                    <p key={i} className="text-white/45 text-[14px] leading-[1.6]">{line}</p>
                  ))}
                  <a href="tel:+97145232421" data-testid="contact-address-phone-dubai"
                    className="text-white/45 text-[14px] hover:text-[#EEF6FD] transition-colors">
                    +971 4 523 2421
                  </a>
                </div>
                <div>
                  <p className="text-[#EEF6FD] text-sm font-semibold mb-1">{c.parisLabel}</p>
                  {f.parisAddr.map((line, i) => (
                    <p key={i} className="text-white/45 text-[14px] leading-[1.6]">{line}</p>
                  ))}
                  <a href="tel:+33180270067" data-testid="contact-address-phone-paris"
                    className="text-white/45 text-[14px] hover:text-[#EEF6FD] transition-colors">
                    +33 1 80 27 00 67
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#EEF6FD] text-sm font-semibold mb-1">
                Email
              </p>
              <a href={`mailto:${f.email}`} data-testid="contact-email"
                className="text-white/45 text-[14px] hover:text-[#EEF6FD] transition-colors">
                {f.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div data-testid="contact-success"
                className="border border-[#001489]/40 p-10 flex flex-col gap-4 h-full justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-[#EEF6FD]" fill="none" viewBox="0 0 20 20">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="font-heading text-[#FEFEFE] text-lg font-semibold">{c.successTitle}</h3>
                </div>
                <p className="text-white/55 text-sm leading-[1.4]">{c.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="contact-form" className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder={c.namePlaceholder} data-testid="input-name"
                    className="bg-white/[0.05] border border-white/10 text-[#FEFEFE] placeholder-white/25 text-sm px-4 py-3.5 outline-none focus:border-[#001489]/70 transition-colors" />
                  <input type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder={c.emailPlaceholder} data-testid="input-email"
                    className="bg-white/[0.05] border border-white/10 text-[#FEFEFE] placeholder-white/25 text-sm px-4 py-3.5 outline-none focus:border-[#001489]/70 transition-colors" />
                </div>
                <div className="relative">
                  <select name="subject" required value={form.subject} onChange={handleChange}
                    data-testid="select-subject"
                    className="w-full bg-white/[0.05] border border-white/10 text-sm px-4 py-3.5 outline-none focus:border-[#001489]/70 transition-colors appearance-none cursor-pointer"
                    style={{ color: form.subject ? "#FEFEFE" : "rgba(254,254,254,0.25)", background: "#1e1e1e" }}>
                    <option value="" disabled hidden>{c.subjectPlaceholder}</option>
                    {c.subjectOptions.map((opt, i) => (
                      <option key={i} value={opt} style={{ color: "#FEFEFE", background: "#1e1e1e" }}>{opt}</option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-white/30"
                    fill="none" viewBox="0 0 12 12">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                  placeholder={c.messagePlaceholder} data-testid="input-message"
                  className="bg-white/[0.05] border border-white/10 text-[#FEFEFE] placeholder-white/25 text-sm px-4 py-3.5 outline-none focus:border-[#001489]/70 transition-colors resize-none" />
                <button type="submit" disabled={submitting} data-testid="button-submit"
                  className="self-start text-white text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(160deg, #001070 0%, #000A46 40%, #001489 100%)" }}
                  onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(160deg, #001489 0%, #001070 40%, #000A46 100%)"; }}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(160deg, #001070 0%, #000A46 40%, #001489 100%)"}
                >
                  {submitting ? c.submitting : c.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
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

  return (
    <footer id="footer" data-testid="footer" className="border-t border-white/10" style={{ background: "linear-gradient(160deg, #001070 0%, #000A46 40%, #001489 100%)" }}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-white/10">
          <div className="lg:col-span-5 lg:pr-16">
            <p className="font-heading text-white font-semibold text-lg tracking-[0.18em] uppercase mb-5">
              Milton Hobbs
            </p>
            <p className="text-white/45 text-sm leading-[1.4] max-w-xs mb-8 pr-[20%]">
              {f.tagline}
            </p>
            <div className="space-y-2">
              <a href={`mailto:${f.email}`} data-testid="footer-email"
                className="block text-[#EEF6FD] text-sm hover:text-[#9BA3D0] transition-colors">
                {f.email}
              </a>
              <a href={`tel:${f.phone}`} data-testid="footer-phone-dubai"
                className="block text-white/40 text-sm hover:text-[#9BA3D0] transition-colors">
                Dubai: {f.phone}
              </a>
              <a href="tel:+33180270067" data-testid="footer-phone-paris"
                className="block text-white/40 text-sm hover:text-[#9BA3D0] transition-colors">
                Paris: +33 1 80 27 00 67
              </a>
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-white text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
              {f.dubaiLabel}
            </p>
            <address className="not-italic text-white/50 text-sm leading-[1.4]">
              {f.dubaiAddr.map((line, i) => <span key={i} className="block">{line}</span>)}
            </address>
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-white text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
              {f.parisLabel}
            </p>
            <address className="not-italic text-white/50 text-sm leading-[1.4]">
              {f.parisAddr.map((line, i) => <span key={i} className="block">{line}</span>)}
            </address>
          </div>
        </div>
        <div className="py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border-b border-white/5">
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {navEntries.map(link => (
              <a key={link.href} href={link.href}
                className="text-white/30 hover:text-white/60 text-[10px] tracking-[0.18em] uppercase transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-[10px] tracking-[0.18em] uppercase transition-colors">{f.privacy}</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-[10px] tracking-[0.18em] uppercase transition-colors">{f.cookie}</a>
          </div>
        </div>
        <div className="py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-white/25 text-xs leading-[1.5] shrink-0">{f.copyright}</p>
          <p data-testid="footer-disclaimer"
            className="text-white/20 text-[11px] max-w-lg sm:text-right leading-[1.5]">
            {f.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

function HomeV1Point7Inner() {
  return (
    <div className="bg-[#151515] min-h-screen" data-testid="home-v1-7-page">
      <HeaderV15 />
      <main>
        <HeroV15 />
        <DifferentiatorsV15 />
        <PracticeAreasV17 />
        <ContactFormV15 />
      </main>
      <FooterV15 />
    </div>
  );
}

export default function HomeV1Point7() {
  return (
    <LanguageProvider>
      <HomeV1Point7Inner />
    </LanguageProvider>
  );
}
