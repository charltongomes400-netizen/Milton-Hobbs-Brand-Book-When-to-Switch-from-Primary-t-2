import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Firm", href: "#firm" },
  { label: "Our Expertise", href: "#expertise" },
  { label: "Publications & Insights", href: "#insights" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      data-testid="footer"
      className="bg-[#060B1F] border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 border-b border-white/10">
          <div className="lg:col-span-2 lg:pr-16">
            <p className="text-white font-semibold text-xl tracking-widest uppercase mb-6">
              Milton Hobbs
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm pr-[20%]">
              A boutique corporate law firm delivering clear, composed, and commercially astute counsel. Bridging Europe and the GCC.
            </p>
            <div className="mt-8">
              <a
                href="mailto:contact@miltonhobbs.com"
                data-testid="footer-email"
                className="text-[#C9A84C] text-sm hover:text-[#E8C77A] transition-colors tracking-wide"
              >
                contact@miltonhobbs.com
              </a>
              <p className="text-white/40 text-sm mt-2">+971 4 523 2421</p>
            </div>
          </div>

          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] uppercase font-medium mb-6">
              Dubai, UAE
            </p>
            <address className="not-italic text-white/50 text-sm leading-relaxed pr-[20%]">
              Level 2, The Offices 1
              <br />
              One Central
              <br />
              Dubai World Trade Centre
              <br />
              Dubai, UAE
            </address>
          </div>

          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] uppercase font-medium mb-6">
              Paris, France
            </p>
            <address className="not-italic text-white/50 text-sm leading-relaxed pr-[20%]">
              11, Boulevard Sébastopol
              <br />
              75001 Paris
              <br />
              France
            </address>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/30 hover:text-white/60 text-xs tracking-widest uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-xs tracking-widest uppercase transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs tracking-widest uppercase transition-colors">
              Cookie Notice
            </a>
          </div>
        </div>

        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Milton Hobbs. All rights reserved.
          </p>
          <p
            data-testid="footer-disclaimer"
            className="text-white/20 text-xs max-w-lg text-right leading-relaxed"
          >
            The content of this website does not constitute legal advice and does not create
            an attorney-client relationship. All information is provided for general informational
            purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
