import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Dense() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#111111] font-serif antialiased selection:bg-[#001489] selection:text-white">
      {/* Masthead */}
      <header className="bg-[#001489] text-white pt-12 pb-8 px-6 md:px-12 border-b-8 border-[#D4AF36]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase" style={{ fontFamily: "Georgia, serif" }}>Milton Hobbs</h1>
            <span className="text-sm md:text-base font-sans tracking-widest uppercase mt-4 md:mt-0 text-[#D4AF36]">Boutique Corporate Law</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/20 pt-8 font-sans">
            <div className="md:col-span-4 lg:col-span-3">
              <span className="text-[#D4AF36] text-xs font-bold tracking-widest uppercase mb-2 block">Today's Focus</span>
              <p className="text-xl md:text-2xl font-serif font-medium leading-tight mb-4">Reason. Rigor. Resolution.</p>
            </div>
            <div className="md:col-span-5 lg:col-span-6 border-l border-white/20 pl-8">
              <p className="text-sm md:text-base leading-relaxed text-white/90">
                Milton Hobbs is a boutique corporate law firm delivering clear, composed, and commercially astute counsel. Bridging Europe and the GCC.
              </p>
            </div>
            <div className="md:col-span-3 lg:col-span-3 md:border-l border-white/20 md:pl-8 flex flex-col justify-end">
              <button className="bg-white text-[#001489] px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF36] hover:text-[#001489] transition-none w-full text-center">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Differentiators (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-12">
            <section>
              <div className="border-t-2 border-[#111111] pt-2 mb-6">
                <span className="text-[#D4AF36] text-xs font-sans font-bold tracking-widest uppercase block mb-1">Why Milton Hobbs</span>
                <h2 className="text-2xl font-bold leading-tight">Counsel built for complexity.</h2>
              </div>
              
              <div className="space-y-6 font-sans">
                {[
                  { title: "Founder-Led Advisory", desc: "Senior partners lead every engagement, ensuring uncompromising quality and strategic depth." },
                  { title: "Strategic Precision", desc: "We distill complex legal frameworks into actionable, commercially viable intelligence." },
                  { title: "Cross-Border Capability", desc: "Seamless execution across European and GCC jurisdictions, navigating dual-regulatory environments." },
                  { title: "Discretion & Trust", desc: "A sanctuary for sensitive matters, safeguarding client interests with absolute confidentiality." }
                ].map((diff, i) => (
                  <div key={i} className="border-b border-black/10 pb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#D4AF36] inline-block"></span>
                      {diff.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{diff.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Center Column: Practice Areas (6 cols) */}
          <div className="lg:col-span-6">
            <section className="h-full">
              <div className="border-t-2 border-[#111111] pt-2 mb-6">
                <span className="text-[#001489] text-xs font-sans font-bold tracking-widest uppercase block mb-1">Expertise</span>
                <h2 className="text-2xl font-bold leading-tight">Practice Areas</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-serif">
                {[
                  "Corporate & Commercial",
                  "Real Estate & Property",
                  "Litigation & Dispute Resolution",
                  "Arbitration & Mediation",
                  "Employment & Labour",
                  "Banking & Finance",
                  "Tax",
                  "Immigration",
                  "Intellectual Property",
                  "Technology & Startups"
                ].map((area, i) => (
                  <div key={i} className="flex items-baseline gap-4 py-3 border-b border-black/10 hover:bg-black/5 group cursor-pointer transition-none px-2 -mx-2">
                    <span className="text-xs font-sans font-bold text-[#D4AF36] w-4">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-lg flex-1 group-hover:text-[#001489]">{area}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#001489]" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Insights & Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-12">
            <section>
              <div className="border-t-2 border-[#111111] pt-2 mb-6">
                <span className="text-[#D4AF36] text-xs font-sans font-bold tracking-widest uppercase block mb-1">Intelligence</span>
                <h2 className="text-2xl font-bold leading-tight">Recent Insights</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { topic: "Compliance", title: "Navigating Cross-Border Compliance in the Gulf" },
                  { topic: "Corporate", title: "The Future of Family Business Succession in the UAE" },
                  { topic: "Technology", title: "Digital Transformation & Data Privacy in the GCC" },
                  { topic: "M&A", title: "Strategic M&A Structuring for 2026" }
                ].map((insight, i) => (
                  <article key={i} className="group cursor-pointer">
                    <span className="text-xs font-sans font-bold text-[#001489] uppercase tracking-wider mb-1 block">{insight.topic}</span>
                    <h3 className="text-base font-serif font-medium leading-snug group-hover:underline underline-offset-4 decoration-[#D4AF36]">{insight.title}</h3>
                  </article>
                ))}
              </div>
            </section>

            <section className="bg-[#111111] text-[#F9F8F6] p-6 font-sans">
              <div className="mb-6">
                <span className="text-[#D4AF36] text-xs font-bold tracking-widest uppercase block mb-2">Get in Touch</span>
                <h2 className="text-xl font-serif font-medium leading-tight">Let's discuss your matter.</h2>
              </div>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-white/30 py-2 text-sm focus:outline-none focus:border-[#D4AF36] text-white placeholder:text-white/50 rounded-none" />
                <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/30 py-2 text-sm focus:outline-none focus:border-[#D4AF36] text-white placeholder:text-white/50 rounded-none" />
                <textarea placeholder="Briefly describe your inquiry..." rows={2} className="w-full bg-transparent border-b border-white/30 py-2 text-sm focus:outline-none focus:border-[#D4AF36] text-white placeholder:text-white/50 resize-none rounded-none"></textarea>
                <button type="button" className="w-full bg-[#D4AF36] text-[#111111] py-3 text-xs font-bold uppercase tracking-wider hover:bg-white transition-none mt-4">
                  Send Inquiry
                </button>
              </form>
            </section>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-[#001489] bg-white pt-12 pb-8 px-6 md:px-12 font-sans">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold uppercase tracking-tight mb-4">Milton Hobbs</h2>
            <p className="text-sm text-gray-500 max-w-sm">
              Boutique corporate law firm delivering clear, composed, and commercially astute counsel across Europe and the GCC.
            </p>
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#001489] block mb-4">Dubai Office</span>
            <address className="not-italic text-sm text-gray-600 leading-relaxed">
              DIFC, Gate Village<br />
              Building 2, Level 4<br />
              Dubai, UAE
            </address>
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#001489] block mb-4">Paris Office</span>
            <address className="not-italic text-sm text-gray-600 leading-relaxed">
              83 Avenue des Champs-Élysées<br />
              75008 Paris<br />
              France
            </address>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto border-t border-black/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-wider font-bold">
          <div className="flex gap-6">
            <a href="mailto:contact@miltonhobbs.com" className="hover:text-[#001489] flex items-center gap-2">
              <Mail className="w-4 h-4" /> contact@miltonhobbs.com
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#001489]">Terms</a>
            <a href="#" className="hover:text-[#001489]">Privacy</a>
            <a href="#" className="hover:text-[#001489]">Legal Notice</a>
          </div>
          <div>&copy; {new Date().getFullYear()} Milton Hobbs LLP</div>
        </div>
      </footer>
    </div>
  );
}
