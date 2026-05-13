import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

/* ─── GEOMETRIC BACKGROUND TILES ──────────────────────────────────────────── */

const TILE_SZ = 140;
const GRID_COLS = [38, 50, 62, 74, 86];
const GRID_ROWS = [5, 23, 41, 59, 77];

const TILE_DEFS: [number, number, string, number, number][] = [
  [0, 0, "#001050", 22.0,  0.0],
  [3, 0, "#001489", 24.0,  6.0],
  [2, 1, "#001050", 20.0,  3.0],
  [3, 1, "#001489", 23.0,  9.0],
  [4, 2, "#001050", 21.0,  5.0],
  [1, 2, "#001489", 26.0, 12.0],
  [1, 3, "#001050", 22.0, 14.0],
  [3, 3, "#001489", 20.0,  7.0],
  [4, 4, "#001050", 24.0,  2.0],
];

const ACCENT_TILES = TILE_DEFS.map(([ci, ri, col, dur, delay]) => ({
  left: `${GRID_COLS[ci]}%`,
  top:  `${GRID_ROWS[ri]}%`,
  col, dur, delay,
}));

/* ─── DATA ─────────────────────────────────────────────────────────────────── */

const services = [
  {
    num: "01",
    title: "Corporate Transactions",
    description:
      "Formation, restructuring, and governance of companies across UAE and French jurisdictions — from shareholder agreements and board structuring to regulatory filings and constitutional documentation.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="6" y="10" width="28" height="22" stroke="#D4AF36" strokeWidth="1.5" />
        <rect x="12" y="6" width="16" height="6" stroke="#D4AF36" strokeWidth="1.2" />
        <line x1="12" y1="19" x2="28" y2="19" stroke="#D4AF36" strokeWidth="1" opacity="0.6" />
        <line x1="12" y1="24" x2="22" y2="24" stroke="#D4AF36" strokeWidth="1" opacity="0.4" />
        <circle cx="30" cy="29" r="4" stroke="#8099FF" strokeWidth="1.2" />
        <path d="M28.5 29l1.2 1.2 2-2" stroke="#8099FF" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Mergers & Acquisitions",
    description:
      "End-to-end M&A advisory: legal due diligence, SPA and SHA drafting, regulatory clearance, and post-merger integration across the GCC and Europe.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="13" cy="20" r="8" stroke="#D4AF36" strokeWidth="1.5" />
        <circle cx="27" cy="20" r="8" stroke="#D4AF36" strokeWidth="1.5" />
        <path d="M20 13v14" stroke="#D4AF36" strokeWidth="1" opacity="0.4" />
        <line x1="20" y1="20" x2="26" y2="20" stroke="#8099FF" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M23 17l3 3-3 3" stroke="#8099FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Joint Ventures & Partnerships",
    description:
      "Structuring JV agreements, equity arrangements, and profit-sharing frameworks for cross-border collaborations between Gulf and European business partners.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="14" cy="16" r="5" stroke="#D4AF36" strokeWidth="1.4" />
        <circle cx="26" cy="16" r="5" stroke="#D4AF36" strokeWidth="1.4" />
        <path d="M8 32c0-5 2.7-8 6-8h12c3.3 0 6 3 6 8" stroke="#D4AF36" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="20" y1="21" x2="20" y2="32" stroke="#8099FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Commercial Contracts",
    description:
      "Drafting, reviewing, and negotiating supply contracts, distribution arrangements, agency agreements, framework contracts, and commercial terms across jurisdictions.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="8" y="6" width="24" height="30" stroke="#D4AF36" strokeWidth="1.5" />
        <line x1="13" y1="14" x2="27" y2="14" stroke="#D4AF36" strokeWidth="1" opacity="0.6" />
        <line x1="13" y1="19" x2="27" y2="19" stroke="#D4AF36" strokeWidth="1" opacity="0.6" />
        <line x1="13" y1="24" x2="22" y2="24" stroke="#D4AF36" strokeWidth="1" opacity="0.4" />
        <path d="M22 28l2 2 4-4" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Corporate Restructuring",
    description:
      "Legal support for business reorganisations, holding company structures, spin-offs, and operational restructurings designed to protect assets and improve commercial efficiency.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="14" y="6" width="12" height="8" stroke="#D4AF36" strokeWidth="1.4" />
        <rect x="6" y="26" width="10" height="8" stroke="#D4AF36" strokeWidth="1.3" />
        <rect x="24" y="26" width="10" height="8" stroke="#D4AF36" strokeWidth="1.3" />
        <line x1="20" y1="14" x2="20" y2="20" stroke="#D4AF36" strokeWidth="1" opacity="0.6" />
        <line x1="20" y1="20" x2="11" y2="26" stroke="#D4AF36" strokeWidth="1" opacity="0.5" />
        <line x1="20" y1="20" x2="29" y2="26" stroke="#D4AF36" strokeWidth="1" opacity="0.5" />
        <circle cx="20" cy="20" r="2" fill="#8099FF" opacity="0.8" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Licensing & IP Commercialisation",
    description:
      "Licensing structures for technology, brand, and know-how — including cross-border frameworks compliant with UAE commercial law and the French Civil Code.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="18" r="9" stroke="#D4AF36" strokeWidth="1.5" />
        <path d="M16 18c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#D4AF36" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="20" y1="22" x2="20" y2="26" stroke="#D4AF36" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="17" y1="26" x2="23" y2="26" stroke="#D4AF36" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M10 32h20" stroke="#8099FF" strokeWidth="1.1" opacity="0.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Regulatory Compliance",
    description:
      "Navigating UAE free zone regulations, DIFC and ADGM frameworks, and French commercial law to keep businesses compliant and operationally sound across jurisdictions.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M20 5L7 10v10c0 9 5.5 14 13 17 7.5-3 13-8 13-17V10L20 5z" stroke="#D4AF36" strokeWidth="1.5" />
        <path d="M14 20l4 4 9-9" stroke="#D4AF36" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Foreign Investment Structuring",
    description:
      "Advisory on inbound and outbound investment — UAE foreign ownership rules, free zone structures, French golden share restrictions, and bilateral investment treaty considerations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="13" stroke="#D4AF36" strokeWidth="1.5" />
        <ellipse cx="20" cy="20" rx="6" ry="13" stroke="#D4AF36" strokeWidth="1" opacity="0.5" />
        <line x1="7" y1="20" x2="33" y2="20" stroke="#D4AF36" strokeWidth="1" opacity="0.5" />
        <line x1="9" y1="14" x2="31" y2="14" stroke="#D4AF36" strokeWidth="0.7" opacity="0.35" />
        <line x1="9" y1="26" x2="31" y2="26" stroke="#D4AF36" strokeWidth="0.7" opacity="0.35" />
        <circle cx="20" cy="20" r="2.5" fill="#8099FF" opacity="0.9" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We assess your corporate objectives, current structure, and the legal frameworks relevant to your jurisdiction — UAE, France, or cross-border.",
  },
  {
    num: "02",
    title: "Legal Strategy",
    desc: "We design a clear legal roadmap: transaction structure, entity type, regulatory pathway, and timeline — tailored to your commercial reality.",
  },
  {
    num: "03",
    title: "Drafting & Negotiation",
    desc: "We prepare, review, and negotiate all documentation with precision — ensuring each clause reflects your interests and withstands scrutiny.",
  },
  {
    num: "04",
    title: "Execution & Closing",
    desc: "We manage the transaction to conclusion — coordinating filings, regulatory sign-offs, and post-closing obligations on your behalf.",
  },
];

