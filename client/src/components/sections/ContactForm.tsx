import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export function ContactForm() {
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
      data-testid="contact-section"
      className="bg-white py-28 px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#D4AF36] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            {c.eyebrow}
          </p>
          <h2 className="font-heading text-[#001489] text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-tight">
            {c.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-10"
          >
            <p className="text-[#001489]/60 text-sm leading-relaxed">{c.subtext}</p>

            <div>
              <p className="text-[#D4AF36] text-[10px] tracking-[0.25em] uppercase font-medium mb-5">
                {c.officeLabel}
              </p>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-[#001489] text-sm font-semibold mb-1">{c.dubaiLabel}</p>
                  {f.dubaiAddr.map((line, i) => (
                    <p key={i} className="text-[#001489]/50 text-xs leading-relaxed">{line}</p>
                  ))}
                </div>
                <div>
                  <p className="text-[#001489] text-sm font-semibold mb-1">{c.parisLabel}</p>
                  {f.parisAddr.map((line, i) => (
                    <p key={i} className="text-[#001489]/50 text-xs leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${f.email}`}
                data-testid="contact-email"
                className="text-[#001489]/60 hover:text-[#D4AF36] text-sm transition-colors"
              >
                {f.email}
              </a>
              <a
                href={`tel:${f.phone}`}
                data-testid="contact-phone"
                className="text-[#001489]/60 hover:text-[#D4AF36] text-sm transition-colors"
              >
                {f.phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div
                data-testid="contact-success"
                className="border border-[#D4AF36]/40 p-10 flex flex-col gap-4 h-full justify-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-[#D4AF36]" fill="none" viewBox="0 0 20 20">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="font-heading text-[#001489] text-lg font-semibold">{c.successTitle}</h3>
                </div>
                <p className="text-[#001489]/60 text-sm leading-relaxed">{c.successText}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={c.namePlaceholder}
                    data-testid="input-name"
                    className="bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={c.emailPlaceholder}
                    data-testid="input-email"
                    className="bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors"
                  />
                </div>

                <div className="relative">
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    data-testid="select-subject"
                    className="w-full bg-[#001489]/[0.03] border border-[#001489]/15 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors appearance-none cursor-pointer"
                    style={{ color: form.subject ? "#001489" : "rgba(0,20,137,0.3)" }}
                  >
                    <option value="" disabled hidden>{c.subjectPlaceholder}</option>
                    {c.subjectOptions.map((opt, i) => (
                      <option key={i} value={opt} style={{ color: "#001489", background: "#fff" }}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#001489]/30"
                    fill="none"
                    viewBox="0 0 12 12"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>

                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={c.messagePlaceholder}
                  data-testid="input-message"
                  className="bg-[#001489]/[0.03] border border-[#001489]/15 text-[#001489] placeholder-[#001489]/30 text-sm px-4 py-3.5 outline-none focus:border-[#D4AF36]/60 transition-colors resize-none"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="button-submit"
                  className="self-start bg-[#D4AF36] text-[#001489] text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover:bg-[#C4A030] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? c.submitting : c.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
