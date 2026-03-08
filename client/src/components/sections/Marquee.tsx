import { useLang } from "@/contexts/LanguageContext";

const separator = (
  <span className="inline-block w-1 h-1 bg-[#D4AF36] mx-6 align-middle flex-shrink-0" />
);

export function Marquee() {
  const { t } = useLang();
  const items = t.practices.items.map((i) => i.title);

  const track = (
    <>
      {items.map((name, i) => (
        <span key={i} className="inline-flex items-center flex-shrink-0">
          <span className="text-white/55 text-sm tracking-[0.12em] uppercase font-medium whitespace-nowrap hover:text-white transition-colors duration-300 cursor-default">
            {name}
          </span>
          {separator}
        </span>
      ))}
    </>
  );

  return (
    <div
      data-testid="marquee-section"
      className="bg-[#001070] border-y border-white/8 py-5 overflow-hidden"
    >
      <div className="flex items-center" style={{ width: "max-content" }}>
        <div className="flex items-center animate-marquee">
          {track}
          {track}
          {track}
        </div>
      </div>
    </div>
  );
}
