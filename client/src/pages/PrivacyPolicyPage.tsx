import { LegalPage } from "@/components/LegalPage";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="14 May 2026">
      <p className="mb-6">
        Milton Hobbs is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website or engage our legal services.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information including your name, email address, telephone number, job title, organisation, and any other information you voluntarily provide through our contact forms, job applications, or direct correspondence.
      </p>
      <p className="mb-4">
        We also collect technical data such as IP addresses, browser types, device information, and usage patterns through cookies and analytics tools to improve our website experience.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">How We Use Your Information</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>To respond to enquiries and provide legal services</li>
        <li>To process job applications and recruitment activities</li>
        <li>To send newsletters, publications, and event invitations (with your consent)</li>
        <li>To comply with legal and regulatory obligations</li>
        <li>To improve our website functionality and user experience</li>
      </ul>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Data Retention</h2>
      <p className="mb-6">
        We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Job application data is retained for 24 months unless you request deletion earlier.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Your Rights</h2>
      <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Access your personal data</li>
        <li>Request correction or deletion of your data</li>
        <li>Object to or restrict certain processing activities</li>
        <li>Withdraw consent at any time</li>
        <li>Lodge a complaint with a supervisory authority</li>
      </ul>
      <p className="mb-6">
        To exercise any of these rights, please contact us at <a href="mailto:privacy@miltonhobbs.com" className="text-[#001489] underline hover:text-[#8099FF]">privacy@miltonhobbs.com</a>.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Cookies</h2>
      <p className="mb-6">
        Our website uses cookies to enhance functionality and analyse traffic. You can manage cookie preferences through your browser settings. For more details, please see our <a href="/cookies" className="text-[#001489] underline hover:text-[#8099FF]">Cookie Notice</a>.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Third-Party Processors</h2>
      <p className="mb-6">
        We engage reputable third-party service providers for hosting, analytics, and email delivery. All processors are bound by data processing agreements that ensure appropriate safeguards for your personal data.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Any material changes will be notified on this page with a revised effective date.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Contact Us</h2>
      <p>
        For questions about this Privacy Policy or our data practices, please contact the Data Protection Officer at <a href="mailto:privacy@miltonhobbs.com" className="text-[#001489] underline hover:text-[#8099FF]">privacy@miltonhobbs.com</a>.
      </p>
    </LegalPage>
  );
}
