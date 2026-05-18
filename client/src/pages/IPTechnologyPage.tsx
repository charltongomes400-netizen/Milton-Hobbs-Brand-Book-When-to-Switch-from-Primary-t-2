import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactModal } from "@/components/ContactModal";
import imgIP from "@assets/optimized/phil-desforges-ow1mML1sOi0-unsplash_1776241615811.jpg";

/* ─── TRANSLATIONS ──────────────────────────────────────────────────────────── */

const PAGE_TEXT = {
  EN: {
    breadcrumb: "Our Expertise",
    heroH1Line1: "Protect what",
    heroH1Line2: "you create.",
    heroSub: "From patent filing and trademark registration to IP licensing, technology agreements, and cross-border enforcement — Milton Hobbs delivers precise, partner-led IP counsel across the UAE, France, and Europe.",
    heroCta: "Book a Consultation",
    heroSecondary: "View Services",
    stat1Val: "Dubai + Paris",  stat1Label: "Dual office presence",
    stat2Val: "EN · FR",       stat2Label: "Bilingual counsel",
    stat3Val: "Partner-led",   stat3Label: "Every mandate",
    scroll: "Scroll",
    overviewEyebrow: "Practice Overview",
    overviewH2: "IP protection built for the digital age.",
    overviewP1: "Milton Hobbs' IP & Technology practice advises innovators, technology companies, and creative enterprises on the full spectrum of intellectual property law. With offices in Dubai and Paris, the team is uniquely positioned to handle IP portfolios spanning both the GCC and EU jurisdictions — from initial registration through to enforcement and commercialisation.",
    overviewP2: "Our boutique model ensures every IP mandate receives direct partner attention. Clients range from early-stage startups protecting their first patent to multinationals managing global trademark portfolios and licensing complex technology across borders.",
    chips: ["Patents · Trademarks · Copyright", "GCC · EU Coverage", "Direct partner access"],
    overviewCardH: "Your IP, protected across every jurisdiction.",
    overviewDubai: "Dubai",  overviewDubaiSub: "Primary Office",
    overviewParis: "Paris",  overviewParisSub: "European Office",
    servicesEyebrow: "What We Do",
    servicesH2: "Our services.",
    servicesSub: "Comprehensive IP and technology legal advisory — from filing to enforcement and commercialisation.",
    hoverCta: "Enquire",
    whyEyebrow: "Why Milton Hobbs",
    whyH2: "What sets us apart.",
    bannerEyebrow: "Ready to protect your IP?",
    bannerH2: "Secure your intellectual assets today.",
    bannerSub: "Speak directly with a partner. Clear, commercially astute IP counsel from day one — no intermediaries, no delays.",
    bannerCta: "Book a Consultation",
  },
  FR: {
    breadcrumb: "Notre Expertise",
    heroH1Line1: "Protégez ce que",
    heroH1Line2: "vous créez.",
    heroSub: "Du dépôt de brevets à l'enregistrement des marques, en passant par la licence de PI, les accords technologiques et la mise en œuvre transfrontalière — Milton Hobbs délivre un conseil PI précis et piloté par les associés aux EAU, en France et en Europe.",
    heroCta: "Prendre Rendez-vous",
    heroSecondary: "Nos Services",
    stat1Val: "Dubaï + Paris",   stat1Label: "Double présence",
    stat2Val: "EN · FR",         stat2Label: "Conseil bilingue",
    stat3Val: "Associés directs", stat3Label: "Chaque mandat",
    scroll: "Défiler",
    overviewEyebrow: "Présentation du Département",
    overviewH2: "La protection de la PI à l'ère numérique.",
    overviewP1: "Le département PI & Technologie de Milton Hobbs conseille les innovateurs, entreprises technologiques et industries créatives sur l'ensemble du droit de la propriété intellectuelle. Avec des bureaux à Dubaï et Paris, l'équipe est idéalement placée pour gérer des portefeuilles de PI couvrant à la fois les juridictions du CCG et de l'UE — de l'enregistrement initial jusqu'à la mise en œuvre et la commercialisation.",
    overviewP2: "Notre modèle boutique garantit qu'un associé suit directement chaque mandat PI. Notre clientèle va des startups en phase de démarrage protégeant leur premier brevet aux multinationales gérant des portefeuilles de marques mondiales et accordant des licences de technologies complexes à l'international.",
    chips: ["Brevets · Marques · Droits d'auteur", "Couverture CCG · UE", "Accès direct aux associés"],
    overviewCardH: "Votre PI, protégée dans toutes les juridictions.",
    overviewDubai: "Dubaï",  overviewDubaiSub: "Bureau Principal",
    overviewParis: "Paris",  overviewParisSub: "Bureau Européen",
    servicesEyebrow: "Ce Que Nous Faisons",
    servicesH2: "Nos services.",
    servicesSub: "Conseil juridique PI et technologie complet — du dépôt à la mise en œuvre et la commercialisation.",
    hoverCta: "Nous Contacter",
    whyEyebrow: "Pourquoi Milton Hobbs",
    whyH2: "Ce qui nous distingue.",
    bannerEyebrow: "Prêt à protéger votre PI ?",
    bannerH2: "Sécurisez vos actifs intellectuels dès aujourd'hui.",
    bannerSub: "Parlez directement avec un associé. Un conseil PI clair et commercialement avisé dès le premier jour — sans intermédiaires, sans délais.",
    bannerCta: "Prendre Rendez-vous",
  },
};

