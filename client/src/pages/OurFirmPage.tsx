import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type CSSProperties } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { ourFirmCopy, ct, type OurFirmLang } from "@/data/ourFirmCopy";
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
              border: `1px solid ${face.gold ? "rgba(0,20,137,0.45)" : "rgba(0,20,137,0.18)"}`,
            }}
          >
            {face.gold && (
              <div
                className="absolute inset-[8px] pointer-events-none"
                style={{ border: "1px solid rgba(0,20,137,0.2)" }}
              />
            )}
            {!face.isEmpty && (
              <div className="text-center">
                <div
                  className="w-4 h-px bg-white mx-auto mb-3"
                  style={{ opacity: face.gold ? 0.8 : 0.5 }}
                />
                <p
                  className="font-heading font-bold leading-tight tracking-tight mb-2"
                  style={{
                    fontSize: "clamp(10px, 1.1vw, 13px)",
                    color: "white",
                    opacity: face.gold ? 0.95 : 0.9,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {face.label}
                </p>
                <p
                  className="text-[7px] tracking-[0.22em] uppercase"
                  style={{ color: "rgba(0,20,137,0.55)" }}
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
            border: `1px solid ${i === 1 ? "rgba(0,20,137,0.22)" : "rgba(128,153,255,0.1)"}`,
          }}
          animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
          transition={{ duration: 22 + i * 9, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i === 1 ? "white" : "#8099FF",
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


function MissionOrbit() {
  const CX = 210, CY = 150;

  const dot1 = useRef<SVGCircleElement>(null);
  const dot2 = useRef<SVGCircleElement>(null);
  const dot3 = useRef<SVGCircleElement>(null);
  const lbl1 = useRef<SVGTextElement>(null);
  const lbl2 = useRef<SVGTextElement>(null);
  const lbl3 = useRef<SVGTextElement>(null);

  const rings = [
    { rx: 158, ry: 20,  speed: 0.24, phase: 0,            color: "white", rRange: [2.5, 5.5], label: "PRECISION"    },
    { rx: 112, ry: 46,  speed: 0.38, phase: Math.PI * 0.7, color: "#8099FF", rRange: [2,   4.5], label: "COMPOSURE"    },
    { rx: 66,  ry: 61,  speed: 0.6,  phase: Math.PI,       color: "white", rRange: [1.5, 3.5], label: "CLIENT·FIRST" },
  ];

  useAnimationFrame((t) => {
    const dots = [dot1, dot2, dot3];
    const lbls = [lbl1, lbl2, lbl3];
    rings.forEach((o, i) => {
      const angle = (t / 1000) * o.speed + o.phase;
      const x = CX + o.rx * Math.cos(angle);
      const y = CY + o.ry * Math.sin(angle);
      const depth = Math.sin(angle);
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
          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000A4F" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={CX} cy={CY} rx={185} ry={130} fill="url(#orbitGlow)" />

      <line x1={CX} y1={20} x2={CX} y2={280} stroke="#8099FF" strokeOpacity={0.06} strokeWidth={0.6} />
      <line x1={20} y1={CY} x2={400} y2={CY} stroke="#8099FF" strokeOpacity={0.06} strokeWidth={0.6} />

      {rings.map((o, i) => (
        <g key={i}>
          <path
            d={`M ${CX - o.rx} ${CY} A ${o.rx} ${o.ry} 0 0 1 ${CX + o.rx} ${CY}`}
            stroke={o.color}
            strokeOpacity={0.1}
            strokeWidth={0.7}
          />
          <path
            d={`M ${CX + o.rx} ${CY} A ${o.rx} ${o.ry} 0 0 1 ${CX - o.rx} ${CY}`}
            stroke={o.color}
            strokeOpacity={0.3}
            strokeWidth={1}
          />
        </g>
      ))}

      <circle ref={dot1} cx={CX + 158} cy={CY} r={4} fill="white" />
      <circle ref={dot2} cx={CX + 112} cy={CY} r={3} fill="#8099FF" />
      <circle ref={dot3} cx={CX + 66}  cy={CY} r={3} fill="white" />

      <text ref={lbl1} fontSize="6.5" textAnchor="middle" fontFamily="monospace" letterSpacing="0.3em" fill="white" opacity="0">PRECISION</text>
      <text ref={lbl2} fontSize="6.5" textAnchor="middle" fontFamily="monospace" letterSpacing="0.3em" fill="#8099FF" opacity="0">COMPOSURE</text>
      <text ref={lbl3} fontSize="6.5" textAnchor="middle" fontFamily="monospace" letterSpacing="0.3em" fill="white" opacity="0">CLIENT·FIRST</text>

      <motion.circle
        cx={CX} cy={CY} r={32}
        stroke="white" strokeWidth={0.8} strokeOpacity={0.35}
        fill="white" fillOpacity={0.04}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />
      <motion.circle
        cx={CX} cy={CY} r={52}
        stroke="white" strokeWidth={0.5} strokeOpacity={0.1}
        fill="none"
        animate={{ scale: [1, 1.55, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />
      <text x={CX} y={CY + 5} fill="white" fontSize="13" textAnchor="middle"
        fontFamily="var(--font-heading)" fontWeight="800" letterSpacing="0.14em">M·H</text>
    </svg>
  );
}

const coreValues = [
  {
    id: "excellence",
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        {[28, 20, 13].map((r, i) => (
          <motion.circle
            key={i} cx={32} cy={32} r={r}
            stroke={active ? "white" : "#001489"}
            strokeOpacity={active ? 0.2 + i * 0.15 : 0.06 + i * 0.04}
            strokeWidth={1}
            fill="none"
            animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
            transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "32px 32px" }}
          />
        ))}
        <motion.circle cx={32} cy={32} r={5} fill={active ? "white" : "#001489"} fillOpacity={active ? 1 : 0.4}
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>
    ),
  },
  {
    id: "integrity",
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <motion.path
          d="M32 8 L54 20 L54 38 Q54 52 32 58 Q10 52 10 38 L10 20 Z"
          stroke={active ? "white" : "#001489"}
          strokeOpacity={active ? 0.7 : 0.3}
          strokeWidth={1.2}
          fill={active ? "rgba(0,20,137,0.06)" : "none"}
          animate={{ strokeOpacity: active ? [0.5, 0.9, 0.5] : [0.2, 0.4, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.path
          d="M22 32 L29 39 L42 26"
          stroke={active ? "white" : "#001489"}
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
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <line x1={32} y1={6} x2={32} y2={58} stroke={active ? "white" : "#001489"} strokeOpacity={0.12} strokeWidth={1} />
        <line x1={6} y1={32} x2={58} y2={32} stroke={active ? "white" : "#001489"} strokeOpacity={0.12} strokeWidth={1} />
        {[22, 14].map((r, i) => (
          <circle key={i} cx={32} cy={32} r={r} stroke={active ? "white" : "#001489"} strokeOpacity={active ? 0.2 + i * 0.1 : 0.06 + i * 0.04} strokeWidth={1} fill="none" />
        ))}
        <motion.circle cx={32} cy={32} r={22}
          stroke={active ? "white" : "#001489"}
          strokeWidth={1.5} strokeOpacity={0.8} fill="none"
          strokeDasharray="4 4"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "32px 32px" }}
        />
        <circle cx={32} cy={32} r={4} fill={active ? "white" : "#001489"} fillOpacity={active ? 1 : 0.5} />
      </svg>
    ),
  },
  {
    id: "boldness",
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <motion.path
          d="M32 10 L36 28 L54 32 L36 36 L32 54 L28 36 L10 32 L28 28 Z"
          stroke={active ? "white" : "#001489"}
          strokeOpacity={active ? 0.8 : 0.3}
          strokeWidth={1.2}
          fill={active ? "rgba(212,175,54,0.08)" : "none"}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "32px 32px" }}
        />
        <circle cx={32} cy={32} r={5} fill={active ? "white" : "#001489"} fillOpacity={active ? 1 : 0.4} />
      </svg>
    ),
  },
  {
    id: "crossborder",
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx={20} cy={32} r={10} stroke={active ? "white" : "#001489"} strokeOpacity={active ? 0.6 : 0.25} strokeWidth={1} fill="none" />
        <circle cx={44} cy={32} r={10} stroke={active ? "white" : "#001489"} strokeOpacity={active ? 0.6 : 0.25} strokeWidth={1} fill="none" />
        <motion.path
          d="M20 25 Q32 18 44 25"
          stroke={active ? "white" : "#001489"}
          strokeOpacity={active ? 0.8 : 0.3}
          strokeWidth={1.2}
          strokeDasharray="40"
          fill="none"
          animate={{ strokeDashoffset: [40, 0, -40] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M20 39 Q32 46 44 39"
          stroke={active ? "white" : "#001489"}
          strokeOpacity={active ? 0.5 : 0.18}
          strokeWidth={1}
          strokeDasharray="40"
          fill="none"
          animate={{ strokeDashoffset: [-40, 0, 40] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <circle cx={20} cy={32} r={3} fill={active ? "white" : "#001489"} fillOpacity={active ? 0.9 : 0.4} />
        <circle cx={44} cy={32} r={3} fill={active ? "white" : "#001489"} fillOpacity={active ? 0.9 : 0.4} />
      </svg>
    ),
  },
  {
    id: "discretion",
    icon: (active: boolean) => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        {[26, 20, 14, 9].map((r, i) => (
          <motion.circle
            key={i} cx={32} cy={32} r={r}
            stroke={active ? "white" : "#001489"}
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
          stroke={active ? "white" : "#001489"} strokeWidth={1} fill="none"
          strokeOpacity={active ? 0.9 : 0.5}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.path
          d="M29 30 Q29 25 32 25 Q35 25 35 30"
          stroke={active ? "white" : "#001489"} strokeWidth={1} fill="none"
          strokeOpacity={active ? 0.9 : 0.5}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </svg>
    ),
  },
];

function ValueCard({ value, label, body, index }: { value: typeof coreValues[0]; label: string; body: string; index: number }) {
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
      className="group relative border border-[#001489] p-8 cursor-default overflow-hidden"
      style={{
        background: hovered ? "#001489" : "#ffffff",
        borderColor: hovered ? "transparent" : "#001489",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-white"
        animate={{ scaleX: hovered ? 1 : 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <div className="w-12 h-12 mb-6">
        {value.icon(hovered)}
      </div>
      <motion.p
        className="tracking-[0.35em] uppercase font-bold mb-2 text-[16px]"
        animate={{ color: hovered ? "white" : "#001489" }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.p>
      <motion.p
        className="text-sm leading-relaxed"
        animate={{ color: hovered ? "#FFFFFF" : "#001489" }}
        transition={{ duration: 0.3 }}
      >
        {body}
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

  const inputCls = "w-full bg-[#001489] border border-white text-white text-sm px-4 py-3 placeholder:text-white focus:outline-none focus:border-white transition-colors";

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
            <div className="absolute top-0 left-0 right-0 h-px bg-white" />
            <div className="p-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-white text-[10px] tracking-[0.35em] uppercase font-bold mb-1">Milton Hobbs</p>
                  <h3 className="font-heading text-white text-2xl font-semibold tracking-tight">Book a Consultation</h3>
                </div>
                <button
                  data-testid="modal-close"
                  onClick={onClose}
                  className="text-white hover:text-white transition-colors mt-1"
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
                    <div className="w-12 h-12 mx-auto mb-6 border border-white flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 20 20">
                        <path d="M4 10l5 5 7-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-white text-xs tracking-[0.3em] uppercase font-bold mb-2">Message Sent</p>
                    <p className="text-white text-sm">A partner will be in touch shortly.</p>
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
                      className="w-full bg-white text-[#001489] text-xs tracking-[0.2em] uppercase font-bold py-4 hover:bg-[#001489] hover:text-white transition-colors mt-2"
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
  return (
    <LanguageProvider>
      <OurFirmContent />
    </LanguageProvider>
  );
}

function OurFirmContent() {
  const { lang } = useLang();
  const l: OurFirmLang = lang === "FR" ? "fr" : "en";
  const copy = ourFirmCopy;

  const [modalOpen, setModalOpen] = useState(false);

  const philosophyRef = useRef<HTMLDivElement>(null);
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-80px" });

  const missionRef = useRef<HTMLDivElement>(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-80px" });

  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  const ytDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const meta = copy.meta[l];
    document.title = meta.title;

    const setMeta = (nameOrProp: string, content: string, isProp = false) => {
      const attr = isProp ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, nameOrProp);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", meta.description);
    setMeta("keywords", meta.keywords);
    setMeta("og:title", meta.ogTitle, true);
    setMeta("og:description", meta.ogDescription, true);
    setMeta("og:type", "website", true);

    const setHreflang = (hreflang: string, href: string) => {
      const sel = `link[rel="alternate"][hreflang="${hreflang}"]`;
      let el = document.querySelector(sel) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "alternate");
        el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };
    const origin = window.location.origin;
    setHreflang("en", `${origin}/firm`);
    setHreflang("fr", `${origin}/fr/cabinet`);
    setHreflang("x-default", `${origin}/firm`);

    const ldId = "firm-jsonld";
    let ldEl = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ldEl) {
      ldEl = document.createElement("script");
      ldEl.id = ldId;
      ldEl.setAttribute("type", "application/ld+json");
      document.head.appendChild(ldEl);
    }
    ldEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": meta.ogTitle,
      "description": meta.ogDescription,
      "url": `${origin}/firm`,
      "inLanguage": l === "fr" ? "fr-FR" : "en-GB",
      "publisher": {
        "@type": "LegalService",
        "name": "Milton Hobbs",
        "url": origin,
        "address": [
          { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" },
          { "@type": "PostalAddress", "addressLocality": "Paris", "addressCountry": "FR" },
        ],
      },
    });

    return () => {
      const ldScript = document.getElementById(ldId);
      if (ldScript) ldScript.remove();
    };
  }, [l]);

  useEffect(() => {
    const LOOP_AT = 135;

    const initPlayer = () => {
      if (!ytDivRef.current) return;
      new (window as any).YT.Player(ytDivRef.current, {
        videoId: "MnUh9nVYqjg",
        playerVars: {
          autoplay: 1, mute: 1, controls: 0, rel: 0,
          modestbranding: 1, playsinline: 1,
          iv_load_policy: 3, showinfo: 0, disablekb: 1, fs: 0, enablejsapi: 1,
        },
        events: {
          onReady: (e: any) => {
            e.target.playVideo();
            const interval = setInterval(() => {
              try { if (e.target.getCurrentTime() >= LOOP_AT) e.target.seekTo(0, true); } catch (_) {}
            }, 500);
            return () => clearInterval(interval);
          },
          onStateChange: (e: any) => { if (e.data === 0) e.target.seekTo(0, true); },
        },
      });
    };

    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }
  }, []);

  const stats = [
    { value: 4, suffix: "+", label: "Years of Practice", labelFR: "Ans d'Exercice" },
    { value: 10, suffix: "+", label: "Practice Areas", labelFR: "Domaines d'Expertise" },
    { value: 2, suffix: "", label: "Global Offices", labelFR: "Bureaux Mondiaux" },
    { value: 50, suffix: "+", label: "Jurisdictions Served", labelFR: "Juridictions Couvertes" },
  ];

  return (
    <div className="bg-[#001489] min-h-screen" data-testid="our-firm-page">
      <Header />
      {/* ── HERO — full-screen YouTube video ── */}
      <section
        className="relative h-screen overflow-hidden"
        data-testid="firm-hero"
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-5%",
            width: "110%",
            height: "140%",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <div ref={ytDivRef} style={{ width: "100%", height: "100%" }} />
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center pointer-events-none">
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 9, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>
              Scroll
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7l5 5 5-5" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </section>
      {/* ── PHILOSOPHY & PURPOSE ── */}
      <section
        id="philosophy"
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
                className="text-[#001489] tracking-[0.12em] uppercase font-bold mb-8 text-[18px] font-sans"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {ct(copy.ourPhilosophy.eyebrow, l)}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-heading text-[#001489] font-bold leading-[1.05] tracking-tight mb-10"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                {ct(copy.ourPhilosophy.h1, l)}
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={philosophyInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-16 h-0.5 bg-[#001489] mb-10 origin-left"
              />
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-[#001489] text-base leading-relaxed mb-6"
              >
                {ct(copy.ourPhilosophy.leftColumn.paragraph1, l)}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="text-[#001489] text-base leading-relaxed mb-6"
              >
                {ct(copy.ourPhilosophy.leftColumn.paragraph2, l)}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-[#001489] text-base leading-relaxed"
              >
                {ct(copy.ourPhilosophy.leftColumn.paragraph3, l)}
              </motion.p>
            </div>

            <div>
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#001489] p-8"
              >
                <div className="w-8 h-px bg-white mb-5" />
                <p className="text-white text-[9px] tracking-[0.35em] uppercase font-bold mb-3">
                  {ct(copy.ourPhilosophy.promiseCard.eyebrow, l)}
                </p>
                <p className="text-white mb-4 text-[18px]">
                  {ct(copy.ourPhilosophy.promiseCard.body, l)}
                </p>
              </motion.blockquote>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#001489] mt-20">
            {copy.ourPhilosophy.supportGrid.map((item, i) => (
              <motion.div
                key={i}
                data-testid={`philosophy-card-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="bg-white p-10"
              >
                <h3 className="font-heading text-[#001489] font-bold text-xl tracking-tight mb-3">
                  {ct(item.title, l)}
                </h3>
                <p className="text-[#001489] text-sm leading-relaxed">{ct(item.body, l)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── BRAND STORY & MISSION ── */}
      <section
        ref={missionRef}
        className="flex flex-col lg:flex-row overflow-hidden"
        data-testid="firm-mission"
      >
        {/* Left — white panel */}
        <div className="w-full lg:w-1/2 bg-white py-32 px-12 xl:px-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#001489] tracking-[0.12em] uppercase font-bold mb-8 text-[18px] font-sans"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {ct(copy.brandStory.eyebrow, l)}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-[#001489] font-bold leading-tight tracking-tight mb-8"
            style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)" }}
          >
            {ct(copy.brandStory.h2, l)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#001489] mb-5 text-[16px]"
          >
            {ct(copy.brandStory.openingParagraph, l)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="space-y-3 mb-6 pl-4 border-l border-[#001489]"
          >
            <p className="text-[#001489] text-[16px]">
              <span className="text-[#001489] font-semibold">
                {ct(copy.brandStory.pullQuote.milton.nameBold, l)}
              </span>
              {ct(copy.brandStory.pullQuote.milton.description, l)}
            </p>
            <p className="text-[#001489] text-[16px]">
              <span className="text-[#001489] font-semibold">
                {ct(copy.brandStory.pullQuote.hobbes.nameBold, l)}
              </span>
              {ct(copy.brandStory.pullQuote.hobbes.description, l)}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-[#001489] mb-10 text-[16px]"
          >
            {ct(copy.brandStory.closingParagraph, l)}
          </motion.p>

          <div className="grid grid-cols-2 gap-px bg-[#001489]">
            {copy.brandStory.brandTraits.map((v, i) => (
              <motion.div
                key={i}
                data-testid={`brand-value-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="bg-white p-7"
              >
                <div className="w-6 h-px bg-[#001489] mb-4" />
                <p className="font-heading text-[#001489] font-bold text-base tracking-tight mb-2">{ct(v.title, l)}</p>
                <p className="text-[#001489] text-[14px]">{ct(v.body, l)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — blue panel */}
        <div className="w-full lg:w-1/2 bg-[#001489] flex items-center justify-center py-32 px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={missionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative w-full h-[360px] overflow-hidden"
          >
            <MissionOrbit />
          </motion.div>
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
                className="tracking-[0.12em] uppercase font-bold mb-6 text-[#001489] text-[18px] font-sans"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {ct(copy.coreValues.eyebrow, l)}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading text-[#001489] font-bold leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                {ct(copy.coreValues.h2, l)}
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#001489] text-base leading-relaxed max-w-xl self-end"
            >
              {ct(copy.coreValues.intro, l)}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#001489]">
            {copy.coreValues.values.map((jv, i) => {
              const valueEntry = coreValues.find(
                v => v.id === jv.slug || (v.id === "crossborder" && jv.slug === "cross-border-mastery")
              );
              if (!valueEntry) return null;
              return (
                <ValueCard
                  key={jv.slug}
                  value={valueEntry}
                  label={ct(jv.label, l)}
                  body={ct(jv.body, l)}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* ── BOOK A CONSULTATION ── */}
      <section
        className="bg-[#F6F7FB] py-28 px-8 overflow-hidden relative"
        data-testid="firm-cta"
      >
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[#001489] tracking-[0.12em] uppercase font-bold mb-6 text-[18px] font-sans"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {ct(copy.bookConsultation.eyebrow, l)}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading text-[#001489] font-bold leading-tight tracking-tight mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                {ct(copy.bookConsultation.h2, l)}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[#001489] text-base leading-relaxed mb-10 max-w-md"
              >
                {ct(copy.bookConsultation.body, l)}
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#001489]" />
                  <div>
                    <p className="text-[#001489] text-[9px] tracking-[0.35em] uppercase font-medium">
                      {ct(copy.bookConsultation.contactDetails.dubai.label, l)}
                    </p>
                    <p className="text-[#001489] text-sm">{copy.bookConsultation.contactDetails.dubai.value}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#001489]" />
                  <div>
                    <p className="text-[#001489] text-[9px] tracking-[0.35em] uppercase font-medium">
                      {ct(copy.bookConsultation.contactDetails.paris.label, l)}
                    </p>
                    <p className="text-[#001489] text-sm">{copy.bookConsultation.contactDetails.paris.value}</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-10 relative border border-[#E5E9F0]"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#001489]" />
              <CTAForm lang={l} onSuccess={() => {}} />
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      <ConsultModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

function CTAForm({ lang, onSuccess }: { lang: OurFirmLang; onSuccess: () => void }) {
  const copy = ourFirmCopy;
  const [form, setForm] = useState({ name: "", email: "", area: "" });
  const [submitted, setSubmitted] = useState(false);
  const inputCls = "w-full bg-white border border-[#E5E9F0] text-[#001489] text-sm px-4 py-3 placeholder:text-[#001489] focus:outline-none focus:border-[#001489] transition-colors";
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
        <div className="w-10 h-10 mx-auto mb-4 border border-[#001489] flex items-center justify-center">
          <svg className="w-4 h-4 text-[#001489]" fill="none" viewBox="0 0 16 16">
            <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[#001489] text-xs tracking-[0.3em] uppercase font-bold mb-2">Request Received</p>
        <p className="text-[#001489] text-sm">{ct(copy.bookConsultation.form.autoReply, lang)}</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          data-testid="cta-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={ct(copy.bookConsultation.form.fields.fullName.placeholder, lang)}
          required
          className={inputCls}
        />
        <input
          data-testid="cta-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder={ct(copy.bookConsultation.form.fields.email.placeholder, lang)}
          required
          className={inputCls}
        />
      </div>
      <select
        data-testid="cta-area"
        name="area"
        value={form.area}
        onChange={handleChange}
        required
        className={`${inputCls} appearance-none`}
      >
        <option value="">{ct(copy.bookConsultation.form.fields.areaOfInterest.placeholder, lang)}</option>
        {copy.bookConsultation.form.fields.areaOfInterest.options.map(o => (
          <option key={o.value} value={o.value}>{ct(o.label, lang)}</option>
        ))}
      </select>
      <button
        data-testid="cta-submit"
        type="submit"
        className="w-full bg-[#001489] text-white text-xs tracking-[0.2em] uppercase font-bold py-4 hover:bg-[#0A1E6E] transition-colors"
      >
        {ct(copy.bookConsultation.form.submitButton, lang)}
        <svg className="inline-block ml-3 w-3 h-3" fill="none" viewBox="0 0 12 12">
          <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      </button>
      <p className="text-[#001489] text-[10px] leading-relaxed opacity-60">
        {ct(copy.bookConsultation.form.confidentialityNotice, lang)}
      </p>
    </form>
  );
}
