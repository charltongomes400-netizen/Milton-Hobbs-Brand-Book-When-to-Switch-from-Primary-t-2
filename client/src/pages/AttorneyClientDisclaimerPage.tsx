import { LegalPage } from "@/components/LegalPage";

export default function AttorneyClientDisclaimerPage() {
  return (
    <LegalPage title="Attorney-Client Disclaimer">
      <p className="mb-6">
        This disclaimer sets out the terms under which an attorney-client relationship may be formed with Milton Hobbs, and the circumstances in which such a relationship does not exist.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">When a Relationship Is Formed</h2>
      <p className="mb-4">
        An attorney-client relationship with Milton Hobbs is only established when:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>A written engagement letter or agreement has been executed by both the client and the firm</li>
        <li>The firm has expressly agreed to undertake the specific matter</li>
        <li>Any required conflict checks have been completed satisfactorily</li>
        <li>Any required retainer or advance payment has been received, where applicable</li>
      </ul>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">When No Relationship Exists</h2>
      <p className="mb-6">
        No attorney-client relationship is created by any of the following activities, regardless of the nature or content of the communication:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Visiting or browsing this website</li>
        <li>Submitting an enquiry through our contact form</li>
        <li>Sending an unsolicited email to any lawyer at the firm</li>
        <li>Downloading publications, articles, or other content</li>
        <li>Attending a seminar, webinar, or event hosted by the firm</li>
        <li>Initial consultations that have not resulted in a formal engagement</li>
      </ul>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Duties and Obligations</h2>
      <p className="mb-6">
        Once an attorney-client relationship is established, Milton Hobbs owes the client duties of confidentiality, loyalty, competent representation, and communication. These duties are governed by the applicable rules of professional conduct in the relevant jurisdiction.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Multi-Jurisdictional Practice</h2>
      <p className="mb-6">
        Milton Hobbs practises in multiple jurisdictions, including the United Arab Emirates and France. The specific rules governing the attorney-client relationship will depend on the jurisdiction in which the legal services are being provided and the applicable local regulations.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Termination</h2>
      <p className="mb-6">
        Either party may terminate the attorney-client relationship in accordance with the terms of the engagement agreement and applicable professional rules. Upon termination, the firm will return client files and property as required by law.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Questions</h2>
      <p>
        If you are uncertain whether an attorney-client relationship exists, or if you have questions about these terms, please contact us at <a href="mailto:contact@miltonhobbs.com" className="text-[#001489] underline hover:text-[#8099FF]">contact@miltonhobbs.com</a>.
      </p>
    </LegalPage>
  );
}
