import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const gridAreas = ["corp", "estate", "litig", "arb", "employ", "banking", "tax", "immig", "ip", "tech"];

const categoryIcons = [
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="20" width="48" height="36" rx="1" />
    <path d="M20 20V14a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v6" />
    <line x1="8" y1="36" x2="56" y2="36" />
    <line x1="32" y1="36" x2="32" y2="56" />
  </svg>,
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 32 L32 10 L58 32" />
    <rect x="14" y="32" width="36" height="24" />
    <rect x="24" y="44" width="16" height="12" />
  </svg>,
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 8 L44 28 H20 Z" />
    <line x1="32" y1="28" x2="32" y2="48" />
    <ellipse cx="32" cy="52" rx="16" ry="4" />
    <line x1="20" y1="36" x2="44" y2="36" />
  </svg>,
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="32" y1="10" x2="32" y2="54" strokeLinecap="round" />
    <line x1="10" y1="22" x2="54" y2="22" />
    <path d="M10 22 Q10 38 20 38 Q30 38 30 22" />
    <path d="M34 22 Q34 38 44 38 Q54 38 54 22" />
  </svg>,
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="22" cy="18" r="8" />
    <circle cx="42" cy="18" r="8" />
    <path d="M6 56 Q6 40 22 40 Q32 40 32 48" />
    <path d="M58 56 Q58 40 42 40 Q32 40 32 48" />
  </svg>,
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="16" width="48" height="32" rx="2" />
    <line x1="8" y1="26" x2="56" y2="26" />
    <line x1="20" y1="26" x2="20" y2="48" />
    <circle cx="38" cy="37" r="6" />
    <line x1="44" y1="43" x2="50" y2="49" />
  </svg>,
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="12" y="8" width="40" height="48" rx="2" />
    <line x1="20" y1="20" x2="44" y2="20" />
    <line x1="20" y1="28" x2="44" y2="28" />
    <line x1="20" y1="36" x2="36" y2="36" />
    <path d="M36 44 L44 44 L44 56 L36 56 Z" />
    <line x1="38" y1="44" x2="38" y2="36" />
  </svg>,
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="32" r="22" />
    <line x1="10" y1="32" x2="54" y2="32" />
    <path d="M32 10 Q20 32 32 54" />
    <path d="M32 10 Q44 32 32 54" />
    <rect x="22" y="14" width="20" height="12" rx="2" />
  </svg>,
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="26" r="14" />
    <line x1="32" y1="40" x2="32" y2="50" />
    <line x1="22" y1="50" x2="42" y2="50" />
    <line x1="26" y1="46" x2="38" y2="46" />
    <circle cx="32" cy="26" r="4" fill="currentColor" stroke="none" opacity="0.4" />
  </svg>,
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="10" width="18" height="18" rx="1" />
    <rect x="36" y="10" width="18" height="18" rx="1" />
    <rect x="10" y="36" width="18" height="18" rx="1" />
    <rect x="36" y="36" width="18" height="18" rx="1" />
    <line x1="28" y1="19" x2="36" y2="19" />
    <line x1="28" y1="45" x2="36" y2="45" />
    <line x1="19" y1="28" x2="19" y2="36" />
    <line x1="45" y1="28" x2="45" y2="36" />
  </svg>,
];

function PracticeCard({
  title,
  description,
  index,
  area,
  learnMore,
}: {
  title: string;
  description: string;
  index: number;
  area: string;
  learnMore: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.4) }}
      data-testid={`practice-card-${index}`}
      className="group relative p-7 lg:p-8 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
      style={{ gridArea: area }}
    >
      <BorderTrace />

      <div
        className="pointer-events-none absolute bottom-0 right-0 w-28 h-28 text-white opacity-[0.07] translate-x-4 translate-y-4"
        aria-hidden="true"
      >
        {categoryIcons[index]}
      </div>

      <span className="text-[#D4AF36] text-[10px] tracking-[0.25em] uppercase font-medium block mb-5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-heading text-white font-semibold tracking-tight text-base leading-snug mb-3 pr-[15%]">
        {title}
      </h3>
      <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-[max-height] duration-300 pr-[15%]">
        <p className="text-white/45 text-sm leading-relaxed pt-3">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[#D4AF36] text-[10px] tracking-[0.2em] uppercase">
          {learnMore}
        </span>
        <svg className="w-3 h-3 text-[#D4AF36]" fill="none" viewBox="0 0 12 12">
          <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>
    </motion.div>
  );
}

export function PracticeAreas() {
  const { t } = useLang();
  const p = t.practices;

  return (
    <section
      id="expertise"
      data-testid="practice-areas-section"
      className="bg-[#001070] py-28 px-8"
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
              {p.eyebrow}
            </p>
            <h2 className="font-heading text-white text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">
              {p.headline}
            </h2>
          </div>
          <p className="text-white/45 text-sm max-w-xs leading-relaxed">{p.subtext}</p>
        </motion.div>

        <div className="bento-grid">
          {p.items.map((item, i) => (
            <PracticeCard
              key={i}
              title={item.title}
              description={item.description}
              index={i}
              area={gridAreas[i]}
              learnMore={p.learnMore}
            />
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
