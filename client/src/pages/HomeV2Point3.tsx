import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";
import miltonHobbsLogo from "@assets/Milton_hobbs_logo_1775554832004.png";
import miltonHobbsWordmark from "@assets/image_1776101259071.png";
import imgCorp from "@assets/stock_images/corporate_commercial.jpg";
import imgTax from "@assets/stock_images/tax_planning.jpg";
import imgBank from "@assets/stock_images/banking_finance.jpg";
import imgTech from "@assets/stock_images/technology_startups.jpg";
import imgIp from "@assets/stock_images/intellectual_property.jpg";
import imgEstate from "@assets/stock_images/real_estate.jpg";
import imgEmploy from "@assets/stock_images/employment.jpg";
import imgLitig from "@assets/stock_images/litigation.jpg";
import heroBg0 from "@assets/verne-ho-0LAJfSNa-xQ-unsplash_1775562755413.jpg";
import heroBg1 from "@assets/tim-stief-dH6IjhWHNQQ-unsplash_1775562755413.jpg";
import heroBg2 from "@assets/joakim-nadell-K67sBVqLLuw-unsplash_1775562755414.jpg";
import heroBg3 from "@assets/maarten-deckers-T5nXYXCf50I-unsplash_1775562755414.jpg";
import heroBg4 from "@assets/anders-jilden-Sc5RKXLBjGg-unsplash_1775562755415.jpg";

const HERO_BG_IMAGES = [heroBg0, heroBg1, heroBg2, heroBg3, heroBg4];

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

