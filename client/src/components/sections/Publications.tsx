import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const categoryColors: Record<string, { text: string; border: string }> = {
  Compliance:       { text: "#0066CC", border: "rgba(0,102,204,0.25)" },
  Conformité:       { text: "#0066CC", border: "rgba(0,102,204,0.25)" },
  Corporate:        { text: "#7C3AED", border: "rgba(124,58,237,0.25)" },
  Technology:       { text: "#0891B2", border: "rgba(8,145,178,0.25)" },
  Technologie:      { text: "#0891B2", border: "rgba(8,145,178,0.25)" },
  Family:           { text: "#059669", border: "rgba(5,150,105,0.25)" },
  "M&A":            { text: "#D97706", border: "rgba(217,119,6,0.25)" },
  "Fusions & Acquisitions": { text: "#D97706", border: "rgba(217,119,6,0.25)" },
};

const defaultColor = { text: "#001489", border: "rgba(0,20,137,0.2)" };

function ScalesIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <path d="M24 8v32" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 8h16" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 40h-8M24 40h8" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 16L5 28h12L11 16z" stroke="#8099FF" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M37 16l-6 12h12l-6-12z" stroke="#8099FF" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 16l-1-4M37 16l1-4" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 12l14-4M38 12L24 8" stroke="#8099FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BlogCard({
  article,
  index,
  readArticle,
}: {
  article: { category: string; title: string; excerpt: string; readTime: string; date: string };
  index: number;
  readArticle: string;
}) {
  const colors = categoryColors[article.category] ?? defaultColor;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      data-testid={`pub-card-${index}`}
      className="group flex flex-col border border-[#E8EDF8] hover:border-[#C8D5F0] transition-colors duration-300 cursor-pointer"
    >
      {/* Placeholder image */}
      <div className="relative h-[168px] bg-[#EEF2FB] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[#E0E8F8]"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
          <ScalesIcon />
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category + read time */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 border"
            style={{ color: colors.text, borderColor: colors.border }}
          >
            {article.category}
          </span>
          <span className="text-[#9BA8BF] text-xs">{article.readTime}</span>
        </div>

        {/* Title */}
        <h3
          className="font-heading font-bold text-[15px] leading-snug mb-3 group-hover:text-[#092AC7] transition-colors duration-200"
          style={{ color: "#001489" }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#6B7A99] text-[13px] leading-relaxed flex-1">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#EEF2FB]">
          <span className="text-[#9BA8BF] text-xs">{article.date}</span>
          <a
            href="#"
            className="flex items-center gap-1.5 text-[#001489] text-xs font-semibold tracking-[0.08em] hover:text-[#092AC7] transition-colors group/link"
          >
            <span>{readArticle}</span>
            <svg
              className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Publications() {
  const { t } = useLang();
  const pub = t.publications;
  const articles = t.insights.articles;

  return (
    <section
      id="publications"
      data-testid="publications-section"
      className="bg-white py-24 px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-[#001489] text-[11px] tracking-[0.28em] uppercase font-semibold mb-3">
              {pub.eyebrow}
            </p>
            <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3vw,2.6rem)] tracking-tight leading-tight">
              {pub.headline}
            </h2>
          </div>

          <a
            href="#"
            data-testid="view-all-publications"
            className="group flex items-center gap-2 text-[#001489] text-xs font-semibold tracking-[0.1em] hover:text-[#092AC7] transition-colors shrink-0"
          >
            <span>{pub.viewAll}</span>
            <svg
              className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </a>
        </motion.div>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, i) => (
            <BlogCard
              key={i}
              article={article}
              index={i}
              readArticle={pub.readArticle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
