import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

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
    stat2Val: "EN · FR · AR",  stat2Label: "Trilingual counsel",
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
    stat2Val: "EN · FR · AR",  stat2Label: "Conseil trilingue",
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

/* ─── 3D CORPORATE BRIEFCASE ────────────────────────────────────────────────── */

function Corporate3D() {
  return (
    <div className="relative flex items-center justify-center" style={{ perspective: "1100px" }}>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle at 50% 55%, rgba(128,153,255,0.55) 0%, transparent 65%)" }}
      />

      {/* Main briefcase body */}
      <motion.div
        animate={{ rotateY: [-18, -10, -18], rotateX: [7, 3, 7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-[210px] h-[168px]"
      >
        {/* Front face */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(145deg, #002090 0%, #001489 55%, #000A4F 100%)",
            boxShadow: "10px 20px 52px rgba(0,0,0,0.70), -4px 0 18px rgba(0,10,79,0.85), inset 1px 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Outer frame */}
          <div className="absolute inset-[9px] border border-[#8099FF]/40 pointer-events-none" />
          {/* Inner frame */}
          <div className="absolute inset-[14px] border border-[#8099FF]/18 pointer-events-none" />

          {/* Centre clasp line */}
          <div className="absolute left-[9px] right-[9px]" style={{ top: "50%", height: 1, background: "rgba(128,153,255,0.22)" }} />

          {/* Clasp icon — centred square */}
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              width: 18,
              height: 18,
              transform: "translate(-50%, -50%)",
              border: "1px solid rgba(128,153,255,0.55)",
              background: "rgba(0,20,137,0.9)",
            }}
          >
            <div className="absolute inset-[3px] border border-[#8099FF]/30" />
          </div>

          {/* Top-left MH */}
          <div className="absolute top-5 left-5 flex flex-col gap-1">
            <span className="font-heading text-[#8099FF] font-bold text-[11px] tracking-[0.30em]">MH</span>
            <div className="h-px w-6 bg-[#8099FF]/35" />
          </div>

          {/* Bottom-right label */}
          <div className="absolute bottom-4 right-5 text-right">
            <p className="text-[#8099FF]/55 text-[7px] tracking-[0.3em] uppercase font-medium">Corporate</p>
            <p className="text-white/25 text-[6px] tracking-[0.2em] uppercase mt-0.5">Law</p>
          </div>

          {/* Subtle grid texture on lower half */}
          <div
            className="absolute left-[9px] right-[9px] bottom-[9px] pointer-events-none opacity-[0.08]"
            style={{
              top: "calc(50% + 1px)",
              backgroundImage: "linear-gradient(rgba(128,153,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(128,153,255,1) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        {/* Right side edge — 3D depth */}
        <div
          className="absolute top-0 bottom-0 right-0"
          style={{
            width: 16,
            transform: "rotateY(90deg) translateZ(-2px)",
            transformOrigin: "right",
            background: "linear-gradient(to right, #000A4F, #001070)",
          }}
        />

        {/* Bottom edge — 3D depth */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: 12,
            transform: "rotateX(-90deg) translateZ(-2px)",
            transformOrigin: "bottom",
            background: "linear-gradient(to bottom, #00104A, #000A4F)",
          }}
        />
      </motion.div>

      {/* Handle on top — floats above briefcase */}
      <motion.div
        animate={{ rotateY: [-18, -10, -18], rotateX: [7, 3, 7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{ top: "calc(50% - 84px - 28px)", left: "50%", transform: "translateX(-50%)", width: 70, height: 28, borderTop: "2px solid rgba(128,153,255,0.5)", borderLeft: "2px solid rgba(128,153,255,0.5)", borderRight: "2px solid rgba(128,153,255,0.5)", borderRadius: "8px 8px 0 0" }}
      />

      {/* Floating badge: DUBAI (top-right) */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [-8, -5, -8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute"
        style={{ top: "8%", right: "4%" }}
      >
        <div
          className="w-[80px] h-[80px] rounded-full flex flex-col items-center justify-center"
          style={{
            border: "2px solid #8099FF",
            background: "rgba(0,20,137,0.92)",
            boxShadow: "0 4px 22px rgba(128,153,255,0.3)",
          }}
        >
          <p className="text-[#8099FF] text-[7px] font-bold tracking-[0.3em] uppercase">DUBAI</p>
          <div className="w-9 h-px bg-[#8099FF]/50 my-1" />
          <p className="text-white/70 text-[7px] tracking-[0.2em] uppercase">U.A.E.</p>
          <p className="text-white/35 text-[6px] tracking-wider mt-0.5">Gulf</p>
        </div>
      </motion.div>

      {/* Floating badge: PARIS (bottom-left) */}
      <motion.div
        animate={{ y: [5, -5, 5], rotate: [12, 8, 12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="absolute"
        style={{ bottom: "10%", left: "2%" }}
      >
        <div
          className="w-[68px] h-[68px] rounded-full flex flex-col items-center justify-center"
          style={{
            border: "2px solid rgba(255,255,255,0.28)",
            background: "rgba(0,16,112,0.88)",
            boxShadow: "0 4px 18px rgba(0,0,0,0.35)",
          }}
        >
          <p className="text-white/70 text-[6px] font-bold tracking-[0.25em] uppercase">PARIS</p>
          <div className="w-7 h-px bg-white/30 my-0.5" />
          <p className="text-white/50 text-[6px] tracking-[0.15em] uppercase">France</p>
        </div>
      </motion.div>

      {/* Floating chip: M&A — tilted */}
      <motion.div
        animate={{ opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{ top: "36%", left: "0%", transform: "rotate(-14deg)" }}
      >
        <div
          className="px-3 py-[5px]"
          style={{ border: "2px solid rgba(128,153,255,0.65)", boxShadow: "0 0 12px rgba(128,153,255,0.2)" }}
        >
          <p className="text-[#8099FF] text-[9px] font-bold tracking-[0.35em] uppercase">M&A</p>
        </div>
      </motion.div>

      {/* Floating chip: CORPORATE — tilted other way */}
      <motion.div
        animate={{ opacity: [1, 0.55, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute"
        style={{ bottom: "28%", right: "2%", transform: "rotate(10deg)" }}
      >
        <div
          className="px-2 py-[4px]"
          style={{ border: "1.5px solid rgba(255,255,255,0.2)", boxShadow: "0 0 8px rgba(0,0,0,0.3)" }}
        >
          <p className="text-white/45 text-[8px] font-semibold tracking-[0.3em] uppercase">Corporate</p>
        </div>
      </motion.div>
    </div>
  );
}

/* Orbital ring in blue */
function OrbitalRingBlue() {
  return (
    <motion.div
      animate={{ rotateZ: [0, 360] }}
      transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      className="absolute pointer-events-none"
      style={{
        top: "6%",
        right: "3%",
        width: 300,
        height: 100,
        borderRadius: "50%",
        border: "1px solid rgba(128,153,255,0.22)",
        transformStyle: "preserve-3d",
        transform: "rotateX(72deg)",
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: 9,
          height: 9,
          top: -4.5,
          left: "50%",
          marginLeft: -4.5,
          background: "#8099FF",
          boxShadow: "0 0 12px 3px rgba(128,153,255,0.55)",
        }}
      />
    </motion.div>
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

/* ─── INNER PAGE ────────────────────────────────────────────────────────────── */

function CorporateCommercialInner() {
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
    <div className="bg-[#000A4F] min-h-screen">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        data-testid="corporate-hero"
        data-header-theme="dark"
        className="relative min-h-screen bg-[#000A4F] flex items-center overflow-hidden pt-20"
      >
        {/* Mesh grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.032]"
          style={{
            backgroundImage: "linear-gradient(rgba(128,153,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(128,153,255,0.9) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial gradient overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0,20,137,0.65) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 30%, rgba(0,10,79,0.75) 0%, transparent 70%)",
          }}
        />

        <OrbitalRingBlue />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

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
                  className="flex items-center gap-2 text-[#8099FF] text-[10px] tracking-[0.3em] uppercase font-semibold hover:opacity-80 transition-opacity"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  {tx.breadcrumb}
                </a>
                <span className="text-white/20">·</span>
                <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-medium">Corporate & Commercial</span>
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
                <span className="text-[#8099FF]">{tx.heroH1Line2}</span>
              </motion.h1>

              {/* Rule */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "64px" }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="h-[2px] bg-[#8099FF] mb-8"
              />

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-white/58 text-base leading-relaxed max-w-[500px] mb-10"
                style={{ color: "rgba(255,255,255,0.58)" }}
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
                <a
                  href="/#contact"
                  data-testid="corporate-cta-primary"
                  className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors"
                >
                  <span>{tx.heroCta}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </a>
                <a
                  href="#services"
                  data-testid="corporate-cta-secondary"
                  className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors"
                >
                  {tx.heroSecondary}
                </a>
              </motion.div>

              {/* Stats strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
              >
                {[
                  { stat: tx.stat1Val, label: tx.stat1Label },
                  { stat: tx.stat2Val, label: tx.stat2Label },
                  { stat: tx.stat3Val, label: tx.stat3Label },
                ].map(s => (
                  <div key={s.label}>
                    <p className="font-heading text-white font-bold text-base leading-tight mb-1">{s.stat}</p>
                    <p className="text-white/40 text-[10px] tracking-wider uppercase">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: 3D Corporate Briefcase ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.5 }}
              className="relative hidden lg:flex items-center justify-center h-[480px]"
            >
              <Corporate3D />
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
          <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase">{tx.scroll}</span>
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
              <p className="text-[#8099FF] text-[11px] tracking-[0.35em] uppercase font-bold mb-5">{tx.overviewEyebrow}</p>
              <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-tight leading-tight mb-8">{tx.overviewH2}</h2>
              <div className="h-[2px] w-16 bg-[#001489]/30 mb-8" />
              <p className="text-[#001489]/65 text-base leading-[1.85] max-w-[58ch] mb-6">{tx.overviewP1}</p>
              <p className="text-[#001489]/65 text-base leading-[1.85] max-w-[58ch] mb-10">{tx.overviewP2}</p>
              <div className="flex flex-wrap gap-3">
                {tx.chips.map(chip => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 border border-[#001489]/15 text-[#001489] text-[11px] tracking-[0.18em] uppercase font-semibold px-4 py-2"
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

      {/* ── KEY SERVICES (dark navy) ──────────────────────────────────────── */}
      <section
        id="services"
        data-testid="corporate-services"
        className="bg-[#000A4F] px-8 py-24"
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[#8099FF] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">{tx.servicesEyebrow}</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-heading text-white font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">{tx.servicesH2}</h2>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">{tx.servicesSub}</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#001489]/50">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                data-testid={`service-card-${i}`}
                className="group bg-[#000A4F] p-8 flex flex-col hover:bg-[#001489] transition-colors duration-300"
              >
                <div className="w-10 h-10 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{svc.icon}</div>
                <p className="text-[#8099FF] text-[9px] tracking-[0.28em] uppercase font-bold mb-3">{svc.num}</p>
                <h3 className="font-heading text-white font-bold text-[1.05rem] leading-snug mb-4">{svc.title}</h3>
                <div className="h-px w-8 bg-[#8099FF]/35 mb-4 group-hover:bg-[#8099FF]/65 transition-colors" />
                <p className="text-white/48 text-sm leading-relaxed flex-1 group-hover:text-white/70 transition-colors" style={{ color: "rgba(255,255,255,0.48)" }}>{svc.description}</p>
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="/#contact" className="text-[#8099FF] text-[10px] tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    {tx.hoverCta}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
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
            <p className="text-[#8099FF] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">{tx.whyEyebrow}</p>
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
                <div className="w-8 h-8 border border-[#001489]/18 flex items-center justify-center mb-6 flex-shrink-0">
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
              <p className="text-[#8099FF] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">{tx.bannerEyebrow}</p>
              <h2 className="font-heading text-white font-bold text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight leading-tight mb-3">
                {tx.bannerH2}
              </h2>
              <p className="text-white/45 text-sm leading-relaxed max-w-[44ch]">{tx.bannerSub}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
            >
              <a
                href="/#contact"
                data-testid="banner-cta"
                className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors"
              >
                <span>{tx.bannerCta}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </a>
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
