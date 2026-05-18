import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactModal } from "@/components/ContactModal";
import imgEmploy from "@assets/optimized/daniele-colucci-Xt48I3ps6Pg-unsplash_1776241615811.jpg";

const PAGE_TEXT = {
  EN: {
    breadcrumb: "Our Expertise",
    heroEyebrow: "Employment & Labor",
    heroH1Line1: "Protect your people.",
    heroH1Line2: "Manage risk with precision.",
    heroSub: "From employment contracts and executive compensation to workplace investigations and labor disputes — Milton Hobbs delivers partner-led employment counsel to employers and executives across UAE and French jurisdictions.",
    heroCta: "Book a Consultation",
    heroSecondary: "View Services",
    stat1Val: "Dubai + Paris", stat1Label: "Dual office presence",
    stat2Val: "EN · FR", stat2Label: "Bilingual counsel",
    stat3Val: "Partner-led", stat3Label: "Every mandate",
    scroll: "Scroll",
    overviewEyebrow: "Practice Overview",
    overviewH2: "Employment law built for employers and executives.",
    overviewP1: "Milton Hobbs' Employment & Labor practice advises multinationals, regional employers, and senior executives on the full spectrum of employment law matters across the UAE and France. From day-to-day HR compliance to complex cross-border restructurings, the team provides commercially astute, partner-led counsel.",
    overviewP2: "We understand the pressures on HR teams and management in complex labor environments. Whether advising on a mass layoff in the UAE or a sécurité sociale dispute in France, our approach is pragmatic, efficient, and always commercially aligned.",
    chips: ["UAE labor law expertise", "French droit du travail", "C-suite & board advisory"],
    overviewCardH: "Employment law across two jurisdictions.",
    overviewDubai: "Dubai", overviewDubaiSub: "Primary Office",
    overviewParis: "Paris", overviewParisSub: "European Office",
    servicesEyebrow: "What We Do",
    servicesH2: "Our services.",
    servicesSub: "Comprehensive employment and labor legal advisory for employers and executives across UAE and France.",
    hoverCta: "Enquire",
    whyEyebrow: "Why Milton Hobbs",
    whyH2: "What sets us apart.",
    bannerEyebrow: "Ready to proceed?",
    bannerH2: "Ready to manage your employment risk?",
    bannerSub: "Speak directly with a partner. No intermediaries, no delays — clear, commercially astute employment counsel from day one.",
    bannerCta: "Book a Consultation",
  },
  FR: {
    breadcrumb: "Notre Expertise",
    heroEyebrow: "Droit du Travail & Social",
    heroH1Line1: "Protéger vos collaborateurs.",
    heroH1Line2: "Gérer le risque avec précision.",
    heroSub: "Des contrats de travail et rémunérations des dirigeants aux enquêtes en milieu de travail et contentieux sociaux — Milton Hobbs délivre un conseil en droit du travail piloté par les associés.",
    heroCta: "Prendre Rendez-vous",
    heroSecondary: "Nos Services",
    stat1Val: "Dubaï + Paris", stat1Label: "Double présence",
    stat2Val: "EN · FR", stat2Label: "Conseil bilingue",
    stat3Val: "Associés directs", stat3Label: "Chaque mandat",
    scroll: "Défiler",
    overviewEyebrow: "Présentation du Département",
    overviewH2: "Droit du travail pour les employeurs et dirigeants.",
    overviewP1: "Le département Droit du Travail & Social de Milton Hobbs conseille les multinationales, les employeurs régionaux et les cadres dirigeants sur l'intégralité des questions de droit du travail aux EAU et en France.",
    overviewP2: "Nous comprenons les pressions pesant sur les équipes RH et la direction dans des environnements sociaux complexes. Qu'il s'agisse d'un plan de licenciements aux EAU ou d'un contentieux sécurité sociale en France, notre approche est pragmatique et commercialement alignée.",
    chips: ["Droit du travail EAU", "Droit social français", "Conseil dirigeants & CA"],
    overviewCardH: "Droit du travail dans deux juridictions.",
    overviewDubai: "Dubaï", overviewDubaiSub: "Bureau Principal",
    overviewParis: "Paris", overviewParisSub: "Bureau Européen",
    servicesEyebrow: "Ce Que Nous Faisons",
    servicesH2: "Nos services.",
    servicesSub: "Conseil juridique complet en droit du travail et social pour les employeurs et dirigeants aux EAU et en France.",
    hoverCta: "Nous Contacter",
    whyEyebrow: "Pourquoi Milton Hobbs",
    whyH2: "Ce qui nous distingue.",
    bannerEyebrow: "Prêt à avancer ?",
    bannerH2: "Prêt à gérer votre risque social ?",
    bannerSub: "Parlez directement avec un associé. Sans intermédiaires, sans délais — un conseil en droit du travail clair et commercialement avisé dès le premier jour.",
    bannerCta: "Prendre Rendez-vous",
  },
};

