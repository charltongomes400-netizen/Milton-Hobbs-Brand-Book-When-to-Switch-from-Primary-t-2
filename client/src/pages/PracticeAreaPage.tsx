import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactModal } from "@/components/ContactModal";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { practiceAreas, c } from "@/data/practiceAreasCopy";

import imgCorporate from "@assets/expertisecorporate-commercial_2_1779148847133.png";
import imgTax from "@assets/optimized/sasha-yudaev-FOYsU4uQqqM-unsplash_1776241615811.jpg";
import imgMA from "@assets/4_1779150173136.png";
import imgStartups from "@assets/optimized/donny-jiang-42gFAgdIUC8-unsplash_1776241615811.jpg";
import imgIP from "@assets/optimized/phil-desforges-ow1mML1sOi0-unsplash_1776241615811.jpg";
import imgRealEstate from "@assets/optimized/simone-hutsch-iDSfeuoxM0o-unsplash_1776241615811.jpg";
import imgEmploy from "@assets/optimized/daniele-colucci-Xt48I3ps6Pg-unsplash_1776241615811.jpg";
import imgLitigation from "@assets/optimized/alexander-abero-OypnYfdiQgg-unsplash_1776241615811.jpg";

const HERO_IMAGES: Record<string, string> = {
  "corporate-commercial": imgCorporate,
  "tax-compliance": imgTax,
  "mergers-acquisitions": imgMA,
  "startups-venture-capital": imgStartups,
  "ip-technology": imgIP,
  "real-estate-property": imgRealEstate,
  "employment-labor": imgEmploy,
  "litigation-disputes": imgLitigation,
};

function splitH1(h1: string): [string, string] {
  const dotIdx = h1.indexOf(". ");
  if (dotIdx === -1) return [h1, ""];
  return [h1.slice(0, dotIdx + 1), h1.slice(dotIdx + 2)];
}

function injectHeadMeta(pa: (typeof practiceAreas)[0], lang: "EN" | "FR") {
  const m = lang === "FR" ? pa.meta.fr : pa.meta.en;
  document.title = m.title;

  const setMeta = (name: string, content: string) => {
    let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
    if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
    el.setAttribute("content", content);
  };
  const setProp = (property: string, content: string) => {
    let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
    if (!el) { el = document.createElement("meta"); el.setAttribute("property", property); document.head.appendChild(el); }
    el.setAttribute("content", content);
  };

  setMeta("description", m.description);
  setMeta("keywords", m.keywords);
  setProp("og:title", m.title);
  setProp("og:description", m.description);

  const enUrl = `https://www.miltonhobbs.com/expertise/${pa.slug}`;
  const frUrl = `https://www.miltonhobbs.com/fr/expertise/${pa.slugFr}`;

  const hreflangs: Array<{ hreflang: string; href: string }> = [
    { hreflang: "en", href: enUrl },
    { hreflang: "fr", href: frUrl },
    { hreflang: "x-default", href: enUrl },
  ];
  document.querySelectorAll("link[rel='alternate'][hreflang]").forEach(el => el.remove());
  hreflangs.forEach(({ hreflang, href }) => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.setAttribute("hreflang", hreflang);
    link.href = href;
    document.head.appendChild(link);
  });

  const existingLd = document.querySelector("script[data-pa-schema]");
  if (existingLd) existingLd.remove();
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.setAttribute("data-pa-schema", "true");
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: c(pa.title, lang),
    description: m.description,
    provider: {
      "@type": "LegalService",
      name: "Milton Hobbs",
      url: "https://www.miltonhobbs.com",
      address: [
        { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
        { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
      ],
    },
    areaServed: ["AE", "FR", "GB", "EU"],
    url: lang === "FR" ? frUrl : enUrl,
  });
  document.head.appendChild(ld);
}

