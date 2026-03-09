import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";

const categoryColors: Record<string, string> = {
  Compliance:          "text-[#0096C7]",
  Corporate:           "text-[#6B46C1]",
  Technology:          "text-[#2D9D6E]",
  "M&A":               "text-[#C05621]",
  Family:              "text-[#C05621]",
  Conformité:          "text-[#0096C7]",
  Technologie:         "text-[#2D9D6E]",
  "Fusions & Acquisitions": "text-[#C05621]",
};

function ScalesIcon() {
  return (
    <svg
      className="w-10 h-10 text-[#8099FF]/60"
      fill="none"
      viewBox="0 0 48 48"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <line x1="24" y1="6" x2="24" y2="42" strokeLinecap="round" />
      <line x1="14" y1="42" x2="34" y2="42" strokeLinecap="round" />
      <line x1="8" y1="14" x2="40" y2="14" strokeLinecap="round" />
      <circle cx="8" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="40" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <path d="M4 24 Q8 30 12 24" strokeLinecap="round" />
      <path d="M36 24 Q40 30 44 24" strokeLinecap="round" />
    </svg>
  );
}

function ArticleCard({
  article,
  index,
  readLabel,
  slug,
}: {
  article: { category: string; title: string; excerpt: string; readTime: string; date: string };
  index: number;
  readLabel: string;
  slug: string;
}) {
  const colorClass = categoryColors[article.category] ?? "text-[#6B7280]";

  return (
    <motion.a
      href={`/insights/${slug}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      data-testid={`insight-card-${index}`}
      className="group flex flex-col rounded-sm overflow-hidden border border-[#E5EAF4] bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div className="bg-[#EEF2FB] flex items-center justify-center h-44 flex-shrink-0">
        <ScalesIcon />
      </div>

      <div className="flex flex-col flex-1 p-6 gap-3">
        <div className="flex items-center gap-3">
          <span className={`text-[10px] font-bold tracking-[0.18em] uppercase ${colorClass}`}>
            {article.category}
          </span>
          <span className="text-[#9CA3AF] text-[11px]">{article.readTime}</span>
        </div>

        <h3 className="font-heading text-[#001489] text-[0.95rem] font-bold leading-snug tracking-tight group-hover:text-[#0028B8] transition-colors">
          {article.title}
        </h3>

        <p className="text-[#6B7280] text-[0.8rem] leading-relaxed flex-1">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-[#F0F4FB] mt-auto">
          <span className="text-[#9CA3AF] text-[11px]">{article.date}</span>
          <div className="flex items-center gap-1.5 text-[#001489] group-hover:text-[#D4AF36] transition-colors">
            <span className="text-[11px] font-medium tracking-wide">{readLabel}</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function Insights() {
  const { t } = useLang();
  const ins = t.insights;

  return (
    <section
      id="insights"
      data-testid="insights-section"
      className="bg-white py-24 px-8 relative z-0"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <p className="text-[#8099FF] text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">
              {ins.eyebrow}
            </p>
            <h2 className="font-heading text-[#001489] text-[clamp(1.6rem,2.8vw,2.5rem)] font-bold tracking-tight">
              {ins.headline}
            </h2>
          </div>
          <a
            href="#insights"
            data-testid="view-all-insights"
            className="group flex items-center gap-2 text-[#001489] hover:text-[#D4AF36] text-xs tracking-[0.15em] uppercase font-medium transition-colors whitespace-nowrap"
          >
            <span>{ins.viewAll}</span>
            <svg
              className="w-3 h-3 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ins.articles.map((article, i) => (
            <ArticleCard key={i} article={article} index={i} readLabel={ins.read} slug={articles[i]?.slug ?? ""} />
          ))}
        </div>
      </div>
    </section>
  );
}