const SERVICES_EN = [
  { num: "01", title: "Employment Contracts", description: "Drafting and reviewing UAE labor contracts (MOHRE-compliant), fixed-term and unlimited contracts, French contrats de travail (CDI, CDD), and offer letter packages for senior hires.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="8" y="6" width="24" height="30" stroke="#8099FF" strokeWidth="1.5"/><line x1="13" y1="14" x2="27" y2="14" stroke="rgba(255,255,255,0.28)" strokeWidth="1"/><line x1="13" y1="19" x2="27" y2="19" stroke="rgba(255,255,255,0.28)" strokeWidth="1"/><path d="M13 25l2 2 4-4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "02", title: "Executive Compensation", description: "Structuring C-suite and board compensation packages — base, bonus, long-term incentive plans, equity participation, golden parachutes, and post-termination restrictions across UAE and France.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="14" r="6" stroke="#8099FF" strokeWidth="1.4"/><path d="M8 34c0-7 4-11 12-11s12 4 12 11" stroke="#8099FF" strokeWidth="1.3" strokeLinecap="round"/><path d="M26 10l2 2 4-4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "03", title: "Restructurings & Redundancies", description: "Managing workforce reductions, collective redundancy procedures, MOHRE consultations in UAE, PSE procedures in France, and settlement agreements for departing employees.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="14" y="6" width="12" height="8" stroke="#8099FF" strokeWidth="1.4"/><rect x="6" y="26" width="10" height="8" stroke="#8099FF" strokeWidth="1.3"/><rect x="24" y="26" width="10" height="8" stroke="#8099FF" strokeWidth="1.3"/><line x1="20" y1="14" x2="20" y2="20" stroke="rgba(255,255,255,0.22)" strokeWidth="1"/><line x1="20" y1="20" x2="11" y2="26" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/><line x1="20" y1="20" x2="29" y2="26" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/><circle cx="20" cy="20" r="2.5" fill="rgba(255,255,255,0.6)"/></svg>) },
  { num: "04", title: "HR Compliance & Policies", description: "Developing employment handbooks, disciplinary procedures, grievance policies, and ensuring compliance with UAE Labor Law, DIFC Employment Law, and French Code du Travail.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M20 5L7 10v10c0 9 5.5 14 13 17 7.5-3 13-8 13-17V10L20 5z" stroke="#8099FF" strokeWidth="1.5"/><path d="M14 20l4 4 9-9" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { num: "05", title: "Workplace Investigations", description: "Conducting and advising on internal workplace investigations — misconduct, harassment, discrimination, whistleblower complaints, and regulatory self-reporting in both jurisdictions.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="18" cy="18" r="10" stroke="#8099FF" strokeWidth="1.5"/><path d="M26 26l6 6" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 18h8M18 14v8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round"/></svg>) },
  { num: "06", title: "Non-Competes & Restrictive Covenants", description: "Drafting and enforcing post-employment restrictions — non-compete clauses, non-solicitation agreements, garden leave provisions, and confidentiality obligations under UAE and French law.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="10" y="16" width="20" height="16" stroke="#8099FF" strokeWidth="1.5"/><path d="M14 16v-4a6 6 0 0 1 12 0v4" stroke="#8099FF" strokeWidth="1.4" strokeLinecap="round"/><circle cx="20" cy="24" r="2.5" fill="rgba(255,255,255,0.7)"/><line x1="20" y1="26" x2="20" y2="29" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round"/></svg>) },
  { num: "07", title: "Labor Disputes & Litigation", description: "Representation before UAE labor courts, DIFC Employment Tribunal, ADGM courts, and French Conseil des Prud'hommes — unfair dismissal, discrimination claims, and employment arbitration.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M10 8h20v26H10z" stroke="#8099FF" strokeWidth="1.5"/><line x1="15" y1="15" x2="25" y2="15" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/><line x1="15" y1="19" x2="25" y2="19" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><line x1="15" y1="23" x2="20" y2="23" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/><path d="M8 34h24" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/></svg>) },
  { num: "08", title: "Cross-Border Employment", description: "Managing the employment law complexities of international assignments, secondments, expatriate packages, social security treaties, and posting of workers between UAE and France.", icon: (<svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="13" stroke="#8099FF" strokeWidth="1.5"/><ellipse cx="20" cy="20" rx="6" ry="13" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><line x1="7" y1="20" x2="33" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><circle cx="20" cy="20" r="2.5" fill="rgba(255,255,255,0.7)"/></svg>) },
];

const SERVICES_FR = [
  { num: "01", title: "Contrats de Travail", description: "Rédaction et révision de contrats de travail aux EAU (conformes MOHRE), contrats à durée déterminée et indéterminée, contrats français (CDI, CDD) et packages de lettres d'offre pour les cadres." },
  { num: "02", title: "Rémunération des Dirigeants", description: "Structuration des packages de rémunération pour les C-suite et conseils d'administration — base, bonus, plans d'incentive long terme, participation en capital, parachutes dorés et clauses post-emploi." },
  { num: "03", title: "Restructurations & Licenciements", description: "Gestion des réductions d'effectifs, procédures de licenciement collectif, consultations MOHRE aux EAU, procédures PSE en France et conventions de rupture pour les départs." },
  { num: "04", title: "Conformité RH & Politiques", description: "Élaboration de règlements intérieurs, procédures disciplinaires, politiques de réclamation et conformité avec le droit du travail des EAU, le droit de l'emploi DIFC et le Code du Travail français." },
  { num: "05", title: "Enquêtes en Milieu de Travail", description: "Conduite et conseil sur les enquêtes internes — fautes, harcèlement, discrimination, plaintes de lanceurs d'alerte et auto-déclarations réglementaires dans les deux juridictions." },
  { num: "06", title: "Clauses de Non-Concurrence", description: "Rédaction et mise en œuvre des restrictions post-emploi — clauses de non-concurrence, accords de non-sollicitation, garden leave et obligations de confidentialité selon le droit des EAU et français." },
  { num: "07", title: "Contentieux Social & Prud'hommes", description: "Représentation devant les tribunaux du travail des EAU, le Tribunal de l'Emploi DIFC, les tribunaux ADGM et le Conseil des Prud'hommes — licenciements abusifs, discriminations et arbitrage." },
  { num: "08", title: "Emploi Transfrontalier", description: "Gestion des complexités du droit du travail pour les missions internationales, détachements, packages d'expatriés, conventions de sécurité sociale et détachement de travailleurs entre EAU et France." },
];

const DIFFERENTIATORS_EN = [
  { label: "Boutique model", body: "Direct partner access on every employment mandate. Senior attention to every matter, regardless of size." },
  { label: "Dual-jurisdiction depth", body: "Genuine expertise in both UAE Labor Law (including DIFC and ADGM) and French droit du travail — rare in a single firm." },
  { label: "Employer & executive focus", body: "We advise both employers and senior executives, giving us a full understanding of both sides of the employment relationship." },
  { label: "Commercial pragmatism", body: "Employment disputes can distract from business. We aim to resolve matters quickly, discreetly, and commercially." },
];

const DIFFERENTIATORS_FR = [
  { label: "Modèle boutique", body: "Accès direct aux associés sur chaque mandat social. Attention senior à chaque dossier, quelle que soit sa taille." },
  { label: "Expertise double juridiction", body: "Véritable expertise en droit du travail des EAU (DIFC et ADGM inclus) et en droit social français — rare au sein d'un seul cabinet." },
  { label: "Focus employeurs & dirigeants", body: "Nous conseillons à la fois les employeurs et les cadres dirigeants, ce qui nous donne une compréhension complète des deux parties." },
  { label: "Pragmatisme commercial", body: "Les litiges sociaux peuvent distraire du business. Notre objectif est de résoudre les dossiers rapidement, discrètement et commercialement." },
];

const TILE_SZ = 150;
const GRID_COLS = [38, 49.5, 61, 72.5, 84];
const GRID_ROWS = [4,  22,   40, 58,   76];
const TILE_DEFS: [number, number, string, number, number][] = [
  [0, 0, "#001489", 22.0,  0.0],
  [3, 0, "#001050", 24.0,  6.0],
  [2, 1, "#001489", 20.0,  3.0],
  [3, 1, "#001050", 23.0,  9.0],
  [4, 2, "#001489", 21.0,  5.0],
  [1, 2, "#001050", 26.0, 12.0],
  [1, 3, "#001489", 22.0, 14.0],
  [3, 3, "#001050", 20.0,  7.0],
  [4, 4, "#001489", 24.0,  2.0],
];
const ACCENT_TILES = TILE_DEFS.map(([ci, ri, col, dur, delay]) => ({
  left:  `${GRID_COLS[ci]}%`,
  top:   `${GRID_ROWS[ri]}%`,
  col,
  dur,
  delay,
}));

function EmploymentLaborInner() {
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
      <section id="home" data-testid="employment-hero" data-header-theme="dark" className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden pt-20">

        {/* Full-bleed photo — multiply blends against #001489 bg */}
        <img
          src={imgEmploy}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ objectPosition: "center 30%", mixBlendMode: "multiply" }}
        />

        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "70%",
            background: "linear-gradient(to top, rgba(0,14,80,0.80) 0%, rgba(0,14,80,0.40) 45%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-20 w-full">
          <div className="grid lg:grid-cols-1 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-3 mb-8">
                <a href="/#expertise" className="flex items-center gap-2 text-white tracking-[0.3em] uppercase font-semibold hover:opacity-80 transition-opacity text-[16px]">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                  {tx.breadcrumb}
                </a>
                <span className="text-white/40">·</span>
                <span className="text-white tracking-[0.3em] uppercase font-medium text-[16px]">Employment & Labor</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="font-heading text-white font-bold text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.06] tracking-tight mb-8">
                {tx.heroH1Line1}<br /><span className="text-white whitespace-nowrap">{tx.heroH1Line2}</span>
              </motion.h1>

              <motion.div initial={{ width: 0 }} animate={{ width: "64px" }} transition={{ delay: 0.8, duration: 0.7 }} className="h-[2px] bg-white mb-8" />

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="text-base leading-relaxed max-w-[500px] mb-10" style={{ color: "rgba(255,255,255,1)" }}>
                {tx.heroSub}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="flex flex-wrap gap-4 mb-14">
                <button onClick={() => setModalOpen(true)} data-testid="employment-cta-primary" className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer">
                  <span>{tx.heroCta}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
                </button>

                  <a href="#services" data-testid="employment-cta-secondary" className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors">
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
      <section id="overview" data-testid="employment-overview" data-header-theme="light" className="bg-white px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <p className="tracking-[0.35em] uppercase font-bold mb-5 text-[#001489] text-[16px]">{tx.overviewEyebrow}</p>
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
                  <p className="text-[#001489]/40 text-[16px] tracking-wider uppercase mt-1.5">{tx.overviewDubaiSub}</p>
                </div>
                <div className="border border-[#001489]/12 p-6">
                  <p className="font-heading text-[#001489] font-bold text-xl">{tx.overviewParis}</p>
                  <p className="text-[#001489]/40 text-[16px] tracking-wider uppercase mt-1.5">{tx.overviewParisSub}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="services" data-testid="employment-services" className="bg-[#001489] px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-[#8099FF] tracking-[0.35em] uppercase font-bold mb-4 text-[16px]">{tx.servicesEyebrow}</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-heading text-white font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">{tx.servicesH2}</h2>
              <p className="text-white text-sm max-w-xs leading-relaxed">{tx.servicesSub}</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E9F5]">
            {services.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.06 }} data-testid={`service-card-${i}`} className="group bg-white p-8 flex flex-col hover:bg-[#001489] transition-colors duration-300">
                <p className="text-[#001489] text-[16px] tracking-[0.28em] uppercase font-bold mb-3 group-hover:text-white transition-colors">{svc.num}</p>
                <h3 className="font-heading text-[#001489] font-bold text-[1.05rem] leading-snug mb-4 group-hover:text-white transition-colors">{svc.title}</h3>
                <div className="h-px w-8 bg-[#001489]/20 mb-4 group-hover:bg-white/30 transition-colors" />
                <p className="text-sm leading-relaxed flex-1 text-[#001489]/70 group-hover:text-white/80 transition-colors">{svc.description}</p>
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
      <section data-testid="employment-differentiators" data-header-theme="light" className="bg-white px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-[#001489] tracking-[0.35em] uppercase font-bold mb-4 text-[16px]">{tx.whyEyebrow}</p>
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
      <section data-testid="employment-cta-banner" className="bg-[#001489] px-8 py-20">
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
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} practiceArea="Employment & Labor" />
    </div>
  );
}

export default function EmploymentLaborPage() {
  return (
    <LanguageProvider>
      <EmploymentLaborInner />
    </LanguageProvider>
  );
}
