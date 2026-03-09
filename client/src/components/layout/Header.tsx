import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [overLight, setOverLight] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const HEADER_H = 80;

    const check = () => {
      setScrolled(window.scrollY > 20);

      // Sample the element just below the header — accurate to the exact pixel
      const sampleEl = document.elementFromPoint(window.innerWidth / 2, HEADER_H + 2);
      let isLight = false;
      let node: Element | null = sampleEl;
      while (node && node !== document.documentElement) {
        if (node instanceof HTMLElement && node.dataset.headerTheme) {
          isLight = node.dataset.headerTheme === "light";
          break;
        }
        node = node.parentElement;
      }
      setOverLight(isLight);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const navLinks = [
    { label: t.nav.home,      href: "#home" },
    { label: t.nav.firm,      href: "#firm" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.insights,  href: "#insights" },
    { label: t.nav.careers,   href: "#careers" },
    { label: t.nav.contact,   href: "#contact" },
  ];

  const isLight = scrolled && overLight;

  const headerBg = isLight
    ? "bg-white shadow-[0_1px_0_0_rgba(0,20,137,0.10)]"
    : scrolled
      ? "bg-[#001489]/98 backdrop-blur-sm shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
      : "bg-transparent";

  const logoColor   = isLight ? "text-[#001489]"      : "text-white";
  const linkColor   = isLight ? "text-[#001489]/55"   : "text-white/60";
  const linkHover   = isLight ? "hover:text-[#001489]" : "hover:text-white";
  const borderColor = isLight ? "border-[#001489]/18" : "border-white/20";
  const inactiveBtn = isLight ? "text-[#001489]/45 hover:text-[#001489]" : "text-white/50 hover:text-white";
  const hamburger   = isLight ? "text-[#001489]/70 hover:text-[#001489]" : "text-white/70 hover:text-white";

  return (
    <motion.header
      data-testid="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
        <a
          href="#home"
          data-testid="logo"
          className={`font-heading font-semibold text-lg tracking-[0.18em] uppercase shrink-0 transition-colors duration-300 ${logoColor}`}
        >
          Milton Hobbs
        </a>

        <nav
          data-testid="nav-desktop"
          className="hidden lg:flex items-center gap-7 xl:gap-9"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.href.replace("#", "")}`}
              className={`text-xs tracking-[0.12em] uppercase font-medium whitespace-nowrap transition-colors duration-300 ${linkColor} ${linkHover}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 shrink-0">
          <div
            data-testid="lang-toggle"
            className={`hidden lg:flex items-center border text-xs tracking-widest overflow-hidden transition-colors duration-300 ${borderColor}`}
          >
            <button
              onClick={() => setLang("EN")}
              data-testid="lang-en"
              className={`px-4 py-2 transition-all duration-200 ${
                lang === "EN" ? "bg-[#D4AF36] text-[#000A4F] font-semibold" : inactiveBtn
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("FR")}
              data-testid="lang-fr"
              className={`px-4 py-2 transition-all duration-200 ${
                lang === "FR" ? "bg-[#D4AF36] text-[#000A4F] font-semibold" : inactiveBtn
              }`}
            >
              FR
            </button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            className={`lg:hidden p-1 transition-colors duration-300 ${hamburger}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="flex flex-col gap-[5px] w-5">
              <span
                className={`block h-px bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#001070] border-t border-white/10"
          >
            <div className="px-8 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-white text-sm tracking-[0.15em] uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-0 mt-2 border border-white/20 w-fit">
                <button
                  onClick={() => setLang("EN")}
                  data-testid="mobile-lang-en"
                  className={`text-xs tracking-widest px-4 py-2 transition-all duration-200 ${
                    lang === "EN" ? "bg-[#D4AF36] text-[#000A4F] font-semibold" : "text-white/50 hover:text-white"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("FR")}
                  data-testid="mobile-lang-fr"
                  className={`text-xs tracking-widest px-4 py-2 transition-all duration-200 ${
                    lang === "FR" ? "bg-[#D4AF36] text-[#000A4F] font-semibold" : "text-white/50 hover:text-white"
                  }`}
                >
                  FR
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
