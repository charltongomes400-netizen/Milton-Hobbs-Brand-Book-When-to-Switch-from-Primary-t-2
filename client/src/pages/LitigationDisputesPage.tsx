import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactModal } from "@/components/ContactModal";
import imgLitigation from "@assets/optimized/alexander-abero-OypnYfdiQgg-unsplash_1776241615811.jpg";

const PAGE_TEXT = {
  EN: {
    breadcrumb: "Our Expertise",
    heroEyebrow: "Litigation & Disputes",
    heroH1Line1: "Advocate with force.",
    heroH1Line2: "Resolve with strategy.",
    heroSub: "From commercial litigation and international arbitration to DIFC proceedings and enforcement of foreign judgments — Milton Hobbs delivers partner-led dispute resolution across UAE and French jurisdictions with unflinching strategic advocacy.",
    heroCta: "Book a Consultation",
    heroSecondary: "View Services",
    stat1Val: "Dubai + Paris", stat1Label: "Dual office presence",
    stat2Val: "EN · FR", stat2Label: "Bilingual counsel",
    stat3Val: "Partner-led", stat3Label: "Every mandate",
    scroll: "Scroll",
    overviewEyebrow: "Practice Overview",
    overviewH2: "Dispute resolution built for high-stakes matters.",
    overviewP1: "Milton Hobbs' Litigation & Disputes practice combines strategic thinking with relentless advocacy. We represent corporations, investors, and executives in high-value commercial disputes across UAE onshore courts, DIFC, ADGM, and French tribunaux — as well as international arbitration under ICC, LCIA, DIAC, and other rules.",
    overviewP2: "Our boutique model ensures partner-led attention on every dispute. We work efficiently to resolve conflicts quickly where possible, and advocate with force when litigation is necessary. Clients benefit from seamless cross-border strategy across the UAE and French legal systems.",
    chips: ["UAE onshore & DIFC/ADGM", "International arbitration", "French commercial litigation"],
    overviewCardH: "Strategic dispute resolution across two jurisdictions.",
    overviewDubai: "Dubai", overviewDubaiSub: "Primary Office",
    overviewParis: "Paris", overviewParisSub: "European Office",
    servicesEyebrow: "What We Do",
    servicesH2: "Our services.",
    servicesSub: "Comprehensive dispute resolution across litigation, arbitration, and alternative dispute resolution in UAE and France.",
    hoverCta: "Enquire",
    whyEyebrow: "Why Milton Hobbs",
    whyH2: "What sets us apart.",
    bannerEyebrow: "Ready to proceed?",
    bannerH2: "Ready to resolve your dispute?",
    bannerSub: "Speak directly with a partner. No intermediaries, no delays — strategic advocacy and clear counsel from day one.",
    bannerCta: "Book a Consultation",
  },
  FR: {
    breadcrumb: "Notre Expertise",
    heroEyebrow: "Contentieux & Résolution des Litiges",
    heroH1Line1: "Plaider avec force.",
    heroH1Line2: "Résoudre avec stratégie.",
    heroSub: "Du contentieux commercial et de l'arbitrage international aux procédures DIFC et à l'exécution des jugements étrangers — Milton Hobbs délivre une résolution des litiges pilotée par les associés.",
    heroCta: "Prendre Rendez-vous",
    heroSecondary: "Nos Services",
    stat1Val: "Dubaï + Paris", stat1Label: "Double présence",
    stat2Val: "EN · FR", stat2Label: "Conseil bilingue",
    stat3Val: "Associés directs", stat3Label: "Chaque mandat",
    scroll: "Défiler",
    overviewEyebrow: "Présentation du Département",
    overviewH2: "Résolution des litiges pour les affaires à forts enjeux.",
    overviewP1: "Le département Contentieux & Résolution des Litiges de Milton Hobbs combine réflexion stratégique et plaidoirie sans relâche. Nous représentons des entreprises, investisseurs et dirigeants dans des litiges commerciaux de grande valeur devant les tribunaux des EAU, le DIFC, l'ADGM et les tribunaux français.",
    overviewP2: "Notre modèle boutique garantit une attention des associés sur chaque litige. Nous travaillons efficacement pour résoudre les conflits rapidement lorsque c'est possible, et plaidons avec force lorsque le contentieux est nécessaire.",
    chips: ["EAU onshore & DIFC/ADGM", "Arbitrage international", "Contentieux commercial français"],
    overviewCardH: "Résolution stratégique des litiges dans deux juridictions.",
    overviewDubai: "Dubaï", overviewDubaiSub: "Bureau Principal",
    overviewParis: "Paris", overviewParisSub: "Bureau Européen",
    servicesEyebrow: "Ce Que Nous Faisons",
    servicesH2: "Nos services.",
    servicesSub: "Résolution complète des litiges par contentieux, arbitrage et modes alternatifs aux EAU et en France.",
    hoverCta: "Nous Contacter",
    whyEyebrow: "Pourquoi Milton Hobbs",
    whyH2: "Ce qui nous distingue.",
    bannerEyebrow: "Prêt à avancer ?",
    bannerH2: "Prêt à résoudre votre litige ?",
    bannerSub: "Parlez directement avec un associé. Sans intermédiaires, sans délais — une plaidoirie stratégique et un conseil clair dès le premier jour.",
    bannerCta: "Prendre Rendez-vous",
  },
};

