import { useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { articles } from "@/data/articles";

const PAGE_TEXT = {
  EN: {
    breadcrumb: "Milton Hobbs",
    eyebrow: "Publications & Insights",
    headline: "Latest thinking\nfrom our lawyers.",
    sub: "Partner-authored analysis on corporate law, M&A, compliance, IP, and emerging legal issues across the UAE, France, and beyond.",
    readTime: "min read",
    read: "Read Article",
    allTopics: "All Topics",
    topics: ["All", "Compliance", "Corporate", "Technology", "M&A", "IP", "Employment", "Tax", "Real Estate"],
  },
  FR: {
    breadcrumb: "Milton Hobbs",
    eyebrow: "Publications & Perspectives",
    headline: "Les dernières analyses\nde nos avocats.",
    sub: "Analyses rédigées par nos associés sur le droit des sociétés, les F&A, la conformité, la PI et les enjeux juridiques émergents aux EAU, en France et au-delà.",
    readTime: "min de lecture",
    read: "Lire l'Article",
    allTopics: "Tous Sujets",
    topics: ["Tous", "Conformité", "Corporate", "Technologie", "F&A", "PI", "Emploi", "Fiscalité", "Immobilier"],
  },
};

/* Map category → short colour for category chip */
const CATEGORY_COLORS: Record<string, string> = {
  Compliance:  "#0096C7",
  Corporate:   "#001489",
  Technology:  "#6A3FD4",
  "M&A":       "#1A5E2B",
  IP:          "#8099FF",
  Employment:  "#B45309",
  Tax:         "#374151",
  "Real Estate": "#9D4EDD",
};

function InsightsInner() {
  const { lang } = useLang();
  const tx = PAGE_TEXT[lang];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  /* Featured = first article */
  const [featured, ...rest] = articles;

  const featuredLead = (featured.body.find(s => s.type === "lead") as { type: "lead"; text: string } | undefined)?.text ?? "";
  const featuredExcerpt = featuredLead.length > 200 ? featuredLead.slice(0, 200).replace(/\s+\S*$/, "") + "…" : featuredLead;

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* ── PAGE HEADER ─────────────────────────────────────────────────── */}
      <section
        data-testid="insights-header"
        data-header-theme="dark"
        className="bg-[#001489] pt-32 pb-20 px-8"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-10"
          >
            <a href="/" className="text-[#8099FF] text-[10px] tracking-[0.3em] uppercase font-semibold hover:opacity-75 transition-opacity">
              {tx.breadcrumb}
            </a>
            <span className="text-white/20">·</span>
            <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-medium">{tx.eyebrow}</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-[#8099FF] text-[11px] tracking-[0.35em] uppercase font-bold mb-5"
              >
                {tx.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="font-heading text-white font-bold text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.06] tracking-tight whitespace-pre-line"
              >
                {tx.headline}
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "64px" }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="h-[2px] bg-[#8099FF] mt-8 mb-6"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-white/50 text-sm leading-relaxed max-w-[52ch]"
              >
                {tx.sub}
              </motion.p>
            </div>

            {/* Article count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="hidden lg:flex flex-col items-end gap-1 pb-1"
            >
              <p className="font-heading text-white font-bold text-[3.5rem] leading-none">{articles.length}</p>
              <p className="text-white/35 text-[10px] tracking-[0.28em] uppercase font-semibold">Publications</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ──────────────────────────────────────────────── */}
      <section data-testid="insights-featured" className="bg-white px-8 py-16 border-b border-[#001489]/08">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#001489]/35 text-[10px] tracking-[0.3em] uppercase font-bold mb-8">Featured</p>
          <a
            href={`/insights/${featured.slug}`}
            data-testid="featured-article-link"
            className="group grid lg:grid-cols-[1fr_340px] gap-12 items-center"
            style={{ textDecoration: "none" }}
          >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1.5"
                    style={{
                      color: CATEGORY_COLORS[featured.category] ?? "#001489",
                      border: `1px solid ${CATEGORY_COLORS[featured.category] ?? "#001489"}`,
                      opacity: 0.9,
                    }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-[#001489]/30 text-[10px] tracking-wider">{featured.date}</span>
                  <span className="text-[#001489]/25 text-[10px]">·</span>
                  <span className="text-[#001489]/30 text-[10px] tracking-wider">{featured.readTime}</span>
                </div>
                <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight mb-5 group-hover:opacity-80 transition-opacity">
                  {featured.title}
                </h2>
                <div className="h-[2px] w-12 bg-[#001489]/20 mb-5 group-hover:bg-[#8099FF] transition-colors duration-300" />
                <p className="text-[#001489]/55 text-[0.95rem] leading-[1.85] max-w-[54ch]">{featuredExcerpt}</p>
                <div className="mt-8 inline-flex items-center gap-3 text-[#001489] text-[10px] font-bold tracking-[0.22em] uppercase border-b border-[#001489]/20 pb-1 group-hover:border-[#001489] transition-colors">
                  {tx.read}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </div>
              </motion.div>

              {/* Right: meta card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="hidden lg:flex flex-col justify-between bg-[#001489] p-10 self-stretch"
                style={{ minHeight: 280 }}
              >
                <div>
                  <p className="text-[#8099FF] text-[9px] tracking-[0.3em] uppercase font-bold mb-4">Author</p>
                  <p className="font-heading text-white font-bold text-lg leading-snug mb-1">{featured.author}</p>
                  <p className="text-white/40 text-[11px] tracking-wider">{featured.authorTitle}</p>
                </div>
                <div className="border-t border-white/10 pt-6 mt-6">
                  <p className="text-white/30 text-[9px] tracking-[0.25em] uppercase mb-2">Published</p>
                  <p className="text-white font-semibold text-sm">{featured.date}</p>
                  <p className="text-white/35 text-[11px] mt-1">{featured.readTime}</p>
                </div>
              </motion.div>
            </a>
        </div>
      </section>

      {/* ── ALL ARTICLES GRID ─────────────────────────────────────────────── */}
      <section data-testid="insights-grid" className="bg-white px-8 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#001489]/35 text-[10px] tracking-[0.3em] uppercase font-bold mb-10">All Publications</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E4E9F5]">
            {rest.map((article, i) => {
              const lead = (article.body.find(s => s.type === "lead") as { type: "lead"; text: string } | undefined)?.text ?? "";
              const excerpt = lead.length > 140 ? lead.slice(0, 140).replace(/\s+\S*$/, "") + "…" : lead;
              return (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  data-testid={`article-card-${article.slug}`}
                >
                  <a
                    href={`/insights/${article.slug}`}
                    className="group flex flex-col bg-white p-8 h-full hover:bg-[#F4F6FC] transition-colors duration-200"
                    style={{ textDecoration: "none" }}
                  >
                      {/* Category + date */}
                      <div className="flex items-center gap-3 mb-6">
                        <span
                          className="text-[9px] font-bold tracking-[0.22em] uppercase px-2.5 py-1"
                          style={{
                            color: CATEGORY_COLORS[article.category] ?? "#001489",
                            border: `1px solid ${CATEGORY_COLORS[article.category] ?? "#001489"}`,
                            opacity: 0.85,
                          }}
                        >
                          {article.category}
                        </span>
                        <span className="text-[#001489]/30 text-[10px]">{article.date}</span>
                      </div>

                      <h3 className="font-heading text-[#001489] font-bold text-[1.05rem] leading-snug tracking-tight mb-4 group-hover:opacity-75 transition-opacity">
                        {article.title}
                      </h3>
                      <div className="h-px w-8 bg-[#001489]/15 mb-4 group-hover:bg-[#8099FF] transition-colors duration-300" />
                      <p className="text-[#001489]/50 text-sm leading-[1.8] flex-1">{excerpt}</p>

                      <div className="mt-6 pt-5 border-t border-[#001489]/06 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-[#001489] flex items-center justify-center flex-shrink-0">
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 10">
                              <path d="M2 5h6M5 2l3 3-3 3" stroke="white" strokeWidth="1.1" />
                            </svg>
                          </div>
                          <span className="text-[#001489] text-[9px] font-bold tracking-[0.22em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">{tx.read}</span>
                        </div>
                        <span className="text-[#001489]/30 text-[10px] tracking-wider">{article.readTime}</span>
                      </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────────────── */}
      <section className="bg-[#001489] px-8 py-16">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-white text-[11px] tracking-[0.35em] uppercase font-bold mb-3">Speak with a Partner</p>
            <p className="text-white/45 text-sm leading-relaxed max-w-[40ch]">Every publication reflects lived experience on complex matters. Discuss yours directly with a partner.</p>
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
