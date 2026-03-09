import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function Passport3D() {
  return (
    <div className="relative flex items-center justify-center" style={{ perspective: "1100px" }}>
      <motion.div
        animate={{ rotateY: [-18, -11, -18], rotateX: [8, 4, 8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-52 h-[272px]"
      >
        <div
          className="absolute inset-0 flex flex-col"
          style={{
            background: "linear-gradient(145deg, #002090 0%, #001489 50%, #000A4F 100%)",
            boxShadow: "8px 16px 48px rgba(0,0,0,0.7), -4px 0 16px rgba(0,10,79,0.8), inset 1px 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <div className="absolute inset-[10px] border border-[#D4AF36]/35 pointer-events-none" />
          <div className="absolute inset-[14px] border border-[#D4AF36]/15 pointer-events-none" />

          <div className="absolute top-6 left-0 right-0 flex justify-center">
            <p className="text-[#D4AF36]/60 text-[8px] tracking-[0.5em] uppercase font-medium">
              مكتب ميلتون هوبز
            </p>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
            <div className="relative w-[72px] h-[72px]">
              <div className="absolute inset-0 rounded-full border-2 border-[#D4AF36]" />
              <div className="absolute inset-[5px] rounded-full border border-[#D4AF36]/40" />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 72 72">
                <ellipse cx="36" cy="36" rx="14" ry="31" stroke="#D4AF36" strokeWidth="0.7" fill="none" opacity="0.5" />
                <ellipse cx="36" cy="36" rx="25" ry="31" stroke="#D4AF36" strokeWidth="0.5" fill="none" opacity="0.3" />
                <line x1="5" y1="36" x2="67" y2="36" stroke="#D4AF36" strokeWidth="0.7" opacity="0.5" />
                <line x1="8" y1="22" x2="64" y2="22" stroke="#D4AF36" strokeWidth="0.4" opacity="0.3" />
                <line x1="8" y1="50" x2="64" y2="50" stroke="#D4AF36" strokeWidth="0.4" opacity="0.3" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-[#D4AF36] font-bold text-base">MH</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[#D4AF36] text-[9px] tracking-[0.45em] uppercase font-bold">Milton Hobbs</p>
              <p className="text-white/40 text-[7px] tracking-[0.25em] uppercase mt-1">Legal Services</p>
            </div>

            <div className="border-t border-[#D4AF36]/30 pt-3 w-full text-center">
              <p className="text-white font-heading text-sm font-bold tracking-[0.35em] uppercase">Passport</p>
            </div>
          </div>

          <div className="absolute bottom-5 left-0 right-0 px-5">
            <p className="text-[#D4AF36]/50 text-[7px] tracking-[0.18em] font-mono">MH&lt;&lt;LEGAL&lt;&lt;SERVICES&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</p>
            <p className="text-[#D4AF36]/50 text-[7px] tracking-[0.18em] font-mono mt-1">UAE&lt;FR&lt;2026&lt;5&lt;CORP</p>
          </div>
        </div>

        <div
          className="absolute top-0 bottom-0 right-0 w-3"
          style={{
            transform: "rotateY(90deg) translateZ(-2px)",
            transformOrigin: "right",
            background: "linear-gradient(to right, #000A4F, #001070)",
          }}
        />
      </motion.div>

      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [-10, -7, -10] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute -top-8 right-6"
        style={{ rotate: "-10deg" }}
      >
        <div
          className="w-[82px] h-[82px] rounded-full flex flex-col items-center justify-center"
          style={{
            border: "2px solid #D4AF36",
            background: "rgba(0,20,137,0.92)",
            boxShadow: "0 4px 24px rgba(212,175,54,0.3)",
          }}
        >
          <p className="text-[#D4AF36] text-[7px] font-bold tracking-[0.3em] uppercase">ADMITTED</p>
          <div className="w-9 h-px bg-[#D4AF36]/60 my-1" />
          <p className="text-white/80 text-[7px] tracking-[0.2em] uppercase">U.A.E.</p>
          <p className="text-white/40 text-[6px] tracking-wider mt-0.5">DUBAI</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6], rotate: [14, 11, 14] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="absolute -bottom-6 -left-4"
        style={{ rotate: "14deg" }}
      >
        <div
          className="w-[68px] h-[68px] rounded-full flex flex-col items-center justify-center"
          style={{
            border: "2px solid #8099FF",
            background: "rgba(0,16,112,0.88)",
            boxShadow: "0 4px 18px rgba(128,153,255,0.25)",
          }}
        >
          <p className="text-[#8099FF] text-[6px] font-bold tracking-[0.25em] uppercase">ENTRÉE</p>
          <div className="w-7 h-px bg-[#8099FF]/50 my-0.5" />
          <p className="text-white/70 text-[6px] tracking-[0.15em] uppercase">France</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-14"
        style={{ transform: "rotate(-18deg)" }}
      >
        <div
          className="px-3 py-[5px]"
          style={{ border: "2px solid rgba(212,175,54,0.8)", boxShadow: "0 0 12px rgba(212,175,54,0.2)" }}
        >
          <p className="text-[#D4AF36] text-[9px] font-bold tracking-[0.35em] uppercase">APPROVED</p>
        </div>
      </motion.div>
    </div>
  );
}

function GlobeMesh() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 600 600"
      style={{ opacity: 0.055 }}
    >
      <circle cx="300" cy="300" r="280" stroke="#D4AF36" strokeWidth="1" fill="none" />
      {[60, 120, 180, 240, 300, 360, 420, 480, 540].map((y, i) => {
        const ry = Math.abs(y - 300);
        const rx = Math.sqrt(Math.max(0, 280 * 280 - ry * ry));
        return rx > 0 ? (
          <ellipse key={i} cx="300" cy={y} rx={rx} ry={rx * 0.28} stroke="#D4AF36" strokeWidth="0.6" fill="none" />
        ) : null;
      })}
      {[0, 30, 60, 90, 120, 150].map((angle) => (
        <ellipse key={angle} cx="300" cy="300" rx="38" ry="280" stroke="#D4AF36" strokeWidth="0.5" fill="none"
          transform={`rotate(${angle} 300 300)`} />
      ))}
    </svg>
  );
}

function OrbitalRing() {
  return (
    <motion.div
      animate={{ rotateZ: [0, 360] }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="absolute pointer-events-none"
      style={{
        top: "5%",
        right: "4%",
        width: 320,
        height: 110,
        borderRadius: "50%",
        border: "1px solid rgba(212,175,54,0.25)",
        transformStyle: "preserve-3d",
        transform: "rotateX(70deg)",
      }}
    >
      <div
        className="absolute rounded-full bg-[#D4AF36]"
        style={{
          width: 10,
          height: 10,
          top: -5,
          left: "50%",
          marginLeft: -5,
          boxShadow: "0 0 14px 3px rgba(212,175,54,0.6)",
        }}
      />
    </motion.div>
  );
}

const services = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="6" y="8" width="28" height="24" rx="2" stroke="#D4AF36" strokeWidth="1.5" />
        <rect x="10" y="4" width="20" height="8" rx="1" stroke="#D4AF36" strokeWidth="1.2" />
        <line x1="10" y1="18" x2="30" y2="18" stroke="#D4AF36" strokeWidth="1" opacity="0.6" />
        <line x1="10" y1="22" x2="24" y2="22" stroke="#D4AF36" strokeWidth="1" opacity="0.4" />
        <line x1="10" y1="26" x2="22" y2="26" stroke="#D4AF36" strokeWidth="1" opacity="0.4" />
        <circle cx="32" cy="30" r="5" stroke="#8099FF" strokeWidth="1.2" />
        <path d="M30 30l1.5 1.5 2.5-2.5" stroke="#8099FF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Visa Applications",
    subtitle: "End-to-end filing",
    description:
      "We manage all UAE and French visa applications — investor visas, golden visas, talent visas, and family reunification. From document assembly to submission and follow-up.",
    tag: "Most popular",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M20 6L8 12v10c0 8 5 13 12 16 7-3 12-8 12-16V12L20 6z" stroke="#D4AF36" strokeWidth="1.5" />
        <path d="M14 20l4 4 8-8" stroke="#D4AF36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Immigration Appeals",
    subtitle: "Challenge & overturn",
    description:
      "When applications are refused or delayed, we build and file robust administrative appeals with a strong track record of successful reversals.",
    tag: "High success rate",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="13" stroke="#D4AF36" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="6" stroke="#D4AF36" strokeWidth="1" opacity="0.5" />
        <path d="M20 7v4M20 29v4M7 20h4M29 20h4" stroke="#D4AF36" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
        <circle cx="20" cy="20" r="2" fill="#D4AF36" />
      </svg>
    ),
    title: "Residency & Investor Visas",
    subtitle: "UAE golden visa",
    description:
      "UAE Golden Visa for investors, entrepreneurs, and professionals. We advise on eligibility, structure investments for qualification, and file complete applications.",
    tag: "10-year residency",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="8" y="14" width="24" height="18" rx="1.5" stroke="#D4AF36" strokeWidth="1.5" />
        <path d="M14 14v-3a6 6 0 0112 0v3" stroke="#D4AF36" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="23" r="3" stroke="#D4AF36" strokeWidth="1.2" />
        <line x1="20" y1="26" x2="20" y2="29" stroke="#D4AF36" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Employer Sponsorship",
    subtitle: "Work permit structuring",
    description:
      "Advising UAE-based employers on employee visa structures, work permit approvals, labour quota management, and free zone licensing requirements.",
    tag: "Corporate focused",
  },
];

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We assess your immigration objectives, current status, and eligibility across UAE and French pathways.",
  },
  {
    num: "02",
    title: "Strategy & Documentation",
    desc: "We design your optimal visa route and prepare a complete, compliant document package tailored to your profile.",
  },
  {
    num: "03",
    title: "Application Filing",
    desc: "We submit to the correct authority — GDRFA, ICA, MOFAIC, or the French consulate — with full monitoring.",
  },
  {
    num: "04",
    title: "Resolution",
    desc: "We liaise on your behalf until approval is granted, handling any requests for information or appeals.",
  },
];

