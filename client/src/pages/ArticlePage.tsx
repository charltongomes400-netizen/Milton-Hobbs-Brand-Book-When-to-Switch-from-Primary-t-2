import { useEffect, useMemo, useState } from "react";
import { useParams } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { LanguageProvider, useLang, type Lang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import {
  type Post,
  localizePost,
  categoryLabel,
  readingMinutes,
  formatPostDate,
} from "@/lib/posts";
import { sanitizeHtml } from "@/lib/sanitizeHtml";

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

const EXPERT_CTA = {
  eyebrow: { en: "EXPERT COUNSEL", fr: "CONSEIL D'EXPERT" },
  heading: { en: "Need expert counsel on this matter?", fr: "Besoin d'un conseil d'expert sur ce sujet ?" },
  body: {
    en: "Our partners are available for a confidential discussion across our Dubai and Paris offices.",
    fr: "Nos associés sont à votre disposition pour un échange confidentiel entre nos bureaux de Dubaï et de Paris.",
  },
  cta: { en: "Speak to a Partner", fr: "Échanger avec un Associé" },
};

const SIDEBAR_CTA = {
  eyebrow: { en: "IN THIS ARTICLE", fr: "DANS CET ARTICLE" },
  heading: { en: "Discuss this matter with our team", fr: "Échangez avec notre équipe sur ce sujet" },
  body: { en: "Our partners are available for a confidential discussion.", fr: "Nos associés sont disponibles pour un échange confidentiel." },
  cta: { en: "Get in Touch", fr: "Nous Contacter" },
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function articleHref(slug: string, isFr: boolean): string {
  return isFr ? `/fr/publications/${slug}` : `/insights/${slug}`;
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
  const isFr = lang === "FR";
  const apiLang = isFr ? "fr" : "en";
  const [modalOpen, setModalOpen] = useState(false);

  const { data: post, isLoading, isError } = useQuery<Post>({
    queryKey: ["/api/posts", slug],
    enabled: !!slug,
  });

  const article = post ? localizePost(post, apiLang) : null;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  useEffect(() => {
    if (!post || !article) return;

    document.title = `${article.title} | Milton Hobbs`;

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

    setMeta("description", article.seoDescription);
    setOg("og:title", article.title);
    setOg("og:description", article.seoDescription);

    const hreflangs = [
      { hreflang: "en", href: `https://miltonhobbs.com/insights/${article.slug}` },
      { hreflang: "fr", href: `https://miltonhobbs.com/fr/publications/${article.slug}` },
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
      "headline": article.title,
      "description": article.seoDescription,
      "datePublished": article.createdAt,
      "author": { "@type": "Organization", "name": "Milton Hobbs" },
      "publisher": {
        "@type": "Organization",
        "name": "Milton Hobbs",
        "logo": { "@type": "ImageObject", "url": "https://miltonhobbs.com/logo.png" },
      },
      "inLanguage": isFr ? "fr" : "en",
      "about": article.category ?? undefined,
    };
    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(scriptEl);

    return () => {
      linkEls.forEach(el => el.parentNode?.removeChild(el));
      scriptEl.parentNode?.removeChild(scriptEl);
    };
  }, [lang, post]);

  const backHref = isFr ? "/fr/publications" : "/insights";
  const backLabel = isFr ? "Publications & Analyses" : "Publications & Insights";

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <section className="bg-[#001489] pt-36 pb-24 px-8" data-testid="article-loading">
          <div className="max-w-[1400px] mx-auto">
            <div className="h-3 w-40 bg-white/20 animate-pulse mb-12" />
            <div className="h-4 w-28 bg-white/20 animate-pulse mb-7" />
            <div className="h-10 w-3/4 bg-white/20 animate-pulse mb-4" />
            <div className="h-10 w-1/2 bg-white/20 animate-pulse" />
          </div>
        </section>
        <section className="px-8 py-20">
          <div className="max-w-[760px] mx-auto flex flex-col gap-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-full bg-[#F0F4FB] animate-pulse" />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (isError || !post || !article) {
    return (
      <div className="min-h-screen bg-[#001489] flex items-center justify-center" data-testid="article-not-found">
        <div className="text-center">
          <p className="text-white text-sm mb-4">{isFr ? "Article introuvable" : "Article not found"}</p>
          <a href={backHref} className="text-white text-sm hover:underline">← {backLabel}</a>
        </div>
      </div>
    );
  }

  const heroImg = article.coverImage;

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
              {article.category && (
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase px-3 py-1 text-[#001489] bg-white">
                  {categoryLabel(article.category, apiLang)}
                </span>
              )}
              <span className="text-white text-xs">{formatPostDate(article.createdAt, apiLang)}</span>
              <span className="text-white text-xs">·</span>
              <span className="text-white text-xs">{readingMinutes(article.body)} min</span>
            </div>

            <h1 className="font-heading text-white font-bold text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.08] tracking-tight mb-9">
              {article.title}
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
                <p className="text-white text-sm font-medium">Milton Hobbs</p>
                <p className="text-white text-xs">{isFr ? "Dubaï · Paris" : "Dubai · Paris"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BODY ── */}
      <ArticleBody bodyHtml={article.body} lang={lang} onContact={() => setModalOpen(true)} />

      {/* ── EXPERT COUNSEL CTA ── */}
      <section className="bg-[#001489] py-20 px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-white text-[10px] tracking-[0.3em] uppercase font-medium mb-3">
              {EXPERT_CTA.eyebrow[apiLang]}
            </p>
            <h3 className="font-heading text-white text-[clamp(1.4rem,2.5vw,2rem)] font-bold tracking-tight max-w-lg leading-snug">
              {EXPERT_CTA.heading[apiLang]}
            </h3>
            <p className="text-white text-sm mt-3 max-w-md leading-relaxed">
              {EXPERT_CTA.body[apiLang]}
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            data-testid="article-cta"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-white text-[#001489] text-xs tracking-[0.18em] uppercase font-bold px-8 py-4 hover:bg-white transition-colors"
          >
            <span>{EXPERT_CTA.cta[apiLang]}</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── RELATED PUBLICATIONS ── */}
      <RelatedPublications currentSlug={article.slug} lang={lang} />

      <Footer />
      <ArticleContactModal open={modalOpen} onClose={() => setModalOpen(false)} articleTitle={article.title} />
    </div>
  );
}

function ArticleBody({ bodyHtml, lang, onContact }: { bodyHtml: string; lang: Lang; onContact: () => void }) {
  const apiLang = lang === "FR" ? "fr" : "en";

  const { html, headings } = useMemo(() => {
    const clean = sanitizeHtml(bodyHtml);
    if (typeof window === "undefined" || !clean) return { html: clean, headings: [] as { id: string; text: string }[] };
    const doc = new DOMParser().parseFromString(clean, "text/html");
    const hs: { id: string; text: string }[] = [];
    const seen = new Set<string>();
    doc.querySelectorAll("h2").forEach((el) => {
      const text = el.textContent?.trim() ?? "";
      if (!text) return;
      let id = slugify(text) || "section";
      let n = 2;
      while (seen.has(id)) { id = `${slugify(text)}-${n++}`; }
      seen.add(id);
      el.setAttribute("id", id);
      hs.push({ id, text });
    });
    return { html: doc.body.innerHTML, headings: hs };
  }, [bodyHtml]);

  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  return (
    <section className="bg-white px-8 py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex gap-16 xl:gap-24">

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block w-[240px] xl:w-[280px] flex-shrink-0">
            <div className="sticky top-28 flex flex-col gap-8">
              {headings.length > 0 && (
                <div>
                  <p className="text-[#001489] text-[9px] tracking-[0.3em] uppercase font-bold mb-5">
                    {SIDEBAR_CTA.eyebrow[apiLang]}
                  </p>
                  <nav className="flex flex-col">
                    {headings.map((h) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        data-testid={`toc-link-${h.id}`}
                        className="group flex items-start gap-3 py-2.5 border-b border-[#001489]/[0.06] last:border-b-0 transition-colors text-[#001489]"
                      >
                        <span className={`mt-1 w-0.5 h-3.5 flex-shrink-0 transition-colors ${activeId === h.id ? "bg-[#001489]" : "bg-transparent"}`} />
                        <span className="text-sm leading-snug font-medium">{h.text}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              <div className="border-t border-[#001489] pt-8">
                <p className="text-[#001489] text-sm font-semibold mb-2 leading-snug">
                  {SIDEBAR_CTA.heading[apiLang]}
                </p>
                <p className="text-[#001489] text-sm leading-relaxed mb-5">
                  {SIDEBAR_CTA.body[apiLang]}
                </p>
                <button
                  onClick={onContact}
                  data-testid="sidebar-cta"
                  className="inline-flex items-center gap-2 bg-[#001489] text-white text-[10px] tracking-[0.18em] uppercase font-semibold px-5 py-3 hover:bg-[#0028B8] transition-colors"
                >
                  <span>{SIDEBAR_CTA.cta[apiLang]}</span>
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
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>

        </div>
      </div>
    </section>
  );
}

function RelatedPublications({ currentSlug, lang }: { currentSlug: string; lang: Lang }) {
  const isFr = lang === "FR";
  const apiLang = isFr ? "fr" : "en";
  const { data: posts } = useQuery<Post[]>({ queryKey: ["/api/posts"] });

  const related = (posts ?? [])
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3)
    .map((p) => localizePost(p, apiLang));

  if (related.length === 0) return null;

  const heading = isFr ? "Publications associées" : "Related Publications";
  const eyebrow = isFr ? "CONTINUER LA LECTURE" : "CONTINUE READING";

  return (
    <section className="bg-white py-20 px-8 border-t border-[#001489]/[0.06]">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[#8099FF] text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">{eyebrow}</p>
        <h3 className="font-heading text-[#001489] text-[1.5rem] font-bold tracking-tight mb-10">{heading}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((a, i) => {
            const img = a.coverImage;
            return (
              <motion.a
                key={a.slug}
                href={articleHref(a.slug, isFr)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`related-article-${i}`}
                className="group flex flex-col border border-[#E5EAF4] hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-36 flex-shrink-0 overflow-hidden bg-[#EEF2FB]">
                  {img ? (
                    <img src={img} alt={a.title} className="w-full h-full object-cover" />
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
                    <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#001489]">{categoryLabel(a.category, apiLang)}</span>
                    <span className="text-[#9CA3AF] text-[11px]">{readingMinutes(a.body)} min</span>
                  </div>
                  <h4 className="font-heading text-[#001489] text-sm font-bold leading-snug group-hover:text-[#0028B8] transition-colors">
                    {a.title}
                  </h4>
                  <div className="mt-auto pt-3 border-t border-[#F0F4FB] flex items-center justify-between">
                    <span className="text-[#9CA3AF] text-[11px]">{formatPostDate(a.createdAt, apiLang)}</span>
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
