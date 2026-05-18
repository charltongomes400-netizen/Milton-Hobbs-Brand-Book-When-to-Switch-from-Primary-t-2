import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactModal } from "@/components/ContactModal";
import imgRealEstate from "@assets/optimized/simone-hutsch-iDSfeuoxM0o-unsplash_1776241615811.jpg";

const PAGE_TEXT = {
  EN: {
    breadcrumb: "Our Expertise",
    heroEyebrow: "Real Estate & Property",
    heroH1Line1: "Acquire. Develop.",
    heroH1Line2: "Protect your asset.",
    heroSub: "From freehold acquisitions and development projects to commercial leasing and REIT structuring — Milton Hobbs delivers precise real estate counsel across Dubai, Abu Dhabi, and Paris with deep knowledge of both UAE and French property law.",
    heroCta: "Book a Consultation",
    heroSecondary: "View Services",
    stat1Val: "Dubai + Paris", stat1Label: "Dual office presence",
    stat2Val: "EN · FR", stat2Label: "Bilingual counsel",
    stat3Val: "Partner-led", stat3Label: "Every mandate",
    scroll: "Scroll",
    overviewEyebrow: "Practice Overview",
    overviewH2: "Real estate law across two premier markets.",
    overviewP1: "Milton Hobbs' Real Estate & Property practice advises developers, investors, family offices, and corporate occupiers on the full spectrum of real estate transactions across the UAE and France. With dual qualification and local market knowledge, the team provides precise legal counsel at every stage of the property lifecycle.",
    overviewP2: "From off-plan purchases in Dubai's freehold zones to complex development financing in Paris, our partner-led approach ensures rigorous due diligence, commercial clarity, and seamless cross-border transaction management.",
    chips: ["UAE freehold & leasehold law", "French immobilier", "REIT & fund structuring"],
    overviewCardH: "Property law across two premier markets.",
    overviewDubai: "Dubai", overviewDubaiSub: "Primary Office",
    overviewParis: "Paris", overviewParisSub: "European Office",
    servicesEyebrow: "What We Do",
    servicesH2: "Our services.",
    servicesSub: "Comprehensive real estate legal advisory across residential, commercial, and investment property in UAE and France.",
    hoverCta: "Enquire",
    whyEyebrow: "Why Milton Hobbs",
    whyH2: "What sets us apart.",
    bannerEyebrow: "Ready to proceed?",
    bannerH2: "Ready to close your next property transaction?",
    bannerSub: "Speak directly with a partner. No intermediaries, no delays — precise real estate counsel from day one.",
    bannerCta: "Book a Consultation",
  },
  FR: {
    breadcrumb: "Notre Expertise",
    heroEyebrow: "Immobilier & Propriété",
    heroH1Line1: "Acquérir. Développer.",
    heroH1Line2: "Protéger votre actif.",
    heroSub: "Des acquisitions en pleine propriété et projets de développement aux baux commerciaux et à la structuration de SIIC — Milton Hobbs délivre un conseil immobilier précis à Dubaï et à Paris.",
    heroCta: "Prendre Rendez-vous",
    heroSecondary: "Nos Services",
    stat1Val: "Dubaï + Paris", stat1Label: "Double présence",
    stat2Val: "EN · FR", stat2Label: "Conseil bilingue",
    stat3Val: "Associés directs", stat3Label: "Chaque mandat",
    scroll: "Défiler",
    overviewEyebrow: "Présentation du Département",
    overviewH2: "Le droit immobilier dans deux marchés premium.",
    overviewP1: "Le département Immobilier & Propriété de Milton Hobbs conseille les promoteurs, investisseurs, family offices et entreprises occupantes sur l'intégralité des transactions immobilières aux EAU et en France.",
    overviewP2: "Des acquisitions sur plan dans les zones de propriété franche de Dubaï au financement de développements complexes à Paris, notre approche pilotée par les associés garantit une due diligence rigoureuse et une clarté commerciale.",
    chips: ["Droit foncier EAU", "Droit immobilier français", "Structuration REIT & fonds"],
    overviewCardH: "Droit immobilier dans deux marchés premium.",
    overviewDubai: "Dubaï", overviewDubaiSub: "Bureau Principal",
    overviewParis: "Paris", overviewParisSub: "Bureau Européen",
    servicesEyebrow: "Ce Que Nous Faisons",
    servicesH2: "Nos services.",
    servicesSub: "Conseil juridique immobilier complet pour les biens résidentiels, commerciaux et d'investissement aux EAU et en France.",
    hoverCta: "Nous Contacter",
    whyEyebrow: "Pourquoi Milton Hobbs",
    whyH2: "Ce qui nous distingue.",
    bannerEyebrow: "Prêt à avancer ?",
    bannerH2: "Prêt à finaliser votre prochaine transaction immobilière ?",
    bannerSub: "Parlez directement avec un associé. Sans intermédiaires, sans délais — un conseil immobilier précis dès le premier jour.",
    bannerCta: "Prendre Rendez-vous",
  },
};

