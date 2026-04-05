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

const GREEN = "#1A3A2A";
const CREAM = "#FAFAF5";
const COPPER = "#C4742A";
const CREAM_DARK = "#F0EDE5";

function V3Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section
      id="home"
      data-testid="v3-hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: CREAM }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 78% 40%, rgba(26,58,42,0.06) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(196,116,42,0.04) 0%, transparent 45%)`,
      }} />
      <div className="absolute right-0 top-0 bottom-0 w-[3px]" style={{ backgroundColor: COPPER, opacity: 0.5 }} />
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-2 items-center">
        {[t.footer.dubaiLabel, t.footer.parisLabel].map((label) => (
          <span key={label} className="text-[8px] tracking-[0.3em] uppercase font-medium" style={{ color: GREEN, opacity: 0.3, writingMode: "vertical-rl" }}>{label}</span>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-12 lg:px-20 pt-40 pb-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xs tracking-[0.35em] uppercase font-semibold mb-10"
              style={{ color: COPPER }}
              data-testid="v3-hero-eyebrow"
            >
              {h.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading font-bold text-[clamp(3.2rem,6.5vw,6rem)] leading-[1] tracking-tight mb-10"
              style={{ color: GREEN }}
              data-testid="v3-hero-headline"
            >
              {t.hero.headline.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </motion.h1>
            <div className="w-16 h-[2px] mb-10" style={{ backgroundColor: COPPER }} />
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-base leading-relaxed max-w-[500px] mb-12"
              style={{ color: `${GREEN}99` }}
              data-testid="v3-hero-subheadline"
            >
              {h.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="#contact"
                data-testid="v3-cta-book"
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-bold px-10 py-4 transition-colors duration-300"
                style={{ backgroundColor: GREEN, color: CREAM }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = COPPER; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = GREEN; }}
              >
                {h.cta1}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex flex-col gap-3"
          >
            <div className="border p-8 flex flex-col gap-3" style={{ borderColor: `${GREEN}18`, backgroundColor: `${GREEN}04` }}>
              <p className="text-[10px] tracking-[0.28em] uppercase font-semibold" style={{ color: COPPER }}>{t.diff.eyebrow}</p>
              <p className="font-heading font-semibold text-xl tracking-tight" style={{ color: GREEN }}>{t.diff.headline}</p>
              <p className="text-sm leading-relaxed" style={{ color: `${GREEN}60` }}>{t.hero.subheadline}</p>
            </div>
            <div className="flex flex-col gap-0">
              {t.diff.cards.map((card, i) => (
                <div key={i} className="border-b py-5 flex gap-4 items-start last:border-b-0" style={{ borderColor: `${GREEN}10` }}>
                  <span className="text-[10px] tracking-[0.2em] font-semibold shrink-0 mt-0.5" style={{ color: COPPER }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-heading text-sm font-bold tracking-tight mb-1" style={{ color: GREEN }}>{card.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: `${GREEN}55` }}>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function V3Differentiators() {
  const { t } = useLang();
  const d = t.diff;
  return (
    <section id="firm" data-testid="v3-differentiators-section" className="py-28 px-8" style={{ backgroundColor: GREEN }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-5" style={{ color: COPPER }}>{d.eyebrow}</p>
            <h2 className="font-heading font-bold text-[clamp(1.8rem,3vw,2.8rem)] tracking-tight" style={{ color: CREAM }}>{d.headline}</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold transition-colors" style={{ color: COPPER }}>
            <span>{d.learnMore}</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: `${CREAM}22` }}>
          {d.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`v3-diff-card-${i}`}
              className="p-10 group cursor-pointer transition-all duration-300"
              style={{ backgroundColor: GREEN }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.backgroundColor = `${GREEN}DD`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.backgroundColor = GREEN; }}
            >
              <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-5" style={{ color: COPPER }}>{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-heading font-bold text-lg tracking-tight mb-4 leading-snug" style={{ color: CREAM }}>{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: `${CREAM}70` }}>{card.description}</p>
              <div className="mt-6 w-8 h-px" style={{ backgroundColor: COPPER, opacity: 0.5 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function V3PracticeAreas() {
  const { t } = useLang();
  const p = t.practices;
  return (
    <section id="expertise" data-testid="v3-practice-areas-section" className="py-28 px-8" style={{ backgroundColor: CREAM_DARK }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-5" style={{ color: COPPER }}>{p.eyebrow}</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-heading font-bold text-[clamp(1.8rem,3vw,2.8rem)] tracking-tight" style={{ color: GREEN }}>{p.headline}</h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: `${GREEN}55` }}>{p.subtext}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {p.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3) }}
              data-testid={`v3-practice-card-${i}`}
              className="p-7 border cursor-pointer group transition-all duration-300"
              style={{ borderColor: `${GREEN}14`, backgroundColor: CREAM }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = COPPER; (e.currentTarget as HTMLDivElement).style.backgroundColor = `${COPPER}08`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `${GREEN}14`; (e.currentTarget as HTMLDivElement).style.backgroundColor = CREAM; }}
            >
              <span className="text-[10px] tracking-[0.22em] uppercase font-medium mb-4 block" style={{ color: COPPER }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-heading text-sm font-bold leading-snug tracking-tight mb-3" style={{ color: GREEN }}>{item.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: `${GREEN}50` }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function V3Insights() {
  const { t } = useLang();
  const ins = t.insights;
  return (
    <section id="insights" data-header-theme="light" data-testid="v3-insights-section" className="py-28 px-8" style={{ backgroundColor: CREAM }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-5" style={{ color: COPPER }}>{ins.eyebrow}</p>
            <h2 className="font-heading font-bold text-[clamp(1.6rem,2.8vw,2.5rem)] tracking-tight" style={{ color: GREEN }}>{ins.headline}</h2>
          </div>
          <a href="#insights" data-testid="v3-view-all" className="text-xs tracking-[0.18em] uppercase font-medium transition-colors whitespace-nowrap" style={{ color: `${GREEN}60` }}>{ins.viewAll}</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ins.articles.map((article, i) => (
            <motion.a
              key={i}
              href={`/insights/${articles[i]?.slug ?? ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              data-testid={`v3-insight-card-${i}`}
              className="group flex flex-col border overflow-hidden cursor-pointer transition-all duration-300"
              style={{ borderColor: `${GREEN}12`, backgroundColor: CREAM }}
            >
              <div className="h-44 overflow-hidden flex-shrink-0" style={{ backgroundColor: `${GREEN}10` }}>
                {articleImages[i] && (
                  <img src={articleImages[i]} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                )}
              </div>
              <div className="flex flex-col flex-1 p-6 gap-3">
                <p className="text-[9px] tracking-[0.25em] uppercase font-bold" style={{ color: COPPER }}>{article.category}</p>
                <h3 className="font-heading text-sm font-bold leading-snug tracking-tight" style={{ color: GREEN }}>{article.title}</h3>
                <p className="text-xs leading-relaxed flex-1" style={{ color: `${GREEN}55` }}>{article.excerpt}</p>
                <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: `${GREEN}10` }}>
                  <span className="text-[10px] tracking-[0.18em] uppercase font-medium" style={{ color: GREEN }}>{ins.read}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" style={{ color: GREEN }}>
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

function V3Contact() {
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
    <section id="contact" data-header-theme="light" data-testid="v3-contact-section" className="py-28 px-8" style={{ backgroundColor: CREAM_DARK }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-5" style={{ color: COPPER }}>{c.eyebrow}</p>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,3vw,2.8rem)] tracking-tight" style={{ color: GREEN }}>{c.headline}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20">
          <div className="flex flex-col gap-10">
            <p className="text-sm leading-relaxed" style={{ color: `${GREEN}60` }}>{c.subtext}</p>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-5" style={{ color: COPPER }}>{c.officeLabel}</p>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: GREEN }}>{c.dubaiLabel}</p>
                  {f.dubaiAddr.map((line, i) => <p key={i} className="text-xs leading-relaxed" style={{ color: `${GREEN}50` }}>{line}</p>)}
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: GREEN }}>{c.parisLabel}</p>
                  {f.parisAddr.map((line, i) => <p key={i} className="text-xs leading-relaxed" style={{ color: `${GREEN}50` }}>{line}</p>)}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${f.email}`} className="text-sm transition-colors" style={{ color: `${GREEN}60` }}>{f.email}</a>
              <a href={`tel:${f.phone}`} className="text-sm transition-colors" style={{ color: `${GREEN}60` }}>{f.phone}</a>
            </div>
          </div>
          <div>
            {submitted ? (
              <div data-testid="v3-contact-success" className="p-10 flex flex-col gap-4 border" style={{ borderColor: `${COPPER}40`, backgroundColor: `${COPPER}08` }}>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" style={{ color: COPPER }}>
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="font-heading text-lg font-semibold" style={{ color: GREEN }}>{c.successTitle}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: `${GREEN}60` }}>{c.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="v3-contact-form" className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder={c.namePlaceholder} data-testid="v3-input-name"
                    className="border text-sm px-4 py-3.5 outline-none transition-colors"
                    style={{ borderColor: `${GREEN}18`, backgroundColor: CREAM, color: GREEN }}
                    onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = COPPER; }}
                    onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = `${GREEN}18`; }}
                  />
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder={c.emailPlaceholder} data-testid="v3-input-email"
                    className="border text-sm px-4 py-3.5 outline-none transition-colors"
                    style={{ borderColor: `${GREEN}18`, backgroundColor: CREAM, color: GREEN }}
                    onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = COPPER; }}
                    onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = `${GREEN}18`; }}
                  />
                </div>
                <div className="relative">
                  <select name="subject" required value={form.subject} onChange={handleChange} data-testid="v3-select-subject"
                    className="w-full border text-sm px-4 py-3.5 outline-none transition-colors appearance-none cursor-pointer"
                    style={{ borderColor: `${GREEN}18`, backgroundColor: CREAM, color: form.subject ? GREEN : `${GREEN}50` }}
                    onFocus={e => { (e.currentTarget as HTMLSelectElement).style.borderColor = COPPER; }}
                    onBlur={e => { (e.currentTarget as HTMLSelectElement).style.borderColor = `${GREEN}18`; }}
                  >
                    <option value="" disabled hidden>{c.subjectPlaceholder}</option>
                    {c.subjectOptions.map((opt, i) => <option key={i} value={opt} style={{ color: GREEN, background: CREAM }}>{opt}</option>)}
                  </select>
                  <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3" fill="none" viewBox="0 0 12 12" style={{ color: `${GREEN}40` }}>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder={c.messagePlaceholder} data-testid="v3-input-message"
                  className="border text-sm px-4 py-3.5 outline-none transition-colors resize-none"
                  style={{ borderColor: `${GREEN}18`, backgroundColor: CREAM, color: GREEN }}
                  onFocus={e => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = COPPER; }}
                  onBlur={e => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = `${GREEN}18`; }}
                />
                <button type="submit" disabled={submitting} data-testid="v3-button-submit"
                  className="self-start text-xs tracking-[0.2em] uppercase font-bold px-8 py-4 transition-colors duration-300 disabled:opacity-60"
                  style={{ backgroundColor: GREEN, color: CREAM }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = COPPER; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = GREEN; }}
                >
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

function V3Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer data-testid="v3-footer" style={{ backgroundColor: GREEN, borderTop: `1px solid ${CREAM}14` }}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="py-20 grid grid-cols-1 md:grid-cols-12 gap-12 border-b" style={{ borderColor: `${CREAM}14` }}>
          <div className="md:col-span-5">
            <p className="font-heading font-semibold text-lg tracking-[0.18em] uppercase mb-4" style={{ color: CREAM }}>Milton Hobbs</p>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: `${CREAM}55` }}>{f.tagline}</p>
            <a href={`mailto:${f.email}`} className="block text-sm transition-colors" style={{ color: COPPER }}>{f.email}</a>
            <p className="text-sm mt-1" style={{ color: `${CREAM}40` }}>{f.phone}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-4" style={{ color: `${CREAM}35` }}>{f.dubaiLabel}</p>
            <address className="not-italic text-sm leading-[1.9]" style={{ color: `${CREAM}55` }}>
              {f.dubaiAddr.map((line, i) => <span key={i} className="block">{line}</span>)}
            </address>
          </div>
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-4" style={{ color: `${CREAM}35` }}>{f.parisLabel}</p>
            <address className="not-italic text-sm leading-[1.9]" style={{ color: `${CREAM}55` }}>
              {f.parisAddr.map((line, i) => <span key={i} className="block">{line}</span>)}
            </address>
          </div>
        </div>
        <div className="py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs" style={{ color: `${CREAM}30` }}>{f.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] tracking-[0.18em] uppercase transition-colors" style={{ color: `${CREAM}30` }}>{f.privacy}</a>
            <a href="#" className="text-[10px] tracking-[0.18em] uppercase transition-colors" style={{ color: `${CREAM}30` }}>{f.cookie}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomeV3Inner() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM }} data-testid="home-v3-page">
      <Header />
      <main>
        <V3Hero />
        <V3Differentiators />
        <V3PracticeAreas />
        <V3Insights />
        <V3Contact />
      </main>
      <V3Footer />
    </div>
  );
}

export default function HomeV3() {
  return (
    <LanguageProvider>
      <HomeV3Inner />
    </LanguageProvider>
  );
}
