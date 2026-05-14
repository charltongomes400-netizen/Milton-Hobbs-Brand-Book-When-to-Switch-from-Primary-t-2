import { LegalPage } from "@/components/LegalPage";

export default function CookieNoticePage() {
  return (
    <LegalPage title="Cookie Notice" lastUpdated="14 May 2026">
      <p className="mb-6">
        This Cookie Notice explains how Milton Hobbs uses cookies and similar tracking technologies on our website. By continuing to browse our site, you consent to our use of cookies as described below.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">What Are Cookies?</h2>
      <p className="mb-6">
        Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you interact with the site, and improve overall functionality.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Types of Cookies We Use</h2>

      <h3 className="font-heading text-[#001489] font-bold text-base mt-6 mb-2">Essential Cookies</h3>
      <p className="mb-4">
        These cookies are necessary for the website to function properly. They enable basic features such as page navigation and access to secure areas. The website cannot operate correctly without these cookies.
      </p>

      <h3 className="font-heading text-[#001489] font-bold text-base mt-6 mb-2">Analytics Cookies</h3>
      <p className="mb-4">
        We use analytics cookies to understand how visitors interact with our website. This helps us identify popular content, measure site performance, and make informed improvements. All data is collected in an aggregated and anonymised form.
      </p>

      <h3 className="font-heading text-[#001489] font-bold text-base mt-6 mb-2">Functionality Cookies</h3>
      <p className="mb-6">
        These cookies enable enhanced functionality and personalisation, such as remembering your language preference or display settings. They may be set by us or by third-party providers whose services we use.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Managing Cookies</h2>
      <p className="mb-4">
        You can control and manage cookies through your browser settings. Most browsers allow you to:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>View cookies stored on your device</li>
        <li>Delete individual or all cookies</li>
        <li>Block cookies from specific websites</li>
        <li>Block all cookies</li>
        <li>Receive alerts when a cookie is being set</li>
      </ul>
      <p className="mb-6">
        Please note that disabling certain cookies may affect the functionality and performance of our website.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Third-Party Cookies</h2>
      <p className="mb-6">
        We may use third-party services (such as analytics providers) that place cookies on your device. These services have their own privacy and cookie policies, which we encourage you to review.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Updates to This Notice</h2>
      <p className="mb-6">
        We may update this Cookie Notice periodically to reflect changes in technology or legal requirements. The date at the top of this page indicates when it was last revised.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Contact</h2>
      <p>
        If you have questions about our use of cookies, please contact us at <a href="mailto:privacy@miltonhobbs.com" className="text-[#001489] underline hover:text-[#8099FF]">privacy@miltonhobbs.com</a>.
      </p>
    </LegalPage>
  );
}
