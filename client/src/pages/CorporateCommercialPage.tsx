import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import imgCorporate from "@assets/optimized/sean-pollock-PhYq704ffdA-unsplash_1776241615811.jpg";

const PRACTICE_AREAS = [
  "Corporate & Commercial",
  "Real Estate & Property",
  "Litigation & Dispute Resolution",
  "Arbitration & Mediation",
  "Employment & Labour",
  "Banking & Finance",
  "Tax",
  "Immigration",
  "Intellectual Property",
  "Technology & Startups",
  "Other",
];

/* ─── TRANSLATIONS ──────────────────────────────────────────────────────────── */

const PAGE_TEXT = {
  EN: {
    breadcrumb: "Our Expertise",
    heroEyebrow: "Corporate & Commercial Law",
    heroH1Line1: "Structure the deal.",
    heroH1Line2: "Close with precision.",
    heroSub: "From company formation and M&A to commercial contracts and cross-border structuring — Milton Hobbs delivers precise, partner-led corporate counsel across the UAE, France, and the wider Gulf.",
    heroCta: "Book a Consultation",
    heroSecondary: "View Services",
    stat1Val: "Dubai + Paris",  stat1Label: "Dual office presence",
    stat2Val: "EN · FR",  stat2Label: "Bilingual counsel",
    stat3Val: "Partner-led",   stat3Label: "Every mandate",
    scroll: "Scroll",
    overviewEyebrow: "Practice Overview",
    overviewH2: "The full spectrum of corporate counsel.",
    overviewP1: "Milton Hobbs' Corporate & Commercial practice forms the core of the firm's transactional work. With dual qualification across the Paris Bar and the Dubai Legal Affairs Department, the team advises on the full spectrum of corporate matters — from company formation and governance to complex cross-border deals.",
    overviewP2: "The firm's boutique model ensures direct partner access on every mandate, with rigorous attention to commercial reality and legal precision. Clients include regional SMEs, multinationals expanding into the GCC, startups raising capital, and investors structuring Gulf-to-Europe transactions.",
    chips: ["Dual-qualified counsel", "UAE · France · EU", "Direct partner access"],
    overviewCardH: "Cross-border corporate law.",
    overviewDubai: "Dubai", overviewDubaiSub: "Primary Office",
    overviewParis: "Paris", overviewParisSub: "European Office",
    servicesEyebrow: "What We Do",
    servicesH2: "Our services.",
    servicesSub: "Comprehensive corporate and commercial legal advisory across all transaction types and jurisdictions.",
    hoverCta: "Enquire",
    whyEyebrow: "Why Milton Hobbs",
    whyH2: "What sets us apart.",
    bannerEyebrow: "Ready to proceed?",
    bannerH2: "Ready to structure your next transaction?",
    bannerSub: "Speak directly with a partner. No intermediaries, no delays — just clear, commercially astute counsel from day one.",
    bannerCta: "Book a Consultation",
  },
  FR: {
    breadcrumb: "Notre Expertise",
    heroEyebrow: "Droit des Sociétés et Commercial",
    heroH1Line1: "Structurer l'opération.",
    heroH1Line2: "Conclure avec précision.",
    heroSub: "De la constitution de sociétés et des F&A aux contrats commerciaux et à la structuration transfrontalière — Milton Hobbs délivre un conseil corporate précis et piloté par les associés aux EAU, en France et dans le Golfe.",
    heroCta: "Prendre Rendez-vous",
    heroSecondary: "Nos Services",
    stat1Val: "Dubaï + Paris",  stat1Label: "Double présence",
    stat2Val: "EN · FR",  stat2Label: "Conseil bilingue",
    stat3Val: "Associés directs", stat3Label: "Chaque mandat",
    scroll: "Défiler",
    overviewEyebrow: "Présentation du Département",
    overviewH2: "Tout le spectre du conseil corporate.",
    overviewP1: "Le département Droit des Sociétés et Commercial de Milton Hobbs constitue le cœur de l'activité transactionnelle du cabinet. Doublement qualifiés au Barreau de Paris et auprès du Département des Affaires Juridiques de Dubaï, nos avocats conseillent sur l'intégralité des questions corporate — de la constitution de sociétés et la gouvernance aux opérations transfrontalières complexes.",
    overviewP2: "Le modèle boutique garantit un accès direct aux associés sur chaque mandat, avec une attention rigoureuse à la réalité commerciale et à la précision juridique. Notre clientèle comprend des PME régionales, des multinationales s'implantant dans le CCG, des startups en levée de fonds et des investisseurs structurant des opérations Golfe–Europe.",
    chips: ["Conseil doublement qualifié", "EAU · France · UE", "Accès direct aux associés"],
    overviewCardH: "Droit des sociétés transfrontalier.",
    overviewDubai: "Dubaï", overviewDubaiSub: "Bureau Principal",
    overviewParis: "Paris", overviewParisSub: "Bureau Européen",
    servicesEyebrow: "Ce Que Nous Faisons",
    servicesH2: "Nos services.",
    servicesSub: "Conseil juridique corporate et commercial complet sur tous types de transactions et dans toutes les juridictions.",
    hoverCta: "Nous Contacter",
    whyEyebrow: "Pourquoi Milton Hobbs",
    whyH2: "Ce qui nous distingue.",
    bannerEyebrow: "Prêt à avancer ?",
    bannerH2: "Prêt à structurer votre prochaine transaction ?",
    bannerSub: "Parlez directement avec un associé. Sans intermédiaires, sans délais — un conseil clair et commercialement avisé dès le premier jour.",
    bannerCta: "Prendre Rendez-vous",
  },
};

