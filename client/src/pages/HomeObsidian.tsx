import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { articles } from "@/data/articles";
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
import imgCompliance     from "@assets/generated_images/insight-compliance.png";
import imgFamilyBusiness from "@assets/generated_images/insight-family-business.png";
import imgDigitalPrivacy from "@assets/generated_images/insight-digital-privacy.png";
import imgMA             from "@assets/generated_images/insight-ma-structuring.png";

const COLS = 16;
const ROWS = 10;

const tiles = Array.from({ length: COLS * ROWS }, (_, i) => ({
  color:        i % 2 === 0 ? "#1C283D" : "#030508",
  delay:        parseFloat(((i * 0.41 + (i % 7) * 0.29) % 9).toFixed(2)),
  duration:     parseFloat((2.5 + (i * 0.17 + (i % 5) * 0.33) % 4.5).toFixed(2)),
  maxOpacity:   parseFloat((0.08 + (i * 0.09 + (i % 11) * 0.06) % 0.52).toFixed(2)),
  goldBorder:   i % 11 === 0 || i % 19 === 7,
  borderDelay:  parseFloat(((i * 0.63 + (i % 13) * 0.41) % 7).toFixed(2)),
  borderDur:    parseFloat((4 + (i * 0.23 + (i % 7) * 0.51) % 4).toFixed(2)),
}));

