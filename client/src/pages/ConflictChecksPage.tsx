import { LegalPage } from "@/components/LegalPage";

export default function ConflictChecksPage() {
  return (
    <LegalPage title="Conflict Checks">
      <p className="mb-6">
        Milton Hobbs maintains rigorous conflict-checking procedures to ensure compliance with professional obligations and to protect the interests of our clients. This page explains our conflict-check process and your rights as a client or prospective client.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Our Conflict Policy</h2>
      <p className="mb-6">
        We are committed to identifying and managing conflicts of interest in accordance with the rules of professional conduct in all jurisdictions in which we practise. We will not accept an engagement if a conflict of interest prevents us from representing a client with undivided loyalty and independent judgment.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Conflict-Check Procedure</h2>
      <p className="mb-4">
        Before accepting any new engagement, we conduct a comprehensive conflict check that includes:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Searching our client and matter database for existing or former clients with adverse interests</li>
        <li>Reviewing the identities of all parties, subsidiaries, and affiliates involved in the matter</li>
        <li>Assessing whether the proposed engagement would impair our ability to advise existing clients</li>
        <li>Evaluating any personal or business relationships that could create a conflict</li>
        <li>Documenting the results of the conflict check and any waivers obtained</li>
      </ul>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Waiver and Consent</h2>
      <p className="mb-6">
        In certain circumstances, a conflict may be waived with the informed consent of all affected clients. Any such waiver will be documented in writing and will clearly describe the nature of the conflict and the scope of the waiver.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Chinese Walls</h2>
      <p className="mb-6">
        Where permitted by applicable rules and with client consent, we may implement information barriers ("Chinese walls") to manage conflicts. These barriers restrict the flow of confidential information between lawyers working on different matters and are subject to strict monitoring and compliance procedures.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Former Clients</h2>
      <p className="mb-6">
        Our duty of confidentiality to former clients continues after the conclusion of an engagement. We will not accept a new matter adverse to a former client if the matter is substantially related to the former engagement and confidential information obtained during that engagement could be used to the former client's disadvantage.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Ongoing Monitoring</h2>
      <p className="mb-6">
        Conflicts are monitored throughout the life of an engagement. If a conflict arises during the course of representation, we will promptly notify the affected clients and take appropriate action, which may include withdrawing from the engagement.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Your Rights</h2>
      <p className="mb-6">
        You have the right to inquire about our conflict-check procedures at any time. If you believe a conflict of interest exists or may arise, please contact the supervising partner on your matter or our managing partner.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Contact</h2>
      <p>
        For questions about our conflict-check procedures, please contact us at <a href="mailto:contact@miltonhobbs.com" className="text-[#001489] underline hover:text-[#8099FF]">contact@miltonhobbs.com</a>.
      </p>
    </LegalPage>
  );
}
