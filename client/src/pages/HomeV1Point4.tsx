import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";
import miltonHobbsLogo from "@assets/Milton_hobbs_logo_1775554832004.png";
import imgCorp    from "@assets/stock_images/corporate_commercial.jpg";
import imgEstate  from "@assets/stock_images/real_estate.jpg";
import imgLitig   from "@assets/stock_images/litigation.jpg";
import imgArb     from "@assets/stock_images/arbitration.jpg";
import imgEmploy  from "@assets/stock_images/employment.jpg";
import imgBank    from "@assets/stock_images/banking_finance.jpg";
import imgTax     from "@assets/stock_images/tax_planning.jpg";
import imgImmig   from "@assets/stock_images/immigration.jpg";
import imgIp      from "@assets/stock_images/intellectual_property.jpg";
import imgTech    from "@assets/stock_images/technology_startups.jpg";
import heroBg0 from "@assets/verne-ho-0LAJfSNa-xQ-unsplash_1775562755413.jpg";
import heroBg1 from "@assets/tim-stief-dH6IjhWHNQQ-unsplash_1775562755413.jpg";
import heroBg2 from "@assets/joakim-nadell-K67sBVqLLuw-unsplash_1775562755414.jpg";
import heroBg3 from "@assets/maarten-deckers-T5nXYXCf50I-unsplash_1775562755414.jpg";
import heroBg4 from "@assets/anders-jilden-Sc5RKXLBjGg-unsplash_1775562755415.jpg";

const HERO_BG_IMAGES = [heroBg0, heroBg1, heroBg2, heroBg3, heroBg4];

/* ─── HEADER ────────────────────────────────────────────────────────────── */

