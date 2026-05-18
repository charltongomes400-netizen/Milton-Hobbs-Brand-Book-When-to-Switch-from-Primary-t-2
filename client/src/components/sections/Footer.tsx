import { useState, useEffect } from "react";
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { useLang } from "@/contexts/LanguageContext";
import { insightsCopy, ct } from "@/data/insightsCopy";
import miltonHobbsWordmark from "@assets/image_1776101259071.png";

const navHrefs = ["/", "/firm", "/#expertise", "/insights", "/careers", "/#contact"];
const practiceAreaHrefs = [
  "/expertise/corporate-commercial",
  "/expertise/tax-compliance",
  "/expertise/mergers-acquisitions",
  "/expertise/startups-venture-capital",
  "/expertise/ip-technology",
  "/expertise/real-estate-property",
  "/expertise/employment-labor",
  "/expertise/litigation-disputes",
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", Icon: SiInstagram },
  { name: "LinkedIn",  href: "https://linkedin.com",  Icon: SiLinkedin  },
  { name: "WhatsApp",  href: "https://wa.me",         Icon: SiWhatsapp  },
];

const legalHrefs = ["/privacy-policy", "/cookies", "/terms-of-use", "/not-legal-advice"];

export function Footer() {
  const { lang, t } = useLang();
  const f = insightsCopy.footer;

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
      {/* ── Tagline whisper ── */}
      <div className="max-w-[1400px] mx-auto px-8" style={{ paddingTop: 20, paddingBottom: 16 }}>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.50em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          textAlign: "center",
        }}>
          {ct(f.tagline, lang)}
        </p>
      </div>

      {/* ── Main 4-column grid ── */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4"
          style={{ paddingTop: 28, paddingBottom: 28 }}
        >
          {/* Col 1: Wordmark + description */}
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
              {ct(f.description, lang)}
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
              {ct(f.navigation.label, lang)}
            </p>
            <nav className="flex flex-col gap-2">
              {f.navigation.items.map((item, i) => (
                <a
                  key={i}
                  href={navHrefs[i] ?? "/"}
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
                  {ct(item, lang)}
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
              {ct(f.practiceAreas.label, lang)}
            </p>
            <nav className="flex flex-col gap-2">
              {f.practiceAreas.items.map((item, i) => (
                <a
                  key={i}
                  href={practiceAreaHrefs[i] ?? "/#expertise"}
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
                  {ct(item, lang)}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 4: Contact + Social */}
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
              {ct(f.contact.label, lang)}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${f.contact.email}`}
                data-testid="footer-email"
                style={{ color: "rgba(255,255,255,0.70)", fontSize: 12, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
              >
                {f.contact.email}
              </a>
              {f.contact.phones.map((phone, i) => (
                <a
                  key={i}
                  href={`tel:${phone.value.replace(/\s/g, "")}`}
                  data-testid={`footer-phone-${phone.label.en.toLowerCase()}`}
                  style={{ color: "rgba(255,255,255,0.70)", fontSize: 12, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
                >
                  {phone.value}
                  <span style={{ color: "#FFFFFF", fontSize: 10, marginLeft: 4 }}>{ct(phone.label, lang)}</span>
                </a>
              ))}
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-4" style={{ marginTop: 8 }}>
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFFFFF", transition: "color 0.2s", display: "flex" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom band: clocks · legal ── */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ padding: "10px 0 12px" }}
        >
          {/* Live clocks */}
          <div className="flex items-center gap-5">
            {[
              { label: ct(f.contact.phones[0].label, lang), time: dubaiTime },
              { label: ct(f.contact.phones[1].label, lang), time: parisTime },
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
          <div className="flex flex-col items-start sm:items-end gap-1.5">
            {/* Row 1: JSON legal links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:justify-end">
              {f.legal.map((item, i) => (
                <a
                  key={i}
                  href={legalHrefs[i] ?? "#"}
                  style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}
                >
                  {ct(item, lang)}
                </a>
              ))}
            </div>
            {/* Row 2: additional legal pages */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:justify-end">
              <a href="/attorney-client-disclaimer" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>Attorney-Client Disclaimer</a>
              <a href="/jurisdictional-statements" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>Jurisdictional Statements</a>
              <a href="/conflict-checks" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>Conflict Checks</a>
              <a href="/confidentiality-notice" style={{ color: "rgba(255,255,255,0.60)", fontSize: 10, textDecoration: "none", letterSpacing: "0.04em" }}>Confidentiality Notice</a>
            </div>
            <span style={{ color: "#FFFFFF", fontSize: 10, letterSpacing: "0.04em" }}>{ct(f.copyright, lang)}</span>
          </div>
        </div>

        <p
          data-testid="footer-disclaimer"
          style={{ color: "#FFFFFF", fontSize: 9, lineHeight: 1.6, paddingBottom: 18, maxWidth: "85ch" }}
        >
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
