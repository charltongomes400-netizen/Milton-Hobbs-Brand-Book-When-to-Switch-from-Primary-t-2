import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home,      href: "#home" },
    { label: t.nav.firm,      href: "#firm" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.insights,  href: "#insights" },
    { label: t.nav.careers,   href: "#careers" },
    { label: t.nav.contact,   href: "#contact" },
  ];

  return (
    <motion.header
      data-testid="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#001489] ${
        scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
        <a
          href="#home"
          data-testid="logo"
          className="font-heading text-white font-semibold text-lg tracking-[0.18em] uppercase shrink-0"
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
              className="text-white/60 hover:text-white text-xs tracking-[0.12em] transition-colors duration-200 uppercase font-medium whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 shrink-0">
          <div
            data-testid="lang-toggle"
            className="hidden lg:flex items-center border border-white/20 text-xs tracking-widest overflow-hidden"
          >
            <button
              onClick={() => setLang("EN")}
              data-testid="lang-en"
              className={`px-4 py-2 transition-all duration-200 ${
                lang === "EN"
                  ? "bg-[#D4AF36] text-[#000A4F] font-semibold"
                  : "text-white/50 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("FR")}
              data-testid="lang-fr"
              className={`px-4 py-2 transition-all duration-200 ${
                lang === "FR"
                  ? "bg-[#D4AF36] text-[#000A4F] font-semibold"
                  : "text-white/50 hover:text-white"
              }`}
            >
              FR
            </button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="lg:hidden text-white/70 hover:text-white p-1"
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
                    lang === "EN"
                      ? "bg-[#D4AF36] text-[#000A4F] font-semibold"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("FR")}
                  data-testid="mobile-lang-fr"
                  className={`text-xs tracking-widest px-4 py-2 transition-all duration-200 ${
                    lang === "FR"
                      ? "bg-[#D4AF36] text-[#000A4F] font-semibold"
                      : "text-white/50 hover:text-white"
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
