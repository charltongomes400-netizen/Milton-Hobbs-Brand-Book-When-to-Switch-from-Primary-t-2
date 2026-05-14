import { LegalPage } from "@/components/LegalPage";

export default function ConfidentialityNoticePage() {
  return (
    <LegalPage title="Confidentiality Notice">
      <p className="mb-6">
        Milton Hobbs is committed to maintaining the confidentiality of client information in accordance with the highest professional standards and applicable legal obligations. This notice explains our approach to confidentiality and the duties that apply to communications with our firm.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Professional Duty of Confidentiality</h2>
      <p className="mb-6">
        All lawyers at Milton Hobbs are bound by strict duties of confidentiality and professional secrecy. These duties prohibit the disclosure of any information relating to a client's affairs, except with the client's express consent or as required by law. Our confidentiality obligations extend to all members of the firm, including partners, associates, trainees, and support staff.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Attorney-Client Privilege</h2>
      <p className="mb-6">
        Communications between a client and Milton Hobbs that are made for the purpose of seeking or providing legal advice are protected by attorney-client privilege (or equivalent professional secrecy protections) to the extent recognised under the laws of the relevant jurisdiction. This privilege belongs to the client and may only be waived by the client.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">When Privilege May Not Apply</h2>
      <p className="mb-4">
        Attorney-client privilege and professional secrecy may not protect communications in certain circumstances, including:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Communications made before an attorney-client relationship is established</li>
        <li>Communications in furtherance of a crime or fraud</li>
        <li>Disclosures required by court order or statute</li>
        <li>Communications with third parties present (unless they are agents of the client or lawyer)</li>
        <li>Communications where the privilege has been expressly waived by the client</li>
      </ul>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Information Security</h2>
      <p className="mb-6">
        We employ industry-standard technical and organisational measures to protect client information from unauthorised access, disclosure, alteration, or destruction. These measures include encrypted communications, access controls, secure file storage, and regular security assessments.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Third-Party Disclosures</h2>
      <p className="mb-6">
        We do not disclose client information to third parties except where necessary to provide legal services (for example, engaging local counsel, expert witnesses, or regulatory filings), or as required by law. Any such disclosure is made only with client consent or on a need-to-know basis under strict confidentiality obligations.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Cross-Border Transfers</h2>
      <p className="mb-6">
        As an international firm, client data may be transferred between our offices in Dubai and Paris, or to third-party service providers in other jurisdictions. All such transfers are made in compliance with applicable data protection laws, including adequacy decisions and appropriate safeguards where required.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Website Communications</h2>
      <p className="mb-6">
        Communications sent through this website before an attorney-client relationship is established may not be protected by privilege. We recommend against sending highly sensitive or confidential information via the website contact form or unsolicited email. For matters requiring confidentiality, please contact us to arrange a formal engagement.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Breach Reporting</h2>
      <p className="mb-6">
        In the unlikely event of a data breach affecting client information, we will notify affected clients promptly and in accordance with applicable breach notification laws. We will also take immediate steps to mitigate the breach and prevent recurrence.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Contact</h2>
      <p>
        If you have questions about confidentiality or wish to report a concern, please contact us at <a href="mailto:contact@miltonhobbs.com" className="text-[#001489] underline hover:text-[#8099FF]">contact@miltonhobbs.com</a>.
      </p>
    </LegalPage>
  );
}
