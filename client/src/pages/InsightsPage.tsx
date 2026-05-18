import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { insightsCopy, ct, type InsightCard } from "@/data/insightsCopy";
import imgCompliance from "@assets/generated_images/insight-compliance.png";
import imgFamilyBusiness from "@assets/generated_images/insight-family-business.png";
import imgDigitalPrivacy from "@assets/generated_images/insight-digital-privacy.png";
import imgMA from "@assets/generated_images/insight-ma-structuring.png";

const slugImageMap: Record<string, string> = {
  "navigating-cross-border-compliance-gulf": imgCompliance,
  "family-business-succession-uae": imgFamilyBusiness,
  "digital-transformation-data-privacy-gcc": imgDigitalPrivacy,
  "strategic-ma-structuring-2026": imgMA,
};

const { indexPage } = insightsCopy;

const FILTER_LABELS: Record<string, { en: string; fr: string }> = {
  ALL:        { en: "ALL",        fr: "TOUT"        },
  COMPLIANCE: { en: "COMPLIANCE", fr: "CONFORMITÉ"  },
  CORPORATE:  { en: "CORPORATE",  fr: "CORPORATE"   },
  TECHNOLOGY: { en: "TECHNOLOGY", fr: "TECHNOLOGIE" },
  "M&A":      { en: "M&A",        fr: "M&A"         },
};

