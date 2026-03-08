import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Firm", href: "#firm" },
  { label: "Our Expertise", href: "#expertise" },
  { label: "Publications & Insights", href: "#insights" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "FR">("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#060B1F]/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
        <a href="#home" data-testid="logo" className="text-white font-semibold text-xl tracking-widest uppercase">
          Milton Hobbs
        </a>

        <nav data-testid="nav-desktop" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
              className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200 uppercase font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div
            data-testid="lang-toggle"
            className="hidden lg:flex items-center border border-white/20 text-xs tracking-widest"
          >
            <button
              onClick={() => setLang("EN")}
              data-testid="lang-en"
              className={`px-3 py-1.5 transition-colors duration-200 ${
                lang === "EN" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              EN
            </button>
            <div className="w-px h-5 bg-white/20" />
            <button
              onClick={() => setLang("FR")}
              data-testid="lang-fr"
              className={`px-3 py-1.5 transition-colors duration-200 ${
                lang === "FR" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              FR
            </button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden text-white/70 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
            className="lg:hidden overflow-hidden bg-[#060B1F]/98 border-t border-white/5"
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() => setLang("EN")}
                  className={`text-xs tracking-widest px-3 py-1.5 border ${lang === "EN" ? "border-[#C9A84C] text-[#C9A84C]" : "border-white/20 text-white/40"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("FR")}
                  className={`text-xs tracking-widest px-3 py-1.5 border ${lang === "FR" ? "border-[#C9A84C] text-[#C9A84C]" : "border-white/20 text-white/40"}`}
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
