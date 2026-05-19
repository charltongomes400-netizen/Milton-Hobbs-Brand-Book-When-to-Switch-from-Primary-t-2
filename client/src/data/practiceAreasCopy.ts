export type BiLang = { en: string; fr: string };
export type ServiceItem = { num: string; title: BiLang; body: BiLang };
export type DiffCard = { num: string; title: BiLang; body: BiLang };

export interface PracticeArea {
  slug: string;
  slugFr: string;
  title: BiLang;
  category: BiLang;
  meta: {
    en: { title: string; description: string; keywords: string };
    fr: { title: string; description: string; keywords: string };
  };
  hero: {
    eyebrow: BiLang;
    h1: BiLang;
    body: BiLang;
    primaryCta: BiLang;
    secondaryCta: BiLang;
  };
  overview: {
    eyebrow: BiLang;
    h2: BiLang;
    paragraphs: BiLang[];
  };
  practiceCard: {
    heading: BiLang;
    whoLabel: BiLang;
    whoItems: BiLang[];
  };
  services: {
    eyebrow: BiLang;
    h2: BiLang;
    intro: BiLang;
    items: ServiceItem[];
  };
  whatSetsApart: {
    eyebrow: BiLang;
    h2: BiLang;
    cards: DiffCard[];
  };
  closingCta: {
    eyebrow: BiLang;
    heading: BiLang;
    cta: BiLang;
  };
}