const differentiators = [
  {
    label: "Boutique model",
    body: "Direct partner access on every mandate. No junior teams handling your matter without oversight.",
  },
  {
    label: "Dual-qualified counsel",
    body: "Admitted to both the Paris Bar and the Dubai Legal Affairs Department — rare expertise for cross-border work.",
  },
  {
    label: "UAE · France · EU coverage",
    body: "Deep knowledge of GCC corporate law, French commercial law, and EU regulatory frameworks — all in one firm.",
  },
  {
    label: "Trilingual fluency",
    body: "English, French, and Arabic. We negotiate and draft in the language of your counterparty.",
  },
];

const CORPORATE_AREAS = [
  "Corporate Transactions",
  "Mergers & Acquisitions",
  "Joint Ventures & Partnerships",
  "Commercial Contracts",
  "Corporate Restructuring",
  "Licensing & IP Commercialisation",
  "Regulatory Compliance",
  "Foreign Investment Structuring",
  "Other",
];

/* ─── CONTACT MODAL ─────────────────────────────────────────────────────────── */

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", area: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[60] bg-[#000A4F]/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            data-testid="modal-backdrop"
          />
          <motion.div
            key="modal-wrap"
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              className="relative w-full max-w-[560px] bg-white pointer-events-auto overflow-hidden"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              data-testid="contact-modal"
            >
              <div className="bg-[#001489] px-8 py-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[#D4AF36] text-[9px] tracking-[0.35em] uppercase font-bold mb-1.5">
                      Corporate & Commercial
                    </p>
                    <h3 className="font-heading text-white text-xl font-bold tracking-tight">
                      Speak to a Partner
                    </h3>
                    <p className="text-white/40 text-xs mt-1 leading-snug">
                      Confidential consultation — Dubai & Paris offices
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    data-testid="modal-close"
                    className="text-white/40 hover:text-white transition-colors mt-0.5 flex-shrink-0"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                      <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="px-8 py-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-start gap-4 py-6"
                      data-testid="modal-success"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 bg-[#D4AF36]/15 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#D4AF36]" fill="none" viewBox="0 0 16 16">
                            <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <h4 className="font-heading text-[#001489] font-bold text-base">Message received</h4>
                      </div>
                      <p className="text-[#001489]/60 text-sm leading-relaxed">
                        Thank you for reaching out. A partner will be in touch within one business day.
                      </p>
                      <button
                        onClick={handleClose}
                        className="mt-2 text-[#001489] text-xs tracking-[0.15em] uppercase font-semibold hover:text-[#D4AF36] transition-colors"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      data-testid="modal-form"
                      className="flex flex-col gap-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          data-testid="modal-input-name"
                          className="col-span-2 sm:col-span-1 bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3 outline-none focus:border-[#D4AF36]/60 transition-colors"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          data-testid="modal-input-email"
                          className="col-span-2 sm:col-span-1 bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3 outline-none focus:border-[#D4AF36]/60 transition-colors"
                        />
                      </div>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company / Organisation"
                        data-testid="modal-input-company"
                        className="bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3 outline-none focus:border-[#D4AF36]/60 transition-colors"
                      />
                      <div className="relative">
                        <select
                          name="area"
                          required
                          value={form.area}
                          onChange={handleChange}
                          data-testid="modal-select-area"
                          className="w-full bg-[#001489]/[0.03] border border-[#001489]/15 text-sm px-4 py-3 outline-none focus:border-[#D4AF36]/60 transition-colors appearance-none cursor-pointer"
                          style={{ color: form.area ? "#001489" : "rgba(0,20,137,0.3)" }}
                        >
                          <option value="" disabled hidden>Area of Interest</option>
                          {CORPORATE_AREAS.map(a => (
                            <option key={a} value={a} style={{ color: "#001489", background: "#fff" }}>{a}</option>
                          ))}
                        </select>
                        <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#001489]/30" fill="none" viewBox="0 0 12 12">
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your matter"
                        data-testid="modal-input-message"
                        className="bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3 outline-none focus:border-[#D4AF36]/60 transition-colors resize-none"
                      />
                      <button
                        type="submit"
                        data-testid="modal-submit"
                        className="w-full bg-[#D4AF36] text-[#001489] text-xs tracking-[0.18em] uppercase font-bold py-4 hover:bg-[#C4A030] transition-colors flex items-center justify-center gap-2.5"
                      >
                        <span>Send Enquiry</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                          <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      </button>
                      <p className="text-[#001489]/30 text-[10px] text-center leading-relaxed">
                        All enquiries are treated in strict confidence.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────────────── */

export default function CorporateCommercialPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  return (
    <LanguageProvider>
      <div className="bg-[#001489] min-h-screen">
        <Header />

        <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section
          id="hero"
          data-testid="corporate-hero"
          data-header-theme="dark"
          className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden pt-20"
        >
          {/* Dot-grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />

          {/* Animated accent tiles */}
          {ACCENT_TILES.map((tile, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left:            tile.left,
                top:             tile.top,
                width:           TILE_SZ,
                height:          TILE_SZ,
                backgroundColor: tile.col,
              }}
              animate={{ opacity: [0, 0, 0.6, 0.6, 0, 0] }}
              transition={{
                duration:   tile.dur,
                delay:      tile.delay,
                repeat:     Infinity,
                ease:       "easeInOut",
                times:      [0, 0.15, 0.30, 0.70, 0.85, 1],
              }}
            />
          ))}

          {/* Bottom vignette */}
          <div
            className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(0,10,79,0.45))" }}
          />

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-20 w-full">
            <div className="max-w-[780px]">

              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 mb-10"
              >
                <a
                  href="/#expertise"
                  className="flex items-center gap-2 text-[#D4AF36] text-[10px] tracking-[0.3em] uppercase font-semibold hover:opacity-70 transition-opacity"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  Our Expertise
                </a>
                <span className="text-white/20">·</span>
                <span className="text-[#8099FF] text-[10px] tracking-[0.3em] uppercase font-semibold">Corporate & Commercial</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.85 }}
                className="font-heading text-white font-bold text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.04] tracking-tight mb-8"
              >
                Structure the deal.
                <br />
                <span className="text-[#D4AF36]">Govern the terms.</span>
                <br />
                Close with confidence.
              </motion.h1>

              {/* Gold rule */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "64px" }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="h-[2px] bg-[#D4AF36] mb-8"
              />

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="text-white/60 text-base leading-relaxed max-w-[520px] mb-10"
              >
                From company formation and M&A to commercial contracts and cross-border structuring — Milton Hobbs delivers precise, partner-led corporate counsel across the UAE, France, and the wider Gulf.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15 }}
                className="flex flex-wrap gap-4 mb-16"
              >
                <button
                  onClick={openModal}
                  data-testid="corporate-cta-primary"
                  className="inline-flex items-center gap-3 bg-[#D4AF36] text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#C4A030] transition-colors"
                >
                  <span>Book a Consultation</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
                <a
                  href="#services"
                  data-testid="corporate-cta-secondary"
                  className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors"
                >
                  View Services
                </a>
              </motion.div>

              {/* Stat strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-[480px]"
              >
                {[
                  { stat: "Dubai + Paris", label: "Dual office presence" },
                  { stat: "EN · FR · AR",  label: "Trilingual counsel" },
                  { stat: "Direct access", label: "Partner-led mandates" },
                ].map(s => (
                  <div key={s.label}>
                    <p className="font-heading text-white font-bold text-base leading-tight mb-1">{s.stat}</p>
                    <p className="text-white/40 text-[10px] tracking-wider uppercase">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Scroll hint */}
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

        {/* ── PRACTICE OVERVIEW ───────────────────────────────────────────── */}
        <section
          id="overview"
          data-testid="corporate-overview"
          data-header-theme="light"
          className="bg-white px-8 py-24"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">

              {/* Left — text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <p className="text-[#D4AF36] text-[11px] tracking-[0.35em] uppercase font-bold mb-5">Practice Overview</p>
                <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-tight leading-tight mb-8">
                  The full spectrum of<br />corporate counsel.
                </h2>
                <div className="h-[2px] w-16 bg-[#D4AF36] mb-8" />
                <p className="text-[#001489]/65 text-base leading-[1.85] max-w-[58ch] mb-6">
                  Milton Hobbs' Corporate & Commercial practice is the core of the firm's transactional work. With dual qualification across the Paris Bar and the Dubai Legal Affairs Department, the team advises on the full spectrum of corporate matters — from company formation and governance to complex cross-border deals.
                </p>
                <p className="text-[#001489]/65 text-base leading-[1.85] max-w-[58ch] mb-10">
                  The firm's boutique model ensures direct partner access on every mandate, with rigorous attention to commercial reality and legal precision. Clients include regional SMEs, multinationals expanding into the GCC, startups raising capital, and investors structuring Gulf-to-Europe transactions.
                </p>

                {/* Callout chips */}
                <div className="flex flex-wrap gap-3">
                  {["Dual-qualified counsel", "UAE · France · EU", "Direct partner access"].map(chip => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-2 border border-[#001489]/15 text-[#001489] text-[11px] tracking-[0.18em] uppercase font-semibold px-4 py-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#D4AF36] flex-shrink-0" />
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Right — geometric composition */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className="relative hidden lg:flex flex-col gap-4"
                style={{ minHeight: 360 }}
              >
                {/* Large navy card */}
                <div
                  className="w-full flex flex-col items-start justify-end p-10"
                  style={{ background: "#001489", minHeight: 220 }}
                >
                  <p className="font-heading text-white font-bold text-[clamp(1.4rem,2.2vw,1.9rem)] leading-tight mb-2">
                    Cross-border<br />corporate law.
                  </p>
                  <div className="h-px w-10 bg-[#D4AF36] mt-4" />
                </div>
                {/* Two small info blocks */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-[#001489]/12 p-6">
                    <p className="font-heading text-[#001489] font-bold text-xl">Dubai</p>
                    <p className="text-[#001489]/40 text-[10px] tracking-wider uppercase mt-1.5">Primary Office</p>
                  </div>
                  <div className="border border-[#001489]/12 p-6">
                    <p className="font-heading text-[#001489] font-bold text-xl">Paris</p>
                    <p className="text-[#001489]/40 text-[10px] tracking-wider uppercase mt-1.5">European Office</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ────────────────────────────────────────────────────── */}
        <section
          id="services"
          data-testid="corporate-services"
          data-header-theme="light"
          className="bg-[#FAFBFF] px-8 py-24"
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
                  Our services.
                </h2>
                <p className="text-[#001489]/45 text-sm max-w-xs leading-relaxed">
                  Comprehensive corporate and commercial legal advisory across all transaction types and jurisdictions.
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E9F5]">
              {services.map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  data-testid={`service-card-${i}`}
                  onClick={openModal}
                  className="group bg-white p-8 flex flex-col cursor-pointer hover:bg-[#F5F7FF] transition-colors duration-300"
                >
                  <div className="w-10 h-10 mb-6">{svc.icon}</div>
                  <p className="text-[#D4AF36] text-[9px] tracking-[0.28em] uppercase font-bold mb-3">{svc.num}</p>
                  <h3 className="font-heading text-[#001489] font-bold text-lg leading-snug mb-4">{svc.title}</h3>
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

        {/* ── PROCESS ─────────────────────────────────────────────────────── */}
        <section
          data-testid="corporate-process"
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
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h2 className="font-heading text-white font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight">
                  From mandate to close.
                </h2>
                <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                  A clear, structured process — so you always know where your matter stands.
                </p>
              </div>
            </motion.div>

            <div className="relative">
              <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-[#D4AF36]/20" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, i) => (
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

        {/* ── WHY MILTON HOBBS ─────────────────────────────────────────────── */}
        <section
          data-testid="corporate-differentiators"
          data-header-theme="light"
          className="bg-white px-8 py-24"
        >
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <p className="text-[#D4AF36] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">Why Milton Hobbs</p>
              <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">
                What sets us apart.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E9F5]">
              {differentiators.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  data-testid={`differentiator-${i}`}
                  className="bg-white p-8 flex flex-col"
                >
                  <div className="w-8 h-8 border border-[#D4AF36]/40 flex items-center justify-center mb-6 flex-shrink-0">
                    <span className="font-heading text-[#D4AF36] font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-[#001489] font-bold text-base leading-snug mb-4">{d.label}</h3>
                  <div className="h-px w-8 bg-[#D4AF36]/50 mb-4" />
                  <p className="text-[#001489]/55 text-sm leading-relaxed">{d.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
        <section
          data-testid="corporate-cta-banner"
          className="bg-[#000A4F] px-8 py-20"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <p className="text-[#D4AF36] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">Ready to proceed?</p>
                <h2 className="font-heading text-white font-bold text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight leading-tight mb-3">
                  Ready to structure your<br className="hidden sm:block" /> next transaction?
                </h2>
                <p className="text-white/45 text-sm leading-relaxed max-w-[44ch]">
                  Speak directly with a partner. No intermediaries, no delays — just clear, commercially astute counsel from day one.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
              >
                <button
                  onClick={openModal}
                  data-testid="banner-cta"
                  className="inline-flex items-center gap-3 bg-[#D4AF36] text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#C4A030] transition-colors"
                >
                  <span>Book a Consultation</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
                <a
                  href="mailto:contact@miltonhobbs.com"
                  data-testid="banner-email"
                  className="inline-flex items-center gap-3 border border-white/20 text-white/70 text-xs font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:border-white/40 hover:text-white transition-colors"
                >
                  contact@miltonhobbs.com
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
