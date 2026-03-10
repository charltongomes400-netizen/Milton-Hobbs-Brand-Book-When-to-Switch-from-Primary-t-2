import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type CSSProperties } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 18 });
  const [display, setDisplay] = useState(0);
  useEffect(() => { if (inView) motionVal.set(target); }, [inView, target, motionVal]);
  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);
  return <span ref={ref}>{display}{suffix}</span>;
}

const CUBE_FACES = [
  {
    transform: "translateZ(100px)",
    label: "Dubai · Paris",
    sub: "Two offices. One firm.",
    gold: true,
    isBrand: false,
    isEmpty: false,
  },
  {
    transform: "rotateY(90deg) translateZ(100px)",
    label: "Founder-Led Advisory",
    sub: "Senior-led on every mandate",
    gold: false,
    isBrand: false,
    isEmpty: false,
  },
  {
    transform: "rotateY(180deg) translateZ(100px)",
    label: "Strategic Precision",
    sub: "Clarity through complexity",
    gold: false,
    isBrand: false,
    isEmpty: false,
  },
  {
    transform: "rotateY(-90deg) translateZ(100px)",
    label: "Cross-Border Capability",
    sub: "Europe & GCC unified",
    gold: false,
    isBrand: false,
    isEmpty: false,
  },
  {
    transform: "rotateX(90deg) translateZ(100px)",
    label: "Discretion & Trust",
    sub: "Confidential by design",
    gold: false,
    isBrand: false,
    isEmpty: false,
  },
  {
    transform: "rotateX(-90deg) translateZ(100px)",
    label: "",
    sub: "",
    gold: false,
    isBrand: false,
    isEmpty: true,
  },
];

