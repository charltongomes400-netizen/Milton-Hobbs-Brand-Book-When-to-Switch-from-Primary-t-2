import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

import imgCorp    from "@assets/stock_images/corporate_commercial.jpg";
import imgEstate  from "@assets/stock_images/real_estate.jpg";
import imgLitig   from "@assets/stock_images/litigation.jpg";
import imgArb     from "@assets/stock_images/arbitration.jpg";
import imgEmploy  from "@assets/stock_images/employment.jpg";
import imgBank    from "@assets/stock_images/banking_finance.jpg";
import imgTax     from "@assets/stock_images/tax_planning.jpg";
import imgImmig   from "@assets/stock_images/immigration.jpg";
import imgIp      from "@assets/stock_images/intellectual_property.jpg";
import imgTech    from "@assets/stock_images/technology_startups.jpg";

const gridAreas = ["corp", "estate", "litig", "arb", "employ", "banking", "tax", "immig", "ip", "tech"];
const cardImages = [imgCorp, imgEstate, imgLitig, imgArb, imgEmploy, imgBank, imgTax, imgImmig, imgIp, imgTech];

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
      className="group relative overflow-hidden cursor-pointer"
      style={{ gridArea: area }}
    >
      <img
        src={cardImages[index]}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#000A3D]/95 via-[#001070]/55 to-[#001489]/20" />

      <BorderTrace />

      <span className="absolute top-6 left-7 text-[#D4AF36] text-[10px] tracking-[0.25em] uppercase font-medium">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-0 bottom-0 px-7 pb-7 flex flex-col">
        <h3 className="font-heading text-white font-semibold tracking-tight text-base leading-snug pr-[10%]">
          {title}
        </h3>

        <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-[max-height] duration-400 pr-[10%]">
          <p className="text-white/65 text-sm leading-relaxed pt-2">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          <span className="text-[#D4AF36] text-[10px] tracking-[0.2em] uppercase font-medium">
            {learnMore}
          </span>
          <svg className="w-3 h-3 text-[#D4AF36]" fill="none" viewBox="0 0 12 12">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
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
    <span className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="absolute top-0 left-0 right-0 h-px bg-[#D4AF36] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <span className="absolute top-0 right-0 bottom-0 w-px bg-[#D4AF36] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />
      <span className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF36] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
      <span className="absolute top-0 left-0 bottom-0 w-px bg-[#D4AF36] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-300" />
    </span>
  );
}