/* Dot that travels along a straight SVG path via SMIL */
function ProcDot({ x1, y1, x2, y2, delay, dur = 3.2 }: { x1: number; y1: number; x2: number; y2: number; delay: number; dur?: number }) {
  const path = `M ${x1} ${y1} L ${x2} ${y2}`;
  return (
    <circle r="3.5" fill="#8099FF">
      <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" path={path} />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1"
        dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  );
}

function LitigationIllustration() {
  /* Procedural timeline stages */
  const stages = ["FILED", "HEARING", "AWARD", "ENFORCED"];
  /* Timeline x positions for 4 nodes, spread across the SVG */
  const stageX = [60, 160, 260, 360];
  const timelineY = 310;

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 65% 65% at 50% 44%, rgba(128,153,255,0.09) 0%, transparent 70%)",
      }} />

      {/* ── MAIN SVG: entity cards, arrows, tribunal node, timeline ── */}
      <svg
        className="absolute"
        style={{ width: "100%", height: "100%", overflow: "visible", zIndex: 10 }}
        viewBox="0 0 480 380"
        fill="none"
      >
        {/* ─── CLAIMANT CARD (left) ─── */}
        <rect x="18" y="100" width="118" height="90" fill="#000A4F" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        {/* card header bar */}
        <rect x="18" y="100" width="118" height="22" fill="rgba(255,255,255,0.07)" />
        <text x="77" y="115" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="7" letterSpacing="0.22em" fontFamily="sans-serif" fontWeight="700">PARTY</text>
        {/* person icon */}
        <circle cx="77" cy="147" r="10" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <circle cx="77" cy="143" r="4.5" fill="rgba(255,255,255,0.45)" />
        <path d="M65 157c0-6.6 5.4-10 12-10s12 3.4 12 10" fill="rgba(255,255,255,0.22)" />
        {/* label */}
        <text x="77" y="181" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="8.5" letterSpacing="0.22em" fontFamily="sans-serif" fontWeight="800">CLAIMANT</text>

        {/* ─── RESPONDENT CARD (right) ─── */}
        <rect x="344" y="100" width="118" height="90" fill="#000A4F" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <rect x="344" y="100" width="118" height="22" fill="rgba(255,255,255,0.07)" />
        <text x="403" y="115" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="7" letterSpacing="0.22em" fontFamily="sans-serif" fontWeight="700">PARTY</text>
        <circle cx="403" cy="147" r="10" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <circle cx="403" cy="143" r="4.5" fill="rgba(255,255,255,0.45)" />
        <path d="M391 157c0-6.6 5.4-10 12-10s12 3.4 12 10" fill="rgba(255,255,255,0.22)" />
        <text x="403" y="181" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="8.5" letterSpacing="0.22em" fontFamily="sans-serif" fontWeight="800">RESPONDENT</text>

        {/* ─── CONNECTOR LINES: both cards → tribunal hexagon ─── */}
        {/* Left: claimant → tribunal */}
        <line x1="136" y1="145" x2="208" y2="145" stroke="rgba(128,153,255,0.25)" strokeWidth="1" strokeDasharray="4 5" />
        {/* Right: tribunal → respondent */}
        <line x1="272" y1="145" x2="344" y2="145" stroke="rgba(128,153,255,0.25)" strokeWidth="1" strokeDasharray="4 5" />
        {/* Arrow heads */}
        <path d="M204 140l6 5-6 5" stroke="rgba(128,153,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M276 140l-6 5 6 5" stroke="rgba(128,153,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Animated dots — claimant → tribunal */}
        <ProcDot x1={136} y1={145} x2={208} y2={145} delay={0}   dur={3.0} />
        <ProcDot x1={136} y1={145} x2={208} y2={145} delay={1.5} dur={3.0} />
        {/* Animated dots — respondent → tribunal */}
        <ProcDot x1={344} y1={145} x2={272} y2={145} delay={0.6} dur={3.0} />
        <ProcDot x1={344} y1={145} x2={272} y2={145} delay={2.1} dur={3.0} />

        {/* ─── TRIBUNAL HEXAGON (centre) ─── */}
        {/* Hexagon: cx=240 cy=145 r=38 */}
        <polygon
          points="240,107 273,126 273,164 240,183 207,164 207,126"
          fill="#0A1E6E"
          stroke="rgba(255,255,255,0.30)"
          strokeWidth="1.2"
        />
        {/* Outer pulse ring */}
        <polygon points="240,107 273,126 273,164 240,183 207,164 207,126"
          fill="none" stroke="rgba(128,153,255,0.18)" strokeWidth="6">
          <animate attributeName="stroke-width" values="6;18;6" dur="3.4s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.18;0;0.18" dur="3.4s" repeatCount="indefinite" />
        </polygon>
        {/* Gavel icon inside hex */}
        {/* gavel head */}
        <rect x="226" y="132" width="26" height="12" rx="1.5" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
        {/* gavel handle */}
        <line x1="252" y1="138" x2="268" y2="158" stroke="rgba(255,255,255,0.50)" strokeWidth="3" strokeLinecap="round" />
        {/* sound block */}
        <rect x="222" y="150" width="20" height="8" rx="1" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.30)" strokeWidth="0.8" />
        {/* TRIBUNAL label */}
        <text x="240" y="178" textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="6.5" letterSpacing="0.22em" fontFamily="sans-serif" fontWeight="700">TRIBUNAL</text>

        {/* ─── PROCEDURAL TIMELINE STRIP ─── */}
        {/* Background rail */}
        <rect x="40" y={timelineY - 1} width="400" height="2" fill="rgba(255,255,255,0.10)" />
        {/* Animated progress line */}
        <rect x="40" y={timelineY - 1} width="0" height="2" fill="#8099FF" opacity="0.7">
          <animate attributeName="width" values="0;400;400;0" keyTimes="0;0.55;0.9;1" dur="7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.8;0.4;0.2" keyTimes="0;0.55;0.9;1" dur="7s" repeatCount="indefinite" />
        </rect>

        {/* Stage nodes + labels */}
        {stages.map((label, i) => (
          <g key={i}>
            {/* node circle */}
            <circle cx={stageX[i]} cy={timelineY} r="7" fill="#000A4F" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2">
              <animate attributeName="stroke" values="rgba(255,255,255,0.28);rgba(128,153,255,0.9);rgba(255,255,255,0.28)"
                keyTimes={`0;${(0.1 + i * 0.22).toFixed(2)};1`} dur="7s" repeatCount="indefinite" />
            </circle>
            {/* inner dot */}
            <circle cx={stageX[i]} cy={timelineY} r="2.5" fill="rgba(255,255,255,0.45)">
              <animate attributeName="fill" values="rgba(255,255,255,0.35);rgba(128,153,255,1);rgba(255,255,255,0.35)"
                keyTimes={`0;${(0.1 + i * 0.22).toFixed(2)};1`} dur="7s" repeatCount="indefinite" />
            </circle>
            {/* stage label below */}
            <text x={stageX[i]} y={timelineY + 22} textAnchor="middle"
              fill="rgba(255,255,255,0.38)" fontSize="6.5" letterSpacing="0.20em" fontFamily="sans-serif" fontWeight="700">{label}</text>
          </g>
        ))}
        {/* Connector: tribunal → timeline via vertical drop */}
        <line x1="240" y1="183" x2="240" y2={timelineY - 7}
          stroke="rgba(128,153,255,0.20)" strokeWidth="1" strokeDasharray="3 5" />
      </svg>

      {/* ── FLOATING CONTEXT CHIPS ── */}
      <motion.div
        animate={{ opacity: [0.80, 1, 0.80], y: [-5, 5, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "5%", left: "14%", transform: "rotate(-6deg)", zIndex: 30 }}
      >
        <div style={{ padding: "10px 18px", border: "1.5px solid rgba(255,255,255,0.88)", background: "white", boxShadow: "0 6px 22px rgba(0,0,0,0.22)" }}>
          <p style={{ color: "#001489", fontSize: 8.5, fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase" }}>DIFC Courts</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.82, 1, 0.82], y: [6, -6, 6] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        style={{ position: "absolute", top: "5%", right: "8%", transform: "rotate(7deg)", zIndex: 30 }}
      >
        <div style={{ padding: "10px 18px", border: "1.5px solid rgba(255,255,255,0.88)", background: "white", boxShadow: "0 6px 22px rgba(0,0,0,0.22)" }}>
          <p style={{ color: "#001489", fontSize: 8.5, fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase" }}>ICC · LCIA</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.78, 1, 0.78], y: [-4, 4, -4] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
        style={{ position: "absolute", bottom: "4%", right: "10%", transform: "rotate(5deg)", zIndex: 30 }}
      >
        <div style={{ padding: "9px 14px", border: "1.5px solid rgba(255,255,255,0.88)", background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>NY Convention</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.80, 1, 0.80] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        style={{ position: "absolute", bottom: "4%", left: "8%", transform: "rotate(-8deg)", zIndex: 30 }}
      >
        <div style={{ padding: "9px 14px", border: "1.5px solid rgba(255,255,255,0.88)", background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Paris Tribunal</p>
        </div>
      </motion.div>
    </div>
  );
}

const SERVICES_EN = [
  { num: "01", title: "Commercial Litigation", description: "Representation in high-value commercial disputes before UAE onshore courts, DIFC Courts, ADGM Courts, and French commercial tribunaux — contract claims, breach of warranty, fraud, and shareholder disputes.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M10 8h20v26H10z" stroke="#8099FF" strokeWidth="1.5"/><line x1="15" y1="15" x2="25" y2="15" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/><line x1="15" y1="19" x2="25" y2="19" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><line x1="15" y1="23" x2="20" y2="23" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/><path d="M8 34h24" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/></svg>) },
  { num: "02", title: "International Arbitration", description: "Strategic counsel and advocacy in international arbitration proceedings under ICC, LCIA, DIAC, ADCCAC, and UNCITRAL rules — seat selection, emergency relief, and award enforcement.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="13" stroke="#8099FF" strokeWidth="1.5"/><circle cx="20" cy="20" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/><line x1="20" y1="7" x2="20" y2="33" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/><line x1="7" y1="20" x2="33" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.8)"/></svg>) },
  { num: "03", title: "DIFC & ADGM Proceedings", description: "Specialist representation before the DIFC Courts, DIFC-LCIA Arbitration Centre, ADGM Courts, and ADGM Arbitration Centre — from injunction applications to full trial advocacy.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M20 5L7 10v10c0 9 5.5 14 13 17 7.5-3 13-8 13-17V10L20 5z" stroke="#8099FF" strokeWidth="1.5"/><path d="M14 20l4 4 9-9" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "04", title: "Enforcement of Awards & Judgments", description: "Cross-border enforcement of foreign arbitral awards and court judgments across UAE and France — New York Convention enforcement, UAE Cabinet Resolution 57, and French exequatur proceedings.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="6" y="10" width="28" height="22" stroke="#8099FF" strokeWidth="1.5"/><rect x="12" y="6" width="16" height="6" stroke="#8099FF" strokeWidth="1.2"/><path d="M13 22l4 4 10-10" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "05", title: "Emergency & Interim Relief", description: "Urgent injunctions, freezing orders, and interim measures before UAE courts, DIFC Courts, and French tribunaux — protecting assets and positions before and during proceedings.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M20 6v14M20 20l8 8" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round"/><circle cx="20" cy="24" r="12" stroke="#8099FF" strokeWidth="1.4"/><path d="M14 12l4 4" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round"/></svg>) },
  { num: "06", title: "Mediation & ADR", description: "Skilled mediation representation and ADR strategy — Dubai Centre for Amicable Settlement of Disputes, Centre de Médiation et d'Arbitrage de Paris (CMAP), and ICC Mediation proceedings.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="12" cy="20" r="6" stroke="#8099FF" strokeWidth="1.4"/><circle cx="28" cy="20" r="6" stroke="#8099FF" strokeWidth="1.4"/><path d="M18 20h4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" strokeLinecap="round"/><path d="M16 15l-2-3M16 25l-2 3M24 15l2-3M24 25l2 3" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round"/></svg>) },
  { num: "07", title: "Corporate & Shareholder Disputes", description: "Representing shareholders, directors, and companies in intra-corporate disputes — unfair prejudice claims, derivative actions, joint venture disputes, and breach of fiduciary duty proceedings.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="14" cy="16" r="5" stroke="#8099FF" strokeWidth="1.4"/><circle cx="26" cy="16" r="5" stroke="#8099FF" strokeWidth="1.4"/><path d="M8 32c0-5 2.7-8 6-8h12c3.3 0 6 3 6 8" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round"/><line x1="20" y1="16" x2="20" y2="32" stroke="rgba(255,255,255,0.35)" strokeWidth="1.1" strokeLinecap="round"/></svg>) },
  { num: "08", title: "Asset Recovery & Fraud", description: "Tracing and recovering misappropriated assets, representing victims of fraud in civil proceedings, and coordinating parallel civil and criminal proceedings across UAE and French jurisdictions.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="18" cy="18" r="10" stroke="#8099FF" strokeWidth="1.5"/><path d="M26 26l6 6" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 18h8M18 14v8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round"/></svg>) },
];

const SERVICES_FR = [
  { num: "01", title: "Contentieux Commercial", description: "Représentation dans les litiges commerciaux de grande valeur devant les tribunaux onshore des EAU, les tribunaux DIFC et ADGM, et les tribunaux commerciaux français — créances contractuelles, fraude et litiges entre actionnaires." },
  { num: "02", title: "Arbitrage International", description: "Conseil stratégique et plaidoirie dans les procédures d'arbitrage international sous les règles CCI, LCIA, DIAC, ADCCAC et UNCITRAL — sélection du siège, mesures d'urgence et exécution des sentences." },
  { num: "03", title: "Procédures DIFC & ADGM", description: "Représentation spécialisée devant les tribunaux DIFC, le Centre d'arbitrage DIFC-LCIA, les tribunaux ADGM et le Centre d'arbitrage ADGM — des demandes d'injonction à la plaidoirie complète." },
  { num: "04", title: "Exécution des Sentences & Jugements", description: "Exécution transfrontalière de sentences arbitrales étrangères et jugements judiciaires aux EAU et en France — exécution Convention de New York, Résolution 57, et procédures d'exequatur françaises." },
  { num: "05", title: "Mesures d'Urgence & Provisoires", description: "Injonctions urgentes, ordonnances de gel et mesures provisoires devant les tribunaux des EAU, les tribunaux DIFC et les tribunaux français — protection des actifs avant et pendant les procédures." },
  { num: "06", title: "Médiation & ADR", description: "Représentation compétente en médiation et stratégie MAR — Centre de Dubai pour le règlement amiable des litiges, Centre de Médiation et d'Arbitrage de Paris (CMAP) et procédures de médiation CCI." },
  { num: "07", title: "Litiges Societaires & Entre Actionnaires", description: "Représentation des actionnaires, administrateurs et sociétés dans les litiges intra-corporatifs — préjudice injuste, actions dérivées, litiges de joint-venture et manquements aux obligations fiduciaires." },
  { num: "08", title: "Recouvrement d'Actifs & Fraude", description: "Traçage et récupération d'actifs détournés, représentation des victimes de fraude dans les procédures civiles, et coordination des procédures civiles et pénales parallèles aux EAU et en France." },
];

const DIFFERENTIATORS_EN = [
  { label: "Boutique model", body: "Partner-led advocacy on every dispute. No junior associates presenting your case without senior oversight." },
  { label: "Dual-forum expertise", body: "Deep knowledge of UAE onshore courts, DIFC, ADGM, and French civil/commercial courts — rare expertise in a single firm." },
  { label: "Cross-border strategy", body: "Coordinating parallel proceedings, enforcement strategies, and asset preservation across multiple jurisdictions simultaneously." },
  { label: "Trilingual advocacy", body: "English, French, and Arabic. We advocate in the language of the forum and the counterparty." },
];

const DIFFERENTIATORS_FR = [
  { label: "Modèle boutique", body: "Plaidoirie pilotée par les associés sur chaque litige. Aucun collaborateur junior ne présente votre dossier sans supervision senior." },
  { label: "Expertise biforums", body: "Connaissance approfondie des tribunaux onshore des EAU, du DIFC, de l'ADGM et des tribunaux civils/commerciaux français — expertise rare au sein d'un seul cabinet." },
  { label: "Stratégie transfrontalière", body: "Coordination des procédures parallèles, stratégies d'exécution et préservation des actifs dans plusieurs juridictions simultanément." },
  { label: "Plaidoirie trilingue", body: "Anglais, français et arabe. Nous plaidons dans la langue du forum et de la partie adverse." },
];

function LitigationDisputesInner() {
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

      <section id="home" data-testid="litigation-hero" data-header-theme="dark" className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden pt-20">
        <img
          src={imgLitigation}
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
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-3 mb-8">
                <a href="/#expertise" className="flex items-center gap-2 text-white text-[16px] tracking-[0.3em] uppercase font-semibold hover:opacity-80 transition-opacity">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                  {tx.breadcrumb}
                </a>
                <span className="text-white/20">·</span>
                <span className="text-white text-[16px] tracking-[0.3em] uppercase font-medium">Litigation & Disputes</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="font-heading text-white font-bold text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.06] tracking-tight mb-8">
                {tx.heroH1Line1}<br /><span className="text-white whitespace-nowrap">{tx.heroH1Line2}</span>
              </motion.h1>

              <motion.div initial={{ width: 0 }} animate={{ width: "64px" }} transition={{ delay: 0.8, duration: 0.7 }} className="h-[2px] bg-white mb-8" />

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="text-base leading-relaxed max-w-[500px] mb-10" style={{ color: "rgba(255,255,255,1)" }}>
                {tx.heroSub}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="flex flex-wrap gap-4 mb-14">
                <button onClick={() => setModalOpen(true)} data-testid="litigation-cta-primary" className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer">
                  <span>{tx.heroCta}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                </button>

                  <a href="#services" data-testid="litigation-cta-secondary" className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors">
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

      <section id="overview" data-testid="litigation-overview" data-header-theme="light" className="bg-white px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <p className="text-[#001489] text-[16px] tracking-[0.35em] uppercase font-bold mb-5">{tx.overviewEyebrow}</p>
              <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-tight leading-tight mb-8">{tx.overviewH2}</h2>
              <div className="h-[2px] w-16 bg-[#001489]/30 mb-8" />
              <p className="text-[#001489] text-base leading-[1.85] max-w-[58ch] mb-6">{tx.overviewP1}</p>
              <p className="text-[#001489] text-base leading-[1.85] max-w-[58ch] mb-10">{tx.overviewP2}</p>
              <div className="flex flex-wrap gap-3">
                {tx.chips.map(chip => (
                  <span key={chip} className="inline-flex items-center gap-2 border border-[#001489]/15 text-[#001489] text-[16px] tracking-[0.18em] uppercase font-semibold px-4 py-2">
                    <span className="w-1.5 h-1.5 bg-[#8099FF] flex-shrink-0" />{chip}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.2 }} className="relative hidden lg:flex flex-col gap-4" style={{ minHeight: 360 }}>
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
      <section className="bg-[#001489] px-8 py-5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <p className="text-white text-[16px] tracking-[0.35em] uppercase font-bold">Milton Hobbs</p>
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase hidden sm:block">Reason. Rigor. Resolution.</p>
        </div>
      </section>

      <section id="services" data-testid="litigation-services" className="bg-white px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-[#001489] text-[16px] tracking-[0.35em] uppercase font-bold mb-4">{tx.servicesEyebrow}</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">{tx.servicesH2}</h2>
              <p className="text-[#001489] text-sm max-w-xs leading-relaxed">{tx.servicesSub}</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E9F5]">
            {services.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.06 }} data-testid={`service-card-${i}`} className="group bg-white p-8 flex flex-col hover:bg-[#001489] transition-colors duration-300">
                <h3 className="font-heading text-[#001489] font-bold text-[1.05rem] leading-snug mb-4 group-hover:text-white transition-colors">{svc.title}</h3>
                <div className="h-px w-8 bg-[#001489]/20 mb-4 group-hover:bg-white/30 transition-colors" />
                <p className="text-sm leading-relaxed flex-1 text-[#001489] group-hover:text-white transition-colors">{svc.description}</p>
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => setModalOpen(true)} className="text-[#001489] text-[16px] tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0 group-hover:text-white">
                    {tx.hoverCta}<svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#001489] px-8 py-5">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <p className="text-white text-[16px] tracking-[0.35em] uppercase font-bold">Milton Hobbs</p>
            <p className="text-white/70 text-sm tracking-[0.2em] uppercase hidden sm:block">Reason. Rigor. Resolution.</p>
          </div>
        </section>
  <section data-testid="litigation-differentiators" data-header-theme="light" className="bg-white px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-[#001489] text-[16px] tracking-[0.35em] uppercase font-bold mb-4">{tx.whyEyebrow}</p>
            <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">{tx.whyH2}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E9F5]">
            {differentiators.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }} data-testid={`differentiator-${i}`} className="bg-white p-8 flex flex-col">
                <h3 className="font-heading text-[#001489] font-bold text-base leading-snug mb-4">{d.label}</h3>
                <div className="h-px w-8 bg-[#8099FF]/45 mb-4" />
                <p className="text-[#001489] text-sm leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="litigation-cta-banner" className="bg-[#001489] px-8 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <p className="text-white text-[16px] tracking-[0.35em] uppercase font-bold mb-4">{tx.bannerEyebrow}</p>
              <h2 className="font-heading text-white font-bold text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight leading-tight mb-3">{tx.bannerH2}</h2>
              <p className="text-white text-sm leading-relaxed max-w-[44ch]">{tx.bannerSub}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button onClick={() => setModalOpen(true)} data-testid="banner-cta" className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer">
                <span>{tx.bannerCta}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
              </button>
              <a href="mailto:contact@miltonhobbs.com" data-testid="banner-email" className="inline-flex items-center gap-3 border border-white/20 text-white/70 text-xs font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:border-white/40 hover:text-white transition-colors">
                contact@miltonhobbs.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} practiceArea="Litigation & Disputes" />
    </div>
  );
}

export default function LitigationDisputesPage() {
  return (
    <LanguageProvider>
      <LitigationDisputesInner />
    </LanguageProvider>
  );
}
