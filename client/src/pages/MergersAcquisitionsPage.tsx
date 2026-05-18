import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactModal } from "@/components/ContactModal";
import imgMA from "@assets/optimized/marc-olivier-jodoin--HIiNFXcbtQ-unsplash_1776241615811.jpg";

/* ─── TRANSLATIONS ──────────────────────────────────────────────────────────── */

const PAGE_TEXT = {
  EN: {
    breadcrumb: "Our Expertise",
    heroEyebrow: "Mergers & Acquisitions Law",
    heroH1Line1: "Navigate the deal.",
    heroH1Line2: "Maximise the outcome.",
    heroSub: "From target identification and due diligence through to SPA negotiation, regulatory clearance, and post-merger integration — Milton Hobbs delivers precise, partner-led M&A counsel across the UAE, France, and the wider Gulf.",
    heroCta: "Book a Consultation",
    heroSecondary: "View Services",
    stat1Val: "Dubai + Paris",  stat1Label: "Dual office presence",
    stat2Val: "EN · FR",       stat2Label: "Bilingual counsel",
    stat3Val: "Partner-led",   stat3Label: "Every mandate",
    scroll: "Scroll",
    overviewEyebrow: "Practice Overview",
    overviewH2: "End-to-end M&A advisory, across borders.",
    overviewP1: "Milton Hobbs' Mergers & Acquisitions practice advises buyers, sellers, and investors across the full deal lifecycle. Dual-qualified across the Paris Bar and the Dubai Legal Affairs Department, the team handles cross-border transactions with precision — from preliminary structuring through to final completion and post-merger governance.",
    overviewP2: "Our boutique model ensures direct partner oversight at every stage. Clients include regional conglomerates, private equity sponsors, multinationals expanding into the GCC, and founder-led businesses navigating an exit. Every mandate receives senior attention from day one.",
    chips: ["Full deal lifecycle", "GCC · Europe · Cross-border", "Direct partner access"],
    overviewCardH: "Cross-border M&A, executed with precision.",
    overviewDubai: "Dubai",  overviewDubaiSub: "Primary Office",
    overviewParis: "Paris",  overviewParisSub: "European Office",
    servicesEyebrow: "What We Do",
    servicesH2: "Our services.",
    servicesSub: "Comprehensive M&A legal advisory from origination through to post-completion integration.",
    hoverCta: "Enquire",
    whyEyebrow: "Why Milton Hobbs",
    whyH2: "What sets us apart.",
    bannerEyebrow: "Ready to proceed?",
    bannerH2: "Ready to close your next transaction?",
    bannerSub: "Speak directly with a partner. No intermediaries, no delays — commercially astute M&A counsel from the very first call.",
    bannerCta: "Book a Consultation",
  },
  FR: {
    breadcrumb: "Notre Expertise",
    heroEyebrow: "Droit des Fusions & Acquisitions",
    heroH1Line1: "Piloter l'opération.",
    heroH1Line2: "Maximiser le résultat.",
    heroSub: "De l'identification de la cible et la due diligence jusqu'à la négociation du SPA, l'autorisation réglementaire et l'intégration post-fusion — Milton Hobbs délivre un conseil F&A précis et piloté par les associés aux EAU, en France et dans le Golfe.",
    heroCta: "Prendre Rendez-vous",
    heroSecondary: "Nos Services",
    stat1Val: "Dubaï + Paris",   stat1Label: "Double présence",
    stat2Val: "EN · FR",         stat2Label: "Conseil bilingue",
    stat3Val: "Associés directs", stat3Label: "Chaque mandat",
    scroll: "Défiler",
    overviewEyebrow: "Présentation du Département",
    overviewH2: "Conseil F&A de bout en bout, à l'international.",
    overviewP1: "Le département Fusions & Acquisitions de Milton Hobbs conseille les acheteurs, vendeurs et investisseurs tout au long du cycle de vie de l'opération. Doublement qualifiés au Barreau de Paris et auprès du Département des Affaires Juridiques de Dubaï, nos avocats traitent les transactions transfrontalières avec précision — de la structuration préliminaire jusqu'au closing et à la gouvernance post-fusion.",
    overviewP2: "Notre modèle boutique garantit une supervision directe des associés à chaque étape. Notre clientèle comprend des conglomérats régionaux, des sponsors de capital-investissement, des multinationales s'implantant dans le CCG et des dirigeants fondateurs préparant une cession. Chaque mandat bénéficie d'une attention sénior dès le premier jour.",
    chips: ["Cycle de vie complet", "CCG · Europe · Transfrontalier", "Accès direct aux associés"],
    overviewCardH: "F&A transfrontalières, exécutées avec précision.",
    overviewDubai: "Dubaï",  overviewDubaiSub: "Bureau Principal",
    overviewParis: "Paris",  overviewParisSub: "Bureau Européen",
    servicesEyebrow: "Ce Que Nous Faisons",
    servicesH2: "Nos services.",
    servicesSub: "Conseil juridique F&A complet, de l'origination jusqu'à l'intégration post-closing.",
    hoverCta: "Nous Contacter",
    whyEyebrow: "Pourquoi Milton Hobbs",
    whyH2: "Ce qui nous distingue.",
    bannerEyebrow: "Prêt à avancer ?",
    bannerH2: "Prêt à finaliser votre prochaine transaction ?",
    bannerSub: "Parlez directement avec un associé. Sans intermédiaires, sans délais — un conseil F&A commercialement avisé dès le premier appel.",
    bannerCta: "Prendre Rendez-vous",
  },
};

