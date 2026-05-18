import type { Lang } from "@/contexts/LanguageContext";

export interface BilingualString {
  en: string;
  fr: string;
}

export interface InsightCard {
  category: BilingualString;
  readMin: number;
  title: BilingualString;
  date: BilingualString;
  slug: string;
  slugFr: string;
  cta: BilingualString;
}

export interface ArticleSection {
  h2: BilingualString;
  paragraphs: BilingualString[];
  pullQuote: BilingualString | null;
}

export interface InsightArticle {
  slug: string;
  slugFr: string;
  category: BilingualString;
  practiceArea: string;
  readMin: number;
  date: BilingualString;
  author: { name: string; title: BilingualString };
  meta: {
    en: { title: string; description: string; ogTitle: string; ogDescription: string };
    fr: { title: string; description: string; ogTitle: string; ogDescription: string };
  };
  title: BilingualString;
  lead: BilingualString;
  sections: ArticleSection[];
  callout: { eyebrow: BilingualString; bullets: BilingualString[] };
  sidebar: {
    eyebrow: BilingualString;
    heading: BilingualString;
    body: BilingualString;
    cta: BilingualString;
  };
  expertCounselCta: {
    eyebrow: BilingualString;
    heading: BilingualString;
    body: BilingualString;
    cta: BilingualString;
  };
}

export interface InsightsCopy {
  indexPage: {
    meta: {
      en: { title: string; description: string; keywords: string; ogTitle: string; ogDescription: string };
      fr: { title: string; description: string; keywords: string; ogTitle: string; ogDescription: string };
    };
    hero: { eyebrow: BilingualString; h1: BilingualString; subheadline: BilingualString };
    cards: InsightCard[];
    speakWithPartner: { eyebrow: BilingualString; heading: BilingualString; cta: BilingualString };
  };
  footer: {
    tagline: BilingualString;
    description: BilingualString;
    navigation: { label: BilingualString; items: BilingualString[] };
    practiceAreas: { label: BilingualString; items: BilingualString[] };
    contact: {
      label: BilingualString;
      email: string;
      phones: { label: BilingualString; value: string }[];
      social: string[];
    };
    legal: BilingualString[];
    copyright: BilingualString;
  };
  articles: InsightArticle[];
}

