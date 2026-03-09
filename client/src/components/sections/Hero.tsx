import { type ReactNode, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const COLS = 16;
const ROWS = 10;

const tiles = Array.from({ length: COLS * ROWS }, (_, i) => ({
  color:        i % 2 === 0 ? "#051FA7" : "#000335",
  delay:        parseFloat(((i * 0.41 + (i % 7) * 0.29) % 9).toFixed(2)),
  duration:     parseFloat((2.5 + (i * 0.17 + (i % 5) * 0.33) % 4.5).toFixed(2)),
  maxOpacity:   parseFloat((0.08 + (i * 0.09 + (i % 11) * 0.06) % 0.52).toFixed(2)),
  goldBorder:   i % 11 === 0 || i % 19 === 7,
  borderDelay:  parseFloat(((i * 0.63 + (i % 13) * 0.41) % 7).toFixed(2)),
  borderDur:    parseFloat((4 + (i * 0.23 + (i % 7) * 0.51) % 4).toFixed(2)),
}));

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  const [hovering, setHovering] = useState(false);
  const rawX = useMotionValue(-9999);
  const rawY = useMotionValue(-9999);
  const spotX = useSpring(rawX, { stiffness: 90, damping: 20 });
  const spotY = useSpring(rawY, { stiffness: 90, damping: 20 });
  const clipPath = useMotionTemplate`circle(180px at ${spotX}px ${spotY}px)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
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

      {/* Bright tile layer — clipped to a circle that follows the cursor */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          clipPath,
          display:             "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows:    `repeat(${ROWS}, 1fr)`,
        }}
        animate={{ opacity: hovering ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      >
        {tiles.map((tile, i) => (
          <motion.div
            key={i}
            style={{ backgroundColor: tile.goldBorder ? "#C3A941" : "#4466DD" }}
            animate={{ opacity: [0.05, tile.maxOpacity * 3, 0.05] }}
            transition={{
              duration: tile.duration * 0.75,
              delay:    tile.delay,
              repeat:   Infinity,
              ease:     "easeInOut",
            }}
          />
        ))}
      </motion.div>

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
            className="text-[#D4AF36] text-xs tracking-[0.3em] uppercase font-semibold mb-8"
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
            className="h-[2px] bg-[#D4AF36] mb-8"
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
            <TracingButton href="#contact" variant="outline" data-testid="cta-contact">
              {h.cta2}
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
          ? "bg-white text-[#001489] hover:bg-[#D4AF36] hover:text-white"
          : "border border-white/30 text-white hover:border-white hover:bg-white/10"
      }`}
    >
      {children}
    </a>
  );
}
