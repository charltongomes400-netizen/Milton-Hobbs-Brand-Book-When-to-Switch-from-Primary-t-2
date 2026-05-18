import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactModal } from "@/components/ContactModal";
import imgTax from "@assets/optimized/sasha-yudaev-FOYsU4uQqqM-unsplash_1776241615811.jpg";

const PAGE_TEXT = {
  EN: {
    breadcrumb: "Our Expertise",
    heroEyebrow: "Tax & Compliance",
    heroH1Line1: "Navigate complexity.",
    heroH1Line2: "Protect what matters.",
    heroSub: "From cross-border tax structuring and transfer pricing to regulatory compliance across UAE and French jurisdictions — Milton Hobbs delivers precise, partner-led tax counsel that protects wealth and enables growth.",
    heroCta: "Book a Consultation",
    heroSecondary: "View Services",
    stat1Val: "Dubai + Paris", stat1Label: "Dual office presence",
    stat2Val: "EN · FR", stat2Label: "Bilingual counsel",
    stat3Val: "Partner-led", stat3Label: "Every mandate",
    scroll: "Scroll",
    overviewEyebrow: "Practice Overview",
    overviewH2: "Tax law that serves your strategy.",
    overviewP1: "Milton Hobbs' Tax & Compliance practice operates at the intersection of commercial strategy and legal precision. With deep expertise in UAE and French tax regimes, the team advises corporates, high-net-worth individuals, and family offices on structuring transactions to be both commercially optimal and fully compliant.",
    overviewP2: "Our partner-led approach ensures every mandate receives senior attention, from corporate tax planning and VAT advisory to transfer pricing documentation and regulatory filings across multiple jurisdictions.",
    chips: ["UAE & French tax law", "Transfer pricing", "Regulatory compliance"],
    overviewCardH: "Tax strategy across jurisdictions.",
    overviewDubai: "Dubai", overviewDubaiSub: "Primary Office",
    overviewParis: "Paris", overviewParisSub: "European Office",
    servicesEyebrow: "What We Do",
    servicesH2: "Our services.",
    servicesSub: "Comprehensive tax and compliance advisory across UAE, France, and international jurisdictions.",
    hoverCta: "Enquire",
    whyEyebrow: "Why Milton Hobbs",
    whyH2: "What sets us apart.",
    bannerEyebrow: "Ready to proceed?",
    bannerH2: "Ready to structure your tax position?",
    bannerSub: "Speak directly with a partner. No intermediaries, no delays — clear, commercially astute tax counsel from day one.",
    bannerCta: "Book a Consultation",
  },
  FR: {
    breadcrumb: "Notre Expertise",
    heroEyebrow: "Fiscalité & Conformité",
    heroH1Line1: "Naviguer la complexité.",
    heroH1Line2: "Protéger l'essentiel.",
    heroSub: "De la structuration fiscale transfrontalière et des prix de transfert à la conformité réglementaire aux EAU et en France — Milton Hobbs délivre un conseil fiscal précis et piloté par les associés.",
    heroCta: "Prendre Rendez-vous",
    heroSecondary: "Nos Services",
    stat1Val: "Dubaï + Paris", stat1Label: "Double présence",
    stat2Val: "EN · FR", stat2Label: "Conseil bilingue",
    stat3Val: "Associés directs", stat3Label: "Chaque mandat",
    scroll: "Défiler",
    overviewEyebrow: "Présentation du Département",
    overviewH2: "La fiscalité au service de votre stratégie.",
    overviewP1: "Le département Fiscalité & Conformité de Milton Hobbs opère à l'intersection de la stratégie commerciale et de la précision juridique. Avec une expertise approfondie des régimes fiscaux des EAU et français, l'équipe conseille les entreprises, les personnes fortunées et les family offices.",
    overviewP2: "Notre approche pilotée par les associés garantit une attention senior sur chaque mandat, de la planification fiscale des entreprises et du conseil TVA à la documentation des prix de transfert et aux dépôts réglementaires.",
    chips: ["Droit fiscal EAU & France", "Prix de transfert", "Conformité réglementaire"],
    overviewCardH: "Stratégie fiscale transfrontalière.",
    overviewDubai: "Dubaï", overviewDubaiSub: "Bureau Principal",
    overviewParis: "Paris", overviewParisSub: "Bureau Européen",
    servicesEyebrow: "Ce Que Nous Faisons",
    servicesH2: "Nos services.",
    servicesSub: "Conseil fiscal et de conformité complet aux EAU, en France et dans les juridictions internationales.",
    hoverCta: "Nous Contacter",
    whyEyebrow: "Pourquoi Milton Hobbs",
    whyH2: "Ce qui nous distingue.",
    bannerEyebrow: "Prêt à avancer ?",
    bannerH2: "Prêt à structurer votre position fiscale ?",
    bannerSub: "Parlez directement avec un associé. Sans intermédiaires, sans délais — un conseil fiscal clair et commercialement avisé dès le premier jour.",
    bannerCta: "Prendre Rendez-vous",
  },
};

function TaxIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1400px" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 70% at 52% 50%, rgba(255,255,255,0.05) 0%, transparent 65%)" }}
      />

      {/* Balance scale base */}
      <motion.div
        animate={{ rotateY: [-8, 4, -8] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", position: "relative", zIndex: 10 }}
      >
        {/* Central pillar */}
        <div style={{ width: 6, height: 200, background: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.4))", margin: "0 auto", position: "relative" }}>
          {/* Top orb */}
          <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", width: 20, height: 20, borderRadius: "50%", background: "white", boxShadow: "0 0 20px 6px rgba(255,255,255,0.5)" }} />
        </div>

        {/* Horizontal beam */}
        <div style={{ position: "relative", height: 4, width: 280, background: "rgba(255,255,255,0.85)", margin: "-102px auto 0", boxShadow: "0 0 12px rgba(255,255,255,0.3)" }}>
          {/* Left pan chain */}
          <svg style={{ position: "absolute", left: 10, top: 4, overflow: "visible" }} width="1" height="80">
            <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="4 3" />
          </svg>
          {/* Right pan chain */}
          <svg style={{ position: "absolute", right: 10, top: 4, overflow: "visible" }} width="1" height="80">
            <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="4 3" />
          </svg>

          {/* Left pan */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", left: -30, top: 84, width: 80, height: 24, borderRadius: "0 0 40px 40px", background: "rgba(255,255,255,0.20)", border: "1px solid rgba(255,255,255,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 8, fontWeight: 700, letterSpacing: "0.2em" }}>VAT</span>
          </motion.div>

          {/* Right pan */}
          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", right: -30, top: 84, width: 80, height: 24, borderRadius: "0 0 40px 40px", background: "rgba(255,255,255,0.20)", border: "1px solid rgba(255,255,255,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 8, fontWeight: 700, letterSpacing: "0.2em" }}>CIT</span>
          </motion.div>
        </div>

        {/* Base */}
        <div style={{ width: 120, height: 8, background: "rgba(255,255,255,0.35)", margin: "94px auto 0", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }} />
        <div style={{ width: 60, height: 4, background: "rgba(255,255,255,0.20)", margin: "0 auto" }} />
      </motion.div>

      {/* Floating document chips */}
      <motion.div
        animate={{ opacity: [0.85, 1, 0.85], y: [-6, 6, -6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "8%", right: "5%", zIndex: 20 }}
      >
        <div style={{ padding: "14px 20px", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}>
          <p style={{ color: "#001489", fontSize: 11, fontWeight: 800, letterSpacing: "0.32em", textTransform: "uppercase" }}>Transfer<br />Pricing</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.80, 1, 0.80], y: [5, -5, 5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", bottom: "12%", left: "3%", zIndex: 20 }}
      >
        <div style={{ padding: "11px 18px", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.18)" }}>
          <p style={{ color: "#001489", fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>Compliance</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        style={{ position: "absolute", top: "38%", left: "3%", transform: "rotate(-8deg)", zIndex: 20 }}
      >
        <div style={{ width: 96, height: 96, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <p style={{ color: "#001489", fontSize: 9, fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase" }}>DUBAI</p>
          <div style={{ width: 34, height: 1, background: "#001489", opacity: 0.22 }} />
          <p style={{ color: "#001489", fontSize: 7, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.55 }}>UAE Tax</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-7, 7, -7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ position: "absolute", bottom: "8%", right: "4%", zIndex: 20 }}
      >
        <div style={{ width: 88, height: 88, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 8px 28px rgba(0,0,0,0.18)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 800, letterSpacing: "0.30em", textTransform: "uppercase" }}>PARIS</p>
          <div style={{ width: 28, height: 1, background: "#001489", opacity: 0.22 }} />
          <p style={{ color: "#001489", fontSize: 7, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.5 }}>FR Tax</p>
        </div>
      </motion.div>

      {/* Orbital ring */}
      <motion.div
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{ width: 420, height: 120, borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.15)", transform: "rotateX(70deg)", top: "50%", left: "50%", marginTop: -60, marginLeft: -210 }}
      >
        <div style={{ position: "absolute", width: 8, height: 8, borderRadius: "50%", background: "#8099FF", top: -4, left: "50%", marginLeft: -4, boxShadow: "0 0 10px 3px rgba(128,153,255,0.7)" }} />
      </motion.div>
    </div>
  );
}

const SERVICES_EN = [
  { num: "01", title: "Corporate Tax Planning", description: "Strategic tax structuring for corporations operating across the UAE and France, including holding company design, profit repatriation, and group tax planning.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="6" y="8" width="28" height="26" stroke="#8099FF" strokeWidth="1.5"/><line x1="12" y1="16" x2="28" y2="16" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/><line x1="12" y1="21" x2="22" y2="21" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><path d="M20 26l3 3 5-5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "02", title: "VAT & Indirect Tax", description: "End-to-end UAE VAT advisory: registration, compliance filings, structuring supplies and imports, VAT recovery strategies, and FTA dispute resolution.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="13" stroke="#8099FF" strokeWidth="1.5"/><path d="M14 27l12-14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" strokeLinecap="round"/><circle cx="14" cy="24" r="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.1"/><circle cx="26" cy="16" r="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.1"/></svg>) },
  { num: "03", title: "Transfer Pricing", description: "Comprehensive transfer pricing documentation, benchmarking studies, advance pricing agreements, and defence strategies for intercompany transactions across the GCC and Europe.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="6" y="22" width="10" height="12" stroke="#8099FF" strokeWidth="1.3"/><rect x="15" y="16" width="10" height="18" stroke="#8099FF" strokeWidth="1.3"/><rect x="24" y="9" width="10" height="25" stroke="#8099FF" strokeWidth="1.3"/><path d="M11 22l9-6 9-7" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" strokeLinecap="round"/></svg>) },
  { num: "04", title: "Tax Due Diligence", description: "Pre-acquisition and vendor tax due diligence, identifying exposures and structuring tax-efficient deal terms for M&A transactions in the UAE, France, and cross-border.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M8 6h16l8 8v20H8V6z" stroke="#8099FF" strokeWidth="1.5"/><path d="M24 6v8h8" stroke="#8099FF" strokeWidth="1.2"/><line x1="13" y1="20" x2="27" y2="20" stroke="rgba(255,255,255,0.28)" strokeWidth="1"/><line x1="13" y1="25" x2="21" y2="25" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/><circle cx="27" cy="28" r="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.1"/><path d="M25.5 28l1.2 1.2 2-2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round"/></svg>) },
  { num: "05", title: "Regulatory Compliance", description: "Ongoing compliance management: tax return preparation, regulatory filings, FATCA/CRS reporting, economic substance requirements, and ultimate beneficial ownership registers.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M20 5L7 10v10c0 9 5.5 14 13 17 7.5-3 13-8 13-17V10L20 5z" stroke="#8099FF" strokeWidth="1.5"/><path d="M14 20l4 4 9-9" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "06", title: "International Tax Structuring", description: "Cross-border tax planning for multinational groups, including treaty analysis, permanent establishment risk, hybrid structures, and BEPS compliance frameworks.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="13" stroke="#8099FF" strokeWidth="1.5"/><ellipse cx="20" cy="20" rx="6" ry="13" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><line x1="7" y1="20" x2="33" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><circle cx="20" cy="20" r="2.5" fill="rgba(255,255,255,0.7)"/></svg>) },
  { num: "07", title: "Private Client & Wealth Tax", description: "Tax planning for high-net-worth individuals, family offices, and entrepreneurs — covering UAE residency structuring, French exit tax, succession planning, and trust advisory.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="14" r="6" stroke="#8099FF" strokeWidth="1.4"/><path d="M8 34c0-7 4-11 12-11s12 4 12 11" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round"/><path d="M26 18l2 2 4-4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "08", title: "Tax Disputes & Litigation", description: "Representation before tax authorities, objection procedures, administrative appeals, and tax litigation in UAE and French courts, including FTA audits and reassessment challenges.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M10 8h20v26H10z" stroke="#8099FF" strokeWidth="1.5"/><line x1="15" y1="15" x2="25" y2="15" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/><line x1="15" y1="19" x2="25" y2="19" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><line x1="15" y1="23" x2="20" y2="23" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/><path d="M8 34h24" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/></svg>) },
];

const SERVICES_FR = [
  { num: "01", title: "Planification Fiscale des Entreprises", description: "Structuration fiscale stratégique pour les entreprises opérant aux EAU et en France, y compris la conception de structures holding, le rapatriement des bénéfices et la planification fiscale de groupe." },
  { num: "02", title: "TVA & Fiscalité Indirecte", description: "Conseil TVA aux EAU de bout en bout : immatriculation, déclarations de conformité, structuration des livraisons et importations, stratégies de récupération de TVA, et résolution des litiges FTA." },
  { num: "03", title: "Prix de Transfert", description: "Documentation complète des prix de transfert, études de comparabilité, accords de prix en avance et stratégies de défense pour les transactions intra-groupe dans le CCG et en Europe." },
  { num: "04", title: "Due Diligence Fiscale", description: "Due diligence fiscale pré-acquisition et vendor, identification des expositions et structuration de conditions de transaction fiscalement efficaces pour les opérations de F&A." },
  { num: "05", title: "Conformité Réglementaire", description: "Gestion continue de la conformité : préparation des déclarations fiscales, dépôts réglementaires, reporting FATCA/CRS, exigences de substance économique et registres des bénéficiaires effectifs." },
  { num: "06", title: "Structuration Fiscale Internationale", description: "Planification fiscale transfrontalière pour les groupes multinationaux, y compris l'analyse des conventions, le risque d'établissement stable, les structures hybrides et les cadres de conformité BEPS." },
  { num: "07", title: "Clients Privés & Fiscalité Patrimoniale", description: "Planification fiscale pour les personnes fortunées, family offices et entrepreneurs — couvrant la structuration de la résidence aux EAU, l'exit tax française, la planification successorale et le conseil en trusts." },
  { num: "08", title: "Litiges & Contentieux Fiscaux", description: "Représentation devant les autorités fiscales, procédures d'objection, appels administratifs et contentieux fiscaux dans les tribunaux des EAU et français, y compris les contrôles FTA." },
];

const DIFFERENTIATORS_EN = [
  { label: "Boutique model", body: "Direct partner access on every mandate. No junior teams handling your matter without oversight." },
  { label: "Dual-jurisdiction expertise", body: "Deep knowledge of both UAE tax law (including DIFC, ADGM, and FTA frameworks) and French fiscal law." },
  { label: "Commercial alignment", body: "We structure tax positions that serve your business strategy, not just tick compliance boxes." },
  { label: "Trilingual fluency", body: "English, French, and Arabic. We negotiate and draft in the language of your counterparty and tax authority." },
];

const DIFFERENTIATORS_FR = [
  { label: "Modèle boutique", body: "Accès direct aux associés sur chaque mandat. Aucune équipe junior ne traite votre dossier sans supervision." },
  { label: "Expertise double juridiction", body: "Connaissance approfondie du droit fiscal des EAU (DIFC, ADGM et cadres FTA) et du droit fiscal français." },
  { label: "Alignement commercial", body: "Nous structurons des positions fiscales qui servent votre stratégie d'entreprise, pas seulement des cases à cocher." },
  { label: "Fluidité trilingue", body: "Anglais, français et arabe. Nous négocions et rédigeons dans la langue de votre interlocuteur et de l'autorité fiscale." },
];

function TaxComplianceInner() {
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
      <section id="home" data-testid="tax-hero" data-header-theme="dark" className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden pt-20">
        <img
          src={imgTax}
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
                <a href="/#expertise" className="flex items-center gap-2 text-white tracking-[0.3em] uppercase font-semibold hover:opacity-80 transition-opacity text-[16px]">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                  {tx.breadcrumb}
                </a>
                <span className="text-white/20">·</span>
                <span className="text-white tracking-[0.3em] uppercase font-medium text-[16px]">Tax & Compliance</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="font-heading text-white font-bold text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.06] tracking-tight mb-8">
                {tx.heroH1Line1}<br /><span className="text-white whitespace-nowrap">{tx.heroH1Line2}</span>
              </motion.h1>

              <motion.div initial={{ width: 0 }} animate={{ width: "64px" }} transition={{ delay: 0.8, duration: 0.7 }} className="h-[2px] bg-white mb-8" />

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="text-base leading-relaxed max-w-[500px] mb-10" style={{ color: "rgba(255,255,255,1)" }}>
                {tx.heroSub}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="flex flex-wrap gap-4 mb-14">
                <button onClick={() => setModalOpen(true)} data-testid="tax-cta-primary" className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer">
                  <span>{tx.heroCta}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                </button>

                  <a href="#services" data-testid="tax-cta-secondary" className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors">
                  {tx.heroSecondary}
                </a>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>
      <section id="overview" data-testid="tax-overview" data-header-theme="light" className="bg-white px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <p className="text-[#8099FF] text-[16px] tracking-[0.35em] uppercase font-bold mb-5">{tx.overviewEyebrow}</p>
              <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-tight leading-tight mb-8">{tx.overviewH2}</h2>
              <div className="h-[2px] w-16 bg-[#001489]/30 mb-8" />
              <p className="text-[#001489]/65 text-base leading-[1.85] max-w-[58ch] mb-6">{tx.overviewP1}</p>
              <p className="text-[#001489]/65 text-base leading-[1.85] max-w-[58ch] mb-10">{tx.overviewP2}</p>
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
      <section id="services" data-testid="tax-services" className="bg-[#001489] px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-[#8099FF] text-[16px] tracking-[0.35em] uppercase font-bold mb-4">{tx.servicesEyebrow}</p>
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
                  <button onClick={() => setModalOpen(true)} className="text-[#8099FF] text-[10px] tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0">
                    {tx.hoverCta}<svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section data-testid="tax-differentiators" data-header-theme="light" className="bg-white px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-[#001489] text-[16px] tracking-[0.35em] uppercase font-bold mb-4">{tx.whyEyebrow}</p>
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
      <section data-testid="tax-cta-banner" className="bg-[#001489] px-8 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <p className="text-white text-[16px] tracking-[0.35em] uppercase font-bold mb-4">{tx.bannerEyebrow}</p>
              <h2 className="font-heading text-white font-bold text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight leading-tight mb-3">{tx.bannerH2}</h2>
              <p className="text-white/45 text-sm leading-relaxed max-w-[44ch]">{tx.bannerSub}</p>
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
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} practiceArea="Tax & Compliance" />
    </div>
  );
}

export default function TaxCompliancePage() {
  return (
    <LanguageProvider>
      <TaxComplianceInner />
    </LanguageProvider>
  );
}
