import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "EN" | "FR";

const translations = {
  EN: {
    nav: {
      home: "Home",
      firm: "Our Firm",
      expertise: "Our Expertise",
      insights: "Publications & Insights",
      careers: "Careers",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Boutique Corporate Law",
      headline: ["Reason.", "Rigor.", "Resolution."],
      subheadline:
        "Milton Hobbs is a boutique corporate law firm delivering clear, composed, and commercially astute counsel. Bridging Europe and the GCC.",
      cta1: "Book a Consultation",
      cta2: "Contact Us",
      scroll: "Scroll",
    },
    diff: {
      eyebrow: "Why Milton Hobbs",
      headline: "Counsel built for complexity.",
      cards: [
        {
          title: "Boutique Model",
          description:
            "Direct partner access on every matter. No handoffs. No junior associates leading your file.",
        },
        {
          title: "Trilingual Fluency",
          description:
            "Seamless counsel in English, French, and Arabic — across jurisdictions and cultures.",
        },
        {
          title: "Cross-Border Expertise",
          description:
            "Specialist structuring for UAE ↔ France transactions, investments, and regulatory matters.",
        },
        {
          title: "European Savoir-Faire",
          description:
            "French legal rigour combined with deep Gulf market understanding and commercial pragmatism.",
        },
      ],
    },
    practices: {
      eyebrow: "Our Expertise",
      headline: "Practice areas.",
      subtext: "Across industries and borders, we provide precision-crafted legal strategies.",
      learnMore: "Learn more",
      items: [
        { title: "Corporate & Commercial", description: "Mergers, acquisitions, joint ventures, and complex commercial agreements across jurisdictions." },
        { title: "Real Estate & Property", description: "Transactional real estate, development projects, and cross-border property structuring." },
        { title: "Litigation & Dispute Resolution", description: "High-stakes commercial disputes with strategic clarity and tenacity." },
        { title: "Arbitration & Mediation", description: "International arbitration under ICC, DIAC, and LCIA rules. Neutral, strategic, decisive." },
        { title: "Employment & Labour", description: "UAE and French employment law, workforce structuring, and executive contracts." },
        { title: "Banking & Finance", description: "Financing structures, regulatory compliance, and cross-border capital flows." },
        { title: "Tax", description: "Corporate tax planning, VAT structuring, and international fiscal optimization." },
        { title: "Immigration", description: "UAE residency, investor visas, and mobility solutions for executives and their families." },
        { title: "Intellectual Property", description: "Brand protection, licensing, and IP strategy across GCC and European markets." },
        { title: "Technology & Startups", description: "Startup formation, term sheet negotiation, data privacy, and tech transactions." },
      ],
    },
    publications: {
      eyebrow: "Publications & Insights",
      headline: "Latest Thinking from Our Lawyers",
      viewAll: "View All Publications",
      readArticle: "Read Article",
    },
    insights: {
      eyebrow: "Publications & Insights",
      headline: "Thought leadership.",
      viewAll: "View all",
      read: "Read",
      articles: [
        {
          category: "Compliance",
          title: "Navigating Cross-Border Compliance in the Gulf",
          excerpt:
            "As GCC states refine their regulatory frameworks, multinational entities face an increasingly complex compliance landscape.",
          readTime: "7 min read",
          date: "February 2026",
        },
        {
          category: "Corporate",
          title: "The Future of Family Business Succession in the UAE",
          excerpt:
            "With new UAE family business legislation now in force, succession planning has entered a new era.",
          readTime: "9 min read",
          date: "January 2026",
        },
        {
          category: "Technology",
          title: "Digital Transformation & Data Privacy in the GCC",
          excerpt:
            "Data localisation requirements and the PDPL's implications for businesses operating across the UAE and Saudi Arabia.",
          readTime: "6 min read",
          date: "December 2025",
        },
        {
          category: "M&A",
          title: "Strategic M&A Structuring for 2026",
          excerpt:
            "Deal activity is reshaping the Gulf's corporate landscape. We explore structuring trends and cross-border due diligence.",
          readTime: "8 min read",
          date: "November 2025",
        },
      ],
    },
    footer: {
      tagline:
        "A boutique corporate law firm delivering clear, composed, and commercially astute counsel. Bridging Europe and the GCC.",
      email: "contact@miltonhobbs.com",
      phone: "+971 4 523 2421",
      dubaiLabel: "Dubai, UAE",
      dubaiAddr: ["Level 2, The Offices 1", "One Central", "Dubai World Trade Centre", "Dubai, UAE"],
      parisLabel: "Paris, France",
      parisAddr: ["11, Boulevard Sébastopol", "75001 Paris", "France"],
      privacy: "Privacy Policy",
      cookie: "Cookie Notice",
      copyright: `© ${new Date().getFullYear()} Milton Hobbs. All rights reserved.`,
      disclaimer:
        "The content of this website does not constitute legal advice and does not create an attorney-client relationship. All information is provided for general informational purposes only.",
    },
  },

  FR: {
    nav: {
      home: "Accueil",
      firm: "Notre Cabinet",
      expertise: "Notre Expertise",
      insights: "Publications & Perspectives",
      careers: "Carrières",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Cabinet d'Avocats d'Affaires",
      headline: ["Reason.", "Rigor.", "Resolution."],
      subheadline:
        "Milton Hobbs est un cabinet d'avocats boutique spécialisé en droit des affaires, délivrant des conseils clairs, posés et commercialement avisés. À la croisée de l'Europe et du CCG.",
      cta1: "Prendre Rendez-vous",
      cta2: "Nous Contacter",
      scroll: "Défiler",
    },
    diff: {
      eyebrow: "Pourquoi Milton Hobbs",
      headline: "Des conseils taillés pour la complexité.",
      cards: [
        {
          title: "Modèle Boutique",
          description:
            "Accès direct aux associés sur chaque dossier. Pas de sous-traitance. Pas de collaborateurs juniors à la tête de votre affaire.",
        },
        {
          title: "Maîtrise Trilingue",
          description:
            "Un conseil fluide en anglais, français et arabe — à travers les juridictions et les cultures.",
        },
        {
          title: "Expertise Transfrontalière",
          description:
            "Structuration spécialisée pour les transactions, investissements et dossiers réglementaires UAE ↔ France.",
        },
        {
          title: "Savoir-Faire Européen",
          description:
            "La rigueur juridique française alliée à une compréhension approfondie du marché du Golfe et à un pragmatisme commercial.",
        },
      ],
    },
    practices: {
      eyebrow: "Notre Expertise",
      headline: "Domaines d'expertise.",
      subtext: "À travers les secteurs et les frontières, nous élaborons des stratégies juridiques sur mesure.",
      learnMore: "En savoir plus",
      items: [
        { title: "Droit des Sociétés et Commercial", description: "Fusions, acquisitions, coentreprises et accords commerciaux complexes à travers les juridictions." },
        { title: "Immobilier et Patrimoine", description: "Transactions immobilières, projets de développement et structuration transfrontalière." },
        { title: "Contentieux et Litiges", description: "Litiges commerciaux à forts enjeux, menés avec clarté stratégique et détermination." },
        { title: "Arbitrage et Médiation", description: "Arbitrage international sous les règles CCI, DIAC et LCIA. Neutre, stratégique, décisif." },
        { title: "Droit du Travail", description: "Droit du travail aux EAU et en France, structuration des effectifs et contrats de cadres dirigeants." },
        { title: "Banque et Finance", description: "Structures de financement, conformité réglementaire et flux de capitaux transfrontaliers." },
        { title: "Fiscalité", description: "Planification fiscale des entreprises, structuration TVA et optimisation fiscale internationale." },
        { title: "Immigration", description: "Résidence aux EAU, visas investisseurs et solutions de mobilité pour les cadres et leurs familles." },
        { title: "Propriété Intellectuelle", description: "Protection des marques, licences et stratégie PI sur les marchés du CCG et européens." },
        { title: "Technologie & Startups", description: "Constitution de startups, négociation de term sheets, protection des données et transactions tech." },
      ],
    },
    publications: {
      eyebrow: "Publications & Perspectives",
      headline: "Les Dernières Réflexions de Nos Avocats",
      viewAll: "Voir Toutes les Publications",
      readArticle: "Lire l'Article",
    },
    insights: {
      eyebrow: "Publications & Perspectives",
      headline: "Réflexions d'experts.",
      viewAll: "Tout voir",
      read: "Lire",
      articles: [
        {
          category: "Conformité",
          title: "Naviguer dans la conformité transfrontalière dans le Golfe",
          excerpt:
            "À mesure que les États du CCG affinent leurs cadres réglementaires, les entités multinationales font face à un paysage de conformité de plus en plus complexe.",
          readTime: "7 min de lecture",
          date: "Février 2026",
        },
        {
          category: "Corporate",
          title: "L'avenir de la succession des entreprises familiales aux EAU",
          excerpt:
            "Avec la nouvelle législation émiratie sur les entreprises familiales désormais en vigueur, la planification successorale entre dans une nouvelle ère.",
          readTime: "9 min de lecture",
          date: "Janvier 2026",
        },
        {
          category: "Technologie",
          title: "Transformation numérique et protection des données dans le CCG",
          excerpt:
            "Les exigences de localisation des données et les implications de la PDPL pour les entreprises opérant aux EAU et en Arabie Saoudite.",
          readTime: "6 min de lecture",
          date: "Décembre 2025",
        },
        {
          category: "Fusions & Acquisitions",
          title: "Structuration stratégique des F&A pour 2026",
          excerpt:
            "L'activité transactionnelle remodèle le paysage corporate du Golfe. Tendances de structuration et due diligence transfrontalière.",
          readTime: "8 min de lecture",
          date: "Novembre 2025",
        },
      ],
    },
    footer: {
      tagline:
        "Un cabinet d'avocats boutique spécialisé en droit des affaires, délivrant des conseils clairs, posés et commercialement avisés. À la croisée de l'Europe et du CCG.",
      email: "contact@miltonhobbs.com",
      phone: "+971 4 523 2421",
      dubaiLabel: "Dubaï, Émirats Arabes Unis",
      dubaiAddr: ["Level 2, The Offices 1", "One Central", "Dubai World Trade Centre", "Dubaï, EAU"],
      parisLabel: "Paris, France",
      parisAddr: ["11, Boulevard Sébastopol", "75001 Paris", "France"],
      privacy: "Politique de Confidentialité",
      cookie: "Gestion des Cookies",
      copyright: `© ${new Date().getFullYear()} Milton Hobbs. Tous droits réservés.`,
      disclaimer:
        "Le contenu de ce site ne constitue pas un conseil juridique et ne crée pas de relation avocat-client. Toutes les informations sont fournies à titre informatif général uniquement.",
    },
  },
};

type Translations = typeof translations.EN;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
