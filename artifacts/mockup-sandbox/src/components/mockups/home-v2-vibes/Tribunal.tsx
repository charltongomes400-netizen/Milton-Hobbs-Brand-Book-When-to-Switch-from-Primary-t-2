import React, { useState } from "react";
import { ArrowRight, ChevronRight, ArrowDown } from "lucide-react";

export function Tribunal() {
  const [activeDiff, setActiveDiff] = useState(0);

  const differentiators = [
    {
      id: "01",
      title: "FOUNDER-LED ADVISORY",
      desc: "Every matter receives direct partner oversight. We do not delegate complex commercial issues to junior associates.",
    },
    {
      id: "02",
      title: "STRATEGIC PRECISION",
      desc: "We analyze beyond the immediate legal question to understand the commercial and operational impact of our counsel.",
    },
    {
      id: "03",
      title: "CROSS-BORDER CAPABILITY",
      desc: "Seamless execution across European and GCC jurisdictions, navigating contrasting regulatory environments with authority.",
    },
    {
      id: "04",
      title: "DISCRETION & TRUST",
      desc: "Absolute confidentiality for sensitive corporate transitions, restructuring, and high-stakes dispute resolution.",
    },
  ];

  const practices = [
    "CORPORATE & COMMERCIAL",
    "REAL ESTATE & PROPERTY",
    "LITIGATION & DISPUTE RESOLUTION",
    "ARBITRATION & MEDIATION",
    "EMPLOYMENT & LABOUR",
    "BANKING & FINANCE",
    "TAX",
    "IMMIGRATION",
    "INTELLECTUAL PROPERTY",
    "TECHNOLOGY & STARTUPS",
  ];

  const insights = [
    {
      cat: "COMPLIANCE",
      title: "Navigating Cross-Border Compliance in the Gulf",
      excerpt: "An analysis of the shifting regulatory frameworks impacting foreign direct investment.",
    },
    {
      cat: "CORPORATE",
      title: "The Future of Family Business Succession in the UAE",
      excerpt: "Structuring intergenerational wealth transfers under the new civil code.",
    },
    {
      cat: "TECHNOLOGY",
      title: "Digital Transformation & Data Privacy in the GCC",
      excerpt: "Balancing innovation mandates with stringent new data localization laws.",
    },
    {
      cat: "M&A",
      title: "Strategic M&A Structuring for 2026",
      excerpt: "How macroeconomic tightening is reshaping deal terms and due diligence.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-red-900 selection:text-white">
      {/* HERO */}
      <section className="flex flex-col lg:flex-row min-h-[100svh]">
        {/* Left Panel */}
        <div className="lg:w-[42%] bg-zinc-950 text-white p-8 lg:p-16 flex flex-col justify-between relative border-r-8 border-red-900">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold tracking-widest uppercase mb-1">Milton Hobbs</h1>
              <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">Boutique Corporate Law</p>
            </div>
          </div>

          <div className="my-24 lg:my-0">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-red-900 w-12"></div>
              <span className="text-xs font-bold tracking-[0.3em] text-red-700 uppercase">Firm Profile</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-12 uppercase flex flex-col gap-2">
              <span>Reason.</span>
              <span className="text-zinc-500">Rigor.</span>
              <span className="text-red-900">Resolution.</span>
            </h2>

            <div className="flex gap-6 items-start">
              <div className="w-1 bg-red-900 h-24 shrink-0"></div>
              <p className="text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-md font-medium">
                Milton Hobbs is a boutique corporate law firm delivering clear, composed, and commercially astute counsel. Bridging Europe and the GCC.
              </p>
            </div>

            <button className="mt-16 group flex items-center gap-4 bg-white text-zinc-950 px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-red-900 hover:text-white transition-colors duration-300">
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-xs tracking-widest uppercase text-zinc-500">
            <ArrowDown className="w-4 h-4 animate-bounce" />
            Scroll to proceed
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-[58%] bg-white p-8 lg:p-24 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto w-full">
            <h3 className="text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase mb-12 border-b border-zinc-200 pb-4">
              Core Distinctions
            </h3>
            <div className="space-y-0 border-t border-zinc-950">
              {differentiators.map((diff, idx) => (
                <div key={idx} className="group border-b border-zinc-200 py-8 flex gap-8 items-start hover:bg-zinc-50 transition-colors px-4 -mx-4 cursor-default">
                  <span className="text-sm font-bold tracking-tighter text-red-900 shrink-0 mt-1">{diff.id}</span>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight uppercase mb-3 text-zinc-950">{diff.title}</h4>
                    <p className="text-zinc-600 leading-relaxed">{diff.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS (Deep Dive) */}
      <section className="bg-zinc-950 text-white py-24 lg:py-32 px-8 lg:px-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 border-b border-zinc-800 pb-8">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-red-800 uppercase block mb-4">Why Milton Hobbs</span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase">Counsel built for complexity.</h2>
            </div>
            <a href="#contact" className="text-sm font-bold tracking-widest uppercase flex items-center gap-2 hover:text-red-500 transition-colors">
              Speak to us <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-zinc-800 border border-zinc-800">
            {differentiators.map((diff, idx) => {
              const isActive = activeDiff === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveDiff(idx)}
                  className={`text-left p-8 lg:p-12 transition-all duration-300 ${
                    isActive ? "bg-red-950 text-white" : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900"
                  }`}
                >
                  <span className={`text-xs font-bold tracking-widest mb-6 block ${isActive ? "text-red-400" : "text-zinc-600"}`}>
                    SECTION {diff.id}
                  </span>
                  <h3 className={`text-2xl font-bold tracking-tight uppercase mb-4 ${isActive ? "text-white" : "text-zinc-300"}`}>
                    {diff.title}
                  </h3>
                  <p className={`leading-relaxed ${isActive ? "text-red-100" : "text-zinc-500"}`}>
                    {diff.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-white border-t-8 border-red-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-red-900 uppercase block mb-4">Areas of Practice</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-200 pb-8">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter uppercase max-w-xl">
                Disciplined focus across critical corporate sectors.
              </h2>
              <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase max-w-xs text-right">
                Comprehensive representation for global and regional entities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-zinc-200">
            {practices.map((practice, idx) => (
              <div 
                key={idx} 
                className="group border-r border-b border-zinc-200 p-8 aspect-square flex flex-col justify-end hover:bg-zinc-950 hover:text-white transition-colors duration-0 cursor-pointer"
              >
                <div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] tracking-widest text-red-500 font-bold uppercase">Section {String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-sm font-bold tracking-tight uppercase leading-snug">
                  {practice}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-zinc-100 border-t border-zinc-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-zinc-300 pb-8">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-red-900 uppercase block mb-4">Firm Insights</span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter uppercase">Legal Briefings.</h2>
            </div>
            <a href="#" className="text-sm font-bold tracking-widest uppercase flex items-center gap-2 text-zinc-900 hover:text-red-700 transition-colors">
              View Directory <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((article, idx) => (
              <div key={idx} className="group bg-white border border-zinc-200 hover:border-zinc-400 transition-colors flex flex-col h-full">
                <div className="aspect-[4/3] bg-zinc-900 relative overflow-hidden">
                  {/* Pseudo-image overlay to make it look dark and institutional */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 mix-blend-multiply opacity-80" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 right-4 bg-red-900 text-white text-[10px] font-bold tracking-widest px-2 py-1 uppercase">
                    {article.cat}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold tracking-tight uppercase leading-snug mb-4 text-zinc-950">
                    {article.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  <a href="#" className="text-xs font-bold tracking-widest uppercase text-red-900 flex items-center gap-2 group-hover:text-red-700">
                    Read Briefing <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-red-900 uppercase block mb-4">Official Correspondence</span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase mb-6">Get in Touch.</h2>
              <p className="text-lg text-zinc-600 mb-12 max-w-md">Let's discuss your matter. Provide preliminary details below, and the appropriate partner will review your inquiry.</p>
            </div>

            <div className="space-y-12 border-t border-zinc-200 pt-12">
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-4">Dubai Chambers</h4>
                <p className="text-sm leading-relaxed text-zinc-900 font-medium">
                  DIFC, Gate Village<br />
                  Building 2, Level 4<br />
                  Dubai, UAE
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-4">Paris Chambers</h4>
                <p className="text-sm leading-relaxed text-zinc-900 font-medium">
                  Avenue des Champs-Élysées, 83<br />
                  75008 Paris<br />
                  France
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <a href="mailto:clerks@miltonhobbs.com" className="text-sm font-bold tracking-widest uppercase hover:text-red-700">clerks@miltonhobbs.com</a>
                <a href="tel:+97140000000" className="text-sm font-bold tracking-widest uppercase text-zinc-500 hover:text-zinc-900">+971 4 000 0000</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-50 p-8 lg:p-12 border border-zinc-200">
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Full Legal Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-red-900 transition-colors rounded-none text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-red-900 transition-colors rounded-none text-sm" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Matter Category</label>
                <select className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-red-900 transition-colors rounded-none text-sm appearance-none">
                  <option>Corporate Structuring</option>
                  <option>Dispute Resolution</option>
                  <option>Mergers & Acquisitions</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2 pt-4">
                <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Preliminary Details</label>
                <textarea rows={5} className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-red-900 transition-colors rounded-none text-sm resize-none" placeholder="Briefly describe the context..."></textarea>
              </div>

              <div className="pt-8">
                <button className="w-full bg-zinc-950 text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-red-900 transition-colors">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 text-white pt-24 pb-12 px-8 lg:px-16 border-t-[12px] border-red-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-zinc-800 pb-16">
            <div className="md:col-span-6 lg:col-span-4">
              <h2 className="text-2xl font-bold tracking-widest uppercase mb-2">Milton Hobbs</h2>
              <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase mb-8">Boutique Corporate Law</p>
              <a href="mailto:clerks@miltonhobbs.com" className="text-sm font-bold tracking-widest uppercase text-zinc-300 hover:text-white">clerks@miltonhobbs.com</a>
            </div>
            
            <div className="md:col-span-3 lg:col-span-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 mb-6">Dubai Chambers</h4>
              <p className="text-sm leading-relaxed text-zinc-400 font-medium">
                DIFC, Gate Village<br />
                Building 2, Level 4<br />
                Dubai, UAE
              </p>
            </div>

            <div className="md:col-span-3 lg:col-span-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 mb-6">Paris Chambers</h4>
              <p className="text-sm leading-relaxed text-zinc-400 font-medium">
                Avenue des Champs-Élysées, 83<br />
                75008 Paris<br />
                France
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-zinc-600">
            <p>&copy; {new Date().getFullYear()} Milton Hobbs. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-300">Terms of Use</a>
              <a href="#" className="hover:text-zinc-300">Cookie Notice</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
