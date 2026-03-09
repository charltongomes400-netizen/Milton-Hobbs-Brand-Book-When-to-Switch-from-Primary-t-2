import { useEffect, useRef, useState } from "react";
import { useParams } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { getArticleBySlug, getRelatedArticles, type ArticleData, type ArticleSection } from "@/data/articles";

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

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug ?? "");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  if (!article) {
    return (
      <LanguageProvider>
        <div className="min-h-screen bg-[#001489] flex items-center justify-center">
          <div className="text-center">
            <p className="text-white/50 text-sm mb-4">Article not found</p>
            <a href="/" className="text-[#D4AF36] text-sm hover:underline">← Back to home</a>
          </div>
        </div>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="bg-white min-h-screen">
        <Header />
        <ArticleHero article={article} />
        <ArticleContent article={article} onContact={() => setModalOpen(true)} />
        <ArticleCTA onContact={() => setModalOpen(true)} />
        <RelatedArticles slug={article.slug} />
        <Footer />
        <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} articleTitle={article.title} />
      </div>
    </LanguageProvider>
  );
}

function ContactModal({ open, onClose, articleTitle }: { open: boolean; onClose: () => void; articleTitle: string }) {
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
            className="fixed inset-0 z-50 bg-[#000A4F]/80 backdrop-blur-sm"
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
                    <p className="text-[#D4AF36] text-[9px] tracking-[0.3em] uppercase font-bold mb-1.5">
                      Milton Hobbs
                    </p>
                    <h3 className="font-heading text-white text-lg font-bold tracking-tight">
                      Speak to a Partner
                    </h3>
                    <p className="text-white/40 text-xs mt-1 leading-snug max-w-xs">
                      Re: {articleTitle}
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    data-testid="modal-close"
                    className="text-white/40 hover:text-white transition-colors mt-0.5 flex-shrink-0"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                      <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="px-8 py-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-start gap-4 py-6"
                      data-testid="modal-success"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#D4AF36]/15 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#D4AF36]" fill="none" viewBox="0 0 16 16">
                            <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <h4 className="font-heading text-[#001489] font-bold text-base">Message received</h4>
                      </div>
                      <p className="text-[#001489]/60 text-sm leading-relaxed">
                        Thank you for reaching out. One of our partners will be in touch within one business day.
                      </p>
                      <button
                        onClick={handleClose}
                        className="mt-2 text-[#001489] text-xs tracking-[0.15em] uppercase font-semibold hover:text-[#D4AF36] transition-colors"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      data-testid="modal-form"
                      className="flex flex-col gap-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          data-testid="modal-input-name"
                          className="col-span-2 sm:col-span-1 bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3 outline-none focus:border-[#D4AF36]/60 transition-colors"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          data-testid="modal-input-email"
                          className="col-span-2 sm:col-span-1 bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3 outline-none focus:border-[#D4AF36]/60 transition-colors"
                        />
                      </div>

                      <div className="relative">
                        <select
                          name="area"
                          required
                          value={form.area}
                          onChange={handleChange}
                          data-testid="modal-select-area"
                          className="w-full bg-[#001489]/[0.03] border border-[#001489]/15 text-sm px-4 py-3 outline-none focus:border-[#D4AF36]/60 transition-colors appearance-none cursor-pointer"
                          style={{ color: form.area ? "#001489" : "rgba(0,20,137,0.3)" }}
                        >
                          <option value="" disabled hidden>Practice Area</option>
                          {PRACTICE_AREAS.map(a => (
                            <option key={a} value={a} style={{ color: "#001489", background: "#fff" }}>{a}</option>
                          ))}
                        </select>
                        <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#001489]/30" fill="none" viewBox="0 0 12 12">
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>

                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your matter"
                        data-testid="modal-input-message"
                        className="bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3 outline-none focus:border-[#D4AF36]/60 transition-colors resize-none"
                      />

                      <button
                        type="submit"
                        data-testid="modal-submit"
                        className="w-full bg-[#D4AF36] text-[#001489] text-xs tracking-[0.18em] uppercase font-bold py-4 hover:bg-[#C4A030] transition-colors flex items-center justify-center gap-2.5"
                      >
                        <span>Send Message</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                          <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      </button>

                      <p className="text-[#001489]/30 text-[10px] text-center leading-relaxed">
                        All enquiries are treated in strict confidence.
                      </p>
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

function ArticleHero({ article }: { article: ArticleData }) {
  return (
    <section className="bg-[#001489] pt-36 pb-24 px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.a
          href="/#insights"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[#D4AF36] text-xs tracking-[0.2em] uppercase font-medium hover:gap-3 transition-all mb-12"
          data-testid="back-to-insights"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
            <path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          <span>Publications & Insights</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-[860px]"
        >
          <div className="flex items-center gap-4 mb-7">
            <span
              className="text-[10px] font-bold tracking-[0.22em] uppercase px-3 py-1"
              style={{ color: article.categoryColor, backgroundColor: `${article.categoryColor}18` }}
            >
              {article.category}
            </span>
            <span className="text-white/35 text-xs">{article.date}</span>
            <span className="text-white/20 text-xs">·</span>
            <span className="text-white/35 text-xs">{article.readTime}</span>
          </div>

          <h1 className="font-heading text-white font-bold text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.08] tracking-tight mb-9">
            {article.title}
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "72px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[2px] bg-[#D4AF36] mb-9"
          />

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D4AF36]/20 flex items-center justify-center">
              <span className="text-[#D4AF36] text-xs font-bold">MH</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">{article.author}</p>
              <p className="text-white/40 text-xs">{article.authorTitle}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ArticleContent({ article, onContact }: { article: ArticleData; onContact: () => void }) {
  const headings = article.body.filter(s => s.type === "heading") as { type: "heading"; id: string; text: string }[];
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    headings.forEach(h => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [article.slug]);

  return (
    <section className="bg-white px-8 py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex gap-16 xl:gap-24">

          <aside className="hidden lg:block w-[240px] xl:w-[280px] flex-shrink-0">
            <div className="sticky top-28 flex flex-col gap-8">
              <div>
                <p className="text-[#D4AF36] text-[9px] tracking-[0.3em] uppercase font-bold mb-5">
                  In this article
                </p>
                <nav className="flex flex-col">
                  {headings.map(h => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className={`group flex items-start gap-3 py-2.5 border-b border-[#001489]/[0.06] last:border-b-0 transition-colors ${
                        activeId === h.id ? "text-[#001489]" : "text-[#001489]/35 hover:text-[#001489]/65"
                      }`}
                    >
                      <span className={`mt-1 w-0.5 h-3.5 flex-shrink-0 transition-colors ${activeId === h.id ? "bg-[#D4AF36]" : "bg-transparent"}`} />
                      <span className="text-xs leading-snug font-medium">{h.text}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border-t border-[#001489]/10 pt-8">
                <p className="text-[#001489] text-xs font-semibold mb-2 leading-snug">
                  Discuss this matter with our team
                </p>
                <p className="text-[#001489]/50 text-xs leading-relaxed mb-5">
                  Our partners are available for a confidential discussion.
                </p>
                <button
                  onClick={onContact}
                  data-testid="sidebar-cta"
                  className="inline-flex items-center gap-2 bg-[#001489] text-white text-[10px] tracking-[0.18em] uppercase font-semibold px-5 py-3 hover:bg-[#0028B8] transition-colors"
                >
                  <span>Get in touch</span>
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
              </div>
            </div>
          </aside>

          <article className="flex-1 max-w-[720px]" data-testid="article-body">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-0"
            >
              {article.body.map((section, i) => (
                <SectionBlock key={i} section={section} />
              ))}
            </motion.div>
          </article>

        </div>
      </div>
    </section>
  );
}

function SectionBlock({ section }: { section: ArticleSection }) {
  if (section.type === "lead") {
    return (
      <p className="text-[#001489] text-[1.15rem] leading-relaxed font-medium mb-10 border-l-4 border-[#D4AF36] pl-6">
        {section.text}
      </p>
    );
  }
  if (section.type === "heading") {
    return (
      <h2 id={section.id} className="font-heading text-[#001489] text-[1.35rem] font-bold tracking-tight mt-12 mb-5 scroll-mt-32">
        {section.text}
      </h2>
    );
  }
  if (section.type === "paragraph") {
    return <p className="text-[#3D4D6A] text-base leading-[1.85] mb-6">{section.text}</p>;
  }
  if (section.type === "quote") {
    return (
      <blockquote className="my-10 pl-8 border-l-[3px] border-[#D4AF36]">
        <p className="text-[#001489] text-xl font-heading font-medium leading-snug italic tracking-tight">"{section.text}"</p>
      </blockquote>
    );
  }
  if (section.type === "keypoints") {
    return (
      <div className="my-10 bg-[#F5F7FF] p-8">
        <p className="text-[#D4AF36] text-[9px] tracking-[0.3em] uppercase font-bold mb-5">{section.title}</p>
        <ul className="flex flex-col gap-3.5">
          {section.points.map((point, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-[6px] w-1.5 h-1.5 flex-shrink-0 bg-[#D4AF36]" />
              <span className="text-[#001489] text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

function ArticleCTA({ onContact }: { onContact: () => void }) {
  return (
    <section className="bg-[#001489] py-20 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-[#D4AF36] text-[10px] tracking-[0.3em] uppercase font-medium mb-3">Expert Counsel</p>
          <h3 className="font-heading text-white text-[clamp(1.4rem,2.5vw,2rem)] font-bold tracking-tight max-w-lg leading-snug">
            Need expert counsel on this matter?
          </h3>
          <p className="text-white/50 text-sm mt-3 max-w-md leading-relaxed">
            Our partners are available for a confidential discussion across our Dubai and Paris offices.
          </p>
        </div>
        <button
          onClick={onContact}
          data-testid="article-cta"
          className="flex-shrink-0 inline-flex items-center gap-3 bg-[#D4AF36] text-[#001489] text-xs tracking-[0.18em] uppercase font-bold px-8 py-4 hover:bg-[#C4A030] transition-colors"
        >
          <span>Speak to a Partner</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </button>
      </div>
    </section>
  );
}

function RelatedArticles({ slug }: { slug: string }) {
  const related = getRelatedArticles(slug, 3);
  return (
    <section className="bg-white py-20 px-8 border-t border-[#001489]/[0.06]">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[#8099FF] text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">Continue Reading</p>
        <h3 className="font-heading text-[#001489] text-[1.5rem] font-bold tracking-tight mb-10">Related Publications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((a, i) => (
            <motion.a
              key={a.slug}
              href={`/insights/${a.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-testid={`related-article-${i}`}
              className="group flex flex-col border border-[#E5EAF4] hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-[#EEF2FB] h-36 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-[#8099FF]/50" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="1.4">
                  <line x1="24" y1="6" x2="24" y2="42" strokeLinecap="round" />
                  <line x1="14" y1="42" x2="34" y2="42" strokeLinecap="round" />
                  <line x1="8" y1="14" x2="40" y2="14" strokeLinecap="round" />
                  <path d="M4 24 Q8 30 12 24" strokeLinecap="round" />
                  <path d="M36 24 Q40 30 44 24" strokeLinecap="round" />
                </svg>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-bold tracking-[0.18em] uppercase" style={{ color: a.categoryColor }}>{a.category}</span>
                  <span className="text-[#9CA3AF] text-[11px]">{a.readTime}</span>
                </div>
                <h4 className="font-heading text-[#001489] text-sm font-bold leading-snug group-hover:text-[#0028B8] transition-colors">{a.title}</h4>
                <div className="mt-auto pt-3 border-t border-[#F0F4FB] flex items-center justify-between">
                  <span className="text-[#9CA3AF] text-[11px]">{a.date}</span>
                  <div className="flex items-center gap-1.5 text-[#001489] group-hover:text-[#D4AF36] transition-colors">
                    <span className="text-[11px] font-medium">Read</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
