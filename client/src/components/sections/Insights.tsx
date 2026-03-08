import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 25 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const handleLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ArticleCard({
  article,
  index,
  readLabel,
}: {
  article: { category: string; title: string; excerpt: string; readTime: string; date: string };
  index: number;
  readLabel: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-testid={`insight-card-${index}`}
    >
      <TiltCard className="group relative h-full p-8 bg-[#001489] hover:bg-[#001070] transition-colors duration-300 overflow-hidden flex flex-col">
        <BorderTrace />
        <div className="flex items-start justify-between mb-7 gap-3">
          <span className="text-[#D4AF36] text-[10px] tracking-[0.2em] uppercase font-medium border border-[#D4AF36]/30 px-3 py-1 whitespace-nowrap">
            {article.category}
          </span>
          <span className="text-white/30 text-[11px] whitespace-nowrap mt-0.5">{article.date}</span>
        </div>

        <h3 className="font-heading text-white text-base font-semibold leading-snug tracking-tight mb-4 pr-[15%] group-hover:text-white/90 transition-colors flex-1">
          {article.title}
        </h3>

        <p className="text-white/45 text-sm leading-relaxed pr-[15%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between mt-7 pt-5 border-t border-white/10">
          <span className="text-white/30 text-xs">{article.readTime}</span>
          <div className="flex items-center gap-2 text-[#D4AF36] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] tracking-[0.2em] uppercase">{readLabel}</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </TiltCard>
    </motion.article>
  );
}

export function Insights() {
  const { t } = useLang();
  const ins = t.insights;

  return (
    <section
      id="insights"
      data-testid="insights-section"
      className="bg-[#001489] py-28 px-8"
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
            <p className="text-[#D4AF36] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              {ins.eyebrow}
            </p>
            <h2 className="font-heading text-white text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">
              {ins.headline}
            </h2>
          </div>
          <a
            href="#insights"
            data-testid="view-all-insights"
            className="group flex items-center gap-3 text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {ins.articles.map((article, i) => (
            <ArticleCard key={i} article={article} index={i} readLabel={ins.read} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BorderTrace() {
  return (
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <span className="absolute top-0 left-0 right-0 h-px bg-[#D4AF36] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <span className="absolute top-0 right-0 bottom-0 w-px bg-[#D4AF36] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />
      <span className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF36] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
      <span className="absolute top-0 left-0 bottom-0 w-px bg-[#D4AF36] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-300" />
    </span>
  );
}
