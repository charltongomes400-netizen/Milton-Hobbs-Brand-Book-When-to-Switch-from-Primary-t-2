import { useEffect, useRef, useState } from "react";
import { useParams } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { insightsCopy, ct, getInsightArticleBySlug, getRelatedInsightArticles, type InsightArticle } from "@/data/insightsCopy";
import imgCompliance from "@assets/generated_images/insight-compliance.png";
import imgFamilyBusiness from "@assets/generated_images/insight-family-business.png";
import imgDigitalPrivacy from "@assets/generated_images/insight-digital-privacy.png";
import imgMA from "@assets/generated_images/insight-ma-structuring.png";

const slugImageMap: Record<string, string> = {
  "navigating-cross-border-compliance-gulf": imgCompliance,
  "family-business-succession-uae": imgFamilyBusiness,
  "digital-transformation-data-privacy-gcc": imgDigitalPrivacy,
  "strategic-ma-structuring-2026": imgMA,
};

const PRACTICE_AREAS = [
  "Corporate & Commercial",
  "Real Estate & Property",
  "Litigation & Dispute Resolution",
  "Arbitration & Mediation",
  "Employment & Labour",
  "Banking & Finance",
  "Tax",
  "Immigration",
  "Intellectual Property",
  "Technology & Startups",
  "Other",
];

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ArticlePage() {
  return (
    <LanguageProvider>
      <ArticlePageInner />
    </LanguageProvider>
  );
}

function ArticlePageInner() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const article = getInsightArticleBySlug(slug ?? "");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#001489] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-sm mb-4">Article not found</p>
          <a href="/insights" className="text-white text-sm hover:underline">← Publications & Insights</a>
        </div>
      </div>
    );
  }

  const isFr = lang === "FR";
  const meta = isFr ? article.meta.fr : article.meta.en;
  const heroImg = slugImageMap[article.slug];
  const backHref = isFr ? "/fr/publications" : "/insights";
  const backLabel = isFr ? "Publications & Analyses" : "Publications & Insights";

  useEffect(() => {
    document.title = meta.title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setOg = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("description", meta.description);
    setOg("og:title", meta.ogTitle);
    setOg("og:description", meta.ogDescription);

    const hreflangs = [
      { hreflang: "en", href: `https://miltonhobbs.com/insights/${article.slug}` },
      { hreflang: "fr", href: `https://miltonhobbs.com/fr/publications/${article.slugFr}` },
      { hreflang: "x-default", href: `https://miltonhobbs.com/insights/${article.slug}` },
    ];
    const linkEls: HTMLLinkElement[] = [];
    hreflangs.forEach(({ hreflang, href }) => {
      const el = document.createElement("link");
      el.rel = "alternate";
      el.setAttribute("hreflang", hreflang);
      el.setAttribute("href", href);
      document.head.appendChild(el);
      linkEls.push(el);
    });

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": isFr ? article.title.fr : article.title.en,
      "description": meta.description,
      "datePublished": "2026-05-01",
      "author": { "@type": "Organization", "name": "Milton Hobbs" },
      "publisher": {
        "@type": "Organization",
        "name": "Milton Hobbs",
        "logo": { "@type": "ImageObject", "url": "https://miltonhobbs.com/logo.png" },
      },
      "inLanguage": isFr ? "fr" : "en",
      "about": article.practiceArea,
    };
    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(scriptEl);

    return () => {
      linkEls.forEach(el => el.parentNode?.removeChild(el));
      scriptEl.parentNode?.removeChild(scriptEl);
    };
  }, [lang, article.slug]);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* ── HERO ── */}
      <section className="bg-[#001489] pt-36 pb-24 px-8 relative overflow-hidden">
        {heroImg && (
          <motion.img
            src={heroImg}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ opacity: 0.12, mixBlendMode: "luminosity" }}
          />
        )}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#001489] via-[#001489] to-[#001489]" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.a
            href={backHref}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-white text-xs tracking-[0.2em] uppercase font-medium hover:gap-3 transition-all mb-12"
            data-testid="back-to-insights"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
              <path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <span>{backLabel}</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-[860px]"
          >
            <div className="flex items-center gap-4 mb-7">
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase px-3 py-1 text-[#001489] bg-white">
                {ct(article.category, lang)}
              </span>
              <span className="text-white text-xs">{ct(article.date, lang)}</span>
              <span className="text-white text-xs">·</span>
              <span className="text-white text-xs">{article.readMin} min</span>
            </div>

            <h1 className="font-heading text-white font-bold text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.08] tracking-tight mb-9">
              {ct(article.title, lang)}
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[2px] bg-white mb-9"
            />

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-[#001489] text-xs font-bold">MH</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">{article.author.name}</p>
                <p className="text-white text-xs">{ct(article.author.title, lang)}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BODY ── */}
      <ArticleBody article={article} lang={lang} onContact={() => setModalOpen(true)} />

      {/* ── EXPERT COUNSEL CTA ── */}
      <section className="bg-[#001489] py-20 px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-white text-[10px] tracking-[0.3em] uppercase font-medium mb-3">
              {ct(article.expertCounselCta.eyebrow, lang)}
            </p>
            <h3 className="font-heading text-white text-[clamp(1.4rem,2.5vw,2rem)] font-bold tracking-tight max-w-lg leading-snug">
              {ct(article.expertCounselCta.heading, lang)}
            </h3>
            <p className="text-white text-sm mt-3 max-w-md leading-relaxed">
              {ct(article.expertCounselCta.body, lang)}
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            data-testid="article-cta"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-white text-[#001489] text-xs tracking-[0.18em] uppercase font-bold px-8 py-4 hover:bg-white transition-colors"
          >
            <span>{ct(article.expertCounselCta.cta, lang)}</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── RELATED PUBLICATIONS ── */}
      <RelatedPublications currentSlug={article.slug} lang={lang} />

      <Footer />
      <ArticleContactModal open={modalOpen} onClose={() => setModalOpen(false)} articleTitle={ct(article.title, lang)} />
    </div>
  );
}

