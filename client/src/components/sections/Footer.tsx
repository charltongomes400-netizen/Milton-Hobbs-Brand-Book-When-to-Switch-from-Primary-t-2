import { useLang } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const navEntries = [
    { label: t.nav.home,      href: "#home" },
    { label: t.nav.firm,      href: "#firm" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.insights,  href: "#insights" },
    { label: t.nav.careers,   href: "#careers" },
    { label: t.nav.contact,   href: "#contact" },
  ];

  return (
    <footer id="contact" data-testid="footer" className="bg-[#000A4F] border-t border-white/8">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-[#C4A030]/40">
          <div className="lg:col-span-5 lg:pr-16">
            <p className="font-heading text-white font-semibold text-lg tracking-[0.18em] uppercase mb-5">
              Milton Hobbs
            </p>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8 pr-[20%]">
              {f.tagline}
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${f.email}`}
                data-testid="footer-email"
                className="block text-[#D4AF36] text-sm hover:text-[#E8C97E] transition-colors"
              >
                {f.email}
              </a>
              <p className="text-white/40 text-sm">{f.phone}</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
              {f.dubaiLabel}
            </p>
            <address className="not-italic text-white/50 text-sm leading-[1.9]">
              {f.dubaiAddr.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </address>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
              {f.parisLabel}
            </p>
            <address className="not-italic text-white/50 text-sm leading-[1.9]">
              {f.parisAddr.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </address>
          </div>
        </div>

        <div className="py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border-b border-white/5">
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {navEntries.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/30 hover:text-white/60 text-[10px] tracking-[0.18em] uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/30 hover:text-white/60 text-[10px] tracking-[0.18em] uppercase transition-colors"
            >
              {f.privacy}
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-white/60 text-[10px] tracking-[0.18em] uppercase transition-colors"
            >
              {f.cookie}
            </a>
          </div>
        </div>

        <div className="py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-white/25 text-xs shrink-0">{f.copyright}</p>
          <p
            data-testid="footer-disclaimer"
            className="text-white/20 text-[11px] max-w-lg sm:text-right leading-relaxed"
          >
            {f.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