function InsightsInner() {
  const { lang } = useLang();
  const [filter, setFilter] = useState<string>("ALL");
  const [modalOpen, setModalOpen] = useState(false);
  const isFr = lang === "FR";

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const meta = isFr ? indexPage.meta.fr : indexPage.meta.en;

  useEffect(() => {
    document.title = meta.title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setOg = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("description", meta.description);
    setMeta("keywords", meta.keywords);
    setOg("og:title", meta.ogTitle);
    setOg("og:description", meta.ogDescription);

    const hreflangs = [
      { hreflang: "en", href: "https://miltonhobbs.com/insights" },
      { hreflang: "fr", href: "https://miltonhobbs.com/fr/publications" },
      { hreflang: "x-default", href: "https://miltonhobbs.com/insights" },
    ];
    const linkEls: HTMLLinkElement[] = [];
    hreflangs.forEach(({ hreflang, href }) => {
      const el = document.createElement("link");
      el.rel = "alternate";
      el.setAttribute("hreflang", hreflang);
      el.setAttribute("href", href);
      document.head.appendChild(el);
      linkEls.push(el);
    });

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": meta.title,
      "description": meta.description,
      "url": isFr ? "https://miltonhobbs.com/fr/publications" : "https://miltonhobbs.com/insights",
      "hasPart": insightsCopy.articles.map(a => ({
        "@type": "Article",
        "headline": isFr ? a.title.fr : a.title.en,
        "url": `https://miltonhobbs.com/insights/${a.slug}`,
        "datePublished": "2026-05-01",
        "author": { "@type": "Organization", "name": "Milton Hobbs" },
      })),
    };
    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(scriptEl);

    return () => {
      linkEls.forEach(el => el.parentNode?.removeChild(el));
      scriptEl.parentNode?.removeChild(scriptEl);
    };
  }, [lang]);

  const featured = indexPage.cards[0];
  const rest = indexPage.cards.slice(1);

  const filterKeys = Object.keys(FILTER_LABELS);
  const filteredCards = filter === "ALL"
    ? rest
    : rest.filter(c => c.category.en === filter);

  const cardHref = (card: InsightCard) =>
    isFr ? `/fr/publications/${card.slugFr}` : `/insights/${card.slug}`;

  const featuredArticle = insightsCopy.articles[0];
  const featuredLead = ct(featuredArticle.lead, lang).slice(0, 200).replace(/\s\w+$/, "") + " …";

  return (
    <div className="bg-white min-h-screen font-body">
      <Header />
      {/* ── HERO ── */}
      <section
        data-testid="insights-header"
        data-header-theme="dark"
        className="bg-[#001489] pt-32 pb-14 px-8"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-[10px] tracking-[0.38em] uppercase font-bold mb-4"
            >
              {ct(indexPage.hero.eyebrow, lang)}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-heading text-white font-bold text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.08] tracking-tight"
            >
              {ct(indexPage.hero.h1, lang)}
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white text-sm leading-relaxed max-w-[40ch] lg:pb-1"
          >
            {ct(indexPage.hero.subheadline, lang)}
          </motion.p>
        </div>
      </section>
      {/* ── FEATURED ── */}
      <section data-testid="insights-featured" className="px-8 pt-12 pb-6">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#001489] tracking-[0.38em] uppercase font-bold mb-6 text-[16px]">
            {isFr ? "À LA UNE" : "FEATURED"}
          </p>
          <a
            href={cardHref(featured)}
            className="group flex flex-col lg:flex-row border border-[#E8ECF5] hover:border-[#001489] transition-colors duration-200 overflow-hidden"
            style={{ textDecoration: "none" }}
            data-testid={`featured-article-${featured.slug}`}
          >
            {/* Image — ~58% */}
            <div className="relative flex-shrink-0 lg:w-[58%] overflow-hidden" style={{ minHeight: 290 }}>
              <img
                src={slugImageMap[featured.slug]}
                alt={ct(featured.title, lang)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[#000A4F]/45 group-hover:bg-[#000A4F]/20 transition-colors duration-300" />
              <div className="absolute top-5 left-5">
                <span className="text-[9px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 bg-white text-[#001489]">
                  {ct(featured.category, lang)}
                </span>
              </div>
            </div>

            {/* Content — ~42% */}
            <div className="flex flex-col justify-center gap-5 p-10 lg:p-12">
              <div className="flex items-center gap-2 text-[#001489] text-[11px]">
                <span>{ct(featured.date, lang)}</span>
                <span>·</span>
                <span>{featured.readMin} {isFr ? "min de lecture" : "min read"}</span>
              </div>

              <div>
                <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.12] tracking-tight mb-4">
                  {ct(featured.title, lang)}
                </h2>
                <div className="w-12 h-[2px] bg-[#001489] mb-5" />
                <p className="text-[#3D4D6A] text-sm leading-relaxed">
                  {featuredLead}
                </p>
              </div>

              <div className="flex items-end justify-between border-t border-[#E8ECF5] pt-5 mt-auto">
                <div>
                  <p className="text-[#001489] text-sm font-semibold">{featuredArticle.author.name}</p>
                  <p className="text-[#3D4D6A] text-xs mt-0.5">{ct(featuredArticle.author.title, lang)}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-[#001489] text-[10px] font-bold tracking-[0.2em] uppercase">
                  {isFr ? "LIRE L'ARTICLE" : "READ ARTICLE"}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>
      {/* ── ALL INSIGHTS ── */}
      <section data-testid="insights-grid" className="px-8 pt-10 pb-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Row: label + filter tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <p className="text-[#001489] text-[10px] tracking-[0.38em] uppercase font-bold">
              {isFr ? "TOUTES LES ANALYSES" : "ALL INSIGHTS"}
            </p>
            <div className="flex flex-wrap gap-2">
              {filterKeys.map(key => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  data-testid={`filter-${key}`}
                  className={`text-[10px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 border transition-colors duration-150 ${
                    filter === key
                      ? "bg-[#001489] text-white border-[#001489]"
                      : "bg-white text-[#001489] border-[#001489] hover:bg-[#001489]/[0.06]"
                  }`}
                >
                  {FILTER_LABELS[key][lang === "FR" ? "fr" : "en"]}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card, i) => {
              const img = slugImageMap[card.slug];
              return (
                <motion.div
                  key={card.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  data-testid={`article-card-${card.slug}`}
                >
                  <a
                    href={cardHref(card)}
                    className="group flex flex-col h-full border border-[#E8ECF5] hover:border-[#001489] transition-colors duration-200 overflow-hidden"
                    style={{ textDecoration: "none" }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ paddingBottom: "58%" }}>
                      {img && (
                        <img
                          src={img}
                          alt={ct(card.title, lang)}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                        />
                      )}
                      <div className="absolute inset-0 bg-[#000A4F]/45 group-hover:bg-[#000A4F]/15 transition-colors duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[9px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 bg-white text-[#001489]">
                          {ct(card.category, lang)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-7">
                      <div className="flex items-center gap-2 text-[#001489] text-[10px] tracking-wide mb-3">
                        <span>{ct(card.date, lang)}</span>
                        <span>·</span>
                        <span>{card.readMin} min</span>
                      </div>
                      <h3 className="font-heading text-[#001489] font-bold text-[1rem] leading-snug tracking-tight mb-4 flex-1">
                        {ct(card.title, lang)}
                      </h3>
                      <div className="flex items-center justify-between pt-4 border-t border-[#E8ECF5]">
                        <span className="text-[#3D4D6A] text-[11px]">Milton Hobbs</span>
                        <span className="inline-flex items-center gap-1.5 text-[#001489] text-[9px] font-bold tracking-[0.2em] uppercase">
                          {isFr ? "Lire" : "Read"}
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 10">
                            <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {filteredCards.length === 0 && (
            <p className="text-[#8099FF] text-sm py-12 text-center">
              {isFr ? "Aucun article dans cette catégorie." : "No articles in this category."}
            </p>
          )}
        </div>
      </section>
      {/* ── SPEAK WITH A PARTNER ── */}
      <section className="bg-[#001489] px-8 py-16">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-white tracking-[0.35em] uppercase font-bold mb-3 text-[10px]">
              {ct(indexPage.speakWithPartner.eyebrow, lang)}
            </p>
            <p className="text-white font-heading font-bold text-[clamp(1.1rem,2vw,1.4rem)] leading-snug max-w-[52ch]">
              {ct(indexPage.speakWithPartner.heading, lang)}
            </p>
          </div>
          <a
            href="/#contact"
            data-testid="insights-contact-cta"
            className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white transition-colors flex-shrink-0"
          >
            {ct(indexPage.speakWithPartner.cta, lang)}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default function InsightsPage() {
  return (
    <LanguageProvider>
      <InsightsInner />
    </LanguageProvider>
  );
}