function HeaderV12() {
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
          ? "rgba(255,255,255,0.98)"
          : "rgba(255,255,255,0.68)",
        backdropFilter: scrolled
          ? "none"
          : "blur(24px) saturate(180%) brightness(1.06)",
        WebkitBackdropFilter: scrolled
          ? "none"
          : "blur(24px) saturate(180%) brightness(1.06)",
        boxShadow: scrolled
          ? "0 1px 0 rgba(0,20,137,0.08), 0 4px 24px rgba(0,20,137,0.06)"
          : [
              "inset 0 1px 0 rgba(255,255,255,0.95)",
              "inset 0 -1px 0 rgba(0,20,137,0.07)",
              "0 4px 28px rgba(0,20,137,0.07)",
            ].join(", "),
        borderBottom: scrolled
          ? "1px solid rgba(0,20,137,0.08)"
          : "1px solid rgba(255,255,255,0.55)",
        transition: "background 0.35s ease, backdrop-filter 0.35s ease, -webkit-backdrop-filter 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
      }}
    >
      {/* Specular gloss — top-edge bright line + upper-half sheen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: scrolled ? 0 : 1, transition: "opacity 0.35s ease" }}>
        {/* Upper-half white sheen */}
        <div className="absolute inset-x-0 top-0 h-1/2" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)" }} />
        {/* Bright top-edge specular line */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.95) 25%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.95) 75%, transparent 100%)" }} />
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
              style={{ color: "#001489" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#D4AF36")}
              onMouseLeave={e => (e.currentTarget.style.color = "#001489")}
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
              border: "1px solid rgba(0,20,137,0.18)",
              background: "rgba(255,255,255,0.30)",
              backdropFilter: "blur(8px)",
            }}
          >
            <button
              onClick={() => setLang("EN")}
              data-testid="lang-en"
              className="px-4 py-2 transition-all duration-200"
              style={lang === "EN"
                ? { background: "#D4AF36", color: "#000A4F", fontWeight: 600 }
                : { color: "rgba(0,20,137,0.50)" }
              }
            >
              EN
            </button>
            <button
              onClick={() => setLang("FR")}
              data-testid="lang-fr"
              className="px-4 py-2 transition-all duration-200"
              style={lang === "FR"
                ? { background: "#D4AF36", color: "#000A4F", fontWeight: 600 }
                : { color: "rgba(0,20,137,0.50)" }
              }
            >
              FR
            </button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="lg:hidden p-1 transition-colors"
            style={{ color: "rgba(0,20,137,0.65)" }}
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
              borderColor: "rgba(0,20,137,0.10)",
              background: "rgba(240,244,255,0.80)",
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
                  style={{ color: "#001489" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-0 mt-2 w-fit"
                style={{ border: "1px solid rgba(0,20,137,0.18)" }}>
                <button
                  onClick={() => setLang("EN")}
                  className="text-xs tracking-widest px-4 py-2 transition-all duration-200"
                  style={lang === "EN"
                    ? { background: "#D4AF36", color: "#000A4F", fontWeight: 600 }
                    : { color: "rgba(0,20,137,0.50)" }
                  }
                >EN</button>
                <button
                  onClick={() => setLang("FR")}
                  className="text-xs tracking-widest px-4 py-2 transition-all duration-200"
                  style={lang === "FR"
                    ? { background: "#D4AF36", color: "#000A4F", fontWeight: 600 }
                    : { color: "rgba(0,20,137,0.50)" }
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

const COLS = 16;
const TILE_ROWS = 18;

const tiles = Array.from({ length: COLS * TILE_ROWS }, (_, i) => ({
  color:      i % 2 === 0 ? "#001489" : "#000A4F",
  delay:      parseFloat(((i * 0.41 + (i % 7) * 0.29) % 14).toFixed(2)),
  duration:   parseFloat((5 + (i * 0.17 + (i % 5) * 0.33) % 8).toFixed(2)),
  maxOpacity: parseFloat((0.06 + (i * 0.07 + (i % 11) * 0.04) % 0.28).toFixed(2)),
  goldBorder: i % 11 === 0 || i % 19 === 7,
  borderDelay: parseFloat(((i * 0.63 + (i % 13) * 0.41) % 12).toFixed(2)),
  borderDur:   parseFloat((7 + (i * 0.23 + (i % 7) * 0.51) % 6).toFixed(2)),
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


function HeroV12() {
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
      className="relative min-h-screen bg-[#FCFCFC] flex overflow-hidden"
    >
      {/* ── LEFT PANEL: Editorial content ───────────────────────────────── */}
      <div className="relative z-10 w-[50%] flex flex-col justify-center px-12 xl:px-24 pt-24 pb-20">

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
                style={{ width: 1, height: 32, background: "#D4AF36", flexShrink: 0 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <p
                className="text-[#D4AF36] tracking-[0.22em] uppercase font-medium text-[16px]"
                data-testid="hero-eyebrow"
              >
                {featuredArticle?.category}
              </p>
            </div>

            {/* Large article headline */}
            <h1
              className="font-heading text-[#001489] font-bold text-[clamp(1.125rem,4vw,3.4375rem)] mb-8"
              style={{ lineHeight: "clamp(1.5rem, 1.1em, 3.75rem)" }}
              data-testid="hero-headline"
            >
              {featuredArticle?.title}
            </h1>

            {/* Read link */}
            <a
              href={`/insights/${featuredSlug}`}
              data-testid="hero-read-link"
              className="group inline-flex items-center gap-2 text-[#001489] hover:text-[#D4AF36] transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-[0.06em] underline underline-offset-4 decoration-[#001489]/25 group-hover:decoration-[#D4AF36]/60 transition-[text-decoration-color] duration-300">{ins.read}</span>
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
                backgroundColor: i === currentIndex ? "#D4AF36" : "transparent",
                border:          i === currentIndex ? "none" : "1px solid rgba(0,20,137,0.22)",
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

        {/* Tile shimmer grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${TILE_ROWS}, calc(100vw / ${COLS}))`,
            alignContent: "start",
          }}
        >
          {tiles.map((tile, i) => (
            <motion.div
              key={i}
              style={{ backgroundColor: "#001489" }}
              animate={{
                opacity: [
                  0,
                  (i % 29 === 7 || i % 41 === 3)
                    ? 1.0
                    : i % 4 === 0
                      ? tile.maxOpacity * 0.55
                      : 0,
                  0,
                ],
              }}
              transition={{
                duration: tile.duration * 2,
                delay: tile.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>


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
      <circle cx={cx} cy={cy} r={innerR} stroke="#D4AF36" strokeOpacity={0.4} strokeWidth={1} fill="none" />
      <circle cx={cx} cy={cy} r={8} fill="#D4AF36" fillOpacity={0.95} />
      <motion.circle
        cx={cx} cy={cy} r={innerR}
        stroke="#D4AF36" strokeWidth={1} fill="none"
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
          stroke={locked ? "#D4AF36" : "rgba(255,255,255,1)"}
          strokeOpacity={locked ? 0.18 + i * 0.1 : 0.14 + i * 0.08}
          strokeWidth={1}
          style={{ transition: "stroke 0.4s, stroke-opacity 0.4s" }}
        />
      ))}
      <line x1={CX} y1={30} x2={CX} y2={230} stroke="rgba(255,255,255,1)" strokeOpacity={0.18} strokeWidth={1} />
      <line x1={40} y1={CY} x2={280} y2={CY} stroke="rgba(255,255,255,1)" strokeOpacity={0.18} strokeWidth={1} />
      <circle cx={CX} cy={CY} r={4}
        fill={locked ? "#D4AF36" : "rgba(255,255,255,1)"}
        fillOpacity={locked ? 1 : 0.55}
        style={{ transition: "fill 0.3s, fill-opacity 0.3s" }}
      />
      {locked && (
        <AnimatePresence>
          <motion.circle
            key={flashKey}
            cx={CX} cy={CY} r={22}
            stroke="#D4AF36" strokeWidth={2} fill="none"
            initial={{ scale: 1, opacity: 0.9 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />
        </AnimatePresence>
      )}
      <motion.g style={{ x: rx, y: ry }}>
        <circle cx={CX} cy={CY} r={22} stroke="#D4AF36" strokeWidth={1.5} fill="none" strokeOpacity={0.9} />
        <path d={`M${CX-22} ${CY-9} L${CX-22} ${CY-22} L${CX-9} ${CY-22}`} stroke="#D4AF36" strokeWidth={1.5} fill="none" />
        <path d={`M${CX+9} ${CY-22} L${CX+22} ${CY-22} L${CX+22} ${CY-9}`} stroke="#D4AF36" strokeWidth={1.5} fill="none" />
        <path d={`M${CX+22} ${CY+9} L${CX+22} ${CY+22} L${CX+9} ${CY+22}`} stroke="#D4AF36" strokeWidth={1.5} fill="none" />
        <path d={`M${CX-9} ${CY+22} L${CX-22} ${CY+22} L${CX-22} ${CY+9}`} stroke="#D4AF36" strokeWidth={1.5} fill="none" />
        <line x1={CX-9} y1={CY} x2={CX+9} y2={CY} stroke="#D4AF36" strokeWidth={1} strokeOpacity={0.7} />
        <line x1={CX} y1={CY-9} x2={CX} y2={CY+9} stroke="#D4AF36" strokeWidth={1} strokeOpacity={0.7} />
      </motion.g>
      {locked && (
        <motion.text
          x={CX + 30} y={CY - 28}
          fill="#D4AF36" fontSize="8" fontFamily="monospace" letterSpacing="0.15em"
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
          stroke={i < 2 ? "#D4AF36" : "rgba(255,255,255,1)"}
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
      <circle cx={160} cy={130} r={7} fill="#D4AF36" fillOpacity={0.95} />
      <motion.circle
        cx={160} cy={130} r={18}
        stroke="#D4AF36" strokeWidth={1} fill="none"
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
            stroke={i === rings.length - 1 ? "#D4AF36" : "rgba(255,255,255,1)"}
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
        stroke="#D4AF36" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d={`M${cx-4} ${cy-4} Q${cx-4} ${cy-11} ${cx} ${cy-11} Q${cx+4} ${cy-11} ${cx+4} ${cy-4}`}
        stroke="#D4AF36" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
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

function DifferentiatorsV12() {
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
      className="bg-[#FCFCFC] py-28 px-8 border-t border-[#E5EAF4]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: card list */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <p className="text-[#D4AF36] tracking-[0.3em] uppercase font-medium mb-10 text-[16px]">
              {d.eyebrow}
            </p>
            <h2 className="font-heading text-[#001489] text-[clamp(1rem,1.8vw,1.375rem)] font-semibold mb-10 leading-[1.25]">
              {d.headline}
            </h2>
            <div className="flex flex-col">
              {d.cards.map((card, i) => (
                <button
                  key={i}
                  data-testid={`diff-card-${i}`}
                  onClick={() => { setActive(i); setPaused(true); setProgress(0); }}
                  className="group flex items-center gap-5 py-4 text-left border-b border-[#001489]/[0.08] last:border-b-0 focus:outline-none"
                >
                  <motion.span
                    className="w-0.5 flex-shrink-0 bg-[#001489] origin-top"
                    animate={{ height: i === active ? 32 : 12, opacity: i === active ? 1 : 0.2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.span
                    className="font-heading font-semibold leading-tight"
                    animate={{
                      color: i === active ? "#001489" : "rgba(0,20,137,0.28)",
                      fontSize: i === active ? "clamp(1rem, 1.6vw, 1.375rem)" : "clamp(0.875rem, 1.2vw, 1.1rem)",
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
            <div className="relative w-full overflow-hidden bg-[#001489]" style={{ aspectRatio: "4/3" }}>
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
                className="pt-8"
              >
                <h3 className="font-heading text-[#001489] text-[1.125rem] font-semibold mb-3 leading-[1.3]">
                  {d.cards[active].title}
                </h3>
                <p className="text-black/55 text-sm leading-[1.4] mb-7 max-w-sm">
                  {d.cards[active].description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-[#001489] text-white text-xs tracking-[0.18em] uppercase font-bold px-7 py-4 hover:bg-[#001070] transition-colors"
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

const gridAreas = ["corp", "estate", "litig", "arb", "employ", "banking", "tax", "immig", "ip", "tech"];
const cardImages = [imgCorp, imgEstate, imgLitig, imgArb, imgEmploy, imgBank, imgTax, imgImmig, imgIp, imgTech];

function BorderTrace() {
  return (
    <span className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="absolute top-0 left-0 right-0 h-px bg-[#D4AF36] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <span className="absolute top-0 right-0 bottom-0 w-px bg-[#D4AF36] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />
      <span className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF36] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
      <span className="absolute top-0 left-0 bottom-0 w-px bg-[#D4AF36] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-300" />
    </span>
  );
}

function PracticeAreasV12() {
  const { t } = useLang();
  const p = t.practices;

  return (
    <section
      id="expertise"
      data-testid="practice-areas-section"
      className="py-28 px-8 text-[#ffffff] bg-[#FCFCFC]"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <p className="text-[#D4AF36] tracking-[0.3em] uppercase font-medium mb-4 text-[16px]">
              {p.eyebrow}
            </p>
            <h2 className="font-heading text-[#001489] text-[clamp(1rem,1.8vw,1.375rem)] font-semibold leading-[1.25]">
              {p.headline}
            </h2>
          </div>
          <p className="text-black/45 text-sm max-w-xs leading-[1.4]">{p.subtext}</p>
        </motion.div>

        <div className="bento-grid">
          {p.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.4) }}
              data-testid={`practice-card-${i}`}
              className="group relative overflow-hidden cursor-pointer"
              style={{ gridArea: gridAreas[i] }}
            >
              <img
                src={cardImages[i]}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000A3D]/95 via-[#001070]/55 to-[#001489]/20" />
              <BorderTrace />
              <span className="absolute top-6 left-7 text-[#D4AF36] text-[10px] tracking-[0.25em] uppercase font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute inset-x-0 bottom-0 px-7 pb-7 flex flex-col">
                <h3 className="font-heading text-white font-semibold text-[1rem] leading-snug pr-[10%]">
                  {item.title}
                </h3>
                <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-[max-height] duration-400 pr-[10%]">
                  <p className="text-white/65 text-sm leading-[1.4] pt-2">{item.description}</p>
                </div>
                <div className="flex items-center gap-2 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  <span className="text-[#D4AF36] text-[10px] tracking-[0.2em] uppercase font-medium">{p.learnMore}</span>
                  <svg className="w-3 h-3 text-[#D4AF36]" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ────────────────────────────────────────────────────────────── */

function ContactFormV12() {
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
      className="bg-[#FCFCFC] py-28 px-8 border-t border-[#E5EAF4]"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[#D4AF36] tracking-[0.3em] uppercase font-medium mb-4 text-[16px]">
            {c.eyebrow}
          </p>
          <h2 className="font-heading text-[#001489] text-[clamp(1rem,1.8vw,1.375rem)] font-semibold leading-[1.25]">
            {c.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <p className="text-black/55 text-sm leading-[1.4]">{c.subtext}</p>

            <div>
              <p className="text-[#D4AF36] tracking-[0.25em] uppercase font-medium mb-5 text-[12px]">
                {c.officeLabel}
              </p>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-[#001489] text-sm font-semibold mb-1">{c.dubaiLabel}</p>
                  {f.dubaiAddr.map((line, i) => (
                    <p key={i} className="text-black/45 text-xs leading-[1.5]">{line}</p>
                  ))}
                  <a href="tel:+97145232421" data-testid="contact-address-phone-dubai"
                    className="text-black/45 text-xs hover:text-[#D4AF36] transition-colors">
                    +971 4 523 2421
                  </a>
                </div>
                <div>
                  <p className="text-[#001489] text-sm font-semibold mb-1">{c.parisLabel}</p>
                  {f.parisAddr.map((line, i) => (
                    <p key={i} className="text-black/45 text-xs leading-[1.5]">{line}</p>
                  ))}
                  <a href="tel:+33180270067" data-testid="contact-address-phone-paris"
                    className="text-black/45 text-xs hover:text-[#D4AF36] transition-colors">
                    +33 1 80 27 00 67
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#D4AF36] text-[10px] tracking-[0.25em] uppercase font-medium mb-1">
                Email
              </p>
              <a href={`mailto:${f.email}`} data-testid="contact-email"
                className="text-[#001489]/60 hover:text-[#D4AF36] text-sm transition-colors">
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
                className="border border-[#001489]/20 p-10 flex flex-col gap-4 h-full justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-[#001489]" fill="none" viewBox="0 0 20 20">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="font-heading text-[#001489] text-lg font-semibold">{c.successTitle}</h3>
                </div>
                <p className="text-black/55 text-sm leading-[1.4]">{c.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="contact-form" className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder={c.namePlaceholder} data-testid="input-name"
                    className="bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#001489]/40 transition-colors" />
                  <input type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder={c.emailPlaceholder} data-testid="input-email"
                    className="bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#001489]/40 transition-colors" />
                </div>
                <div className="relative">
                  <select name="subject" required value={form.subject} onChange={handleChange}
                    data-testid="select-subject"
                    className="w-full bg-[#001489]/[0.03] border border-[#001489]/15 text-sm px-4 py-3.5 outline-none focus:border-[#001489]/40 transition-colors appearance-none cursor-pointer"
                    style={{ color: form.subject ? "#001489" : "rgba(0,20,137,0.3)" }}>
                    <option value="" disabled hidden>{c.subjectPlaceholder}</option>
                    {c.subjectOptions.map((opt, i) => (
                      <option key={i} value={opt} style={{ color: "#001489", background: "#fff" }}>{opt}</option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#001489]/30"
                    fill="none" viewBox="0 0 12 12">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                  placeholder={c.messagePlaceholder} data-testid="input-message"
                  className="bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#001489]/40 transition-colors resize-none" />
                <button type="submit" disabled={submitting} data-testid="button-submit"
                  className="self-start bg-[#001489] text-white text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover:bg-[#001070] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
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

function FooterV12() {
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
    <footer id="footer" data-testid="footer" className="bg-[#001489] border-t border-white/10">
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
                className="block text-[#D4AF36] text-sm hover:text-[#E8C97E] transition-colors">
                {f.email}
              </a>
              <a href={`tel:${f.phone}`} data-testid="footer-phone-dubai"
                className="block text-white/40 text-sm hover:text-[#E8C97E] transition-colors">
                Dubai: {f.phone}
              </a>
              <a href="tel:+33180270067" data-testid="footer-phone-paris"
                className="block text-white/40 text-sm hover:text-[#E8C97E] transition-colors">
                Paris: +33 1 80 27 00 67
              </a>
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
              {f.dubaiLabel}
            </p>
            <address className="not-italic text-white/50 text-sm leading-[1.4]">
              {f.dubaiAddr.map((line, i) => <span key={i} className="block">{line}</span>)}
            </address>
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
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

function HomeV1Point4Inner() {
  return (
    <div className="bg-[#FCFCFC] min-h-screen" data-testid="home-v1-4-page">
      <HeaderV12 />
      <main>
        <HeroV12 />
        <DifferentiatorsV12 />
        <PracticeAreasV12 />
        <ContactFormV12 />
      </main>
      <FooterV12 />
    </div>
  );
}

export default function HomeV1Point4() {
  return (
    <LanguageProvider>
      <HomeV1Point4Inner />
    </LanguageProvider>
  );
}