export const insightsCopy: InsightsCopy = {
  indexPage: {
    meta: {
      en: {
        title: "Publications & Insights | Milton Hobbs",
        description: "Partner-authored analysis on corporate law, M&A, compliance, IP, and emerging legal issues across the UAE, France, and beyond.",
        keywords: "Milton Hobbs insights, UAE corporate law analysis, GCC compliance updates, Dubai M&A insights, French law firm publications",
        ogTitle: "Publications & Insights — Milton Hobbs",
        ogDescription: "Latest thinking from our lawyers. Partner-authored analysis on the legal issues shaping cross-border business.",
      },
      fr: {
        title: "Publications & Analyses | Milton Hobbs",
        description: "Analyses signées par nos associés sur le droit corporate, les M&A, la conformité, la PI et les évolutions juridiques aux Émirats arabes unis, en France et au-delà.",
        keywords: "publications Milton Hobbs, analyse droit corporate Émirats, actualités conformité CCG, M&A Dubaï, publications cabinet français",
        ogTitle: "Publications & Analyses — Milton Hobbs",
        ogDescription: "Les dernières analyses de nos avocats sur les sujets juridiques qui façonnent le business transfrontalier.",
      },
    },
    hero: {
      eyebrow: { en: "PUBLICATIONS & INSIGHTS", fr: "PUBLICATIONS & ANALYSES" },
      h1: { en: "Latest thinking from our lawyers.", fr: "Les dernières analyses de nos avocats." },
      subheadline: {
        en: "Partner-authored analysis on corporate law, M&A, compliance, IP, and emerging legal issues across the UAE, France, and beyond.",
        fr: "Analyses signées par nos associés sur le droit corporate, les M&A, la conformité, la propriété intellectuelle et les évolutions juridiques aux Émirats arabes unis, en France et au-delà.",
      },
    },
    cards: [
      {
        category: { en: "COMPLIANCE", fr: "CONFORMITÉ" },
        readMin: 7,
        title: { en: "Navigating Cross-Border Compliance in the Gulf", fr: "Naviguer dans la conformité transfrontalière dans le Golfe" },
        date: { en: "May 2026", fr: "Mai 2026" },
        slug: "navigating-cross-border-compliance-gulf",
        slugFr: "conformite-transfrontaliere-golfe",
        cta: { en: "Read", fr: "Lire" },
      },
      {
        category: { en: "CORPORATE", fr: "DROIT DES SOCIÉTÉS" },
        readMin: 9,
        title: { en: "The Future of Family Business Succession in the UAE", fr: "L'avenir de la transmission des entreprises familiales aux Émirats" },
        date: { en: "May 2026", fr: "Mai 2026" },
        slug: "family-business-succession-uae",
        slugFr: "transmission-entreprises-familiales-emirats",
        cta: { en: "Read", fr: "Lire" },
      },
      {
        category: { en: "TECHNOLOGY", fr: "TECHNOLOGIE" },
        readMin: 6,
        title: { en: "Digital Transformation & Data Privacy in the GCC", fr: "Transformation numérique et protection des données dans le CCG" },
        date: { en: "May 2026", fr: "Mai 2026" },
        slug: "digital-transformation-data-privacy-gcc",
        slugFr: "transformation-numerique-donnees-ccg",
        cta: { en: "Read", fr: "Lire" },
      },
      {
        category: { en: "M&A", fr: "M&A" },
        readMin: 8,
        title: { en: "Strategic M&A Structuring for 2026", fr: "Structuration M&A stratégique pour 2026" },
        date: { en: "May 2026", fr: "Mai 2026" },
        slug: "strategic-ma-structuring-2026",
        slugFr: "structuration-ma-strategique-2026",
        cta: { en: "Read", fr: "Lire" },
      },
    ],
    speakWithPartner: {
      eyebrow: { en: "SPEAK WITH A PARTNER", fr: "ÉCHANGER AVEC UN ASSOCIÉ" },
      heading: {
        en: "Every publication reflects lived experience on complex matters. Discuss yours directly with a partner.",
        fr: "Chaque publication reflète une expérience concrète sur des dossiers complexes. Échangez du vôtre directement avec un associé.",
      },
      cta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
    },
  },

  footer: {
    tagline: { en: "REASON  ·  RIGOR  ·  RESOLUTION", fr: "RAISON  ·  RIGUEUR  ·  RÉSOLUTION" },
    description: {
      en: "A boutique international law firm headquartered in Dubai, with offices in Paris.",
      fr: "Un cabinet d'avocats international boutique, basé à Dubaï, avec des bureaux à Paris.",
    },
    navigation: {
      label: { en: "NAVIGATION", fr: "NAVIGATION" },
      items: [
        { en: "Home", fr: "Accueil" },
        { en: "Our Firm", fr: "Notre Cabinet" },
        { en: "Our Expertise", fr: "Notre Expertise" },
        { en: "Publications & Insights", fr: "Publications & Analyses" },
        { en: "Careers", fr: "Carrières" },
        { en: "Contact", fr: "Contact" },
      ],
    },
    practiceAreas: {
      label: { en: "PRACTICE AREAS", fr: "DOMAINES DE PRATIQUE" },
      items: [
        { en: "Corporate & Commercial", fr: "Droit des Sociétés & Commercial" },
        { en: "Tax & Compliance", fr: "Fiscalité & Conformité" },
        { en: "Mergers & Acquisitions", fr: "Fusions & Acquisitions" },
        { en: "Startups & Venture Capital", fr: "Startups & Capital-Risque" },
        { en: "IP & Technology", fr: "PI & Technologie" },
        { en: "Real Estate & Property", fr: "Immobilier & Patrimoine" },
        { en: "Employment & Labor", fr: "Droit du Travail & Social" },
        { en: "Litigation & Disputes", fr: "Contentieux & Litiges" },
      ],
    },
    contact: {
      label: { en: "CONTACT", fr: "CONTACT" },
      email: "contact@miltonhobbs.com",
      phones: [
        { label: { en: "Dubai", fr: "Dubaï" }, value: "+971 4 523 2421" },
        { label: { en: "Paris", fr: "Paris" }, value: "+33 1 80 27 00 67" },
      ],
      social: ["Instagram", "LinkedIn", "WhatsApp"],
    },
    legal: [
      { en: "Privacy Policy", fr: "Politique de Confidentialité" },
      { en: "Cookie Notice", fr: "Avis sur les Cookies" },
      { en: "Terms of Use", fr: "Conditions d'Utilisation" },
      { en: "Not Legal Advice", fr: "Avertissement Juridique" },
    ],
    copyright: { en: "© 2026 Milton Hobbs. All rights reserved.", fr: "© 2026 Milton Hobbs. Tous droits réservés." },
  },

  articles: [
    {
      slug: "navigating-cross-border-compliance-gulf",
      slugFr: "conformite-transfrontaliere-golfe",
      category: { en: "COMPLIANCE", fr: "CONFORMITÉ" },
      practiceArea: "Tax & Compliance",
      readMin: 7,
      date: { en: "May 2026", fr: "Mai 2026" },
      author: { name: "Milton Hobbs", title: { en: "Senior Partner, Dubai", fr: "Associé Senior, Dubaï" } },
      meta: {
        en: {
          title: "Navigating Cross-Border Compliance in the Gulf | Milton Hobbs",
          description: "As GCC states refine their regulatory frameworks at pace, multinational entities face a compliance landscape that no longer rewards a reactive approach. Partner analysis on AML/CFT, data localisation, and sector licensing.",
          ogTitle: "Navigating Cross-Border Compliance in the Gulf",
          ogDescription: "As GCC states refine their regulatory frameworks at pace, multinational entities face a compliance landscape that no longer rewards a reactive approach.",
        },
        fr: {
          title: "Naviguer dans la conformité transfrontalière dans le Golfe | Milton Hobbs",
          description: "À mesure que les États du CCG affinent leurs cadres réglementaires, les groupes multinationaux font face à un paysage de conformité qui ne récompense plus l'approche réactive.",
          ogTitle: "Naviguer dans la conformité transfrontalière dans le Golfe",
          ogDescription: "À mesure que les États du CCG affinent leurs cadres réglementaires, les groupes multinationaux font face à un paysage de conformité qui ne récompense plus l'approche réactive.",
        },
      },
      title: { en: "Navigating Cross-Border Compliance in the Gulf", fr: "Naviguer dans la conformité transfrontalière dans le Golfe" },
      lead: {
        en: "As GCC states refine their regulatory frameworks at pace, multinational entities operating across the Gulf face a compliance landscape that no longer rewards a reactive approach. The convergence of enhanced AML/CFT obligations, data localisation requirements, and sector-specific licensing regimes demands structured, anticipatory counsel.",
        fr: "À mesure que les États du CCG affinent leurs cadres réglementaires à un rythme soutenu, les groupes multinationaux opérant dans le Golfe sont confrontés à un paysage de conformité qui ne récompense plus l'approche réactive. La convergence des obligations LAB/FT renforcées, des exigences de localisation des données et des régimes de licences sectorielles appelle un conseil structuré et anticipatoire.",
      },
      sections: [
        {
          h2: { en: "The New Regulatory Baseline in the GCC", fr: "Le nouveau socle réglementaire dans le CCG" },
          paragraphs: [
            {
              en: "The UAE, Saudi Arabia, and Qatar have each undergone significant legislative reform over the past 36 months. The UAE's Economic Substance Regulations, its Beneficial Ownership framework, and the introduction of corporate income tax in June 2023 represent a fundamental shift — the Gulf is no longer a low-regulation environment. For businesses structured to take advantage of historical opacity, the reckoning is now.",
              fr: "Les Émirats arabes unis, l'Arabie saoudite et le Qatar ont chacun engagé des réformes législatives majeures au cours des trente-six derniers mois. Les Economic Substance Regulations émiriennes, le cadre des Bénéficiaires Effectifs et l'introduction de l'impôt sur les sociétés en juin 2023 marquent un basculement structurel — le Golfe n'est plus un environnement faiblement régulé. Pour les structures construites sur l'opacité historique, l'heure des comptes est venue.",
            },
            {
              en: "Saudi Arabia's PDPL (Personal Data Protection Law), which came into force in 2023, mirrors many elements of the GDPR while introducing local obligations around data processing consent and cross-border transfers. Entities operating across KSA and UAE now face a dual compliance obligation, each with distinct enforcement mechanisms and regulator expectations.",
              fr: "La PDPL saoudienne (Personal Data Protection Law), entrée en vigueur en 2023, reprend de nombreux éléments du RGPD tout en imposant des obligations locales sur le consentement au traitement et les transferts transfrontaliers. Les entités opérant à la fois en Arabie saoudite et aux Émirats arabes unis font désormais face à une double obligation de conformité, chacune assortie de mécanismes d'exécution et d'attentes régulatoires propres.",
            },
          ],
          pullQuote: null,
        },
        {
          h2: { en: "Key Risk Areas for Multinational Entities", fr: "Zones de risque clés pour les groupes multinationaux" },
          paragraphs: [
            {
              en: "Our experience advising multinational clients entering the Gulf identifies three consistent pressure points: beneficial ownership disclosure and ultimate beneficial owner (UBO) registry obligations; the interplay between free zone licensing regimes and mainland commercial activities; and the application of Ministerial Decisions governing related-party transactions for tax purposes.",
              fr: "Notre pratique auprès des groupes multinationaux entrant dans le Golfe identifie trois points de tension récurrents : les obligations de déclaration de propriété effective et d'inscription au registre des bénéficiaires effectifs (UBO) ; l'articulation entre les régimes de licences en zone franche et l'activité commerciale en mainland ; et l'application des Décisions Ministérielles régissant les transactions entre parties liées au plan fiscal.",
            },
          ],
          pullQuote: {
            en: "The days of regulatory arbitrage in the Gulf are over. The question for corporate counsel is no longer whether to comply, but how to build compliance into the architecture of the business itself.",
            fr: "L'ère de l'arbitrage réglementaire dans le Golfe est révolue. Pour le conseil corporate, la question n'est plus de savoir s'il faut se conformer, mais comment intégrer la conformité dans l'architecture même de l'entreprise.",
          },
        },
        {
          h2: { en: "Structuring for Compliance: Practical Considerations", fr: "Structurer pour la conformité : considérations pratiques" },
          paragraphs: [
            {
              en: "For entities considering entry or restructuring, the choice between free zone and mainland presence carries direct compliance implications beyond the licensing level. Certain free zones — ADGM and DIFC particularly — operate under their own legal frameworks, creating an additional layer of regulatory jurisdiction. Businesses with substantive operations in both zones and on the mainland must map their obligations carefully across each.",
              fr: "Pour les entités préparant une implantation ou une restructuration, le choix entre la zone franche et le mainland emporte des implications de conformité qui dépassent le simple plan licensing. Certaines zones franches — l'ADGM et le DIFC notamment — opèrent sous leur propre cadre juridique, créant une couche additionnelle de juridiction réglementaire. Les entreprises dont l'activité substantielle s'étend aux deux zones et au mainland doivent cartographier précisément leurs obligations dans chacun.",
            },
            {
              en: "In cross-border transactions involving GCC parties, due diligence processes should now routinely include a compliance posture assessment — examining the target entity's regulatory filings, UBO disclosures, and its standing with sector regulators. Gaps identified post-transaction are substantially more costly to remedy than those surfaced during structuring.",
              fr: "Dans les opérations transfrontalières impliquant des parties du CCG, les processus de due diligence doivent désormais inclure un examen systématique de la posture de conformité — déclarations réglementaires, divulgation des UBO et tenue de relation avec les régulateurs sectoriels. Les manquements identifiés après closing coûtent significativement plus cher à corriger que ceux décelés en phase de structuration.",
            },
          ],
          pullQuote: null,
        },
      ],
      callout: {
        eyebrow: { en: "WHAT COUNSEL SHOULD ADDRESS IN EVERY GCC ENGAGEMENT", fr: "CE QUE LE CONSEIL DOIT TRAITER DANS CHAQUE MISSION CCG" },
        bullets: [
          { en: "UBO registration status and accuracy across all jurisdictions of operation", fr: "Statut et exactitude de l'inscription UBO dans toutes les juridictions d'activité" },
          { en: "Substance requirements — physical presence, qualified staff, core income-generating activities", fr: "Exigences de substance — présence physique, personnel qualifié, activités génératrices de revenus principales" },
          { en: "Data processing agreements and cross-border transfer mechanisms under applicable PDPL regimes", fr: "Accords de traitement de données et mécanismes de transfert transfrontalier dans le cadre des régimes PDPL applicables" },
          { en: "VAT and corporate tax registration obligations and intercompany pricing documentation", fr: "Obligations d'enregistrement à la TVA et à l'impôt sur les sociétés, documentation des prix de transfert intra-groupe" },
          { en: "Sector-specific licensing alignment, particularly for financial services, healthcare, and logistics", fr: "Alignement des licences sectorielles, en particulier pour les services financiers, la santé et la logistique" },
        ],
      },
      sidebar: {
        eyebrow: { en: "IN THIS ARTICLE", fr: "DANS CET ARTICLE" },
        heading: { en: "Discuss this matter with our team", fr: "Échangez avec notre équipe sur ce sujet" },
        body: { en: "Our partners are available for a confidential discussion.", fr: "Nos associés sont disponibles pour un échange confidentiel." },
        cta: { en: "Get in Touch", fr: "Nous Contacter" },
      },
      expertCounselCta: {
        eyebrow: { en: "EXPERT COUNSEL", fr: "CONSEIL D'EXPERT" },
        heading: { en: "Need expert counsel on this matter?", fr: "Besoin d'un conseil d'expert sur ce sujet ?" },
        body: { en: "Our partners are available for a confidential discussion across our Dubai and Paris offices.", fr: "Nos associés sont à votre disposition pour un échange confidentiel entre nos bureaux de Dubaï et de Paris." },
        cta: { en: "Speak to a Partner", fr: "Échanger avec un Associé" },
      },
    },
    {
      slug: "family-business-succession-uae",
      slugFr: "transmission-entreprises-familiales-emirats",
      category: { en: "CORPORATE", fr: "DROIT DES SOCIÉTÉS" },
      practiceArea: "Corporate",
      readMin: 9,
      date: { en: "May 2026", fr: "Mai 2026" },
      author: { name: "Milton Hobbs", title: { en: "Senior Partner, Dubai", fr: "Associé Senior, Dubaï" } },
      meta: {
        en: {
          title: "The Future of Family Business Succession in the UAE | Milton Hobbs",
          description: "New UAE succession frameworks, foundation structures, and DIFC/ADGM trusts are reshaping how Gulf family businesses prepare for generational transition.",
          ogTitle: "The Future of Family Business Succession in the UAE",
          ogDescription: "New UAE succession frameworks, foundation structures, and DIFC/ADGM trusts are reshaping how Gulf family businesses prepare for generational transition.",
        },
        fr: {
          title: "L'avenir de la transmission des entreprises familiales aux Émirats | Milton Hobbs",
          description: "Les nouveaux cadres successoraux des Émirats, les fondations et les trusts du DIFC et de l'ADGM redéfinissent la préparation à la transition générationnelle.",
          ogTitle: "L'avenir de la transmission des entreprises familiales aux Émirats",
          ogDescription: "Les nouveaux cadres successoraux des Émirats, les fondations et les trusts du DIFC et de l'ADGM redéfinissent la préparation à la transition générationnelle.",
        },
      },
      title: { en: "The Future of Family Business Succession in the UAE", fr: "L'avenir de la transmission des entreprises familiales aux Émirats" },
      lead: {
        en: "UAE family businesses are approaching a generational inflection point. As founder-led groups prepare to pass control to second and third generations, the legal architecture supporting succession has changed faster than most family offices have absorbed. Federal Decree-Law on Family Business, the establishment of DIFC and ADGM foundation regimes, and renewed enforcement of inheritance rules now demand a structured, multi-jurisdictional approach to what was historically managed in private.",
        fr: "Les entreprises familiales émiriennes approchent d'un point d'inflexion générationnel. Au moment où les groupes dirigés par leurs fondateurs préparent le passage de relais aux deuxième et troisième générations, l'architecture juridique de la transmission a évolué plus rapidement que la plupart des family offices ne l'ont intégré. Le décret-loi fédéral sur les entreprises familiales, la mise en place des régimes de fondations au DIFC et à l'ADGM, et le renforcement de l'application des règles successorales appellent désormais une approche structurée et multi-juridictionnelle de ce qui se gérait jusqu'ici en cercle privé.",
      },
      sections: [
        {
          h2: { en: "The Regulatory Shift", fr: "La transformation réglementaire" },
          paragraphs: [
            {
              en: "UAE Federal Decree-Law No. 37 of 2022 on Family Businesses introduced — for the first time — a dedicated statutory framework for family-owned enterprises. The law recognises the family business as a distinct legal construct, permits a specific category of family business shares, and provides governance scaffolding intended to professionalise the transition from founder control to institutional management. For groups that historically operated under informal succession arrangements, the shift is profound.",
              fr: "Le décret-loi fédéral n° 37 de 2022 sur les entreprises familiales a instauré, pour la première fois, un cadre légal dédié aux groupes familiaux. La loi reconnaît l'entreprise familiale comme construction juridique distincte, autorise une catégorie spécifique de parts d'entreprise familiale et organise une gouvernance destinée à professionnaliser la transition entre la direction du fondateur et la gestion institutionnelle. Pour les groupes longtemps régis par des accords successoraux informels, le basculement est profond.",
            },
            {
              en: "In parallel, the DIFC Foundation Law and the ADGM Foundation Regulations have created onshore vehicles that perform many of the functions previously achieved only through offshore trust structures. A foundation is a legal person — it can hold shares, contract in its own name, and outlive its founder — but it remains subject to a written constitution that sets out succession, distribution, and governance. The combination of statutory family-business protections and foundation vehicles changes the toolkit available to UAE founders.",
              fr: "En parallèle, le DIFC Foundation Law et les ADGM Foundation Regulations ont créé des véhicules onshore qui remplissent désormais bon nombre des fonctions auparavant réservées aux structures de trust offshore. Une fondation est une personne morale — elle peut détenir des parts, contracter en son nom, et survivre à son fondateur — tout en restant soumise à une constitution écrite qui fixe la succession, la distribution et la gouvernance. La combinaison des protections statutaires et des véhicules de fondation transforme l'arsenal disponible pour les fondateurs émiriens.",
            },
          ],
          pullQuote: null,
        },
        {
          h2: { en: "Common Succession Pitfalls", fr: "Écueils récurrents de la transmission" },
          paragraphs: [
            {
              en: "Three patterns recur in family-business succession failures we have observed. The first is treating succession as a discrete event rather than a multi-year process — second-generation leaders introduced to the business in the final two years of the founder's tenure rarely have the institutional standing to lead the group when control transfers. The second is the absence of a written shareholders' agreement governing what happens at the founder's death, divorce, incapacity, or chosen exit. The third is jurisdictional drift: assets accumulated across the UAE, Saudi Arabia, Switzerland, and the UK held under arrangements that no longer reflect the family's current tax residency or the regulators' current expectations.",
              fr: "Trois schémas reviennent dans les échecs de transmission familiale que nous observons. Le premier consiste à traiter la transmission comme un événement isolé plutôt que comme un processus pluriannuel — les dirigeants de deuxième génération introduits dans le groupe durant les deux dernières années du fondateur disposent rarement de l'autorité institutionnelle nécessaire au moment du transfert. Le deuxième est l'absence d'un pacte d'associés écrit qui régit le décès, le divorce, l'incapacité ou la sortie volontaire du fondateur. Le troisième est la dérive juridictionnelle : des actifs accumulés entre les Émirats, l'Arabie saoudite, la Suisse et le Royaume-Uni, détenus dans des structures qui ne reflètent plus la résidence fiscale actuelle de la famille ni les attentes actuelles des régulateurs.",
            },
            {
              en: "Each of these is solvable in advance. Each becomes substantially more expensive — financially and reputationally — to resolve under pressure.",
              fr: "Chacun de ces écueils peut se traiter en amont. Chacun devient nettement plus coûteux — financièrement et en termes de réputation — lorsqu'il faut le résoudre dans l'urgence.",
            },
          ],
          pullQuote: {
            en: "The family business that survives the second generation is rarely the one with the largest balance sheet. It is the one whose founder treated governance with the same seriousness as growth.",
            fr: "L'entreprise familiale qui survit à la deuxième génération n'est presque jamais celle qui présente le plus gros bilan. C'est celle dont le fondateur a traité la gouvernance avec la même rigueur que la croissance.",
          },
        },
        {
          h2: { en: "Designing the Succession Architecture", fr: "Concevoir l'architecture de succession" },
          paragraphs: [
            {
              en: "A workable UAE succession plan now typically combines three elements. First, a family constitution — a non-binding statement of values, vision, and decision-making norms that aligns the family on questions the law cannot answer for them. Second, a binding shareholders' or partnership agreement that codifies share classes, voting rights, distribution policy, dispute resolution, and the mechanics of share transfer on the major life events. Third, a holding vehicle — increasingly a DIFC or ADGM foundation — that owns the operating shares and provides continuity across generations.",
              fr: "Un plan de transmission émirien viable combine désormais trois éléments. D'abord une charte familiale — déclaration non contraignante de valeurs, de vision et de modes de décision qui aligne la famille sur les questions auxquelles le droit ne peut pas répondre à sa place. Ensuite un pacte d'associés ou un accord de partenariat juridiquement contraignant, qui codifie les catégories de parts, les droits de vote, la politique de distribution, la résolution des litiges et les mécanismes de transfert lors des événements majeurs de la vie. Enfin, un véhicule de holding — de plus en plus souvent une fondation DIFC ou ADGM — qui détient les parts opérationnelles et assure la continuité entre les générations.",
            },
            {
              en: "This architecture is not appropriate for every family business. Smaller, single-line operations may be over-structured by it. But for groups with diversified holdings, international assets, or more than one branch of the family in active management, the cost of building the structure is materially lower than the cost of resolving disputes inside an unstructured one.",
              fr: "Cette architecture n'est pas pertinente pour chaque entreprise familiale. Les exploitations modestes, mono-activité, peuvent y être sur-structurées. Mais pour les groupes aux portefeuilles diversifiés, aux actifs internationaux ou impliquant plusieurs branches familiales actives dans la gestion, le coût de la mise en place est sensiblement inférieur au coût du règlement des conflits dans une structure non préparée.",
            },
          ],
          pullQuote: null,
        },
      ],
      callout: {
        eyebrow: { en: "KEY QUESTIONS FOR EVERY UAE FAMILY BUSINESS TRANSITION", fr: "QUESTIONS CLÉS POUR CHAQUE TRANSMISSION D'ENTREPRISE FAMILIALE ÉMIRIENNE" },
        bullets: [
          { en: "Is the operating group eligible for protection under Federal Decree-Law No. 37 of 2022, and what share classes serve the family's objectives?", fr: "Le groupe opérationnel est-il éligible à la protection du décret-loi fédéral n° 37 de 2022, et quelles catégories de parts servent les objectifs de la famille ?" },
          { en: "Does a binding shareholders' agreement govern death, divorce, incapacity, and disagreement — and has it been stress-tested against the family's actual dynamics?", fr: "Un pacte d'associés contraignant régit-il le décès, le divorce, l'incapacité et le désaccord — et a-t-il été éprouvé face à la dynamique réelle de la famille ?" },
          { en: "Is a DIFC or ADGM foundation appropriate as a holding vehicle, or is the group better served by a Sharia-compliant alternative or an offshore trust?", fr: "Une fondation DIFC ou ADGM est-elle pertinente comme véhicule de holding, ou le groupe est-il mieux servi par une alternative conforme à la Charia ou par un trust offshore ?" },
          { en: "How does the structure interact with each family member's current tax residency and the regulators of every jurisdiction in which the group holds material assets?", fr: "Comment la structure s'articule-t-elle avec la résidence fiscale actuelle de chaque membre de la famille et avec les régulateurs de chaque juridiction où le groupe détient des actifs significatifs ?" },
          { en: "Is the next generation actively integrated into governance, or being introduced to the business too late to assume institutional standing?", fr: "La génération suivante est-elle activement intégrée à la gouvernance, ou introduite trop tard dans le groupe pour assumer une autorité institutionnelle ?" },
        ],
      },
      sidebar: {
        eyebrow: { en: "IN THIS ARTICLE", fr: "DANS CET ARTICLE" },
        heading: { en: "Discuss this matter with our team", fr: "Échangez avec notre équipe sur ce sujet" },
        body: { en: "Our partners are available for a confidential discussion.", fr: "Nos associés sont disponibles pour un échange confidentiel." },
        cta: { en: "Get in Touch", fr: "Nous Contacter" },
      },
      expertCounselCta: {
        eyebrow: { en: "EXPERT COUNSEL", fr: "CONSEIL D'EXPERT" },
        heading: { en: "Need expert counsel on this matter?", fr: "Besoin d'un conseil d'expert sur ce sujet ?" },
        body: { en: "Our partners are available for a confidential discussion across our Dubai and Paris offices.", fr: "Nos associés sont à votre disposition pour un échange confidentiel entre nos bureaux de Dubaï et de Paris." },
        cta: { en: "Speak to a Partner", fr: "Échanger avec un Associé" },
      },
    },
    {
      slug: "digital-transformation-data-privacy-gcc",
      slugFr: "transformation-numerique-donnees-ccg",
      category: { en: "TECHNOLOGY", fr: "TECHNOLOGIE" },
      practiceArea: "IP & Tech",
      readMin: 6,
      date: { en: "May 2026", fr: "Mai 2026" },
      author: { name: "Milton Hobbs", title: { en: "Senior Partner, Dubai", fr: "Associé Senior, Dubaï" } },
      meta: {
        en: {
          title: "Digital Transformation & Data Privacy in the GCC | Milton Hobbs",
          description: "As Gulf states publish PDPL regimes that increasingly mirror the GDPR, companies operating across the GCC must rebuild their data architecture for cross-border compliance.",
          ogTitle: "Digital Transformation & Data Privacy in the GCC",
          ogDescription: "As Gulf states publish PDPL regimes that increasingly mirror the GDPR, companies operating across the GCC must rebuild their data architecture for cross-border compliance.",
        },
        fr: {
          title: "Transformation numérique et protection des données dans le CCG | Milton Hobbs",
          description: "Alors que les États du Golfe publient des régimes PDPL qui se rapprochent du RGPD, les groupes opérant dans le CCG doivent reconstruire leur architecture de données pour la conformité transfrontalière.",
          ogTitle: "Transformation numérique et protection des données dans le CCG",
          ogDescription: "Alors que les États du Golfe publient des régimes PDPL qui se rapprochent du RGPD, les groupes opérant dans le CCG doivent reconstruire leur architecture de données pour la conformité transfrontalière.",
        },
      },
      title: { en: "Digital Transformation & Data Privacy in the GCC", fr: "Transformation numérique et protection des données dans le CCG" },
      lead: {
        en: "The Gulf's digital transformation agenda has converged with a maturing data protection regime in a way few jurisdictions outside the EU have managed. UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection, the Saudi PDPL, and the Qatar Data Protection Law now require companies operating regionally to build privacy compliance into systems, contracts, and cross-border transfers from day one — not as an afterthought.",
        fr: "L'agenda de transformation numérique du Golfe converge désormais avec un régime de protection des données arrivé à maturité d'une manière que peu de juridictions hors UE ont réussi à atteindre. Le décret-loi fédéral émirien n° 45 de 2021 sur la protection des données personnelles, la PDPL saoudienne et la loi qatarie sur la protection des données imposent aujourd'hui aux entreprises présentes dans la région d'intégrer la conformité dès la conception des systèmes, des contrats et des transferts transfrontaliers — et non comme une réflexion tardive.",
      },
      sections: [
        {
          h2: { en: "Convergence Toward a GDPR-Adjacent Standard", fr: "Convergence vers un standard proche du RGPD" },
          paragraphs: [
            {
              en: "The UAE's PDPL, the Saudi PDPL, and the Qatar regime each draw heavily on the GDPR's core architecture: lawful bases for processing, data-subject rights, breach notification timelines, and structured cross-border transfer mechanics. For companies already GDPR-compliant from European operations, the regulatory uplift to operate across the GCC is no longer the wall it once was — but the regulators' local enforcement posture, definitions of sensitive data, and consent standards diverge in ways that matter.",
              fr: "La PDPL émirienne, la PDPL saoudienne et le régime qatari s'appuient chacun fortement sur l'architecture du RGPD : bases légales de traitement, droits des personnes concernées, délais de notification des violations et mécanismes structurés de transfert transfrontalier. Pour les entreprises déjà conformes au RGPD au titre de leurs activités européennes, la marche à franchir pour opérer dans le CCG n'est plus le mur qu'elle a pu être — mais la posture d'exécution locale des régulateurs, les définitions de données sensibles et les standards de consentement divergent sur des points qui comptent.",
            },
            {
              en: "DIFC and ADGM operate their own data protection regimes within the UAE — DIFC Data Protection Law No. 5 of 2020, and the ADGM Data Protection Regulations 2021. A company headquartered in DIFC with subsidiaries on the UAE mainland and in Saudi Arabia is now subject to three concurrent data protection regimes, each with separate registration, notification, and processing obligations.",
              fr: "Le DIFC et l'ADGM exploitent leurs propres régimes de protection des données au sein des Émirats — DIFC Data Protection Law n° 5 de 2020 et ADGM Data Protection Regulations 2021. Une société établie au DIFC, avec des filiales sur le mainland émirien et en Arabie saoudite, est désormais soumise à trois régimes concurrents, chacun avec ses propres obligations d'enregistrement, de notification et de traitement.",
            },
          ],
          pullQuote: null,
        },
        {
          h2: { en: "Cross-Border Transfers as the Hard Problem", fr: "Les transferts transfrontaliers comme problème central" },
          paragraphs: [
            {
              en: "The single hardest compliance question for a regional operator is no longer whether to comply, but how to move personal data lawfully between entities. The UAE permits transfer to jurisdictions deemed to provide adequate protection, or under approved transfer mechanisms (binding corporate rules, standard contractual clauses, explicit consent). Saudi Arabia is more restrictive: cross-border transfers of personal data are presumptively prohibited and require specific exemption pathways.",
              fr: "La question de conformité la plus difficile pour un opérateur régional n'est plus de savoir s'il faut se conformer, mais comment faire circuler licitement les données personnelles entre entités. Les Émirats autorisent les transferts vers les juridictions jugées offrant une protection adéquate, ou via des mécanismes de transfert agréés (règles d'entreprise contraignantes, clauses contractuelles types, consentement explicite). L'Arabie saoudite est plus restrictive : les transferts transfrontaliers de données personnelles sont présumés interdits et nécessitent des voies d'exemption spécifiques.",
            },
            {
              en: "For multinational groups, this means the intra-group data flows that operated invisibly five years ago — payroll data from a Riyadh branch to a Dubai shared services centre, customer data from a UAE e-commerce platform to an EU-based analytics provider — now require documented legal bases, contractual safeguards, and in some cases regulator notification or approval.",
              fr: "Pour les groupes multinationaux, cela signifie que les flux de données intra-groupe qui circulaient sans bruit il y a cinq ans — données de paie d'une succursale de Riyad vers un centre de services partagés à Dubaï, données clients d'une plateforme e-commerce émirienne vers un prestataire d'analytique basé dans l'UE — exigent désormais des bases juridiques documentées, des garanties contractuelles et, dans certains cas, une notification ou une approbation du régulateur.",
            },
          ],
          pullQuote: {
            en: "Data protection is no longer an IT problem in the GCC. It is a structural question about where the group sits, who controls what, and how value flows across borders.",
            fr: "La protection des données n'est plus un sujet IT dans le CCG. C'est une question structurelle : où se situe le groupe, qui contrôle quoi, et comment la valeur circule entre les frontières.",
          },
        },
        {
          h2: { en: "What Counsel Should Build Now", fr: "Ce que le conseil doit construire dès maintenant" },
          paragraphs: [
            {
              en: "Three priorities should be on every regional GC's compliance roadmap. First, a regional data map: a documented inventory of what personal data the group processes, where it sits, who has access, and the legal basis for every cross-border movement. Without this, every other compliance step is built on guesswork. Second, refreshed data processing agreements with every vendor that touches personal data — particularly cloud, SaaS, and analytics providers headquartered outside the region. Third, a working incident response protocol with named decision-makers, regulator contact details for each jurisdiction, and pre-drafted notification templates that meet the differing timing requirements of each PDPL.",
              fr: "Trois priorités doivent figurer sur la feuille de route conformité de chaque direction juridique régionale. D'abord une cartographie régionale des données : un inventaire documenté de quelles données personnelles le groupe traite, où elles résident, qui y accède, et la base juridique de chaque mouvement transfrontalier. Sans cela, chaque autre étape de mise en conformité repose sur de la conjecture. Ensuite, des accords de traitement actualisés avec chaque prestataire en contact avec des données personnelles — en particulier les fournisseurs cloud, SaaS et analytics établis hors de la région. Enfin, un protocole de réponse aux incidents opérationnel, avec décideurs nommés, coordonnées des régulateurs pour chaque juridiction, et modèles de notification pré-rédigés qui respectent les exigences de délai propres à chaque PDPL.",
            },
          ],
          pullQuote: null,
        },
      ],
      callout: {
        eyebrow: { en: "GCC DATA PROTECTION — IMMEDIATE PRIORITIES", fr: "PROTECTION DES DONNÉES DANS LE CCG — PRIORITÉS IMMÉDIATES" },
        bullets: [
          { en: "Documented data map covering every entity, system, and cross-border flow in the regional footprint", fr: "Cartographie documentée couvrant chaque entité, système et flux transfrontalier dans l'empreinte régionale" },
          { en: "Refreshed Data Processing Agreements with cloud, SaaS, analytics, and payroll vendors", fr: "Accords de traitement actualisés avec les prestataires cloud, SaaS, analytics et paie" },
          { en: "Lawful transfer mechanism (SCCs, BCRs, or explicit consent) in place for each jurisdiction pairing", fr: "Mécanisme de transfert licite (CCT, BCR ou consentement explicite) en place pour chaque couple de juridictions" },
          { en: "Incident response protocol aligned to the shortest applicable PDPL notification window", fr: "Protocole de réponse aux incidents aligné sur le délai de notification PDPL le plus court applicable" },
          { en: "Annual privacy training for staff handling personal data, jurisdiction-specific where required", fr: "Formation annuelle à la confidentialité pour les équipes traitant des données personnelles, par juridiction si nécessaire" },
        ],
      },
      sidebar: {
        eyebrow: { en: "IN THIS ARTICLE", fr: "DANS CET ARTICLE" },
        heading: { en: "Discuss this matter with our team", fr: "Échangez avec notre équipe sur ce sujet" },
        body: { en: "Our partners are available for a confidential discussion.", fr: "Nos associés sont disponibles pour un échange confidentiel." },
        cta: { en: "Get in Touch", fr: "Nous Contacter" },
      },
      expertCounselCta: {
        eyebrow: { en: "EXPERT COUNSEL", fr: "CONSEIL D'EXPERT" },
        heading: { en: "Need expert counsel on this matter?", fr: "Besoin d'un conseil d'expert sur ce sujet ?" },
        body: { en: "Our partners are available for a confidential discussion across our Dubai and Paris offices.", fr: "Nos associés sont à votre disposition pour un échange confidentiel entre nos bureaux de Dubaï et de Paris." },
        cta: { en: "Speak to a Partner", fr: "Échanger avec un Associé" },
      },
    },
    {
      slug: "strategic-ma-structuring-2026",
      slugFr: "structuration-ma-strategique-2026",
      category: { en: "M&A", fr: "M&A" },
      practiceArea: "Mergers & Acquisitions",
      readMin: 8,
      date: { en: "May 2026", fr: "Mai 2026" },
      author: { name: "Milton Hobbs", title: { en: "Senior Partner, Dubai", fr: "Associé Senior, Dubaï" } },
      meta: {
        en: {
          title: "Strategic M&A Structuring for 2026 | Milton Hobbs",
          description: "The 2026 deal environment rewards transactions structured for tax, regulatory, and integration durability — not just headline price.",
          ogTitle: "Strategic M&A Structuring for 2026",
          ogDescription: "The 2026 deal environment rewards transactions structured for tax, regulatory, and integration durability — not just headline price.",
        },
        fr: {
          title: "Structuration M&A stratégique pour 2026 | Milton Hobbs",
          description: "L'environnement transactionnel 2026 récompense les opérations structurées pour la fiscalité, la réglementation et l'intégration — pas seulement pour le prix d'affichage.",
          ogTitle: "Structuration M&A stratégique pour 2026",
          ogDescription: "L'environnement transactionnel 2026 récompense les opérations structurées pour la fiscalité, la réglementation et l'intégration — pas seulement pour le prix d'affichage.",
        },
      },
      title: { en: "Strategic M&A Structuring for 2026", fr: "Structuration M&A stratégique pour 2026" },
      lead: {
        en: "The 2026 deal environment rewards transactions structured for durability, not headline price. UAE corporate income tax has reset post-deal economics. Pillar Two introduces minimum effective tax rates for the largest groups. EU foreign-subsidies controls add a layer that did not exist on the last deal of comparable scale. The structuring choices made before signing now determine outcomes years after closing.",
        fr: "L'environnement transactionnel 2026 récompense les opérations structurées pour la durée — pas pour le prix d'affichage. L'impôt émirien sur les sociétés a recalibré l'économie post-deal. Pillar Two introduit des taux d'imposition effectifs minimaux pour les plus grands groupes. Le contrôle européen des subventions étrangères ajoute une couche qui n'existait pas lors de la dernière opération de taille comparable. Les choix de structuration faits avant la signature déterminent désormais les résultats des années après le closing.",
      },
      sections: [
        {
          h2: { en: "The Tax Reset", fr: "Le recalibrage fiscal" },
          paragraphs: [
            {
              en: "UAE corporate income tax, in force since June 2023 at a headline rate of 9%, has changed the structuring calculus in three ways. First, the location of profit recognition now matters in a way it did not previously — internal pricing, intercompany services, and the placement of intellectual property all have post-deal tax consequences that compound across the holding period. Second, the qualifying free zone regime offers a 0% rate on qualifying activities, but only where substance, qualifying income, and de minimis tests are met on an ongoing basis. Third, OECD Pillar Two — implementing a 15% global minimum effective rate for groups above the EUR 750 million threshold — interacts with the UAE rate in ways that change the appeal of historical free-zone structures for the largest acquirers.",
              fr: "L'impôt émirien sur les sociétés, en vigueur depuis juin 2023 au taux d'affichage de 9 %, a transformé le calcul de structuration sur trois plans. D'abord, la localisation de la reconnaissance des profits compte d'une manière nouvelle — la facturation intra-groupe, les services entre sociétés liées et la localisation de la propriété intellectuelle ont des conséquences fiscales post-deal qui s'accumulent sur la durée de détention. Ensuite, le régime de zone franche qualifiée offre un taux de 0 % sur les activités qualifiantes, mais uniquement lorsque la substance, le revenu qualifiant et les tests de minimis sont respectés en continu. Enfin, le Pilier 2 de l'OCDE — qui instaure un taux effectif minimum mondial de 15 % pour les groupes au-dessus du seuil de 750 millions d'euros — s'articule avec le taux émirien de manière à modifier l'attractivité des structures historiques de zone franche pour les acquéreurs les plus importants.",
            },
            {
              en: "For buyers, the consequence is that headline acquisition price is no longer the dominant variable. A 9% UAE rate applied to post-deal earnings, combined with Pillar Two top-up tax in the acquirer's home jurisdiction, can change the IRR profile of an otherwise attractive target by several hundred basis points.",
              fr: "Pour les acquéreurs, la conséquence est claire : le prix d'acquisition affiché n'est plus la variable dominante. Un taux émirien de 9 % appliqué aux bénéfices post-deal, combiné à un complément d'impôt Pilier 2 dans la juridiction de l'acquéreur, peut décaler de plusieurs centaines de points de base le profil de TRI d'une cible par ailleurs séduisante.",
            },
          ],
          pullQuote: null,
        },
        {
          h2: { en: "The Regulatory Overlay", fr: "La superposition réglementaire" },
          paragraphs: [
            {
              en: "Three regulatory regimes now sit alongside traditional antitrust review on cross-border deals involving GCC and EU parties. The EU Foreign Subsidies Regulation requires notification of concentrations where the target generates EU revenue above EUR 500 million and the acquirer has received foreign financial contributions of EUR 50 million or more in the preceding three years. UAE state-linked acquirers — sovereign wealth funds and their portfolio companies — are squarely within scope. The UAE itself has expanded its own merger control framework, with the Federal Anti-Trust Committee taking a more active posture on transactions affecting domestic competition.",
              fr: "Trois régimes réglementaires se superposent désormais au contrôle antitrust traditionnel pour les opérations transfrontalières impliquant des parties du CCG et de l'UE. Le règlement européen sur les subventions étrangères impose la notification des concentrations lorsque la cible génère un chiffre d'affaires UE supérieur à 500 millions d'euros et que l'acquéreur a reçu des contributions financières étrangères d'au moins 50 millions d'euros au cours des trois années précédentes. Les acquéreurs liés à l'État émirien — fonds souverains et leurs sociétés en portefeuille — entrent pleinement dans le champ.",
            },
            {
              en: "Practically, this means a transaction timeline that historically ran four to six months from signing to closing should now be modelled at six to nine, with parallel filings in multiple regulators and meaningful conditionality on closing.",
              fr: "Concrètement, un calendrier de transaction qui s'étendait historiquement sur quatre à six mois entre la signature et le closing doit aujourd'hui se modéliser sur six à neuf mois, avec des dépôts parallèles auprès de plusieurs régulateurs et une véritable conditionnalité de closing.",
            },
          ],
          pullQuote: {
            en: "In 2026, the structuring memo is no longer a closing-week formality. It is the document the parties live with for the next ten years.",
            fr: "En 2026, le mémo de structuration n'est plus une formalité de la semaine de closing. C'est le document avec lequel les parties vont vivre pendant les dix années suivantes.",
          },
        },
        {
          h2: { en: "Designing for Durability", fr: "Concevoir pour la durée" },
          paragraphs: [
            {
              en: "A durable 2026 transaction structure runs four tests before signing. The tax test: does the structure remain economically rational under UAE CIT, qualifying free zone conditions, and Pillar Two top-up calculations as the target scales over the next five years? The regulatory test: which approvals are required pre-closing, which conditional commitments are likely, and how do they interact across jurisdictions? The integration test: are share classes, governance, and indemnification packages designed for actual post-closing operation, or only for getting to signing? The exit test: when the buyer eventually sells the target — to a strategic, to a financial sponsor, in a listing — does the structure constrain that exit or enable it?",
              fr: "Une structure de transaction durable en 2026 doit passer quatre tests avant la signature. Le test fiscal : la structure reste-t-elle économiquement rationnelle sous l'impôt émirien sur les sociétés, dans les conditions de zone franche qualifiée et au regard des calculs de complément d'impôt Pilier 2, à mesure que la cible se développe sur cinq ans ? Le test réglementaire : quelles autorisations sont requises avant closing, quels engagements conditionnels sont probables, et comment s'articulent-ils entre juridictions ? Le test d'intégration : les catégories de parts, la gouvernance et les paquets d'indemnisation sont-ils conçus pour l'exploitation post-closing réelle, ou seulement pour atteindre la signature ?",
            },
            {
              en: "Each test invalidates structures that pass on a deal-week basis but fail across the holding period. The investment in structuring discipline at signing is consistently rewarded by reduced friction across the life of the holding.",
              fr: "Chacun de ces tests invalide des structures qui passent au plan de la semaine de signing mais échouent sur la durée de détention. La discipline de structuration au moment de la signature est invariablement récompensée par la réduction de la friction sur toute la durée de l'investissement.",
            },
          ],
          pullQuote: null,
        },
      ],
      callout: {
        eyebrow: { en: "2026 M&A STRUCTURING CHECKLIST", fr: "CHECKLIST DE STRUCTURATION M&A 2026" },
        bullets: [
          { en: "UAE CIT and qualifying free zone analysis modelled across the projected holding period — not just year one", fr: "Analyse de l'impôt émirien sur les sociétés et du régime de zone franche qualifiée modélisée sur la durée de détention prévue — pas seulement l'année 1" },
          { en: "Pillar Two impact assessment for acquirers above the EUR 750 million revenue threshold or with reasonable prospect of crossing it", fr: "Évaluation Pilier 2 pour les acquéreurs au-dessus du seuil de 750 millions d'euros de chiffre d'affaires, ou en passe de le franchir" },
          { en: "Foreign-subsidies and merger-control mapping across every relevant jurisdiction, with realistic timeline assumptions", fr: "Cartographie subventions étrangères et contrôle des concentrations sur chaque juridiction pertinente, avec un calendrier réaliste" },
          { en: "Sector-specific change-of-control approvals identified pre-signing and reflected in conditions precedent", fr: "Autorisations sectorielles de prise de contrôle identifiées avant signing et reflétées dans les conditions suspensives" },
          { en: "Exit-ready structure: governance, share classes, and tax positioning compatible with strategic, sponsor, and listing exits", fr: "Structure prête pour la sortie : gouvernance, catégories de parts et positionnement fiscal compatibles avec une cession industrielle, à un sponsor ou par cotation" },
        ],
      },
      sidebar: {
        eyebrow: { en: "IN THIS ARTICLE", fr: "DANS CET ARTICLE" },
        heading: { en: "Discuss this matter with our team", fr: "Échangez avec notre équipe sur ce sujet" },
        body: { en: "Our partners are available for a confidential discussion.", fr: "Nos associés sont disponibles pour un échange confidentiel." },
        cta: { en: "Get in Touch", fr: "Nous Contacter" },
      },
      expertCounselCta: {
        eyebrow: { en: "EXPERT COUNSEL", fr: "CONSEIL D'EXPERT" },
        heading: { en: "Need expert counsel on this matter?", fr: "Besoin d'un conseil d'expert sur ce sujet ?" },
        body: { en: "Our partners are available for a confidential discussion across our Dubai and Paris offices.", fr: "Nos associés sont à votre disposition pour un échange confidentiel entre nos bureaux de Dubaï et de Paris." },
        cta: { en: "Speak to a Partner", fr: "Échanger avec un Associé" },
      },
    },
  ],
};

export const ct = (field: BilingualString, lang: Lang): string =>
  lang === "FR" ? field.fr : field.en;

export function getInsightArticleBySlug(slug: string): InsightArticle | undefined {
  return insightsCopy.articles.find(a => a.slug === slug || a.slugFr === slug);
}

export function getRelatedInsightArticles(slug: string): InsightArticle[] {
  return insightsCopy.articles.filter(a => a.slug !== slug && a.slugFr !== slug);
}
