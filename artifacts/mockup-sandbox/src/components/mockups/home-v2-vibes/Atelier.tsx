import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

export function Atelier() {
  const [activeDiff, setActiveDiff] = useState(0);

  const differentiators = [
    {
      title: "Founder-Led Advisory",
      description: "Our partners are personally involved in every mandate. We do not delegate complexity to junior associates; you receive senior counsel at every critical juncture."
    },
    {
      title: "Strategic Precision",
      description: "We focus exclusively on corporate and commercial matters where our deep domain expertise provides a definitive edge."
    },
    {
      title: "Cross-Border Capability",
      description: "Fluent in the regulatory landscapes of both Europe and the GCC, seamlessly bridging two of the world's most dynamic economic regions."
    },
    {
      title: "Discretion & Trust",
      description: "Operating with the utmost confidentiality, we protect the interests and reputations of family offices, ultra-high-net-worth individuals, and corporate boards."
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
      category: "Compliance",
      title: "Navigating Cross-Border Compliance in the Gulf",
      excerpt: "An overview of evolving regulatory frameworks affecting European entities operating within the GCC.",
      color: "from-[#8B5A2B] to-[#5C3A21]"
    },
    {
      category: "Corporate",
      title: "The Future of Family Business Succession in the UAE",
      excerpt: "Strategic considerations for multi-generational wealth preservation and corporate governance.",
      color: "from-[#6F4E37] to-[#4A3219]"
    },
    {
      category: "Technology",
      title: "Digital Transformation & Data Privacy in the GCC",
      excerpt: "Balancing innovation with emerging data protection regulations across the Emirates.",
      color: "from-[#A0522D] to-[#6E3B22]"
    },
    {
      category: "M&A",
      title: "Strategic M&A Structuring for 2026",
      excerpt: "Anticipating market shifts and regulatory hurdles in cross-border acquisitions.",
      color: "from-[#80461B] to-[#52290B]"
    }
  ];

  return (
    <div className="min-h-screen text-[#2C211A] selection:bg-[#B87333] selection:text-[#F8F5F0] font-sans" style={{ backgroundColor: '#F8F5F0' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Outfit', sans-serif; }
      `}} />

      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 flex justify-between items-center p-8 text-[#F8F5F0] mix-blend-difference">
        <div className="text-xl tracking-wide font-serif">Milton Hobbs</div>
        <div className="flex gap-8 text-sm uppercase tracking-wider font-medium">
          <a href="#" className="hover:text-[#B87333] transition-colors duration-300">Expertise</a>
          <a href="#" className="hover:text-[#B87333] transition-colors duration-300">Insights</a>
          <a href="#" className="hover:text-[#B87333] transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-[100dvh] flex flex-col lg:flex-row">
        {/* Left Dark Panel */}
        <div className="w-full lg:w-[42%] bg-[#1E1510] text-[#F8F5F0] pt-32 pb-16 px-8 md:px-16 flex flex-col justify-between border-r border-[#3E2E24]">
          <div className="max-w-md">
            <div className="text-[#C28E5A] text-xs font-semibold tracking-[0.2em] uppercase mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C28E5A]"></span>
              Boutique Corporate Law
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 font-medium">
              <div className="mb-2 text-[#E8E2D9]">Reason.</div>
              <div className="mb-2 text-[#D3C7B6]">Rigor.</div>
              <div className="text-[#B87333]">Resolution.</div>
            </h1>
            
            <div className="w-16 h-[1px] bg-[#3E2E24] mb-8"></div>
            
            <p className="text-lg text-[#AFA395] font-light leading-relaxed mb-12">
              Milton Hobbs is a boutique corporate law firm delivering clear, composed, and commercially astute counsel. Bridging Europe and the GCC.
            </p>
            
            <button className="group flex items-center gap-4 bg-transparent border border-[#C28E5A] text-[#E8E2D9] px-8 py-4 hover:bg-[#C28E5A] hover:text-[#1E1510] transition-all duration-500 ease-out">
              <span className="uppercase tracking-wider text-sm font-medium">Book a Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 text-xs tracking-widest text-[#8A7E71] uppercase mt-24 animate-pulse">
            Scroll <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        
        {/* Right Light Panel */}
        <div className="w-full lg:w-[58%] bg-[#F8F5F0] flex items-center p-8 md:p-16 relative overflow-hidden">
          {/* Subtle background texture element */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E8E2D9]/40 via-transparent to-transparent opacity-50 pointer-events-none rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

          <div className="w-full max-w-2xl mx-auto relative z-10 space-y-12">
            <div className="font-serif text-3xl md:text-4xl text-[#2C211A] leading-tight mb-16">
              "We provide clarity in complex environments, crafting bespoke legal architectures for our clients' most significant endeavors."
            </div>
            
            <div className="space-y-8">
              {differentiators.map((diff, idx) => (
                <div key={idx} className="flex gap-6 items-start group border-b border-[#E8E2D9] pb-8 last:border-0 cursor-default">
                  <div className="text-xs font-medium text-[#C28E5A] pt-1.5 w-6">{(idx + 1).toString().padStart(2, '0')}</div>
                  <div>
                    <h3 className="font-serif text-xl text-[#2C211A] mb-3 group-hover:text-[#B87333] transition-colors">{diff.title}</h3>
                    <p className="text-[#5A4F46] font-light leading-relaxed text-sm md:text-base">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS SECTION */}
      <section className="bg-[#1E1510] text-[#F8F5F0] py-24 md:py-32 px-8 md:px-16 border-t border-[#3E2E24]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <div className="text-[#C28E5A] text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C28E5A]"></span>
              Why Milton Hobbs
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Counsel built for <span className="text-[#C28E5A] italic">complexity.</span>
            </h2>
            <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#D3C7B6] hover:text-[#C28E5A] transition-colors pb-1 border-b border-[#C28E5A]/30 hover:border-[#C28E5A]">
              Speak to us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {differentiators.map((diff, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDiff(idx)}
                  className={`text-left p-8 transition-all duration-500 border ${
                    activeDiff === idx 
                      ? 'bg-[#F8F5F0] border-[#F8F5F0] text-[#2C211A]' 
                      : 'bg-transparent border-[#3E2E24] text-[#AFA395] hover:border-[#5A4F46]'
                  }`}
                >
                  <h3 className={`font-serif text-xl mb-4 ${activeDiff === idx ? 'text-[#2C211A]' : 'text-[#E8E2D9]'}`}>
                    {diff.title}
                  </h3>
                  <p className={`font-light text-sm leading-relaxed ${activeDiff === idx ? 'text-[#5A4F46]' : 'text-[#8A7E71]'}`}>
                    {diff.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="bg-[#F8F5F0] py-24 md:py-32 px-8 md:px-16 border-t border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-[#C28E5A] text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#C28E5A]"></span>
                Expertise
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2C211A] leading-tight mb-6">
                Our Practice Areas
              </h2>
              <p className="text-[#5A4F46] font-light leading-relaxed text-lg">
                Delivering highly specialized counsel across a focused spectrum of corporate and commercial disciplines.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-[#E8E2D9] border border-[#E8E2D9]">
            {practiceAreas.map((area, idx) => (
              <div 
                key={idx} 
                className="group bg-[#F8F5F0] hover:bg-[#2C211A] p-8 md:p-10 transition-colors duration-500 flex flex-col justify-between aspect-square cursor-pointer"
              >
                <div className="text-xs font-medium text-[#AFA395] group-hover:text-[#8A7E71] transition-colors">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="font-serif text-lg md:text-xl text-[#2C211A] group-hover:text-[#F8F5F0] transition-colors mt-8">
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-[#EAE4D9] py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <div className="text-[#C28E5A] text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#C28E5A]"></span>
                Perspectives
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2C211A] leading-tight">
                Latest Insights
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#5A4F46] hover:text-[#B87333] transition-colors pb-1 border-b border-[#5A4F46]/30 hover:border-[#B87333]">
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, idx) => (
              <a key={idx} href="#" className="group block flex-col h-full bg-[#F8F5F0] border border-[#DCD3C6] hover:border-[#B87333] transition-colors duration-500 overflow-hidden">
                <div className={`h-48 w-full bg-gradient-to-br ${insight.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#2C211A]/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#C28E5A] mb-4">
                    {insight.category}
                  </div>
                  <h3 className="font-serif text-xl text-[#2C211A] mb-4 group-hover:text-[#B87333] transition-colors line-clamp-3">
                    {insight.title}
                  </h3>
                  <p className="text-[#5A4F46] font-light text-sm mb-8 line-clamp-3 flex-grow">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#2C211A] group-hover:text-[#B87333] transition-colors mt-auto pt-4 border-t border-[#E8E2D9]">
                    Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#F8F5F0] py-24 md:py-32 px-8 md:px-16 border-t border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-5/12">
            <div className="text-[#C28E5A] text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C28E5A]"></span>
              Get in Touch
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C211A] leading-tight mb-8">
              Let's discuss your matter.
            </h2>
            <p className="text-[#5A4F46] font-light text-lg mb-16 max-w-md">
              Contact our offices to schedule a confidential consultation with one of our partners.
            </p>
            
            <div className="space-y-12">
              <div>
                <h4 className="font-serif text-xl text-[#2C211A] mb-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C28E5A]" /> Dubai
                </h4>
                <p className="text-[#5A4F46] font-light pl-8">
                  DIFC, Gate Village<br />
                  Building 2, Level 4<br />
                  Dubai, UAE
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-[#2C211A] mb-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C28E5A]" /> Paris
                </h4>
                <p className="text-[#5A4F46] font-light pl-8">
                  Avenue des Champs-Élysées, 83<br />
                  75008 Paris<br />
                  France
                </p>
              </div>
              <div className="pt-8 border-t border-[#E8E2D9] pl-8 space-y-4">
                <a href="mailto:contact@miltonhobbs.com" className="flex items-center gap-3 text-[#5A4F46] hover:text-[#B87333] transition-colors">
                  <Mail className="w-4 h-4 text-[#C28E5A]" /> contact@miltonhobbs.com
                </a>
                <a href="tel:+97140000000" className="flex items-center gap-3 text-[#5A4F46] hover:text-[#B87333] transition-colors">
                  <Phone className="w-4 h-4 text-[#C28E5A]" /> +971 4 000 0000
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 bg-[#FFFFFF] border border-[#E8E2D9] p-8 md:p-12 lg:p-16 shadow-sm">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#8A7E71] font-medium">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-[#DCD3C6] py-3 text-[#2C211A] focus:outline-none focus:border-[#C28E5A] transition-colors rounded-none placeholder:text-[#DCD3C6]" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#8A7E71] font-medium">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-[#DCD3C6] py-3 text-[#2C211A] focus:outline-none focus:border-[#C28E5A] transition-colors rounded-none placeholder:text-[#DCD3C6]" placeholder="jane@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#8A7E71] font-medium">Subject</label>
                <select className="w-full bg-transparent border-b border-[#DCD3C6] py-3 text-[#2C211A] focus:outline-none focus:border-[#C28E5A] transition-colors rounded-none appearance-none cursor-pointer">
                  <option>Corporate & Commercial</option>
                  <option>Mergers & Acquisitions</option>
                  <option>Dispute Resolution</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#8A7E71] font-medium">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-[#DCD3C6] py-3 text-[#2C211A] focus:outline-none focus:border-[#C28E5A] transition-colors rounded-none resize-none placeholder:text-[#DCD3C6]" placeholder="Briefly describe your matter..."></textarea>
              </div>
              
              <button className="bg-[#2C211A] text-[#F8F5F0] px-8 py-4 w-full md:w-auto hover:bg-[#B87333] transition-colors duration-300 uppercase tracking-widest text-sm font-medium mt-8">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1E1510] text-[#AFA395] py-16 px-8 md:px-16 border-t border-[#3E2E24]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
            <div className="md:col-span-12 lg:col-span-4">
              <div className="font-serif text-3xl text-[#F8F5F0] mb-4">Milton Hobbs</div>
              <div className="text-[#C28E5A] text-xs font-semibold tracking-[0.2em] uppercase mb-8">Boutique Corporate Law</div>
              <a href="mailto:contact@miltonhobbs.com" className="hover:text-[#F8F5F0] transition-colors text-sm">contact@miltonhobbs.com</a>
            </div>
            
            <div className="md:col-span-6 lg:col-span-4 lg:pl-16">
              <h5 className="text-[#F8F5F0] font-serif text-lg mb-6">Dubai</h5>
              <p className="font-light text-sm leading-relaxed text-[#8A7E71]">
                DIFC, Gate Village<br />
                Building 2, Level 4<br />
                Dubai, UAE
              </p>
            </div>
            
            <div className="md:col-span-6 lg:col-span-4">
              <h5 className="text-[#F8F5F0] font-serif text-lg mb-6">Paris</h5>
              <p className="font-light text-sm leading-relaxed text-[#8A7E71]">
                Avenue des Champs-Élysées, 83<br />
                75008 Paris<br />
                France
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#3E2E24] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-[#5A4F46]">
            <div>&copy; {new Date().getFullYear()} Milton Hobbs. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#AFA395] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#AFA395] transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-[#AFA395] transition-colors">Legal Notice</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