const B1_LIT = new Set([0, 2, 3, 5, 6, 8, 9, 11, 14, 16, 18, 20]);
const B2_LIT = new Set([0, 2, 3, 5, 7, 8, 10, 12, 13, 15, 16, 19, 21, 22, 24, 26, 28, 30, 31, 33, 35]);
const B3_LIT = new Set([0, 2, 3, 5, 7, 9, 10]);
const B4_LIT = new Set([0, 2, 4, 6]);
const B5_LIT = new Set([1, 3, 4, 6]);

function RealEstateIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1400px" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 68% 68% at 54% 50%, rgba(255,255,255,0.05) 0%, transparent 65%)" }} />

      {/* City skyline */}
      <motion.div
        animate={{ rotateY: [-12, 0, -12] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", position: "relative", zIndex: 10 }}
      >
        <svg width="300" height="240" viewBox="0 0 300 240" fill="none">
          {/* Ground */}
          <rect x="0" y="220" width="300" height="4" fill="rgba(255,255,255,0.25)" />

          {/* Building 1 — left tall */}
          <rect x="20" y="80" width="44" height="140" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
          <rect x="24" y="84" width="36" height="132" fill="rgba(255,255,255,0.04)" />
          {[0,1,2,3,4,5,6].map(row => [0,1,2].map(col => (
            <rect key={`b1-${row}-${col}`} x={27 + col * 11} y={88 + row * 17} width={7} height={10}
              fill={B1_LIT.has(row * 3 + col) ? "rgba(128,153,255,0.6)" : "rgba(255,255,255,0.12)"} />
          )))}

          {/* Building 2 — tallest center */}
          <rect x="110" y="30" width="52" height="190" fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" />
          <rect x="114" y="34" width="44" height="182" fill="rgba(255,255,255,0.05)" />
          {/* Spire */}
          <line x1="136" y1="30" x2="136" y2="10" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
          <circle cx="136" cy="9" r="3" fill="white" fillOpacity="0.8" />
          {[0,1,2,3,4,5,6,7,8].map(row => [0,1,2,3].map(col => (
            <rect key={`b2-${row}-${col}`} x={117 + col * 10} y={38 + row * 19} width={6} height={11}
              fill={B2_LIT.has(row * 4 + col) ? "rgba(128,153,255,0.65)" : "rgba(255,255,255,0.10)"} />
          )))}

          {/* Building 3 — right medium */}
          <rect x="200" y="100" width="40" height="120" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.40)" strokeWidth="1.1" />
          <rect x="204" y="104" width="32" height="112" fill="rgba(255,255,255,0.04)" />
          {[0,1,2,3,4,5].map(row => [0,1].map(col => (
            <rect key={`b3-${row}-${col}`} x={207 + col * 13} y={107 + row * 17} width={8} height={10}
              fill={B3_LIT.has(row * 2 + col) ? "rgba(128,153,255,0.55)" : "rgba(255,255,255,0.10)"} />
          )))}

          {/* Building 4 — far right small */}
          <rect x="248" y="140" width="34" height="80" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
          {[0,1,2,3].map(row => [0,1].map(col => (
            <rect key={`b4-${row}-${col}`} x={252 + col * 13} y={144 + row * 17} width={8} height={10}
              fill={B4_LIT.has(row * 2 + col) ? "rgba(128,153,255,0.45)" : "rgba(255,255,255,0.08)"} />
          )))}

          {/* Building 5 — left small */}
          <rect x="70" y="140" width="36" height="80" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
          {[0,1,2,3].map(row => [0,1].map(col => (
            <rect key={`b5-${row}-${col}`} x={74 + col * 14} y={144 + row * 17} width={9} height={10}
              fill={B5_LIT.has(row * 2 + col) ? "rgba(128,153,255,0.45)" : "rgba(255,255,255,0.08)"} />
          )))}

          {/* Road markings */}
          <line x1="40" y1="224" x2="260" y2="224" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="12 8" />
        </svg>
      </motion.div>

      {/* Floating chips */}
      <motion.div
        animate={{ opacity: [0.85, 1, 0.85], y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "5%", right: "2%", zIndex: 20 }}
      >
        <div style={{ width: 106, height: 106, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 10px 36px rgba(0,0,0,0.22)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <p style={{ color: "#001489", fontSize: 9, fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase" }}>DUBAI</p>
          <div style={{ width: 36, height: 1, background: "#001489", opacity: 0.22 }} />
          <p style={{ color: "#001489", fontSize: 7, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.55 }}>Freehold</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        style={{ position: "absolute", bottom: "8%", left: "3%", zIndex: 20 }}
      >
        <div style={{ width: 90, height: 90, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 8px 28px rgba(0,0,0,0.18)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 800, letterSpacing: "0.30em", textTransform: "uppercase" }}>PARIS</p>
          <div style={{ width: 28, height: 1, background: "#001489", opacity: 0.22 }} />
          <p style={{ color: "#001489", fontSize: 7, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5 }}>Immobilier</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.85, 1, 0.85], y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        style={{ position: "absolute", top: "28%", left: "1%", transform: "rotate(-8deg)", zIndex: 20 }}
      >
        <div style={{ padding: "12px 20px", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.18)" }}>
          <p style={{ color: "#001489", fontSize: 11, fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase" }}>REIT</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.80, 1, 0.80] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        style={{ position: "absolute", bottom: "28%", right: "1%", transform: "rotate(7deg)", zIndex: 20 }}
      >
        <div style={{ padding: "10px 16px", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
          <p style={{ color: "#001489", fontSize: 9, fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase" }}>Dev Finance</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{ width: 460, height: 130, borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.13)", transform: "rotateX(70deg)", top: "50%", left: "50%", marginTop: -65, marginLeft: -230 }}
      >
        <div style={{ position: "absolute", width: 8, height: 8, borderRadius: "50%", background: "#8099FF", top: -4, left: "50%", marginLeft: -4, boxShadow: "0 0 10px 3px rgba(128,153,255,0.7)" }} />
      </motion.div>
    </div>
  );
}

const SERVICES_EN = [
  { num: "01", title: "Property Acquisitions", description: "End-to-end legal support for residential and commercial property purchases in UAE freehold zones and across France — from SPA negotiation to title registration.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M8 34V18L20 8l12 10v16H8z" stroke="#8099FF" strokeWidth="1.5" strokeLinejoin="round"/><rect x="15" y="24" width="10" height="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/><line x1="20" y1="24" x2="20" y2="34" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/></svg>) },
  { num: "02", title: "Development Financing", description: "Structuring development finance transactions, mezzanine arrangements, construction loans, and security documentation for property development projects in UAE and France.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="6" y="22" width="8" height="12" stroke="#8099FF" strokeWidth="1.3"/><rect x="16" y="15" width="8" height="19" stroke="#8099FF" strokeWidth="1.3"/><rect x="26" y="8" width="8" height="26" stroke="#8099FF" strokeWidth="1.3"/><path d="M10 22l10-7 10-7" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" strokeLinecap="round"/></svg>) },
  { num: "03", title: "Commercial Leasing", description: "Drafting and negotiating commercial leases, tenancy agreements, RERA-compliant lease contracts in Dubai, and French bail commercial documentation for office, retail and industrial premises.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="8" y="6" width="24" height="30" stroke="#8099FF" strokeWidth="1.5"/><line x1="13" y1="14" x2="27" y2="14" stroke="rgba(255,255,255,0.28)" strokeWidth="1"/><line x1="13" y1="19" x2="27" y2="19" stroke="rgba(255,255,255,0.28)" strokeWidth="1"/><path d="M13 24l2 2 4-4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "04", title: "Real Estate Due Diligence", description: "Comprehensive title due diligence, regulatory searches, encumbrance checks, planning permission reviews, and environmental assessments for property acquisitions in both jurisdictions.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="18" cy="18" r="10" stroke="#8099FF" strokeWidth="1.5"/><path d="M26 26l6 6" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 18h8M18 14v8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round"/></svg>) },
  { num: "05", title: "REIT & Fund Structuring", description: "Legal structuring of real estate investment trusts, property funds, and co-investment vehicles — covering DFSA-regulated REITs and French SCPI, OPCI, and SIIC structures.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="13" stroke="#8099FF" strokeWidth="1.5"/><ellipse cx="20" cy="20" rx="6" ry="13" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><line x1="7" y1="20" x2="33" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><circle cx="20" cy="20" r="2.5" fill="rgba(255,255,255,0.7)"/></svg>) },
  { num: "06", title: "Joint Ventures & SPVs", description: "Structuring real estate joint ventures, co-development agreements, and special purpose vehicles for property investment — including waterfall mechanics and exit arrangements.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="14" cy="16" r="5" stroke="#8099FF" strokeWidth="1.4"/><circle cx="26" cy="16" r="5" stroke="#8099FF" strokeWidth="1.4"/><path d="M8 32c0-5 2.7-8 6-8h12c3.3 0 6 3 6 8" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round"/></svg>) },
  { num: "07", title: "Off-Plan & Pre-sale Contracts", description: "Advising buyers and developers on off-plan SPA review and negotiation, OQOOD registration compliance, escrow account requirements, and Trustee Account procedures in Dubai.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M8 6h16l8 8v20H8V6z" stroke="#8099FF" strokeWidth="1.5"/><path d="M24 6v8h8" stroke="#8099FF" strokeWidth="1.2"/><path d="M14 22l4 4 9-9" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "08", title: "Property Disputes", description: "Representation in real estate disputes before RERA, DLD, UAE courts, and French tribunaux — covering title disputes, construction defect claims, landlord-tenant conflicts, and investment disputes.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M20 5L7 10v10c0 9 5.5 14 13 17 7.5-3 13-8 13-17V10L20 5z" stroke="#8099FF" strokeWidth="1.5"/><path d="M14 20l4 4 9-9" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
];

const SERVICES_FR = [
  { num: "01", title: "Acquisitions Immobilières", description: "Accompagnement juridique complet pour les acquisitions résidentielles et commerciales dans les zones de pleine propriété des EAU et en France — de la négociation du compromis à l'enregistrement du titre." },
  { num: "02", title: "Financement de Promotions", description: "Structuration des financements de promotions immobilières, arrangements mezzanine, prêts construction et documentation de sûretés pour les projets de développement aux EAU et en France." },
  { num: "03", title: "Baux Commerciaux", description: "Rédaction et négociation de baux commerciaux, contrats de location conformes RERA à Dubaï, et documentation de bail commercial français pour locaux de bureaux, commerciaux et industriels." },
  { num: "04", title: "Due Diligence Immobilière", description: "Due diligence complète sur les titres, recherches réglementaires, vérification des charges, revue des permis de construire et évaluations environnementales pour les acquisitions." },
  { num: "05", title: "Structuration SIIC & Fonds", description: "Structuration juridique de sociétés d'investissement immobilier, fonds immobiliers et co-investissements — couvrant les REITs réglementés DFSA et les structures françaises SCPI, OPCI et SIIC." },
  { num: "06", title: "Joint-Ventures & SPV", description: "Structuration de joint-ventures immobilières, accords de co-développement et véhicules ad hoc pour l'investissement immobilier — y compris mécanismes de cascade et arrangements de sortie." },
  { num: "07", title: "Contrats sur Plan & Pré-vente", description: "Conseil aux acquéreurs et promoteurs sur la revue et négociation de SPA sur plan, conformité OQOOD, exigences de compte séquestre et procédures de compte Trustee à Dubaï." },
  { num: "08", title: "Litiges Immobiliers", description: "Représentation dans les litiges immobiliers devant le RERA, DLD, tribunaux des EAU et tribunaux français — couvrant litiges de titre, défauts de construction et conflits bailleur-locataire." },
];

const DIFFERENTIATORS_EN = [
  { label: "Boutique model", body: "Direct partner access on every mandate. No junior teams handling your property transaction without oversight." },
  { label: "Dual-market expertise", body: "Deep knowledge of UAE freehold law, RERA regulations, DIFC property frameworks, and French civil code real estate law." },
  { label: "Cross-border fluency", body: "Seamless handling of property transactions that span the Gulf and Europe, in English, French, and Arabic." },
  { label: "Commercial alignment", body: "We structure property deals to protect your investment position and facilitate smooth closings without unnecessary delays." },
];

const DIFFERENTIATORS_FR = [
  { label: "Modèle boutique", body: "Accès direct aux associés sur chaque mandat. Aucune équipe junior ne gère votre transaction immobilière sans supervision." },
  { label: "Expertise bimarché", body: "Connaissance approfondie du droit foncier des EAU, des réglementations RERA, des cadres immobiliers DIFC et du droit immobilier du code civil français." },
  { label: "Fluidité transfrontalière", body: "Gestion fluide des transactions immobilières qui s'étendent du Golfe à l'Europe, en anglais, français et arabe." },
  { label: "Alignement commercial", body: "Nous structurons les transactions immobilières pour protéger votre position d'investissement et faciliter des closings rapides." },
];

function RealEstatePropertyInner() {
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

      <section id="home" data-testid="realestate-hero" data-header-theme="dark" className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden pt-20">
        <img
          src={imgRealEstate}
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
                <span className="text-white text-[16px] tracking-[0.3em] uppercase font-medium">Real Estate & Property</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="font-heading text-white font-bold text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.06] tracking-tight mb-8">
                {tx.heroH1Line1}<br /><span className="text-white whitespace-nowrap">{tx.heroH1Line2}</span>
              </motion.h1>

              <motion.div initial={{ width: 0 }} animate={{ width: "64px" }} transition={{ delay: 0.8, duration: 0.7 }} className="h-[2px] bg-[#8099FF] mb-8" />

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="text-base leading-relaxed max-w-[500px] mb-10" style={{ color: "rgba(255,255,255,1)" }}>
                {tx.heroSub}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="flex flex-wrap gap-4 mb-14">
                <button onClick={() => setModalOpen(true)} data-testid="realestate-cta-primary" className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer">
                  <span>{tx.heroCta}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                </button>

                  <a href="#services" data-testid="realestate-cta-secondary" className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors">
                  {tx.heroSecondary}
                </a>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      <section id="overview" data-testid="realestate-overview" data-header-theme="light" className="bg-white px-8 py-24">
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

      <section id="services" data-testid="realestate-services" className="bg-[#001489] px-8 py-24">
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
                  <button onClick={() => setModalOpen(true)} className="text-[#8099FF] text-[10px] tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0">
                    {tx.hoverCta}<svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="realestate-differentiators" data-header-theme="light" className="bg-white px-8 py-24">
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

      <section data-testid="realestate-cta-banner" className="bg-[#001489] px-8 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <p className="text-white text-[11px] tracking-[0.35em] uppercase font-bold mb-4">{tx.bannerEyebrow}</p>
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
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} practiceArea="Real Estate & Property" />
    </div>
  );
}

export default function RealEstatePropertyPage() {
  return (
    <LanguageProvider>
      <RealEstatePropertyInner />
    </LanguageProvider>
  );
}
