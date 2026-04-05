import React from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Still() {
  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-black selection:text-white">
      {/* Navigation - Masthead style */}
      <header className="border-b-2 border-black py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-baseline gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight uppercase">Milton Hobbs</h1>
        </div>
        <div className="text-sm md:text-base font-medium tracking-widest uppercase">
          Boutique Corporate Law
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="px-4 md:px-8 py-20 md:py-32 border-b-2 border-black">
          <div className="max-w-6xl">
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-bold leading-[0.9] tracking-tighter mb-12">
              Reason.<br />
              Rigor.<br />
              Resolution.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mt-24">
              <p className="text-2xl md:text-3xl font-medium leading-snug">
                Milton Hobbs is a boutique corporate law firm delivering clear, composed, and commercially astute counsel. Bridging Europe and the GCC.
              </p>
              <div className="flex items-end">
                <button className="bg-black text-white px-8 py-4 text-lg font-bold uppercase tracking-wider flex items-center gap-4">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="border-b-2 border-black">
          <div className="grid md:grid-cols-4">
            <div className="p-4 md:p-8 md:border-r-2 border-black md:col-span-1 border-b-2 md:border-b-0">
              <span className="text-sm font-bold uppercase tracking-widest">Why Milton Hobbs</span>
              <h3 className="text-4xl font-serif font-bold mt-4 leading-tight">Counsel built for complexity.</h3>
            </div>
            
            <div className="md:col-span-3 grid md:grid-cols-2">
              <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">
                <div className="text-5xl font-serif font-bold mb-4 opacity-20">01</div>
                <h4 className="text-2xl font-bold uppercase mb-4">Founder-Led Advisory</h4>
                <p className="text-lg">Direct access to seasoned partners. No delegation to junior associates. Every matter receives our highest level of intellectual rigor.</p>
              </div>
              <div className="p-8 border-b-2 md:border-b-0 border-black">
                <div className="text-5xl font-serif font-bold mb-4 opacity-20">02</div>
                <h4 className="text-2xl font-bold uppercase mb-4">Strategic Precision</h4>
                <p className="text-lg">We do not over-lawyer. We isolate the commercial objective and construct the most direct, unassailable legal pathway to achieve it.</p>
              </div>
              <div className="p-8 border-b-2 md:border-b-0 border-t-2 md:border-r-2 border-black">
                <div className="text-5xl font-serif font-bold mb-4 opacity-20">03</div>
                <h4 className="text-2xl font-bold uppercase mb-4">Cross-Border Capability</h4>
                <p className="text-lg">Seamless integration of European and Middle Eastern legal frameworks. We translate complexity across jurisdictions.</p>
              </div>
              <div className="p-8 border-t-2 border-black">
                <div className="text-5xl font-serif font-bold mb-4 opacity-20">04</div>
                <h4 className="text-2xl font-bold uppercase mb-4">Discretion & Trust</h4>
                <p className="text-lg">Absolute confidentiality. We operate quietly and effectively, protecting our clients' reputations as fiercely as their assets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE AREAS */}
        <section className="px-4 md:px-8 py-20 md:py-32 border-b-2 border-black">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="md:w-1/4 whitespace-nowrap">
              <h3 className="text-sm font-bold uppercase tracking-widest">Practice Areas</h3>
            </div>
            <div className="md:w-3/4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-2xl md:text-3xl font-serif">
                <li className="border-b border-black/20 pb-4">Corporate & Commercial</li>
                <li className="border-b border-black/20 pb-4">Real Estate & Property</li>
                <li className="border-b border-black/20 pb-4">Litigation & Dispute Resolution</li>
                <li className="border-b border-black/20 pb-4">Arbitration & Mediation</li>
                <li className="border-b border-black/20 pb-4">Employment & Labour</li>
                <li className="border-b border-black/20 pb-4">Banking & Finance</li>
                <li className="border-b border-black/20 pb-4">Tax</li>
                <li className="border-b border-black/20 pb-4">Immigration</li>
                <li className="border-b border-black/20 pb-4">Intellectual Property</li>
                <li className="border-b border-black/20 pb-4">Technology & Startups</li>
              </ul>
            </div>
          </div>
        </section>

        {/* INSIGHTS */}
        <section className="border-b-2 border-black">
          <div className="grid md:grid-cols-4">
            <div className="p-4 md:p-8 md:border-r-2 border-black border-b-2 md:border-b-0">
               <h3 className="text-sm font-bold uppercase tracking-widest">Insights & Publications</h3>
            </div>
            <div className="md:col-span-3 flex flex-col">
              {[
                { title: "Navigating Cross-Border Compliance in the Gulf", topic: "Compliance", year: "2025" },
                { title: "The Future of Family Business Succession in the UAE", topic: "Corporate", year: "2025" },
                { title: "Digital Transformation & Data Privacy in the GCC", topic: "Technology", year: "2024" },
                { title: "Strategic M&A Structuring for 2026", topic: "M&A", year: "2024" }
              ].map((insight, i) => (
                <div key={i} className="flex flex-col md:flex-row items-baseline justify-between p-8 border-b-2 last:border-b-0 border-black gap-4 cursor-default">
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-2">{insight.topic}</span>
                    <h4 className="text-2xl md:text-3xl font-serif font-bold">{insight.title}</h4>
                  </div>
                  <div className="text-sm font-bold">{insight.year}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & FOOTER */}
        <section className="bg-black text-white">
          <div className="grid md:grid-cols-2 border-b-2 border-white/20">
            <div className="p-8 md:p-16 lg:p-24 border-b-2 md:border-b-0 md:border-r-2 border-white/20 flex flex-col justify-center">
              <span className="text-sm font-bold uppercase tracking-widest mb-8">Get in Touch</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-12">Let's discuss<br/>your matter.</h2>
              <button className="bg-white text-black px-8 py-4 text-lg font-bold uppercase tracking-wider self-start flex items-center gap-4">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 md:p-16 lg:p-24 grid grid-cols-1 gap-12">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Dubai Office
                </h4>
                <p className="text-xl font-serif opacity-80 leading-relaxed">
                  DIFC, Gate Village<br />
                  Building 2, Level 4<br />
                  Dubai, UAE
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Paris Office
                </h4>
                <p className="text-xl font-serif opacity-80 leading-relaxed">
                  83 Avenue des<br />
                  Champs-Élysées<br />
                  75008 Paris, France
                </p>
              </div>
              <div className="pt-8 border-t-2 border-white/20">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </h4>
                <p className="text-xl font-serif opacity-80">
                  contact@miltonhobbs.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
            <div>&copy; {new Date().getFullYear()} Milton Hobbs. All rights reserved.</div>
            <div className="flex gap-8">
              <span>Legal Notice</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
