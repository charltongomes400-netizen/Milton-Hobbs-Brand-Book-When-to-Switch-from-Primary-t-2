import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { articles } from "@/data/articles";

const PAGE_TEXT = {
  EN: {
    eyebrow: "Publications & Insights",
    headline: "Latest thinking\nfrom our lawyers.",
    sub: "Partner-authored analysis on corporate law, M&A, compliance, IP, and emerging legal issues across the UAE, France, and beyond.",
    read: "Read article",
    featured: "Featured",
    all: "All insights",
    filters: ["All", "Compliance", "Corporate", "Technology", "M&A"],
  },
  FR: {
    eyebrow: "Publications & Perspectives",
    headline: "Les dernières analyses\nde nos avocats.",
    sub: "Analyses rédigées par nos associés sur le droit des sociétés, les F&A, la conformité, la PI et les enjeux juridiques émergents aux EAU, en France et au-delà.",
    read: "Lire l'article",
    featured: "À la une",
    all: "Toutes les analyses",
    filters: ["Tous", "Conformité", "Corporate", "Technologie", "F&A"],
  },
};

const CATEGORY_MAP: Record<string, Record<string, string>> = {
  EN: { Compliance: "Compliance", Corporate: "Corporate", Technology: "Technology", "M&A": "M&A" },
  FR: { Compliance: "Conformité", Corporate: "Corporate", Technology: "Technologie", "M&A": "F&A" },
};

function InsightsInner() {
  const { lang } = useLang();
  const tx = PAGE_TEXT[lang];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const [featured, ...rest] = articles;

  const filtered = activeFilter === "All" || activeFilter === "Tous"
    ? rest
    : rest.filter(a => {
        const mapped = CATEGORY_MAP[lang]?.[a.category] ?? a.category;
        return mapped === activeFilter || a.category === activeFilter;
      });

  const featuredLead = (featured.body.find(s => s.type === "lead") as { type: "lead"; text: string } | undefined)?.text ?? "";
  const featuredExcerpt = featuredLead.length > 180 ? featuredLead.slice(0, 180).replace(/\s+\S*$/, "") + "…" : featuredLead;

  return (
    <div className="bg-white min-h-screen font-body">
      <Header />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        data-testid="insights-header"
        data-header-theme="dark"
        className="bg-[#001489] pt-36 pb-16 px-8"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#8099FF] text-[10px] tracking-[0.38em] uppercase font-bold mb-5"
            >
              {tx.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-heading text-white font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[1.06] tracking-tight whitespace-pre-line"
            >
              {tx.headline}
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/45 text-sm leading-relaxed max-w-[44ch] lg:pb-1"
          >
            {tx.sub}
          </motion.p>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ──────────────────────────────────────────────── */}
      <section data-testid="insights-featured" className="px-8 pt-14 pb-0 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#001489]/30 text-[10px] tracking-[0.35em] uppercase font-bold mb-6">{tx.featured}</p>

          <a
            href={`/insights/${featured.slug}`}
            data-testid="featured-article-link"
            className="group block"
            style={{ textDecoration: "none" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid lg:grid-cols-[1fr_420px] overflow-hidden border border-[#E8ECF5]"
            >
              {/* Left — image */}
              <div className="relative overflow-hidden" style={{ minHeight: 420 }}>
                <img
                  src={featured.coverImage}
                  alt={featured.coverAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000A4F]/60 via-[#000A4F]/10 to-transparent" />
                {/* Category badge over image */}
                <div className="absolute top-6 left-6">
                  <span
                    className="text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 bg-white"
                    style={{ color: featured.categoryColor }}
                  >
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Right — content */}
              <div className="bg-white p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6 text-[10px] text-[#001489]/40 tracking-wider">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.4rem,2.2vw,2rem)] leading-tight tracking-tight mb-5 group-hover:opacity-75 transition-opacity duration-200">
                    {featured.title}
                  </h2>
                  <div className="h-[2px] w-10 bg-[#001489]/15 mb-5 group-hover:bg-[#8099FF] transition-colors duration-300" />
                  <p className="text-[#001489]/55 text-sm leading-[1.9]">{featuredExcerpt}</p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-[#001489]/08 pt-6">
                  <div>
                    <p className="text-[#001489] font-semibold text-sm">{featured.author}</p>
                    <p className="text-[#001489]/40 text-[11px] mt-0.5">{featured.authorTitle}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[#001489] text-[10px] font-bold tracking-[0.2em] uppercase group-hover:gap-3 transition-all duration-200">
                    {tx.read}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </a>
        </div>
      </section>

      {/* ── ALL ARTICLES ──────────────────────────────────────────────────── */}
      <section data-testid="insights-grid" className="px-8 pt-16 pb-20 bg-white">
        <div className="max-w-[1400px] mx-auto">

          {/* Header + filter row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
            <p className="text-[#001489]/30 text-[10px] tracking-[0.35em] uppercase font-bold">{tx.all}</p>
            <div className="flex items-center gap-2 flex-wrap">
              {tx.filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-[9px] tracking-[0.22em] uppercase font-bold px-4 py-2 border transition-colors duration-150 ${
                    activeFilter === f
                      ? "bg-[#001489] text-white border-[#001489]"
                      : "border-[#001489]/20 text-[#001489]/50 hover:border-[#001489]/50 hover:text-[#001489]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article, i) => {
              const lead = (article.body.find(s => s.type === "lead") as { type: "lead"; text: string } | undefined)?.text ?? "";
              const excerpt = lead.length > 120 ? lead.slice(0, 120).replace(/\s+\S*$/, "") + "…" : lead;
              return (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  data-testid={`article-card-${article.slug}`}
                >
                  <a
                    href={`/insights/${article.slug}`}
                    className="group flex flex-col h-full border border-[#E8ECF5] hover:border-[#001489]/30 transition-colors duration-200 overflow-hidden"
                    style={{ textDecoration: "none" }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                      <img
                        src={article.coverImage}
                        alt={article.coverAlt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[#000A4F]/10 group-hover:bg-[#000A4F]/0 transition-colors duration-300" />
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-[8px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 bg-white"
                          style={{ color: article.categoryColor }}
                        >
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-2 text-[#001489]/35 text-[10px] tracking-wider mb-4">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-heading text-[#001489] font-bold text-[1rem] leading-snug tracking-tight mb-3 group-hover:opacity-70 transition-opacity duration-200 flex-1">
                        {article.title}
                      </h3>
                      <p className="text-[#001489]/45 text-[0.82rem] leading-[1.8] mb-5">{excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#001489]/06">
                        <span className="text-[#001489]/50 text-[11px]">{article.author}</span>
                        <span className="inline-flex items-center gap-1.5 text-[#001489] text-[9px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {tx.read}
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

          {filtered.length === 0 && (
            <div className="py-24 flex flex-col items-center gap-4 text-center">
              <p className="font-heading text-[#001489] font-bold text-lg">No articles in this category yet.</p>
              <button
                onClick={() => setActiveFilter("All")}
                className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#001489] border border-[#001489] px-6 py-2.5 hover:bg-[#001489] hover:text-white transition-colors"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────────────── */}
      <section className="bg-[#001489] px-8 py-16">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-white text-[11px] tracking-[0.35em] uppercase font-bold mb-3">Speak with a Partner</p>
            <p className="text-white/45 text-sm leading-relaxed max-w-[42ch]">Every publication reflects lived experience on complex matters. Discuss yours directly with a partner.</p>
          </div>
          <a
            href="/#contact"
            data-testid="insights-contact-cta"
            className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors flex-shrink-0"
            style={{ textDecoration: "none" }}
          >
            Book a Consultation
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
