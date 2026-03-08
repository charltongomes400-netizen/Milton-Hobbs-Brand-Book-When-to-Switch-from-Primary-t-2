import { motion } from "framer-motion";

const articles = [
  {
    category: "Compliance",
    title: "Navigating Cross-Border Compliance in the Gulf",
    excerpt:
      "As GCC states refine their regulatory frameworks, multinational entities face an increasingly complex compliance landscape. We examine key risk areas and mitigation strategies.",
    readTime: "7 min read",
    date: "February 2026",
  },
  {
    category: "Corporate",
    title: "The Future of Family Business Succession in the UAE",
    excerpt:
      "With new UAE family business legislation now in force, succession planning has entered a new era. Understanding the legal tools available is essential for business continuity.",
    readTime: "9 min read",
    date: "January 2026",
  },
  {
    category: "Technology",
    title: "Digital Transformation & Data Privacy in the GCC",
    excerpt:
      "Data localisation requirements and the PDPL's implications for businesses operating across the UAE and Saudi Arabia demand immediate strategic attention.",
    readTime: "6 min read",
    date: "December 2025",
  },
  {
    category: "M&A",
    title: "Strategic M&A Structuring for 2026",
    excerpt:
      "Deal activity is reshaping the Gulf's corporate landscape. We explore structuring trends, financing mechanisms, and cross-border due diligence best practices.",
    readTime: "8 min read",
    date: "November 2025",
  },
];

function ArticleCard({ article, index }: { article: (typeof articles)[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-testid={`insight-card-${index}`}
      className="group relative border border-white/10 p-8 hover:border-white/20 transition-colors duration-400 overflow-hidden flex flex-col"
    >
      <BorderTrace />
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium px-3 py-1 border border-[#C9A84C]/30">
          {article.category}
        </span>
        <span className="text-white/30 text-xs">{article.date}</span>
      </div>

      <h3 className="text-white text-lg font-semibold leading-snug tracking-tight mb-4 pr-[20%] group-hover:text-white/90 transition-colors">
        {article.title}
      </h3>

      <p className="text-white/40 text-sm leading-relaxed flex-1 pr-[20%]">{article.excerpt}</p>

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
        <span className="text-white/30 text-xs">{article.readTime}</span>
        <div className="flex items-center gap-2 text-[#C9A84C] text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Read</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}

export function Insights() {
  return (
    <section
      id="insights"
      data-testid="insights-section"
      className="bg-[#0A0F2E] py-28 px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Publications & Insights
            </p>
            <h2 className="text-white text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">
              Thought leadership.
            </h2>
          </div>
          <a
            href="#insights"
            data-testid="view-all-insights"
            className="group flex items-center gap-3 text-white/40 hover:text-white text-sm tracking-widest uppercase transition-colors"
          >
            <span>View all</span>
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 12 12">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {articles.map((article, i) => (
            <div key={i} className={i < articles.length - 1 ? "border-r border-white/10" : ""}>
              <ArticleCard article={article} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BorderTrace() {
  return (
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="absolute top-0 left-0 right-0 h-px bg-[#C9A84C] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <span className="absolute top-0 right-0 bottom-0 w-px bg-[#C9A84C] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />
      <span className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A84C] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
      <span className="absolute top-0 left-0 bottom-0 w-px bg-[#C9A84C] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-300" />
    </span>
  );
}
