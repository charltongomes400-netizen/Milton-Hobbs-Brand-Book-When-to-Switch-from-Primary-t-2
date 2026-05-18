import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactModal } from "@/components/ContactModal";
import imgStartups from "@assets/optimized/donny-jiang-42gFAgdIUC8-unsplash_1776241615811.jpg";

const PAGE_TEXT = {
  EN: {
    breadcrumb: "Our Expertise",
    heroEyebrow: "Startups & Venture Capital",
    heroH1Line1: "Build boldly.",
    heroH1Line2: "Scale with counsel.",
    heroSub: "From incorporation and seed rounds to Series A and venture fund formation — Milton Hobbs partners with founders and investors at every stage of the startup lifecycle across the UAE, France, and beyond.",
    heroCta: "Book a Consultation",
    heroSecondary: "View Services",
    stat1Val: "Dubai + Paris", stat1Label: "Dual office presence",
    stat2Val: "EN · FR", stat2Label: "Bilingual counsel",
    stat3Val: "Partner-led", stat3Label: "Every mandate",
    scroll: "Scroll",
    overviewEyebrow: "Practice Overview",
    overviewH2: "Counsel built for founders.",
    overviewP1: "Milton Hobbs' Startups & Venture Capital practice is designed for speed, clarity, and commercial alignment. We advise founders, accelerators, angels, and institutional venture funds on the full spectrum of startup legal needs — from day-one incorporation to growth-stage transactions.",
    overviewP2: "Our boutique model means founders get direct partner access without the overhead of large-firm structures. We understand cap tables, term sheets, and the pressures of fundraising timelines — and we move at startup speed.",
    chips: ["Founder-friendly counsel", "VC & angel rounds", "UAE + French ecosystems"],
    overviewCardH: "Startup law across two ecosystems.",
    overviewDubai: "Dubai", overviewDubaiSub: "Primary Office",
    overviewParis: "Paris", overviewParisSub: "European Office",
    servicesEyebrow: "What We Do",
    servicesH2: "Our services.",
    servicesSub: "Full-stack legal support for startups and venture investors across UAE and French jurisdictions.",
    hoverCta: "Enquire",
    whyEyebrow: "Why Milton Hobbs",
    whyH2: "What sets us apart.",
    bannerEyebrow: "Ready to proceed?",
    bannerH2: "Ready to raise your next round?",
    bannerSub: "Speak directly with a partner. No intermediaries, no delays — lean, founder-aligned legal counsel from day one.",
    bannerCta: "Book a Consultation",
  },
  FR: {
    breadcrumb: "Notre Expertise",
    heroEyebrow: "Startups & Capital-Risque",
    heroH1Line1: "Construire audacieusement.",
    heroH1Line2: "Croître avec conseil.",
    heroSub: "De la constitution et des tours d'amorçage aux Séries A et à la formation de fonds de capital-risque — Milton Hobbs accompagne les fondateurs et investisseurs à chaque étape du cycle de vie des startups.",
    heroCta: "Prendre Rendez-vous",
    heroSecondary: "Nos Services",
    stat1Val: "Dubaï + Paris", stat1Label: "Double présence",
    stat2Val: "EN · FR", stat2Label: "Conseil bilingue",
    stat3Val: "Associés directs", stat3Label: "Chaque mandat",
    scroll: "Défiler",
    overviewEyebrow: "Présentation du Département",
    overviewH2: "Un conseil conçu pour les fondateurs.",
    overviewP1: "Le département Startups & Capital-Risque de Milton Hobbs est conçu pour la rapidité, la clarté et l'alignement commercial. Nous conseillons les fondateurs, accélérateurs, business angels et fonds institutionnels de capital-risque sur l'ensemble des besoins juridiques des startups.",
    overviewP2: "Notre modèle boutique signifie que les fondateurs ont un accès direct aux associés sans les lourdeurs des grandes structures. Nous comprenons les tableaux de capitalisation, les term sheets et les pressions des délais de levée de fonds.",
    chips: ["Conseil adapté aux fondateurs", "Tours VC & business angels", "Écosystèmes EAU + France"],
    overviewCardH: "Droit des startups dans deux écosystèmes.",
    overviewDubai: "Dubaï", overviewDubaiSub: "Bureau Principal",
    overviewParis: "Paris", overviewParisSub: "Bureau Européen",
    servicesEyebrow: "Ce Que Nous Faisons",
    servicesH2: "Nos services.",
    servicesSub: "Accompagnement juridique complet pour les startups et investisseurs en capital-risque aux EAU et en France.",
    hoverCta: "Nous Contacter",
    whyEyebrow: "Pourquoi Milton Hobbs",
    whyH2: "Ce qui nous distingue.",
    bannerEyebrow: "Prêt à avancer ?",
    bannerH2: "Prêt à lever votre prochain tour ?",
    bannerSub: "Parlez directement avec un associé. Sans intermédiaires, sans délais — un conseil juridique agile et aligné sur les fondateurs dès le premier jour.",
    bannerCta: "Prendre Rendez-vous",
  },
};

function StartupsIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1400px" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 65% at 55% 48%, rgba(255,255,255,0.05) 0%, transparent 65%)" }} />

      {/* Growth chart base */}
      <motion.div
        animate={{ rotateY: [-10, 2, -10] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", position: "relative", zIndex: 10 }}
      >
        <svg width="260" height="200" viewBox="0 0 260 200" fill="none">
          {/* Grid lines */}
          <line x1="20" y1="170" x2="240" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="20" y1="130" x2="240" y2="130" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
          <line x1="20" y1="90" x2="240" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
          <line x1="20" y1="50" x2="240" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
          {/* Axes */}
          <line x1="20" y1="10" x2="20" y2="170" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
          <line x1="20" y1="170" x2="240" y2="170" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
          {/* Bars */}
          <rect x="35" y="140" width="28" height="30" fill="rgba(128,153,255,0.25)" stroke="#8099FF" strokeWidth="1" />
          <rect x="75" y="118" width="28" height="52" fill="rgba(128,153,255,0.28)" stroke="#8099FF" strokeWidth="1" />
          <rect x="115" y="92" width="28" height="78" fill="rgba(128,153,255,0.32)" stroke="#8099FF" strokeWidth="1" />
          <rect x="155" y="58" width="28" height="112" fill="rgba(128,153,255,0.38)" stroke="#8099FF" strokeWidth="1.2" />
          <rect x="195" y="24" width="28" height="146" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
          {/* Trend line */}
          <path d="M49 138 L89 116 L129 89 L169 55 L209 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3" />
          {/* Dots */}
          <circle cx="49" cy="138" r="3" fill="white" />
          <circle cx="89" cy="116" r="3" fill="white" />
          <circle cx="129" cy="89" r="3" fill="white" />
          <circle cx="169" cy="55" r="3" fill="white" />
          <circle cx="209" cy="22" r="4" fill="white" fillOpacity="0.9" />
        </svg>
      </motion.div>

      {/* Rocket icon */}
      <motion.div
        animate={{ y: [-12, 4, -12], rotate: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "5%", right: "8%", zIndex: 20 }}
      >
        <div style={{ width: 80, height: 80, border: "1.5px solid rgba(255,255,255,0.75)", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 4c0 0 8 4 8 14v2l-8 8-8-8v-2C10 8 18 4 18 4z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
            <circle cx="18" cy="16" r="3" stroke="white" strokeWidth="1.2" />
            <path d="M10 18l-4 4 2 2M26 18l4 4-2 2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.1" strokeLinecap="round" />
            <path d="M14 28l4 4 4-4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>

      {/* Floating label chips */}
      <motion.div
        animate={{ opacity: [0.85, 1, 0.85], y: [-5, 5, -5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ position: "absolute", top: "18%", left: "2%", transform: "rotate(-9deg)", zIndex: 20 }}
      >
        <div style={{ padding: "11px 18px", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
          <p style={{ color: "#001489", fontSize: 10, fontWeight: 800, letterSpacing: "0.30em", textTransform: "uppercase" }}>Series A</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.80, 1, 0.80], y: [4, -4, 4] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        style={{ position: "absolute", bottom: "15%", left: "4%", zIndex: 20 }}
      >
        <div style={{ padding: "10px 16px", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 3px 16px rgba(0,0,0,0.18)" }}>
          <p style={{ color: "#001489", fontSize: 9, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>Term Sheet</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        style={{ position: "absolute", top: "6%", left: "20%", zIndex: 20 }}
      >
        <div style={{ width: 100, height: 100, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <p style={{ color: "#001489", fontSize: 9, fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase" }}>DUBAI</p>
          <div style={{ width: 32, height: 1, background: "#001489", opacity: 0.22 }} />
          <p style={{ color: "#001489", fontSize: 7, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.5 }}>DIFC Hub71</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        style={{ position: "absolute", bottom: "6%", right: "5%", zIndex: 20 }}
      >
        <div style={{ width: 88, height: 88, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 8px 28px rgba(0,0,0,0.18)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 800, letterSpacing: "0.30em", textTransform: "uppercase" }}>PARIS</p>
          <div style={{ width: 28, height: 1, background: "#001489", opacity: 0.22 }} />
          <p style={{ color: "#001489", fontSize: 7, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.5 }}>La French Tech</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: "absolute", bottom: "30%", right: "2%", transform: "rotate(8deg)", zIndex: 20 }}
      >
        <div style={{ padding: "10px 16px", border: "1.5px solid rgba(255,255,255,0.9)", background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
          <p style={{ color: "#001489", fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>VC Fund</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{ width: 440, height: 130, borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.14)", transform: "rotateX(70deg)", top: "50%", left: "50%", marginTop: -65, marginLeft: -220 }}
      >
        <div style={{ position: "absolute", width: 8, height: 8, borderRadius: "50%", background: "#8099FF", top: -4, left: "50%", marginLeft: -4, boxShadow: "0 0 10px 3px rgba(128,153,255,0.7)" }} />
      </motion.div>
    </div>
  );
}

const SERVICES_EN = [
  { num: "01", title: "Company Incorporation", description: "Formation of UAE entities (mainland, DIFC, ADGM, free zones) and French companies (SAS, SARL, SA) — structure selection, constitutional documents, and regulatory registration.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="8" y="6" width="24" height="30" stroke="#8099FF" strokeWidth="1.5"/><line x1="13" y1="14" x2="27" y2="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/><line x1="13" y1="19" x2="27" y2="19" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><path d="M20 24l3 3 5-5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "02", title: "Seed & Pre-Seed Rounds", description: "Structuring and documenting early-stage financings — SAFEs, convertible notes, subscription agreements, investor rights, and cap table management.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="12" stroke="#8099FF" strokeWidth="1.5"/><path d="M20 14v6l4 4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" strokeLinecap="round"/><circle cx="20" cy="20" r="2.5" fill="rgba(255,255,255,0.7)"/></svg>) },
  { num: "03", title: "Series A–C Fundraising", description: "Term sheet negotiation, shareholder agreement drafting, due diligence coordination, and closing mechanics for institutional venture rounds across UAE and European markets.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="6" y="22" width="8" height="12" stroke="#8099FF" strokeWidth="1.3"/><rect x="16" y="15" width="8" height="19" stroke="#8099FF" strokeWidth="1.3"/><rect x="26" y="8" width="8" height="26" stroke="#8099FF" strokeWidth="1.3"/><path d="M10 22l10-7 10-7" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" strokeLinecap="round"/></svg>) },
  { num: "04", title: "Venture Fund Formation", description: "Establishment of VC and angel funds — fund structure selection (LP/GP, SPC, SCA), subscription documents, management agreements, and regulatory licensing.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="14" cy="16" r="5" stroke="#8099FF" strokeWidth="1.4"/><circle cx="26" cy="16" r="5" stroke="#8099FF" strokeWidth="1.4"/><path d="M8 32c0-5 2.7-8 6-8h12c3.3 0 6 3 6 8" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round"/><line x1="20" y1="21" x2="20" y2="32" stroke="rgba(255,255,255,0.4)" strokeWidth="1.1" strokeLinecap="round"/></svg>) },
  { num: "05", title: "Shareholder Agreements", description: "Founder agreements, vesting schedules, anti-dilution provisions, drag-along and tag-along rights, pre-emption mechanics, and exit waterfall structuring.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="6" y="10" width="28" height="22" stroke="#8099FF" strokeWidth="1.5"/><rect x="12" y="6" width="16" height="6" stroke="#8099FF" strokeWidth="1.2"/><line x1="12" y1="20" x2="28" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/><path d="M14 26l2 2 4-4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "06", title: "IP Assignment & Protection", description: "Ensuring all IP assets are properly assigned to the company at incorporation and through employment/contractor agreements — essential for investor due diligence.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="18" r="9" stroke="#8099FF" strokeWidth="1.5"/><path d="M16 18c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round"/><line x1="20" y1="22" x2="20" y2="26" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round"/><line x1="17" y1="26" x2="23" y2="26" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round"/></svg>) },
  { num: "07", title: "Employment & Equity Plans", description: "Founder employment agreements, ESOP/VSOP design, option pool creation, vesting schedules, and phantom equity plans for key employees in UAE and French entities.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="14" r="6" stroke="#8099FF" strokeWidth="1.4"/><path d="M8 34c0-7 4-11 12-11s12 4 12 11" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round"/><path d="M26 10l2 2 4-4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "08", title: "M&A & Exit Advisory", description: "Trade sale structuring, secondary sales, acqui-hire transactions, earn-out mechanisms, and founder liquidity arrangements in startup exits across GCC and European markets.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="13" cy="20" r="8" stroke="#8099FF" strokeWidth="1.5"/><circle cx="27" cy="20" r="8" stroke="#8099FF" strokeWidth="1.5"/><path d="M20 13v14" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/><line x1="20" y1="20" x2="26" y2="20" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" strokeLinecap="round"/><path d="M23 17l3 3-3 3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
];

const SERVICES_FR = [
  { num: "01", title: "Constitution de Sociétés", description: "Formation d'entités aux EAU (mainland, DIFC, ADGM, zones franches) et de sociétés françaises (SAS, SARL, SA) — sélection de la structure, documents constitutifs et enregistrement réglementaire." },
  { num: "02", title: "Tours d'Amorçage & Pré-Amorçage", description: "Structuration et documentation des financements en phase précoce — SAFEs, obligations convertibles, contrats de souscription, droits des investisseurs et gestion du tableau de capitalisation." },
  { num: "03", title: "Levées de Fonds Séries A–C", description: "Négociation de term sheets, rédaction de pactes d'actionnaires, coordination de la due diligence et mécanismes de closing pour les tours institutionnels de capital-risque." },
  { num: "04", title: "Formation de Fonds de Capital-Risque", description: "Création de fonds VC et business angel — sélection de la structure (LP/GP, SPC, SCA), documents de souscription, contrats de gestion et licences réglementaires." },
  { num: "05", title: "Pactes d'Actionnaires", description: "Accords fondateurs, calendriers de vesting, clauses anti-dilution, droits de drag-along et tag-along, mécanismes de préemption et structuration de la cascade de sortie." },
  { num: "06", title: "Cession & Protection de PI", description: "S'assurer que tous les actifs de PI sont correctement cédés à la société lors de la constitution et via les contrats de travail et de prestataires — essentiel pour la due diligence des investisseurs." },
  { num: "07", title: "Emploi & Plans d'Équité", description: "Contrats d'emploi des fondateurs, conception d'ESOP/VSOP, création de pool d'options, calendriers de vesting et plans d'équité fantôme pour les employés clés." },
  { num: "08", title: "F&A & Conseil à la Sortie", description: "Structuration des cessions, ventes secondaires, acquisitions de talents, mécanismes d'earn-out et liquidité des fondateurs lors des sorties de startups dans le CCG et les marchés européens." },
];

const DIFFERENTIATORS_EN = [
  { label: "Startup speed", body: "We understand fundraising deadlines. Our team moves at founder speed without compromising on legal rigour." },
  { label: "Dual-ecosystem access", body: "Deep networks in both the Dubai (DIFC, Hub71) and Paris (Station F, Bpifrance) startup ecosystems." },
  { label: "Founder-first mindset", body: "Our counsel is always commercially aligned with founders' interests — not just defensive legal advice." },
  { label: "Partner-led attention", body: "Every startup mandate receives direct partner involvement. No matter how early the stage." },
];

const DIFFERENTIATORS_FR = [
  { label: "Rapidité startup", body: "Nous comprenons les délais de levée de fonds. Notre équipe avance à la vitesse des fondateurs sans compromettre la rigueur juridique." },
  { label: "Accès aux deux écosystèmes", body: "Réseaux étendus dans les écosystèmes startup de Dubaï (DIFC, Hub71) et de Paris (Station F, Bpifrance)." },
  { label: "Mindset fondateur d'abord", body: "Notre conseil est toujours aligné commercialement avec les intérêts des fondateurs — pas seulement un conseil juridique défensif." },
  { label: "Attention des associés", body: "Chaque mandat startup bénéficie d'une implication directe des associés. Quelle que soit la phase." },
];

function StartupsVentureCapitalInner() {
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

      <section id="home" data-testid="startups-hero" data-header-theme="dark" className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden pt-20">
        <img
          src={imgStartups}
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
                <span className="text-white text-[16px] tracking-[0.3em] uppercase font-medium">Startups & Venture Capital</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="font-heading text-white font-bold text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.06] tracking-tight mb-8">
                {tx.heroH1Line1}<br /><span className="text-white whitespace-nowrap">{tx.heroH1Line2}</span>
              </motion.h1>

              <motion.div initial={{ width: 0 }} animate={{ width: "64px" }} transition={{ delay: 0.8, duration: 0.7 }} className="h-[2px] bg-white mb-8" />

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="text-base leading-relaxed max-w-[500px] mb-10" style={{ color: "rgba(255,255,255,1)" }}>
                {tx.heroSub}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="flex flex-wrap gap-4 mb-14">
                <button onClick={() => setModalOpen(true)} data-testid="startups-cta-primary" className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer">
                  <span>{tx.heroCta}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                </button>

                  <a href="#services" data-testid="startups-cta-secondary" className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors">
                  {tx.heroSecondary}
                </a>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      <section id="overview" data-testid="startups-overview" data-header-theme="light" className="bg-white px-8 py-24">
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

      <section id="services" data-testid="startups-services" className="bg-[#001489] px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-[#8099FF] text-[16px] tracking-[0.35em] uppercase font-bold mb-4">{tx.servicesEyebrow}</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-heading text-white font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">{tx.servicesH2}</h2>
              <p className="text-white text-sm max-w-xs leading-relaxed">{tx.servicesSub}</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {services.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.06 }} data-testid={`service-card-${i}`} className="group bg-[#001489] p-8 flex flex-col hover:bg-[#0A32C8] transition-colors duration-300">
                <div className="w-10 h-10 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{svc.icon}</div>
                <p className="text-[#8099FF] text-[9px] tracking-[0.28em] uppercase font-bold mb-3">{svc.num}</p>
                <h3 className="font-heading text-white font-bold text-[1.05rem] leading-snug mb-4">{svc.title}</h3>
                <div className="h-px w-8 bg-[#8099FF]/35 mb-4 group-hover:bg-[#8099FF]/65 transition-colors" />
                <p className="text-sm leading-relaxed flex-1 group-hover:text-white/70 transition-colors" style={{ color: "rgba(255,255,255,1)" }}>{svc.description}</p>
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

      <section data-testid="startups-differentiators" data-header-theme="light" className="bg-white px-8 py-24">
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

      <section data-testid="startups-cta-banner" className="bg-[#001489] px-8 py-20">
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
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} practiceArea="Startups & Venture Capital" />
    </div>
  );
}

export default function StartupsVentureCapitalPage() {
  return (
    <LanguageProvider>
      <StartupsVentureCapitalInner />
    </LanguageProvider>
  );
}
