import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const CYCLE_MS = 4500;

function BoutiqueVisual() {
  const radii = [130, 100, 72, 46, 20];
  return (
    <svg viewBox="0 0 320 260" fill="none" className="w-full h-full">
      {radii.map((r, i) => (
        <motion.rect
          key={i}
          x={160 - r} y={130 - r}
          width={r * 2} height={r * 2}
          stroke={i === 4 ? "#D4AF36" : "#8099FF"}
          strokeOpacity={0.12 + i * 0.14}
          strokeWidth={1}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, delay: i * 0.45, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.rect
        x={153} y={123} width={14} height={14} fill="#D4AF36"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function TrilingualVisual() {
  const positions = [
    { cx: 140, cy: 115 },
    { cx: 180, cy: 115 },
    { cx: 160, cy: 148 },
  ];
  return (
    <svg viewBox="0 0 320 260" fill="none" className="w-full h-full">
      {positions.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx} cy={p.cy} r={50}
          stroke="#8099FF" strokeOpacity={0.3} strokeWidth={1} fill="none"
          animate={{ strokeOpacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 2.5, delay: i * 0.7, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <circle cx={160} cy={126} r={9} fill="#D4AF36" fillOpacity={0.95} />
      <motion.circle
        cx={160} cy={126} r={22}
        stroke="#D4AF36" strokeOpacity={0.35} strokeWidth={1} fill="none"
        animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: "160px 126px" }}
      />
      {["EN", "FR", "AR"].map((label, i) => (
        <text
          key={label}
          x={positions[i].cx} y={positions[i].cy - 58}
          fill="#8099FF" fillOpacity={0.5}
          fontSize="9" fontFamily="sans-serif" textAnchor="middle"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

function CrossBorderVisual() {
  return (
    <svg viewBox="0 0 320 260" fill="none" className="w-full h-full">
      <circle cx={55} cy={130} r={5} fill="#8099FF" fillOpacity={0.7} />
      <circle cx={265} cy={130} r={5} fill="#8099FF" fillOpacity={0.7} />
      <motion.path
        d="M60 130 Q160 60 260 130"
        stroke="#D4AF36" strokeWidth={1.5}
        strokeDasharray="240" strokeDashoffset="240"
        animate={{ strokeDashoffset: [240, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
      />
      <motion.path
        d="M60 130 Q160 200 260 130"
        stroke="#8099FF" strokeOpacity={0.45} strokeWidth={1}
        strokeDasharray="240" strokeDashoffset="-240"
        animate={{ strokeDashoffset: [-240, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
      />
      <circle cx={160} cy={130} r={7} fill="#D4AF36" fillOpacity={0.95} />
      <motion.circle
        cx={160} cy={130} r={14}
        stroke="#D4AF36" strokeWidth={1} fill="none"
        animate={{ r: [14, 24, 14], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
      />
      {[["EU", 45], ["GCC", 275]].map(([label, x]) => (
        <text key={label as string} x={x as number} y={158}
          fill="#8099FF" fillOpacity={0.5} fontSize="9"
          fontFamily="sans-serif" textAnchor="middle"
        >{label}</text>
      ))}
      <line x1={55} y1={155} x2={55} y2={172} stroke="#8099FF" strokeOpacity={0.25} strokeWidth={1} />
      <line x1={265} y1={155} x2={265} y2={172} stroke="#8099FF" strokeOpacity={0.25} strokeWidth={1} />
      <line x1={40} y1={172} x2={70} y2={172} stroke="#8099FF" strokeOpacity={0.25} strokeWidth={1} />
      <line x1={250} y1={172} x2={280} y2={172} stroke="#8099FF" strokeOpacity={0.25} strokeWidth={1} />
    </svg>
  );
}

function SavoirFaireVisual() {
  return (
    <svg viewBox="0 0 320 260" fill="none" className="w-full h-full">
      <path
        d="M75 220 L75 138 Q75 72 160 72 Q245 72 245 138 L245 220"
        stroke="#8099FF" strokeOpacity={0.35} strokeWidth={1.5} fill="none"
      />
      <motion.path
        d="M108 220 L108 145 Q108 104 160 104 Q212 104 212 145 L212 220"
        stroke="#D4AF36" strokeOpacity={0.65} strokeWidth={1} fill="none"
        animate={{ strokeOpacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx={160} cy={82} r={7} fill="#D4AF36"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <line x1={50} y1={220} x2={270} y2={220} stroke="#8099FF" strokeOpacity={0.25} strokeWidth={1} />
      {[75, 245].map((x, i) => (
        <motion.line
          key={i} x1={x} y1={138} x2={x} y2={220}
          stroke="#8099FF" strokeWidth={2}
          animate={{ strokeOpacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 2.5, delay: i * 0.6, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {[4, 3, 2].map((n, row) => (
        Array.from({ length: n }).map((_, col) => (
          <motion.line
            key={`${row}-${col}`}
            x1={120 + col * 20} y1={175 - row * 18}
            x2={120 + col * 20 + 16} y2={175 - row * 18}
            stroke="#8099FF" strokeOpacity={0.2} strokeWidth={1}
            animate={{ strokeOpacity: [0.1, 0.35, 0.1] }}
            transition={{ duration: 3, delay: (row + col) * 0.2, repeat: Infinity }}
          />
        ))
      ))}
    </svg>
  );
}

function Visual({ index }: { index: number }) {
  const visuals = [BoutiqueVisual, TrilingualVisual, CrossBorderVisual, SavoirFaireVisual];
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