function PracticeAreaPageInner() {
  const params = useParams<{ slug?: string; slugFr?: string }>();
  const [location] = useLocation();
  const isFr = location.startsWith("/fr/");

  const { lang, setLang } = useLang();

  useEffect(() => {
    if (isFr && lang !== "FR") setLang("FR");
    else if (!isFr && lang !== "EN") setLang("EN");
  }, [isFr]);

  const effectiveLang = isFr ? "FR" : lang;
  const rawSlug = params.slug ?? params.slugFr;

  const pa = practiceAreas.find(p =>
    isFr ? p.slugFr === rawSlug : p.slug === rawSlug
  );

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  useEffect(() => {
    if (pa) injectHeadMeta(pa, effectiveLang);
  }, [pa, effectiveLang]);

  if (!pa) {
    return (
      <div className="min-h-screen bg-[#001489] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-[16px] tracking-[0.3em] uppercase font-bold mb-4">Milton Hobbs</p>
          <h1 className="font-heading text-white text-3xl font-bold">Practice area not found.</h1>
          <a href="/" className="mt-8 inline-block text-white/70 text-sm underline">Return home</a>
        </div>
      </div>
    );
  }

  const heroImg = HERO_IMAGES[pa.slug];
  const [h1Line1, h1Line2] = splitH1(c(pa.hero.h1, effectiveLang));
  const enPath = `/expertise/${pa.slug}`;
  const frPath = `/fr/expertise/${pa.slugFr}`;
  const backHref = isFr ? "/fr/cabinet#expertise" : "/#expertise";

  return (
    <div className="bg-[#001489] min-h-screen">
      <Header />
      <section
        id="home"
        data-testid="pa-hero"
        data-header-theme="dark"
        className="relative min-h-screen bg-[#001489] flex items-center overflow-hidden pt-20"
      >
        {heroImg && (
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ objectPosition: pa.slug === "mergers-acquisitions" ? "center calc(70% + 30px)" : "center 42%", mixBlendMode: "multiply" }}
          />
        )}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: "70%", background: "linear-gradient(to top, rgba(0,14,80,0.80) 0%, rgba(0,14,80,0.40) 45%, transparent 100%)" }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-20 w-full">
          <div className="grid items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 mb-8"
              >
                <a
                  href={backHref}
                  className="flex items-center gap-2 text-white text-[16px] tracking-[0.3em] uppercase font-semibold hover:opacity-80 transition-opacity"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  {effectiveLang === "FR" ? "Notre Expertise" : "Our Expertise"}
                </a>
                <span className="text-white/20">-</span>
                <span className="text-white text-[16px] tracking-[0.3em] uppercase font-medium">
                  {c(pa.title, effectiveLang)}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-heading text-white font-bold text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.06] tracking-tight mb-8"
              >
                {h1Line1}
                {h1Line2 && (
                  <>
                    <br />
                    <span className="text-white whitespace-nowrap">{h1Line2}</span>
                  </>
                )}
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "64px" }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="h-[2px] bg-white mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-white text-base leading-relaxed max-w-[500px] mb-10"
              >
                {c(pa.hero.body, effectiveLang)}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap gap-4 mb-14"
              >
                <button
                  onClick={() => setModalOpen(true)}
                  data-testid="pa-cta-primary"
                  className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer"
                >
                  <span>{c(pa.hero.primaryCta, effectiveLang)}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
                <a
                  href="#services"
                  data-testid="pa-cta-secondary"
                  className="inline-flex items-center gap-3 border border-white/25 text-white text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:border-white/50 transition-colors"
                >
                  {c(pa.hero.secondaryCta, effectiveLang)}
                </a>
              </motion.div>

              <div className="hidden" aria-hidden="true">
                <a href={enPath} hrefLang="en">EN</a>
                <a href={frPath} hrefLang="fr">FR</a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-8 flex items-center gap-3 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-white to-transparent"
          />
          <span className="text-white text-[16px] tracking-[0.25em] uppercase">
            {effectiveLang === "FR" ? "Défiler" : "Scroll"}
          </span>
        </motion.div>
      </section>
      <section
        id="overview"
        data-testid="pa-overview"
        data-header-theme="light"
        className="bg-white px-8 py-24"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-[#001489] tracking-[0.35em] uppercase font-bold mb-5 text-[18px]">
                {c(pa.overview.eyebrow, effectiveLang)}
              </p>
              <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-tight leading-tight mb-8">
                {c(pa.overview.h2, effectiveLang)}
              </h2>
              <div className="h-[2px] w-16 bg-[#001489]/30 mb-8" />
              {pa.overview.paragraphs.map((p, i) => (
                <p key={i} className="text-[#001489] text-base leading-[1.85] max-w-[58ch] mb-6">
                  {c(p, effectiveLang)}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="relative hidden lg:flex flex-col gap-0"
              style={{ minHeight: 360 }}
            >
              <div
                className="w-full flex flex-col items-start justify-end p-10"
                style={{ background: "#001489", minHeight: 180 }}
              >
                <p className="font-heading text-white font-bold text-[clamp(1.3rem,2vw,1.75rem)] leading-tight">
                  {c(pa.practiceCard.heading, effectiveLang)}
                </p>
                <div className="h-px w-10 bg-[#8099FF]/60 mt-4" />
              </div>

              <div className="border border-[#001489]/12 p-8">
                <p className="text-[#001489] text-[11px] tracking-[0.35em] uppercase font-bold mb-5">
                  {c(pa.practiceCard.whoLabel, effectiveLang)}
                </p>
                <ul className="flex flex-col gap-3">
                  {pa.practiceCard.whoItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 flex-shrink-0 mt-[0.45em] bg-[#001489]" />
                      <span className="text-[#001489] text-sm leading-relaxed">{c(item, effectiveLang)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        id="services"
        data-testid="pa-services"
        className="bg-white"
      >
        <div className="bg-[#001489] px-8 py-16">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="tracking-[0.35em] uppercase font-bold mb-4 text-[16px] text-white">
                {c(pa.services.eyebrow, effectiveLang)}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h2 className="font-heading text-white font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">
                  {c(pa.services.h2, effectiveLang)}
                </h2>
                <p className="text-sm max-w-xs leading-relaxed text-white/80">
                  {c(pa.services.intro, effectiveLang)}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-8 py-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E9F5]">
              {pa.services.items.map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                  data-testid={`pa-service-card-${i}`}
                  className="group bg-white p-8 flex flex-col hover:bg-[#001489] transition-colors duration-300"
                >
                  <span className="text-[#8099FF] text-[11px] tracking-[0.3em] uppercase font-bold mb-3 group-hover:text-white/50 transition-colors">
                    {svc.num}
                  </span>
                  <h3 className="font-heading text-[#001489] font-bold text-[1.05rem] leading-snug mb-4 group-hover:text-white transition-colors">
                    {c(svc.title, effectiveLang)}
                  </h3>
                  <div className="h-px w-8 bg-[#001489]/20 mb-4 group-hover:bg-white/30 transition-colors" />
                  <p className="text-sm leading-relaxed flex-1 text-[#001489] group-hover:text-white transition-colors">
                    {c(svc.body, effectiveLang)}
                  </p>
                  <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="text-white text-[16px] tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0"
                    >
                      {effectiveLang === "FR" ? "Nous Contacter" : "Enquire"}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                        <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#001489] px-8 py-5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <p className="text-white text-[16px] tracking-[0.35em] uppercase font-bold">Milton Hobbs</p>
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase hidden sm:block">
            {effectiveLang === "FR" ? "Raison. Rigueur. Résolution." : "Reason. Rigor. Resolution."}
          </p>
        </div>
      </section>
      <section
        data-testid="pa-differentiators"
        data-header-theme="light"
        className="bg-white px-8 py-24"
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[#001489] text-[16px] tracking-[0.35em] uppercase font-bold mb-4">
              {c(pa.whatSetsApart.eyebrow, effectiveLang)}
            </p>
            <h2 className="font-heading text-[#001489] font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight leading-tight">
              {c(pa.whatSetsApart.h2, effectiveLang)}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E9F5]">
            {pa.whatSetsApart.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                data-testid={`pa-differentiator-${i}`}
                className="bg-white p-8 flex flex-col"
              >
                <span className="text-[#8099FF] text-[11px] tracking-[0.3em] uppercase font-bold mb-3">{card.num}</span>
                <h3 className="font-heading text-[#001489] font-bold text-base leading-snug mb-4">
                  {c(card.title, effectiveLang)}
                </h3>
                <div className="h-px w-8 bg-[#8099FF]/45 mb-4" />
                <p className="text-[#001489] text-sm leading-relaxed">{c(card.body, effectiveLang)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section
        data-testid="pa-cta-banner"
        className="bg-[#001489] px-8 py-20"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-white text-[16px] tracking-[0.35em] uppercase font-bold mb-4">
                {c(pa.closingCta.eyebrow, effectiveLang)}
              </p>
              <h2 className="font-heading text-white font-bold text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight leading-tight mb-3">
                {c(pa.closingCta.heading, effectiveLang)}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
            >
              <button
                onClick={() => setModalOpen(true)}
                data-testid="pa-banner-cta"
                className="inline-flex items-center gap-3 bg-white text-[#001489] text-xs font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-white/90 transition-colors cursor-pointer"
              >
                <span>{c(pa.closingCta.cta, effectiveLang)}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </button>
              <a
                href="mailto:contact@miltonhobbs.com"
                data-testid="pa-banner-email"
                className="inline-flex items-center gap-3 border border-white/20 text-white/70 text-xs font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:border-white/40 hover:text-white transition-colors"
              >
                contact@miltonhobbs.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        practiceArea={c(pa.title, effectiveLang)}
      />
    </div>
  );
}

export default function PracticeAreaPage() {
  return (
    <LanguageProvider>
      <PracticeAreaPageInner />
    </LanguageProvider>
  );
}
