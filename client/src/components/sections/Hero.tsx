import { type ReactNode } from "react";
import { motion } from "framer-motion";

const floatingSquares = [
  { size: 280, x: "75%", y: "10%", rotate: 15, duration: 20, opacity: 0.04 },
  { size: 180, x: "80%", y: "55%", rotate: -25, duration: 25, opacity: 0.06 },
  { size: 120, x: "60%", y: "20%", rotate: 40, duration: 18, opacity: 0.05 },
  { size: 400, x: "65%", y: "35%", rotate: 8, duration: 30, opacity: 0.025 },
  { size: 90, x: "88%", y: "30%", rotate: 60, duration: 15, opacity: 0.07 },
  { size: 220, x: "5%", y: "60%", rotate: -10, duration: 22, opacity: 0.03 },
  { size: 140, x: "15%", y: "20%", rotate: 30, duration: 28, opacity: 0.04 },
];

const gridLines = Array.from({ length: 8 });

export function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen bg-[#060B1F] flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingSquares.map((sq, i) => (
          <motion.div
            key={i}
            className="absolute border border-white"
            style={{
              width: sq.size,
              height: sq.size,
              left: sq.x,
              top: sq.y,
              opacity: sq.opacity,
              rotate: sq.rotate,
            }}
            animate={{ rotate: [sq.rotate, sq.rotate + 360] }}
            transition={{ duration: sq.duration, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(10,15,46,0) 0%, #060B1F 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 pt-32 pb-24">
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
            className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-8"
            data-testid="hero-eyebrow"
          >
            Boutique Corporate Law
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white font-semibold text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-tight mb-8"
            data-testid="hero-headline"
          >
            Reason.
            <br />
            Rigor.
            <br />
            Resolution.
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-px bg-[#C9A84C] mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-white/60 text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed max-w-[560px] mb-12 px-[calc(0px+5%)] pl-0"
            data-testid="hero-subheadline"
          >
            Milton Hobbs is a boutique corporate law firm delivering clear,
            composed, and commercially astute counsel. Bridging Europe and the GCC.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <TracingButton href="#contact" variant="solid" data-testid="cta-book">
              Book a Consultation
            </TracingButton>
            <TracingButton href="#contact" variant="outline" data-testid="cta-contact">
              Contact Us
            </TracingButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-8 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          />
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        </motion.div>
      </div>
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
      className={`relative group inline-flex items-center px-8 py-4 text-sm font-medium tracking-widest uppercase transition-colors duration-300 overflow-hidden ${
        variant === "solid"
          ? "bg-[#C9A84C] text-[#060B1F] hover:bg-[#E8C77A]"
          : "border border-white/30 text-white hover:border-white/60"
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 border border-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
}