export function c(b: BiLang, lang: "EN" | "FR"): string {
  return lang === "FR" ? b.fr : b.en;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-commercial",
    slugFr: "droit-des-societes-commercial",
    title: { en: "Corporate & Commercial", fr: "Droit des Sociétés & Commercial" },
    category: { en: "CORPORATE & COMMERCIAL", fr: "DROIT DES SOCIÉTÉS & COMMERCIAL" },
    meta: {
      en: {
        title: "Corporate & Commercial Law | Milton Hobbs — Dubai & Paris",
        description: "Boutique corporate and commercial counsel across the UAE, France, and the wider Gulf. From company formation to cross-border M&A, partner-led on every mandate.",
        keywords: "corporate law firm Dubai, commercial contracts UAE, corporate restructuring Dubai, joint ventures GCC, company formation DIFC",
      },
      fr: {
        title: "Droit des Sociétés & Commercial | Milton Hobbs — Dubaï & Paris",
        description: "Conseil corporate et commercial boutique entre les Émirats arabes unis, la France et le Golfe. De la création d'entreprise aux M&A transfrontaliers, porté par l'associé sur chaque mandat.",
        keywords: "cabinet droit des sociétés Dubaï, contrats commerciaux Émirats, restructuration corporate Dubaï, joint-ventures CCG, création d'entreprise DIFC",
      },
    },
    hero: {
      eyebrow: { en: "OUR EXPERTISE — CORPORATE & COMMERCIAL", fr: "NOTRE EXPERTISE — DROIT DES SOCIÉTÉS & COMMERCIAL" },
      h1: { en: "Structure the deal. Close with precision.", fr: "Structurer l'opération. Conclure avec précision." },
      body: {
        en: "From company formation and M&A to commercial contracts and cross-border structuring — Milton Hobbs delivers precise, partner-led corporate counsel across the UAE, France, and the wider Gulf.",
        fr: "De la création d'entreprise et des M&A aux contrats commerciaux et à la structuration transfrontalière — Milton Hobbs délivre un conseil corporate précis et porté par l'associé entre les Émirats arabes unis, la France et le Golfe au sens large.",
      },
      primaryCta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
      secondaryCta: { en: "View Services", fr: "Voir les Services" },
    },
    overview: {
      eyebrow: { en: "PRACTICE OVERVIEW", fr: "PRÉSENTATION DE LA PRATIQUE" },
      h2: { en: "The full spectrum of corporate counsel.", fr: "Tout le spectre du conseil corporate." },
      paragraphs: [
        {
          en: "Milton Hobbs' Corporate & Commercial practice forms the core of the firm's transactional work. The team advises on the full spectrum of corporate matters — from company formation and governance to complex cross-border deals — combining technical precision with sustained attention to the commercial outcome each matter is meant to deliver.",
          fr: "La pratique Droit des Sociétés & Commercial constitue le cœur du travail transactionnel du cabinet. L'équipe accompagne l'ensemble du spectre corporate — de la création et de la gouvernance d'entreprise aux opérations transfrontalières complexes — en alliant précision technique et attention soutenue au résultat commercial que chaque mandat doit produire.",
        },
        {
          en: "We work with regional SMEs scaling their operations, multinationals expanding into the GCC, founders preparing for capital events, and investors structuring Gulf-to-Europe transactions. The brief differs in each case; the discipline does not.",
          fr: "Nous accompagnons les PME régionales en phase de croissance, les groupes multinationaux qui s'implantent dans le CCG, les fondateurs préparant un événement de marché, et les investisseurs qui structurent des opérations entre le Golfe et l'Europe. Le mandat varie d'un cas à l'autre ; la discipline, jamais.",
        },
      ],
    },
    practiceCard: {
      heading: { en: "Cross-border corporate law.", fr: "Le droit des sociétés transfrontalier." },
      whoLabel: { en: "WHO WE ADVISE", fr: "QUI NOUS ACCOMPAGNONS" },
      whoItems: [
        { en: "Founders incorporating or restructuring", fr: "Fondateurs en création ou restructuration" },
        { en: "Multinationals expanding into the GCC", fr: "Groupes multinationaux s'implantant dans le CCG" },
        { en: "Investors structuring cross-border holdings", fr: "Investisseurs structurant des holdings transfrontaliers" },
        { en: "Boards weighing strategic transactions", fr: "Conseils d'administration en évaluation d'opérations stratégiques" },
      ],
    },
    services: {
      eyebrow: { en: "WHAT WE DO", fr: "CE QUE NOUS FAISONS" },
      h2: { en: "Our services.", fr: "Nos services." },
      intro: {
        en: "Comprehensive corporate and commercial legal advisory across all transaction types and jurisdictions.",
        fr: "Conseil juridique corporate et commercial complet, à travers tous les types d'opérations et toutes les juridictions.",
      },
      items: [
        { num: "01", title: { en: "Corporate Transactions", fr: "Opérations Corporate" }, body: { en: "Formation, restructuring, and governance of companies across UAE and French jurisdictions. Advising on shareholder agreements, board structures, and regulatory filings.", fr: "Création, restructuration et gouvernance d'entreprises aux Émirats arabes unis et en France. Conseil sur les pactes d'associés, les structures de gouvernance et les obligations déclaratives." } },
        { num: "02", title: { en: "Mergers & Acquisitions", fr: "Fusions & Acquisitions" }, body: { en: "End-to-end M&A advisory: due diligence, SPA drafting, regulatory clearance, and post-merger integration across the GCC and Europe.", fr: "Conseil M&A de bout en bout : due diligence, rédaction du SPA, clearance réglementaire et intégration post-fusion entre le CCG et l'Europe." } },
        { num: "03", title: { en: "Joint Ventures & Partnerships", fr: "Joint-Ventures & Partenariats" }, body: { en: "Structuring JV agreements, equity arrangements, and profit-sharing frameworks for cross-border collaborations between Gulf and European counterparts.", fr: "Structuration d'accords de joint-venture, d'arrangements en capital et de schémas de partage des résultats pour les collaborations transfrontalières entre acteurs du Golfe et européens." } },
        { num: "04", title: { en: "Commercial Contracts", fr: "Contrats Commerciaux" }, body: { en: "Drafting, reviewing, and negotiating commercial agreements — supply contracts, distribution arrangements, agency agreements, and framework contracts.", fr: "Rédaction, revue et négociation d'accords commerciaux — contrats de fourniture, accords de distribution, contrats d'agence et contrats-cadres." } },
        { num: "05", title: { en: "Corporate Restructuring", fr: "Restructuration Corporate" }, body: { en: "Legal support for business reorganisations, holding company structures, spin-offs, and operational restructurings designed to improve efficiency and protect assets.", fr: "Accompagnement juridique des réorganisations d'entreprise, structures de holding, spin-offs et restructurations opérationnelles destinées à améliorer l'efficacité et à protéger les actifs." } },
        { num: "06", title: { en: "Licensing & IP Commercialisation", fr: "Licensing & Valorisation de la PI" }, body: { en: "Licensing structures for technology, brand, and know-how, including cross-border licensing frameworks compliant with UAE and French law.", fr: "Structures de licences pour la technologie, la marque et le savoir-faire, y compris des cadres de licensing transfrontaliers conformes au droit émirien et français." } },
        { num: "07", title: { en: "Regulatory Compliance", fr: "Conformité Réglementaire" }, body: { en: "Navigating UAE free zone regulations, DIFC and ADGM frameworks, and French commercial law to keep businesses compliant across jurisdictions.", fr: "Conseil sur la réglementation des zones franches émiriennes, les cadres du DIFC et de l'ADGM, et le droit commercial français pour maintenir la conformité entre juridictions." } },
        { num: "08", title: { en: "Foreign Investment Structuring", fr: "Structuration de l'Investissement Étranger" }, body: { en: "Advisory on inbound and outbound investment, including UAE ownership rules, French golden share restrictions, and bilateral investment treaty considerations.", fr: "Conseil sur l'investissement entrant et sortant, y compris les règles de propriété émiriennes, les restrictions de golden share françaises et les considérations relatives aux traités bilatéraux d'investissement." } },
      ],
    },
    whatSetsApart: {
      eyebrow: { en: "WHAT SETS THIS PRACTICE APART", fr: "CE QUI DISTINGUE CETTE PRATIQUE" },
      h2: { en: "How we work, in practice.", fr: "Comment nous travaillons, concrètement." },
      cards: [
        { num: "01", title: { en: "Documents that close.", fr: "Des documents qui se signent." }, body: { en: "A successful agreement is the one that gets signed. We draft for the deal that actually happens, not for every theoretical exposure a firm could flag to look thorough. Over-hedging kills deals; we do not over-hedge.", fr: "Un accord réussi est celui que l'on signe. Nous rédigeons pour l'opération qui se conclut réellement, pas pour chaque exposition théorique qu'un cabinet pourrait soulever pour paraître exhaustif. L'excès de prudence fait échouer les opérations ; nous ne tombons pas dans cet excès." } },
        { num: "02", title: { en: "Both sides of the table, in our memory.", fr: "Les deux côtés de la table, dans notre mémoire." }, body: { en: "We have drafted the same agreement type from both buyer side and seller side. When we represent one side, we know exactly how the other side will push back — because we have written that pushback ourselves.", fr: "Nous avons rédigé le même type d'accord côté acquéreur et côté cédant. Lorsque nous représentons l'un, nous savons exactement comment l'autre poussera — parce que nous avons rédigé cette résistance nous-mêmes." } },
        { num: "03", title: { en: "Closing day to closing year.", fr: "Du jour du closing à l'année du closing." }, body: { en: "Most firms disappear after signing. We hold the post-closing conditions, regulatory follow-on, and first-year integration questions on the same file — so the structure designed on paper is the structure that actually runs.", fr: "La plupart des cabinets disparaissent après la signature. Nous conservons sur le même dossier les conditions post-closing, les démarches réglementaires complémentaires et les questions d'intégration de la première année — pour que la structure conçue sur le papier soit celle qui fonctionne réellement." } },
        { num: "04", title: { en: "One drafter per deal.", fr: "Un seul rédacteur par opération." }, body: { en: "The SPA, the disclosure letter, and the side letters all come from the same hand. No coordination gaps between separately-authored documents. No clause in one paper contradicting a clause in another.", fr: "Le SPA, la disclosure letter et les side letters proviennent de la même main. Pas d'écart de coordination entre des documents rédigés séparément. Pas de clause dans un document qui en contredit une autre." } },
      ],
    },
    closingCta: {
      eyebrow: { en: "SPEAK WITH A PARTNER", fr: "ÉCHANGER AVEC UN ASSOCIÉ" },
      heading: { en: "Have a corporate matter in mind?\nBring it to a partner directly.", fr: "Un dossier corporate en tête ?\nAdressez-vous directement à un associé." },
      cta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
    },
  },
  {
    slug: "tax-compliance",
    slugFr: "fiscalite-conformite",
    title: { en: "Tax & Compliance", fr: "Fiscalité & Conformité" },
    category: { en: "TAX & COMPLIANCE", fr: "FISCALITÉ & CONFORMITÉ" },
    meta: {
      en: {
        title: "Tax & Compliance | Milton Hobbs — Dubai & Paris",
        description: "Strategic tax planning and regulatory compliance for groups operating between the UAE, France, and the GCC. UAE Corporate Tax, transfer pricing, Pillar Two, and beneficial ownership — partner-led.",
        keywords: "UAE corporate tax advisory, transfer pricing GCC, Pillar Two UAE, beneficial ownership compliance, French tax counsel Dubai",
      },
      fr: {
        title: "Fiscalité & Conformité | Milton Hobbs — Dubaï & Paris",
        description: "Planification fiscale stratégique et conformité réglementaire pour les groupes opérant entre les Émirats, la France et le CCG. Impôt sur les sociétés émirien, prix de transfert, Pilier 2 et bénéficiaires effectifs — porté par l'associé.",
        keywords: "impôt sur les sociétés Émirats, prix de transfert CCG, Pilier 2 Émirats, bénéficiaires effectifs conformité, conseil fiscal français Dubaï",
      },
    },
    hero: {
      eyebrow: { en: "OUR EXPERTISE — TAX & COMPLIANCE", fr: "NOTRE EXPERTISE — FISCALITÉ & CONFORMITÉ" },
      h1: { en: "Anticipate the exposure. Preserve the value.", fr: "Anticiper l'exposition. Préserver la valeur." },
      body: {
        en: "From UAE Corporate Tax and transfer pricing to Pillar Two, beneficial ownership, and AML/CFT compliance — Milton Hobbs delivers structured, partner-led tax counsel across the UAE, France, and the wider Gulf.",
        fr: "De l'impôt sur les sociétés émirien et des prix de transfert au Pilier 2, aux bénéficiaires effectifs et à la conformité LAB/FT — Milton Hobbs délivre un conseil fiscal structuré et porté par l'associé entre les Émirats arabes unis, la France et le Golfe au sens large.",
      },
      primaryCta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
      secondaryCta: { en: "View Services", fr: "Voir les Services" },
    },
    overview: {
      eyebrow: { en: "PRACTICE OVERVIEW", fr: "PRÉSENTATION DE LA PRATIQUE" },
      h2: { en: "Tax counsel calibrated to cross-border reality.", fr: "Un conseil fiscal calibré sur la réalité transfrontalière." },
      paragraphs: [
        {
          en: "Milton Hobbs' Tax & Compliance practice advises companies and private clients on the rapidly evolving tax and regulatory regimes that shape business in the Gulf and Europe. The introduction of UAE Corporate Income Tax, the OECD's Pillar Two minimum tax architecture, and increasingly demanding beneficial ownership and substance regimes have made tax counsel a structural — not seasonal — discipline.",
          fr: "La pratique Fiscalité & Conformité de Milton Hobbs conseille les entreprises et les clients privés sur les régimes fiscaux et réglementaires en rapide évolution qui structurent les affaires dans le Golfe et en Europe. L'introduction de l'impôt sur les sociétés aux Émirats, le Pilier 2 de l'OCDE et des régimes de plus en plus exigeants en matière de bénéficiaires effectifs et de substance ont fait du conseil fiscal une discipline structurelle, plus saisonnière.",
        },
        {
          en: "We advise multinationals navigating UAE Corporate Tax for the first time, groups managing cross-border transfer pricing exposure, private clients restructuring residency, and boards preparing for the global minimum tax. Each mandate begins with the number — and ends with a position the firm can defend.",
          fr: "Nous accompagnons les multinationales qui découvrent l'impôt émirien sur les sociétés, les groupes gérant une exposition transfrontalière en prix de transfert, les clients privés en restructuration de résidence, et les conseils d'administration en préparation de l'impôt minimum global. Chaque mandat commence par le chiffre — et se termine par une position que le cabinet peut défendre.",
        },
      ],
    },
    practiceCard: {
      heading: { en: "Strategic tax counsel.", fr: "Un conseil fiscal stratégique." },
      whoLabel: { en: "WHO WE ADVISE", fr: "QUI NOUS ACCOMPAGNONS" },
      whoItems: [
        { en: "Multinationals navigating UAE Corporate Income Tax", fr: "Multinationales face à l'impôt sur les sociétés émirien" },
        { en: "Groups managing transfer pricing exposure", fr: "Groupes gérant une exposition en prix de transfert" },
        { en: "Private clients restructuring for residency or wealth", fr: "Clients privés en restructuration résidentielle ou patrimoniale" },
        { en: "Boards preparing for Pillar Two", fr: "Conseils d'administration en préparation du Pilier 2" },
      ],
    },
    services: {
      eyebrow: { en: "WHAT WE DO", fr: "CE QUE NOUS FAISONS" },
      h2: { en: "Our services.", fr: "Nos services." },
      intro: {
        en: "Strategic tax counsel and regulatory compliance from one-off rulings through to enterprise-wide restructuring.",
        fr: "Conseil fiscal stratégique et conformité réglementaire, du rescrit isolé à la restructuration d'entreprise globale.",
      },
      items: [
        { num: "01", title: { en: "UAE Corporate Tax Advisory", fr: "Conseil sur l'Impôt Émirien sur les Sociétés" }, body: { en: "Strategic implementation of the UAE Corporate Income Tax regime, including qualifying free zone analysis, group structuring, and transition planning for legacy holdings.", fr: "Mise en œuvre stratégique du régime de l'impôt émirien sur les sociétés, y compris l'analyse des zones franches qualifiées, la structuration de groupe et la planification de transition pour les holdings historiques." } },
        { num: "02", title: { en: "International Tax Planning", fr: "Planification Fiscale Internationale" }, body: { en: "Cross-border tax structuring for groups operating between the UAE, France, the EU, and the wider GCC. Treaty analysis, residency planning, and the placement of intellectual property.", fr: "Structuration fiscale transfrontalière pour les groupes opérant entre les Émirats, la France, l'UE et le CCG au sens large. Analyse des conventions, planification de résidence et localisation de la propriété intellectuelle." } },
        { num: "03", title: { en: "Transfer Pricing", fr: "Prix de Transfert" }, body: { en: "Documentation, master files, local files, and pricing policies aligned with UAE Ministerial Decisions and OECD guidance for related-party transactions.", fr: "Documentation, master file, local file et politiques de prix alignés sur les Décisions Ministérielles émiriennes et les principes OCDE pour les transactions entre parties liées." } },
        { num: "04", title: { en: "Pillar Two & Global Minimum Tax", fr: "Pilier 2 & Impôt Minimum Mondial" }, body: { en: "Impact assessment, top-up tax modelling, and group restructuring for multinational enterprises above the EUR 750 million threshold or approaching it.", fr: "Évaluation d'impact, modélisation du complément d'impôt et restructuration de groupe pour les multinationales au-dessus du seuil de 750 millions d'euros, ou en approche." } },
        { num: "05", title: { en: "Beneficial Ownership & Substance", fr: "Bénéficiaires Effectifs & Substance" }, body: { en: "UBO registry compliance and Economic Substance Regulations across UAE jurisdictions, including remediation of historical positions.", fr: "Conformité aux registres UBO et aux Economic Substance Regulations sur l'ensemble des juridictions émiriennes, y compris la régularisation de positions historiques." } },
        { num: "06", title: { en: "VAT & Indirect Tax", fr: "TVA & Fiscalité Indirecte" }, body: { en: "VAT registration, group structuring, and dispute resolution under the UAE VAT regime, plus French VAT considerations on cross-border supplies.", fr: "Enregistrement TVA, structuration de groupe et résolution de contentieux sous le régime émirien, ainsi que les considérations françaises de TVA sur les opérations transfrontalières." } },
        { num: "07", title: { en: "AML / CFT Compliance", fr: "Conformité LAB / FT" }, body: { en: "Anti-money laundering and counter-financing of terrorism frameworks for designated non-financial businesses, with particular focus on the real estate, precious metals, and trust sectors.", fr: "Cadres de lutte contre le blanchiment et le financement du terrorisme pour les entreprises non financières désignées, avec une attention particulière aux secteurs de l'immobilier, des métaux précieux et des trusts." } },
        { num: "08", title: { en: "Tax Dispute Resolution", fr: "Contentieux Fiscal" }, body: { en: "Representation in audits, objections, and appeals before the UAE Federal Tax Authority and French tax administration, including pre-litigation strategy.", fr: "Représentation en contrôle, réclamation et contentieux devant la Federal Tax Authority émirienne et l'administration fiscale française, y compris la stratégie pré-contentieuse." } },
      ],
    },
    whatSetsApart: {
      eyebrow: { en: "WHAT SETS THIS PRACTICE APART", fr: "CE QUI DISTINGUE CETTE PRATIQUE" },
      h2: { en: "How we work, in practice.", fr: "Comment nous travaillons, concrètement." },
      cards: [
        { num: "01", title: { en: "Scenarios, not opinions.", fr: "Des scénarios, pas des opinions." }, body: { en: "We model the actual numbers under each available option. You choose between paths with full visibility on what each costs, not between competing legal opinions stripped of consequence.", fr: "Nous modélisons les chiffres réels sous chaque option disponible. Vous arbitrez entre des trajectoires avec une visibilité complète sur leur coût, pas entre des opinions juridiques concurrentes dépouillées de conséquences." } },
        { num: "02", title: { en: "Anticipatory by design.", fr: "Anticipatoire par construction." }, body: { en: "We find the exposure before the regulator does. Tax positions are stress-tested against the audit they may face, not the audit we hope they will not face.", fr: "Nous identifions l'exposition avant le régulateur. Les positions fiscales sont éprouvées face au contrôle qu'elles pourraient subir, pas face à celui qu'on espère qu'elles ne subiront pas." } },
        { num: "03", title: { en: "Filings drafted as if they will be audited.", fr: "Des déclarations rédigées comme si elles allaient être contrôlées." }, body: { en: "Because some will. Every filing leaves the firm with the supporting analysis already documented — not because we expect a challenge, but because preparation is cheaper than reaction.", fr: "Parce que certaines le seront. Chaque déclaration quitte le cabinet avec l'analyse de support déjà documentée — non parce que nous attendons une contestation, mais parce que la préparation coûte moins cher que la réaction." } },
        { num: "04", title: { en: "Cross-border in a single answer.", fr: "Le transfrontalier en une seule réponse." }, body: { en: "UAE, French, and EU tax considerations come together in one memo. You receive a single position to act on — not three opinions to reconcile.", fr: "Les considérations fiscales émiriennes, françaises et européennes se réunissent dans un seul mémo. Vous recevez une position unique sur laquelle agir — pas trois opinions à concilier." } },
      ],
    },
    closingCta: {
      eyebrow: { en: "ASSESS THE EXPOSURE", fr: "ÉVALUER L'EXPOSITION" },
      heading: { en: "Have a tax position to validate? Bring it to a partner directly.", fr: "Une position fiscale à valider ? Adressez-vous directement à un associé." },
      cta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
    },
  },
  {
    slug: "mergers-acquisitions",
    slugFr: "fusions-acquisitions",
    title: { en: "Mergers & Acquisitions", fr: "Fusions & Acquisitions" },
    category: { en: "MERGERS & ACQUISITIONS", fr: "FUSIONS & ACQUISITIONS" },
    meta: {
      en: {
        title: "Mergers & Acquisitions | Milton Hobbs — Dubai & Paris",
        description: "End-to-end M&A advisory across the UAE, France, and the wider Gulf. From target identification through SPA negotiation, regulatory clearance, and post-merger integration — partner-led.",
        keywords: "M&A law firm Dubai, cross-border M&A UAE France, private equity transactions GCC, SPA negotiation Dubai, post-merger integration GCC",
      },
      fr: {
        title: "Fusions & Acquisitions | Milton Hobbs — Dubaï & Paris",
        description: "Conseil M&A de bout en bout entre les Émirats arabes unis, la France et le Golfe. De l'identification de cibles à la négociation du SPA, au clearance réglementaire et à l'intégration post-fusion — porté par l'associé.",
        keywords: "cabinet M&A Dubaï, M&A transfrontalier Émirats France, transactions private equity CCG, négociation SPA Dubaï, intégration post-fusion CCG",
      },
    },
    hero: {
      eyebrow: { en: "OUR EXPERTISE — MERGERS & ACQUISITIONS", fr: "NOTRE EXPERTISE — FUSIONS & ACQUISITIONS" },
      h1: { en: "Navigate the deal. Maximise the outcome.", fr: "Naviguer l'opération. Maximiser le résultat." },
      body: {
        en: "From target identification and due diligence through to SPA negotiation, regulatory clearance, and post-merger integration — Milton Hobbs delivers precise, partner-led M&A counsel across the UAE, France, and the wider Gulf.",
        fr: "De l'identification de cibles et de la due diligence à la négociation du SPA, au clearance réglementaire et à l'intégration post-fusion — Milton Hobbs délivre un conseil M&A précis et porté par l'associé entre les Émirats arabes unis, la France et le Golfe au sens large.",
      },
      primaryCta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
      secondaryCta: { en: "View Services", fr: "Voir les Services" },
    },
    overview: {
      eyebrow: { en: "PRACTICE OVERVIEW", fr: "PRÉSENTATION DE LA PRATIQUE" },
      h2: { en: "End-to-end M&A advisory, across borders.", fr: "Un conseil M&A de bout en bout, à travers les frontières." },
      paragraphs: [
        {
          en: "Milton Hobbs' Mergers & Acquisitions practice advises buyers, sellers, and investors across the full deal lifecycle. The team handles cross-border transactions with precision — from preliminary structuring through to final completion and post-merger governance — combining commercial pragmatism with technical depth across UAE, French, and EU regulatory frameworks.",
          fr: "La pratique Fusions & Acquisitions de Milton Hobbs accompagne acquéreurs, cédants et investisseurs sur l'ensemble du cycle de transaction. L'équipe traite les opérations transfrontalières avec précision — de la structuration préliminaire au closing final et à la gouvernance post-fusion — en alliant pragmatisme commercial et profondeur technique sur les cadres réglementaires émirien, français et européen.",
        },
        {
          en: "Clients include regional conglomerates, private equity sponsors, multinationals expanding into the GCC, and founder-led businesses navigating an exit. Every mandate receives senior attention from day one — and continuity from term sheet through the first year of operation.",
          fr: "Les clients incluent des conglomérats régionaux, des sponsors de private equity, des multinationales s'implantant dans le CCG et des entreprises dirigées par leurs fondateurs préparant une sortie. Chaque mandat reçoit une attention senior dès le premier jour — et une continuité de l'engagement, du term sheet à la première année d'exploitation.",
        },
      ],
    },
    practiceCard: {
      heading: { en: "Cross-border M&A, executed with precision.", fr: "Du M&A transfrontalier, exécuté avec précision." },
      whoLabel: { en: "WHO WE ADVISE", fr: "QUI NOUS ACCOMPAGNONS" },
      whoItems: [
        { en: "Buyers acquiring UAE or French targets", fr: "Acquéreurs ciblant des actifs émiriens ou français" },
        { en: "Sellers preparing assets for exit", fr: "Cédants préparant la sortie d'un actif" },
        { en: "Private equity sponsors structuring portfolios", fr: "Sponsors de private equity structurant des portefeuilles" },
        { en: "Founders negotiating their first capital event", fr: "Fondateurs négociant leur premier événement de marché" },
      ],
    },
    services: {
      eyebrow: { en: "WHAT WE DO", fr: "CE QUE NOUS FAISONS" },
      h2: { en: "Our services.", fr: "Nos services." },
      intro: {
        en: "Comprehensive M&A legal advisory from origination through to post-completion integration.",
        fr: "Conseil juridique M&A complet, de l'origination à l'intégration post-closing.",
      },
      items: [
        { num: "01", title: { en: "Buy-Side Advisory", fr: "Conseil Côté Acquéreur" }, body: { en: "Target screening, due diligence, structuring, negotiation, and execution support for strategic and financial buyers across the UAE and France.", fr: "Identification de cibles, due diligence, structuration, négociation et exécution pour les acquéreurs stratégiques et financiers entre les Émirats et la France." } },
        { num: "02", title: { en: "Sell-Side Advisory", fr: "Conseil Côté Cédant" }, body: { en: "Vendor due diligence, data room preparation, process management, and negotiation support for shareholders and founders exiting in whole or in part.", fr: "Vendor due diligence, préparation de data room, gestion du processus et négociation pour les actionnaires et fondateurs en sortie totale ou partielle." } },
        { num: "03", title: { en: "Transaction Structuring", fr: "Structuration de Transaction" }, body: { en: "Pre-LOI structuring of acquisition vehicles, holding architectures, and financing layers calibrated to the tax and regulatory profile of each transaction.", fr: "Structuration pré-LOI des véhicules d'acquisition, des architectures de holding et des couches de financement calibrées sur le profil fiscal et réglementaire de chaque opération." } },
        { num: "04", title: { en: "Due Diligence", fr: "Due Diligence" }, body: { en: "Legal, regulatory, and contractual due diligence on UAE and French targets, including red-flag reporting and findings calibrated to deal materiality.", fr: "Due diligence juridique, réglementaire et contractuelle sur les cibles émiriennes et françaises, y compris reporting red-flag et constats calibrés sur la matérialité de l'opération." } },
        { num: "05", title: { en: "SPA & SHA Drafting", fr: "Rédaction SPA & SHA" }, body: { en: "Drafting and negotiation of share purchase agreements, shareholder agreements, disclosure letters, and side letters — from term sheet to signed.", fr: "Rédaction et négociation de share purchase agreements, pactes d'actionnaires, disclosure letters et side letters — du term sheet à la signature." } },
        { num: "06", title: { en: "Regulatory Clearances", fr: "Clearances Réglementaires" }, body: { en: "UAE Federal Anti-Trust Committee filings, French competition clearance, EU Foreign Subsidies Regulation notifications, and sector-specific change-of-control approvals.", fr: "Dépôts auprès du Comité fédéral antitrust émirien, clearance concurrence française, notifications au titre du règlement européen sur les subventions étrangères, et autorisations sectorielles de prise de contrôle." } },
        { num: "07", title: { en: "Private Equity Transactions", fr: "Transactions de Private Equity" }, body: { en: "Sponsor-side and management-side advisory on UAE and French PE deals, including portfolio bolt-ons, secondaries, and exit structuring.", fr: "Conseil côté sponsor et côté management sur les opérations de private equity émiriennes et françaises, y compris bolt-on de portefeuille, secondaires et structuration de sortie." } },
        { num: "08", title: { en: "Post-Merger Integration", fr: "Intégration Post-Fusion" }, body: { en: "Legal integration of acquired businesses — entity consolidation, contract assignment, regulatory follow-on, and first-year governance.", fr: "Intégration juridique des entités acquises — consolidation d'entité, cession de contrats, démarches réglementaires complémentaires et gouvernance de la première année." } },
      ],
    },
    whatSetsApart: {
      eyebrow: { en: "WHAT SETS THIS PRACTICE APART", fr: "CE QUI DISTINGUE CETTE PRATIQUE" },
      h2: { en: "How we work, in practice.", fr: "Comment nous travaillons, concrètement." },
      cards: [
        { num: "01", title: { en: "Structuring before the term sheet.", fr: "La structuration avant le term sheet." }, body: { en: "The deal structure is set before commercial terms are negotiated — not retrofitted around them. Tax, regulatory, and exit considerations all sit on the table when the headline number is being discussed.", fr: "La structure de l'opération est arrêtée avant la négociation des termes commerciaux — pas reconstruite autour. Les considérations fiscales, réglementaires et de sortie sont sur la table dès que le chiffre principal est discuté." } },
        { num: "02", title: { en: "The disclosure schedule, read line by line.", fr: "La disclosure schedule, lue ligne par ligne." }, body: { en: "Risk does not sit in the SPA. It sits in the disclosure schedule and the data room annexes. We read every line — because that is where the price adjustment is found.", fr: "Le risque ne se trouve pas dans le SPA. Il est dans la disclosure schedule et les annexes de la data room. Nous lisons chaque ligne — parce que c'est là que se loge l'ajustement de prix." } },
        { num: "03", title: { en: "Reps priced to behaviour.", fr: "Des reps calibrées sur le comportement." }, body: { en: "Representations and warranties are calibrated to what the seller can actually deliver and the buyer can actually rely on — not to a maximum-protection package that everyone knows will not survive negotiation.", fr: "Les déclarations et garanties sont calibrées sur ce que le cédant peut réellement délivrer et ce sur quoi l'acquéreur peut réellement s'appuyer — pas sur un package de protection maximale dont chacun sait qu'il ne survivra pas à la négociation." } },
        { num: "04", title: { en: "Walk-away discipline.", fr: "Discipline du désengagement." }, body: { en: "We will tell you when not to do the deal. Closing every mandate is not the goal; closing the right mandates is. The most valuable advice on a bad deal is the advice to walk.", fr: "Nous vous dirons quand ne pas faire l'opération. L'objectif n'est pas de closer chaque mandat ; c'est de closer les bons. Sur un mauvais dossier, le conseil le plus utile est celui de se retirer." } },
      ],
    },
    closingCta: {
      eyebrow: { en: "READY TO PROCEED?", fr: "PRÊT À AVANCER ?" },
      heading: { en: "Ready to close your next transaction?\nSpeak directly with a partner.", fr: "Prêt à conclure votre prochaine opération ?\nÉchangez directement avec un associé." },
      cta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
    },
  },
  {
    slug: "startups-venture-capital",
    slugFr: "startups-capital-risque",
    title: { en: "Startups & Venture Capital", fr: "Startups & Capital-Risque" },
    category: { en: "STARTUPS & VENTURE CAPITAL", fr: "STARTUPS & CAPITAL-RISQUE" },
    meta: {
      en: {
        title: "Startups & Venture Capital | Milton Hobbs — Dubai & Paris",
        description: "Founder-side and investor-side counsel for early- and growth-stage companies. Incorporation, fundraising, ESOPs, and exit support across the UAE, France, and the GCC.",
        keywords: "startup lawyer Dubai, venture capital UAE, founder agreements Paris, ESOP UAE, Series A Dubai",
      },
      fr: {
        title: "Startups & Capital-Risque | Milton Hobbs — Dubaï & Paris",
        description: "Conseil côté fondateurs et côté investisseurs pour les sociétés en amorçage et en croissance. Constitution, levées, ESOP et accompagnement de sortie entre les Émirats, la France et le CCG.",
        keywords: "avocat startups Dubaï, capital-risque Émirats, pactes de fondateurs Paris, ESOP Émirats, Série A Dubaï",
      },
    },
    hero: {
      eyebrow: { en: "OUR EXPERTISE — STARTUPS & VENTURE CAPITAL", fr: "NOTRE EXPERTISE — STARTUPS & CAPITAL-RISQUE" },
      h1: { en: "Found with intention. Scale with structure.", fr: "Fonder avec intention. Croître avec structure." },
      body: {
        en: "From incorporation and founder agreements to fundraising, ESOP design, and exit support — Milton Hobbs delivers founder-aware, partner-led counsel for early- and growth-stage companies across the UAE, France, and the wider Gulf.",
        fr: "De la constitution et des pactes de fondateurs aux levées de fonds, à la conception d'ESOP et à l'accompagnement de sortie — Milton Hobbs délivre un conseil sensible aux fondateurs et porté par l'associé pour les sociétés en amorçage et en croissance entre les Émirats arabes unis, la France et le Golfe au sens large.",
      },
      primaryCta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
      secondaryCta: { en: "View Services", fr: "Voir les Services" },
    },
    overview: {
      eyebrow: { en: "PRACTICE OVERVIEW", fr: "PRÉSENTATION DE LA PRATIQUE" },
      h2: { en: "Counsel that grows with the company.", fr: "Un conseil qui grandit avec l'entreprise." },
      paragraphs: [
        {
          en: "Milton Hobbs' Startups & Venture Capital practice supports companies at every stage of the early-growth arc — incorporation, founder agreements, seed and Series A rounds, ESOP design, convertible instruments, and the operational legal architecture that lets a company scale beyond its founding team. We work with founders and investors alike, and we read the standard documents critically, not as templates.",
          fr: "La pratique Startups & Capital-Risque de Milton Hobbs accompagne les sociétés à chaque étape de la phase de démarrage et de croissance — constitution, pactes de fondateurs, tours de seed et Série A, conception d'ESOP, instruments convertibles, et l'architecture juridique opérationnelle qui permet à une entreprise de croître au-delà de son équipe fondatrice. Nous travaillons aussi bien avec les fondateurs qu'avec les investisseurs, et nous lisons les documents standards avec esprit critique, pas comme des modèles.",
        },
        {
          en: "The right structure at seed determines what is possible at Series B. We design legal architectures with the company's next two rounds already in mind — not just the round being closed today.",
          fr: "La bonne structure au seed détermine ce qui sera possible en Série B. Nous concevons des architectures juridiques en gardant déjà à l'esprit les deux tours suivants — pas seulement celui qui se conclut aujourd'hui.",
        },
      ],
    },
    practiceCard: {
      heading: { en: "From cap table to capital event.", fr: "De la table de capitalisation à l'événement de marché." },
      whoLabel: { en: "WHO WE ADVISE", fr: "QUI NOUS ACCOMPAGNONS" },
      whoItems: [
        { en: "Founders incorporating their first venture", fr: "Fondateurs créant leur première société" },
        { en: "Companies raising seed or Series A", fr: "Sociétés en levée seed ou Série A" },
        { en: "VCs structuring investments into the region", fr: "Fonds VC structurant leurs investissements dans la région" },
        { en: "Growth-stage operators preparing for exit", fr: "Opérateurs en croissance préparant une sortie" },
      ],
    },
    services: {
      eyebrow: { en: "WHAT WE DO", fr: "CE QUE NOUS FAISONS" },
      h2: { en: "Our services.", fr: "Nos services." },
      intro: {
        en: "Comprehensive legal support from incorporation through to exit — designed for the speed of early-stage operating realities.",
        fr: "Accompagnement juridique complet, de la constitution à la sortie — conçu pour la vitesse des réalités opérationnelles en amorçage.",
      },
      items: [
        { num: "01", title: { en: "Company Formation", fr: "Constitution de Société" }, body: { en: "Incorporation in UAE mainland, free zones (DIFC, ADGM, DMCC), and French jurisdictions (SAS, SARL) — calibrated to the founders' fundraising and operating plans.", fr: "Constitution sur le mainland émirien, en zones franches (DIFC, ADGM, DMCC) et en France (SAS, SARL) — calibrée sur les plans de levée et d'exploitation des fondateurs." } },
        { num: "02", title: { en: "Founder Agreements", fr: "Pactes de Fondateurs" }, body: { en: "Vesting schedules, founder share classes, decision rights, and the mechanics of what happens when a founder leaves — the document that prevents most early-stage disputes.", fr: "Calendriers de vesting, catégories de parts de fondateurs, droits de décision et mécaniques de départ d'un fondateur — le document qui prévient la plupart des conflits en phase d'amorçage." } },
        { num: "03", title: { en: "Seed-Stage Fundraising", fr: "Levée de Fonds Seed" }, body: { en: "Convertible notes, SAFEs, and equity rounds with regional and international investors. Term sheet negotiation through to definitive documentation.", fr: "Notes convertibles, SAFE et tours en equity avec investisseurs régionaux et internationaux. Négociation du term sheet jusqu'à la documentation définitive." } },
        { num: "04", title: { en: "Series A and Beyond", fr: "Série A et au-delà" }, body: { en: "Priced equity rounds with institutional lead investors, including preferred share design, protective provisions, board composition, and information rights.", fr: "Tours en equity avec investisseur lead institutionnel, incluant la conception des actions de préférence, les protective provisions, la composition du conseil et les droits d'information." } },
        { num: "05", title: { en: "ESOP & Equity Incentives", fr: "ESOP & Plans d'Incitation" }, body: { en: "Employee stock option plan design and implementation, including tax-efficient structures for UAE and French tax-resident employees.", fr: "Conception et mise en œuvre de plans d'attribution d'options, y compris des structures fiscalement efficientes pour les salariés résidents fiscaux émiriens et français." } },
        { num: "06", title: { en: "Convertible Instruments", fr: "Instruments Convertibles" }, body: { en: "Convertible notes, SAFEs, and bridge financing — drafted with the company's expected priced round already mapped, not as a standalone document.", fr: "Notes convertibles, SAFE et financements relais — rédigés avec le tour en equity attendu déjà cartographié, pas comme un document isolé." } },
        { num: "07", title: { en: "Investor Terms Negotiation", fr: "Négociation des Termes Investisseurs" }, body: { en: "Founder-side review and negotiation of investor term sheets — knowing which terms are standard, which are aggressive, and which to push back on.", fr: "Revue et négociation côté fondateurs des term sheets investisseurs — en distinguant les termes standards, les termes agressifs et ceux à renégocier." } },
        { num: "08", title: { en: "Exit & Acquisition Support", fr: "Accompagnement de Sortie & Acquisition" }, body: { en: "Preparation for strategic exit, secondary sales, and acquisition by larger groups — including pre-deal cleanup of historical structures and cap-table grooming.", fr: "Préparation à la sortie stratégique, aux cessions secondaires et à l'acquisition par des groupes plus grands — y compris le nettoyage pré-deal des structures historiques et la mise en ordre de la cap table." } },
      ],
    },
    whatSetsApart: {
      eyebrow: { en: "WHAT SETS THIS PRACTICE APART", fr: "CE QUI DISTINGUE CETTE PRATIQUE" },
      h2: { en: "How we work, in practice.", fr: "Comment nous travaillons, concrètement." },
      cards: [
        { num: "01", title: { en: "Built to scale, not just to incorporate.", fr: "Construit pour croître, pas seulement pour créer." }, body: { en: "The seed structure we design assumes a Series A is coming, and a Series B after that. Founders save the cost of restructuring once the company starts moving — because the restructuring was never needed.", fr: "La structure seed que nous concevons part du principe qu'une Série A arrive, puis une Série B. Les fondateurs s'épargnent le coût de la restructuration lorsque la société accélère — parce que la restructuration n'était pas nécessaire." } },
        { num: "02", title: { en: "Founder-side instinct.", fr: "L'instinct côté fondateur." }, body: { en: "We know which investor terms are standard and worth conceding, and which are aggressive and worth pushing back on. Founders should not give away protective provisions they did not need to give away.", fr: "Nous savons quels termes investisseurs sont standards et méritent d'être concédés, et lesquels sont agressifs et méritent d'être renégociés. Les fondateurs n'ont pas à céder des protective provisions qu'ils n'avaient pas besoin de céder." } },
        { num: "03", title: { en: "Plain English from day one.", fr: "Un langage clair dès le premier jour." }, body: { en: "Your cap table, your SHA, and your option plan should be readable by you — not only by your lawyer. We deliver the technical document and the plain-English summary together.", fr: "Votre cap table, votre pacte d'associés et votre plan d'options doivent être lisibles par vous — pas seulement par votre avocat. Nous délivrons le document technique et la synthèse en langage clair ensemble." } },
        { num: "04", title: { en: "Speed without shortcuts.", fr: "De la vitesse sans raccourcis." }, body: { en: "Early-stage deals cannot wait two weeks for a markup. They also cannot tolerate a sloppy document. We turn rounds at the speed founders need, without sacrificing the discipline the next round will demand.", fr: "Les opérations en amorçage ne peuvent pas attendre deux semaines pour une markup. Elles ne peuvent pas non plus tolérer un document bâclé. Nous traitons les tours à la vitesse que les fondateurs exigent, sans sacrifier la discipline que le tour suivant demandera." } },
      ],
    },
    closingCta: {
      eyebrow: { en: "BUILD THE NEXT STEP", fr: "CONSTRUIRE L'ÉTAPE SUIVANTE" },
      heading: { en: "Founding, raising, or preparing to exit?\nBring it to a partner directly.", fr: "En création, en levée ou en préparation de sortie ?\nAdressez-vous directement à un associé." },
      cta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
    },
  },
  {
    slug: "ip-technology",
    slugFr: "propriete-intellectuelle-technologie",
    title: { en: "IP & Technology", fr: "Propriété Intellectuelle & Technologie" },
    category: { en: "IP & TECHNOLOGY", fr: "PROPRIÉTÉ INTELLECTUELLE & TECHNOLOGIE" },
    meta: {
      en: {
        title: "IP & Technology Law | Milton Hobbs — Dubai & Paris",
        description: "Intellectual property strategy, technology contracting, and data protection counsel for businesses where IP is a core asset. UAE PDPL, EU GDPR, and cross-border licensing — partner-led.",
        keywords: "IP law firm Dubai, technology lawyer UAE, SaaS contracts Dubai, UAE PDPL compliance, trademark protection GCC",
      },
      fr: {
        title: "Propriété Intellectuelle & Technologie | Milton Hobbs — Dubaï & Paris",
        description: "Stratégie de propriété intellectuelle, contractualisation technologique et conseil en protection des données pour les entreprises dont la PI est un actif central. PDPL émirienne, RGPD et licensing transfrontalier — porté par l'associé.",
        keywords: "cabinet PI Dubaï, avocat technologie Émirats, contrats SaaS Dubaï, conformité PDPL Émirats, protection des marques CCG",
      },
    },
    hero: {
      eyebrow: { en: "OUR EXPERTISE — IP & TECHNOLOGY", fr: "NOTRE EXPERTISE — PROPRIÉTÉ INTELLECTUELLE & TECHNOLOGIE" },
      h1: { en: "Protect the asset. License with confidence.", fr: "Protéger l'actif. Licencier en confiance." },
      body: {
        en: "From trademark and copyright protection to SaaS contracting, licensing structures, and data protection compliance — Milton Hobbs delivers technical, partner-led IP counsel across the UAE, France, and the wider Gulf.",
        fr: "De la protection des marques et des droits d'auteur à la contractualisation SaaS, aux structures de licensing et à la conformité en protection des données — Milton Hobbs délivre un conseil PI technique et porté par l'associé entre les Émirats arabes unis, la France et le Golfe au sens large.",
      },
      primaryCta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
      secondaryCta: { en: "View Services", fr: "Voir les Services" },
    },
    overview: {
      eyebrow: { en: "PRACTICE OVERVIEW", fr: "PRÉSENTATION DE LA PRATIQUE" },
      h2: { en: "IP that holds value across borders.", fr: "Une PI qui conserve sa valeur à travers les frontières." },
      paragraphs: [
        {
          en: "Milton Hobbs' IP & Technology practice advises businesses where intellectual property is the central asset. The work spans trademark, copyright, and design rights; technology and SaaS contracting; cross-border licensing structures; and data protection compliance under the UAE PDPL, EU GDPR, and DIFC and ADGM regimes — increasingly interlinked, increasingly enforced.",
          fr: "La pratique Propriété Intellectuelle & Technologie de Milton Hobbs accompagne les entreprises dont la PI constitue l'actif central. Le travail couvre les marques, les droits d'auteur et les dessins et modèles ; la contractualisation technologique et SaaS ; les structures de licensing transfrontalières ; et la conformité en protection des données sous la PDPL émirienne, le RGPD et les régimes DIFC et ADGM — de plus en plus liés, de plus en plus appliqués.",
        },
        {
          en: "Clients include technology operators protecting their core stack, SaaS providers contracting across jurisdictions, IP holders licensing internationally, and companies bringing AI-powered products to market. The work is technical, the stakes are operational, and the regulators are no longer patient.",
          fr: "Les clients incluent des opérateurs technologiques protégeant leur stack, des fournisseurs SaaS contractant entre juridictions, des titulaires de PI en licensing international et des entreprises lançant des produits à composante IA. Le travail est technique, les enjeux sont opérationnels, et les régulateurs ne sont plus patients.",
        },
      ],
    },
    practiceCard: {
      heading: { en: "IP, technology, and data — under one roof.", fr: "PI, technologie et données — sous un même toit." },
      whoLabel: { en: "WHO WE ADVISE", fr: "QUI NOUS ACCOMPAGNONS" },
      whoItems: [
        { en: "Technology operators protecting their core IP", fr: "Opérateurs technologiques protégeant leur PI" },
        { en: "SaaS providers contracting across jurisdictions", fr: "Fournisseurs SaaS contractant entre juridictions" },
        { en: "IP holders licensing internationally", fr: "Titulaires de PI en licensing international" },
        { en: "Companies bringing AI products to market", fr: "Entreprises lançant des produits à composante IA" },
      ],
    },
    services: {
      eyebrow: { en: "WHAT WE DO", fr: "CE QUE NOUS FAISONS" },
      h2: { en: "Our services.", fr: "Nos services." },
      intro: {
        en: "Comprehensive IP and technology counsel from registration through licensing, contracting, and enforcement.",
        fr: "Conseil PI et technologie complet, de l'enregistrement au licensing, à la contractualisation et à l'application.",
      },
      items: [
        { num: "01", title: { en: "Trademark Protection", fr: "Protection des Marques" }, body: { en: "Trademark clearance, registration, and portfolio management across the UAE, France, the EU, and via the Madrid System for international protection.", fr: "Clearance de marques, enregistrement et gestion de portefeuille entre les Émirats, la France, l'UE et via le système de Madrid pour la protection internationale." } },
        { num: "02", title: { en: "Copyright & Content Rights", fr: "Droits d'Auteur & Droits sur Contenus" }, body: { en: "Copyright protection, content licensing, and the legal architecture for media, publishing, and digital content businesses operating across the GCC and Europe.", fr: "Protection des droits d'auteur, licensing de contenus et architecture juridique pour les médias, l'édition et les entreprises de contenu numérique entre le CCG et l'Europe." } },
        { num: "03", title: { en: "SaaS & Technology Contracts", fr: "Contrats SaaS & Technologiques" }, body: { en: "Master services agreements, software licences, terms of service, and data processing addenda — drafted for actual deployment, not for the contract library.", fr: "Master services agreements, licences logicielles, conditions d'utilisation et data processing addenda — rédigés pour le déploiement réel, pas pour la bibliothèque de contrats." } },
        { num: "04", title: { en: "Licensing Structures", fr: "Structures de Licensing" }, body: { en: "Cross-border IP licensing frameworks for technology, brand, and know-how — calibrated to UAE, French, and EU tax and regulatory requirements.", fr: "Cadres de licensing PI transfrontaliers pour la technologie, la marque et le savoir-faire — calibrés sur les exigences fiscales et réglementaires émiriennes, françaises et européennes." } },
        { num: "05", title: { en: "Data Protection Compliance", fr: "Conformité Protection des Données" }, body: { en: "UAE PDPL, EU GDPR, DIFC and ADGM data protection regimes — registration, processing agreements, cross-border transfers, and incident response.", fr: "PDPL émirienne, RGPD, régimes DIFC et ADGM — enregistrement, accords de traitement, transferts transfrontaliers et gestion d'incidents." } },
        { num: "06", title: { en: "IP Transactions", fr: "Transactions PI" }, body: { en: "Assignment, sale, and licensing of IP portfolios in M&A contexts; due diligence on IP assets; and post-acquisition IP integration.", fr: "Cession, vente et licensing de portefeuilles PI dans le cadre d'opérations M&A ; due diligence sur les actifs PI ; et intégration PI post-acquisition." } },
        { num: "07", title: { en: "AI & Emerging Technology", fr: "IA & Technologies Émergentes" }, body: { en: "Legal frameworks for AI deployment, including model training data agreements, output rights, liability allocation, and compliance with emerging UAE and EU AI regulation.", fr: "Cadres juridiques pour le déploiement d'IA, y compris les accords de données d'entraînement, les droits sur les outputs, l'allocation de responsabilité et la conformité avec la réglementation émergente émirienne et européenne de l'IA." } },
        { num: "08", title: { en: "IP Disputes & Enforcement", fr: "Contentieux & Application PI" }, body: { en: "Trademark and copyright enforcement, anti-counterfeiting, and IP disputes before UAE, DIFC, and French courts and administrative bodies.", fr: "Application des marques et droits d'auteur, lutte contre la contrefaçon et contentieux PI devant les juridictions émiriennes, DIFC, françaises et les organes administratifs." } },
      ],
    },
    whatSetsApart: {
      eyebrow: { en: "WHAT SETS THIS PRACTICE APART", fr: "CE QUI DISTINGUE CETTE PRATIQUE" },
      h2: { en: "How we work, in practice.", fr: "Comment nous travaillons, concrètement." },
      cards: [
        { num: "01", title: { en: "We read the technology.", fr: "Nous lisons la technologie." }, body: { en: "Not just the contracts around it. Drafting a SaaS agreement without understanding the architecture it describes produces clauses that do not match the system in production. We read the system first.", fr: "Pas seulement les contrats qui l'entourent. Rédiger un accord SaaS sans comprendre l'architecture qu'il décrit produit des clauses qui ne correspondent pas au système en production. Nous lisons le système d'abord." } },
        { num: "02", title: { en: "Privacy as architecture, not as bolt-on.", fr: "La confidentialité comme architecture, pas comme ajout." }, body: { en: "Data protection compliance designed into a product is operational. Data protection compliance bolted on after launch is theatre. We work with engineering teams on the structure, not just legal teams on the policy.", fr: "La conformité protection des données conçue dans le produit est opérationnelle. Celle ajoutée après le lancement est de la mise en scène. Nous travaillons avec les équipes d'ingénierie sur la structure, pas seulement avec les équipes juridiques sur la politique." } },
        { num: "03", title: { en: "Cross-border IP in one register.", fr: "La PI transfrontalière dans un seul registre." }, body: { en: "UAE, French, EU, and Madrid System protections are coordinated in a single portfolio view — not relayed between separate counsel in each jurisdiction. One filing strategy, one renewal calendar.", fr: "Les protections émiriennes, françaises, européennes et issues du système de Madrid sont coordonnées dans une vision unique de portefeuille — pas relayées entre des conseils séparés dans chaque juridiction. Une stratégie de dépôt, un calendrier de renouvellement." } },
        { num: "04", title: { en: "Enforcement realism.", fr: "Réalisme dans l'application." }, body: { en: "We tell you what your IP is actually worth defending, and where. Filing a lawsuit because the rights exist is not strategy. We advise on the IP fights that move the business, and we say so when an IP fight will not.", fr: "Nous vous disons ce que votre PI mérite réellement d'être défendu, et où. Engager une procédure parce que les droits existent n'est pas une stratégie. Nous conseillons les combats PI qui font avancer l'entreprise, et nous le disons quand un combat PI ne le fera pas." } },
      ],
    },
    closingCta: {
      eyebrow: { en: "PROTECT WHAT MATTERS", fr: "PROTÉGER CE QUI COMPTE" },
      heading: { en: "Have an IP asset or a tech contract to consider? Bring it to a partner directly.", fr: "Un actif PI ou un contrat tech à examiner ? Adressez-vous directement à un associé." },
      cta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
    },
  },
  {
    slug: "real-estate-property",
    slugFr: "immobilier-patrimoine",
    title: { en: "Real Estate & Property", fr: "Immobilier & Patrimoine" },
    category: { en: "REAL ESTATE & PROPERTY", fr: "IMMOBILIER & PATRIMOINE" },
    meta: {
      en: {
        title: "Real Estate & Property Law | Milton Hobbs — Dubai & Paris",
        description: "Commercial and residential real estate transactions, lease structuring, and cross-border property holdings across Dubai, Abu Dhabi, and France. Partner-led counsel for developers, investors, and occupiers.",
        keywords: "real estate lawyer Dubai, property law UAE, lease negotiation Dubai, cross-border property France UAE, real estate disputes GCC",
      },
      fr: {
        title: "Immobilier & Patrimoine | Milton Hobbs — Dubaï & Paris",
        description: "Transactions immobilières commerciales et résidentielles, structuration des baux et détention transfrontalière entre Dubaï, Abou Dhabi et la France. Conseil porté par l'associé pour promoteurs, investisseurs et occupants.",
        keywords: "avocat immobilier Dubaï, droit immobilier Émirats, négociation de baux Dubaï, immobilier transfrontalier France Émirats, contentieux immobilier CCG",
      },
    },
    hero: {
      eyebrow: { en: "OUR EXPERTISE — REAL ESTATE & PROPERTY", fr: "NOTRE EXPERTISE — IMMOBILIER & PATRIMOINE" },
      h1: { en: "Acquire deliberately. Hold cleanly.", fr: "Acquérir avec discernement. Détenir avec rigueur." },
      body: {
        en: "From commercial acquisitions and lease structuring to cross-border property holdings and real estate disputes — Milton Hobbs delivers precise, partner-led property counsel across the UAE, France, and the wider Gulf.",
        fr: "Des acquisitions commerciales et de la structuration de baux aux détentions immobilières transfrontalières et au contentieux immobilier — Milton Hobbs délivre un conseil immobilier précis et porté par l'associé entre les Émirats arabes unis, la France et le Golfe au sens large.",
      },
      primaryCta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
      secondaryCta: { en: "View Services", fr: "Voir les Services" },
    },
    overview: {
      eyebrow: { en: "PRACTICE OVERVIEW", fr: "PRÉSENTATION DE LA PRATIQUE" },
      h2: { en: "Property work that respects what the building actually is.", fr: "Un travail immobilier qui respecte ce que le bien est réellement." },
      paragraphs: [
        {
          en: "Milton Hobbs' Real Estate & Property practice advises developers, investors, occupiers, and family offices on the full spectrum of property work in the UAE and France. From freehold acquisitions in Dubai and Abu Dhabi to French SCI structures, from build-to-suit leases to portfolio dispositions, the practice combines transactional rigour with structural fluency in two very different property regimes.",
          fr: "La pratique Immobilier & Patrimoine de Milton Hobbs accompagne promoteurs, investisseurs, occupants et family offices sur l'ensemble du spectre immobilier aux Émirats et en France. Des acquisitions en freehold à Dubaï et Abou Dhabi aux structures SCI françaises, des baux build-to-suit aux dispositions de portefeuille, la pratique allie rigueur transactionnelle et maîtrise structurelle de deux régimes immobiliers très différents.",
        },
        {
          en: "Property is rarely a simple asset class. Title, zoning, regulatory restrictions, and the documents that govern occupation interact in ways that surface late if they are not surfaced early. We surface them early.",
          fr: "L'immobilier est rarement une classe d'actifs simple. Le titre, le zonage, les restrictions réglementaires et les documents qui régissent l'occupation interagissent de manières qui apparaissent tard si elles ne sont pas révélées tôt. Nous les révélons tôt.",
        },
      ],
    },
    practiceCard: {
      heading: { en: "Property law across two systems.", fr: "Le droit immobilier sur deux systèmes." },
      whoLabel: { en: "WHO WE ADVISE", fr: "QUI NOUS ACCOMPAGNONS" },
      whoItems: [
        { en: "Developers structuring complex projects", fr: "Promoteurs structurant des projets complexes" },
        { en: "Investors building cross-border portfolios", fr: "Investisseurs construisant des portefeuilles transfrontaliers" },
        { en: "Occupiers negotiating significant leases", fr: "Occupants négociant des baux significatifs" },
        { en: "Family offices managing real estate holdings", fr: "Family offices gérant des détentions immobilières" },
      ],
    },
    services: {
      eyebrow: { en: "WHAT WE DO", fr: "CE QUE NOUS FAISONS" },
      h2: { en: "Our services.", fr: "Nos services." },
      intro: {
        en: "Comprehensive real estate counsel from due diligence through transaction, occupation, and exit.",
        fr: "Conseil immobilier complet, de la due diligence à la transaction, à l'occupation et à la sortie.",
      },
      items: [
        { num: "01", title: { en: "Commercial Acquisitions & Sales", fr: "Acquisitions & Ventes Commerciales" }, body: { en: "Office, retail, industrial, and mixed-use transactions in the UAE and France — including title due diligence, transfer mechanics, and post-completion registration.", fr: "Transactions de bureaux, retail, industriel et mixte aux Émirats et en France — y compris due diligence titre, mécaniques de transfert et enregistrement post-closing." } },
        { num: "02", title: { en: "Residential Transactions", fr: "Transactions Résidentielles" }, body: { en: "High-value residential acquisitions, sales, and holding structures — particularly for international purchasers and family offices acquiring across multiple jurisdictions.", fr: "Acquisitions, ventes et structures de détention résidentielles haut de gamme — notamment pour les acquéreurs internationaux et les family offices acquérant entre plusieurs juridictions." } },
        { num: "03", title: { en: "Lease Structuring & Negotiation", fr: "Structuration & Négociation de Baux" }, body: { en: "Commercial leases negotiated as the financial instruments they are — drafted with attention to rent reviews, break options, service charge mechanics, and end-of-term obligations.", fr: "Baux commerciaux négociés comme les instruments financiers qu'ils sont — rédigés avec attention aux révisions de loyer, options de sortie, mécaniques de charges et obligations de fin de bail." } },
        { num: "04", title: { en: "Property Development", fr: "Promotion Immobilière" }, body: { en: "Legal support for development projects: land assembly, planning approvals, construction contracting, off-plan sales, and the corporate structures that hold the development entity.", fr: "Accompagnement juridique des projets de promotion : assemblage foncier, autorisations d'urbanisme, contractualisation construction, ventes en VEFA et structures corporate de la SPV de promotion." } },
        { num: "05", title: { en: "Free Zone Real Estate", fr: "Immobilier en Zone Franche" }, body: { en: "Property acquisitions and leases within DIFC, ADGM, JAFZA, and other UAE free zones — each governed by its own real estate framework and registration regime.", fr: "Acquisitions et baux dans le DIFC, l'ADGM, la JAFZA et autres zones franches émiriennes — chacune régie par son propre cadre immobilier et régime d'enregistrement." } },
        { num: "06", title: { en: "Cross-Border Holding Structures", fr: "Structures de Détention Transfrontalières" }, body: { en: "Tax-aware property holding architectures spanning UAE, French SCI structures, Luxembourg vehicles, and offshore trusts — designed for the family or fund actually using them.", fr: "Architectures de détention immobilière fiscalement avisées couvrant Émirats, SCI françaises, véhicules luxembourgeois et trusts offshore — conçues pour la famille ou le fonds qui les utilisera réellement." } },
        { num: "07", title: { en: "Property Finance", fr: "Financement Immobilier" }, body: { en: "Acquisition finance, development finance, refinancing, and security packages — including the intercreditor and enforcement considerations specific to each jurisdiction.", fr: "Financement d'acquisition, financement de promotion, refinancement et packages de sûretés — y compris les considérations intercréanciers et d'exécution propres à chaque juridiction." } },
        { num: "08", title: { en: "Real Estate Disputes", fr: "Contentieux Immobilier" }, body: { en: "Lease disputes, title disputes, construction claims, and enforcement actions before UAE courts, DIFC and ADGM courts, and French jurisdictions.", fr: "Contentieux baux, contentieux titre, réclamations construction et actions d'exécution devant les juridictions émiriennes, les tribunaux DIFC et ADGM, et les juridictions françaises." } },
      ],
    },
    whatSetsApart: {
      eyebrow: { en: "WHAT SETS THIS PRACTICE APART", fr: "CE QUI DISTINGUE CETTE PRATIQUE" },
      h2: { en: "How we work, in practice.", fr: "Comment nous travaillons, concrètement." },
      cards: [
        { num: "01", title: { en: "Beyond the title deed.", fr: "Au-delà du titre de propriété." }, body: { en: "We look at what the building actually is — its planning history, its compliance record, its operational permits — not only at what the title documents say it is. The asset on paper is rarely the asset on the ground.", fr: "Nous regardons ce que le bien est réellement — son historique d'urbanisme, son dossier de conformité, ses autorisations d'exploitation — pas seulement ce que les documents de titre indiquent. L'actif sur papier est rarement l'actif sur le terrain." } },
        { num: "02", title: { en: "Leases as financial instruments.", fr: "Les baux comme instruments financiers." }, body: { en: "A commercial lease is a multi-year cash flow with operational covenants attached. We read it that way — for present value, embedded risk, and the terms that will matter at year five — not only for the headline rent.", fr: "Un bail commercial est un flux de trésorerie pluriannuel assorti de covenants opérationnels. Nous le lisons ainsi — pour sa valeur actuelle, son risque inhérent et les termes qui compteront à la cinquième année — pas seulement pour le loyer d'affichage." } },
        { num: "03", title: { en: "Two systems on the same page.", fr: "Deux systèmes sur la même page." }, body: { en: "UAE freehold and leasehold mechanics and French SCI structures sit in the same memo when a client holds property across both. No relay between separate firms; no translation lag.", fr: "Les mécaniques émiriennes de freehold et leasehold et les structures françaises en SCI figurent dans le même mémo lorsqu'un client détient des biens dans les deux pays. Pas de relais entre cabinets séparés ; pas de délai de traduction." } },
        { num: "04", title: { en: "Through the holding period.", fr: "Sur toute la durée de détention." }, body: { en: "The partner who advises on the acquisition advises on the lease renewal, the refinancing, and eventually the disposition. The file does not get reintroduced at every event.", fr: "L'associé qui conseille à l'acquisition conseille au renouvellement de bail, au refinancement et, in fine, à la cession. Le dossier n'est pas réintroduit à chaque événement." } },
      ],
    },
    closingCta: {
      eyebrow: { en: "MOVE ON THE PROPERTY", fr: "AGIR SUR LE BIEN" },
      heading: { en: "Buying, leasing, or holding property? Bring it to a partner directly.", fr: "À l'achat, en location ou en détention ? Adressez-vous directement à un associé." },
      cta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
    },
  },
  {
    slug: "employment-labor",
    slugFr: "droit-du-travail-social",
    title: { en: "Employment & Labor", fr: "Droit du Travail & Social" },
    category: { en: "EMPLOYMENT & LABOR", fr: "DROIT DU TRAVAIL & SOCIAL" },
    meta: {
      en: {
        title: "Employment & Labor Law | Milton Hobbs — Dubai & Paris",
        description: "Employment counsel for employers and senior executives across the UAE and France. Contracts, terminations, executive compensation, and international mobility — partner-led, in confidence.",
        keywords: "employment lawyer Dubai, UAE Labour Law, French Code du travail, executive compensation UAE, international mobility Dubai Paris",
      },
      fr: {
        title: "Droit du Travail & Social | Milton Hobbs — Dubaï & Paris",
        description: "Conseil en droit social pour employeurs et dirigeants entre les Émirats et la France. Contrats, ruptures, rémunération des dirigeants et mobilité internationale — porté par l'associé, en toute discrétion.",
        keywords: "avocat droit social Dubaï, loi émirienne du travail, Code du travail français, rémunération des dirigeants Émirats, mobilité internationale Dubaï Paris",
      },
    },
    hero: {
      eyebrow: { en: "OUR EXPERTISE — EMPLOYMENT & LABOR", fr: "NOTRE EXPERTISE — DROIT DU TRAVAIL & SOCIAL" },
      h1: { en: "Hire well. Exit well. Without noise.", fr: "Recruter bien. Sortir bien. Sans bruit." },
      body: {
        en: "From senior executive contracts and international mobility to terminations, restructurings, and workplace investigations — Milton Hobbs delivers discreet, partner-led employment counsel across the UAE, France, and the wider Gulf.",
        fr: "Des contrats de dirigeants et de la mobilité internationale aux ruptures, restructurations et enquêtes internes — Milton Hobbs délivre un conseil en droit social discret et porté par l'associé entre les Émirats arabes unis, la France et le Golfe au sens large.",
      },
      primaryCta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
      secondaryCta: { en: "View Services", fr: "Voir les Services" },
    },
    overview: {
      eyebrow: { en: "PRACTICE OVERVIEW", fr: "PRÉSENTATION DE LA PRATIQUE" },
      h2: { en: "Employment counsel for the decisions that matter.", fr: "Un conseil social pour les décisions qui comptent." },
      paragraphs: [
        {
          en: "Milton Hobbs' Employment & Labor practice advises employers and senior executives on the moments that shape the workforce: the senior hire, the senior exit, the restructuring, and the dispute. The work is shaped by UAE Labour Law, French Code du travail, and the operational realities of moving people between the two — and it is conducted with the discretion every workforce decision requires.",
          fr: "La pratique Droit du Travail & Social de Milton Hobbs conseille employeurs et dirigeants sur les moments qui façonnent les effectifs : le recrutement senior, la sortie senior, la restructuration et le contentieux. Le travail est encadré par la loi émirienne du travail, le Code du travail français et les réalités opérationnelles de la mobilité entre les deux — et il est mené avec la discrétion que chaque décision relative aux équipes exige.",
        },
        {
          en: "We act for companies managing complex separations, executives reviewing their employment terms, HR leaders facing investigation findings, and groups restructuring teams across jurisdictions. Whatever the brief, the work is conducted with the discretion expected of senior counsel.",
          fr: "Nous intervenons pour les entreprises gérant des séparations complexes, les dirigeants examinant leurs conditions d'emploi, les responsables RH face aux conclusions d'une enquête, et les groupes en restructuration d'équipes entre juridictions. Quel que soit le mandat, le travail est conduit avec la discrétion attendue d'un conseil senior.",
        },
      ],
    },
    practiceCard: {
      heading: { en: "The hire, the exit, and the moments in between.", fr: "Le recrutement, la sortie, et les moments entre les deux." },
      whoLabel: { en: "WHO WE ADVISE", fr: "QUI NOUS ACCOMPAGNONS" },
      whoItems: [
        { en: "Employers managing senior hires and exits", fr: "Employeurs gérant des recrutements et sorties seniors" },
        { en: "Executives reviewing their employment terms", fr: "Dirigeants examinant leurs conditions d'emploi" },
        { en: "HR leaders facing complex separations", fr: "Responsables RH face à des séparations complexes" },
        { en: "Groups structuring international mobility", fr: "Groupes structurant la mobilité internationale" },
      ],
    },
    services: {
      eyebrow: { en: "WHAT WE DO", fr: "CE QUE NOUS FAISONS" },
      h2: { en: "Our services.", fr: "Nos services." },
      intro: {
        en: "Comprehensive employment counsel from hire through to exit, with the discretion executive matters require.",
        fr: "Conseil en droit social complet, du recrutement à la sortie, avec la discrétion qu'exigent les dossiers de dirigeants.",
      },
      items: [
        { num: "01", title: { en: "Employment Contracts", fr: "Contrats de Travail" }, body: { en: "Drafting and negotiation of employment agreements, executive service contracts, restrictive covenants, and confidentiality undertakings under UAE and French law.", fr: "Rédaction et négociation de contrats de travail, contrats de mandataire social, clauses restrictives et engagements de confidentialité sous droit émirien et français." } },
        { num: "02", title: { en: "Executive Compensation", fr: "Rémunération des Dirigeants" }, body: { en: "Total compensation structuring for C-suite and senior management — salary, bonus, deferred compensation, equity participation, and severance architecture.", fr: "Structuration de la rémunération globale pour la direction et l'encadrement supérieur — salaire, bonus, rémunération différée, participation au capital et architecture de séparation." } },
        { num: "03", title: { en: "UAE Labour Law Compliance", fr: "Conformité Loi Émirienne du Travail" }, body: { en: "Compliance frameworks under UAE Federal Labour Law and free zone employment regimes (DIFC, ADGM), including workforce policies and statutory entitlements.", fr: "Cadres de conformité sous la loi fédérale émirienne du travail et les régimes d'emploi en zones franches (DIFC, ADGM), y compris politiques RH et droits statutaires." } },
        { num: "04", title: { en: "French Employment Law", fr: "Droit Social Français" }, body: { en: "Compliance and advisory under the Code du travail — works council relations, redundancy procedures, and the increased complexity of French employment litigation.", fr: "Conformité et conseil sous le Code du travail — relations CSE, procédures de licenciement et la complexité croissante du contentieux social français." } },
        { num: "05", title: { en: "International Mobility", fr: "Mobilité Internationale" }, body: { en: "Cross-border secondments, expatriate packages, and the legal architecture for moving senior staff between the UAE and France — including tax, immigration, and social security coordination.", fr: "Détachements transfrontaliers, packages d'expatriation et architecture juridique pour la mobilité des cadres entre les Émirats et la France — y compris coordination fiscale, immigration et sécurité sociale." } },
        { num: "06", title: { en: "Terminations & Severance", fr: "Ruptures & Indemnisation" }, body: { en: "Discreet management of senior exits — settlement negotiations, release agreements, and the reputation-aware handling that complex separations require.", fr: "Gestion discrète des sorties seniors — négociations transactionnelles, protocoles de rupture et le traitement attentif à la réputation que les séparations complexes exigent." } },
        { num: "07", title: { en: "Workplace Investigations", fr: "Enquêtes Internes" }, body: { en: "Independent investigations into harassment, misconduct, and grievance complaints — conducted to the procedural standards required by regulators and the courts.", fr: "Enquêtes indépendantes sur le harcèlement, les manquements et les plaintes — conduites selon les standards procéduraux exigés par les régulateurs et les juridictions." } },
        { num: "08", title: { en: "Employment Litigation", fr: "Contentieux Social" }, body: { en: "Representation in employment disputes before UAE labour courts, DIFC and ADGM employment tribunals, and French conseils de prud'hommes — with a preference for resolution before filing where it is achievable.", fr: "Représentation dans les contentieux sociaux devant les juridictions émiriennes du travail, les employment tribunals du DIFC et de l'ADGM, et les conseils de prud'hommes français — avec une préférence pour la résolution avant saisine lorsqu'elle est possible." } },
      ],
    },
    whatSetsApart: {
      eyebrow: { en: "WHAT SETS THIS PRACTICE APART", fr: "CE QUI DISTINGUE CETTE PRATIQUE" },
      h2: { en: "How we work, in practice.", fr: "Comment nous travaillons, concrètement." },
      cards: [
        { num: "01", title: { en: "Quiet exits.", fr: "Des sorties discrètes." }, body: { en: "Most employment disputes resolve before they become disputes — when the conversation is conducted properly the first time. We invest the work upstream so the matter never reaches the public stage.", fr: "La plupart des contentieux sociaux se résolvent avant de devenir des contentieux — lorsque la conversation est menée correctement la première fois. Nous investissons le travail en amont pour que le dossier n'atteigne jamais la scène publique." } },
        { num: "02", title: { en: "Senior on both sides.", fr: "Senior des deux côtés." }, body: { en: "We act for employers and for executives. Each engagement is exclusive to one side of the matter; the firm-level experience of both sides makes the advice on either side sharper.", fr: "Nous intervenons pour les employeurs et pour les dirigeants. Chaque engagement est exclusif à un côté du dossier ; l'expérience du cabinet sur les deux côtés affine le conseil sur chacun." } },
        { num: "03", title: { en: "The conversation before the document.", fr: "La conversation avant le document." }, body: { en: "Most workforce matters turn on the conversation between manager and employee — not on the document that follows it. We advise on what to say, when to say it, and in what setting, before we draft anything.", fr: "La plupart des dossiers RH se jouent dans la conversation entre manager et collaborateur — pas dans le document qui la suit. Nous conseillons sur ce qu'il faut dire, à quel moment et dans quel cadre, avant toute rédaction." } },
        { num: "04", title: { en: "Two systems, one engagement.", fr: "Deux systèmes, un engagement." }, body: { en: "UAE Labour Law and French Code du travail under the same roof. A senior leaving Paris for Dubai — or the other way — is one engagement, not two parallel firms reconciling positions by email.", fr: "Loi émirienne du travail et Code du travail français sous le même toit. Un dirigeant quittant Paris pour Dubaï — ou l'inverse — fait l'objet d'un seul engagement, pas de deux cabinets en parallèle conciliant leurs positions par email." } },
      ],
    },
    closingCta: {
      eyebrow: { en: "MANAGE THE TRANSITION", fr: "PILOTER LA TRANSITION" },
      heading: { en: "Hiring, exiting, or restructuring a team?\nBring it to a partner directly.", fr: "En recrutement, en sortie ou en restructuration d'équipe ?\nAdressez-vous directement à un associé." },
      cta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
    },
  },
  {
    slug: "litigation-disputes",
    slugFr: "contentieux-litiges",
    title: { en: "Litigation & Disputes", fr: "Contentieux & Litiges" },
    category: { en: "LITIGATION & DISPUTES", fr: "CONTENTIEUX & LITIGES" },
    meta: {
      en: {
        title: "Litigation & Disputes | Milton Hobbs — Dubai & Paris",
        description: "Commercial litigation, international arbitration, and dispute resolution before UAE courts, DIFC and ADGM, French jurisdictions, and major arbitral institutions. Partner-led, resolution-focused.",
        keywords: "litigation lawyer Dubai, international arbitration UAE, DIFC courts litigation, ADGM courts, French commercial litigation Paris",
      },
      fr: {
        title: "Contentieux & Litiges | Milton Hobbs — Dubaï & Paris",
        description: "Contentieux commercial, arbitrage international et résolution des litiges devant les juridictions émiriennes, le DIFC et l'ADGM, les juridictions françaises et les principales institutions d'arbitrage. Porté par l'associé, axé résolution.",
        keywords: "avocat contentieux Dubaï, arbitrage international Émirats, contentieux tribunaux DIFC, tribunaux ADGM, contentieux commercial français Paris",
      },
    },
    hero: {
      eyebrow: { en: "OUR EXPERTISE — LITIGATION & DISPUTES", fr: "NOTRE EXPERTISE — CONTENTIEUX & LITIGES" },
      h1: { en: "Hold the position. Resolve with finality.", fr: "Tenir la position. Résoudre définitivement." },
      body: {
        en: "From pre-action strategy and commercial litigation to international arbitration and enforcement of judgments — Milton Hobbs delivers composed, partner-led dispute counsel across the UAE, France, and the wider Gulf.",
        fr: "De la stratégie pré-contentieuse et du contentieux commercial à l'arbitrage international et à l'exécution des décisions — Milton Hobbs délivre un conseil contentieux posé et porté par l'associé entre les Émirats arabes unis, la France et le Golfe au sens large.",
      },
      primaryCta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
      secondaryCta: { en: "View Services", fr: "Voir les Services" },
    },
    overview: {
      eyebrow: { en: "PRACTICE OVERVIEW", fr: "PRÉSENTATION DE LA PRATIQUE" },
      h2: { en: "Disputes, resolved with the same composure as deal-making.", fr: "Des litiges résolus avec la même sérénité que les transactions." },
      paragraphs: [
        {
          en: "Milton Hobbs' Litigation & Disputes practice represents companies, boards, and individuals before UAE courts, DIFC and ADGM courts, French jurisdictions, and major international arbitral institutions. The team approaches dispute work as a continuation of the firm's transactional discipline — positions are built carefully, briefs are written precisely, and the strategic question of whether to litigate at all is taken as seriously as the question of how to.",
          fr: "La pratique Contentieux & Litiges de Milton Hobbs représente entreprises, conseils d'administration et particuliers devant les juridictions émiriennes, les tribunaux DIFC et ADGM, les juridictions françaises et les principales institutions d'arbitrage international. L'équipe aborde le contentieux comme la continuation de la discipline transactionnelle du cabinet — les positions sont construites soigneusement, les écritures sont rédigées avec précision, et la question stratégique de savoir s'il faut engager une procédure est prise aussi sérieusement que celle de comment l'engager.",
        },
        {
          en: "Most disputes are best resolved before they reach a courtroom. When that is the right outcome, we say so and we help achieve it. When litigation or arbitration is the right outcome, we prepare a case the other side respects — and a brief experienced counsel will take seriously.",
          fr: "La plupart des litiges sont mieux résolus avant d'atteindre une salle d'audience. Lorsque c'est le bon résultat, nous le disons et nous le faisons advenir. Lorsque le contentieux ou l'arbitrage est le bon chemin, nous préparons un dossier que la partie adverse respecte — et des écritures qu'un conseil expérimenté prendra au sérieux.",
        },
      ],
    },
    practiceCard: {
      heading: { en: "Disputes, before and through the proceedings.", fr: "Le contentieux, avant et pendant la procédure." },
      whoLabel: { en: "WHO WE ADVISE", fr: "QUI NOUS ACCOMPAGNONS" },
      whoItems: [
        { en: "Companies defending commercial claims", fr: "Entreprises en défense de réclamations commerciales" },
        { en: "Claimants enforcing contractual rights", fr: "Demandeurs faisant exécuter des droits contractuels" },
        { en: "Parties to international arbitration", fr: "Parties à un arbitrage international" },
        { en: "Boards facing regulatory action", fr: "Conseils d'administration face à une action réglementaire" },
      ],
    },
    services: {
      eyebrow: { en: "WHAT WE DO", fr: "CE QUE NOUS FAISONS" },
      h2: { en: "Our services.", fr: "Nos services." },
      intro: {
        en: "Comprehensive dispute counsel from pre-action strategy through trial, arbitration, and enforcement.",
        fr: "Conseil contentieux complet, de la stratégie pré-contentieuse au procès, à l'arbitrage et à l'exécution.",
      },
      items: [
        { num: "01", title: { en: "Commercial Litigation", fr: "Contentieux Commercial" }, body: { en: "Contract disputes, shareholder disputes, fraud claims, and post-M&A litigation before UAE courts, DIFC and ADGM courts, and French jurisdictions.", fr: "Contentieux contractuel, conflits entre associés, actions en fraude et contentieux post-M&A devant les juridictions émiriennes, les tribunaux DIFC et ADGM et les juridictions françaises." } },
        { num: "02", title: { en: "International Arbitration", fr: "Arbitrage International" }, body: { en: "Arbitration before major institutions — ICC, LCIA, DIAC, ADGM Arbitration Centre, and others — including treaty-based investor-state disputes where the firm's profile supports it.", fr: "Arbitrage devant les principales institutions — ICC, LCIA, DIAC, Centre d'arbitrage de l'ADGM et autres — y compris les contentieux investisseurs-États fondés sur des traités lorsque le profil du cabinet le justifie." } },
        { num: "03", title: { en: "DIFC & ADGM Courts", fr: "Tribunaux DIFC & ADGM" }, body: { en: "Practice before the common-law commercial courts within the UAE financial free zones, including injunctive relief, summary judgment, and enforcement applications.", fr: "Pratique devant les tribunaux commerciaux de common law des zones franches financières émiriennes, y compris référés, jugements sommaires et requêtes en exécution." } },
        { num: "04", title: { en: "UAE Federal Courts", fr: "Juridictions Fédérales Émiriennes" }, body: { en: "Representation before the UAE civil and commercial courts, including the procedural and language considerations specific to the Arabic-language federal court system.", fr: "Représentation devant les juridictions civiles et commerciales émiriennes, y compris les considérations procédurales et linguistiques propres au système judiciaire fédéral arabophone." } },
        { num: "05", title: { en: "French Jurisdictions", fr: "Juridictions Françaises" }, body: { en: "Commercial litigation before the Tribunal de commerce, Cour d'appel, and Cour de cassation, with senior coordination across the firm's UAE and French practices.", fr: "Contentieux commercial devant le Tribunal de commerce, la Cour d'appel et la Cour de cassation, avec coordination senior entre les pratiques émirienne et française du cabinet." } },
        { num: "06", title: { en: "Pre-Action Strategy", fr: "Stratégie Pré-Contentieuse" }, body: { en: "Position-building, evidence preservation, and the strategic analysis that determines whether to proceed, settle, or hold — before the first filing makes the choice irreversible.", fr: "Construction de position, préservation des preuves et analyse stratégique déterminant s'il faut poursuivre, transiger ou s'abstenir — avant que le premier dépôt ne rende le choix irréversible." } },
        { num: "07", title: { en: "Mediation & Negotiated Settlement", fr: "Médiation & Règlement Négocié" }, body: { en: "Mediated and negotiated resolution where it produces a better outcome than the available adjudicated path — which it often does.", fr: "Résolution médiée et négociée lorsqu'elle produit un meilleur résultat que la voie juridictionnelle disponible — ce qui est souvent le cas." } },
        { num: "08", title: { en: "Enforcement of Judgments & Awards", fr: "Exécution des Décisions & Sentences" }, body: { en: "Recognition and enforcement of foreign judgments and arbitral awards across UAE jurisdictions, France, and the GCC under applicable treaties and statutes.", fr: "Reconnaissance et exécution des décisions étrangères et sentences arbitrales entre juridictions émiriennes, France et CCG sous les traités et textes applicables." } },
      ],
    },
    whatSetsApart: {
      eyebrow: { en: "WHAT SETS THIS PRACTICE APART", fr: "CE QUI DISTINGUE CETTE PRATIQUE" },
      h2: { en: "How we work, in practice.", fr: "Comment nous travaillons, concrètement." },
      cards: [
        { num: "01", title: { en: "The case for not litigating.", fr: "L'argument pour ne pas plaider." }, body: { en: "Most disputes resolve faster and cheaper outside court — and most clients are better served by that path. When the right answer is to settle or to walk, we say so plainly. The decision to litigate is a decision, not a default.", fr: "La plupart des litiges se résolvent plus vite et à moindre coût hors prétoire — et la plupart des clients sont mieux servis par cette voie. Lorsque la bonne réponse est de transiger ou de se retirer, nous le disons clairement. Engager une procédure est une décision, pas un réflexe." } },
        { num: "02", title: { en: "Pre-action discipline.", fr: "Discipline pré-contentieuse." }, body: { en: "The case is built before the proceedings are filed — not constructed while they are running. By the time the matter reaches a forum, the position is documented, the evidence is preserved, and the strategy is locked.", fr: "Le dossier est construit avant le dépôt — pas pendant la procédure. Au moment où l'affaire atteint un forum, la position est documentée, les preuves sont préservées et la stratégie est arrêtée." } },
        { num: "03", title: { en: "Forum chosen, not defaulted to.", fr: "Le forum choisi, pas subi." }, body: { en: "DIFC, ADGM, UAE federal courts, French jurisdictions, ICC, LCIA, DIAC — each forum has its own rhythm, evidentiary expectations, and enforcement reach. We choose the forum to fit the dispute, not the other way around.", fr: "DIFC, ADGM, juridictions fédérales émiriennes, juridictions françaises, ICC, LCIA, DIAC — chaque forum a son rythme, ses attentes probatoires et sa portée d'exécution. Nous choisissons le forum en fonction du litige, pas l'inverse." } },
        { num: "04", title: { en: "Drafted to be read by experienced counsel.", fr: "Rédigé pour être lu par un conseil expérimenté." }, body: { en: "Every brief is drafted knowing the reply will come from a serious lawyer who will pick the argument apart line by line. We argue against ourselves before we file — so the document that lands is the one that has already survived the strongest response.", fr: "Chaque écriture est rédigée en sachant que la réplique viendra d'un avocat sérieux qui démontera l'argumentation ligne par ligne. Nous nous opposons à nous-mêmes avant de déposer — pour que le document qui arrive soit celui qui a déjà survécu à la réponse la plus solide." } },
      ],
    },
    closingCta: {
      eyebrow: { en: "TAKE THE POSITION", fr: "PRENDRE POSITION" },
      heading: { en: "Facing a dispute or considering one?\nBring it to a partner directly.", fr: "Face à un litige ou en évaluation ?\nAdressez-vous directement à un associé." },
      cta: { en: "Book a Consultation", fr: "Prendre Rendez-Vous" },
    },
  },
];