const jurisdictions = [
  {
    flag: "🇦🇪",
    country: "United Arab Emirates",
    city: "Dubai",
    color: "#D4AF36",
    border: "border-[#D4AF36]/30",
    tag: "bg-[#D4AF36]/10 text-[#D4AF36]",
    areas: [
      "UAE Golden Visa (10-year)",
      "Investor Residency Visa",
      "Talent & Skills Visa",
      "Family Reunification",
      "Free Zone Work Permits",
      "Domestic Staff Visas",
    ],
    body: "We work directly with the ICA, GDRFA, and MOFAIC to manage all categories of UAE residency. Our Dubai office provides on-the-ground processing for time-sensitive applications.",
  },
  {
    flag: "🇫🇷",
    country: "France",
    city: "Paris",
    color: "#8099FF",
    border: "border-[#8099FF]/30",
    tag: "bg-[#8099FF]/10 text-[#8099FF]",
    areas: [
      "Talent Passport (4-year)",
      "Long-Stay Visa — Employee",
      "EU Blue Card",
      "Investor/Entrepreneur Visa",
      "Family Reunification",
      "Intra-Company Transfer",
    ],
    body: "Our Paris team guides executives, entrepreneurs, and families through French immigration procedures — from initial eligibility to titre de séjour issuance.",
  },
];

