import { useState, useRef, useEffect, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import type { Job } from "@shared/schema";

const LOCATIONS = ["All Locations", "Dubai", "Paris"];
const DEPARTMENTS = [
  "All Departments",
  "Corporate & M&A",
  "Banking & Finance",
  "Dispute Resolution",
  "Private Client & Wealth",
  "Operations",
];

const LOCATION_ICONS: Record<string, JSX.Element> = {
  Dubai: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  Paris: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
};

const DEPT_COLOR: Record<string, string> = {
  "Corporate & M&A": "#001489",
  "Banking & Finance": "#003580",
  "Dispute Resolution": "#000A4F",
  "Private Client & Wealth": "#002060",
  "Operations": "#1a2a6c",
};

function ApplyModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", coverLetter: "" });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleOverlay = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setCvFile(file);
    setError("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!cvFile) { setError("Please attach your CV (PDF or Word document)."); return; }
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name.trim());
      fd.append("email", form.email.trim());
      fd.append("phone", form.phone.trim());
      fd.append("coverLetter", form.coverLetter.trim());
      fd.append("cv", cvFile);

      const res = await fetch(`/api/jobs/${job.id}/apply`, { method: "POST", body: fd });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed. Please try again.");
      }
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlay}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "rgba(0,10,79,0.72)", backdropFilter: "blur(4px)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col lg:flex-row"
        style={{ scrollbarWidth: "thin" }}
      >
        {/* Left — job detail */}
        <div className="lg:w-[45%] flex-shrink-0 bg-[#000A4F] p-10 flex flex-col gap-6">
          <button
            onClick={onClose}
            className="self-start text-white/40 hover:text-white transition-colors text-xs tracking-widest uppercase flex items-center gap-2"
            data-testid="modal-close"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Close
          </button>

          <div>
            <p className="text-[#D4AF36] text-[10px] tracking-[0.35em] uppercase font-bold mb-3">Open Position</p>
            <h2 className="font-heading text-white text-2xl xl:text-3xl font-bold leading-tight tracking-tight mb-4">
              {job.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="flex items-center gap-1.5 text-white/60 text-xs tracking-wide">
                <svg className="w-3.5 h-3.5 text-[#D4AF36]" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                {job.location}
              </span>
              <span className="text-white/30">·</span>
              <span className="text-white/60 text-xs tracking-wide">{job.type}</span>
              <span className="text-white/30">·</span>
              <span className="text-white/60 text-xs tracking-wide">{job.level}</span>
            </div>
            <div className="border-t border-white/10 pt-5">
              <p className="text-[10px] text-[#D4AF36] tracking-[0.3em] uppercase font-bold mb-3">Department</p>
              <p className="text-white/75 text-sm font-medium">{job.department}</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-5 flex-1 overflow-y-auto">
            <p className="text-[10px] text-[#D4AF36] tracking-[0.3em] uppercase font-bold mb-3">About the Role</p>
            <div className="text-white/65 text-sm leading-relaxed whitespace-pre-line">
              {job.description}
            </div>

            <p className="text-[10px] text-[#D4AF36] tracking-[0.3em] uppercase font-bold mt-6 mb-3">Requirements</p>
            <div className="text-white/65 text-sm leading-relaxed">
              {job.requirements.split("\n").filter(Boolean).map((req, i) => (
                <div key={i} className="flex gap-2.5 mb-2">
                  <span className="text-[#D4AF36] mt-[3px] flex-shrink-0">—</span>
                  <span>{req.replace(/^[-–—]\s*/, "")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — application form */}
        <div className="flex-1 p-10 flex flex-col">
          {submitted ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-5">
              <div className="w-16 h-16 border-2 border-[#D4AF36] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#D4AF36]" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-[#000A4F] text-2xl font-bold tracking-tight mb-2">Application Received</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Thank you for your interest in joining Milton Hobbs. Our team will review your application and be in touch shortly.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-4 bg-[#001489] text-white text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#000A4F] transition-colors"
                data-testid="modal-close-success"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="font-heading text-[#000A4F] text-2xl font-bold tracking-tight">Apply for this position</h3>
                <p className="text-gray-500 text-sm mt-1.5">All fields marked with * are required.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1" data-testid="apply-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#001489]">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#001489] transition-colors"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#001489]">Phone Number *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+971 50 000 0000"
                      className="border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#001489] transition-colors"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#001489]">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane.smith@example.com"
                    className="border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#001489] transition-colors"
                    data-testid="input-email"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#001489]">Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={form.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us why you would like to join Milton Hobbs and what you bring to this role..."
                    rows={5}
                    className="border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#001489] transition-colors resize-none"
                    data-testid="input-cover-letter"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#001489]">CV / Résumé *</label>
                  <div
                    onClick={() => fileRef.current?.click()}
                    className={`border-2 border-dashed px-5 py-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
                      cvFile ? "border-[#001489] bg-[#001489]/4" : "border-gray-200 hover:border-[#001489]/40"
                    }`}
                    data-testid="cv-upload-zone"
                  >
                    {cvFile ? (
                      <>
                        <svg className="w-6 h-6 text-[#001489]" fill="none" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" />
                          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <p className="text-[#001489] font-semibold text-sm">{cvFile.name}</p>
                        <p className="text-gray-400 text-xs">
                          {(cvFile.size / 1024 / 1024).toFixed(2)} MB · Click to change
                        </p>
                      </>
                    ) : (
                      <>
                        <svg className="w-7 h-7 text-gray-300" fill="none" viewBox="0 0 24 24">
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.5" />
                          <polyline points="17,8 12,3 7,8" stroke="currentColor" strokeWidth="1.5" />
                          <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <p className="text-gray-500 text-sm font-medium">Drop your CV here or <span className="text-[#001489] underline underline-offset-2">browse</span></p>
                        <p className="text-gray-400 text-xs">PDF, DOC, DOCX — max 10 MB</p>
                      </>
                    )}
                    <input
                      ref={fileRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFile}
                      className="hidden"
                      data-testid="input-cv"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-600 text-xs tracking-wide border-l-2 border-red-500 pl-3 py-1">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-auto bg-[#001489] text-white text-xs tracking-[0.22em] uppercase px-8 py-4 hover:bg-[#000A4F] disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold flex items-center justify-center gap-3"
                  data-testid="button-submit-application"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.3" />
                        <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function JobCard({ job, onApply }: { job: Job; onApply: (job: Job) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative border-b border-gray-100 transition-all duration-200 ${hovered ? "bg-[#000A4F]" : "bg-white"}`}
      data-testid={`job-card-${job.id}`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        {/* Left — info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <span
              className="text-[9px] tracking-[0.28em] uppercase font-bold px-2.5 py-1"
              style={{
                background: hovered ? "rgba(212,175,54,0.15)" : "#F0F4FF",
                color: hovered ? "#D4AF36" : "#001489",
              }}
            >
              {job.department}
            </span>
            <span className={`flex items-center gap-1.5 text-[11px] font-medium tracking-wide ${hovered ? "text-white/50" : "text-gray-400"}`}>
              {LOCATION_ICONS[job.location]}
              {job.location}
            </span>
          </div>

          <h3 className={`font-heading text-xl font-bold tracking-tight leading-snug transition-colors duration-200 ${hovered ? "text-white" : "text-[#000A4F]"}`}>
            {job.title}
          </h3>

          <p className={`text-sm mt-2 leading-relaxed line-clamp-2 transition-colors duration-200 ${hovered ? "text-white/55" : "text-gray-500"}`}>
            {job.summary}
          </p>
        </div>

        {/* Middle — meta */}
        <div className="flex md:flex-col gap-3 md:gap-1.5 md:min-w-[140px] md:text-right">
          <span className={`text-xs tracking-wide transition-colors ${hovered ? "text-white/50" : "text-gray-400"}`}>{job.type}</span>
          <span className={`text-xs tracking-wide transition-colors ${hovered ? "text-white/50" : "text-gray-400"}`}>{job.level}</span>
        </div>

        {/* Right — CTA */}
        <div className="flex-shrink-0">
          <button
            onClick={() => onApply(job)}
            className={`text-xs tracking-[0.2em] uppercase font-semibold px-6 py-3 border transition-all duration-200 flex items-center gap-2.5 ${
              hovered
                ? "border-[#D4AF36] text-[#D4AF36] hover:bg-[#D4AF36] hover:text-[#000A4F]"
                : "border-[#001489] text-[#001489] hover:bg-[#001489] hover:text-white"
            }`}
            data-testid={`button-apply-${job.id}`}
          >
            Apply Now
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CareersPageInner() {
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const { data: jobs = [], isLoading } = useQuery<Job[]>({ queryKey: ["/api/jobs"] });

  const filtered = jobs.filter((j) => {
    const locOk = locationFilter === "All Locations" || j.location === locationFilter;
    const deptOk = departmentFilter === "All Departments" || j.department === departmentFilter;
    return locOk && deptOk;
  });

  return (
    <div className="min-h-screen bg-white font-body">
      <LanguageProvider>
        <Header />
      </LanguageProvider>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #000A4F 0%, #001489 60%, #001870 100%)", minHeight: 520 }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, #D4AF36 0%, #F0C94F 50%, #D4AF36 100%)" }} />

        {/* Decorative orb */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(128,153,255,0.08) 0%, transparent 60%)",
        }} />

        <div className="max-w-[1400px] mx-auto px-8 pt-40 pb-24 flex flex-col lg:flex-row items-start lg:items-end gap-12">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#D4AF36] text-[10px] tracking-[0.45em] uppercase font-bold mb-5"
            >
              Careers at Milton Hobbs
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-heading text-white text-5xl xl:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
            >
              Build Something<br />
              <span style={{ color: "#D4AF36" }}>That Matters.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-white/55 text-base leading-relaxed max-w-lg"
            >
              We are a boutique firm with global ambition. If you are driven by precision, motivated by complexity, and committed to clients who trust you with what matters most — we want to hear from you.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex gap-8 xl:gap-14"
          >
            {[
              { num: "2", label: "Offices" },
              { num: "3", label: "Languages" },
              { num: `${jobs.length}`, label: "Open Positions" },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-heading text-white text-4xl font-bold">{num}</span>
                <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase mt-1">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── POSITIONS ── */}
      <section data-header-theme="light" className="pb-24">
        {/* Sticky filter bar */}
        <div className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
          <div className="max-w-[1400px] mx-auto px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-heading text-[#000A4F] font-bold text-lg tracking-tight">Open Positions</h2>
              <p className="text-gray-400 text-xs tracking-wide mt-0.5">
                {filtered.length} {filtered.length === 1 ? "position" : "positions"} available
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Location filter */}
              <div className="relative">
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="appearance-none border border-gray-200 px-4 pr-8 py-2.5 text-xs tracking-[0.15em] uppercase font-semibold text-[#001489] bg-white focus:outline-none focus:border-[#001489] cursor-pointer transition-colors"
                  data-testid="filter-location"
                >
                  {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
                </select>
                <svg className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-[#001489]" fill="none" viewBox="0 0 10 10">
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Department filter */}
              <div className="relative">
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="appearance-none border border-gray-200 px-4 pr-8 py-2.5 text-xs tracking-[0.15em] uppercase font-semibold text-[#001489] bg-white focus:outline-none focus:border-[#001489] cursor-pointer transition-colors"
                  data-testid="filter-department"
                >
                  {DEPARTMENTS.map((d) => <option key={d}>{d}</option>)}
                </select>
                <svg className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-[#001489]" fill="none" viewBox="0 0 10 10">
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>

              {(locationFilter !== "All Locations" || departmentFilter !== "All Departments") && (
                <button
                  onClick={() => { setLocationFilter("All Locations"); setDepartmentFilter("All Departments"); }}
                  className="text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-[#001489] transition-colors border border-gray-200 px-3 py-2.5"
                  data-testid="button-clear-filters"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Job list */}
        <div className="border-b border-gray-100">
          {isLoading ? (
            <div className="max-w-[1400px] mx-auto px-8 py-16 flex flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-28 bg-gray-50 animate-pulse" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="max-w-[1400px] mx-auto px-8 py-24 flex flex-col items-center text-center gap-5">
              <div className="w-14 h-14 border border-gray-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="font-heading text-[#000A4F] font-bold text-lg">No positions found</p>
                <p className="text-gray-400 text-sm mt-1 max-w-sm">
                  {jobs.length === 0
                    ? "There are no open positions at this time. Please check back soon."
                    : "No positions match your current filters. Try adjusting your search."}
                </p>
              </div>
              {jobs.length > 0 && (
                <button
                  onClick={() => { setLocationFilter("All Locations"); setDepartmentFilter("All Departments"); }}
                  className="text-xs tracking-[0.2em] uppercase font-semibold text-[#001489] border border-[#001489] px-6 py-2.5 hover:bg-[#001489] hover:text-white transition-all"
                  data-testid="button-view-all-jobs"
                >
                  View All Positions
                </button>
              )}
            </div>
          ) : (
            filtered.map((job) => (
              <JobCard key={job.id} job={job} onApply={setSelectedJob} />
            ))
          )}
        </div>
      </section>

      {/* ── SPONTANEOUS APPLICATION ── */}
      <section className="bg-[#F7F8FC] border-t border-gray-100" data-header-theme="light">
        <div className="max-w-[1400px] mx-auto px-8 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-lg">
            <p className="text-[#D4AF36] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Don't See Your Role?</p>
            <h2 className="font-heading text-[#000A4F] text-3xl font-bold tracking-tight leading-tight mb-4">
              We are always open to exceptional talent.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              If you are an outstanding lawyer or legal professional who believes Milton Hobbs is the right home for your career, we invite you to get in touch directly. Exceptional candidates are always welcome.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="mailto:careers@miltonhobbs.com"
              className="inline-flex items-center gap-3 bg-[#001489] text-white text-xs tracking-[0.25em] uppercase font-semibold px-8 py-4 hover:bg-[#000A4F] transition-colors"
              data-testid="link-contact-careers"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.4" />
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              Send Your Profile
            </a>
          </div>
        </div>
      </section>

      <LanguageProvider>
        <Footer />
      </LanguageProvider>

      {/* ── APPLY MODAL ── */}
      <AnimatePresence>
        {selectedJob && (
          <ApplyModal key={selectedJob.id} job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CareersPage() {
  return <CareersPageInner />;
}
