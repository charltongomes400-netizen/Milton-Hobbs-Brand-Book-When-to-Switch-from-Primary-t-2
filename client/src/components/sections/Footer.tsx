import { useState, useEffect } from "react";
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { useLang } from "@/contexts/LanguageContext";
import miltonHobbsWordmark from "@assets/image_1776101259071.png";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;

  const navEntries = [
    { label: t.nav.home,      href: "/" },
    { label: t.nav.firm,      href: "/firm" },
    { label: t.nav.expertise, href: "/#expertise" },
    { label: t.nav.insights,  href: "/#insights" },
    { label: t.nav.careers,   href: "/careers" },
    { label: t.nav.contact,   href: "/#contact" },
  ];

  const practiceAreas = [
    "Corporate & Commercial",
    "Tax & Compliance",
    "Mergers & Acquisitions",
    "Startups & Venture Capital",
    "IP & Technology",
    "Real Estate & Property",
    "Employment & Labor",
    "Litigation & Disputes",
    "Immigration",
    "Arbitration & Mediation",
  ];

  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const fmtTime = (tz: string) =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now);

  const dubaiTime = fmtTime("Asia/Dubai");
  const parisTime = fmtTime("Europe/Paris");

  return (
    <footer id="footer" data-testid="footer" style={{ background: "#001489" }}>
      {/* Motto whisper */}
      <div className="max-w-[1400px] mx-auto px-8" style={{ paddingTop: 16, paddingBottom: 12 }}>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.50em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          textAlign: "left",
        }}>
          Reason&ensp;·&ensp;Rigor&ensp;·&ensp;Resolution
        </p>
      </div>

      {/* Main 4-column grid */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4"
          style={{ paddingTop: 24, paddingBottom: 24, borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* Col 1: Wordmark + tagline */}
          <div className="flex flex-col gap-5">
            <img
              src={miltonHobbsWordmark}
              alt="Milton Hobbs"
              style={{
                width: "clamp(110px, 12vw, 148px)",
                height: "auto",
                filter: "brightness(0) invert(1)",
                display: "block",
              }}
            />
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11,
              color: "#FFFFFF",
              lineHeight: 1.7,
              maxWidth: "28ch",
            }}>
              A boutique international law firm headquartered in Dubai, with offices in Paris.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-4">
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginBottom: 4,
            }}>
              Navigation
            </p>
            <nav className="flex flex-col gap-1.5">
              {navEntries.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "rgba(255,255,255,0.70)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Practice Areas */}
          <div className="flex flex-col gap-4">
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginBottom: 4,
            }}>
              Practice Areas
            </p>
            <nav className="flex flex-col gap-2">
              {practiceAreas.map(area => (
                <a
                  key={area}
                  href="/#expertise"
                  style={{
                    color: "rgba(255,255,255,0.70)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
                >
                  {area}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 4: Contact + Socials */}
          <div className="flex flex-col gap-4">
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginBottom: 4,
            }}>
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${f.email}`}
                data-testid="footer-email"
                style={{ color: "rgba(255,255,255,0.70)", fontSize: 12, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
              >
                {f.email}
              </a>
              <a
                href={`tel:${f.phone}`}
                data-testid="footer-phone-dubai"
                style={{ color: "rgba(255,255,255,0.70)", fontSize: 12, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
              >
                {f.phone} <span style={{ color: "rgba(255,255,255,0.30)", fontSize: 10, marginLeft: 4 }}>Dubai</span>
              </a>
              <a
                href="tel:+33180270067"
                data-testid="footer-phone-paris"
                style={{ color: "rgba(255,255,255,0.70)", fontSize: 12, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
              >
                +33 1 80 27 00 67 <span style={{ color: "rgba(255,255,255,0.30)", fontSize: 10, marginLeft: 4 }}>Paris</span>
              </a>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-4" style={{ marginTop: 8 }}>
              {[
                { href: "https://instagram.com", Icon: SiInstagram, label: "Instagram" },
                { href: "https://linkedin.com",  Icon: SiLinkedin,  label: "LinkedIn"  },
                { href: "https://wa.me",         Icon: SiWhatsapp,  label: "WhatsApp"  },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.40)", transition: "color 0.2s", display: "flex" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.40)")}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom band: clocks · legal */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div
          className="flex flex-row items-center gap-8"
          style={{ padding: "12px 0 14px", borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* Live clocks */}
          <div className="flex items-center gap-5">
            {[
              { label: "Dubai", time: dubaiTime },
              { label: "Paris", time: parisTime },
            ].map((o, i) => (
              <div key={o.label} className="flex items-center gap-2">
                {i > 0 && <span style={{ width: 1, height: 10, background: "rgba(255,255,255,0.30)", marginRight: 6 }} />}
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FFFFFF", flexShrink: 0, display: "inline-block" }} />
                <span style={{ color: "#FFFFFF", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{o.label}</span>
                <span style={{ color: "#FFFFFF", fontSize: 11, fontFamily: "'Plus Jakarta Sans', monospace", letterSpacing: "0.04em", minWidth: "6ch" }}>{o.time}</span>
              </div>
            ))}
          </div>

          {/* Legal links + copyright */}
          <div className="flex flex-col items-start gap-1.5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <a href="/privacy-policy" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>{f.privacy}</a>
              <a href="/cookies" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>{f.cookie}</a>
              <a href="/terms-of-use" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>Terms of Use</a>
              <a href="/not-legal-advice" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>Not Legal Advice</a>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <a href="/attorney-client-disclaimer" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>Attorney-Client Disclaimer</a>
              <a href="/jurisdictional-statements" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>Jurisdictional Statements</a>
              <a href="/conflict-checks" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>Conflict Checks</a>
              <a href="/confidentiality-notice" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>Confidentiality Notice</a>
            </div>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: "0.04em" }}>{f.copyright}</span>
          </div>
        </div>

        <p
          data-testid="footer-disclaimer"
          style={{ color: "rgba(255,255,255,0.35)", fontSize: 9, lineHeight: 1.6, paddingBottom: 14, maxWidth: "85ch" }}
        >
          {f.disclaimer}
        </p>
      </div>
    </footer>
  );
}
