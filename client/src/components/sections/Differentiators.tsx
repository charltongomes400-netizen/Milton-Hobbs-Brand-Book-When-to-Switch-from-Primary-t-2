import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

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
          stroke={locked ? "#D4AF36" : "#8099FF"}
          strokeOpacity={locked ? 0.18 + i * 0.1 : 0.08 + i * 0.05}
          strokeWidth={1}
          style={{ transition: "stroke 0.4s, stroke-opacity 0.4s" }}
        />
      ))}

      <line x1={CX} y1={30} x2={CX} y2={230} stroke="#8099FF" strokeOpacity={0.12} strokeWidth={1} />
      <line x1={40} y1={CY} x2={280} y2={CY} stroke="#8099FF" strokeOpacity={0.12} strokeWidth={1} />

      <circle cx={CX} cy={CY} r={4}
        fill={locked ? "#D4AF36" : "#8099FF"}
        fillOpacity={locked ? 1 : 0.35}
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
        <circle cx={CX} cy={CY} r={22}
          stroke="#D4AF36" strokeWidth={1.5} fill="none" strokeOpacity={0.9}
        />
        <path d={`M${CX - 22} ${CY - 9} L${CX - 22} ${CY - 22} L${CX - 9} ${CY - 22}`} stroke="#D4AF36" strokeWidth={1.5} fill="none" />
        <path d={`M${CX + 9} ${CY - 22} L${CX + 22} ${CY - 22} L${CX + 22} ${CY - 9}`} stroke="#D4AF36" strokeWidth={1.5} fill="none" />
        <path d={`M${CX + 22} ${CY + 9} L${CX + 22} ${CY + 22} L${CX + 9} ${CY + 22}`} stroke="#D4AF36" strokeWidth={1.5} fill="none" />
        <path d={`M${CX - 9} ${CY + 22} L${CX - 22} ${CY + 22} L${CX - 22} ${CY + 9}`} stroke="#D4AF36" strokeWidth={1.5} fill="none" />
        <line x1={CX - 9} y1={CY} x2={CX + 9} y2={CY} stroke="#D4AF36" strokeWidth={1} strokeOpacity={0.7} />
        <line x1={CX} y1={CY - 9} x2={CX} y2={CY + 9} stroke="#D4AF36" strokeWidth={1} strokeOpacity={0.7} />
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
