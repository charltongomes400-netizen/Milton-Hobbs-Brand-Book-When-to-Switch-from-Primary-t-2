import { LegalPage } from "@/components/LegalPage";

export default function NotLegalAdvicePage() {
  return (
    <LegalPage title="Not Legal Advice">
      <p className="mb-6">
        The information provided on this website is for general informational purposes only. It does not constitute legal advice and should not be relied upon as a substitute for professional legal counsel tailored to your specific circumstances.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">No Attorney-Client Relationship</h2>
      <p className="mb-6">
        Accessing, browsing, or using this website, or communicating with Milton Hobbs through this website, does not create an attorney-client relationship. An attorney-client relationship is only established through a formal written engagement agreement signed by both parties.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">No Reliance</h2>
      <p className="mb-6">
        You should not act or refrain from acting based on any information contained on this website without first seeking advice from a qualified legal professional. The law changes frequently, and information on this website may not reflect the most current legal developments.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">General Nature of Content</h2>
      <p className="mb-6">
        Publications, articles, insights, and other content on this website are intended to provide general commentary on legal topics. They are not exhaustive and do not address the specific facts, circumstances, or legal issues that may apply to your situation.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Jurisdictional Variations</h2>
      <p className="mb-6">
        Legal principles and requirements vary across jurisdictions. Information on this website is primarily focused on the laws of the United Arab Emirates, France, and the wider Gulf Cooperation Council. It may not be applicable or accurate in other jurisdictions.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Confidentiality of Communications</h2>
      <p className="mb-6">
        Communications sent through this website or via email before an attorney-client relationship is established may not be protected by attorney-client privilege or professional secrecy obligations. Please exercise caution when sharing sensitive information.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Seek Professional Advice</h2>
      <p className="mb-6">
        For legal advice specific to your situation, please <a href="/" className="text-[#001489] underline hover:text-[#8099FF]">contact us</a> to arrange a consultation. Our lawyers are qualified to provide advice in the jurisdictions in which they practise.
      </p>

      <div className="mt-10 p-6 border-l-2 border-[#001489] bg-[#F5F7FF]">
        <p className="text-[#001489] text-sm font-semibold mb-1">Important Notice</p>
        <p className="text-[#001489]/70 text-sm">
          If you require urgent legal assistance, please contact us directly by telephone rather than relying on website communications.
        </p>
      </div>
    </LegalPage>
  );
}