/* ─── M&A DEAL-CONVERGENCE ILLUSTRATION ────────────────────────────────────── */

/* Animated dot that travels along the SVG path — native SMIL, no motion.circle */
function FlowDot({ delay, dur = 3.6 }: { delay: number; dur?: number }) {
  return (
    <circle r="3.5" fill="#8099FF">
      <animateMotion
        dur={`${dur}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        path="M 0 0 C 80 -70, 220 -70, 300 0"
      />
      <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.08;0.85;1"
        dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  );
}

function FlowDotReverse({ delay, dur = 3.6 }: { delay: number; dur?: number }) {
  return (
    <circle r="3.5" fill="#8099FF">
      <animateMotion
        dur={`${dur}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        path="M 300 0 C 220 70, 80 70, 0 0"
      />
      <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.08;0.85;1"
        dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  );
}

function MADealScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">

      {/* ── Soft glow backdrop ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 65% 55% at 50% 46%, rgba(128,153,255,0.09) 0%, transparent 70%)",
      }} />

      {/* ── ENTITY BLOCKS (BUYER left, TARGET right) ── */}

      {/* BUYER */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", left: "3%", top: "22%", zIndex: 20, width: 148 }}
      >
        <div style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 100%)",
          backgroundColor: "#0A32C8",
          border: "1px solid rgba(255,255,255,0.28)",
          boxShadow: "0 16px 56px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.22)",
          padding: "20px 18px 16px",
        }}>
          {/* Mini bar chart representing buyer metrics */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 36, marginBottom: 14 }}>
            {[0.5, 0.7, 0.45, 0.9, 0.65, 0.8].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${h * 36}px`, `${(h * 0.85) * 36}px`, `${h * 36}px`] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                style={{ flex: 1, background: i === 3 ? "#8099FF" : "rgba(255,255,255,0.28)" }}
              />
            ))}
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 10 }} />
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 7, fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 4 }}>Acquirer</p>
          <p style={{ color: "rgba(255,255,255,0.95)", fontSize: 10, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" }}>BUYER</p>
        </div>
        {/* Connector dot at right edge */}
        <div style={{ position: "absolute", right: -6, top: "50%", marginTop: -6, width: 12, height: 12, borderRadius: "50%", background: "#8099FF", border: "2px solid rgba(255,255,255,0.5)", boxShadow: "0 0 10px 3px rgba(128,153,255,0.7)" }} />
      </motion.div>

      {/* TARGET */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        style={{ position: "absolute", right: "3%", top: "22%", zIndex: 20, width: 148 }}
      >
        <div style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
          backgroundColor: "#000A4F",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 16px 56px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.14)",
          padding: "20px 18px 16px",
        }}>
          {/* Mini pie / ring representing target valuation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 36, marginBottom: 14 }}>
            <svg viewBox="0 0 40 40" style={{ width: 36, height: 36 }}>
              <circle cx="20" cy="20" r="14" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="6" />
              <motion.circle
                cx="20" cy="20" r="14" fill="none" stroke="#8099FF" strokeWidth="6"
                strokeDasharray="52 36"
                strokeLinecap="butt"
                style={{ transformOrigin: "20px 20px", rotate: "-90deg" }}
                animate={{ strokeDasharray: ["52 36", "64 24", "52 36"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle cx="20" cy="20" r="7" fill="rgba(255,255,255,0.06)" />
            </svg>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.10)", marginBottom: 10 }} />
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 7, fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 4 }}>Acquisition</p>
          <p style={{ color: "rgba(255,255,255,0.90)", fontSize: 10, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" }}>TARGET</p>
        </div>
        {/* Connector dot at left edge */}
        <div style={{ position: "absolute", left: -6, top: "50%", marginTop: -6, width: 12, height: 12, borderRadius: "50%", background: "#8099FF", border: "2px solid rgba(255,255,255,0.5)", boxShadow: "0 0 10px 3px rgba(128,153,255,0.7)" }} />
      </motion.div>

      {/* ── ANIMATED FLOW ARCS (SVG) ── */}
      <svg
        className="absolute"
        style={{ width: "78%", left: "11%", top: "18%", height: 160, overflow: "visible", zIndex: 10 }}
        viewBox="0 0 300 100"
        fill="none"
      >
        {/* Upper arc */}
        <path d="M 0 50 C 80 -30, 220 -30, 300 50" stroke="rgba(128,153,255,0.22)" strokeWidth="1" />
        {/* Lower arc */}
        <path d="M 0 50 C 80 130, 220 130, 300 50" stroke="rgba(128,153,255,0.15)" strokeWidth="1" />
        {/* Centre straight */}
        <path d="M 0 50 L 300 50" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" strokeDasharray="4 8" />

        {/* Flow dots — upper arc left→right */}
        <FlowDot delay={0}    dur={3.2} />
        <FlowDot delay={1.1}  dur={3.2} />
        <FlowDot delay={2.2}  dur={3.2} />
        {/* Flow dots — lower arc right→left */}
        <FlowDotReverse delay={0.6}  dur={3.8} />
        <FlowDotReverse delay={1.9}  dur={3.8} />

        {/* Centre convergence node — SMIL only, no motion.circle */}
        <circle cx="150" cy="50" fill="#001489" stroke="#8099FF" strokeWidth="1.5">
          <animate attributeName="r" values="7;9;7" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="50" fill="none" stroke="rgba(128,153,255,0.35)" strokeWidth="0.8">
          <animate attributeName="r" values="14;22;14" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2.8s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* ── DEAL STAGE TIMELINE (horizontal strip, lower section) ── */}
      <div style={{ position: "absolute", bottom: "10%", left: "5%", right: "5%", zIndex: 20 }}>
        {/* Connector line */}
        <div style={{ position: "relative", height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 16 }}>
          <motion.div
            style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "linear-gradient(to right, transparent, #8099FF, transparent)" }}
            animate={{ left: ["-30%", "110%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[30%]"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {[
            { stage: "01", label: "Origination" },
            { stage: "02", label: "Due Diligence" },
            { stage: "03", label: "SPA Signed" },
            { stage: "04", label: "Closing" },
          ].map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}
            >
              <motion.div
                style={{ width: 6, height: 6, background: "#8099FF", borderRadius: "50%", marginBottom: 6 }}
                animate={{ boxShadow: ["0 0 0px rgba(128,153,255,0)", "0 0 8px rgba(128,153,255,0.9)", "0 0 0px rgba(128,153,255,0)"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
              />
              <p style={{ color: "rgba(128,153,255,0.55)", fontSize: 7, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>{s.stage}</p>
              <p style={{ color: "rgba(255,255,255,0.50)", fontSize: 8, fontWeight: 600, letterSpacing: "0.12em", whiteSpace: "nowrap" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── FLOATING DEAL-TERM CHIPS ── */}

      {/* DUE DILIGENCE — upper-left float */}
      <motion.div
        animate={{ opacity: [0.80, 1, 0.80], y: [-4, 4, -4] }}
        transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        style={{ position: "absolute", top: "6%", left: "10%", transform: "rotate(-5deg)", zIndex: 30 }}
      >
        <div style={{ padding: "9px 16px", border: "1.5px solid rgba(255,255,255,0.85)", background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.22)" }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>Due Diligence</p>
        </div>
      </motion.div>

      {/* SPA — upper-right float */}
      <motion.div
        animate={{ opacity: [0.85, 1, 0.85], y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        style={{ position: "absolute", top: "6%", right: "8%", transform: "rotate(6deg)", zIndex: 30 }}
      >
        <div style={{ padding: "12px 20px", border: "1.5px solid rgba(255,255,255,0.85)", background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.22)" }}>
          <p style={{ color: "#001489", fontSize: 13, fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase" }}>SPA</p>
        </div>
      </motion.div>

      {/* VALUATION — mid-right */}
      <motion.div
        animate={{ opacity: [0.78, 1, 0.78] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.0 }}
        style={{ position: "absolute", top: "50%", right: "0%", transform: "translateY(-50%) rotate(8deg)", zIndex: 30 }}
      >
        <div style={{ padding: "10px 16px", border: "1.5px solid rgba(255,255,255,0.85)", background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}>
          <p style={{ color: "#001489", fontSize: 9, fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase" }}>Valuation</p>
        </div>
      </motion.div>

      {/* REGULATORY — mid-left */}
      <motion.div
        animate={{ opacity: [0.78, 1, 0.78], y: [-3, 3, -3] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ position: "absolute", top: "52%", left: "0%", transform: "rotate(-8deg)", zIndex: 30 }}
      >
        <div style={{ padding: "9px 14px", border: "1.5px solid rgba(255,255,255,0.85)", background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Regulatory</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── SERVICE DATA ──────────────────────────────────────────────────────────── */

const SERVICES_EN = [
  {
    num: "01",
    title: "Buy-Side Advisory",
    description: "Full legal support for acquirers — from target identification and preliminary structuring through to due diligence, SPA negotiation, and completion.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="16" cy="16" r="9" stroke="#8099FF" strokeWidth="1.5" />
        <path d="M23 23l7 7" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 16h8M16 12v8" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Sell-Side Advisory",
    description: "Protecting sellers throughout a transaction — vendor due diligence, data room preparation, NDA management, and SPA negotiation to maximise deal value.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="13" cy="20" r="8" stroke="#8099FF" strokeWidth="1.5" />
        <circle cx="27" cy="20" r="8" stroke="#8099FF" strokeWidth="1.5" />
        <line x1="20" y1="20" x2="26" y2="20" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M23 17l3 3-3 3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Due Diligence",
    description: "Legal due diligence across UAE, French, and EU law — corporate, contractual, employment, regulatory, and IP review with clear risk-ranked reporting.",
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
    num: "04",
    title: "Transaction Structuring",
    description: "Advising on optimal deal architecture — share versus asset deals, holding structures, earn-out mechanisms, and tax-efficient acquisition frameworks across jurisdictions.",
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
    num: "05",
    title: "SPA Drafting & Negotiation",
    description: "Drafting and negotiating sale and purchase agreements, including representations and warranties, conditions precedent, and price adjustment mechanisms.",
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
    num: "06",
    title: "Regulatory Clearance",
    description: "Managing merger control filings, foreign investment notifications, and sector-specific regulatory approvals across the UAE, France, and the EU.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M20 5L7 10v10c0 9 5.5 14 13 17 7.5-3 13-8 13-17V10L20 5z" stroke="#8099FF" strokeWidth="1.5" />
        <path d="M14 20l4 4 9-9" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Post-Merger Integration",
    description: "Legal support for integrating acquired businesses — corporate restructuring, contract novation, employment harmonisation, and governance alignment.",
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
    num: "08",
    title: "Joint Ventures & Strategic Alliances",
    description: "Structuring JV agreements, shareholder arrangements, and strategic alliance frameworks for cross-border Gulf–Europe partnerships.",
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
  { num: "01", title: "Conseil Côté Acquéreur", description: "Accompagnement juridique complet des acquéreurs — de l'identification de la cible et la structuration préliminaire jusqu'à la due diligence, la négociation du SPA et le closing." },
  { num: "02", title: "Conseil Côté Vendeur", description: "Protection des vendeurs tout au long de l'opération — vendor due diligence, préparation de la data room, gestion des NDA et négociation du SPA pour maximiser la valeur." },
  { num: "03", title: "Due Diligence", description: "Due diligence juridique en droit des EAU, français et européen — volets corporate, contractuel, social, réglementaire et PI, avec un reporting clair hiérarchisé par risques." },
  { num: "04", title: "Structuration de l'Opération", description: "Conseil sur l'architecture optimale de la transaction — cession de titres ou d'actifs, structures de holding, mécanismes d'earn-out et cadres d'acquisition fiscalement efficaces." },
  { num: "05", title: "Rédaction et Négociation du SPA", description: "Rédaction et négociation des contrats de cession, incluant déclarations et garanties, conditions suspensives et mécanismes d'ajustement du prix." },
  { num: "06", title: "Autorisation Réglementaire", description: "Gestion des dossiers de contrôle des concentrations, notifications d'investissements étrangers et autorisations réglementaires sectorielles aux EAU, en France et dans l'UE." },
  { num: "07", title: "Intégration Post-Fusion", description: "Accompagnement juridique de l'intégration des entités acquises — restructuration corporate, novation de contrats, harmonisation sociale et alignement de la gouvernance." },
  { num: "08", title: "Joint-Ventures et Alliances Stratégiques", description: "Structuration d'accords de JV, d'arrangements entre actionnaires et de cadres d'alliance stratégique pour les partenariats transfrontaliers Golfe–Europe." },
];

const DIFFERENTIATORS_EN = [
  { label: "Boutique model", body: "Direct partner access on every mandate. No junior teams handling your deal without oversight at every critical stage." },
  { label: "Dual-qualified counsel", body: "Admitted to both the Paris Bar and the Dubai Legal Affairs Department — essential expertise for cross-border M&A." },
  { label: "GCC · France · EU coverage", body: "Deep knowledge of UAE commercial law, French M&A regulations, and EU merger control — all within a single firm." },
  { label: "Trilingual fluency", body: "English, French, and Arabic. We negotiate and draft in the language of your counterparty and their advisers." },
];

const DIFFERENTIATORS_FR = [
  { label: "Modèle boutique", body: "Accès direct aux associés sur chaque mandat. Aucune équipe junior ne traite votre opération sans supervision à chaque étape clé." },
  { label: "Conseil doublement qualifié", body: "Admis au Barreau de Paris et auprès du Département des Affaires Juridiques de Dubaï — une expertise indispensable pour les F&A transfrontalières." },
  { label: "Couverture CCG · France · UE", body: "Connaissance approfondie du droit commercial des EAU, des réglementations françaises en matière de F&A et du contrôle des concentrations européen." },
  { label: "Fluidité trilingue", body: "Anglais, français et arabe. Nous négocions et rédigeons dans la langue de votre interlocuteur et de ses conseils." },
];

/* ─── INNER PAGE ────────────────────────────────────────────────────────────── */

function MergersAcquisitionsInner() {
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
        data-testid="ma-hero"
        data-header-theme="dark"
        className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden pt-20"
      >
        <img
          src={imgMA}
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
                  className="flex items-center gap-2 text-white text-[16px] tracking-[0.3em] uppercase font-semibold hover:opacity-80 transition-opacity"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  {tx.breadcrumb}
                </a>
                <span className="text-white/20">·</span>
                <span className="text-white text-[16px] tracking-[0.3em] uppercase font-medium">Mergers & Acquisitions</span>
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
                className="text-base leading-relaxed max-w-[500px] mb-10"
                style={{ color: "rgba(255,255,255,1)" }}
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
                  data-testid="ma-cta-primary"
                  className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer"
                >
                  <span>{tx.heroCta}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
                <a
                  href="#services"
                  data-testid="ma-cta-secondary"
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
        data-testid="ma-overview"
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
              <p className="text-[#8099FF] text-[16px] tracking-[0.35em] uppercase font-bold mb-5">{tx.overviewEyebrow}</p>
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
                <div className="border border-[#001489]/12 p-6 border-t-[#001489] border-r-[#001489] border-b-[#001489] border-l-[#001489]">
                  <p className="font-heading text-[#001489] font-bold text-xl">{tx.overviewDubai}</p>
                  <p className="text-[#001489] text-[16px] tracking-wider uppercase mt-1.5">{tx.overviewDubaiSub}</p>
                </div>
                <div className="border border-[#001489]/12 p-6 border-t-[#001489] border-r-[#001489] border-b-[#001489] border-l-[#001489]">
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
        data-testid="ma-services"
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
            <p className="text-[#8099FF] text-[16px] tracking-[0.35em] uppercase font-bold mb-4">{tx.servicesEyebrow}</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-heading text-white font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">{tx.servicesH2}</h2>
              <p className="text-white text-sm max-w-xs leading-relaxed">{tx.servicesSub}</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E9F5]">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                data-testid={`ma-service-card-${i}`}
                className="group bg-white p-8 flex flex-col hover:bg-[#001489] transition-colors duration-300"
              >
                <p className="text-[#001489] text-[16px] tracking-[0.28em] uppercase font-bold mb-3 group-hover:text-white transition-colors">{svc.num}</p>
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
      </section>
      {/* ── WHY MILTON HOBBS ──────────────────────────────────────────────── */}
      <section
        data-testid="ma-differentiators"
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
                data-testid={`ma-differentiator-${i}`}
                className="bg-white p-8 flex flex-col"
              >
                <div className="w-8 h-8 border border-[#001489] flex items-center justify-center mb-6 flex-shrink-0">
                  <span className="font-heading text-[#001489] font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
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
        data-testid="ma-cta-banner"
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
                data-testid="ma-banner-cta"
                className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer"
              >
                <span>{tx.bannerCta}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </button>
              <a
                href="mailto:contact@miltonhobbs.com"
                data-testid="ma-banner-email"
                className="inline-flex items-center gap-3 border border-white/20 text-white/70 text-xs font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:border-white/40 hover:text-white transition-colors"
              >
                contact@miltonhobbs.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} practiceArea="Mergers & Acquisitions" />
    </div>
  );
}

/* ─── PAGE WRAPPER ──────────────────────────────────────────────────────────── */

export default function MergersAcquisitionsPage() {
  return (
    <LanguageProvider>
      <MergersAcquisitionsInner />
    </LanguageProvider>
  );
}
