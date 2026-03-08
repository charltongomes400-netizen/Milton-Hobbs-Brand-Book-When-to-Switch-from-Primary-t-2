import { motion } from "framer-motion";

const practices = [
  { title: "Corporate & Commercial", size: "large", description: "Mergers, acquisitions, joint ventures, and complex commercial agreements across jurisdictions." },
  { title: "Real Estate & Property", size: "medium", description: "Transactional real estate, development projects, and cross-border property structuring." },
  { title: "Litigation & Dispute Resolution", size: "medium", description: "High-stakes commercial disputes with strategic clarity and tenacity." },
  { title: "Arbitration & Mediation", size: "large", description: "International arbitration under ICC, DIAC, and LCIA rules. Neutral, strategic, decisive." },
  { title: "Employment & Labour", size: "small", description: "UAE and French employment law, workforce structuring, and executive contracts." },
  { title: "Banking & Finance", size: "small", description: "Financing structures, regulatory compliance, and cross-border capital flows." },
  { title: "Tax", size: "small", description: "Corporate tax planning, VAT structuring, and international fiscal optimization." },
  { title: "Intellectual Property", size: "medium", description: "Brand protection, licensing, and IP strategy across GCC and European markets." },
  { title: "Technology & Startups", size: "medium", description: "Startup formation, term sheet negotiation, data privacy, and tech transactions." },
  { title: "Immigration", size: "small", description: "UAE residency, investor visas, and mobility solutions for executives and their families." },
];

const sizeMap: Record<string, string> = {
  large: "col-span-2 row-span-2",
  medium: "col-span-1 row-span-2",
  small: "col-span-1 row-span-1",
};

function PracticeCard({
  title,
  description,
  size,
  index,
}: {
  title: string;
  description: string;
  size: string;
  index: number;
}) {
  const isLarge = size === "large";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      data-testid={`practice-card-${index}`}
      className={`${sizeMap[size]} group relative border border-white/10 p-8 hover:bg-white/[0.03] transition-all duration-400 overflow-hidden cursor-pointer`}
    >
      <BorderTrace />
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium block mb-4">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={`text-white font-semibold tracking-tight pr-[20%] ${
              isLarge ? "text-[clamp(1.4rem,2.5vw,2rem)]" : "text-base"
            }`}
          >
            {title}
          </h3>
        </div>
        <div>
          <p className="text-white/40 text-sm leading-relaxed mt-4 pr-[20%] hidden group-hover:block">
            {description}
          </p>
          <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase">Learn more</span>
            <svg className="w-3 h-3 text-[#C9A84C]" fill="none" viewBox="0 0 12 12">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PracticeAreas() {
  return (
    <section
      id="expertise"
      data-testid="practice-areas-section"
      className="bg-[#060B1F] py-28 px-8"
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
              Our Expertise
            </p>
            <h2 className="text-white text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">
              Practice areas.
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs pr-[20%]">
            Across industries and borders, we provide precision-crafted legal strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] gap-0 border border-white/10">
          {practices.map((p, i) => (
            <PracticeCard
              key={p.title}
              title={p.title}
              description={p.description}
              size={p.size}
              index={i}
            />
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
