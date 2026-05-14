import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useLang } from "@/contexts/LanguageContext";
import miltonHobbsLogo from "@assets/Milton_hobbs_logo_1775554832004.png";

const PRACTICE_AREAS = [
  { num: "01", title: "Corporate & Commercial",     href: "/expertise/corporate-commercial" },
  { num: "02", title: "Tax & Compliance",           href: null },
  { num: "03", title: "Mergers & Acquisitions",     href: null },
  { num: "04", title: "Startups & Venture Capital", href: null },
  { num: "05", title: "IP & Technology",            href: null },
  { num: "06", title: "Real Estate & Property",     href: null },
  { num: "07", title: "Employment & Labor",         href: null },
  { num: "08", title: "Litigation & Disputes",      href: null },
];

export function Header() {
  const { lang, setLang, t } = useLang();
  const [location] = useLocation();
  const isHome = location === "/";
  const prefix = isHome ? "" : "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const expertiseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openExpertise  = () => { if (expertiseTimer.current) clearTimeout(expertiseTimer.current); setExpertiseOpen(true); };
  const closeExpertise = () => { expertiseTimer.current = setTimeout(() => setExpertiseOpen(false), 120); };

  const navLinks = [
    { label: t.nav.home,      href: `${prefix}#home`,      isMega: false },
    { label: t.nav.firm,      href: "/firm",               isMega: false },
    { label: t.nav.expertise, href: `${prefix}#expertise`, isMega: true  },
    { label: t.nav.insights,  href: `${prefix}#insights`,  isMega: false },
    { label: t.nav.careers,   href: "/careers",             isMega: false },
  ];
  const contactHref = `${prefix}#contact`;

  return (
    <motion.header
      data-testid="header"
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(0,20,137,0.08)" }}
    >
      <div
        className="max-w-[1400px] mx-auto px-8 flex items-center justify-between"
        style={{ height: 92 }}
      >
        {/* Logo */}
        <a href={`${prefix}#home`} data-testid="logo" className="shrink-0">
          <img
            src={miltonHobbsLogo}
            alt="Milton Hobbs"
            style={{ height: 72, width: "auto", display: "block" }}
          />
        </a>

        {/* Desktop nav */}
        <nav data-testid="nav-desktop" className="hidden lg:flex items-center gap-10 xl:gap-12">
          {navLinks.map((link) => {
            if (link.isMega) {
              return (
                <div
                  key={link.href}
                  onMouseEnter={openExpertise}
                  onMouseLeave={closeExpertise}
                  style={{ position: "relative", display: "flex", alignItems: "center" }}
                >
                  <button
                    data-testid="nav-link-expertise"
                    className="relative whitespace-nowrap font-bold inline-flex items-center gap-1.5"
                    style={{
                      color: "#001489",
                      fontSize: 16,
                      fontWeight: 700,
                      letterSpacing: "0.10em",
                      textTransform: "uppercase",
                      textDecoration: expertiseOpen ? "underline" : "none",
                      textUnderlineOffset: "4px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      transition: "color 0.25s ease",
                    }}
                    onClick={() => { setExpertiseOpen(false); window.location.href = link.href; }}
                  >
                    {link.label.toUpperCase()}
                    <motion.svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      animate={{ rotate: expertiseOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ marginTop: 1 }}
                    >
                      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </motion.svg>
                  </button>
                </div>
              );
            }
            return (
              <a
                key={link.href}
                href={link.href}
                data-testid={`nav-link-${link.href.replace(/[#/]/g, "")}`}
                className="relative whitespace-nowrap font-bold"
                style={{
                  color: "#001489",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.25s ease",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onMouseEnter={e => { e.currentTarget.style.textDecoration = "underline"; e.currentTarget.style.textUnderlineOffset = "4px"; }}
                onMouseLeave={e => { e.currentTarget.style.textDecoration = "none"; }}
              >
                {link.label.toUpperCase()}
              </a>
            );
          })}
        </nav>

        {/* Right side: lang + contact */}
        <div className="hidden lg:flex items-center gap-7 shrink-0">
          {/* Language toggle */}
          <div
            data-testid="lang-toggle"
            className="flex items-center"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.10em" }}
          >
            <button
              onClick={() => setLang("EN")}
              data-testid="lang-en"
              style={{
                color: lang === "EN" ? "#001489" : "rgba(0,20,137,0.28)",
                transition: "color 0.25s",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.10em",
              }}
            >
              EN
            </button>
            <span style={{ color: "rgba(0,20,137,0.15)", margin: "0 8px", fontWeight: 300, fontSize: 11 }}>|</span>
            <button
              onClick={() => setLang("FR")}
              data-testid="lang-fr"
              style={{
                color: lang === "FR" ? "#001489" : "rgba(0,20,137,0.28)",
                transition: "color 0.25s",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.10em",
              }}
            >
              FR
            </button>
          </div>

          {/* Thin divider */}
          <div style={{ width: 1, height: 16, background: "rgba(0,20,137,0.12)" }} />

          {/* Contact — outlined button */}
          <a
            href={contactHref}
            data-testid="nav-link-contact"
            className="inline-flex items-center whitespace-nowrap"
            style={{
              border: "1px solid #001489",
              color: "#001489",
              background: "transparent",
              padding: "9px 22px",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "background 0.25s, color 0.25s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#001489"; el.style.color = "#FFFFFF"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "#001489"; }}
          >
            {t.nav.contact.toUpperCase()}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col gap-[5px] w-8 h-8 items-center justify-center focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span style={{ background: "#001489" }} className={`block w-5 h-px transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span style={{ background: "#001489" }} className={`block w-5 h-px transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span style={{ background: "#001489" }} className={`block w-5 h-px transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </div>

      {/* ── Expertise mega-menu ── */}
      <AnimatePresence>
        {expertiseOpen && (
          <motion.div
            data-testid="mega-menu"
            onMouseEnter={openExpertise}
            onMouseLeave={closeExpertise}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="hidden lg:block"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#FFFFFF",
              borderTop: "2px solid #001489",
              borderBottom: "1px solid rgba(0,20,137,0.08)",
              boxShadow: "0 16px 48px rgba(0,20,137,0.10)",
              zIndex: 200,
            }}
          >
            <div
              className="max-w-[1400px] mx-auto"
              style={{ padding: "52px 32px 56px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}
            >
              {/* Left: tagline + CTA */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.30em",
                    textTransform: "uppercase",
                    color: "#001489",
                    marginBottom: 20,
                  }}>
                    Our Expertise
                  </p>
                  <h3
                    className="font-heading font-bold"
                    style={{
                      fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)",
                      lineHeight: 1.07,
                      letterSpacing: "-0.03em",
                      color: "#001489",
                      maxWidth: "14ch",
                      marginBottom: 32,
                    }}
                  >
                    Advising across every sector and border.
                  </h3>
                  <div style={{ width: 40, height: 2, background: "#001489", marginBottom: 28, opacity: 0.18 }} />
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "#000000",
                    marginBottom: 36,
                  }}>
                    Eight practice areas. One firm with precision counsel across the UAE, Europe and beyond.
                  </p>
                </div>
                <a
                  href={`${prefix}#expertise`}
                  data-testid="megamenu-view-all"
                  onClick={() => setExpertiseOpen(false)}
                  className="inline-flex items-center gap-2.5 self-start"
                  style={{
                    border: "1px solid #001489",
                    color: "#001489",
                    background: "transparent",
                    padding: "10px 22px",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#001489"; el.style.color = "#FFFFFF"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "#001489"; }}
                >
                  View All Areas
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Right: 2-column list of practice areas */}
              <div>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#001489",
                  marginBottom: 16,
                  paddingBottom: 14,
                  borderBottom: "1px solid rgba(0,20,137,0.10)",
                }}>
                  Practice Areas
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }}>
                  {PRACTICE_AREAS.map((area, i) => (
                    <a
                      key={i}
                      href={area.href ?? `${prefix}#expertise`}
                      data-testid={`mega-item-${area.num}`}
                      onClick={e => { if (!area.href) { e.preventDefault(); } setExpertiseOpen(false); }}
                      className="group flex items-center gap-4"
                      style={{
                        padding: "15px 0",
                        borderBottom: "1px solid rgba(0,20,137,0.06)",
                        textDecoration: "none",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "8px"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "0px"; }}
                    >
                      <span style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 8,
                        fontWeight: 700,
                        letterSpacing: "0.24em",
                        color: "rgba(0,20,137,0.28)",
                        minWidth: 22,
                        flexShrink: 0,
                        transition: "color 0.2s",
                      }}>
                        {area.num}
                      </span>
                      <span
                        className="font-heading font-bold flex-1"
                        style={{
                          fontSize: "0.9375rem",
                          letterSpacing: "-0.01em",
                          color: "#001489",
                          lineHeight: 1.25,
                          transition: "color 0.2s",
                        }}
                      >
                        {area.title}
                      </span>
                      <svg
                        width="10" height="10" viewBox="0 0 12 12" fill="none"
                        style={{ opacity: 0, flexShrink: 0, transition: "opacity 0.2s" }}
                        className="group-hover:opacity-100"
                      >
                        <path d="M2 10L10 2M10 2H4M10 2v6" stroke="#001489" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{ background: "#001489", borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="px-8 py-8 flex flex-col gap-6">
              {[...navLinks, { label: t.nav.contact, href: contactHref, isMega: false }].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  onClick={() => setLang("EN")}
                  data-testid="mobile-lang-en"
                  style={{ color: lang === "EN" ? "#FFFFFF" : "rgba(255,255,255,0.30)", fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  EN
                </button>
                <span style={{ color: "rgba(255,255,255,0.15)", margin: "0 10px", fontSize: 11, fontWeight: 300 }}>|</span>
                <button
                  onClick={() => setLang("FR")}
                  data-testid="mobile-lang-fr"
                  style={{ color: lang === "FR" ? "#FFFFFF" : "rgba(255,255,255,0.30)", fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
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
