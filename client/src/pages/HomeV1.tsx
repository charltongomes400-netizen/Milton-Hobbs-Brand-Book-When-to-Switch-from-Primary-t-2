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

function V1Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section
      id="home"
      data-testid="v1-hero-section"
      className="relative min-h-screen bg-white flex items-center overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#001489]" />
      <div className="max-w-[1400px] mx-auto px-16 pt-40 pb-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-[760px]"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#D4AF36] text-xs tracking-[0.35em] uppercase font-semibold mb-10"
            data-testid="v1-hero-eyebrow"
          >
            {h.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-heading text-[#001489] font-bold text-[clamp(3.5rem,7vw,6.5rem)] leading-[1] tracking-tight mb-10"
            data-testid="v1-hero-headline"
          >
            {t.hero.headline.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>
          <div className="w-20 h-px bg-[#D4AF36] mb-10" />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-[#001489]/55 text-base leading-relaxed max-w-[520px] mb-12"
            data-testid="v1-hero-subheadline"
          >
            {h.subheadline}
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            data-testid="v1-cta-book"
            className="inline-flex items-center gap-3 border border-[#001489] text-[#001489] text-xs tracking-[0.2em] uppercase font-semibold px-10 py-4 hover:bg-[#001489] hover:text-white transition-colors duration-300"
          >
            {h.cta1}
          </motion.a>
        </motion.div>
      </div>
      <div className="absolute bottom-12 right-16 flex flex-col items-center gap-3">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#D4AF36]/60 to-transparent"
        />
        <span className="text-[#001489]/30 text-[9px] tracking-[0.3em] uppercase">{t.hero.scroll}</span>
      </div>
    </section>
  );
}

function V1Differentiators() {
  const { t } = useLang();
  const d = t.diff;
  return (
    <section
      id="firm"
      data-testid="v1-differentiators-section"
      className="bg-white py-28 px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="border-t border-[#D4AF36]/30 pt-16 mb-20">
          <p className="text-[#D4AF36] text-xs tracking-[0.35em] uppercase font-semibold mb-6">{d.eyebrow}</p>
          <h2 className="font-heading text-[#001489] text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">{d.headline}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {d.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`v1-diff-card-${i}`}
              className="border-l border-[#D4AF36]/20 pl-8 pr-6 py-2 first:border-l-0 first:pl-0"
            >
              <p className="text-[#D4AF36] text-[10px] tracking-[0.25em] uppercase font-medium mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading text-[#001489] text-lg font-semibold mb-4 tracking-tight leading-snug">{card.title}</h3>
              <p className="text-[#001489]/50 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="border-t border-[#D4AF36]/30 mt-20 pt-10 flex justify-end">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[#001489] text-xs tracking-[0.2em] uppercase font-semibold hover:text-[#D4AF36] transition-colors"
          >
            <span>{d.learnMore}</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function V1PracticeAreas() {
  const { t } = useLang();
  const p = t.practices;
  return (
    <section
      id="expertise"
      data-testid="v1-practice-areas-section"
      className="bg-white py-28 px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="border-t border-[#D4AF36]/30 pt-16 mb-16">
          <p className="text-[#D4AF36] text-xs tracking-[0.35em] uppercase font-semibold mb-6">{p.eyebrow}</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-heading text-[#001489] text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">{p.headline}</h2>
            <p className="text-[#001489]/40 text-sm max-w-xs leading-relaxed">{p.subtext}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {p.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3) }}
              data-testid={`v1-practice-card-${i}`}
              className="border-t border-[#001489]/10 py-8 pr-6 group cursor-pointer hover:border-[#D4AF36]/50 transition-colors duration-300"
            >
              <span className="text-[#D4AF36] text-[10px] tracking-[0.22em] uppercase font-medium mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-[#001489] text-sm font-semibold leading-snug tracking-tight mb-3 group-hover:text-[#001489] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#001489]/40 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function V1Insights() {
  const { t } = useLang();
  const ins = t.insights;
  return (
    <section
      id="insights"
      data-header-theme="light"
      data-testid="v1-insights-section"
      className="bg-white py-28 px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="border-t border-[#D4AF36]/30 pt-16 mb-16">
          <p className="text-[#D4AF36] text-xs tracking-[0.35em] uppercase font-semibold mb-6">{ins.eyebrow}</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-heading text-[#001489] text-[clamp(1.8rem,3vw,2.5rem)] font-semibold tracking-tight">{ins.headline}</h2>
            <a href="#insights" data-testid="v1-view-all" className="text-[#001489]/50 hover:text-[#D4AF36] text-xs tracking-[0.18em] uppercase font-medium transition-colors whitespace-nowrap">
              {ins.viewAll}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {ins.articles.map((article, i) => (
            <motion.a
              key={i}
              href={`/insights/${articles[i]?.slug ?? ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              data-testid={`v1-insight-card-${i}`}
              className="group flex flex-col cursor-pointer"
            >
              <div className="h-48 overflow-hidden mb-5 bg-[#EEF2FB]">
                {articleImages[i] && (
                  <img src={articleImages[i]} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                )}
              </div>
              <p className="text-[#D4AF36] text-[9px] tracking-[0.25em] uppercase font-semibold mb-3">{article.category}</p>
              <h3 className="font-heading text-[#001489] text-sm font-bold leading-snug tracking-tight mb-3 group-hover:text-[#0028B8] transition-colors">{article.title}</h3>
              <p className="text-[#001489]/45 text-xs leading-relaxed flex-1 mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-2 text-[#001489] group-hover:text-[#D4AF36] transition-colors">
                <span className="text-[10px] tracking-[0.18em] uppercase font-medium">{ins.read}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function V1Contact() {
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
    <section
      id="contact"
      data-header-theme="light"
      data-testid="v1-contact-section"
      className="bg-white py-28 px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="border-t border-[#D4AF36]/30 pt-16 mb-16">
          <p className="text-[#D4AF36] text-xs tracking-[0.35em] uppercase font-semibold mb-6">{c.eyebrow}</p>
          <h2 className="font-heading text-[#001489] text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">{c.headline}</h2>
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
              <div data-testid="v1-contact-success" className="border border-[#D4AF36]/30 p-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#D4AF36]" fill="none" viewBox="0 0 20 20">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="font-heading text-[#001489] text-lg font-semibold">{c.successTitle}</h3>
                </div>
                <p className="text-[#001489]/55 text-sm leading-relaxed">{c.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="v1-contact-form" className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder={c.namePlaceholder} data-testid="v1-input-name"
                    className="bg-transparent border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors" />
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder={c.emailPlaceholder} data-testid="v1-input-email"
                    className="bg-transparent border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors" />
                </div>
                <div className="relative">
                  <select name="subject" required value={form.subject} onChange={handleChange} data-testid="v1-select-subject"
                    className="w-full bg-transparent border border-[#001489]/15 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors appearance-none cursor-pointer"
                    style={{ color: form.subject ? "#001489" : "rgba(0,20,137,0.3)" }}>
                    <option value="" disabled hidden>{c.subjectPlaceholder}</option>
                    {c.subjectOptions.map((opt, i) => <option key={i} value={opt} style={{ color: "#001489", background: "#fff" }}>{opt}</option>)}
                  </select>
                  <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#001489]/30" fill="none" viewBox="0 0 12 12">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder={c.messagePlaceholder} data-testid="v1-input-message"
                  className="bg-transparent border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors resize-none" />
                <button type="submit" disabled={submitting} data-testid="v1-button-submit"
                  className="self-start border border-[#001489] text-[#001489] text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover:bg-[#001489] hover:text-white transition-colors duration-300 disabled:opacity-60">
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

function V1Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer data-testid="v1-footer" className="bg-white border-t border-[#001489]/10">
      <div className="max-w-[1400px] mx-auto px-16">
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#001489]/8">
          <div className="md:col-span-5">
            <p className="font-heading text-[#001489] font-semibold text-lg tracking-[0.18em] uppercase mb-4">Milton Hobbs</p>
            <p className="text-[#001489]/45 text-sm leading-relaxed max-w-xs mb-6">{f.tagline}</p>
            <a href={`mailto:${f.email}`} className="block text-[#D4AF36] text-sm hover:text-[#C4A030] transition-colors">{f.email}</a>
            <p className="text-[#001489]/40 text-sm mt-1">{f.phone}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[#001489]/30 text-[10px] tracking-[0.25em] uppercase font-medium mb-4">{f.dubaiLabel}</p>
            <address className="not-italic text-[#001489]/50 text-sm leading-[1.9]">
              {f.dubaiAddr.map((line, i) => <span key={i} className="block">{line}</span>)}
            </address>
          </div>
          <div className="md:col-span-4">
            <p className="text-[#001489]/30 text-[10px] tracking-[0.25em] uppercase font-medium mb-4">{f.parisLabel}</p>
            <address className="not-italic text-[#001489]/50 text-sm leading-[1.9]">
              {f.parisAddr.map((line, i) => <span key={i} className="block">{line}</span>)}
            </address>
          </div>
        </div>
        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#001489]/30 text-xs">{f.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-[#001489]/30 hover:text-[#001489]/60 text-[10px] tracking-[0.18em] uppercase transition-colors">{f.privacy}</a>
            <a href="#" className="text-[#001489]/30 hover:text-[#001489]/60 text-[10px] tracking-[0.18em] uppercase transition-colors">{f.cookie}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomeV1Inner() {
  return (
    <div className="bg-white min-h-screen" data-testid="home-v1-page">
      <Header />
      <main>
        <V1Hero />
        <V1Differentiators />
        <V1PracticeAreas />
        <V1Insights />
        <V1Contact />
      </main>
      <V1Footer />
    </div>
  );
}

export default function HomeV1() {
  return (
    <LanguageProvider>
      <HomeV1Inner />
    </LanguageProvider>
  );
}
