import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  practiceArea?: string;
}

export function ContactModal({ open, onClose, practiceArea }: ContactModalProps) {
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

  const inputCls = "w-full bg-white border border-[#E5E9F0] text-[#001489] text-sm px-4 py-3 placeholder:text-[#8099FF] focus:outline-none focus:border-[#001489] transition-colors";

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
            >
              <div className="bg-[#001489] px-8 py-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-white text-[9px] tracking-[0.3em] uppercase font-bold mb-1.5">Milton Hobbs</p>
                    <h3 className="font-heading text-white text-lg font-bold tracking-tight">Book a Consultation</h3>
                    {practiceArea && (
                      <p className="text-white text-xs mt-1 leading-snug max-w-xs">{practiceArea}</p>
                    )}
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-white hover:text-white transition-colors mt-0.5 flex-shrink-0"
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
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#001489] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 16 16">
                            <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <h4 className="font-heading text-[#001489] font-bold text-base">Request received</h4>
                      </div>
                      <p className="text-[#001489] text-sm leading-relaxed">
                        Thank you for reaching out. One of our partners will be in touch within one business day.
                      </p>
                      <button
                        onClick={handleClose}
                        className="mt-2 text-[#001489] text-xs tracking-[0.15em] uppercase font-semibold hover:text-[#0028B8] transition-colors"
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
                      className="flex flex-col gap-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Full Name" className={`${inputCls} col-span-2 sm:col-span-1`} />
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Email Address" className={`${inputCls} col-span-2 sm:col-span-1`} />
                      </div>

                      <div className="relative">
                        <select
                          name="area"
                          required
                          value={form.area}
                          onChange={handleChange}
                          className={`${inputCls} appearance-none cursor-pointer`}
                          style={{ color: form.area ? "#001489" : "#8099FF" }}
                        >
                          <option value="" disabled hidden>Practice Area</option>
                          {PRACTICE_AREAS.map(a => (
                            <option key={a} value={a} style={{ color: "#001489", background: "#fff" }}>{a}</option>
                          ))}
                        </select>
                        <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#001489]" fill="none" viewBox="0 0 12 12">
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
                        className={`${inputCls} resize-none`}
                      />

                      <button
                        type="submit"
                        className="w-full bg-[#001489] text-white text-xs tracking-[0.18em] uppercase font-bold py-4 hover:bg-[#0028B8] transition-colors flex items-center justify-center gap-2.5"
                      >
                        <span>Send Message</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                          <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      </button>

                      <p className="text-[#8099FF] text-[10px] text-center leading-relaxed">
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
