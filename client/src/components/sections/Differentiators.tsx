import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const icons = [
  <svg key="0" viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" />
    <circle cx="20" cy="16" r="5" stroke="currentColor" strokeWidth="1" />
    <path d="M8 35c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1" />
  </svg>,
  <svg key="1" viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" />
    <path d="M8 20h24M20 8v24" stroke="currentColor" strokeWidth="1" />
    <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1" />
  </svg>,
  <svg key="2" viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" />
    <path d="M10 30L20 10L30 30" stroke="currentColor" strokeWidth="1" />
    <path d="M13 24h14" stroke="currentColor" strokeWidth="1" />
  </svg>,
  <svg key="3" viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" />
    <rect x="10" y="10" width="8" height="8" stroke="currentColor" strokeWidth="1" />
    <rect x="22" y="22" width="8" height="8" stroke="currentColor" strokeWidth="1" />
    <path d="M18 14h4M26 18v4" stroke="currentColor" strokeWidth="1" />
  </svg>,
];

export function Differentiators() {
  const { t } = useLang();
  const d = t.diff;

  return (
    <section
      id="firm"
      data-testid="differentiators-section"
      className="bg-[#0A0F2E] py-28 px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            {d.eyebrow}
          </p>
          <h2 className="text-white text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">
            {d.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-white/10 border border-white/10">
          {d.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`diff-card-${i}`}
              className={`group relative p-10 hover:bg-white/[0.025] transition-colors duration-400 overflow-hidden ${
                i < d.cards.length - 1 ? "lg:border-r border-white/10" : ""
              } ${i % 2 === 0 && i < d.cards.length - 1 ? "sm:border-r sm:border-white/10 lg:border-r-0" : ""} ${
                i % 2 === 0 ? "lg:border-r border-white/10" : ""
              }`}
            >
              <BorderTrace />
              <div className="text-[#C9A84C] mb-7">{icons[i]}</div>
              <h3 className="text-white text-sm font-semibold tracking-[0.1em] uppercase mb-4 pr-[20%]">
                {card.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed pr-[20%]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BorderTrace() {
  return (
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <span className="absolute top-0 left-0 right-0 h-px bg-[#C9A84C] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <span className="absolute top-0 right-0 bottom-0 w-px bg-[#C9A84C] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />
      <span className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A84C] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
      <span className="absolute top-0 left-0 bottom-0 w-px bg-[#C9A84C] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-300" />
    </span>
  );
}
