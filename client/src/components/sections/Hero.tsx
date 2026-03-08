import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const floatingSquares = [
  { size: 320, x: "68%", y: "8%",  rotate: 15,  duration: 22, opacity: 0.07,  color: "#001489" },
  { size: 200, x: "82%", y: "52%", rotate: -28, duration: 26, opacity: 0.08,  color: "#001489" },
  { size: 130, x: "58%", y: "18%", rotate: 42,  duration: 18, opacity: 0.06,  color: "#D4AF36" },
  { size: 460, x: "60%", y: "30%", rotate: 6,   duration: 32, opacity: 0.03,  color: "#001489" },
  { size: 100, x: "86%", y: "28%", rotate: 65,  duration: 15, opacity: 0.09,  color: "#001489" },
  { size: 240, x: "4%",  y: "58%", rotate: -12, duration: 24, opacity: 0.045, color: "#001489" },
  { size: 160, x: "14%", y: "16%", rotate: 32,  duration: 29, opacity: 0.05,  color: "#D4AF36" },
];

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen bg-white flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,20,137,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,20,137,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingSquares.map((sq, i) => (
          <motion.div
            key={i}
            className="absolute border"
            style={{
              width:       sq.size,
              height:      sq.size,
              left:        sq.x,
              top:         sq.y,
              opacity:     sq.opacity,
              rotate:      sq.rotate,
              borderColor: sq.color,
            }}
            animate={{ rotate: [sq.rotate, sq.rotate + 360] }}
            transition={{ duration: sq.duration, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 100% at 10% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 70%)",
        }}
      />

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
            className="font-heading text-[#001489] font-bold text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-tight mb-8"
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
            className="text-[#141414]/60 text-base leading-relaxed max-w-[560px] mb-12"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-8 flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#001489]/40 to-transparent"
        />
        <span className="text-[#001489]/40 text-[10px] tracking-[0.25em] uppercase">
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
          ? "bg-[#001489] text-white hover:bg-[#0A24C4]"
          : "border border-[#001489]/30 text-[#001489] hover:border-[#001489] hover:bg-[#001489]/5"
      }`}
    >
      {children}
    </a>
  );
}
