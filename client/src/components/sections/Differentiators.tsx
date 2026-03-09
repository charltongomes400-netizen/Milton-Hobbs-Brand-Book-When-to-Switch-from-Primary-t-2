import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const CYCLE_MS = 4500;

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
            stroke="#8099FF" strokeWidth={1}
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
            fill="#8099FF" fillOpacity={0.5}
            animate={{ fillOpacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={outerR} stroke="#8099FF" strokeOpacity={0.1} strokeWidth={1} fill="none" />
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
  const cx = 160, cy = 130;
  const rings = [90, 65, 42, 20];
  return (
    <svg viewBox="0 0 320 260" fill="none" className="w-full h-full">
      {rings.map((r, i) => (
        <motion.circle
          key={i} cx={cx} cy={cy} r={r}
          stroke={i === rings.length - 1 ? "#D4AF36" : "#8099FF"}
          strokeOpacity={i === rings.length - 1 ? 0.6 : 0.12 + i * 0.08}
          strokeWidth={i === rings.length - 1 ? 1.5 : 1} fill="none"
          animate={{ strokeOpacity: i === rings.length - 1 ? [0.4, 0.8, 0.4] : [0.08 + i * 0.06, 0.2 + i * 0.08, 0.08 + i * 0.06] }}
          transition={{ duration: 2.8, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.line x1={cx} y1={cy - 100} x2={cx} y2={cy - 24}
        stroke="#8099FF" strokeOpacity={0.3} strokeWidth={1}
        animate={{ strokeOpacity: [0.15, 0.45, 0.15] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.line x1={cx} y1={cy + 24} x2={cx} y2={cy + 100}
        stroke="#8099FF" strokeOpacity={0.3} strokeWidth={1}
        animate={{ strokeOpacity: [0.15, 0.45, 0.15] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.line x1={cx - 100} y1={cy} x2={cx - 24} y2={cy}
        stroke="#8099FF" strokeOpacity={0.3} strokeWidth={1}
        animate={{ strokeOpacity: [0.15, 0.45, 0.15] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.line x1={cx + 24} y1={cy} x2={cx + 100} y2={cy}
        stroke="#8099FF" strokeOpacity={0.3} strokeWidth={1}
        animate={{ strokeOpacity: [0.15, 0.45, 0.15] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <circle cx={cx} cy={cy} r={5} fill="#D4AF36" fillOpacity={0.95} />
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
          stroke={i < 2 ? "#D4AF36" : "#8099FF"}
          strokeOpacity={i < 2 ? 0.5 : 0.25}
          strokeWidth={i < 2 ? 1.2 : 1}
          strokeDasharray="220"
          animate={{ strokeDashoffset: [220, 0, -220] }}
          transition={{ duration: 3, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={5} fill="#8099FF" fillOpacity={0.65} />
          <text x={n.cx} y={n.cy + (i < 2 ? -12 : 18)}
            fill="#8099FF" fillOpacity={0.45} fontSize="8"
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
            stroke={i === rings.length - 1 ? "#D4AF36" : "#8099FF"}
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
        stroke="#D4AF36" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d={`M${cx - 4} ${cy - 4} Q${cx - 4} ${cy - 11} ${cx} ${cy - 11} Q${cx + 4} ${cy - 11} ${cx + 4} ${cy - 4}`}
        stroke="#D4AF36" strokeWidth={1.2} fill="none" strokeOpacity={0.85}
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

export function Differentiators() {
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
      className="bg-[#001489] py-28 px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <p className="text-[#D4AF36] text-xs tracking-[0.3em] uppercase font-medium mb-10">
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
                    className="w-0.5 flex-shrink-0 bg-[#D4AF36] origin-top"
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
            <div className="relative bg-[#000A4F] w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
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
                  className="h-full bg-[#D4AF36]"
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
                  className="inline-flex items-center gap-3 bg-[#D4AF36] text-[#001489] text-xs tracking-[0.18em] uppercase font-bold px-7 py-4 hover:bg-[#C4A030] transition-colors"
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
