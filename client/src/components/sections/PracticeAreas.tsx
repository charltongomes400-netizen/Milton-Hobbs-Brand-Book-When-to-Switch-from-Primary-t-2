import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const gridAreas = ["corp", "estate", "litig", "arb", "employ", "banking", "tax", "immig", "ip", "tech"];

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
      <div className="flex items-center gap-2 mt-auto pt-4">
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
