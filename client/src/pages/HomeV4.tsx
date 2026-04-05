import { useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { articles } from "@/data/articles";
import imgCompliance from "@assets/generated_images/insight-compliance.png";
import imgFamilyBusiness from "@assets/generated_images/insight-family-business.png";
import imgDigitalPrivacy from "@assets/generated_images/insight-digital-privacy.png";
import imgMA from "@assets/generated_images/insight-ma-structuring.png";

const articleImages = [imgCompliance, imgFamilyBusiness, imgDigitalPrivacy, imgMA];

function V4Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section
      id="home"
      data-testid="v4-hero-section"
      className="relative min-h-screen flex items-stretch overflow-hidden"
    >
      <div className="flex w-full flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-[#001489] flex flex-col justify-center px-12 lg:px-20 pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 60px)`,
          }} />
          <div className="absolute top-0 right-0 w-px h-full bg-[#D4AF36]/20" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF36]/15" />
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#D4AF36] text-xs tracking-[0.35em] uppercase font-semibold mb-10 relative z-10"
            data-testid="v4-hero-eyebrow"
          >
            {h.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="font-heading text-white font-bold text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-tight mb-10 relative z-10"
            data-testid="v4-hero-headline"
          >
            {t.hero.headline.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "72px" }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="h-[2px] bg-[#D4AF36] mb-10 relative z-10"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="text-white/60 text-sm leading-relaxed max-w-[440px] mb-12 relative z-10"
            data-testid="v4-hero-subheadline"
          >
            {h.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="flex gap-4 flex-wrap relative z-10"
          >
            <a href="#contact" data-testid="v4-cta-book"
              className="inline-flex items-center gap-3 bg-[#D4AF36] text-[#001489] text-xs tracking-[0.2em] uppercase font-bold px-9 py-4 hover:bg-[#C4A030] transition-colors duration-300">
              {h.cta1}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-10 left-12 lg:left-20 flex items-center gap-3 z-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
            />
            <span className="text-white/20 text-[9px] tracking-[0.3em] uppercase">{h.scroll}</span>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-12 lg:px-16 pt-20 lg:pt-40 pb-20 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF36] lg:hidden" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <p className="text-[#001489]/35 text-[10px] tracking-[0.3em] uppercase font-semibold mb-8">{t.diff.eyebrow}</p>
            <div className="flex flex-col gap-0">
              {t.diff.cards.map((card, i) => (
                <div key={i} className="group border-b border-[#001489]/8 py-7 flex gap-6 items-start last:border-b-0 hover:bg-[#001489]/[0.02] transition-colors px-2 -mx-2 cursor-default">
                  <span className="text-[#D4AF36] text-[10px] tracking-[0.2em] font-semibold mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-heading text-[#001489] text-sm font-bold tracking-tight mb-2">{card.title}</h3>
                    <p className="text-[#001489]/45 text-xs leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex items-center gap-6 border-t border-[#001489]/8 pt-8"
          >
            <div>
              <p className="text-[#D4AF36] text-[9px] tracking-[0.22em] uppercase font-semibold mb-1">{t.footer.dubaiLabel}</p>
              {t.footer.dubaiAddr.slice(0, 2).map((line, i) => (
                <p key={i} className="text-[#001489]/40 text-[10px] leading-snug">{line}</p>
              ))}
            </div>
            <div className="w-px h-10 bg-[#001489]/10 shrink-0" />
            <div>
              <p className="text-[#D4AF36] text-[9px] tracking-[0.22em] uppercase font-semibold mb-1">{t.footer.parisLabel}</p>
              {t.footer.parisAddr.slice(0, 2).map((line, i) => (
                <p key={i} className="text-[#001489]/40 text-[10px] leading-snug">{line}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function V4PracticeAreas() {
  const { t } = useLang();
  const p = t.practices;
  return (
    <section id="expertise" data-testid="v4-practice-areas-section" className="bg-[#EEF2FF] py-28 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-[#D4AF36] text-xs tracking-[0.35em] uppercase font-semibold mb-5">{p.eyebrow}</p>
            <h2 className="font-heading text-[#001489] text-[clamp(1.8rem,3vw,2.8rem)] font-bold tracking-tight">{p.headline}</h2>
          </div>
          <p className="text-[#001489]/40 text-sm max-w-xs leading-relaxed">{p.subtext}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {p.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3) }}
              data-testid={`v4-practice-card-${i}`}
              className="bg-white border border-[#001489]/10 p-7 group cursor-pointer hover:border-[#D4AF36]/60 hover:shadow-md transition-all duration-300"
            >
              <span className="text-[#D4AF36] text-[10px] tracking-[0.22em] uppercase font-medium mb-4 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-heading text-[#001489] text-sm font-bold leading-snug tracking-tight mb-3">{item.title}</h3>
              <p className="text-[#001489]/40 text-xs leading-relaxed">{item.description}</p>
              <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#D4AF36] text-[9px] tracking-[0.2em] uppercase font-medium">{p.learnMore}</span>
                <svg className="w-2.5 h-2.5 text-[#D4AF36]" fill="none" viewBox="0 0 12 12">
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function V4Insights() {
  const { t } = useLang();
  const ins = t.insights;
  return (
    <section id="insights" data-header-theme="light" data-testid="v4-insights-section" className="bg-white py-28 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-[#D4AF36] text-xs tracking-[0.35em] uppercase font-semibold mb-5">{ins.eyebrow}</p>
            <h2 className="font-heading text-[#001489] text-[clamp(1.6rem,2.8vw,2.5rem)] font-bold tracking-tight">{ins.headline}</h2>
          </div>
          <a href="#insights" data-testid="v4-view-all" className="text-[#001489]/45 hover:text-[#D4AF36] text-xs tracking-[0.18em] uppercase font-medium transition-colors whitespace-nowrap">{ins.viewAll}</a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ins.articles.map((article, i) => (
            <motion.a
              key={i}
              href={`/insights/${articles[i]?.slug ?? ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              data-testid={`v4-insight-card-${i}`}
              className="group flex gap-0 border border-[#001489]/10 overflow-hidden hover:border-[#D4AF36]/50 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="w-36 flex-shrink-0 overflow-hidden bg-[#EEF2FF]">
                {articleImages[i] && (
                  <img src={articleImages[i]} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                )}
              </div>
              <div className="flex flex-col flex-1 p-7 gap-3">
                <div className="flex items-center gap-3">
                  <p className="text-[#D4AF36] text-[9px] tracking-[0.25em] uppercase font-bold">{article.category}</p>
                  <span className="text-[#001489]/30 text-[10px]">{article.readTime}</span>
                </div>
                <h3 className="font-heading text-[#001489] text-sm font-bold leading-snug tracking-tight group-hover:text-[#0028B8] transition-colors">{article.title}</h3>
                <p className="text-[#001489]/45 text-xs leading-relaxed flex-1">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-[#001489] group-hover:text-[#D4AF36] transition-colors">
                  <span className="text-[10px] tracking-[0.18em] uppercase font-medium">{ins.read}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function V4Contact() {
  const { t } = useLang();
  const c = t.contact;
  const f = t.footer;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" data-header-theme="light" data-testid="v4-contact-section" className="bg-[#EEF2FF] py-28 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-[#D4AF36] text-xs tracking-[0.35em] uppercase font-semibold mb-5">{c.eyebrow}</p>
          <h2 className="font-heading text-[#001489] text-[clamp(1.8rem,3vw,2.8rem)] font-bold tracking-tight">{c.headline}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20">
          <div className="flex flex-col gap-10">
            <p className="text-[#001489]/55 text-sm leading-relaxed">{c.subtext}</p>
            <div>
              <p className="text-[#D4AF36] text-[10px] tracking-[0.25em] uppercase font-medium mb-5">{c.officeLabel}</p>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-[#001489] text-sm font-semibold mb-1">{c.dubaiLabel}</p>
                  {f.dubaiAddr.map((line, i) => <p key={i} className="text-[#001489]/45 text-xs leading-relaxed">{line}</p>)}
                </div>
                <div>
                  <p className="text-[#001489] text-sm font-semibold mb-1">{c.parisLabel}</p>
                  {f.parisAddr.map((line, i) => <p key={i} className="text-[#001489]/45 text-xs leading-relaxed">{line}</p>)}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${f.email}`} className="text-[#001489]/55 hover:text-[#D4AF36] text-sm transition-colors">{f.email}</a>
              <a href={`tel:${f.phone}`} className="text-[#001489]/55 hover:text-[#D4AF36] text-sm transition-colors">{f.phone}</a>
            </div>
          </div>
          <div>
            {submitted ? (
              <div data-testid="v4-contact-success" className="bg-white border border-[#D4AF36]/40 p-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#D4AF36]" fill="none" viewBox="0 0 20 20">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="font-heading text-[#001489] text-lg font-semibold">{c.successTitle}</h3>
                </div>
                <p className="text-[#001489]/55 text-sm leading-relaxed">{c.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="v4-contact-form" className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder={c.namePlaceholder} data-testid="v4-input-name"
                    className="bg-white border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors" />
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder={c.emailPlaceholder} data-testid="v4-input-email"
                    className="bg-white border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors" />
                </div>
                <div className="relative">
                  <select name="subject" required value={form.subject} onChange={handleChange} data-testid="v4-select-subject"
                    className="w-full bg-white border border-[#001489]/15 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors appearance-none cursor-pointer"
                    style={{ color: form.subject ? "#001489" : "rgba(0,20,137,0.3)" }}>
                    <option value="" disabled hidden>{c.subjectPlaceholder}</option>
                    {c.subjectOptions.map((opt, i) => <option key={i} value={opt} style={{ color: "#001489", background: "#fff" }}>{opt}</option>)}
                  </select>
                  <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#001489]/30" fill="none" viewBox="0 0 12 12">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder={c.messagePlaceholder} data-testid="v4-input-message"
                  className="bg-white border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors resize-none" />
                <button type="submit" disabled={submitting} data-testid="v4-button-submit"
                  className="self-start bg-[#D4AF36] text-[#001489] text-xs tracking-[0.2em] uppercase font-bold px-8 py-4 hover:bg-[#C4A030] transition-colors duration-300 disabled:opacity-60">
                  {submitting ? c.submitting : c.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function V4Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer data-testid="v4-footer" className="bg-[#001489] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="py-20 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#D4AF36]/20">
          <div className="md:col-span-5">
            <p className="font-heading text-white font-semibold text-lg tracking-[0.18em] uppercase mb-4">Milton Hobbs</p>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">{f.tagline}</p>
            <a href={`mailto:${f.email}`} className="block text-[#D4AF36] text-sm hover:text-[#E8C97E] transition-colors">{f.email}</a>
            <p className="text-white/35 text-sm mt-1">{f.phone}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase font-medium mb-4">{f.dubaiLabel}</p>
            <address className="not-italic text-white/50 text-sm leading-[1.9]">
              {f.dubaiAddr.map((line, i) => <span key={i} className="block">{line}</span>)}
            </address>
          </div>
          <div className="md:col-span-4">
            <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase font-medium mb-4">{f.parisLabel}</p>
            <address className="not-italic text-white/50 text-sm leading-[1.9]">
              {f.parisAddr.map((line, i) => <span key={i} className="block">{line}</span>)}
            </address>
          </div>
        </div>
        <div className="py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/25 text-xs">{f.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/25 hover:text-white/55 text-[10px] tracking-[0.18em] uppercase transition-colors">{f.privacy}</a>
            <a href="#" className="text-white/25 hover:text-white/55 text-[10px] tracking-[0.18em] uppercase transition-colors">{f.cookie}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function V4Differentiators() {
  const { t } = useLang();
  const d = t.diff;
  const [active, setActive] = useState(0);
  return (
    <section id="firm" data-testid="v4-differentiators-section" className="bg-white py-28 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#D4AF36] text-xs tracking-[0.35em] uppercase font-semibold mb-5">{d.eyebrow}</p>
            <h2 className="font-heading text-[#001489] text-[clamp(1.8rem,3vw,2.8rem)] font-bold tracking-tight">{d.headline}</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#001489] hover:text-[#D4AF36] text-xs tracking-[0.18em] uppercase font-semibold transition-colors">
            <span>{d.learnMore}</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-[#001489]/8">
          {d.cards.map((card, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              data-testid={`v4-diff-card-${i}`}
              onClick={() => setActive(i)}
              className={`text-left p-10 border transition-all duration-300 ${
                active === i
                  ? "bg-[#001489] border-[#001489]"
                  : "bg-white border-transparent hover:border-[#001489]/15"
              }`}
            >
              <p className={`text-[10px] tracking-[0.25em] uppercase font-medium mb-4 ${active === i ? "text-[#D4AF36]" : "text-[#D4AF36]"}`}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className={`font-heading text-xl font-bold tracking-tight mb-4 leading-snug ${active === i ? "text-white" : "text-[#001489]"}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed ${active === i ? "text-white/65" : "text-[#001489]/45"}`}>
                {card.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeV4Inner() {
  return (
    <div className="bg-white min-h-screen" data-testid="home-v4-page">
      <Header />
      <main>
        <V4Hero />
        <V4Differentiators />
        <V4PracticeAreas />
        <V4Insights />
        <V4Contact />
      </main>
      <V4Footer />
    </div>
  );
}

export default function HomeV4() {
  return (
    <LanguageProvider>
      <HomeV4Inner />
    </LanguageProvider>
  );
}
