import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Terminal, Globe, Maximize, Clock, Shield, Briefcase, ChevronRight, Database } from "lucide-react";

export function Signal() {
  const [activeDiff, setActiveDiff] = useState(0);

  const differentiators = [
    {
      title: "Founder-Led Advisory",
      desc: "Direct access to senior partners. No layered bureaucracy. Maximum accountability."
    },
    {
      title: "Strategic Precision",
      desc: "Data-driven legal frameworks. Quantifiable risk assessment. Tactical execution."
    },
    {
      title: "Cross-Border Capability",
      desc: "Seamless regulatory navigation between European markets and GCC jurisdictions."
    },
    {
      title: "Discretion & Trust",
      desc: "Encrypted communications protocols. Absolute confidentiality in sensitive transactions."
    }
  ];

  const practiceAreas = [
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
  ];

  const insights = [
    {
      category: "COMPLIANCE",
      title: "Navigating Cross-Border Compliance in the Gulf",
      excerpt: "Regulatory divergence and synthesis in the evolving GCC financial landscape."
    },
    {
      category: "CORPORATE",
      title: "The Future of Family Business Succession in the UAE",
      excerpt: "Structural imperatives for generational wealth transfer and governance."
    },
    {
      category: "TECHNOLOGY",
      title: "Digital Transformation & Data Privacy in the GCC",
      excerpt: "Adapting to new data sovereignty mandates across federal and free zone jurisdictions."
    },
    {
      category: "M&A",
      title: "Strategic M&A Structuring for 2026",
      excerpt: "Valuation adjustments and risk allocation in high-interest environments."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#00f0ff] selection:text-black">
      {/* Navigation Bar - Terminal Style */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-black text-white border-b border-zinc-800 uppercase text-xs font-mono tracking-wider">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#00f0ff]" />
          <span className="font-bold tracking-widest text-[#00f0ff]">MILTON HOBBS</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-[#00f0ff] transition-colors">Firm</a>
          <a href="#" className="hover:text-[#00f0ff] transition-colors">Practice</a>
          <a href="#" className="hover:text-[#00f0ff] transition-colors">Insights</a>
          <a href="#" className="hover:text-[#00f0ff] transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-zinc-500">SYS.ON</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row min-h-[90vh] border-b border-black">
        {/* Left Panel - Dark (~42%) */}
        <div className="w-full lg:w-[42%] bg-black text-white flex flex-col justify-between p-8 lg:p-16 border-r border-zinc-800 relative overflow-hidden">
          {/* Grid background effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-12 border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] text-xs font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
              Boutique Corporate Law
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-8">
              <div className="hover:text-[#00f0ff] transition-colors cursor-default">REASON.</div>
              <div className="hover:text-[#00f0ff] transition-colors cursor-default">RIGOR.</div>
              <div className="hover:text-[#00f0ff] transition-colors cursor-default">RESOLUTION.</div>
            </h1>
            
            <div className="h-px w-full bg-zinc-800 my-8"></div>
            
            <p className="text-zinc-400 text-lg lg:text-xl font-mono leading-relaxed max-w-md">
              Milton Hobbs is a boutique corporate law firm delivering clear, composed, and commercially astute counsel. Bridging Europe and the GCC.
            </p>
          </div>

          <div className="relative z-10 mt-16 flex items-center justify-between">
            <button className="group flex items-center gap-3 bg-[#00f0ff] text-black px-6 py-4 text-sm font-mono font-bold uppercase tracking-widest hover:bg-white transition-colors">
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-zinc-600 flex flex-col items-end text-xs font-mono">
              <span>LAT: 25.2048° N</span>
              <span>LON: 55.2708° E</span>
            </div>
          </div>
        </div>

        {/* Right Panel - Light (~58%) */}
        <div className="w-full lg:w-[58%] bg-white p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl mx-auto w-full">
            <div className="text-xs font-mono text-zinc-400 mb-8 tracking-widest border-b border-zinc-200 pb-2">DATA.INDEX // DIFFERENTIATORS</div>
            
            <div className="space-y-0 border-t border-zinc-200">
              {differentiators.map((diff, idx) => (
                <div key={idx} className="group flex items-start gap-6 py-8 border-b border-zinc-200 hover:bg-zinc-50 transition-colors cursor-pointer">
                  <div className="text-xl font-mono font-bold text-zinc-300 group-hover:text-[#00f0ff] transition-colors">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-[#00f0ff] transition-colors">{diff.title}</h3>
                    <p className="text-zinc-500 font-mono text-sm leading-relaxed">{diff.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS SECTION */}
      <section className="bg-black text-white py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-zinc-800 pb-8">
            <div>
              <div className="text-[#00f0ff] font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                <Database className="w-4 h-4" />
                Why Milton Hobbs
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase">Counsel built<br/>for complexity.</h2>
            </div>
            <a href="#" className="flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-[#00f0ff] transition-colors uppercase">
              Speak to us <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
            {differentiators.map((diff, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDiff(idx)}
                className={`text-left p-8 lg:p-12 transition-all duration-300 group ${
                  activeDiff === idx 
                    ? "bg-[#00f0ff] text-black" 
                    : "bg-black text-white hover:bg-zinc-900"
                }`}
              >
                <div className={`font-mono text-sm mb-6 ${activeDiff === idx ? "text-black" : "text-zinc-500"}`}>
                  ID_0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{diff.title}</h3>
                <p className={`font-mono text-sm leading-relaxed ${activeDiff === idx ? "text-black/80" : "text-zinc-400"}`}>
                  {diff.desc}
                </p>
                
                <div className="mt-8 flex justify-end">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                    activeDiff === idx 
                      ? "border-black/20" 
                      : "border-zinc-800 group-hover:border-[#00f0ff]/50"
                  }`}>
                    <ArrowRight className={`w-4 h-4 ${activeDiff === idx ? "text-black" : "text-zinc-600 group-hover:text-[#00f0ff]"}`} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="bg-white text-black py-24 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16 border-b border-zinc-200 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <div className="text-zinc-400 font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                <Maximize className="w-4 h-4" />
                Areas of Operation
              </div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase">Practice Areas</h2>
            </div>
            <p className="text-zinc-500 font-mono text-sm max-w-sm">
              Focused expertise across key commercial sectors. Deploying specialized legal resources where they generate maximum leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-zinc-200 border border-zinc-200">
            {practiceAreas.map((area, idx) => (
              <a 
                href="#" 
                key={idx}
                className="group relative bg-white p-6 aspect-square flex flex-col justify-between hover:bg-black hover:text-[#00f0ff] transition-colors duration-300"
              >
                <div className="font-mono text-xs text-zinc-300 group-hover:text-zinc-700">SEC_{String(idx + 1).padStart(2, '0')}</div>
                <h3 className="font-bold text-lg leading-tight uppercase group-hover:text-white transition-colors">{area}</h3>
                <div className="w-full h-1 bg-transparent group-hover:bg-[#00f0ff] absolute bottom-0 left-0 transition-colors"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-zinc-100 text-black py-24 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-zinc-300 pb-8">
            <div>
              <div className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Market Intelligence
              </div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase">Insights & Analysis</h2>
            </div>
            <a href="#" className="flex items-center gap-2 text-sm font-mono text-zinc-600 hover:text-[#00f0ff] hover:bg-black px-4 py-2 border border-zinc-300 transition-all uppercase">
              View All Data <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((article, idx) => (
              <div key={idx} className="group bg-white border border-zinc-200 flex flex-col hover:border-[#00f0ff] transition-colors">
                {/* Image Placeholder - Terminal Style */}
                <div className="h-48 bg-zinc-900 relative p-4 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="bg-black/50 text-[#00f0ff] text-[10px] font-mono px-2 py-1 border border-[#00f0ff]/30 backdrop-blur-sm">
                      IMG_SYS_READY
                    </span>
                  </div>
                  <div className="relative z-10 text-zinc-500 font-mono text-xs opacity-50">
                    <div>RENDER: {idx * 142}ms</div>
                    <div>SIZE: 1.{idx + 2}MB</div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-mono text-[#00f0ff] bg-black inline-block px-2 py-1 mb-4 self-start font-bold">
                    {article.category}
                  </div>
                  <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-[#00f0ff] transition-colors">{article.title}</h3>
                  <p className="text-zinc-600 font-mono text-sm mb-6 flex-grow leading-relaxed">{article.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase text-black group-hover:text-[#00f0ff] transition-colors mt-auto border-t border-zinc-100 pt-4">
                    Access Report <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white text-black py-24 border-b border-black border-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="text-black font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Secure Communication Channel
            </div>
            <h2 className="text-5xl font-bold tracking-tighter uppercase mb-6">Get in Touch</h2>
            <p className="text-zinc-600 font-mono text-sm mb-12 max-w-md">
              Let's discuss your matter. Initiating secure protocol for preliminary assessment.
            </p>

            <div className="space-y-8 font-mono">
              <div className="border border-zinc-200 p-6 bg-zinc-50 hover:border-black transition-colors">
                <div className="text-xs text-zinc-400 mb-2 uppercase tracking-widest">Office // 01</div>
                <h4 className="font-bold text-lg uppercase mb-2">Dubai</h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  DIFC, Gate Village<br/>
                  Building 2, Level 4<br/>
                  United Arab Emirates
                </p>
              </div>
              <div className="border border-zinc-200 p-6 bg-zinc-50 hover:border-black transition-colors">
                <div className="text-xs text-zinc-400 mb-2 uppercase tracking-widest">Office // 02</div>
                <h4 className="font-bold text-lg uppercase mb-2">Paris</h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  75008<br/>
                  Avenue des Champs-Élysées, 83<br/>
                  France
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200 space-y-2">
                <div className="flex gap-4 text-sm">
                  <span className="text-zinc-400 w-16">EMAIL</span>
                  <a href="mailto:contact@miltonhobbs.com" className="font-bold hover:text-[#00f0ff] transition-colors">contact@miltonhobbs.com</a>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-zinc-400 w-16">PHONE</span>
                  <a href="tel:+97140000000" className="font-bold hover:text-[#00f0ff] transition-colors">+971 4 000 0000</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-8 lg:p-12 font-mono">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-8">
              <span className="text-xs text-[#00f0ff] tracking-widest">TRANSMISSION_FORM</span>
              <span className="text-xs text-zinc-500">256-BIT ENCRYPTION</span>
            </div>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs text-zinc-400 uppercase tracking-widest">Identifier [Name]</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm focus:outline-none focus:border-[#00f0ff] transition-colors text-white placeholder-zinc-700"
                  placeholder="Enter full name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-zinc-400 uppercase tracking-widest">Return Address [Email]</label>
                <input 
                  type="email" 
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm focus:outline-none focus:border-[#00f0ff] transition-colors text-white placeholder-zinc-700"
                  placeholder="Enter email address"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-zinc-400 uppercase tracking-widest">Classification [Subject]</label>
                <div className="relative">
                  <select className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm focus:outline-none focus:border-[#00f0ff] transition-colors text-white appearance-none cursor-pointer">
                    <option>Corporate Advisory</option>
                    <option>Dispute Resolution</option>
                    <option>Real Estate Transaction</option>
                    <option>Other Query</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-zinc-400 uppercase tracking-widest">Payload [Message]</label>
                <textarea 
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm focus:outline-none focus:border-[#00f0ff] transition-colors text-white placeholder-zinc-700 resize-none"
                  placeholder="Enter message details..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#00f0ff] text-black font-bold uppercase tracking-widest py-4 text-sm hover:bg-white transition-colors flex justify-center items-center gap-2 mt-8">
                Transmit Data <Terminal className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-16 pb-8 font-mono border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-16">
            <div className="md:col-span-6">
              <div className="text-2xl font-bold tracking-widest uppercase text-[#00f0ff] mb-2">Milton Hobbs</div>
              <div className="text-sm text-zinc-500 mb-8 uppercase tracking-widest">Boutique Corporate Law</div>
              <a href="mailto:contact@miltonhobbs.com" className="text-lg border-b border-zinc-700 pb-1 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all inline-block">
                contact@miltonhobbs.com
              </a>
            </div>
            
            <div className="md:col-span-3">
              <div className="text-xs text-zinc-600 mb-4 uppercase tracking-widest">Node 01 // Dubai</div>
              <address className="not-italic text-sm text-zinc-400 leading-relaxed">
                DIFC, Gate Village<br/>
                Building 2, Level 4<br/>
                United Arab Emirates
              </address>
            </div>
            
            <div className="md:col-span-3">
              <div className="text-xs text-zinc-600 mb-4 uppercase tracking-widest">Node 02 // Paris</div>
              <address className="not-italic text-sm text-zinc-400 leading-relaxed">
                75008<br/>
                Avenue des Champs-Élysées, 83<br/>
                France
              </address>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-zinc-900 text-xs text-zinc-600 tracking-widest uppercase">
            <div>&copy; {new Date().getFullYear()} MILTON HOBBS. ALL RIGHTS RESERVED.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#00f0ff] transition-colors">Privacy Protocol</a>
              <a href="#" className="hover:text-[#00f0ff] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
