import { useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

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

function LitigationIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1400px" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 70% at 54% 50%, rgba(255,255,255,0.05) 0%, transparent 65%)" }} />

      {/* Scales of justice + gavel */}
      <motion.div
        animate={{ rotateY: [-12, 2, -12] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", position: "relative", zIndex: 10 }}
      >
        <svg width="280" height="240" viewBox="0 0 280 240" fill="none">
          {/* Base */}
          <rect x="116" y="218" width="48" height="6" fill="rgba(255,255,255,0.35)" rx="1" />
          <rect x="128" y="210" width="24" height="10" fill="rgba(255,255,255,0.25)" />

          {/* Central pillar */}
          <line x1="140" y1="210" x2="140" y2="60" stroke="rgba(255,255,255,0.8)" strokeWidth="3" />

          {/* Top orb */}
          <circle cx="140" cy="56" r="7" fill="white" fillOpacity="0.9" />

          {/* Horizontal beam */}
          <rect x="60" y="76" width="160" height="4" fill="rgba(255,255,255,0.75)" rx="1" />

          {/* Left chain */}
          <line x1="80" y1="80" x2="80" y2="148" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeDasharray="5 3" />
          {/* Right chain */}
          <line x1="200" y1="80" x2="200" y2="132" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeDasharray="5 3" />

          {/* Left pan — lower (weighted) */}
          <path d="M56 148 Q80 158 104 148" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" fill="rgba(255,255,255,0.08)" />
          <line x1="56" y1="148" x2="104" y2="148" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="80" y="145" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7.5" letterSpacing="0.15em" fontFamily="sans-serif">LAW</text>

          {/* Right pan — upper (lighter) */}
          <path d="M176 132 Q200 142 224 132" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" fill="rgba(255,255,255,0.08)" />
          <line x1="176" y1="132" x2="224" y2="132" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="200" y="129" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7.5" letterSpacing="0.15em" fontFamily="sans-serif">FACT</text>

          {/* Gavel */}
          <rect x="28" y="170" width="50" height="18" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" />
          <rect x="33" y="175" width="40" height="8" rx="1" fill="rgba(255,255,255,0.2)" />
          <line x1="78" y1="179" x2="108" y2="205" stroke="rgba(255,255,255,0.55)" strokeWidth="4" strokeLinecap="round" />

          {/* Columns in background */}
          <rect x="196" y="165" width="10" height="50" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <rect x="212" y="165" width="10" height="50" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <rect x="228" y="165" width="10" height="50" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <rect x="193" y="162" width="48" height="5" fill="rgba(255,255,255,0.12)" />
          <rect x="193" y="215" width="48" height="5" fill="rgba(255,255,255,0.12)" />

          {/* Court document */}
          <rect x="150" y="170" width="38" height="48" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="155" y1="180" x2="183" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          <line x1="155" y1="186" x2="183" y2="186" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
          <line x1="155" y1="192" x2="175" y2="192" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <path d="M155 205l2.5 2.5 5-5" stroke="rgba(128,153,255,0.8)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Floating chips */}
      <motion.div
        animate={{ opacity: [0.85, 1, 0.85], y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "4%", right: "2%", zIndex: 20 }}
      >
        <div style={{ width: 108, height: 108, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 10px 38px rgba(0,0,0,0.22)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <p style={{ color: "#001489", fontSize: 9, fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase" }}>DUBAI</p>
          <div style={{ width: 32, height: 1, background: "#001489", opacity: 0.22 }} />
          <p style={{ color: "#001489", fontSize: 7, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5 }}>DIFC Courts</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{ position: "absolute", bottom: "5%", left: "2%", zIndex: 20 }}
      >
        <div style={{ width: 90, height: 90, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 8px 28px rgba(0,0,0,0.18)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase" }}>PARIS</p>
          <div style={{ width: 28, height: 1, background: "#001489", opacity: 0.22 }} />
          <p style={{ color: "#001489", fontSize: 7, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.5 }}>Tribunal</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.85, 1, 0.85], y: [-6, 6, -6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        style={{ position: "absolute", top: "18%", left: "1%", transform: "rotate(-9deg)", zIndex: 20 }}
      >
        <div style={{ padding: "12px 20px", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.18)" }}>
          <p style={{ color: "#001489", fontSize: 10, fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase" }}>ICC · LCIA</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.80, 1, 0.80] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        style={{ position: "absolute", bottom: "24%", right: "1%", transform: "rotate(8deg)", zIndex: 20 }}
      >
        <div style={{ padding: "10px 16px", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
          <p style={{ color: "#001489", fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Arbitration</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{ width: 460, height: 128, borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.13)", transform: "rotateX(70deg)", top: "50%", left: "50%", marginTop: -64, marginLeft: -230 }}
      >
        <div style={{ position: "absolute", width: 8, height: 8, borderRadius: "50%", background: "#8099FF", top: -4, left: "50%", marginLeft: -4, boxShadow: "0 0 10px 3px rgba(128,153,255,0.7)" }} />
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

  const services = SERVICES_EN.map((s, i) => ({
    ...s,
    title: lang === "FR" ? SERVICES_FR[i].title : s.title,
    description: lang === "FR" ? SERVICES_FR[i].description : s.description,
  }));
  const differentiators = lang === "FR" ? DIFFERENTIATORS_FR : DIFFERENTIATORS_EN;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#001489] min-h-screen">
      <Header />

      <section id="home" data-testid="litigation-hero" data-header-theme="dark" className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden pt-20">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-20 w-full">
          <div className="grid lg:grid-cols-[1fr_1.35fr] gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-3 mb-8">
                <a href="/#expertise" className="flex items-center gap-2 text-[#8099FF] text-[10px] tracking-[0.3em] uppercase font-semibold hover:opacity-80 transition-opacity">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                  {tx.breadcrumb}
                </a>
                <span className="text-white/20">·</span>
                <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-medium">Litigation & Disputes</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="font-heading text-white font-bold text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.06] tracking-tight mb-8">
                {tx.heroH1Line1}<br /><span className="text-white whitespace-nowrap">{tx.heroH1Line2}</span>
              </motion.h1>

              <motion.div initial={{ width: 0 }} animate={{ width: "64px" }} transition={{ delay: 0.8, duration: 0.7 }} className="h-[2px] bg-[#8099FF] mb-8" />

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="text-base leading-relaxed max-w-[500px] mb-10" style={{ color: "rgba(255,255,255,0.58)" }}>
                {tx.heroSub}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="flex flex-wrap gap-4 mb-14">
                <a href="/#contact" data-testid="litigation-cta-primary" className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors">
                  <span>{tx.heroCta}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                </a>
                <a href="#services" data-testid="litigation-cta-secondary" className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors">
                  {tx.heroSecondary}
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[{ stat: tx.stat1Val, label: tx.stat1Label }, { stat: tx.stat2Val, label: tx.stat2Label }, { stat: tx.stat3Val, label: tx.stat3Label }].map(s => (
                  <div key={s.label}>
                    <p className="font-heading text-white font-bold text-base leading-tight mb-1">{s.stat}</p>
                    <p className="text-white/40 text-[10px] tracking-wider uppercase">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.5 }} className="relative hidden lg:flex items-center justify-center h-[620px]">
              <LitigationIllustration />
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-8 flex items-center gap-3 pointer-events-none">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.2, repeat: Infinity }} className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
          <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase">{tx.scroll}</span>
        </motion.div>
      </section>

      <section id="overview" data-testid="litigation-overview" data-header-theme="light" className="bg-white px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <p className="text-[#8099FF] text-[11px] tracking-[0.35em] uppercase font-bold mb-5">{tx.overviewEyebrow}</p>
              <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-tight leading-tight mb-8">{tx.overviewH2}</h2>
              <div className="h-[2px] w-16 bg-[#001489]/30 mb-8" />
              <p className="text-[#001489]/65 text-base leading-[1.85] max-w-[58ch] mb-6">{tx.overviewP1}</p>
              <p className="text-[#001489]/65 text-base leading-[1.85] max-w-[58ch] mb-10">{tx.overviewP2}</p>
              <div className="flex flex-wrap gap-3">
                {tx.chips.map(chip => (
                  <span key={chip} className="inline-flex items-center gap-2 border border-[#001489]/15 text-[#001489] text-[11px] tracking-[0.18em] uppercase font-semibold px-4 py-2">
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
                  <p className="text-[#001489]/40 text-[10px] tracking-wider uppercase mt-1.5">{tx.overviewDubaiSub}</p>
                </div>
                <div className="border border-[#001489]/12 p-6">
                  <p className="font-heading text-[#001489] font-bold text-xl">{tx.overviewParis}</p>
                  <p className="text-[#001489]/40 text-[10px] tracking-wider uppercase mt-1.5">{tx.overviewParisSub}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" data-testid="litigation-services" className="bg-[#001489] px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-[#8099FF] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">{tx.servicesEyebrow}</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-heading text-white font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">{tx.servicesH2}</h2>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">{tx.servicesSub}</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {services.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.06 }} data-testid={`service-card-${i}`} className="group bg-[#001489] p-8 flex flex-col hover:bg-[#0A32C8] transition-colors duration-300">
                <div className="w-10 h-10 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{svc.icon}</div>
                <p className="text-[#8099FF] text-[9px] tracking-[0.28em] uppercase font-bold mb-3">{svc.num}</p>
                <h3 className="font-heading text-white font-bold text-[1.05rem] leading-snug mb-4">{svc.title}</h3>
                <div className="h-px w-8 bg-[#8099FF]/35 mb-4 group-hover:bg-[#8099FF]/65 transition-colors" />
                <p className="text-sm leading-relaxed flex-1 group-hover:text-white/70 transition-colors" style={{ color: "rgba(255,255,255,0.48)" }}>{svc.description}</p>
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="/#contact" className="text-[#8099FF] text-[10px] tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    {tx.hoverCta}<svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="litigation-differentiators" data-header-theme="light" className="bg-white px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-[#001489] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">{tx.whyEyebrow}</p>
            <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">{tx.whyH2}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E9F5]">
            {differentiators.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }} data-testid={`differentiator-${i}`} className="bg-white p-8 flex flex-col">
                <div className="w-8 h-8 border border-[#001489] flex items-center justify-center mb-6 flex-shrink-0">
                  <span className="font-heading text-[#001489] font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-heading text-[#001489] font-bold text-base leading-snug mb-4">{d.label}</h3>
                <div className="h-px w-8 bg-[#8099FF]/45 mb-4" />
                <p className="text-[#001489]/55 text-sm leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="litigation-cta-banner" className="bg-[#001489] px-8 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <p className="text-white text-[11px] tracking-[0.35em] uppercase font-bold mb-4">{tx.bannerEyebrow}</p>
              <h2 className="font-heading text-white font-bold text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight leading-tight mb-3">{tx.bannerH2}</h2>
              <p className="text-white/45 text-sm leading-relaxed max-w-[44ch]">{tx.bannerSub}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a href="/#contact" data-testid="banner-cta" className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors">
                <span>{tx.bannerCta}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
              </a>
              <a href="mailto:contact@miltonhobbs.com" data-testid="banner-email" className="inline-flex items-center gap-3 border border-white/20 text-white/70 text-xs font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:border-white/40 hover:text-white transition-colors">
                contact@miltonhobbs.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
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