/* ─── WINDOW CELL (animated building window) ───────────────────────────────── */

const LIT_WINDOWS = new Set([1, 4, 6, 9, 11, 14, 17, 19, 22, 24, 26, 29, 32, 35, 37, 40, 43, 46, 48]);

function WindowCell({ index }: { index: number }) {
  const isLit = LIT_WINDOWS.has(index);
  const delay = (index * 0.37) % 7;
  return (
    <motion.div
      animate={isLit
        ? { opacity: [0.15, 0.9, 0.45, 0.9, 0.15], boxShadow: ["0 0 0px transparent", "0 0 8px rgba(128,153,255,0.8)", "0 0 4px rgba(128,153,255,0.4)", "0 0 8px rgba(128,153,255,0.8)", "0 0 0px transparent"] }
        : { opacity: [0.06, 0.18, 0.06] }}
      transition={{ duration: isLit ? 6 : 10, repeat: Infinity, delay, ease: "easeInOut" }}
      style={{ height: 9, background: isLit ? "#8099FF" : "rgba(128,153,255,0.55)" }}
    />
  );
}

/* ─── 3D CORPORATE TOWER ────────────────────────────────────────────────────── */

function Corporate3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1400px" }}>

      {/* Atmosphere glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 70% at 52% 48%, rgba(255,255,255,0.07) 0%, transparent 65%)" }}
      />

      {/* ── SVG connecting lines (deal network) ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
        <line x1="72%" y1="14%" x2="54%" y2="34%" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" strokeDasharray="4 6">
          <animate attributeName="stroke-dashoffset" values="0;20" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="26%" y1="86%" x2="46%" y2="66%" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" strokeDasharray="4 6">
          <animate attributeName="stroke-dashoffset" values="0;20" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="12%" y1="36%" x2="35%" y2="50%" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="3 7">
          <animate attributeName="stroke-dashoffset" values="0;14" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="88%" y1="54%" x2="62%" y2="50%" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="3 7">
          <animate attributeName="stroke-dashoffset" values="0;14" dur="4s" repeatCount="indefinite" />
        </line>
        {/* Cross-deal line */}
        <line x1="30%" y1="20%" x2="70%" y2="78%" stroke="rgba(128,153,255,0.25)" strokeWidth="0.5" strokeDasharray="5 10">
          <animate attributeName="stroke-dashoffset" values="0;30" dur="6s" repeatCount="indefinite" />
        </line>
      </svg>

      {/* ── OUTER ORBITAL RING (regulatory framework) ── */}
      <motion.div
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{ width: 500, height: 150, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.16)", transform: "rotateX(72deg)", transformStyle: "preserve-3d", top: "50%", left: "50%", marginTop: -75, marginLeft: -250 }}
      >
        <div style={{ position: "absolute", width: 10, height: 10, borderRadius: "50%", background: "white", top: -5, left: "50%", marginLeft: -5, boxShadow: "0 0 14px 5px rgba(255,255,255,0.7)" }} />
      </motion.div>

      {/* ── MIDDLE ORBITAL RING (transaction cycle) ── */}
      <motion.div
        animate={{ rotateZ: [360, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{ width: 380, height: 105, borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.12)", transform: "rotateX(68deg)", transformStyle: "preserve-3d", top: "50%", left: "50%", marginTop: -52, marginLeft: -190 }}
      >
        <div style={{ position: "absolute", width: 7, height: 7, borderRadius: "50%", background: "#8099FF", top: -3.5, left: "50%", marginLeft: -3.5, boxShadow: "0 0 10px 3px rgba(128,153,255,0.8)" }} />
      </motion.div>

      {/* ── MAIN STRUCTURE: The Corporate Entity (octagonal layered prism) ── */}
      <motion.div
        animate={{ rotateY: [-18, -6, -18], rotateX: [4, 1, 4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", position: "relative", width: 200, height: 300, zIndex: 10 }}
      >
        {/* Front face — corporate entity body */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(165deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.11) 50%, rgba(255,255,255,0.05) 100%)",
          backgroundColor: "#0A32C8",
          boxShadow: "0 24px 80px rgba(0,0,0,0.45), 20px 0 48px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.30), inset 1px 0 0 rgba(255,255,255,0.14)",
          border: "1px solid rgba(255,255,255,0.32)",
        }}>
          {/* Corporate seal frame */}
          <div style={{ position: "absolute", inset: 10, border: "1px solid rgba(255,255,255,0.20)", pointerEvents: "none" }} />

          {/* Top tier — Corporate identity bar */}
          <div style={{ position: "absolute", top: 16, left: 18, right: 18, height: 48, borderBottom: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, border: "1.5px solid rgba(255,255,255,0.8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "rgba(255,255,255,0.95)", fontSize: 10, fontWeight: 800, letterSpacing: "0.15em", fontFamily: "'Satoshi', sans-serif" }}>MH</span>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.95)", fontSize: 8, fontWeight: 700, letterSpacing: "0.42em", textTransform: "uppercase" }}>MILTON HOBBS</p>
              <p style={{ color: "rgba(255,255,255,0.50)", fontSize: 6, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase", marginTop: 2 }}>Corporate & Commercial</p>
            </div>
          </div>

          {/* Middle tier — Deal phases grid (4 phases) */}
          <div style={{ position: "absolute", top: 78, left: 18, right: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 8px" }}>
            {[
              { label: "STRUCTURE", icon: "S" },
              { label: "DILIGENCE", icon: "D" },
              { label: "NEGOTIATE", icon: "N" },
              { label: "EXECUTE", icon: "E" },
            ].map((phase, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.75, ease: "easeInOut" }}
                style={{ border: "1px solid rgba(255,255,255,0.15)", padding: "8px 6px", display: "flex", alignItems: "center", gap: 5 }}
              >
                <span style={{ color: "rgba(128,153,255,0.9)", fontSize: 9, fontWeight: 800, width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(128,153,255,0.5)" }}>{phase.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 6, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>{phase.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Lower tier — Jurisdiction markers */}
          <div style={{ position: "absolute", bottom: 44, left: 18, right: 18, display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 8 }}>
            {[
              { city: "DUBAI", sub: "UAE" },
              { city: "PARIS", sub: "FR" },
            ].map((loc, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 4, height: 4, background: "rgba(128,153,255,0.9)" }} />
                <div>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 7, fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase" }}>{loc.city}</p>
                  <p style={{ color: "rgba(255,255,255,0.40)", fontSize: 5, letterSpacing: "0.18em", textTransform: "uppercase" }}>{loc.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom nameplate — firm tagline */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 14px", borderTop: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 6, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase" }}>Partner-Led Counsel</p>
            <div style={{ width: 16, height: 1, background: "rgba(128,153,255,0.5)" }} />
          </div>
        </div>

        {/* Right side face */}
        <div style={{
          position: "absolute", top: 0, left: "100%", width: 56, height: 300,
          background: "linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.35))",
          backgroundColor: "#00072A",
          transform: "rotateY(90deg)", transformOrigin: "left center",
          border: "1px solid rgba(255,255,255,0.06)",
        }} />

        {/* Top face */}
        <div style={{
          position: "absolute", top: -32, left: 0, width: 200, height: 32,
          background: "linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
          backgroundColor: "#0A32C8",
          transform: "rotateX(90deg)", transformOrigin: "bottom center",
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid rgba(255,255,255,0.22)",
        }}>
          <span style={{ color: "rgba(255,255,255,0.90)", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", fontFamily: "'Satoshi', sans-serif" }}>CORPORATE</span>
        </div>
      </motion.div>

      {/* ── FLOATING DEAL DOCUMENTS (orbiting cards) ── */}

      {/* M&A — large document top-left */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        style={{ position: "absolute", top: "6%", left: "2%", zIndex: 20 }}
      >
        <div style={{ width: 100, height: 62, border: "1.5px solid rgba(255,255,255,0.90)", background: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.20)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 12px", gap: 3 }}>
          <p style={{ color: "#001489", fontSize: 9, fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase" }}>M&A</p>
          <div style={{ width: 40, height: 1, background: "#001489", opacity: 0.20 }} />
          <p style={{ color: "#001489", fontSize: 6, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.45 }}>Transaction</p>
        </div>
      </motion.div>

      {/* JV — document bottom-right */}
      <motion.div
        animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        style={{ position: "absolute", bottom: "8%", right: "2%", zIndex: 20 }}
      >
        <div style={{ width: 90, height: 56, border: "1.5px solid rgba(255,255,255,0.90)", background: "white", boxShadow: "0 6px 24px rgba(0,0,0,0.18)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 10px", gap: 3 }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase" }}>JV</p>
          <div style={{ width: 30, height: 1, background: "#001489", opacity: 0.18 }} />
          <p style={{ color: "#001489", fontSize: 6, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.40 }}>Partnership</p>
        </div>
      </motion.div>

      {/* GOVERNANCE — chip right-mid */}
      <motion.div
        animate={{ opacity: [0.75, 1, 0.75], x: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        style={{ position: "absolute", top: "38%", right: "1%", transform: "rotate(8deg)", zIndex: 20 }}
      >
        <div style={{ padding: "8px 14px", border: "1.5px solid rgba(255,255,255,0.88)", background: "white", boxShadow: "0 3px 16px rgba(0,0,0,0.15)" }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>Governance</p>
        </div>
      </motion.div>

      {/* COMMERCIAL — chip left-mid */}
      <motion.div
        animate={{ opacity: [0.80, 1, 0.80], x: [3, -3, 3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        style={{ position: "absolute", top: "52%", left: "1%", transform: "rotate(-6deg)", zIndex: 20 }}
      >
        <div style={{ padding: "7px 12px", border: "1.5px solid rgba(255,255,255,0.88)", background: "white", boxShadow: "0 3px 16px rgba(0,0,0,0.15)" }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Commercial</p>
        </div>
      </motion.div>

      {/* CONTRACT — floating seal bottom-left */}
      <motion.div
        animate={{ y: [-5, 5, -5], scale: [0.95, 1.02, 0.95] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        style={{ position: "absolute", bottom: "18%", left: "4%", zIndex: 20 }}
      >
        <div style={{ width: 56, height: 56, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.85)", background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "#001489", fontSize: 7, fontWeight: 800, letterSpacing: "0.20em", textTransform: "uppercase" }}>Deal</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── SERVICE DATA ──────────────────────────────────────────────────────────── */

const SERVICES_EN = [
  {
    num: "01",
    title: "Corporate Transactions",
    description: "Formation, restructuring, and governance of companies across UAE and French jurisdictions. Advising on shareholder agreements, board structures, and regulatory filings.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="6" y="10" width="28" height="22" stroke="#8099FF" strokeWidth="1.5" />
        <rect x="12" y="6" width="16" height="6" stroke="#8099FF" strokeWidth="1.2" />
        <line x1="12" y1="19" x2="28" y2="19" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="12" y1="24" x2="22" y2="24" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <circle cx="30" cy="29" r="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.1" />
        <path d="M28.5 29l1.2 1.2 2-2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Mergers & Acquisitions",
    description: "End-to-end M&A advisory: due diligence, SPA drafting, regulatory clearance, and post-merger integration across the GCC and Europe.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="13" cy="20" r="8" stroke="#8099FF" strokeWidth="1.5" />
        <circle cx="27" cy="20" r="8" stroke="#8099FF" strokeWidth="1.5" />
        <path d="M20 13v14" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="20" y1="20" x2="26" y2="20" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M23 17l3 3-3 3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Joint Ventures & Partnerships",
    description: "Structuring JV agreements, equity arrangements, and profit-sharing frameworks for cross-border collaborations between Gulf and European counterparts.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="14" cy="16" r="5" stroke="#8099FF" strokeWidth="1.4" />
        <circle cx="26" cy="16" r="5" stroke="#8099FF" strokeWidth="1.4" />
        <path d="M8 32c0-5 2.7-8 6-8h12c3.3 0 6 3 6 8" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="20" y1="21" x2="20" y2="32" stroke="rgba(255,255,255,0.4)" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Commercial Contracts",
    description: "Drafting, reviewing, and negotiating commercial agreements — supply contracts, distribution arrangements, agency agreements, and framework contracts.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="8" y="6" width="24" height="30" stroke="#8099FF" strokeWidth="1.5" />
        <line x1="13" y1="14" x2="27" y2="14" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
        <line x1="13" y1="19" x2="27" y2="19" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
        <line x1="13" y1="24" x2="22" y2="24" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <path d="M22 28l2 2 4-4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Corporate Restructuring",
    description: "Legal support for business reorganisations, holding company structures, spin-offs, and operational restructurings designed to improve efficiency and protect assets.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="14" y="6" width="12" height="8" stroke="#8099FF" strokeWidth="1.4" />
        <rect x="6" y="26" width="10" height="8" stroke="#8099FF" strokeWidth="1.3" />
        <rect x="24" y="26" width="10" height="8" stroke="#8099FF" strokeWidth="1.3" />
        <line x1="20" y1="14" x2="20" y2="20" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <line x1="20" y1="20" x2="11" y2="26" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <line x1="20" y1="20" x2="29" y2="26" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <circle cx="20" cy="20" r="2.5" fill="rgba(255,255,255,0.6)" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Licensing & IP Commercialisation",
    description: "Licensing structures for technology, brand, and know-how, including cross-border licensing frameworks compliant with UAE and French law.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="18" r="9" stroke="#8099FF" strokeWidth="1.5" />
        <path d="M16 18c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="20" y1="22" x2="20" y2="26" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="17" y1="26" x2="23" y2="26" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M10 32h20" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Regulatory Compliance",
    description: "Navigating UAE free zone regulations, DIFC and ADGM frameworks, and French commercial law to keep businesses compliant across jurisdictions.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M20 5L7 10v10c0 9 5.5 14 13 17 7.5-3 13-8 13-17V10L20 5z" stroke="#8099FF" strokeWidth="1.5" />
        <path d="M14 20l4 4 9-9" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Foreign Investment Structuring",
    description: "Advisory on inbound and outbound investment, including UAE ownership rules, French golden share restrictions, and bilateral investment treaty considerations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="13" stroke="#8099FF" strokeWidth="1.5" />
        <ellipse cx="20" cy="20" rx="6" ry="13" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="7" y1="20" x2="33" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="9" y1="14" x2="31" y2="14" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" />
        <line x1="9" y1="26" x2="31" y2="26" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" />
        <circle cx="20" cy="20" r="2.5" fill="rgba(255,255,255,0.7)" />
      </svg>
    ),
  },
];

const SERVICES_FR = [
  { num: "01", title: "Transactions Corporate", description: "Constitution, restructuration et gouvernance de sociétés dans les juridictions des EAU et françaises. Conseil sur les pactes d'actionnaires, la structure des conseils et les dépôts réglementaires." },
  { num: "02", title: "Fusions & Acquisitions", description: "Conseil F&A de bout en bout : due diligence, rédaction de SPA, autorisation réglementaire et intégration post-fusion dans le CCG et en Europe." },
  { num: "03", title: "Joint-Ventures & Partenariats", description: "Structuration d'accords de JV, d'arrangements capitalistiques et de mécanismes de partage des bénéfices pour les collaborations transfrontalières entre partenaires du Golfe et européens." },
  { num: "04", title: "Contrats Commerciaux", description: "Rédaction, révision et négociation de contrats commerciaux — contrats d'approvisionnement, accords de distribution, contrats d'agence et contrats-cadres." },
  { num: "05", title: "Restructuration d'Entreprises", description: "Accompagnement juridique des réorganisations, structures de holding, scissions et restructurations opérationnelles visant à améliorer l'efficacité et protéger les actifs." },
  { num: "06", title: "Licences & Commercialisation de PI", description: "Structures de licence pour la technologie, la marque et le savoir-faire, y compris des cadres de licence transfrontaliers conformes au droit des EAU et français." },
  { num: "07", title: "Conformité Réglementaire", description: "Navigation des réglementations des zones franches des EAU, des cadres DIFC et ADGM, et du droit commercial français pour maintenir la conformité des entreprises." },
  { num: "08", title: "Structuration des Investissements Étrangers", description: "Conseil sur les investissements entrants et sortants, incluant les règles de propriété aux EAU, les restrictions de golden share français et les considérations issues des traités bilatéraux d'investissement." },
];

const DIFFERENTIATORS_EN = [
  { label: "Boutique model", body: "Direct partner access on every mandate. No junior teams handling your matter without oversight." },
  { label: "Dual-qualified counsel", body: "Admitted to both the Paris Bar and the Dubai Legal Affairs Department — rare expertise for cross-border work." },
  { label: "UAE · France · EU coverage", body: "Deep knowledge of GCC corporate law, French commercial law, and EU regulatory frameworks — all in one firm." },
  { label: "Trilingual fluency", body: "English, French, and Arabic. We negotiate and draft in the language of your counterparty." },
];

const DIFFERENTIATORS_FR = [
  { label: "Modèle boutique", body: "Accès direct aux associés sur chaque mandat. Aucune équipe junior ne traite votre dossier sans supervision." },
  { label: "Conseil doublement qualifié", body: "Admis au Barreau de Paris et auprès du Département des Affaires Juridiques de Dubaï — une expertise rare pour les dossiers transfrontaliers." },
  { label: "Couverture EAU · France · UE", body: "Connaissance approfondie du droit corporate du CCG, du droit commercial français et des cadres réglementaires européens — au sein d'un seul cabinet." },
  { label: "Fluidité trilingue", body: "Anglais, français et arabe. Nous négocions et rédigeons dans la langue de votre interlocuteur." },
];

/* ─── CONTACT MODAL ─────────────────────────────────────────────────────────── */

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", area: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 400);
  };

  const inputCls = "w-full bg-white border border-[#E5E9F0] text-[#001489] text-sm px-4 py-3 placeholder:text-[#8099FF] focus:outline-none focus:border-[#001489] transition-colors";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-[#000A4F]/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />

          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              className="relative w-full max-w-[560px] bg-white pointer-events-auto overflow-hidden"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-[#001489] px-8 py-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-white text-[16px] tracking-[0.3em] uppercase font-bold mb-1.5">Milton Hobbs</p>
                    <h3 className="font-heading text-white text-lg font-bold tracking-tight">Book a Consultation</h3>
                    <p className="text-white text-xs mt-1 leading-snug max-w-xs">Corporate & Commercial</p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-white hover:text-white transition-colors mt-0.5 flex-shrink-0"
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
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#001489] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 16 16">
                            <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <h4 className="font-heading text-[#001489] font-bold text-base">Request received</h4>
                      </div>
                      <p className="text-[#001489] text-sm leading-relaxed">
                        Thank you for reaching out. One of our partners will be in touch within one business day.
                      </p>
                      <button
                        onClick={handleClose}
                        className="mt-2 text-[#001489] text-xs tracking-[0.15em] uppercase font-semibold hover:text-[#0028B8] transition-colors"
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
                      className="flex flex-col gap-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Full Name" className={`${inputCls} col-span-2 sm:col-span-1`} />
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Email Address" className={`${inputCls} col-span-2 sm:col-span-1`} />
                      </div>

                      <div className="relative">
                        <select
                          name="area"
                          required
                          value={form.area}
                          onChange={handleChange}
                          className={`${inputCls} appearance-none cursor-pointer`}
                          style={{ color: form.area ? "#001489" : "#8099FF" }}
                        >
                          <option value="" disabled hidden>Practice Area</option>
                          {PRACTICE_AREAS.map(a => (
                            <option key={a} value={a} style={{ color: "#001489", background: "#fff" }}>{a}</option>
                          ))}
                        </select>
                        <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#001489]" fill="none" viewBox="0 0 12 12">
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>

                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your matter"
                        className={`${inputCls} resize-none`}
                      />

                      <button
                        type="submit"
                        className="w-full bg-[#001489] text-white text-xs tracking-[0.18em] uppercase font-bold py-4 hover:bg-[#0028B8] transition-colors flex items-center justify-center gap-2.5"
                      >
                        <span>Send Message</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                          <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      </button>

                      <p className="text-[#8099FF] text-[16px] text-center leading-relaxed">
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

/* ─── INNER PAGE ──────────────────────────────────────────────────────────────────────────────────────────── */

function CorporateCommercialInner() {
  const { lang } = useLang();
  const tx = PAGE_TEXT[lang];
  const [modalOpen, setModalOpen] = useState(false);

  const services = SERVICES_EN.map((s, i) => ({
    ...s,
    title: lang === "FR" ? SERVICES_FR[i].title : s.title,
    description: lang === "FR" ? SERVICES_FR[i].description : s.description,
  }));
  const differentiators = lang === "FR" ? DIFFERENTIATORS_FR : DIFFERENTIATORS_EN;

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  return (
    <div className="bg-[#001489] min-h-screen">
      <Header />
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        data-testid="corporate-hero"
        data-header-theme="dark"
        className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden pt-20"
      >
        <img
          src={imgCorporate}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ objectPosition: "center 30%", mixBlendMode: "multiply" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: "70%", background: "linear-gradient(to top, rgba(0,14,80,0.80) 0%, rgba(0,14,80,0.40) 45%, transparent 100%)" }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-20 w-full">
          <div className="grid items-center">

            {/* ── Left: Text ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 mb-8"
              >
                <a
                  href="/#expertise"
                  className="flex items-center gap-2 text-[#ffffff] text-[16px] tracking-[0.3em] uppercase font-semibold hover:opacity-80 transition-opacity"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  {tx.breadcrumb}
                </a>
                <span className="text-white/20">-</span>
                <span className="text-white text-[16px] tracking-[0.3em] uppercase font-medium">Corporate & Commercial</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-heading text-white font-bold text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.06] tracking-tight mb-8"
              >
                {tx.heroH1Line1}
                <br />
                <span className="text-white whitespace-nowrap">{tx.heroH1Line2}</span>
              </motion.h1>

              {/* Rule */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "64px" }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="h-[2px] bg-white mb-8"
              />

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-white text-base leading-relaxed max-w-[500px] mb-10"
              >
                {tx.heroSub}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap gap-4 mb-14"
              >
                <button
                  onClick={() => setModalOpen(true)}
                  data-testid="corporate-cta-primary"
                  className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer"
                >
                  <span>{tx.heroCta}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
                <a
                  href="#services"
                  data-testid="corporate-cta-secondary"
                  className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors"
                >
                  {tx.heroSecondary}
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-10 left-8 flex items-center gap-3 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="w-px h-10 bg-gradient-to-b from-white to-transparent"
              />
              <span className="text-white text-[16px] tracking-[0.25em] uppercase">Scroll</span>
            </motion.div>

      </section>
      {/* ── PRACTICE OVERVIEW ─────────────────────────────────────────────── */}
      <section
        id="overview"
        data-testid="corporate-overview"
        data-header-theme="light"
        className="bg-white px-8 py-24"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-[#001489] tracking-[0.35em] uppercase font-bold mb-5 text-[18px]">{tx.overviewEyebrow}</p>
              <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-tight leading-tight mb-8">{tx.overviewH2}</h2>
              <div className="h-[2px] w-16 bg-[#001489]/30 mb-8" />
              <p className="text-[#001489] text-base leading-[1.85] max-w-[58ch] mb-6">{tx.overviewP1}</p>
              <p className="text-[#001489] text-base leading-[1.85] max-w-[58ch] mb-10">{tx.overviewP2}</p>
              <div className="flex flex-wrap gap-3">
                {tx.chips.map(chip => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 border border-[#001489]/15 text-[#001489] text-[16px] tracking-[0.18em] uppercase font-semibold px-4 py-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#8099FF] flex-shrink-0" />
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="relative hidden lg:flex flex-col gap-4"
              style={{ minHeight: 360 }}
            >
              <div className="w-full flex flex-col items-start justify-end p-10" style={{ background: "#001489", minHeight: 220 }}>
                <p className="font-heading text-white font-bold text-[clamp(1.4rem,2.2vw,1.9rem)] leading-tight mb-2">{tx.overviewCardH}</p>
                <div className="h-px w-10 bg-[#8099FF]/60 mt-4" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[#001489]/12 p-6">
                  <p className="font-heading text-[#001489] font-bold text-xl">{tx.overviewDubai}</p>
                  <p className="text-[#001489] text-[16px] tracking-wider uppercase mt-1.5">{tx.overviewDubaiSub}</p>
                </div>
                <div className="border border-[#001489]/12 p-6">
                  <p className="font-heading text-[#001489] font-bold text-xl">{tx.overviewParis}</p>
                  <p className="text-[#001489] text-[16px] tracking-wider uppercase mt-1.5">{tx.overviewParisSub}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ── KEY SERVICES ─────────────────────────────────────────────────── */}
      <section
        id="services"
        data-testid="corporate-services"
        className="bg-white"
      >
        <div className="bg-[#001489] px-8 py-16">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="tracking-[0.35em] uppercase font-bold mb-4 text-[16px] text-[#ffffff]">{tx.servicesEyebrow}</p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h2 className="font-heading text-white font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">{tx.servicesH2}</h2>
                <p className="text-sm max-w-xs leading-relaxed text-[#ffffff]">{tx.servicesSub}</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="px-8 py-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E9F5]">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                data-testid={`service-card-${i}`}
                className="group bg-white p-8 flex flex-col hover:bg-[#001489] transition-colors duration-300"
              >
                <h3 className="font-heading text-[#001489] font-bold text-[1.05rem] leading-snug mb-4 group-hover:text-white transition-colors">{svc.title}</h3>
                <div className="h-px w-8 bg-[#001489]/20 mb-4 group-hover:bg-white/30 transition-colors" />
                <p className="text-sm leading-relaxed flex-1 text-[#001489] group-hover:text-white transition-colors">{svc.description}</p>
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => setModalOpen(true)} className="text-[#001489] text-[16px] tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0 group-hover:text-white">
                    {tx.hoverCta}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </section>
      <section className="bg-[#001489] px-8 py-5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <p className="text-white text-[16px] tracking-[0.35em] uppercase font-bold">Milton Hobbs</p>
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase hidden sm:block">Reason. Rigor. Resolution.</p>
        </div>
      </section>
      {/* ── WHY MILTON HOBBS ──────────────────────────────────────────────── */}
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
            <p className="text-[#001489] text-[16px] tracking-[0.35em] uppercase font-bold mb-4">{tx.whyEyebrow}</p>
            <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">{tx.whyH2}</h2>
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
                <h3 className="font-heading text-[#001489] font-bold text-base leading-snug mb-4">{d.label}</h3>
                <div className="h-px w-8 bg-[#8099FF]/45 mb-4" />
                <p className="text-[#001489] text-sm leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section
        data-testid="corporate-cta-banner"
        className="bg-[#001489] px-8 py-20"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-white text-[16px] tracking-[0.35em] uppercase font-bold mb-4">{tx.bannerEyebrow}</p>
              <h2 className="font-heading text-white font-bold text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight leading-tight mb-3">
                {tx.bannerH2}
              </h2>
              <p className="text-white text-sm leading-relaxed max-w-[44ch]">{tx.bannerSub}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
            >
              <button
                onClick={() => setModalOpen(true)}
                data-testid="banner-cta"
                className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer"
              >
                <span>{tx.bannerCta}</span>
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
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

/* ─── PAGE WRAPPER ──────────────────────────────────────────────────────────── */

export default function CorporateCommercialPage() {
  return (
    <LanguageProvider>
      <CorporateCommercialInner />
    </LanguageProvider>
  );
}
