import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useLang } from "@/contexts/LanguageContext";

const practiceAreas = [
  {
    title: "Corporate & Commercial",
    slug: "corporate-commercial",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.4" />
        <line x1="12" y1="12" x2="12" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="9" y1="14.5" x2="15" y2="14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Real Estate & Property",
    slug: "real-estate",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Litigation & Disputes",
    slug: "litigation",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
        <path d="M5 9l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 9l-3 3 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="7" cy="12" rx="2.5" ry="1" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="17" cy="12" rx="2.5" ry="1" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Arbitration & Mediation",
    slug: "arbitration",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Employment & Labour",
    slug: "employment",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 21v-2a6 6 0 0112 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M16 11a3 3 0 110 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M21 21v-2a3 3 0 00-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Banking & Finance",
    slug: "banking-finance",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 10h18M3 10V7l9-4 9 4v3M3 10v10h18V10" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Tax",
    slug: "tax",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="8" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Immigration",
    slug: "immigration",
    available: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="5" y1="8" x2="19" y2="8" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <line x1="5" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Intellectual Property",
    slug: "intellectual-property",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2L3 7v7c0 5 4 9.3 9 10 5-.7 9-5 9-10V7l-9-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Technology & Startups",
    slug: "technology-startups",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <rect x="8" y="8" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="2" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [overLight, setOverLight] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const [location] = useLocation();
  const isHome = location === "/";
  const expertiseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const HEADER_H = 80;
    const check = () => {
      setScrolled(window.scrollY > 20);
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

  const prefix = isHome ? "" : "/";
  const navLinks = [
    { label: t.nav.home,     href: `${prefix}#home`,      isMega: false },
    { label: t.nav.firm,     href: "/firm",               isMega: false },
    { label: t.nav.expertise, href: `${prefix}#expertise`, isMega: true },
    { label: t.nav.insights, href: `${prefix}#insights`,  isMega: false },
    { label: t.nav.careers,  href: "/careers",             isMega: false },
    { label: t.nav.contact,  href: `${prefix}#contact`,   isMega: false },
  ];

  const isLight = scrolled && overLight;

  const headerBg = expertiseOpen
    ? "bg-[#001070]"
    : isLight
      ? "bg-white shadow-[0_1px_0_0_rgba(0,20,137,0.10)]"
      : scrolled
        ? "bg-[#001489]/98 backdrop-blur-sm shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
        : "bg-transparent";

  const logoColor   = isLight && !expertiseOpen ? "text-[#001489]"      : "text-white";
  const linkColor   = isLight && !expertiseOpen ? "text-[#001489]/55"   : "text-white/60";
  const linkHover   = isLight && !expertiseOpen ? "hover:text-[#001489]" : "hover:text-white";
  const borderColor = isLight && !expertiseOpen ? "border-[#001489]/18" : "border-white/20";
  const inactiveBtn = isLight && !expertiseOpen ? "text-[#001489]/45 hover:text-[#001489]" : "text-white/50 hover:text-white";
  const hamburger   = isLight && !expertiseOpen ? "text-[#001489]/70 hover:text-[#001489]" : "text-white/70 hover:text-white";

  const openExpertise = () => {
    if (expertiseTimeoutRef.current) clearTimeout(expertiseTimeoutRef.current);
    setExpertiseOpen(true);
  };
  const closeExpertise = () => {
    expertiseTimeoutRef.current = setTimeout(() => setExpertiseOpen(false), 120);
  };

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
          href={`${prefix}#home`}
          data-testid="logo"
          className={`font-heading font-semibold text-lg tracking-[0.18em] uppercase shrink-0 transition-colors duration-300 ${logoColor}`}
        >
          Milton Hobbs
        </a>

        <nav data-testid="nav-desktop" className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) =>
            link.isMega ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={openExpertise}
                onMouseLeave={closeExpertise}
              >
                <button
                  data-testid="nav-expertise-trigger"
                  className={`flex items-center gap-1.5 text-xs tracking-[0.12em] uppercase font-medium whitespace-nowrap transition-colors duration-300 ${
                    expertiseOpen ? "text-[#D4AF36]" : `${linkColor} ${linkHover}`
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-2.5 h-2.5 transition-transform duration-200 ${expertiseOpen ? "rotate-180 text-[#D4AF36]" : ""}`}
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                data-testid={`nav-link-${link.href.replace(/[#/]/g, "")}`}
                className={`text-xs tracking-[0.12em] uppercase font-medium whitespace-nowrap transition-colors duration-300 ${linkColor} ${linkHover}`}
              >
                {link.label}
              </a>
            )
          )}
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
              <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* ── MEGA MENU ── */}
      <AnimatePresence>
        {expertiseOpen && (
          <motion.div
            key="mega"
            data-testid="mega-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="hidden lg:block absolute top-full left-0 right-0 bg-[#001070] border-t border-white/10 shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
            onMouseEnter={openExpertise}
            onMouseLeave={closeExpertise}
          >
            <div className="max-w-[1400px] mx-auto px-8 py-10">
              <div className="flex gap-14 xl:gap-20">
                <div className="w-60 xl:w-72 flex-shrink-0 flex flex-col justify-between">
                  <div>
                    <p className="text-[#D4AF36] text-[10px] tracking-[0.35em] uppercase font-bold mb-3">Our Expertise</p>
                    <h3 className="font-heading text-white font-bold text-2xl tracking-tight leading-snug mb-4">
                      Practice areas.
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed">
                      Precision-crafted legal strategies across industries and borders — from the UAE to France.
                    </p>
                  </div>
                  <a
                    href={`${prefix}#expertise`}
                    className="inline-flex items-center gap-2 text-[#D4AF36] text-[10px] tracking-[0.22em] uppercase font-semibold hover:gap-3 transition-all mt-8 group"
                  >
                    <span>View all areas</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </a>
                </div>

                <div className="flex-1 grid grid-cols-5 gap-2">
                  {practiceAreas.map((area, i) => {
                    const href = area.available
                      ? `/expertise/${area.slug}`
                      : `${prefix}#expertise`;
                    return (
                      <a
                        key={i}
                        href={href}
                        data-testid={`mega-item-${area.slug}`}
                        className={`group relative flex flex-col gap-2.5 p-4 border transition-all duration-200 ${
                          area.available
                            ? "border-[#D4AF36]/30 hover:border-[#D4AF36] hover:bg-[#D4AF36]/5"
                            : "border-white/8 hover:border-white/20 hover:bg-white/[0.03]"
                        }`}
                      >
                        {area.available && (
                          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#D4AF36]" />
                        )}
                        <span
                          className={`transition-colors duration-200 ${
                            area.available ? "text-[#D4AF36] group-hover:text-[#E8C97E]" : "text-white/35 group-hover:text-white/55"
                          }`}
                        >
                          {area.icon}
                        </span>
                        <p
                          className={`text-[11px] font-semibold leading-snug tracking-tight transition-colors duration-200 ${
                            area.available ? "text-white group-hover:text-[#D4AF36]" : "text-white/50 group-hover:text-white/75"
                          }`}
                        >
                          {area.title}
                        </p>
                        {!area.available && (
                          <span className="text-[8px] tracking-[0.2em] uppercase text-white/20 font-medium">
                            Soon
                          </span>
                        )}
                        {area.available && (
                          <span className="text-[8px] tracking-[0.2em] uppercase text-[#D4AF36]/70 font-medium">
                            View page →
                          </span>
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE MENU ── */}
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
            <div className="px-8 py-8 flex flex-col gap-5">
              {navLinks.map((link) =>
                link.isMega ? (
                  <div key={link.href}>
                    <button
                      className="flex items-center justify-between w-full text-white/70 hover:text-white text-sm tracking-[0.15em] uppercase transition-colors"
                      onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                      data-testid="mobile-expertise-toggle"
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${mobileExpertiseOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 10 10"
                      >
                        <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {mobileExpertiseOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pl-4 grid grid-cols-2 gap-2">
                            {practiceAreas.map((area, i) => {
                              const href = area.available ? `/expertise/${area.slug}` : `${prefix}#expertise`;
                              return (
                                <a
                                  key={i}
                                  href={href}
                                  onClick={() => setMobileOpen(false)}
                                  className={`flex items-start gap-2 p-2.5 border transition-colors ${
                                    area.available ? "border-[#D4AF36]/30 text-white" : "border-white/8 text-white/40"
                                  }`}
                                >
                                  <span className={area.available ? "text-[#D4AF36]" : "text-white/30"}>
                                    {area.icon}
                                  </span>
                                  <span className="text-[10px] leading-snug font-medium">{area.title}</span>
                                </a>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/70 hover:text-white text-sm tracking-[0.15em] uppercase transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}

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
