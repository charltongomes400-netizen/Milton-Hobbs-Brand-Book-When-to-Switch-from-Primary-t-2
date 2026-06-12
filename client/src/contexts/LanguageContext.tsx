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
        "Boutique corporate law at the intersection of Europe and the Gulf — where European precision meets Gulf-market agility.",
      cta1: "Book a Consultation",
      cta2: "Contact Us",
      scroll: "Scroll",
    },
    diff: {
      eyebrow: "Why Milton Hobbs",
      headline: "Reason. Rigor. Resolution.",
      learnMore: "Speak to Us",
      cards: [
        {
          title: "Direct Partner Access",
          description:
            "The boutique model means your matter is handled at the highest level every time. No layered teams, no second-tier delegation. A senior advisor knows your business from the first conversation and stays close through resolution.",
        },
        {
          title: "Trilingual Fluency",
          description:
            "We work natively in English, French, and Arabic — drafting, negotiating, and advising in the language your matter requires. Cross-border deals demand more than translation; they demand fluency in the legal and commercial conventions of each jurisdiction. We bring both.",
        },
        {
          title: "Cross-Border Expertise",
          description:
            "Transactions and structures that span the UAE, France, the European Union, and the broader GCC are our home territory. We understand how French and EU corporate law speaks to Dubai's free-zone frameworks, and how Gulf-region regulatory shifts ripple back through European holdings.",
        },
        {
          title: "Client-First by Design",
          description:
            "Precision to complexity. Composure to challenge. A client-first mindset to every engagement. This is our brand promise — and it shapes how we structure our team, our communication, and our advice. You receive clear counsel, on time, with the discretion the matter deserves.",
        },
      ],
    },
    practices: {
      eyebrow: "Our Expertise",
      headline: "Practice Areas.",
      subtext: "Corporate counsel built around the realities of cross-border business — eight disciplines, one integrated team.",
      ctaEnquire: "Enquire",
      ctaViewPracticeArea: "View Practice Area",
      learnMore: "Learn More",
      items: [
        {
          slug: "corporate",
          title: "Corporate",
          description: "Corporate structuring, governance, and commercial transactions for companies operating across multiple jurisdictions. From entity formation in DIFC and ADGM to French SAS and SARL structures, we design corporate frameworks that work in practice — not only on paper.",
        },
        {
          slug: "tax-compliance",
          title: "Tax & Compliance",
          description: "Strategic international tax planning, regulatory compliance frameworks, and risk mitigation for corporations and high-net-worth individuals navigating UAE, French, and EU tax regimes.",
        },
        {
          slug: "mergers-acquisitions",
          title: "Mergers & Acquisitions",
          description: "End-to-end M&A counsel — from target identification and due diligence through structuring, negotiation, and post-closing integration. We advise on cross-border transactions where French, UAE, and GCC regulatory considerations intersect.",
        },
        {
          slug: "startups",
          title: "Startups",
          description: "Founder-side and investor-side counsel for early- and growth-stage companies — incorporation, shareholder agreements, fundraising, ESOPs, and the operational legal architecture that lets startups scale across the UAE, France, and beyond.",
        },
        {
          slug: "ip-tech",
          title: "IP & Tech",
          description: "Intellectual property strategy, technology contracting, and data protection counsel for businesses where IP is the core asset. Trademark and copyright protection, licensing, SaaS agreements, and compliance with UAE Personal Data Protection Law and EU GDPR.",
        },
        {
          slug: "real-estate",
          title: "Real Estate",
          description: "Commercial and residential real estate transactions, lease structuring, and property holding strategies across Dubai, Abu Dhabi, and France. Acquisition, disposal, and structuring of cross-border property portfolios for investors and operators.",
        },
        {
          slug: "employment",
          title: "Employment",
          description: "Employment counsel for employers and senior executives — drafting and negotiating contracts, advising on UAE Labour Law and French Code du travail, structuring international mobility, and managing terminations and disputes with discretion.",
        },
        {
          slug: "litigation",
          title: "Litigation",
          description: "Commercial litigation, arbitration, and dispute resolution before UAE courts, DIFC and ADGM courts, French jurisdictions, and major international arbitral institutions. We resolve disputes with the same composure we bring to deal-making.",
        },
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
      headline: "Latest Thinking from Our Lawyers",
      viewAll: "View All Publications",
      read: "Read Article",
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
    contact: {
      eyebrow: "Contact",
      headline: "Get in Touch.",
      subtext:
        "Whether you are structuring a cross-border transaction, entering a new market, or weighing a complex matter — start the conversation. A senior member of our team will respond within one business day.",
      namePlaceholder: "e.g. Sophie Martin",
      emailPlaceholder: "you@company.com",
      subjectPlaceholder: "Practice Area of Interest",
      subjectOptions: [
        "Corporate",
        "Tax & Compliance",
        "Mergers & Acquisitions",
        "Startups",
        "IP & Tech",
        "Real Estate",
        "Employment",
        "Litigation",
        "Other",
      ],
      messagePlaceholder: "Tell us briefly about your matter. We treat all enquiries in strict confidence.",
      submit: "Send Message",
      submitting: "Sending...",
      successTitle: "Message Sent",
      successText: "Thank you for contacting Milton Hobbs. Our team will review your enquiry and respond within one business day.",
      officeLabel: "Our Offices",
      dubaiLabel: "Dubai Office",
      parisLabel: "Paris Office",
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
        "Un cabinet d'avocats corporate boutique à l'intersection de l'Europe et du Golfe — où la précision européenne rencontre l'agilité du marché du Golfe.",
      cta1: "Prendre Rendez-vous",
      cta2: "Nous Contacter",
      scroll: "Défiler",
    },
    diff: {
      eyebrow: "Pourquoi Milton Hobbs",
      headline: "Raison. Rigueur. Résolution.",
      learnMore: "Nous contacter",
      cards: [
        {
          title: "Accès Direct à l'Associé",
          description:
            "Le modèle boutique garantit que votre dossier est traité au plus haut niveau — à chaque fois. Pas d'équipes superposées, pas de délégation à un échelon secondaire. Un conseiller senior comprend votre activité dès le premier échange et reste à vos côtés jusqu'à la résolution.",
        },
        {
          title: "Maîtrise Trilingue",
          description:
            "Nous travaillons nativement en anglais, en français et en arabe — rédaction, négociation et conseil dans la langue qu'exige votre dossier. Les opérations transfrontalières demandent plus qu'une traduction ; elles exigent une maîtrise des conventions juridiques et commerciales de chaque juridiction. Nous offrons les deux.",
        },
        {
          title: "Expertise Transfrontalière",
          description:
            "Les transactions et structures qui couvrent les Émirats arabes unis, la France, l'Union européenne et le CCG sont notre terrain de prédilection. Nous comprenons comment le droit des sociétés français et européen dialogue avec les régimes de zones franches de Dubaï, et comment les évolutions réglementaires du Golfe se répercutent sur les holdings européens.",
        },
        {
          title: "Le Client au Cœur de la Démarche",
          description:
            "De la précision face à la complexité. De la sérénité face aux défis. Un état d'esprit client-first dans chaque mission. Telle est notre promesse — et elle façonne la composition de nos équipes, notre communication et nos conseils. Vous recevez un conseil clair, livré à temps, avec la discrétion que le dossier exige.",
        },
      ],
    },
    practices: {
      eyebrow: "Notre Expertise",
      headline: "Domaines de Pratique.",
      subtext: "Un conseil corporate pensé pour les réalités du business transfrontalier — huit disciplines, une équipe intégrée.",
      ctaEnquire: "Nous Consulter",
      ctaViewPracticeArea: "Voir le Domaine",
      learnMore: "En savoir plus",
      items: [
        {
          slug: "corporate",
          title: "Droit des Sociétés",
          description: "Structuration, gouvernance et transactions commerciales pour les entreprises opérant dans plusieurs juridictions. De la création d'entités en DIFC et ADGM aux structures françaises SAS et SARL, nous concevons des architectures juridiques qui fonctionnent dans la pratique — et pas seulement sur le papier.",
        },
        {
          slug: "tax-compliance",
          title: "Fiscalité & Conformité",
          description: "Planification fiscale internationale stratégique, cadres de conformité réglementaire et atténuation des risques pour les entreprises et les particuliers à haut patrimoine évoluant entre les régimes fiscaux émirien, français et européen.",
        },
        {
          slug: "mergers-acquisitions",
          title: "Fusions & Acquisitions",
          description: "Conseil M&A de bout en bout — de l'identification des cibles et de la due diligence à la structuration, à la négociation et à l'intégration post-closing. Nous accompagnons les opérations transfrontalières où s'entrecroisent les exigences réglementaires françaises, émiriennes et du CCG.",
        },
        {
          slug: "startups",
          title: "Startups",
          description: "Conseil aux fondateurs et investisseurs pour les sociétés en amorçage et en croissance — constitution, pactes d'associés, levées de fonds, plans d'attribution d'actions, et l'architecture juridique opérationnelle qui permet aux startups de se déployer aux Émirats, en France et au-delà.",
        },
        {
          slug: "ip-tech",
          title: "Propriété Intellectuelle & Tech",
          description: "Stratégie de propriété intellectuelle, contractualisation technologique et conseil en protection des données pour les entreprises dont la PI constitue l'actif central. Protection des marques et droits d'auteur, licences, contrats SaaS, et conformité avec la loi émirienne sur les données personnelles et le RGPD.",
        },
        {
          slug: "real-estate",
          title: "Immobilier",
          description: "Transactions immobilières commerciales et résidentielles, structuration des baux et stratégies de détention de biens à Dubaï, Abou Dhabi et en France. Acquisition, cession et structuration de portefeuilles immobiliers transfrontaliers pour investisseurs et opérateurs.",
        },
        {
          slug: "employment",
          title: "Droit du Travail",
          description: "Conseil en droit social pour employeurs et cadres dirigeants — rédaction et négociation de contrats, conseil sur la loi émirienne du travail et le Code du travail français, structuration de la mobilité internationale, gestion des ruptures et contentieux avec discrétion.",
        },
        {
          slug: "litigation",
          title: "Contentieux",
          description: "Contentieux commercial, arbitrage et règlement des litiges devant les juridictions émiriennes, les tribunaux du DIFC et de l'ADGM, les juridictions françaises et les principales institutions d'arbitrage international. Nous résolvons les litiges avec la même sérénité que nous apportons aux transactions.",
        },
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
      headline: "Les Dernières Réflexions de Nos Avocats",
      viewAll: "Voir Toutes les Publications",
      read: "Lire l'Article",
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
    contact: {
      eyebrow: "Contact",
      headline: "Nous Contacter.",
      subtext:
        "Que vous structuriez une opération transfrontalière, prépariez l'entrée sur un nouveau marché ou évaluiez un dossier complexe — engagez la conversation. Un membre senior de notre équipe vous répondra sous un jour ouvré.",
      namePlaceholder: "ex. Sophie Martin",
      emailPlaceholder: "vous@entreprise.com",
      subjectPlaceholder: "Domaine de Pratique",
      subjectOptions: [
        "Droit des sociétés",
        "Fiscalité & Conformité",
        "Fusions & Acquisitions",
        "Startups",
        "PI & Tech",
        "Immobilier",
        "Droit du travail",
        "Contentieux",
        "Autre",
      ],
      messagePlaceholder: "Décrivez brièvement votre dossier. Toutes les demandes sont traitées en toute confidentialité.",
      submit: "Envoyer le Message",
      submitting: "Envoi en cours...",
      successTitle: "Message envoyé",
      successText: "Merci d'avoir contacté Milton Hobbs. Notre équipe examinera votre demande et reviendra vers vous sous un jour ouvré.",
      officeLabel: "Nos Bureaux",
      dubaiLabel: "Bureau Dubaï",
      parisLabel: "Bureau Paris",
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
