import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const squares = [
  { size: 56,  x: "8%",   y: "18%", dx: 320,  dy: -180, rotate: 25,  dur: 20, delay: 0,   opacity: 0.55 },
  { size: 36,  x: "72%",  y: "62%", dx: -240, dy: 130,  rotate: -18, dur: 24, delay: 1.5, opacity: 0.6  },
  { size: 96,  x: "18%",  y: "72%", dx: 380,  dy: -220, rotate: 42,  dur: 28, delay: 0.8, opacity: 0.35 },
  { size: 48,  x: "62%",  y: "8%",  dx: -280, dy: 260,  rotate: -35, dur: 22, delay: 3,   opacity: 0.5  },
  { size: 72,  x: "82%",  y: "28%", dx: -350, dy: 120,  rotate: 58,  dur: 30, delay: 0.4, opacity: 0.3  },
  { size: 28,  x: "38%",  y: "82%", dx: 220,  dy: -310, rotate: -50, dur: 16, delay: 4,   opacity: 0.65 },
  { size: 110, x: "4%",   y: "44%", dx: 460,  dy: -90,  rotate: 18,  dur: 35, delay: 1.2, opacity: 0.22 },
  { size: 42,  x: "88%",  y: "72%", dx: -300, dy: -210, rotate: 72,  dur: 21, delay: 2.2, opacity: 0.48 },
  { size: 64,  x: "52%",  y: "38%", dx: 180,  dy: 200,  rotate: -22, dur: 26, delay: 3.5, opacity: 0.28 },
  { size: 20,  x: "25%",  y: "12%", dx: -160, dy: 340,  rotate: 85,  dur: 18, delay: 0.6, opacity: 0.7  },
];

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Travelling squares */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {squares.map((sq, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width:           sq.size,
              height:          sq.size,
              left:            sq.x,
              top:             sq.y,
              opacity:         sq.opacity,
              backgroundColor: "#092AC7",
            }}
            animate={{
              x:      [0, sq.dx, 0],
              y:      [0, sq.dy, 0],
              rotate: [sq.rotate, sq.rotate + 180, sq.rotate],
            }}
            transition={{
              duration:   sq.dur,
              delay:      sq.delay,
              repeat:     Infinity,
              repeatType: "mirror",
              ease:       "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Left-side content fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 100% at 12% 55%, rgba(0,20,137,0.85) 0%, rgba(0,20,137,0.4) 55%, transparent 80%)",
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