function HeaderV23() {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 20);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.firm, href: "#firm" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.insights, href: "#insights" },
    { label: t.nav.careers, href: "/careers" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const mainLinks = navLinks.filter((l) => l.href !== "#contact");
  const contactLink = navLinks.find((l) => l.href === "#contact")!;

  return (
    <motion.header
      data-testid="header"
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,20,137,0.08)" : "1px solid transparent",
        transition: "all 0.45s ease",
      }}
    >
      <div
        className="max-w-[1400px] mx-auto px-8 flex items-center justify-between"
        style={{ height: 80 }}
      >
        <a href="#home" data-testid="logo" className="shrink-0">
          <img
            src={miltonHobbsLogo}
            alt="Milton Hobbs"
            className="h-14 w-auto block transition-all duration-300"
            style={{
              filter: scrolled ? "none" : "brightness(0) invert(1)",
            }}
          />
        </a>

        <nav
          data-testid="nav-desktop"
          className="hidden lg:flex items-center gap-8 xl:gap-10"
        >
          {mainLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.href.replace(/[#/]/g, "")}`}
              className="relative whitespace-nowrap transition-colors duration-200"
              style={{
                color: scrolled
                  ? "rgba(0,20,137,0.60)"
                  : "rgba(255,255,255,0.65)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? "#001489"
                  : "#FFFFFF")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? "rgba(0,20,137,0.60)"
                  : "rgba(255,255,255,0.65)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <a
            href={contactLink.href}
            data-testid="nav-link-contact"
            className="inline-flex items-center gap-2 text-white transition-colors duration-200"
            style={{
              background: scrolled ? "#001489" : "rgba(255,255,255,0.12)",
              border: scrolled ? "none" : "1px solid rgba(255,255,255,0.25)",
              padding: "10px 24px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = scrolled
                ? "#192B94"
                : "rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = scrolled
                ? "#001489"
                : "rgba(255,255,255,0.12)";
            }}
          >
            {contactLink.label}
          </a>

          <div
            data-testid="lang-toggle"
            className="flex items-center"
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.04em" }}
          >
            <button
              onClick={() => setLang("EN")}
              data-testid="lang-en"
              className="transition-colors duration-200"
              style={{
                color:
                  lang === "EN"
                    ? scrolled
                      ? "#001489"
                      : "#FFFFFF"
                    : scrolled
                      ? "rgba(0,20,137,0.28)"
                      : "rgba(255,255,255,0.35)",
              }}
            >
              EN
            </button>
            <span
              style={{
                color: scrolled
                  ? "rgba(0,20,137,0.18)"
                  : "rgba(255,255,255,0.20)",
                margin: "0 7px",
                fontWeight: 300,
                fontSize: 11,
              }}
            >
              |
            </span>
            <button
              onClick={() => setLang("FR")}
              data-testid="lang-fr"
              className="transition-colors duration-200"
              style={{
                color:
                  lang === "FR"
                    ? scrolled
                      ? "#001489"
                      : "#FFFFFF"
                    : scrolled
                      ? "rgba(0,20,137,0.28)"
                      : "rgba(255,255,255,0.35)",
              }}
            >
              FR
            </button>
          </div>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col gap-[5px] w-6 p-1 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px transition-all duration-300 origin-center"
              style={{
                background: scrolled ? "#001489" : "#FFFFFF",
                ...(mobileOpen && i === 0
                  ? { transform: "rotate(45deg) translateY(6px)" }
                  : {}),
                ...(mobileOpen && i === 1 ? { opacity: 0 } : {}),
                ...(mobileOpen && i === 2
                  ? { transform: "rotate(-45deg) translateY(-6px)" }
                  : {}),
              }}
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.98)",
              borderTop: "1px solid #E8EDF5",
            }}
          >
            <div className="px-8 py-7 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: "#001489",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div
                className="flex items-center pt-2"
                style={{ borderTop: "1px solid #E8EDF5" }}
              >
                <button
                  onClick={() => setLang("EN")}
                  style={{
                    color:
                      lang === "EN" ? "#001489" : "rgba(0,20,137,0.30)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  EN
                </button>
                <span
                  style={{
                    color: "rgba(0,20,137,0.18)",
                    margin: "0 8px",
                    fontSize: 14,
                    fontWeight: 300,
                  }}
                >
                  |
                </span>
                <button
                  onClick={() => setLang("FR")}
                  style={{
                    color:
                      lang === "FR" ? "#001489" : "rgba(0,20,137,0.30)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
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

const HERO_CYCLE_MS = 10000;

function HeroV23() {
  const { t } = useLang();
  const ins = t.insights;
  const totalArticles = ins.articles.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const bgIndex = currentIndex % HERO_BG_IMAGES.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalArticles);
    }, HERO_CYCLE_MS);
    return () => clearInterval(timer);
  }, [timerKey, totalArticles]);

  function goTo(i: number) {
    setCurrentIndex(i);
    setTimerKey((k) => k + 1);
  }

  const featuredArticle = ins.articles[currentIndex];
  const featuredSlug = articles[currentIndex]?.slug ?? "";

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative overflow-hidden"
      style={{ background: "#001489", minHeight: "100vh" }}
    >
      <AnimatePresence>
        <motion.div
          key={bgIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.8, ease: "easeOut" }}
        >
          <img
            src={HERO_BG_IMAGES[bgIndex]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              objectPosition: "center 30%",
              mixBlendMode: "multiply",
              filter: "blur(1px)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(0,10,70,0.75) 0%, rgba(0,10,70,0.3) 50%, transparent 80%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "50%",
          background:
            "linear-gradient(to top, rgba(0,10,60,0.90) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mb-6"
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.40)",
            }}
          >
            {t.hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
          className="font-heading font-bold text-white"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 10rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.04em",
            marginBottom: "2rem",
          }}
          data-testid="hero-headline"
        >
          MILTON
          <br />
          HOBBS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="flex flex-col items-center gap-6"
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.45)",
              maxWidth: "48ch",
            }}
          >
            {t.hero.subheadline}
          </p>

          <a
            href="#insights"
            data-testid="hero-explore-cta"
            className="group inline-flex items-center gap-3"
            style={{ textDecoration: "none" }}
          >
            <span
              className="inline-flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.20)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 3v10M3 8l5 5 5-5"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(255,255,255,0.40)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              {t.hero.scroll}
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-8 right-8 flex items-end justify-between"
        >
          <div
            className="flex items-center gap-2"
            data-testid="hero-dots"
          >
            {ins.articles.map((_, i) => (
              <button
                key={i}
                data-testid={`hero-dot-${i}`}
                onClick={() => goTo(i)}
                aria-label={`Article ${i + 1}`}
                className="block focus:outline-none cursor-pointer transition-all duration-300"
                style={{
                  width: i === currentIndex ? 32 : 8,
                  height: 2,
                  backgroundColor:
                    i === currentIndex
                      ? "#FFFFFF"
                      : "rgba(255,255,255,0.20)",
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(totalArticles).padStart(2, "0")}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function InsightsV23() {
  const { t } = useLang();
  const ins = t.insights;
  const { ref, inView } = useScrollReveal(0.1);

  return (
    <section
      id="insights"
      data-testid="insights-section"
      className="relative overflow-hidden"
      style={{ background: "#FCFCFC" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(40px) saturate(0.3)",
          opacity: 0.06,
        }}
      />

      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-8 relative z-10"
        style={{ paddingTop: 120, paddingBottom: 120 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 64 }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#4A58AA",
              display: "block",
              marginBottom: 16,
            }}
          >
            {ins.eyebrow}
          </span>
          <h2
            className="font-heading font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              lineHeight: 1.1,
              color: "#001489",
            }}
          >
            {ins.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ins.articles.map((article, i) => {
            const slug = articles[i]?.slug ?? "";
            return (
              <motion.a
                key={i}
                href={`/insights/${slug}`}
                data-testid={`insight-card-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="group block relative overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,20,137,0.06)",
                  textDecoration: "none",
                  minHeight: 340,
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ height: 180 }}
                >
                  <img
                    src={HERO_BG_IMAGES[i % HERO_BG_IMAGES.length]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "#001489",
                      opacity: 0.75,
                      mixBlendMode: "multiply",
                    }}
                  />
                  <div className="absolute inset-0 flex items-end p-5">
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "20px 20px 24px" }}>
                  <h3
                    className="font-heading font-bold group-hover:text-[#192B94] transition-colors duration-200"
                    style={{
                      fontSize: 16,
                      lineHeight: 1.35,
                      color: "#001489",
                      marginBottom: 8,
                    }}
                  >
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        fontSize: 11,
                        color: "#848484",
                      }}
                    >
                      {article.readTime}
                    </span>
                    <span
                      style={{
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        background: "#E8EDF5",
                        display: "inline-block",
                      }}
                    />
                    <span style={{ fontSize: 11, color: "#848484" }}>
                      {article.date}
                    </span>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "#001489" }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyMiltonHobbsV23() {
  const { t } = useLang();
  const d = t.diff;
  const { ref, inView } = useScrollReveal(0.15);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % d.cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [inView, d.cards.length]);

  return (
    <section
      id="firm"
      data-testid="differentiators-section"
      className="relative overflow-hidden"
      style={{ background: "#001489" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(50px) saturate(0.2)",
          opacity: 0.12,
          mixBlendMode: "multiply",
        }}
      />

      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-8 relative z-10"
        style={{ paddingTop: 120, paddingBottom: 120 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{ minHeight: 480 }}
            >
              <img
                src={heroBg4}
                alt="About Milton Hobbs"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  mixBlendMode: "luminosity",
                  opacity: 0.55,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,20,137,0.60) 0%, rgba(0,10,60,0.85) 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,10,60,0.90) 0%, transparent 50%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-8 lg:p-10"
              >
                <span
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: "clamp(5rem, 12vw, 9rem)",
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.03)",
                    lineHeight: 0.8,
                    display: "block",
                    letterSpacing: "-0.06em",
                  }}
                >
                  MH
                </span>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.50)",
                    maxWidth: "40ch",
                    marginTop: 12,
                  }}
                >
                  Dubai &middot; Paris &middot; Est. 2024
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#7A84BE",
                display: "block",
                marginBottom: 20,
              }}
            >
              {d.eyebrow}
            </span>
            <h2
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                lineHeight: 1.15,
                color: "#FFFFFF",
                marginBottom: 28,
              }}
            >
              {d.headline}
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 15,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.50)",
                marginBottom: 40,
                maxWidth: "50ch",
              }}
            >
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col gap-3">
              {d.cards.map((card, i) => {
                const isActive = activeCard === i;
                return (
                  <motion.div
                    key={i}
                    data-testid={`diff-card-${i}`}
                    onClick={() => setActiveCard(i)}
                    className="cursor-pointer relative"
                    style={{
                      padding: "20px 24px",
                      background: isActive
                        ? "rgba(255,255,255,0.06)"
                        : "transparent",
                      borderLeft: isActive
                        ? "2px solid rgba(255,255,255,0.40)"
                        : "2px solid rgba(255,255,255,0.06)",
                      transition: "all 0.35s ease",
                    }}
                  >
                    <h3
                      className="font-heading font-bold"
                      style={{
                        fontSize: 16,
                        color: isActive
                          ? "#FFFFFF"
                          : "rgba(255,255,255,0.35)",
                        marginBottom: isActive ? 8 : 0,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {card.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: 13,
                            lineHeight: 1.65,
                            color: "rgba(255,255,255,0.45)",
                          }}
                        >
                          {card.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 right-0"
                        style={{
                          height: 1,
                          background: "rgba(255,255,255,0.04)",
                        }}
                      >
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 5, ease: "linear" }}
                          style={{
                            height: "100%",
                            background: "rgba(255,255,255,0.15)",
                            transformOrigin: "left",
                          }}
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-3 mt-10 group"
              style={{ textDecoration: "none" }}
              data-testid="diff-cta"
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.50)",
                  transition: "color 0.2s",
                }}
                className="group-hover:!text-white"
              >
                {d.learnMore}
              </span>
              <svg
                width="20"
                height="12"
                fill="none"
                viewBox="0 0 20 12"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M1 6h18M14 1l5 5-5 5"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const SERVICES_IMAGES = [imgCorp, imgEstate, imgLitig, imgBank, imgTax, imgEmploy, imgBank, imgTech, imgIp, imgTech];

function ServicesV23() {
  const { t } = useLang();
  const p = t.practices;
  const { ref, inView } = useScrollReveal(0.08);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="expertise"
      data-testid="practice-areas-section"
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          filter: "blur(50px) saturate(0.15)",
          opacity: 0.05,
        }}
      />

      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-8 relative z-10"
        style={{ paddingTop: 120, paddingBottom: 120 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
          style={{ marginBottom: 72 }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#4A58AA",
              display: "block",
              marginBottom: 16,
            }}
          >
            {p.eyebrow}
          </span>
          <h2
            className="font-heading font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              lineHeight: 1.1,
              color: "#001489",
              marginBottom: 14,
            }}
          >
            {p.headline}
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.7,
              color: "#595959",
              maxWidth: "55ch",
              margin: "0 auto",
            }}
          >
            {p.subtext}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {p.items.slice(0, 8).map((item, i) => (
            <motion.div
              key={i}
              data-testid={`service-card-${i}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 * i }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ minHeight: 320 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={SERVICES_IMAGES[i % SERVICES_IMAGES.length]}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110"
                  style={{ transition: "transform 1.2s ease-out" }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: "#001489",
                    opacity: hoveredIdx === i ? 0.70 : 0.82,
                    mixBlendMode: "multiply",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,10,60,0.95) 0%, rgba(0,10,60,0.30) 50%, transparent 100%)",
                  }}
                />
              </div>

              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <span
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.04)",
                    lineHeight: 0.85,
                    display: "block",
                    letterSpacing: "-0.04em",
                    position: "absolute",
                    top: 20,
                    right: 20,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3
                    className="font-heading font-bold text-white"
                    style={{
                      fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                      lineHeight: 1.3,
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h3>

                  <motion.p
                    initial={false}
                    animate={{
                      opacity: hoveredIdx === i ? 1 : 0,
                      y: hoveredIdx === i ? 0 : 10,
                      height: hoveredIdx === i ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 12,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.55)",
                      overflow: "hidden",
                    }}
                  >
                    {item.description}
                  </motion.p>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "rgba(255,255,255,0.40)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactV23() {
  const { t } = useLang();
  const c = t.contact;
  const f = t.footer;
  const { ref, inView } = useScrollReveal(0.1);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">(
    "idle",
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormState("sent");
      setTimeout(() => setFormState("idle"), 4000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setFormState("sent");
      setTimeout(() => setFormState("idle"), 4000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative overflow-hidden"
      style={{ background: "#F9F9F9" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg0})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(60px) saturate(0.15)",
          opacity: 0.04,
        }}
      />

      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-8 relative z-10"
        style={{ paddingTop: 120, paddingBottom: 120 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60 }}
        >
          <h2
            className="font-heading font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              lineHeight: 1.1,
              color: "#001489",
              marginBottom: 14,
            }}
          >
            {c.headline}
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.7,
              color: "#595959",
              maxWidth: "60ch",
            }}
          >
            {c.subtext}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {formState === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div
                  className="flex items-center justify-center mb-6"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(0,20,137,0.06)",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#001489"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="font-heading font-bold"
                  style={{ fontSize: 20, color: "#001489", marginBottom: 8 }}
                >
                  {c.successTitle}
                </h3>
                <p style={{ fontSize: 14, color: "#595959" }}>
                  {c.successText}
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                data-testid="contact-form"
              >
                <input
                  data-testid="input-name"
                  type="text"
                  required
                  placeholder={c.namePlaceholder}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, name: e.target.value }))
                  }
                  className="border text-[#151515] placeholder-[#848484] text-sm px-5 py-4 outline-none transition-colors"
                  style={{
                    borderColor: "rgba(0,20,137,0.10)",
                    background: "#FFFFFF",
                  }}
                />
                <input
                  data-testid="input-email"
                  type="email"
                  required
                  placeholder={c.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, email: e.target.value }))
                  }
                  className="border text-[#151515] placeholder-[#848484] text-sm px-5 py-4 outline-none transition-colors"
                  style={{
                    borderColor: "rgba(0,20,137,0.10)",
                    background: "#FFFFFF",
                  }}
                />
                <div className="sm:col-span-2">
                  <select
                    data-testid="select-subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, subject: e.target.value }))
                    }
                    className="w-full border text-sm px-5 py-4 outline-none transition-colors appearance-none cursor-pointer"
                    style={{
                      borderColor: "rgba(0,20,137,0.10)",
                      background: "#FFFFFF",
                      color: formData.subject ? "#151515" : "#848484",
                    }}
                  >
                    <option value="" disabled>
                      {c.subjectPlaceholder}
                    </option>
                    {c.subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <textarea
                    data-testid="textarea-message"
                    required
                    rows={5}
                    placeholder={c.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, message: e.target.value }))
                    }
                    className="w-full border text-[#151515] placeholder-[#848484] text-sm px-5 py-4 outline-none transition-colors resize-none"
                    style={{
                      borderColor: "rgba(0,20,137,0.10)",
                      background: "#FFFFFF",
                    }}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    data-testid="button-submit"
                    type="submit"
                    disabled={formState === "sending"}
                    className="bg-[#001489] text-white uppercase font-semibold px-10 py-4 hover:bg-[#000E45] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {formState === "sending" ? c.submitting : c.submit}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-0"
          >
            <div
              style={{
                background: "#001489",
                padding: "36px 32px",
              }}
            >
              <h3
                className="font-heading font-bold text-white"
                style={{ fontSize: 16, marginBottom: 24 }}
              >
                {c.officeLabel}
              </h3>

              <div style={{ marginBottom: 28 }}>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {c.dubaiLabel}
                </p>
                {f.dubaiAddr.map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.40)",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: 24,
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {c.parisLabel}
                </p>
                {f.parisAddr.map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.40)",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: 24,
                  marginTop: 24,
                }}
              >
                <a
                  href={`mailto:${f.email}`}
                  data-testid="contact-email"
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: 6,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.55)")
                  }
                >
                  {f.email}
                </a>
                <a
                  href={`tel:${f.phone}`}
                  data-testid="contact-phone"
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.40)",
                    textDecoration: "none",
                    display: "block",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.40)")
                  }
                >
                  {f.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FooterV23() {
  const { t } = useLang();
  const f = t.footer;
  const navEntries = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.firm, href: "#firm" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.insights, href: "#insights" },
    { label: t.nav.careers, href: "/careers" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const fmtTime = (tz: string) =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now);

  const dubaiTime = fmtTime("Asia/Dubai");
  const parisTime = fmtTime("Europe/Paris");

  return (
    <footer id="footer" data-testid="footer" style={{ background: "#001489" }}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12"
          style={{
            paddingTop: 44,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <img
            src={miltonHobbsWordmark}
            alt="Milton Hobbs"
            style={{
              width: "clamp(110px, 12vw, 155px)",
              height: "auto",
              filter: "brightness(0) invert(1)",
              opacity: 0.88,
              display: "block",
              flexShrink: 0,
            }}
          />

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {navEntries.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.40)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.40)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:flex-shrink-0">
            <a
              href={`mailto:${f.email}`}
              data-testid="footer-email"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 12,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.55)")
              }
            >
              {f.email}
            </a>
            <span
              style={{
                width: 1,
                height: 12,
                background: "rgba(255,255,255,0.10)",
                flexShrink: 0,
              }}
            />
            <a
              href={`tel:${f.phone}`}
              data-testid="footer-phone-dubai"
              style={{
                color: "rgba(255,255,255,0.40)",
                fontSize: 12,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.40)")
              }
            >
              {f.phone}
            </a>
            <a
              href="tel:+33180270067"
              data-testid="footer-phone-paris"
              style={{
                color: "rgba(255,255,255,0.40)",
                fontSize: 12,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.40)")
              }
            >
              +33 1 80 27 00 67
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8">
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ padding: "16px 0 18px" }}
        >
          <div className="flex items-center gap-5">
            {[
              { label: "Dubai", time: dubaiTime, dot: "#7A84BE" },
              { label: "Paris", time: parisTime, dot: "#4A58AA" },
            ].map((o, i) => (
              <div key={o.label} className="flex items-center gap-2">
                {i > 0 && (
                  <span
                    style={{
                      width: 1,
                      height: 10,
                      background: "rgba(255,255,255,0.08)",
                      marginRight: 6,
                    }}
                  />
                )}
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: o.dot,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: "rgba(255,255,255,0.30)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  {o.label}
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.40)",
                    fontSize: 11,
                    fontFamily: "'Plus Jakarta Sans', monospace",
                    letterSpacing: "0.04em",
                    minWidth: "6ch",
                  }}
                >
                  {o.time}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 10 }}>
              {f.copyright}
            </span>
            <a
              href="#"
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: 10,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.5)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.25)")
              }
            >
              {f.privacy}
            </a>
            <a
              href="#"
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: 10,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.5)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.25)")
              }
            >
              {f.cookie}
            </a>
          </div>
        </div>

        <p
          data-testid="footer-disclaimer"
          style={{
            color: "rgba(255,255,255,0.15)",
            fontSize: 9,
            lineHeight: 1.6,
            paddingBottom: 18,
            maxWidth: "85ch",
          }}
        >
          {f.disclaimer}
        </p>
      </div>
    </footer>
  );
}

function HomeV2Point3Content() {
  return (
    <>
      <HeaderV23 />
      <HeroV23 />
      <InsightsV23 />
      <WhyMiltonHobbsV23 />
      <ServicesV23 />
      <ContactV23 />
      <FooterV23 />
    </>
  );
}

export default function HomeV2Point3() {
  return (
    <LanguageProvider>
      <HomeV2Point3Content />
    </LanguageProvider>
  );
}
