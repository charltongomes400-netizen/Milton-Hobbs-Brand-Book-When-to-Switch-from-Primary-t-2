import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { insightsCopy, ct } from "@/data/insightsCopy";
import {
  type Post,
  type LocalizedPost,
  localizePost,
  categoryLabel,
  readingMinutes,
  formatPostDate,
} from "@/lib/posts";

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
  const apiLang = isFr ? "fr" : "en";

  const { data: posts, isLoading } = useQuery<Post[]>({ queryKey: ["/api/posts"] });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const meta = isFr ? indexPage.meta.fr : indexPage.meta.en;
  const localized: LocalizedPost[] = (posts ?? []).map((p) => localizePost(p, apiLang));

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
      "hasPart": localized.map((a) => ({
        "@type": "Article",
        "headline": a.title,
        "url": isFr ? `https://miltonhobbs.com/fr/publications/${a.slug}` : `https://miltonhobbs.com/insights/${a.slug}`,
        "datePublished": a.createdAt,
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
  }, [lang, posts]);

  const featured = localized[0];
  const rest = localized.slice(1);

  const filterKeys = Object.keys(FILTER_LABELS);
  const filteredCards = filter === "ALL"
    ? rest
    : rest.filter(c => (c.category ?? "").toUpperCase() === filter);

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
              className="text-white tracking-[0.12em] uppercase font-bold mb-4 text-[18px] font-sans"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
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

      {/* ── LOADING ── */}
      {isLoading && (
        <section className="px-8 pt-12 pb-20" data-testid="insights-loading">
          <div className="max-w-[1400px] mx-auto">
            <div className="h-[290px] border border-[#E8ECF5] bg-[#F6F8FC] animate-pulse mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border border-[#E8ECF5] overflow-hidden">
                  <div className="bg-[#F6F8FC] animate-pulse" style={{ paddingBottom: "58%" }} />
                  <div className="p-7 flex flex-col gap-3">
                    <div className="h-3 w-24 bg-[#F0F4FB] animate-pulse" />
                    <div className="h-4 w-full bg-[#F0F4FB] animate-pulse" />
                    <div className="h-4 w-2/3 bg-[#F0F4FB] animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── EMPTY ── */}
      {!isLoading && localized.length === 0 && (
        <section className="px-8 pt-20 pb-28" data-testid="insights-empty">
          <div className="max-w-[1400px] mx-auto text-center">
            <p className="text-[#001489] font-heading font-bold text-xl mb-2">
              {isFr ? "Aucune publication pour le moment" : "No insights yet"}
            </p>
            <p className="text-[#3D4D6A] text-sm">
              {isFr ? "Revenez bientôt pour découvrir nos analyses." : "Check back soon for our latest analysis."}
            </p>
          </div>
        </section>
      )}

      {/* ── FEATURED ── */}
      {!isLoading && featured && (
        <section data-testid="insights-featured" className="px-8 pt-12 pb-6">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-[#001489] tracking-[0.12em] uppercase font-bold mb-6 text-[18px] font-sans" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {isFr ? "À LA UNE" : "FEATURED"}
            </p>
            <a
              href={isFr ? `/fr/publications/${featured.slug}` : `/insights/${featured.slug}`}
              className="group flex flex-col lg:flex-row border border-[#E8ECF5] hover:border-[#001489] transition-colors duration-200 overflow-hidden"
              style={{ textDecoration: "none" }}
              data-testid={`featured-article-${featured.slug}`}
            >
              {/* Image — ~58% */}
              <div className="relative flex-shrink-0 lg:w-[58%] overflow-hidden bg-[#EEF2FB]" style={{ minHeight: 290 }}>
                {featured.coverImage && (
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                )}
                <div className="absolute inset-0 bg-[#000A4F]/45 group-hover:bg-[#000A4F]/20 transition-colors duration-300" />
                <div className="absolute top-5 left-5">
                  <span className="text-[9px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 bg-white text-[#001489]">
                    {categoryLabel(featured.category, apiLang)}
                  </span>
                </div>
              </div>

              {/* Content — ~42% */}
              <div className="flex flex-col justify-end gap-5 p-10 lg:p-12">
                <div className="flex items-center gap-2 text-[#001489] text-[11px]">
                  <span>{formatPostDate(featured.createdAt, apiLang)}</span>
                  <span>·</span>
                  <span>{readingMinutes(featured.body)} {isFr ? "min de lecture" : "min read"}</span>
                </div>

                <div>
                  <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.12] tracking-tight mb-4">
                    {featured.title}
                  </h2>
                  <div className="w-12 h-[2px] bg-[#001489] mb-5" />
                  <p className="text-[#3D4D6A] text-sm leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="flex items-end justify-between border-t border-[#E8ECF5] pt-5 mt-auto">
                  <div>
                    <p className="text-[#001489] text-sm font-semibold">Milton Hobbs</p>
                    <p className="text-[#3D4D6A] text-xs mt-0.5">{isFr ? "Dubaï · Paris" : "Dubai · Paris"}</p>
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
      )}

      {/* ── ALL INSIGHTS ── */}
      {!isLoading && featured && (
        <section data-testid="insights-grid" className="px-8 pt-10 pb-20">
          <div className="max-w-[1400px] mx-auto">
            {/* Row: label + filter tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <p className="text-[#001489] tracking-[0.12em] uppercase font-bold text-[18px] font-sans" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
              {filteredCards.map((card, i) => (
                <motion.div
                  key={card.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  data-testid={`article-card-${card.slug}`}
                >
                  <a
                    href={isFr ? `/fr/publications/${card.slug}` : `/insights/${card.slug}`}
                    className="group flex flex-col h-full border border-[#E8ECF5] hover:border-[#001489] transition-colors duration-200 overflow-hidden"
                    style={{ textDecoration: "none" }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden bg-[#EEF2FB]" style={{ paddingBottom: "58%" }}>
                      {card.coverImage && (
                        <img
                          src={card.coverImage}
                          alt={card.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                        />
                      )}
                      <div className="absolute inset-0 bg-[#000A4F]/45 group-hover:bg-[#000A4F]/15 transition-colors duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[9px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 bg-white text-[#001489]">
                          {categoryLabel(card.category, apiLang)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-7">
                      <div className="flex items-center gap-2 text-[#001489] text-[10px] tracking-wide mb-3">
                        <span>{formatPostDate(card.createdAt, apiLang)}</span>
                        <span>·</span>
                        <span>{readingMinutes(card.body)} min</span>
                      </div>
                      <h3 className="font-heading text-[#001489] font-bold text-[1rem] leading-snug tracking-tight mb-4 flex-1">
                        {card.title}
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
              ))}
            </div>

            {filteredCards.length === 0 && (
              <p className="text-[#8099FF] text-sm py-12 text-center">
                {isFr ? "Aucun article dans cette catégorie." : "No articles in this category."}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ── SPEAK WITH A PARTNER ── */}
      <section className="bg-[#001489] px-8 py-16">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-white tracking-[0.12em] uppercase font-bold mb-3 text-[18px] font-sans" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
