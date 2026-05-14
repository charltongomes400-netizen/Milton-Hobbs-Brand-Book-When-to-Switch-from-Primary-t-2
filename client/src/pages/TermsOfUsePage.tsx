import { LegalPage } from "@/components/LegalPage";

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use" lastUpdated="14 May 2026">
      <p className="mb-6">
        These Terms of Use govern your access to and use of the Milton Hobbs website. By accessing or using this website, you agree to be bound by these terms. If you do not agree, please do not use this website.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Use of Website</h2>
      <p className="mb-4">
        This website is provided for informational purposes only. You may browse, download, and print content for personal, non-commercial use, provided you retain all copyright and proprietary notices.
      </p>
      <p className="mb-6">
        You agree not to use this website for any unlawful purpose, nor to transmit any material that is defamatory, offensive, or infringes the rights of others.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Intellectual Property</h2>
      <p className="mb-6">
        All content on this website, including text, graphics, logos, images, and software, is the property of Milton Hobbs or its licensors and is protected by copyright, trademark, and other intellectual property laws. No licence or right is granted except as expressly stated in these terms.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Accuracy of Information</h2>
      <p className="mb-6">
        While we endeavour to keep information on this website accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information contained herein.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">No Legal Advice</h2>
      <p className="mb-6">
        Content on this website does not constitute legal advice and should not be relied upon as such. For advice on specific legal matters, please contact us directly to establish an attorney-client relationship. See our <a href="/not-legal-advice" className="text-[#001489] underline hover:text-[#8099FF]">Not Legal Advice</a> page for further information.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Links to Third-Party Websites</h2>
      <p className="mb-6">
        This website may contain links to external websites. Milton Hobbs is not responsible for the content, privacy practices, or availability of these third-party sites. Such links are provided for convenience and do not imply endorsement.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Limitation of Liability</h2>
      <p className="mb-6">
        To the fullest extent permitted by law, Milton Hobbs shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of this website, even if advised of the possibility of such damages.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Governing Law</h2>
      <p className="mb-6">
        These Terms of Use shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Dubai.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Changes to These Terms</h2>
      <p className="mb-6">
        We reserve the right to modify these Terms of Use at any time. Continued use of the website following any changes constitutes acceptance of the revised terms.
      </p>

      <h2 className="font-heading text-[#001489] font-bold text-lg mt-10 mb-4">Contact</h2>
      <p>
        For questions about these Terms of Use, please contact us at <a href="mailto:contact@miltonhobbs.com" className="text-[#001489] underline hover:text-[#8099FF]">contact@miltonhobbs.com</a>.
      </p>
    </LegalPage>
  );
}