function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#141C2E" }}
    >
      {/* Symmetric tile grid — fades in/out randomly per cell */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          display:               "grid",
          gridTemplateColumns:   `repeat(${COLS}, 1fr)`,
          gridTemplateRows:      `repeat(${ROWS}, 1fr)`,
        }}
      >
        {tiles.map((tile, i) => (
          <motion.div
            key={i}
            style={{ backgroundColor: tile.color }}
            animate={{
              opacity: [0, tile.maxOpacity, 0],
              ...(tile.goldBorder ? {
                boxShadow: [
                  "inset 0 0 0 2px rgba(195,169,65,0)",
                  "inset 0 0 0 2px rgba(195,169,65,1)",
                  "inset 0 0 0 2px rgba(195,169,65,0)",
                ],
              } : {}),
            }}
            transition={{
              opacity:    { duration: tile.duration,    delay: tile.delay,        repeat: Infinity, ease: "easeInOut" },
              boxShadow:  { duration: tile.borderDur,   delay: tile.borderDelay,  repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </div>

      {/* Subtle grid lines over the tiles */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: `calc(100% / ${COLS}) calc(100% / ${ROWS})`,
        }}
      />

      {/* Left-side vignette to keep text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 110% at 10% 55%, rgba(0,20,137,0.88) 0%, rgba(0,20,137,0.55) 45%, rgba(0,20,137,0.1) 75%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 pt-36 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="max-w-[700px]"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#A8B4C0] text-xs tracking-[0.3em] uppercase font-semibold mb-8"
            data-testid="hero-eyebrow"
          >
            {h.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-white font-bold text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-tight mb-8"
            data-testid="hero-headline"
          >
            {h.headline.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "72px" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-[2px] mb-8" style={{ backgroundColor: "#A8B4C0" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-white/60 text-base leading-relaxed max-w-[560px] mb-12"
            data-testid="hero-subheadline"
          >
            {h.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <TracingButton href="#contact" variant="solid" data-testid="cta-book">
              {h.cta1}
            </TracingButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-8 flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
        <span className="text-white/35 text-[10px] tracking-[0.25em] uppercase">
          {t.hero.scroll}
        </span>
      </motion.div>
    </section>
  );
}

function TracingButton({
  children,
  href,
  variant,
  "data-testid": testId,
}: {
  children: ReactNode;
  href: string;
  variant: "solid" | "outline";
  "data-testid"?: string;
}) {
  return (
    <a
      href={href}
      data-testid={testId}
      className={`relative group inline-flex items-center px-8 py-[14px] text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
        variant === "solid"
          ? "bg-white text-[#141C2E] hover:bg-[#A8B4C0] hover:text-white"
          : "border border-white/30 text-white hover:border-white hover:bg-white/10"
      }`}
    >
      {children}
    </a>
  );
}


// ─────────────────────────────────────────────────

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
            stroke="#8A9BB8" strokeWidth={1}
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
            fill="#8A9BB8" fillOpacity={0.5}
            animate={{ fillOpacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={outerR} stroke="#8A9BB8" strokeOpacity={0.1} strokeWidth={1} fill="none" />
      <circle cx={cx} cy={cy} r={innerR} stroke="#A8B4C0" strokeOpacity={0.4} strokeWidth={1} fill="none" />
      <circle cx={cx} cy={cy} r={8} fill="#A8B4C0" fillOpacity={0.95} />
      <motion.circle
        cx={cx} cy={cy} r={innerR}
        stroke="#A8B4C0" strokeWidth={1} fill="none"
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
          stroke={locked ? "#A8B4C0" : "#8A9BB8"}
          strokeOpacity={locked ? 0.18 + i * 0.1 : 0.08 + i * 0.05}
          strokeWidth={1}
          style={{ transition: "stroke 0.4s, stroke-opacity 0.4s" }}
        />
      ))}

      <line x1={CX} y1={30} x2={CX} y2={230} stroke="#8A9BB8" strokeOpacity={0.12} strokeWidth={1} />
      <line x1={40} y1={CY} x2={280} y2={CY} stroke="#8A9BB8" strokeOpacity={0.12} strokeWidth={1} />

      <circle cx={CX} cy={CY} r={4}
        fill={locked ? "#A8B4C0" : "#8A9BB8"}
        fillOpacity={locked ? 1 : 0.35}
        style={{ transition: "fill 0.3s, fill-opacity 0.3s" }}
      />

      {locked && (
        <AnimatePresence>
          <motion.circle
            key={flashKey}
            cx={CX} cy={CY} r={22}
            stroke="#A8B4C0" strokeWidth={2} fill="none"
            initial={{ scale: 1, opacity: 0.9 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />
        </AnimatePresence>
      )}

      <motion.g style={{ x: rx, y: ry }}>
        <circle cx={CX} cy={CY} r={22}
          stroke="#A8B4C0" strokeWidth={1.5} fill="none" strokeOpacity={0.9}
        />
        <path d={`M${CX - 22} ${CY - 9} L${CX - 22} ${CY - 22} L${CX - 9} ${CY - 22}`} stroke="#A8B4C0" strokeWidth={1.5} fill="none" />
        <path d={`M${CX + 9} ${CY - 22} L${CX + 22} ${CY - 22} L${CX + 22} ${CY - 9}`} stroke="#A8B4C0" strokeWidth={1.5} fill="none" />
        <path d={`M${CX + 22} ${CY + 9} L${CX + 22} ${CY + 22} L${CX + 9} ${CY + 22}`} stroke="#A8B4C0" strokeWidth={1.5} fill="none" />
        <path d={`M${CX - 9} ${CY + 22} L${CX - 22} ${CY + 22} L${CX - 22} ${CY + 9}`} stroke="#A8B4C0" strokeWidth={1.5} fill="none" />
        <line x1={CX - 9} y1={CY} x2={CX + 9} y2={CY} stroke="#A8B4C0" strokeWidth={1} strokeOpacity={0.7} />
        <line x1={CX} y1={CY - 9} x2={CX} y2={CY + 9} stroke="#A8B4C0" strokeWidth={1} strokeOpacity={0.7} />
      </motion.g>

      {locked && (
        <motion.text
          x={CX + 30} y={CY - 28}
          fill="#A8B4C0" fontSize="8" fontFamily="monospace" letterSpacing="0.15em"
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
    { cx: 55, cy: 100, label: "FR" },
    { cx: 55, cy: 160, label: "EU" },
    { cx: 265, cy: 100, label: "UAE" },
    { cx: 265, cy: 160, label: "GCC" },
  ];
  const paths = [
    { d: "M60 100 Q160 70 260 100", delay: 0 },
    { d: "M60 160 Q160 190 260 160", delay: 0.6 },
    { d: "M60 100 Q160 130 260 160", delay: 1.2 },
    { d: "M60 160 Q160 130 260 100", delay: 1.8 },
  ];
  return (
    <svg viewBox="0 0 320 260" fill="none" className="w-full h-full">
      {paths.map((p, i) => (
        <motion.path
          key={i} d={p.d}
          stroke={i < 2 ? "#A8B4C0" : "#8A9BB8"}
          strokeOpacity={i < 2 ? 0.5 : 0.25}
          strokeWidth={i < 2 ? 1.2 : 1}
          strokeDasharray="220"
          animate={{ strokeDashoffset: [220, 0, -220] }}
          transition={{ duration: 3, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={5} fill="#8A9BB8" fillOpacity={0.65} />
          <text x={n.cx} y={n.cy + (i < 2 ? -12 : 18)}
            fill="#8A9BB8" fillOpacity={0.45} fontSize="8"
            fontFamily="sans-serif" textAnchor="middle"
          >{n.label}</text>
        </g>
      ))}
      <circle cx={160} cy={130} r={7} fill="#A8B4C0" fillOpacity={0.95} />
      <motion.circle
        cx={160} cy={130} r={18}
        stroke="#A8B4C0" strokeWidth={1} fill="none"
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
            stroke={i === rings.length - 1 ? "#A8B4C0" : "#8A9BB8"}
            strokeOpacity={i === rings.length - 1 ? 0.7 : 0.1 + i * 0.07}
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
        stroke="#A8B4C0" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d={`M${cx - 4} ${cy - 4} Q${cx - 4} ${cy - 11} ${cx} ${cy - 11} Q${cx + 4} ${cy - 11} ${cx + 4} ${cy - 4}`}
        stroke="#A8B4C0" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function Visual({ index }: { index: number }) {
  const visuals = [FounderVisual, PrecisionVisual, CrossBorderVisual, DiscretionVisual];
  const V = visuals[index];
  return <V />;
}

function Differentiators() {
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
      data-testid="differentiators-section"
      className="py-28 px-8" style={{ backgroundColor: "#141C2E" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <p className="text-[#A8B4C0] text-xs tracking-[0.3em] uppercase font-medium mb-10">
              {d.eyebrow}
            </p>
            <h2 className="font-heading text-white text-[clamp(1.6rem,2.5vw,2.2rem)] font-semibold tracking-tight mb-10 leading-snug">
              {d.headline}
            </h2>
            <div className="flex flex-col">
              {d.cards.map((card, i) => (
                <button
                  key={i}
                  data-testid={`diff-card-${i}`}
                  onClick={() => { setActive(i); setPaused(true); setProgress(0); }}
                  className="group flex items-center gap-5 py-4 text-left border-b border-white/[0.07] last:border-b-0 focus:outline-none"
                >
                  <motion.span
                    className="w-0.5 flex-shrink-0 origin-top" style={{ backgroundColor: "#A8B4C0" }}
                    animate={{ height: i === active ? 32 : 12, opacity: i === active ? 1 : 0.2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.span
                    className="font-heading font-semibold tracking-tight leading-tight"
                    animate={{
                      color: i === active ? "#ffffff" : "rgba(255,255,255,0.3)",
                      fontSize: i === active ? "clamp(1.35rem, 2vw, 1.85rem)" : "clamp(1.1rem, 1.6vw, 1.55rem)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {card.title}
                  </motion.span>
                </button>
              ))}
            </div>
          </div>

          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative w-full overflow-hidden" style={{ backgroundColor: "#080C16", aspectRatio: "4/3" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Visual index={active} />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10">
                <motion.div
                  className="h-full" style={{ backgroundColor: "#A8B4C0" }}
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
                <h3 className="font-heading text-white text-lg font-semibold mb-3 tracking-tight">
                  {d.cards[active].title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-sm">
                  {d.cards[active].description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-[#A8B4C0] text-[#141C2E] text-xs tracking-[0.18em] uppercase font-bold px-7 py-4 hover:bg-[#8E9FAD] transition-colors"
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


// ─────────────────────────────────────────────────

const gridAreas = ["corp", "estate", "litig", "arb", "employ", "banking", "tax", "immig", "ip", "tech"];
const cardImages = [imgCorp, imgEstate, imgLitig, imgArb, imgEmploy, imgBank, imgTax, imgImmig, imgIp, imgTech];

function PracticeCard({
  title,
  description,
  index,
  area,
  learnMore,
}: {
  title: string;
  description: string;
  index: number;
  area: string;
  learnMore: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.4) }}
      data-testid={`practice-card-${index}`}
      className="group relative overflow-hidden cursor-pointer"
      style={{ gridArea: area }}
    >
      <img
        src={cardImages[index]}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#06090F]/95 via-[#0D1220]/55 to-[#141C2E]/20" />

      <BorderTrace />

      <span className="absolute top-6 left-7 text-[#A8B4C0] text-[10px] tracking-[0.25em] uppercase font-medium">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-0 bottom-0 px-7 pb-7 flex flex-col">
        <h3 className="font-heading text-white font-semibold tracking-tight text-base leading-snug pr-[10%]">
          {title}
        </h3>

        <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-[max-height] duration-400 pr-[10%]">
          <p className="text-white/65 text-sm leading-relaxed pt-2">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          <span className="text-[#A8B4C0] text-[10px] tracking-[0.2em] uppercase font-medium">
            {learnMore}
          </span>
          <svg className="w-3 h-3 text-[#A8B4C0]" fill="none" viewBox="0 0 12 12">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function PracticeAreas() {
  const { t } = useLang();
  const p = t.practices;

  return (
    <section
      id="expertise"
      data-testid="practice-areas-section"
      className="py-28 px-8" style={{ backgroundColor: "#0D1220" }}
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
            <p className="text-[#A8B4C0] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              {p.eyebrow}
            </p>
            <h2 className="font-heading text-white text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">
              {p.headline}
            </h2>
          </div>
          <p className="text-white/45 text-sm max-w-xs leading-relaxed">{p.subtext}</p>
        </motion.div>

        <div className="bento-grid">
          {p.items.map((item, i) => (
            <PracticeCard
              key={i}
              title={item.title}
              description={item.description}
              index={i}
              area={gridAreas[i]}
              learnMore={p.learnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BorderTrace() {
  return (
    <span className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="absolute top-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ backgroundColor: "#A8B4C0" }} />
      <span className="absolute top-0 right-0 bottom-0 w-px origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" style={{ backgroundColor: "#A8B4C0" }} />
      <span className="absolute bottom-0 left-0 right-0 h-px origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" style={{ backgroundColor: "#A8B4C0" }} />
      <span className="absolute top-0 left-0 bottom-0 w-px origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-300" style={{ backgroundColor: "#A8B4C0" }} />
    </span>
  );
}


// ─────────────────────────────────────────────────

const articleImages = [imgCompliance, imgFamilyBusiness, imgDigitalPrivacy, imgMA];

const categoryColors: Record<string, string> = {
  Compliance:          "text-[#0096C7]",
  Corporate:           "text-[#6B46C1]",
  Technology:          "text-[#2D9D6E]",
  "M&A":               "text-[#C05621]",
  Family:              "text-[#C05621]",
  Conformité:          "text-[#0096C7]",
  Technologie:         "text-[#2D9D6E]",
  "Fusions & Acquisitions": "text-[#C05621]",
};

function ArticleCard({
  article,
  index,
  readLabel,
  slug,
}: {
  article: { category: string; title: string; excerpt: string; readTime: string; date: string };
  index: number;
  readLabel: string;
  slug: string;
}) {
  const colorClass = categoryColors[article.category] ?? "text-[#6B7280]";
  const img = articleImages[index];

  return (
    <motion.a
      href={`/insights/${slug}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      data-testid={`insight-card-${index}`}
      className="group flex flex-col rounded-sm overflow-hidden border border-[#E2E5EC] bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative h-44 flex-shrink-0 overflow-hidden" style={{ backgroundColor: "#F2F3F5" }}>
        {img ? (
          <img
            src={img}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-testid={`insight-card-img-${index}`}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141C2E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col flex-1 p-6 gap-3">
        <div className="flex items-center gap-3">
          <span className={`text-[10px] font-bold tracking-[0.18em] uppercase ${colorClass}`}>
            {article.category}
          </span>
          <span className="text-[#9CA3AF] text-[11px]">{article.readTime}</span>
        </div>

        <h3 className="font-heading text-[#141C2E] text-[0.95rem] font-bold leading-snug tracking-tight group-hover:text-[#253347] transition-colors">
          {article.title}
        </h3>

        <p className="text-[#6B7280] text-[0.8rem] leading-relaxed flex-1">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-[#F0F4FB] mt-auto">
          <span className="text-[#9CA3AF] text-[11px]">{article.date}</span>
          <div className="flex items-center gap-1.5 text-[#141C2E] group-hover:text-[#A8B4C0] transition-colors">
            <span className="text-[11px] font-medium tracking-wide">{readLabel}</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function Insights() {
  const { t } = useLang();
  const ins = t.insights;

  return (
    <section
      id="insights"
      data-header-theme="light"
      data-testid="insights-section"
      className="bg-white py-24 px-8 relative z-0"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <p className="text-[#8A9BB8] text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">
              {ins.eyebrow}
            </p>
            <h2 className="font-heading text-[#141C2E] text-[clamp(1.6rem,2.8vw,2.5rem)] font-bold tracking-tight">
              {ins.headline}
            </h2>
          </div>
          <a
            href="#insights"
            data-testid="view-all-insights"
            className="group flex items-center gap-2 text-[#141C2E] hover:text-[#A8B4C0] text-xs tracking-[0.15em] uppercase font-medium transition-colors whitespace-nowrap"
          >
            <span>{ins.viewAll}</span>
            <svg
              className="w-3 h-3 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ins.articles.map((article, i) => (
            <ArticleCard key={i} article={article} index={i} readLabel={ins.read} slug={articles[i]?.slug ?? ""} />
          ))}
        </div>
      </div>
    </section>
  );
}


// ─────────────────────────────────────────────────

function ContactForm() {
  const { t } = useLang();
  const c = t.contact;
  const f = t.footer;

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      data-header-theme="light"
      data-testid="contact-section"
      className="bg-white py-28 px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#A8B4C0] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            {c.eyebrow}
          </p>
          <h2 className="font-heading text-[#141C2E] text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">
            {c.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-10"
          >
            <p className="text-[#141C2E]/60 text-sm leading-relaxed">{c.subtext}</p>

            <div>
              <p className="text-[#A8B4C0] text-[10px] tracking-[0.25em] uppercase font-medium mb-5">
                {c.officeLabel}
              </p>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-[#141C2E] text-sm font-semibold mb-1">{c.dubaiLabel}</p>
                  {f.dubaiAddr.map((line, i) => (
                    <p key={i} className="text-[#141C2E]/50 text-xs leading-relaxed">{line}</p>
                  ))}
                </div>
                <div>
                  <p className="text-[#141C2E] text-sm font-semibold mb-1">{c.parisLabel}</p>
                  {f.parisAddr.map((line, i) => (
                    <p key={i} className="text-[#141C2E]/50 text-xs leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${f.email}`}
                data-testid="contact-email"
                className="text-[#141C2E]/60 hover:text-[#A8B4C0] text-sm transition-colors"
              >
                {f.email}
              </a>
              <a
                href={`tel:${f.phone}`}
                data-testid="contact-phone"
                className="text-[#141C2E]/60 hover:text-[#A8B4C0] text-sm transition-colors"
              >
                {f.phone}
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
              <div
                data-testid="contact-success"
                className="border border-[#A8B4C0]/40 p-10 flex flex-col gap-4 h-full justify-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-[#A8B4C0]" fill="none" viewBox="0 0 20 20">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="font-heading text-[#141C2E] text-lg font-semibold">{c.successTitle}</h3>
                </div>
                <p className="text-[#141C2E]/60 text-sm leading-relaxed">{c.successText}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={c.namePlaceholder}
                    data-testid="input-name"
                    className="/[0.03] border border-[#141C2E]/15 text-[#141C2E] placeholder-[#141C2E]/30 text-sm px-4 py-3.5 outline-none focus:border-[#A8B4C0]/60 transition-colors" style={{ backgroundColor: "#141C2E" }}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={c.emailPlaceholder}
                    data-testid="input-email"
                    className="/[0.03] border border-[#141C2E]/15 text-[#141C2E] placeholder-[#141C2E]/30 text-sm px-4 py-3.5 outline-none focus:border-[#A8B4C0]/60 transition-colors" style={{ backgroundColor: "#141C2E" }}
                  />
                </div>

                <div className="relative">
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    data-testid="select-subject"
                    className="w-full /[0.03] border border-[#141C2E]/15 text-sm px-4 py-3.5 outline-none focus:border-[#A8B4C0]/60 transition-colors appearance-none cursor-pointer" style={{ backgroundColor: "#141C2E" }}
                    style={{ color: form.subject ? "#141C2E" : "rgba(0,20,137,0.3)" }}
                  >
                    <option value="" disabled hidden>{c.subjectPlaceholder}</option>
                    {c.subjectOptions.map((opt, i) => (
                      <option key={i} value={opt} style={{ color: "#141C2E", background: "#fff" }}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#141C2E]/30"
                    fill="none"
                    viewBox="0 0 12 12"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>

                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={c.messagePlaceholder}
                  data-testid="input-message"
                  className="/[0.03] border border-[#141C2E]/15 text-[#141C2E] placeholder-[#141C2E]/30 text-sm px-4 py-3.5 outline-none focus:border-[#A8B4C0]/60 transition-colors resize-none" style={{ backgroundColor: "#141C2E" }}
                />

                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="button-submit"
                  className="self-start bg-[#A8B4C0] text-[#141C2E] text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover:bg-[#8E9FAD] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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


// ─────────────────────────────────────────────────

function Footer() {
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
    <footer id="contact" data-testid="footer" className="border-t border-white/8" style={{ backgroundColor: "#080C16" }}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-[#8E9FAD]/40">
          <div className="lg:col-span-5 lg:pr-16">
            <p className="font-heading text-white font-semibold text-lg tracking-[0.18em] uppercase mb-5">
              Milton Hobbs
            </p>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8 pr-[20%]">
              {f.tagline}
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${f.email}`}
                data-testid="footer-email"
                className="block text-[#A8B4C0] text-sm hover:text-[#C8D0D8] transition-colors"
              >
                {f.email}
              </a>
              <p className="text-white/40 text-sm">{f.phone}</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
              {f.dubaiLabel}
            </p>
            <address className="not-italic text-white/50 text-sm leading-[1.9]">
              {f.dubaiAddr.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </address>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
              {f.parisLabel}
            </p>
            <address className="not-italic text-white/50 text-sm leading-[1.9]">
              {f.parisAddr.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </address>
          </div>
        </div>

        <div className="py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border-b border-white/5">
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {navEntries.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/30 hover:text-white/60 text-[10px] tracking-[0.18em] uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/30 hover:text-white/60 text-[10px] tracking-[0.18em] uppercase transition-colors"
            >
              {f.privacy}
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-white/60 text-[10px] tracking-[0.18em] uppercase transition-colors"
            >
              {f.cookie}
            </a>
          </div>
        </div>

        <div className="py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-white/25 text-xs shrink-0">{f.copyright}</p>
          <p
            data-testid="footer-disclaimer"
            className="text-white/20 text-[11px] max-w-lg sm:text-right leading-relaxed"
          >
            {f.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}


function ObsidianInner() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#141C2E" }} data-testid="home-v6-page">
      <Header />
      <main>
        <Hero />
        <Insights />
        <Differentiators />
        <PracticeAreas />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}

export default function Obsidian() {
  return (
    <LanguageProvider>
      <ObsidianInner />
    </LanguageProvider>
  );
}