/* ─── IP SHIELD NETWORK ILLUSTRATION ───────────────────────────────────────── */

/* Pulse dot traveling along a straight line from center outward */
function SpokeDot({ angle, delay, dur = 2.8 }: { angle: number; delay: number; dur?: number }) {
  const rad = (angle * Math.PI) / 180;
  const cx = 200, cy = 200, r = 118;
  const ex = cx + r * Math.cos(rad);
  const ey = cy + r * Math.sin(rad);
  const path = `M ${cx} ${cy} L ${ex} ${ey}`;
  return (
    <circle r="3" fill="#8099FF">
      <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" path={path} />
      <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.05;0.8;1"
        dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  );
}

/* Satellite node rendered as a positioned div */
function SatelliteNode({
  angle, dist, label, sublabel, delay,
}: { angle: number; dist: number; label: string; sublabel: string; delay: number }) {
  const rad = (angle * Math.PI) / 180;
  const cx = 50, cy = 50;
  const x = cx + dist * Math.cos(rad);
  const y = cy + dist * Math.sin(rad);
  return (
    <motion.div
      animate={{ opacity: [0.75, 1, 0.75], scale: [0.97, 1, 0.97] }}
      transition={{ duration: 4 + delay * 0.3, repeat: Infinity, ease: "easeInOut", delay }}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 20,
      }}
    >
      <div style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 100%)",
        backgroundColor: "#000A4F",
        border: "1px solid rgba(255,255,255,0.22)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.14)",
        padding: "10px 14px",
        minWidth: 88,
        textAlign: "center",
      }}>
        <p style={{ color: "#8099FF", fontSize: 7, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 4 }}>{sublabel}</p>
        <p style={{ color: "rgba(255,255,255,0.92)", fontSize: 9, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>{label}</p>
      </div>
    </motion.div>
  );
}

const SPOKE_ANGLES = [-60, 0, 60, 120, 180, 240];
const SATELLITES = [
  { angle: -60,  dist: 32, label: "Patent",    sublabel: "Filing",      delay: 0   },
  { angle: 0,    dist: 33, label: "Trademark",  sublabel: "Registry",    delay: 0.7 },
  { angle: 60,   dist: 32, label: "Licensing",  sublabel: "IP Deals",    delay: 1.4 },
  { angle: 120,  dist: 32, label: "Copyright",  sublabel: "Protection",  delay: 0.4 },
  { angle: 180,  dist: 33, label: "Technology", sublabel: "Agreements",  delay: 1.1 },
  { angle: 240,  dist: 32, label: "Enforcement",sublabel: "Cross-border",delay: 1.8 },
];

function IPNetworkScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">

      {/* Soft radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(128,153,255,0.10) 0%, transparent 70%)",
      }} />

      {/* ── SVG LAYER: spoke lines + animated dots + central node ── */}
      <svg
        className="absolute"
        style={{ width: "90%", height: "90%", top: "5%", left: "5%", overflow: "visible", zIndex: 10 }}
        viewBox="0 0 400 400"
        fill="none"
      >
        {/* Spoke lines from centre to each satellite */}
        {SPOKE_ANGLES.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 200, cy = 200, r = 118;
          return (
            <line
              key={i}
              x1={cx} y1={cy}
              x2={cx + r * Math.cos(rad)}
              y2={cy + r * Math.sin(rad)}
              stroke="rgba(128,153,255,0.18)"
              strokeWidth="1"
              strokeDasharray="3 6"
            />
          );
        })}

        {/* Outer ring */}
        <circle cx="200" cy="200" r="118" stroke="rgba(128,153,255,0.12)" strokeWidth="0.8" />

        {/* Mid ring */}
        <circle cx="200" cy="200" r="72" stroke="rgba(255,255,255,0.07)" strokeWidth="0.6" />

        {/* Animated pulse dots along each spoke */}
        {SPOKE_ANGLES.map((angle, i) => (
          <SpokeDot key={i} angle={angle} delay={i * 0.55} dur={2.6 + (i % 3) * 0.4} />
        ))}
        {/* Second wave — offset timing */}
        {SPOKE_ANGLES.map((angle, i) => (
          <SpokeDot key={`b${i}`} angle={angle} delay={1.3 + i * 0.55} dur={2.6 + (i % 3) * 0.4} />
        ))}

        {/* Central shield — outer ring pulse */}
        <circle cx="200" cy="200" stroke="#8099FF" strokeWidth="0.8" fill="none">
          <animate attributeName="r" values="28;36;28" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3.2s" repeatCount="indefinite" />
        </circle>

        {/* Central shield body */}
        <rect x="181" y="182" width="38" height="36" fill="#0A32C8" stroke="rgba(255,255,255,0.30)" strokeWidth="1"
          rx="1" />
        {/* Shield keyhole icon */}
        <circle cx="200" cy="194" r="5" stroke="rgba(255,255,255,0.80)" strokeWidth="1.2" fill="none" />
        <rect x="197.5" y="197" width="5" height="7" rx="0.5" fill="rgba(255,255,255,0.70)" />
        {/* Shield glow */}
        <rect x="181" y="182" width="38" height="36" rx="1" fill="rgba(128,153,255,0.08)" />

        {/* Rotating dashed ring around center */}
        <circle cx="200" cy="200" r="52" stroke="rgba(128,153,255,0.20)" strokeWidth="0.7" strokeDasharray="5 9"
          fill="none">
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="22s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="52" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="12 20"
          fill="none">
          <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="35s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* ── SATELLITE NODES (absolute positioned divs) ── */}
      {SATELLITES.map((s, i) => (
        <SatelliteNode key={i} {...s} />
      ))}

      {/* ── FLOATING CONTEXT CHIPS ── */}
      <motion.div
        animate={{ opacity: [0.80, 1, 0.80], y: [-4, 4, -4] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        style={{ position: "absolute", top: "4%", left: "18%", transform: "rotate(-5deg)", zIndex: 30 }}
      >
        <div style={{ padding: "9px 16px", border: "1.5px solid rgba(255,255,255,0.85)", background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.22)" }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>Patents</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.85, 1, 0.85], y: [5, -5, 5] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        style={{ position: "absolute", top: "4%", right: "10%", transform: "rotate(6deg)", zIndex: 30 }}
      >
        <div style={{ padding: "10px 18px", border: "1.5px solid rgba(255,255,255,0.85)", background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.22)" }}>
          <p style={{ color: "#001489", fontSize: 10, fontWeight: 800, letterSpacing: "0.30em", textTransform: "uppercase" }}>IP</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.78, 1, 0.78] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
        style={{ position: "absolute", bottom: "10%", right: "8%", transform: "rotate(8deg)", zIndex: 30 }}
      >
        <div style={{ padding: "9px 14px", border: "1.5px solid rgba(255,255,255,0.85)", background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>™ Trademark</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.78, 1, 0.78], y: [-3, 3, -3] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        style={{ position: "absolute", bottom: "10%", left: "8%", transform: "rotate(-7deg)", zIndex: 30 }}
      >
        <div style={{ padding: "9px 14px", border: "1.5px solid rgba(255,255,255,0.85)", background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}>
          <p style={{ color: "#001489", fontSize: 8, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>© Copyright</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── SERVICE DATA ──────────────────────────────────────────────────────────── */

const SERVICES_EN = [
  {
    num: "01",
    title: "Patent Filing & Prosecution",
    description: "Filing and prosecuting patent applications across UAE, French, European, and international (PCT) frameworks — from drafting through to grant and post-grant opposition.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="8" y="6" width="24" height="30" stroke="#8099FF" strokeWidth="1.5" />
        <line x1="13" y1="13" x2="27" y2="13" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
        <line x1="13" y1="18" x2="27" y2="18" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
        <line x1="13" y1="23" x2="20" y2="23" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <path d="M20 27l2 2 5-5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Trademark Registration",
    description: "Registering trademarks in the UAE, WIPO international register, EUIPO, and INPI — plus monitoring, opposition proceedings, and enforcement against infringement.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M20 6L8 11v9c0 8 5 13 12 16 7-3 12-8 12-16v-9L20 6z" stroke="#8099FF" strokeWidth="1.5" />
        <text x="20" y="25" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11" fontWeight="700" fontFamily="sans-serif">™</text>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Copyright Advisory",
    description: "Protecting creative and digital works — software, content, designs, and databases — across UAE copyright law and the Berne Convention framework, including registration and enforcement.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="13" stroke="#8099FF" strokeWidth="1.5" />
        <text x="20" y="25" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="13" fontWeight="700" fontFamily="sans-serif">©</text>
      </svg>
    ),
  },
  {
    num: "04",
    title: "IP Licensing & Commercialisation",
    description: "Drafting and negotiating IP licence agreements, franchise structures, and know-how transfer arrangements — including cross-border royalty frameworks compliant with UAE and French law.",
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
    num: "05",
    title: "Technology Agreements",
    description: "Drafting SaaS, software development, data sharing, cloud computing, and AI development agreements — with robust IP ownership, data protection, and liability provisions.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="6" y="10" width="28" height="18" rx="1" stroke="#8099FF" strokeWidth="1.5" />
        <line x1="6" y1="32" x2="34" y2="32" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="20" y1="28" x2="20" y2="32" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <path d="M13 18l3 3 3-3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 15l3 3-3 3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "IP Due Diligence",
    description: "Reviewing IP portfolios in the context of M&A, investment rounds, and joint ventures — assessing ownership chains, validity, encumbrances, and licensing risks.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="17" cy="17" r="9" stroke="#8099FF" strokeWidth="1.5" />
        <path d="M24 24l7 7" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 17h8M17 13v8" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Domain & Digital IP Protection",
    description: "Managing domain name disputes (UDRP/WIPO), social media IP enforcement, and anti-counterfeiting strategies across UAE and international digital platforms.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="13" stroke="#8099FF" strokeWidth="1.5" />
        <ellipse cx="20" cy="20" rx="6" ry="13" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="7" y1="20" x2="33" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <path d="M12 13c2 2 4 3 8 3s6-1 8-3" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="2.5" fill="rgba(255,255,255,0.7)" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Trade Secret Protection",
    description: "Drafting NDAs, confidentiality frameworks, and internal IP policies to safeguard trade secrets, proprietary algorithms, and commercially sensitive information.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="12" y="18" width="16" height="14" stroke="#8099FF" strokeWidth="1.5" />
        <path d="M15 18v-4a5 5 0 0110 0v4" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="24" r="2.5" fill="rgba(255,255,255,0.7)" />
        <line x1="20" y1="26.5" x2="20" y2="29" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const SERVICES_FR = [
  { num: "01", title: "Dépôt et Poursuite de Brevets", description: "Dépôt et poursuite de demandes de brevets dans les cadres des EAU, français, européen et international (PCT) — de la rédaction jusqu'à la délivrance et les oppositions post-délivrance." },
  { num: "02", title: "Enregistrement des Marques", description: "Enregistrement des marques aux EAU, au registre international OMPI, à l'EUIPO et à l'INPI — ainsi que surveillance, procédures d'opposition et mise en œuvre contre les contrefaçons." },
  { num: "03", title: "Conseil en Droits d'Auteur", description: "Protection des œuvres créatives et numériques — logiciels, contenus, designs et bases de données — dans le cadre du droit d'auteur des EAU et de la Convention de Berne, y compris l'enregistrement et la mise en œuvre." },
  { num: "04", title: "Licence et Commercialisation de PI", description: "Rédaction et négociation de contrats de licence PI, structures de franchise et accords de transfert de savoir-faire — incluant des cadres de redevances transfrontaliers conformes aux droits des EAU et français." },
  { num: "05", title: "Contrats Technologiques", description: "Rédaction de contrats SaaS, de développement logiciel, de partage de données, de cloud computing et de développement IA — avec des dispositions solides sur la propriété PI, la protection des données et la responsabilité." },
  { num: "06", title: "Due Diligence PI", description: "Examen des portefeuilles PI dans le contexte de F&A, tours de financement et joint-ventures — évaluation des chaînes de propriété, validité, charges et risques de licence." },
  { num: "07", title: "Protection de la PI Numérique", description: "Gestion des litiges de noms de domaine (UDRP/OMPI), mise en œuvre de la PI sur les réseaux sociaux et stratégies anti-contrefaçon sur les plateformes numériques des EAU et internationales." },
  { num: "08", title: "Protection des Secrets d'Affaires", description: "Rédaction de NDA, cadres de confidentialité et politiques PI internes pour protéger les secrets d'affaires, algorithmes propriétaires et informations commercialement sensibles." },
];

const DIFFERENTIATORS_EN = [
  { label: "Boutique model", body: "Every IP mandate handled with direct partner oversight. No junior teams managing your portfolio without senior guidance at every step." },
  { label: "Dual-jurisdiction filing", body: "Admitted to both the Paris Bar and the Dubai Legal Affairs Department — enabling seamless GCC and EU patent, trademark, and copyright filing." },
  { label: "Tech-sector fluency", body: "Deep knowledge of UAE, French, and European IP regimes, plus practical experience with SaaS, AI, fintech, and digital platform mandates." },
  { label: "Trilingual fluency", body: "English, French, and Arabic. We draft, negotiate, and enforce in the language of your counterparty and their jurisdiction." },
];

const DIFFERENTIATORS_FR = [
  { label: "Modèle boutique", body: "Chaque mandat PI géré sous supervision directe d'un associé. Aucune équipe junior ne prend en charge votre portefeuille sans guidance senior à chaque étape." },
  { label: "Dépôt double juridiction", body: "Admis au Barreau de Paris et auprès du Département des Affaires Juridiques de Dubaï — permettant un dépôt fluide de brevets, marques et droits d'auteur dans le CCG et l'UE." },
  { label: "Maîtrise du secteur tech", body: "Connaissance approfondie des régimes PI des EAU, français et européen, ainsi qu'une expérience pratique sur des mandats SaaS, IA, fintech et plateformes numériques." },
  { label: "Fluidité trilingue", body: "Anglais, français et arabe. Nous rédigeons, négocions et mettons en œuvre dans la langue de votre interlocuteur et de sa juridiction." },
];

/* ─── INNER PAGE ────────────────────────────────────────────────────────────── */

function IPTechnologyInner() {
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
        data-testid="ip-hero"
        data-header-theme="dark"
        className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden pt-20"
      >
        <img
          src={imgIP}
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
                  className="flex items-center gap-2 text-[#8099FF] text-[10px] tracking-[0.3em] uppercase font-semibold hover:opacity-80 transition-opacity"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  {tx.breadcrumb}
                </a>
                <span className="text-white/20">·</span>
                <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-medium">IP & Technology</span>
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
                className="h-[2px] bg-[#8099FF] mb-8"
              />

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-base leading-relaxed max-w-[500px] mb-10"
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
                <button
                  onClick={() => setModalOpen(true)}
                  data-testid="ip-cta-primary"
                  className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer"
                >
                  <span>{tx.heroCta}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
                <a
                  href="#services"
                  data-testid="ip-cta-secondary"
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
        data-testid="ip-overview"
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

      {/* ── KEY SERVICES ─────────────────────────────────────────────────── */}
      <section
        id="services"
        data-testid="ip-services"
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
            <p className="text-[#8099FF] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">{tx.servicesEyebrow}</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-heading text-white font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">{tx.servicesH2}</h2>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">{tx.servicesSub}</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                data-testid={`ip-service-card-${i}`}
                className="group bg-[#001489] p-8 flex flex-col hover:bg-[#0A32C8] transition-colors duration-300"
              >
                <div className="w-10 h-10 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{svc.icon}</div>
                <p className="text-[#8099FF] text-[9px] tracking-[0.28em] uppercase font-bold mb-3">{svc.num}</p>
                <h3 className="font-heading text-white font-bold text-[1.05rem] leading-snug mb-4">{svc.title}</h3>
                <div className="h-px w-8 bg-[#8099FF]/35 mb-4 group-hover:bg-[#8099FF]/65 transition-colors" />
                <p className="text-sm leading-relaxed flex-1 group-hover:text-white/70 transition-colors" style={{ color: "rgba(255,255,255,0.48)" }}>{svc.description}</p>
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => setModalOpen(true)} className="text-[#8099FF] text-[10px] tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0">
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
        data-testid="ip-differentiators"
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
            <p className="text-[#001489] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">{tx.whyEyebrow}</p>
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
                data-testid={`ip-differentiator-${i}`}
                className="bg-white p-8 flex flex-col"
              >
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

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section
        data-testid="ip-cta-banner"
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
              <p className="text-white text-[11px] tracking-[0.35em] uppercase font-bold mb-4">{tx.bannerEyebrow}</p>
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
              <button
                onClick={() => setModalOpen(true)}
                data-testid="ip-banner-cta"
                className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer"
              >
                <span>{tx.bannerCta}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </button>
              <a
                href="mailto:contact@miltonhobbs.com"
                data-testid="ip-banner-email"
                className="inline-flex items-center gap-3 border border-white/20 text-white/70 text-xs font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:border-white/40 hover:text-white transition-colors"
              >
                contact@miltonhobbs.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} practiceArea="IP & Technology" />
    </div>
  );
}

/* ─── PAGE WRAPPER ──────────────────────────────────────────────────────────── */

export default function IPTechnologyPage() {
  return (
    <LanguageProvider>
      <IPTechnologyInner />
    </LanguageProvider>
  );
}