function FirmCrest3D() {
  return (
    <div
      className="relative flex items-center justify-center w-full h-full"
      style={{ perspective: "900px" }}
    >
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{
          transformStyle: "preserve-3d",
          width: 200,
          height: 200,
          rotateX: 18,
        }}
        className="relative"
      >
        {CUBE_FACES.map((face, i) => (
          <div
            key={i}
            className="absolute inset-0 flex flex-col items-center justify-center px-5"
            style={{
              transform: face.transform,
              backfaceVisibility: "hidden",
              background: face.gold
                ? "linear-gradient(145deg, rgba(0,10,79,0.97) 0%, rgba(0,20,80,0.98) 100%)"
                : "linear-gradient(145deg, rgba(0,10,79,0.92) 0%, rgba(0,20,137,0.95) 100%)",
              border: `1px solid rgba(212,175,54,${face.gold ? 0.45 : 0.18})`,
            }}
          >
            {face.gold && (
              <div
                className="absolute inset-[8px] pointer-events-none"
                style={{ border: "1px solid rgba(212,175,54,0.2)" }}
              />
            )}
            {!face.isEmpty && (
              <div className="text-center">
                <div
                  className="w-4 h-px bg-[#D4AF36] mx-auto mb-3"
                  style={{ opacity: face.gold ? 0.8 : 0.5 }}
                />
                <p
                  className="font-heading font-bold leading-tight tracking-tight mb-2"
                  style={{
                    fontSize: "clamp(10px, 1.1vw, 13px)",
                    color: face.gold ? "#D4AF36" : "#ffffff",
                    opacity: face.gold ? 0.95 : 0.9,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {face.label}
                </p>
                <p
                  className="text-[7px] tracking-[0.22em] uppercase"
                  style={{ color: "rgba(212,175,54,0.55)" }}
                >
                  {face.sub}
                </p>
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {[150, 196, 240].map((r, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: r,
            height: r,
            border: `1px solid ${i === 1 ? "rgba(212,175,54,0.22)" : "rgba(128,153,255,0.1)"}`,
          }}
          animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
          transition={{ duration: 22 + i * 9, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i === 1 ? "#D4AF36" : "#8099FF",
              opacity: i === 1 ? 0.85 : 0.45,
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
      ))}

      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = 50 + 49 * Math.cos(angle);
        const y = 50 + 49 * Math.sin(angle);
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#8099FF]"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ opacity: [0.1, 0.55, 0.1], scale: [0.8, 1.5, 0.8] }}
            transition={{ duration: 3, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}

function PhilosophyVisual() {
  const cx = 200, cy = 180;
  return (
    <svg viewBox="0 0 400 360" fill="none" className="w-full h-full">
      {[120, 90, 60, 35].map((r, i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy} r={r}
          stroke={i < 2 ? "#001489" : "#D4AF36"}
          strokeOpacity={0.08 + i * 0.06}
          strokeWidth={1}
          strokeDasharray={`${2 * Math.PI * r * 0.75} ${2 * Math.PI * r * 0.25}`}
          fill="none"
          animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
          transition={{ duration: 18 + i * 6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
      <motion.circle
        cx={cx} cy={cy} r={12}
        fill="#D4AF36"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx={cx} cy={cy} r={28}
        stroke="#D4AF36" strokeWidth={1} fill="none"
        animate={{ scale: [1, 1.7, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <line x1={cx} y1={40} x2={cx} y2={320} stroke="#001489" strokeOpacity={0.06} strokeWidth={1} />
      <line x1={60} y1={cy} x2={340} y2={cy} stroke="#001489" strokeOpacity={0.06} strokeWidth={1} />
    </svg>
  );
}

function MissionOrbit() {
  const CX = 210, CY = 150;

  const dot1 = useRef<SVGCircleElement>(null);
  const dot2 = useRef<SVGCircleElement>(null);
  const dot3 = useRef<SVGCircleElement>(null);
  const lbl1 = useRef<SVGTextElement>(null);
  const lbl2 = useRef<SVGTextElement>(null);
  const lbl3 = useRef<SVGTextElement>(null);

  const rings = [
    { rx: 158, ry: 20,  speed: 0.24, phase: 0,            color: "#D4AF36", rRange: [2.5, 5.5], label: "PRECISION"    },
    { rx: 112, ry: 46,  speed: 0.38, phase: Math.PI * 0.7, color: "#8099FF", rRange: [2,   4.5], label: "COMPOSURE"    },
    { rx: 66,  ry: 61,  speed: 0.6,  phase: Math.PI,       color: "#D4AF36", rRange: [1.5, 3.5], label: "CLIENT·FIRST" },
  ];

  useAnimationFrame((t) => {
    const dots = [dot1, dot2, dot3];
    const lbls = [lbl1, lbl2, lbl3];
    rings.forEach((o, i) => {
      const angle = (t / 1000) * o.speed + o.phase;
      const x = CX + o.rx * Math.cos(angle);
      const y = CY + o.ry * Math.sin(angle);
      const depth = Math.sin(angle); // -1 far, +1 near
      const r = o.rRange[0] + (o.rRange[1] - o.rRange[0]) * ((depth + 1) / 2);
      const opacity = (0.15 + 0.85 * ((depth + 1) / 2)).toFixed(2);

      const d = dots[i].current;
      if (d) {
        d.setAttribute("cx", x.toFixed(1));
        d.setAttribute("cy", y.toFixed(1));
        d.setAttribute("r",  r.toFixed(1));
        d.setAttribute("opacity", opacity);
      }

      const l = lbls[i].current;
      if (l) {
        l.setAttribute("x", x.toFixed(1));
        l.setAttribute("y", (y - r - 5).toFixed(1));
        l.setAttribute("opacity", depth > 0.5 ? ((depth - 0.5) * 1.6).toFixed(2) : "0");
      }
    });
  });

  return (
    <svg viewBox="0 0 420 300" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF36" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000A4F" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow behind centre */}
      <ellipse cx={CX} cy={CY} rx={185} ry={130} fill="url(#orbitGlow)" />

      {/* Subtle background cross-hair */}
      <line x1={CX} y1={20} x2={CX} y2={280} stroke="#8099FF" strokeOpacity={0.06} strokeWidth={0.6} />
      <line x1={20} y1={CY} x2={400} y2={CY} stroke="#8099FF" strokeOpacity={0.06} strokeWidth={0.6} />

      {/* === ORBIT RINGS — back half dimmer, front half brighter === */}
      {rings.map((o, i) => (
        <g key={i}>
          {/* back arc (top of ellipse — further from viewer) */}
          <path
            d={`M ${CX - o.rx} ${CY} A ${o.rx} ${o.ry} 0 0 1 ${CX + o.rx} ${CY}`}
            stroke={o.color}
            strokeOpacity={0.1}
            strokeWidth={0.7}
          />
          {/* front arc (bottom of ellipse — closer to viewer) */}
          <path
            d={`M ${CX + o.rx} ${CY} A ${o.rx} ${o.ry} 0 0 1 ${CX - o.rx} ${CY}`}
            stroke={o.color}
            strokeOpacity={0.3}
            strokeWidth={1}
          />
        </g>
      ))}

      {/* === TRAVELING DOTS (driven by useAnimationFrame) === */}
      <circle ref={dot1} cx={CX + 158} cy={CY} r={4} fill="#D4AF36" />
      <circle ref={dot2} cx={CX + 112} cy={CY} r={3} fill="#8099FF" />
      <circle ref={dot3} cx={CX + 66}  cy={CY} r={3} fill="#D4AF36" />

      {/* === FLOATING LABELS (appear as dot nears viewer) === */}
      <text ref={lbl1} fontSize="6.5" textAnchor="middle" fontFamily="monospace" letterSpacing="0.3em" fill="#D4AF36" opacity="0">PRECISION</text>
      <text ref={lbl2} fontSize="6.5" textAnchor="middle" fontFamily="monospace" letterSpacing="0.3em" fill="#8099FF" opacity="0">COMPOSURE</text>
      <text ref={lbl3} fontSize="6.5" textAnchor="middle" fontFamily="monospace" letterSpacing="0.3em" fill="#D4AF36" opacity="0">CLIENT·FIRST</text>

      {/* === CENTRE CORE === */}
      <motion.circle
        cx={CX} cy={CY} r={32}
        stroke="#D4AF36" strokeWidth={0.8} strokeOpacity={0.35}
        fill="#D4AF36" fillOpacity={0.04}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />
      <motion.circle
        cx={CX} cy={CY} r={52}
        stroke="#D4AF36" strokeWidth={0.5} strokeOpacity={0.1}
        fill="none"
        animate={{ scale: [1, 1.55, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />
      <text x={CX} y={CY + 5} fill="#D4AF36" fontSize="13" textAnchor="middle"
        fontFamily="var(--font-heading)" fontWeight="800" letterSpacing="0.14em">M·H</text>
    </svg>
  );
}

const coreValues = [
  {
    id: "excellence",
    title: "Excellence",
    titleFR: "Excellence",
    desc: "We hold ourselves to the highest professional standards — every brief, every negotiation, every outcome.",
    descFR: "Nous nous tenons aux normes professionnelles les plus exigeantes — chaque dossier, chaque négociation, chaque résultat.",
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        {[28, 20, 13].map((r, i) => (
          <motion.circle
            key={i} cx={32} cy={32} r={r}
            stroke={active ? "#D4AF36" : "#001489"}
            strokeOpacity={active ? 0.2 + i * 0.15 : 0.06 + i * 0.04}
            strokeWidth={1}
            fill="none"
            animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
            transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "32px 32px" }}
          />
        ))}
        <motion.circle cx={32} cy={32} r={5} fill={active ? "#D4AF36" : "#001489"} fillOpacity={active ? 1 : 0.4}
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>
    ),
  },
  {
    id: "integrity",
    title: "Integrity",
    titleFR: "Intégrité",
    desc: "Our counsel is built on honesty and transparency. We never compromise your trust for expediency.",
    descFR: "Notre conseil repose sur l'honnêteté et la transparence. Nous ne sacrifions jamais votre confiance pour l'opportunité.",
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <motion.path
          d="M32 8 L54 20 L54 38 Q54 52 32 58 Q10 52 10 38 L10 20 Z"
          stroke={active ? "#D4AF36" : "#001489"}
          strokeOpacity={active ? 0.7 : 0.3}
          strokeWidth={1.2}
          fill={active ? "rgba(212,175,54,0.06)" : "none"}
          animate={{ strokeOpacity: active ? [0.5, 0.9, 0.5] : [0.2, 0.4, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.path
          d="M22 32 L29 39 L42 26"
          stroke={active ? "#D4AF36" : "#001489"}
          strokeOpacity={active ? 0.9 : 0.4}
          strokeWidth={1.5}
          strokeLinecap="round" strokeLinejoin="round"
          fill="none"
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.8, 1] }}
        />
      </svg>
    ),
  },
  {
    id: "precision",
    title: "Precision",
    titleFR: "Précision",
    desc: "No ambiguity, no vagueness. Clear, decisive, and commercially-grounded legal analysis every time.",
    descFR: "Pas d'ambiguïté, pas de vague. Une analyse juridique claire, décisive et commercialement ancrée à chaque fois.",
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <line x1={32} y1={6} x2={32} y2={58} stroke={active ? "#D4AF36" : "#001489"} strokeOpacity={0.12} strokeWidth={1} />
        <line x1={6} y1={32} x2={58} y2={32} stroke={active ? "#D4AF36" : "#001489"} strokeOpacity={0.12} strokeWidth={1} />
        {[22, 14].map((r, i) => (
          <circle key={i} cx={32} cy={32} r={r} stroke={active ? "#D4AF36" : "#001489"} strokeOpacity={active ? 0.2 + i * 0.1 : 0.06 + i * 0.04} strokeWidth={1} fill="none" />
        ))}
        <motion.circle cx={32} cy={32} r={22}
          stroke={active ? "#D4AF36" : "#8099FF"}
          strokeWidth={1.5} strokeOpacity={0.8} fill="none"
          strokeDasharray="4 4"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "32px 32px" }}
        />
        <circle cx={32} cy={32} r={4} fill={active ? "#D4AF36" : "#001489"} fillOpacity={active ? 1 : 0.5} />
      </svg>
    ),
  },
  {
    id: "boldness",
    title: "Boldness",
    titleFR: "Audace",
    desc: "We are not risk-averse — we are risk-intelligent. We act with strategic courage when it matters most.",
    descFR: "Nous ne sommes pas frileux — nous sommes intelligents face au risque. Nous agissons avec courage stratégique.",
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <motion.path
          d="M32 10 L36 28 L54 32 L36 36 L32 54 L28 36 L10 32 L28 28 Z"
          stroke={active ? "#D4AF36" : "#001489"}
          strokeOpacity={active ? 0.8 : 0.3}
          strokeWidth={1.2}
          fill={active ? "rgba(212,175,54,0.08)" : "none"}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "32px 32px" }}
        />
        <circle cx={32} cy={32} r={5} fill={active ? "#D4AF36" : "#001489"} fillOpacity={active ? 1 : 0.4} />
      </svg>
    ),
  },
  {
    id: "crossborder",
    title: "Cross-Border Mastery",
    titleFR: "Maîtrise Transfrontalière",
    desc: "Two legal systems, two cultures, one unified team. Our dual-jurisdiction DNA is a strategic advantage.",
    descFR: "Deux systèmes juridiques, deux cultures, une équipe unifiée. Notre ADN bi-juridictionnel est un avantage stratégique.",
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx={20} cy={32} r={10} stroke={active ? "#D4AF36" : "#001489"} strokeOpacity={active ? 0.6 : 0.25} strokeWidth={1} fill="none" />
        <circle cx={44} cy={32} r={10} stroke={active ? "#D4AF36" : "#001489"} strokeOpacity={active ? 0.6 : 0.25} strokeWidth={1} fill="none" />
        <motion.path
          d="M20 25 Q32 18 44 25"
          stroke={active ? "#D4AF36" : "#8099FF"}
          strokeOpacity={active ? 0.8 : 0.3}
          strokeWidth={1.2}
          strokeDasharray="40"
          fill="none"
          animate={{ strokeDashoffset: [40, 0, -40] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M20 39 Q32 46 44 39"
          stroke={active ? "#D4AF36" : "#8099FF"}
          strokeOpacity={active ? 0.5 : 0.18}
          strokeWidth={1}
          strokeDasharray="40"
          fill="none"
          animate={{ strokeDashoffset: [-40, 0, 40] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <circle cx={20} cy={32} r={3} fill={active ? "#D4AF36" : "#001489"} fillOpacity={active ? 0.9 : 0.4} />
        <circle cx={44} cy={32} r={3} fill={active ? "#D4AF36" : "#001489"} fillOpacity={active ? 0.9 : 0.4} />
      </svg>
    ),
  },
  {
    id: "discretion",
    title: "Discretion",
    titleFR: "Discrétion",
    desc: "Trusted with the most sensitive mandates. Absolute confidentiality is not a courtesy — it is a commitment.",
    descFR: "Confiés des mandats les plus sensibles. La confidentialité absolue n'est pas une politesse — c'est un engagement.",
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        {[26, 20, 14, 9].map((r, i) => (
          <motion.circle
            key={i} cx={32} cy={32} r={r}
            stroke={i === 3 ? (active ? "#D4AF36" : "#001489") : (active ? "#D4AF36" : "#8099FF")}
            strokeOpacity={i === 3 ? (active ? 0.85 : 0.4) : (active ? 0.12 + i * 0.07 : 0.05 + i * 0.04)}
            strokeWidth={1}
            strokeDasharray={`${2 * Math.PI * r * 0.8} ${2 * Math.PI * r * 0.2}`}
            fill="none"
            animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "32px 32px" }}
          />
        ))}
        <motion.rect
          x={27} y={30} width={10} height={8}
          stroke={active ? "#D4AF36" : "#001489"} strokeWidth={1} fill="none"
          strokeOpacity={active ? 0.9 : 0.5}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.path
          d="M29 30 Q29 25 32 25 Q35 25 35 30"
          stroke={active ? "#D4AF36" : "#001489"} strokeWidth={1} fill="none"
          strokeOpacity={active ? 0.9 : 0.5}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </svg>
    ),
  },
];

function ValueCard({ value, lang, index }: { value: typeof coreValues[0]; lang: string; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      data-testid={`value-card-${value.id}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative border border-[#001489]/10 p-8 cursor-default overflow-hidden"
      style={{
        background: hovered ? "linear-gradient(145deg, #001489 0%, #000A4F 100%)" : "#ffffff",
        borderColor: hovered ? "transparent" : "rgba(0,20,137,0.1)",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-[#D4AF36]"
        animate={{ scaleX: hovered ? 1 : 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <div className="w-12 h-12 mb-6">
        {value.icon(hovered)}
      </div>
      <motion.p
        className="text-[10px] tracking-[0.35em] uppercase font-bold mb-2"
        animate={{ color: hovered ? "#D4AF36" : "#001489" }}
        transition={{ duration: 0.3 }}
      >
        {lang === "FR" ? value.titleFR : value.title}
      </motion.p>
      <motion.p
        className="text-sm leading-relaxed"
        animate={{ color: hovered ? "rgba(255,255,255,0.7)" : "rgba(0,10,79,0.6)" }}
        transition={{ duration: 0.3 }}
      >
        {lang === "FR" ? value.descFR : value.desc}
      </motion.p>
    </motion.div>
  );
}

function ConsultModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", area: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setSubmitted(false);
      setForm({ name: "", email: "", area: "", message: "" });
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const inputCls = "w-full bg-[#000A4F] border border-white/15 text-white text-sm px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#D4AF36]/60 transition-colors";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative z-10 bg-[#001489] w-full max-w-lg overflow-hidden"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-[#D4AF36]" />
            <div className="p-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-[#D4AF36] text-[10px] tracking-[0.35em] uppercase font-bold mb-1">Milton Hobbs</p>
                  <h3 className="font-heading text-white text-2xl font-semibold tracking-tight">Book a Consultation</h3>
                </div>
                <button
                  data-testid="modal-close"
                  onClick={onClose}
                  className="text-white/40 hover:text-white transition-colors mt-1"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="py-12 text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-6 border border-[#D4AF36] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#D4AF36]" fill="none" viewBox="0 0 20 20">
                        <path d="M4 10l5 5 7-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[#D4AF36] text-xs tracking-[0.3em] uppercase font-bold mb-2">Message Sent</p>
                    <p className="text-white/60 text-sm">A partner will be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input data-testid="modal-name" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className={inputCls} />
                    <input data-testid="modal-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className={inputCls} />
                    <select data-testid="modal-area" name="area" value={form.area} onChange={handleChange} required className={`${inputCls} appearance-none`}>
                      <option value="">Area of Interest</option>
                      {["Corporate & Commercial", "Real Estate", "Litigation", "Arbitration", "Employment", "Banking & Finance", "Tax", "Immigration", "IP", "Technology", "Other"].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <textarea data-testid="modal-message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your matter..." rows={4} className={`${inputCls} resize-none`} />
                    <button
                      data-testid="modal-submit"
                      type="submit"
                      className="w-full bg-[#D4AF36] text-[#001489] text-xs tracking-[0.2em] uppercase font-bold py-4 hover:bg-[#C4A030] transition-colors mt-2"
                    >
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function OurFirmPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [lang] = useState<"EN" | "FR">("EN");

  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const philosophyRef = useRef<HTMLDivElement>(null);
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-80px" });

  const missionRef = useRef<HTMLDivElement>(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-80px" });

  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  const stats = [
    { value: 4, suffix: "+", label: "Years of Practice", labelFR: "Ans d'Exercice" },
    { value: 10, suffix: "+", label: "Practice Areas", labelFR: "Domaines d'Expertise" },
    { value: 2, suffix: "", label: "Global Offices", labelFR: "Bureaux Mondiaux" },
    { value: 50, suffix: "+", label: "Jurisdictions Served", labelFR: "Juridictions Couvertes" },
  ];

  const headlines = ["Built on", "Principle.", "Driven by", "Purpose."];

  return (
    <LanguageProvider>
      <div className="bg-[#000A4F] min-h-screen" data-testid="our-firm-page">
        <Header />

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex flex-col overflow-hidden bg-[#000A4F]"
          data-testid="firm-hero"
        >
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute border-[#8099FF]"
                style={{
                  left: `${(i % 5) * 25}%`,
                  top: `${Math.floor(i / 5) * 25}%`,
                  width: "25%",
                  height: "25%",
                  borderWidth: "0 0 0.5px 0.5px",
                  opacity: 0.04,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px"
                style={{
                  left: `${15 + i * 14}%`,
                  top: 0,
                  height: "100%",
                  background: "linear-gradient(to bottom, transparent, rgba(128,153,255,0.08) 30%, rgba(128,153,255,0.08) 70%, transparent)",
                }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
              />
            ))}
          </div>

          <div className="relative z-10 flex-1 flex items-center">
            <div className="max-w-[1400px] mx-auto px-8 w-full pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-[#D4AF36] text-[10px] tracking-[0.45em] uppercase font-bold mb-10"
                >
                  Our Firm
                </motion.p>

                <div className="mb-10">
                  {headlines.map((word, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={heroInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span
                        className="font-heading font-bold leading-none block"
                        style={{
                          fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)",
                          color: i % 2 === 0 ? "rgba(255,255,255,0.92)" : "#D4AF36",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {word}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="text-white/55 text-base leading-relaxed max-w-md mb-12"
                >
                  At Milton Hobbs, we are committed to delivering legal counsel that is clear, composed, and commercially astute. In a fast-moving and increasingly complex environment, our clients rely on us to provide not only sound legal advice, but strategic perspective that empowers action.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 1.0 }}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    data-testid="hero-cta-consult"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-3 bg-[#D4AF36] text-[#001489] text-xs tracking-[0.2em] uppercase font-bold px-8 py-4 hover:bg-[#C4A030] transition-colors"
                  >
                    Book a Consultation
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </button>
                  <a
                    href="#values"
                    data-testid="hero-cta-values"
                    className="inline-flex items-center gap-3 border border-white/25 text-white/70 text-xs tracking-[0.2em] uppercase font-bold px-8 py-4 hover:border-white/50 hover:text-white transition-colors"
                  >
                    Our Values
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
                className="relative h-[460px] hidden lg:block"
              >
                <FirmCrest3D />

                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2;
                    const r = 42 + (i % 3) * 8;
                    const x = 50 + r * Math.cos(angle);
                    const y = 50 + r * Math.sin(angle);
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-0.5 h-0.5 bg-[#D4AF36] rounded-full"
                        style={{ left: `${x}%`, top: `${y}%` }}
                        animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
                        transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity }}
                      />
                    );
                  })}
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex gap-4">
                    {["Dubai, UAE", "Paris, France"].map((city, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#D4AF36] rounded-full" />
                        <span className="text-[#D4AF36]/60 text-[9px] tracking-[0.3em] uppercase font-medium">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full pb-16">
            <div className="border-t border-white/8 pt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  data-testid={`stat-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
                >
                  <div className="font-heading text-white font-bold mb-1" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", lineHeight: 1 }}>
                    <AnimatedNumber target={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-medium">{lang === "FR" ? s.labelFR : s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(212,175,54,0.3) 50%, transparent)" }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </section>

        {/* ── PHILOSOPHY & PURPOSE ── */}
        <section
          ref={philosophyRef}
          data-header-theme="light"
          className="bg-white py-32 px-8"
          data-testid="firm-philosophy"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              <div>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[#D4AF36] text-[10px] tracking-[0.4em] uppercase font-bold mb-8"
                >
                  Our Philosophy & Purpose
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="font-heading text-[#000A4F] font-bold leading-[1.05] tracking-tight mb-10"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
                >
                  Complexity demands<br />
                  <span className="text-[#001489]">clarity.</span>
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={philosophyInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="w-16 h-0.5 bg-[#D4AF36] mb-10 origin-left"
                />
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="text-[#000A4F]/60 text-base leading-relaxed mb-6"
                >
                  At Milton Hobbs, we are committed to delivering legal counsel that is clear, composed, and commercially astute. In a fast-moving and increasingly complex environment, our clients rely on us to provide not only sound legal advice, but strategic perspective that empowers action.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.55 }}
                  className="text-[#000A4F]/60 text-base leading-relaxed mb-6"
                >
                  We operate with intention — every word, every argument, and every interaction is considered and purposeful. Our approach is marked by discretion, clarity, and quiet confidence, offering clients a seamless experience across multiple legal systems and cultural contexts.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-[#000A4F]/60 text-base leading-relaxed"
                >
                  As a boutique firm, we prioritise depth over volume. Our model ensures direct access to experienced counsel, fluent in English, French, and Arabic, with deep knowledge of the regulatory frameworks that shape the UAE, France, and the broader Gulf region.
                </motion.p>
              </div>

              <div>
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={philosophyInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-[360px]"
                  >
                    <PhilosophyVisual />
                  </motion.div>

                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 bg-[#001489] p-8"
                  >
                    <div className="w-8 h-px bg-[#D4AF36] mb-5" />
                    <p className="text-[#D4AF36]/70 text-[9px] tracking-[0.35em] uppercase font-bold mb-3">This is Our Promise</p>
                    <p className="font-heading text-white font-semibold text-lg leading-snug tracking-tight mb-4">
                      To Bring Precision to Complexity, Composure to Challenge, and a Client-First Mindset to Every Engagement.
                    </p>
                    <p className="text-[#D4AF36] text-[10px] tracking-[0.35em] uppercase font-bold">Milton Hobbs — Brand Promise</p>
                  </motion.blockquote>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D4AF36]/40 mt-20">
              {[
                { num: "01", title: "Boutique Precision", body: "No delegation chains. The partners who pitch the matter are the partners who execute it. Every mandate receives the firm's highest attention." },
                { num: "02", title: "Dual-Jurisdiction DNA", body: "With offices in Dubai and Paris, we carry two legal traditions and two regulatory cultures — unified in one coherent approach for your matter." },
                { num: "03", title: "Commercial Alignment", body: "We understand your business objectives before your legal ones. Our counsel is always aligned with your commercial outcomes, not just legal technicalities." },
                { num: "04", title: "Long-Term Partnership", body: "We do not operate transactionally. Our aim is to become your trusted legal counsel across years and mandates — not just across documents." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  data-testid={`philosophy-card-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="bg-white p-10 group hover:bg-[#001489] transition-colors duration-400"
                >
                  <p className="text-[#D4AF36] text-xs tracking-[0.3em] font-bold mb-4">{item.num}</p>
                  <h3 className="font-heading text-[#000A4F] group-hover:text-white font-bold text-xl tracking-tight mb-3 transition-colors duration-300">{item.title}</h3>
                  <p className="text-[#000A4F]/55 group-hover:text-white/55 text-sm leading-relaxed transition-colors duration-300">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRAND STORY & MISSION ── */}
        <section
          ref={missionRef}
          className="bg-[#001489] py-32 px-8 overflow-hidden"
          data-testid="firm-mission"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              <div>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={missionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[#D4AF36] text-[10px] tracking-[0.4em] uppercase font-bold mb-8"
                >
                  Brand Story & Mission
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={missionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="font-heading text-white font-bold leading-tight tracking-tight mb-8"
                  style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)" }}
                >
                  The name behind<br />
                  <span className="text-[#D4AF36]">the firm.</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={missionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-white/60 text-sm leading-relaxed mb-5"
                >
                  At Milton Hobbs, we believe the strongest ideas are the simplest ones — delivered with clarity, grounded in purpose, and designed to endure. The name brings together two powerful intellectual legacies:
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={missionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.38 }}
                  className="space-y-3 mb-6 pl-4 border-l border-[#D4AF36]/30"
                >
                  <p className="text-white/80 text-sm leading-relaxed">
                    <span className="text-[#D4AF36] font-semibold">John Milton</span> — the voice of liberty, human dignity, and moral conviction.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    <span className="text-[#D4AF36] font-semibold">Thomas Hobbes</span> — the architect of legal order, realism, and rational governance.
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={missionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="text-white/60 text-sm leading-relaxed mb-10"
                >
                  While their philosophies diverged, together they represent the necessary balance between justice and control, between empathy and authority. At Milton Hobbs, we embrace this duality — true clarity lies not in choosing one over the other, but in navigating the tension between them with purpose.
                </motion.p>

                <div className="grid grid-cols-2 gap-px bg-white/8">
                  {[
                    {
                      label: "Strategic",
                      body: "Every engagement is approached with long-term commercial logic. We think three moves ahead — so you are never caught off guard.",
                    },
                    {
                      label: "Approachable",
                      body: "Elite counsel should not feel distant. We communicate with clarity and warmth, treating every client as a genuine partner.",
                    },
                    {
                      label: "Client-Centric",
                      body: "Your objectives shape everything we do. Our model is built around your matter, your timeline, and your preferred outcome.",
                    },
                    {
                      label: "Principled",
                      body: "We do not cut corners or compromise on ethics. Our integrity is the foundation every piece of advice is built upon.",
                    },
                  ].map((v, i) => (
                    <motion.div
                      key={i}
                      data-testid={`brand-value-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={missionInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                      className="bg-[#001489] p-7 group hover:bg-[#000A4F] transition-colors duration-300"
                    >
                      <div className="w-6 h-px bg-[#D4AF36] mb-4 group-hover:w-10 transition-all duration-300" />
                      <p className="font-heading text-white font-bold text-base tracking-tight mb-2">{v.label}</p>
                      <p className="text-white/45 text-xs leading-relaxed">{v.body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={missionInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  className="relative bg-[#000A4F] h-[360px] overflow-hidden"
                >
                  <MissionOrbit />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section
          id="values"
          ref={valuesRef}
          data-header-theme="light"
          className="bg-[#F6F7FB] py-32 px-8"
          data-testid="firm-values"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 mb-20 items-end">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-[#D4AF36] text-[10px] tracking-[0.4em] uppercase font-bold mb-6"
                >
                  Core Values
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-heading text-[#000A4F] font-bold leading-tight tracking-tight"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                >
                  What drives<br />every decision.
                </motion.h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[#000A4F]/55 text-base leading-relaxed max-w-xl self-end"
              >
                We are strategic in our thinking, approachable in our manner, client-centric in our model, and principled in everything we do. These are not aspirations — they are the standards we hold ourselves to on every instruction, for every client.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#001489]/8">
              {coreValues.map((value, i) => (
                <ValueCard key={value.id} value={value} lang={lang} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── BOOK A CONSULTATION ── */}
        <section
          className="bg-[#000A4F] py-28 px-8 overflow-hidden relative"
          data-testid="firm-cta"
        >
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(0,20,137,0.5) 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-[#D4AF36] text-[10px] tracking-[0.4em] uppercase font-bold mb-6"
                >
                  Book a Consultation
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-heading text-white font-bold leading-tight tracking-tight mb-6"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                >
                  Let's discuss<br />
                  <span className="text-[#D4AF36]">your matter.</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-white/55 text-base leading-relaxed mb-10 max-w-md"
                >
                  Whether you need immediate counsel or are planning ahead, our partners are ready to assist you. We offer direct access to experienced advisors, fluent in English, French, and Arabic, across our Dubai and Paris offices.
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#D4AF36]" />
                    <div>
                      <p className="text-white/35 text-[9px] tracking-[0.35em] uppercase font-medium">Dubai</p>
                      <p className="text-white/70 text-sm">+971 4 523 2421</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#D4AF36]" />
                    <div>
                      <p className="text-white/35 text-[9px] tracking-[0.35em] uppercase font-medium">Paris</p>
                      <p className="text-white/70 text-sm">contact@miltonhobbs.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-[#001489]/60 border border-white/10 p-10 relative"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-[#D4AF36]" />
                <CTAForm onSuccess={() => {}} />
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />

        <ConsultModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </LanguageProvider>
  );
}

function CTAForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", area: "" });
  const [submitted, setSubmitted] = useState(false);
  const inputCls = "w-full bg-[#000A4F]/60 border border-white/12 text-white text-sm px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#D4AF36]/50 transition-colors";
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSuccess();
  };
  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div className="w-10 h-10 mx-auto mb-4 border border-[#D4AF36] flex items-center justify-center">
          <svg className="w-4 h-4 text-[#D4AF36]" fill="none" viewBox="0 0 16 16">
            <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[#D4AF36] text-xs tracking-[0.3em] uppercase font-bold mb-2">Request Received</p>
        <p className="text-white/50 text-sm">A partner will be in touch shortly.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input data-testid="cta-name" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className={inputCls} />
        <input data-testid="cta-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className={inputCls} />
      </div>
      <select data-testid="cta-area" name="area" value={form.area} onChange={handleChange} required className={`${inputCls} appearance-none`}>
        <option value="">Area of Interest</option>
        {["Corporate & Commercial", "Real Estate", "Litigation", "Arbitration", "Employment", "Banking & Finance", "Tax", "Immigration", "IP", "Technology", "Other"].map(o => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <button
        data-testid="cta-submit"
        type="submit"
        className="w-full bg-[#D4AF36] text-[#001489] text-xs tracking-[0.2em] uppercase font-bold py-4 hover:bg-[#C4A030] transition-colors"
      >
        Request a Consultation
        <svg className="inline-block ml-3 w-3 h-3" fill="none" viewBox="0 0 12 12">
          <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      </button>
    </form>
  );
}
