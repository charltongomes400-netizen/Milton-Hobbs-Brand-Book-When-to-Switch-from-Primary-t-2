import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

function StatBox({
  value,
  suffix,
  label,
  index,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
  active: boolean;
}) {
  const count = useCounter(value, 1800, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      data-testid={`stat-box-${index}`}
      className="group relative flex flex-col justify-between p-8 lg:p-10 border border-white/15 hover:border-[#D4AF36]/50 transition-colors duration-500 overflow-hidden"
    >
      <motion.span
        className="absolute top-0 left-0 right-0 h-px bg-[#D4AF36] origin-left"
        initial={{ scaleX: 0 }}
        animate={active ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: index * 0.15 + 0.3, ease: "easeOut" }}
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(212,175,54,0.06) 0%, transparent 70%)",
        }}
      />

      <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
        {String(index + 1).padStart(2, "0")}
      </p>

      <div>
        <p className="font-heading text-white font-bold text-[clamp(2.8rem,5vw,4.5rem)] leading-none tracking-tight tabular-nums">
          {count}
          <span className="text-[#D4AF36]">{suffix}</span>
        </p>
        <p className="text-white/50 text-sm mt-4 leading-snug">{label}</p>
      </div>
    </motion.div>
  );
}

export function Stats() {
  const { t } = useLang();
  const s = t.stats;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      ref={ref}
      data-testid="stats-section"
      className="bg-[#001489] border-y border-white/8 py-20 px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#D4AF36] text-[10px] tracking-[0.3em] uppercase font-medium mb-10"
        >
          {s.label}
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {s.items.map((item, i) => (
            <StatBox
              key={i}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              index={i}
              active={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
