export type ArticleSection =
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "heading"; id: string; text: string }
  | { type: "quote"; text: string }
  | { type: "keypoints"; title: string; points: string[] };

export type ArticleData = {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  authorTitle: string;
  body: ArticleSection[];
};

export const articles: ArticleData[] = [
  {
    slug: "navigating-cross-border-compliance-gulf",
    category: "Compliance",
    categoryColor: "#0096C7",
    title: "Navigating Cross-Border Compliance in the Gulf",
    date: "February 2026",
    readTime: "7 min read",
    author: "Milton Hobbs",
    authorTitle: "Senior Partner, Dubai",
    body: [
      {
        type: "lead",
        text: "As GCC states refine their regulatory frameworks at pace, multinational entities operating across the Gulf face a compliance landscape that no longer rewards a reactive approach. The convergence of enhanced AML/CFT obligations, data localisation requirements, and sector-specific licensing regimes demands structured, anticipatory counsel.",
      },
      {
        type: "heading",
        id: "new-regulatory-baseline",
        text: "The New Regulatory Baseline in the GCC",
      },
      {
        type: "paragraph",
        text: "The UAE, Saudi Arabia, and Qatar have each undergone significant legislative reform over the past 36 months. The UAE's Economic Substance Regulations, its Beneficial Ownership framework, and the introduction of corporate income tax in June 2023 represent a fundamental shift — the Gulf is no longer a low-regulation environment. For businesses structured to take advantage of historical opacity, the reckoning is now.",
      },
      {
        type: "paragraph",
        text: "Saudi Arabia's PDPL (Personal Data Protection Law), which came into force in 2023, mirrors many elements of the GDPR while introducing local obligations around data processing consent and cross-border transfers. Entities operating across KSA and UAE now face a dual compliance obligation, each with distinct enforcement mechanisms and regulator expectations.",
      },
      {
        type: "heading",
        id: "key-risk-areas",
        text: "Key Risk Areas for Multinational Entities",
      },
      {
        type: "paragraph",
        text: "Our experience advising multinational clients entering the Gulf identifies three consistent pressure points: beneficial ownership disclosure and ultimate beneficial owner (UBO) registry obligations; the interplay between free zone licensing regimes and mainland commercial activities; and the application of Ministerial Decisions governing related-party transactions for tax purposes.",
      },
      {
        type: "quote",
        text: "The days of regulatory arbitrage in the Gulf are over. The question for corporate counsel is no longer whether to comply, but how to build compliance into the architecture of the business itself.",
      },
      {
        type: "heading",
        id: "practical-structuring",
        text: "Structuring for Compliance: Practical Considerations",
      },
      {
        type: "paragraph",
        text: "For entities considering entry or restructuring, the choice between free zone and mainland presence carries direct compliance implications beyond the licensing level. Certain free zones — ADGM and DIFC particularly — operate under their own legal frameworks, creating an additional layer of regulatory jurisdiction. Businesses with substantive operations in both zones and on the mainland must map their obligations carefully across each.",
      },
      {
        type: "paragraph",
        text: "In cross-border transactions involving GCC parties, due diligence processes should now routinely include a compliance posture assessment — examining the target entity's regulatory filings, UBO disclosures, and its standing with sector regulators. Gaps identified post-transaction are substantially more costly to remedy than those surfaced during structuring.",
      },
      {
        type: "keypoints",
        title: "What Counsel Should Address in Every GCC Engagement",
        points: [
          "UBO registration status and accuracy across all jurisdictions of operation",
          "Substance requirements — physical presence, qualified staff, core income-generating activities",
          "Data processing agreements and cross-border transfer mechanisms under applicable PDPL regimes",
          "VAT and corporate tax registration obligations and intercompany pricing documentation",
          "Sector-specific licensing alignment, particularly for financial services, healthcare, and logistics",
        ],
      },
    ],
  },
  {
    slug: "family-business-succession-uae",
    category: "Corporate",
    categoryColor: "#6B46C1",
    title: "The Future of Family Business Succession in the UAE",
    date: "January 2026",
    readTime: "9 min read",
    author: "Milton Hobbs",
    authorTitle: "Managing Partner, Paris & Dubai",
    body: [
      {
        type: "lead",
        text: "UAE Federal Decree-Law No. 37 of 2022 on family businesses has introduced a legislative infrastructure for succession that, for the first time, allows families to formally regulate ownership transfer, dispute resolution, and governance within a statutory framework. For families who have built significant enterprises without this architecture, the window for proactive structuring is now.",
      },
      {
        type: "heading",
        id: "what-the-law-changes",
        text: "What the New Law Changes",
      },
      {
        type: "paragraph",
        text: "The law permits family businesses to adopt a Family Constitution — a governance document carrying legal force that specifies ownership rights, entry and exit conditions for family members, dividend policy, and dispute resolution mechanisms. Critically, the law also allows families to establish a Family Governance Board with defined authority, separating ownership and management in a manner previously difficult to enforce under general company law.",
      },
      {
        type: "paragraph",
        text: "For businesses operating both in the UAE and across European jurisdictions — a common profile among our client base — the interaction between the UAE Family Business Law and civil law succession regimes in France, Belgium, and Switzerland requires careful navigation. Forced heirship provisions, gift tax implications, and the treatment of UAE-held assets in European estate plans are areas where cross-border counsel is indispensable.",
      },
      {
        type: "heading",
        id: "structuring-succession",
        text: "Structuring a Succession Plan Under the New Framework",
      },
      {
        type: "paragraph",
        text: "Our approach for family business clients begins with an asset-mapping exercise — identifying all entities, jurisdictions, and beneficial interests within the family group. This baseline establishes where the UAE Family Business Law applies, where foreign succession law will have primacy, and where strategic elections (such as EU Succession Regulation Article 22 elections for EU nationals) can be made to optimise the succession outcome.",
      },
      {
        type: "quote",
        text: "Succession planning is no longer optional for significant family enterprises. The law now provides the tools; the question is whether families will use them before a triggering event forces the issue.",
      },
      {
        type: "heading",
        id: "cross-border-considerations",
        text: "Cross-Border Considerations for European Families",
      },
      {
        type: "paragraph",
        text: "French-national clients with UAE assets face a particular complexity: French forced heirship (réserve héréditaire) applies to the worldwide estate of French nationals, regardless of asset location. The UAE's own succession regime — applied under Sharia principles to Muslim nationals and, for non-Muslims, under the law of the deceased's nationality — creates potential for jurisdictional conflict that must be resolved at the structuring stage, not at the point of death.",
      },
      {
        type: "keypoints",
        title: "Key Planning Considerations for Family Business Succession",
        points: [
          "Register the business under the UAE Family Business Law to access the statutory governance framework",
          "Draft a Family Constitution addressing ownership transfer, dividend rights, and exit mechanisms",
          "Map the interaction between UAE succession law and the applicable foreign succession regime for each family member",
          "Consider holding structure options — ADGM or DIFC foundations offer estate-planning flexibility for non-Muslim expatriates",
          "Engage cross-border tax and legal counsel simultaneously; French succession tax and UAE VAT interact in ways that affect structuring decisions",
        ],
      },
    ],
  },
  {
    slug: "digital-transformation-data-privacy-gcc",
    category: "Technology",
    categoryColor: "#2D9D6E",
    title: "Digital Transformation & Data Privacy in the GCC",
    date: "December 2025",
    readTime: "6 min read",
    author: "Milton Hobbs",
    authorTitle: "Partner, Technology & Data",
    body: [
      {
        type: "lead",
        text: "The GCC's rapid adoption of data protection legislation has fundamentally altered the compliance calculus for businesses operating across the region. Saudi Arabia's PDPL, the UAE's Federal Data Protection Law, and the DIFC and ADGM data protection frameworks now create a multi-layered regulatory environment that rewards advance structuring and penalises the reactive approach that characterised data governance in the region only three years ago.",
      },
      {
        type: "heading",
        id: "pdpl-key-provisions",
        text: "The PDPL: Key Provisions for Business",
      },
      {
        type: "paragraph",
        text: "Saudi Arabia's PDPL establishes obligations around consent for personal data processing, data subject rights (access, correction, erasure), data breach notification within 72 hours, and cross-border data transfer restrictions. Enforcement is administered by the Saudi Data and Artificial Intelligence Authority (SDAIA), which has signalled an active enforcement posture in 2025 and 2026.",
      },
      {
        type: "paragraph",
        text: "The UAE's Federal Decree-Law No. 45 of 2021 on Personal Data Protection applies to data processing operations conducted in the UAE or that affect UAE residents — a broad jurisdictional reach that captures many businesses operating from outside the UAE. The law requires data controllers to implement technical and organisational measures proportionate to the risk of processing, and to appoint a Data Protection Officer where processing is carried out on a large scale.",
      },
      {
        type: "heading",
        id: "data-localisation",
        text: "Data Localisation Requirements",
      },
      {
        type: "paragraph",
        text: "KSA's PDPL restricts the cross-border transfer of personal data to countries with 'adequate' protection, a concept that mirrors the GDPR's adequacy framework but lacks a published list of adequate jurisdictions at the time of writing. In practice, businesses transferring data from KSA to EU entities — including parent companies and group service providers — must rely on contractual mechanisms (standard contractual clauses or equivalent) and, in some cases, data residency solutions that keep sensitive data within the Kingdom.",
      },
      {
        type: "quote",
        text: "Data compliance is now a board-level risk in the GCC. Regulators are no longer treating ignorance of local law as a mitigating factor, and enforcement actions are increasingly public.",
      },
      {
        type: "heading",
        id: "compliance-framework",
        text: "Building a Compliant Framework for 2026",
      },
      {
        type: "paragraph",
        text: "For businesses with operations across both the UAE and KSA, a unified data governance framework — calibrated to the stricter of the two regimes — is generally the most efficient approach. This involves a data mapping exercise, gap analysis against applicable legal requirements, and the implementation of policies, procedures, and technical controls. Where EU operations are also in scope, GDPR compliance can be structured to satisfy most GCC requirements simultaneously, though local law nuances require jurisdiction-specific adaptation.",
      },
      {
        type: "keypoints",
        title: "Compliance Priorities for GCC Data Operations",
        points: [
          "Complete a comprehensive data mapping exercise covering all personal data processed in or from the GCC",
          "Assess whether a Data Protection Officer (DPO) is required and appoint one if so",
          "Review cross-border data transfer mechanisms and implement appropriate safeguards",
          "Establish a breach notification procedure that meets the 72-hour requirement under applicable laws",
          "Review and update privacy notices, consent mechanisms, and data subject rights procedures",
        ],
      },
    ],
  },
  {
    slug: "strategic-ma-structuring-2026",
    category: "M&A",
    categoryColor: "#C05621",
    title: "Strategic M&A Structuring for 2026",
    date: "November 2025",
    readTime: "8 min read",
    author: "Milton Hobbs",
    authorTitle: "Partner, Corporate & M&A",
    body: [
      {
        type: "lead",
        text: "Deal activity in the Gulf is accelerating, driven by sovereign wealth capital deployment, the privatisation agenda across GCC states, and continued inbound appetite from European and Asian strategic acquirers. The sophistication of transactions has caught up with global standards — and so has the complexity of structuring. For advisors operating in this environment, staying ahead of the structuring curve is now a competitive differentiator.",
      },
      {
        type: "heading",
        id: "structuring-trends",
        text: "Key Structuring Trends in 2026",
      },
      {
        type: "paragraph",
        text: "Holding company structures have become the default entry architecture for foreign acquirers, with ADGM and DIFC vehicles preferred for their common law frameworks, English-language documentation, and enforceability of international arbitral awards. The choice between ADGM and DIFC is increasingly driven by the target's sector and the preference of institutional counterparties — in particular, whether the deal involves an entity regulated by the DFSA.",
      },
      {
        type: "paragraph",
        text: "Earn-out mechanisms, once rarely deployed in Gulf M&A, are becoming standard in transactions where valuation gaps reflect uncertainty about post-COVID performance normalisation or the impact of new regulatory regimes on the target's business model. Structuring earn-outs requires careful attention to accounting standards, management control provisions, and the interaction with UAE and KSA corporate income tax regimes — where earn-outs can create unexpected tax events.",
      },
      {
        type: "heading",
        id: "due-diligence-changes",
        text: "Cross-Border Due Diligence: What's Changed",
      },
      {
        type: "paragraph",
        text: "Enhanced AML/CFT requirements have fundamentally changed the due diligence standard in Gulf M&A. UBO registry compliance, sanction screening of shareholders and directors (including indirect shareholding chains), and an assessment of the target's own KYC and AML procedures are now baseline requirements — not enhanced measures. Buyers who do not conduct this diligence face regulatory exposure that survives the transaction.",
      },
      {
        type: "quote",
        text: "The sophistication of Gulf deal-making has caught up with global standards. Advisors who apply a 'Gulf discount' to their due diligence rigour do so at their client's peril.",
      },
      {
        type: "heading",
        id: "regulatory-considerations",
        text: "Regulatory Considerations in 2026",
      },
      {
        type: "paragraph",
        text: "Competition law in the UAE and KSA now requires pre-merger notification for transactions meeting applicable thresholds, a requirement that is frequently overlooked by parties accustomed to the historically permissive Gulf M&A environment. The UAE's Federal Law No. 36 of 2023 on the Regulation of Competition establishes a merger control regime administered by the Ministry of Economy, with notification thresholds that capture many mid-market transactions. Missing the filing obligation carries significant risk, including transaction invalidity.",
      },
      {
        type: "keypoints",
        title: "Due Diligence Focus Areas for Gulf M&A",
        points: [
          "UBO registry compliance and beneficial ownership chain verification for all key shareholders",
          "Sanction screening against OFAC, UN, EU, and UAE local sanctions lists — including indirect ownership",
          "Competition law filing obligations under UAE Federal Law No. 36 of 2023 and KSA Competition Law",
          "UAE corporate income tax position — including transfer pricing documentation and prior-year exposure",
          "Regulatory licensing: sector-specific licences, free zone permits, and their transferability on change of control",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articles.find(a => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 3): ArticleData[] {
  return articles.filter(a => a.slug !== slug).slice(0, count);
}
