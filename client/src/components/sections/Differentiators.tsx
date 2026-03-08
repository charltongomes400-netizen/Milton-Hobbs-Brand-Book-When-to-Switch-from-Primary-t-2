import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
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

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 25 });

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

export function Differentiators() {
  const { t } = useLang();
  const d = t.diff;

  return (
    <section
      id="firm"
      data-testid="differentiators-section"
      className="bg-[#001489] py-28 px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#D4AF36] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            {d.eyebrow}
          </p>
          <h2 className="font-heading text-white text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">
            {d.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {d.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`diff-card-${i}`}
            >
              <TiltCard className="group relative h-full p-10 bg-[#001489] hover:bg-[#001070] transition-colors duration-400 overflow-hidden">
                <BorderTrace />
                <div className="text-[#D4AF36] mb-7">{icons[i]}</div>
                <h3 className="font-heading text-white text-sm font-semibold tracking-[0.1em] uppercase mb-4 pr-[20%]">
                  {card.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed pr-[20%]">
                  {card.description}
                </p>
              </TiltCard>
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
      <span className="absolute top-0 left-0 right-0 h-px bg-[#D4AF36] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <span className="absolute top-0 right-0 bottom-0 w-px bg-[#D4AF36] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />
      <span className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF36] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
      <span className="absolute top-0 left-0 bottom-0 w-px bg-[#D4AF36] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-300" />
    </span>
  );
}