export default function ImmigrationPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <LanguageProvider>
      <div className="bg-[#000A4F] min-h-screen">
        <Header />

        {/* ── HERO ── */}
        <section
          id="home"
          className="relative min-h-screen bg-[#000A4F] flex items-center overflow-hidden pt-20"
          data-testid="immigration-hero"
        >
          <GlobeMesh />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0,20,137,0.7) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 30%, rgba(0,10,79,0.8) 0%, transparent 70%)",
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,175,54,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,54,0.8) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <OrbitalRing />

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-3 mb-8"
                >
                  <a href="/#expertise" className="flex items-center gap-2 text-[#D4AF36] text-[10px] tracking-[0.3em] uppercase font-semibold hover:opacity-80 transition-opacity">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                      <path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                    Our Expertise
                  </a>
                  <span className="text-white/20">·</span>
                  <span className="text-[#8099FF] text-[10px] tracking-[0.3em] uppercase font-semibold">Immigration Law</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="font-heading text-white font-bold text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.04] tracking-tight mb-8"
                >
                  Borders are
                  <br />
                  <span className="text-[#D4AF36]">legal problems</span>
                  <br />
                  we solve.
                </motion.h1>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "64px" }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                  className="h-[2px] bg-[#D4AF36] mb-8"
                />

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-white/60 text-base leading-relaxed max-w-[500px] mb-10"
                >
                  UAE residency, investor visas, talent visas, immigration appeals, and cross-border mobility strategies — for executives, founders, and families across the UAE and France.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="flex flex-wrap gap-4 mb-14"
                >
                  <a
                    href="/#contact"
                    data-testid="immigration-cta-primary"
                    className="inline-flex items-center gap-3 bg-[#D4AF36] text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#C4A030] transition-colors"
                  >
                    <span>Book a Consultation</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </a>
                  <a
                    href="#services"
                    data-testid="immigration-cta-secondary"
                    className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors"
                  >
                    View Services
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
                >
                  {[
                    { n: 500, suffix: "+", label: "Visas filed" },
                    { n: 96, suffix: "%", label: "Success rate" },
                    { n: 15, suffix: "+", label: "Years experience" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="font-heading text-white font-bold text-2xl">
                        <AnimatedNumber target={s.n} suffix={s.suffix} />
                      </p>
                      <p className="text-white/40 text-xs tracking-wider mt-1">{s.label}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.5 }}
                className="relative flex items-center justify-center h-[480px]"
              >
                <div
                  className="absolute inset-0 rounded-full pointer-events-none opacity-10"
                  style={{
                    background: "radial-gradient(circle, rgba(212,175,54,0.5) 0%, transparent 70%)",
                  }}
                />
                <Passport3D />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-8 flex items-center gap-3 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
            />
            <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          </motion.div>
        </section>

        {/* ── SERVICES ── */}
        <section
          id="services"
          data-testid="immigration-services"
          className="bg-white px-8 py-24"
          data-header-theme="light"
        >
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <p className="text-[#D4AF36] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">What We Do</p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">
                  Immigration services.
                </h2>
                <p className="text-[#001489]/50 text-sm max-w-xs leading-relaxed">
                  Comprehensive support across all UAE and French immigration pathways.
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8EDF8]">
              {services.map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  data-testid={`service-card-${i}`}
                  className="group bg-white p-8 flex flex-col hover:bg-[#F5F7FF] transition-colors duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 mb-6">{svc.icon}</div>

                  {svc.tag && (
                    <span className="inline-block text-[9px] tracking-[0.22em] uppercase font-bold bg-[#D4AF36]/10 text-[#D4AF36] px-2 py-1 mb-4 self-start">
                      {svc.tag}
                    </span>
                  )}

                  <h3 className="font-heading text-[#001489] font-bold text-lg leading-snug mb-1">{svc.title}</h3>
                  <p className="text-[#8099FF] text-xs tracking-wider uppercase mb-4">{svc.subtitle}</p>
                  <p className="text-[#4A5568] text-sm leading-relaxed flex-1">{svc.description}</p>

                  <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#001489] text-[10px] tracking-[0.2em] uppercase font-semibold">Enquire</span>
                    <svg className="w-3 h-3 text-[#001489]" fill="none" viewBox="0 0 12 12">
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section
          data-testid="immigration-process"
          className="bg-[#001489] px-8 py-24"
        >
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <p className="text-[#D4AF36] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">How We Work</p>
              <h2 className="font-heading text-white font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight">
                Your path to residency.
              </h2>
            </motion.div>

            <div className="relative">
              <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-[#D4AF36]/20" />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.12 }}
                    data-testid={`process-step-${i}`}
                    className="relative flex flex-col"
                  >
                    <div className="relative z-10 w-[104px] h-[104px] border border-[#D4AF36]/40 flex items-center justify-center mb-6 bg-[#001489]">
                      <div className="absolute inset-[5px] border border-[#D4AF36]/20" />
                      <span className="font-heading text-[#D4AF36] font-bold text-3xl">{step.num}</span>
                    </div>
                    <h3 className="font-heading text-white font-bold text-lg mb-3 leading-snug">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── JURISDICTIONS ── */}
        <section
          data-testid="immigration-jurisdictions"
          className="bg-[#000A4F] px-8 py-24"
        >
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-[#D4AF36] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">Where We Practice</p>
              <h2 className="font-heading text-white font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight">
                Two jurisdictions. One team.
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-px bg-white/10">
              {jurisdictions.map((j, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.15 }}
                  data-testid={`jurisdiction-${i}`}
                  className="bg-[#000E5E] p-10 lg:p-12 relative overflow-hidden group"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse 70% 50% at 50% 100%, ${j.color}08 0%, transparent 70%)`,
                    }}
                  />

                  <div className="flex items-start gap-5 mb-8">
                    <span className="text-4xl">{j.flag}</span>
                    <div>
                      <p className={`inline-block text-[9px] tracking-[0.3em] uppercase font-bold px-2.5 py-1 mb-2 ${j.tag}`}>
                        {j.city}
                      </p>
                      <h3 className="font-heading text-white font-bold text-xl leading-tight">{j.country}</h3>
                    </div>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-8">{j.body}</p>

                  <div className={`border-t pt-8 ${j.border}`}>
                    <p className="text-white/30 text-[9px] tracking-[0.3em] uppercase mb-4 font-semibold">Visa categories</p>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                      {j.areas.map((a) => (
                        <div key={a} className="flex items-start gap-2">
                          <span
                            className="mt-[6px] w-1 h-1 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: j.color }}
                          />
                          <span className="text-white/65 text-xs leading-snug">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PERSONAL TOUCH ── */}
        <section
          data-testid="immigration-personal"
          className="bg-white px-8 py-24"
          data-header-theme="light"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-[#D4AF36] text-[11px] tracking-[0.35em] uppercase font-bold mb-5">Our Commitment</p>
                <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight mb-6">
                  Immigration handled with the same rigour as a corporate deal.
                </h2>
                <p className="text-[#4A5568] text-base leading-relaxed mb-6">
                  We approach every immigration mandate — whether a single visa or a workforce relocation — with the same precision and partner-level attention we apply to our corporate transactions.
                </p>
                <p className="text-[#4A5568] text-base leading-relaxed mb-10">
                  Your file is managed by a senior lawyer, not a paralegal. You receive direct communication, clear timelines, and complete transparency throughout.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-3 bg-[#001489] text-white text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#0028B8] transition-colors"
                >
                  <span>Speak to a Partner</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { title: "Partner-led", body: "Every mandate directly handled by a senior lawyer." },
                  { title: "Transparent", body: "Clear timelines and status updates at every stage." },
                  { title: "Bilingual", body: "English, French, and Arabic correspondence as required." },
                  { title: "Cross-border", body: "UAE and French procedures handled from one team." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    data-testid={`commitment-${i}`}
                    className="bg-[#F5F7FF] p-6 border border-[#E8EDF8]"
                  >
                    <div className="w-2 h-2 bg-[#D4AF36] mb-4" />
                    <h4 className="font-heading text-[#001489] font-bold text-base mb-2">{item.title}</h4>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{item.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          data-testid="immigration-cta"
          className="bg-[#001489] px-8 py-20 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-[#D4AF36] text-[10px] tracking-[0.3em] uppercase font-medium mb-3">Begin Today</p>
                <h3 className="font-heading text-white font-bold text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight leading-snug max-w-lg">
                  Ready to start your immigration matter?
                </h3>
                <p className="text-white/45 text-sm mt-3 leading-relaxed max-w-md">
                  Contact our Dubai or Paris office for a confidential first consultation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 flex-shrink-0">
                <a
                  href="/#contact"
                  data-testid="immigration-final-cta"
                  className="inline-flex items-center gap-3 bg-[#D4AF36] text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#C4A030] transition-colors"
                >
                  <span>Book a Consultation</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </a>
                <a
                  href="/#expertise"
                  className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors"
                >
                  All Practice Areas
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