function ArticleBody({ article, lang, onContact }: { article: InsightArticle; lang: "EN" | "FR"; onContact: () => void }) {
  const sections = article.sections;
  const [activeIdx, setActiveIdx] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sections.findIndex(s => slugify(s.h2.en) === entry.target.id);
            if (idx !== -1) setActiveIdx(idx);
          }
        }
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    sections.forEach(s => {
      const el = document.getElementById(slugify(s.h2.en));
      if (el) observer.observe(el);
    });
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [article.slug]);

  return (
    <section className="bg-white px-8 py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex gap-16 xl:gap-24">

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block w-[240px] xl:w-[280px] flex-shrink-0">
            <div className="sticky top-28 flex flex-col gap-8">
              <div>
                <p className="text-[#001489] text-[9px] tracking-[0.3em] uppercase font-bold mb-5">
                  {ct(article.sidebar.eyebrow, lang)}
                </p>
                <nav className="flex flex-col">
                  {sections.map((s, i) => (
                    <a
                      key={i}
                      href={`#${slugify(s.h2.en)}`}
                      className="group flex items-start gap-3 py-2.5 border-b border-[#001489]/[0.06] last:border-b-0 transition-colors text-[#001489]"
                    >
                      <span className={`mt-1 w-0.5 h-3.5 flex-shrink-0 transition-colors ${activeIdx === i ? "bg-[#001489]" : "bg-transparent"}`} />
                      <span className="text-sm leading-snug font-medium">{ct(s.h2, lang)}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border-t border-[#001489] pt-8">
                <p className="text-[#001489] text-sm font-semibold mb-2 leading-snug">
                  {ct(article.sidebar.heading, lang)}
                </p>
                <p className="text-[#001489] text-sm leading-relaxed mb-5">
                  {ct(article.sidebar.body, lang)}
                </p>
                <button
                  onClick={onContact}
                  data-testid="sidebar-cta"
                  className="inline-flex items-center gap-2 bg-[#001489] text-white text-[10px] tracking-[0.18em] uppercase font-semibold px-5 py-3 hover:bg-[#0028B8] transition-colors"
                >
                  <span>{ct(article.sidebar.cta, lang)}</span>
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
              </div>
            </div>
          </aside>

          {/* ── Main ── */}
          <article className="flex-1 max-w-[720px]" data-testid="article-body">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Lead */}
              <p className="text-[#001489] text-[1.15rem] leading-relaxed font-medium mb-10 border-l-4 border-[#001489] pl-6">
                {ct(article.lead, lang)}
              </p>

              {/* Sections */}
              {sections.map((section, i) => (
                <div key={i}>
                  <h2
                    id={slugify(section.h2.en)}
                    className="font-heading text-[#001489] text-[1.35rem] font-bold tracking-tight mt-12 mb-5 scroll-mt-32"
                  >
                    {ct(section.h2, lang)}
                  </h2>

                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-[#3D4D6A] text-base leading-[1.85] mb-6">
                      {ct(p, lang)}
                    </p>
                  ))}

                  {section.pullQuote && (
                    <blockquote className="my-10 pl-8 border-l-[3px] border-[#001489]">
                      <p className="text-[#001489] text-xl font-heading font-medium leading-snug italic tracking-tight">
                        "{ct(section.pullQuote, lang)}"
                      </p>
                    </blockquote>
                  )}
                </div>
              ))}

              {/* Callout box */}
              <div className="my-12 p-8" style={{ background: "#F0F4FB" }}>
                <p className="text-[#001489] text-[9px] tracking-[0.3em] uppercase font-bold mb-5">
                  {ct(article.callout.eyebrow, lang)}
                </p>
                <ul className="flex flex-col gap-3.5">
                  {article.callout.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-[6px] w-1.5 h-1.5 flex-shrink-0 bg-[#001489]" />
                      <span className="text-[#001489] text-sm leading-relaxed">{ct(bullet, lang)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </article>

        </div>
      </div>
    </section>
  );
}

function RelatedPublications({ currentSlug, lang }: { currentSlug: string; lang: "EN" | "FR" }) {
  const related = getRelatedInsightArticles(currentSlug);
  const isFr = lang === "FR";
  const heading = isFr ? "Publications associées" : "Related Publications";
  const eyebrow = isFr ? "CONTINUER LA LECTURE" : "CONTINUE READING";

  return (
    <section className="bg-white py-20 px-8 border-t border-[#001489]/[0.06]">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[#8099FF] text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">{eyebrow}</p>
        <h3 className="font-heading text-[#001489] text-[1.5rem] font-bold tracking-tight mb-10">{heading}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((a, i) => {
            const href = isFr ? `/fr/publications/${a.slugFr}` : `/insights/${a.slug}`;
            const img = slugImageMap[a.slug];
            return (
              <motion.a
                key={a.slug}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`related-article-${i}`}
                className="group flex flex-col border border-[#E5EAF4] hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-36 flex-shrink-0 overflow-hidden bg-[#EEF2FB]">
                  {img ? (
                    <img src={img} alt={ct(a.title, lang)} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#8099FF]" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="1.4">
                        <line x1="24" y1="6" x2="24" y2="42" strokeLinecap="round" />
                        <line x1="14" y1="42" x2="34" y2="42" strokeLinecap="round" />
                        <line x1="8" y1="14" x2="40" y2="14" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#001489]">{ct(a.category, lang)}</span>
                    <span className="text-[#9CA3AF] text-[11px]">{a.readMin} min</span>
                  </div>
                  <h4 className="font-heading text-[#001489] text-sm font-bold leading-snug group-hover:text-[#0028B8] transition-colors">
                    {ct(a.title, lang)}
                  </h4>
                  <div className="mt-auto pt-3 border-t border-[#F0F4FB] flex items-center justify-between">
                    <span className="text-[#9CA3AF] text-[11px]">{ct(a.date, lang)}</span>
                    <div className="flex items-center gap-1.5 text-[#001489] group-hover:text-[#0028B8] transition-colors">
                      <span className="text-[11px] font-medium">{isFr ? "Lire" : "Read"}</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                        <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArticleContactModal({ open, onClose, articleTitle }: { open: boolean; onClose: () => void; articleTitle: string }) {
  const [form, setForm] = useState({ name: "", email: "", area: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-[#000A4F]/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              className="relative w-full max-w-[560px] bg-white pointer-events-auto overflow-hidden"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              data-testid="contact-modal"
            >
              <div className="bg-[#001489] px-8 py-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-white text-[9px] tracking-[0.3em] uppercase font-bold mb-1.5">Milton Hobbs</p>
                    <h3 className="font-heading text-white text-lg font-bold tracking-tight">Speak to a Partner</h3>
                    <p className="text-white text-xs mt-1 leading-snug max-w-xs">Re: {articleTitle}</p>
                  </div>
                  <button onClick={handleClose} data-testid="modal-close" className="text-white hover:text-white transition-colors mt-0.5 flex-shrink-0" aria-label="Close">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                      <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-8 py-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="flex flex-col items-start gap-4 py-6" data-testid="modal-success">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#001489] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 16 16">
                            <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <h4 className="font-heading text-[#001489] font-bold text-base">Message received</h4>
                      </div>
                      <p className="text-[#001489] text-sm leading-relaxed">Thank you for reaching out. One of our partners will be in touch within one business day.</p>
                      <button onClick={handleClose} className="mt-2 text-[#001489] text-xs tracking-[0.15em] uppercase font-semibold hover:text-[#0028B8] transition-colors">Close</button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onSubmit={handleSubmit} data-testid="modal-form" className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Full Name" data-testid="modal-input-name" className="col-span-2 sm:col-span-1 bg-white border border-[#E5E9F0] text-[#001489] placeholder-[#8099FF] text-sm px-4 py-3 outline-none focus:border-[#001489] transition-colors" />
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Email Address" data-testid="modal-input-email" className="col-span-2 sm:col-span-1 bg-white border border-[#E5E9F0] text-[#001489] placeholder-[#8099FF] text-sm px-4 py-3 outline-none focus:border-[#001489] transition-colors" />
                      </div>
                      <div className="relative">
                        <select name="area" required value={form.area} onChange={handleChange} data-testid="modal-select-area" className="w-full bg-white border border-[#E5E9F0] text-sm px-4 py-3 outline-none focus:border-[#001489] transition-colors appearance-none cursor-pointer" style={{ color: form.area ? "#001489" : "#8099FF" }}>
                          <option value="" disabled hidden>Practice Area</option>
                          {PRACTICE_AREAS.map(a => (<option key={a} value={a} style={{ color: "#001489", background: "#fff" }}>{a}</option>))}
                        </select>
                        <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#001489]" fill="none" viewBox="0 0 12 12">
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Briefly describe your matter" data-testid="modal-input-message" className="bg-white border border-[#E5E9F0] text-[#001489] placeholder-[#8099FF] text-sm px-4 py-3 outline-none focus:border-[#001489] transition-colors resize-none" />
                      <button type="submit" data-testid="modal-submit" className="w-full bg-[#001489] text-white text-xs tracking-[0.18em] uppercase font-bold py-4 hover:bg-[#0028B8] transition-colors flex items-center justify-center gap-2.5">
                        <span>Send Message</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                          <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      </button>
                      <p className="text-[#8099FF] text-[10px] text-center leading-relaxed">All enquiries are treated in strict confidence.</p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
