import Link from "next/link";
import { FileCheck2 } from "lucide-react";
import { LegalCallout, LegalContact, LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description: "The terms that apply when you access and use the Alvor Healthcare website.",
  path: "/terms",
});

const sections = [
  { id: "agreement", title: "Agreement and scope" },
  { id: "healthcare", title: "Healthcare information" },
  { id: "use", title: "Acceptable use" },
  { id: "ownership", title: "Content and intellectual property" },
  { id: "communications", title: "Communications" },
  { id: "third-parties", title: "Third-party services" },
  { id: "disclaimers", title: "Disclaimers and liability" },
  { id: "changes", title: "Changes and termination" },
  { id: "law", title: "Governing law and contact" },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Website terms"
      title="Terms of Use"
      summary="These terms govern access to the Alvor Healthcare website. They are designed for an informational pharmaceutical website and do not create a healthcare-provider relationship."
      updated="July 25, 2026"
      icon={FileCheck2}
      sections={sections}
    >
      <LegalCallout title="Important medical notice" tone="amber">
        This website does not provide medical advice, diagnosis, treatment, emergency support, or a substitute for
        locally approved product labeling and professional judgment.
      </LegalCallout>

      <LegalSection id="agreement" title="1. Agreement and scope">
        <p>
          By accessing or using this website, you agree to these Terms of Use and our{" "}
          <Link href="/privacy" className="font-bold text-blue-700 underline underline-offset-4 dark:text-blue-300">
            Privacy Policy
          </Link>
          . If you do not agree, do not use the website.
        </p>
        <p>
          These terms apply only to this public website and its content. Separate written terms may govern products,
          distribution, employment, clinical activities, professional services, or other dealings with Alvor Healthcare.
          If those terms conflict with these website terms, the specific written terms control for that activity.
        </p>
        <p>
          You must be legally capable of agreeing to these terms. If you use the site for an organization, you represent
          that you are authorized to act for it.
        </p>
      </LegalSection>

      <LegalSection id="healthcare" title="2. Healthcare and product information">
        <p>
          Website content is provided for general educational, corporate, and product-information purposes. It is not
          intended to establish a doctor-patient, pharmacist-patient, or other clinical relationship, and it should not be
          used to make treatment decisions.
        </p>
        <ul>
          <li>Patients and caregivers should consult a qualified doctor, pharmacist, or other healthcare professional.</li>
          <li>Healthcare professionals must use their independent judgment and the current, locally approved prescribing information.</li>
          <li>Indications, warnings, dosage, packaging, registration status, and availability can differ by country.</li>
          <li>Images and summaries may be illustrative and do not replace the label, leaflet, or official regulatory document supplied with a product.</li>
        </ul>
        <p>
          Never delay seeking professional care because of information on this site. For an emergency, contact local
          emergency services. Safety reports and quality complaints may be sent using the contact details on the site, but
          ordinary website or email communications are not an emergency channel.
        </p>
      </LegalSection>

      <LegalSection id="use" title="3. Acceptable use">
        <p>You may access and use the website for lawful, personal, professional, or internal business information purposes. You must not:</p>
        <ul>
          <li>break any applicable law, regulation, export restriction, or third-party right;</li>
          <li>misrepresent your identity, authority, affiliation, or the source of a communication;</li>
          <li>attempt to gain unauthorized access to the site, hosting environment, accounts, systems, or data;</li>
          <li>introduce malware, scrape at a disruptive rate, probe security, bypass access controls, or interfere with availability;</li>
          <li>use site content to promote an unapproved, misleading, or unlawful medical or product claim;</li>
          <li>copy, frame, mirror, or commercially exploit a substantial part of the site except as law permits or we agree in writing; or</li>
          <li>use automated systems in a way that imposes an unreasonable load or prevents others from using the site.</li>
        </ul>
      </LegalSection>

      <LegalSection id="ownership" title="4. Content and intellectual property">
        <p>
          The website and its text, design, graphics, logos, product names, images, downloads, code, and arrangement are
          owned by or licensed to Alvor Healthcare and are protected by applicable intellectual-property laws.
        </p>
        <p>
          We grant you a limited, revocable, non-exclusive, non-transferable permission to access the site and to print or
          download reasonable extracts for lawful personal, professional, or internal business reference. You must retain
          notices and must not imply endorsement, alter the meaning, or use the material for commercial promotion without
          written permission.
        </p>
        <p>
          Third-party names and marks remain the property of their respective owners. Their appearance does not by itself
          imply sponsorship, partnership, or endorsement.
        </p>
      </LegalSection>

      <LegalSection id="communications" title="5. Communications and submissions">
        <p>
          The contact form creates a draft in your email application. A communication is not delivered to Alvor Healthcare
          until you send it through your email provider. Email delivery and confidentiality cannot be guaranteed.
        </p>
        <p>
          Do not send confidential business information, trade secrets, passwords, payment details, or unnecessary
          sensitive personal information through the website or ordinary email. Product safety and quality reports may be
          retained, investigated, and disclosed to regulators or responsible parties as required by law.
        </p>
        <p>
          Unless we have agreed otherwise in writing, ideas, proposals, or other unsolicited business submissions do not
          create a confidential, fiduciary, employment, partnership, or compensation obligation.
        </p>
      </LegalSection>

      <LegalSection id="third-parties" title="6. Third-party services and links">
        <p>
          The site may link to social networks, messaging services, regulators, partners, maps, publications, or other
          external resources. We do not control those services and are not responsible for their availability, security,
          content, products, privacy practices, or terms. Review the third party&apos;s terms before using its service.
        </p>
        <p>
          A link is provided for convenience and does not necessarily mean Alvor Healthcare endorses the linked party or
          every statement on its website.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="7. Disclaimers and limitation of liability">
        <p>
          To the fullest extent permitted by law, the website is provided &ldquo;as is&rdquo; and &ldquo;as
          available.&rdquo; We do not warrant that the site will be uninterrupted, error-free, secure, free of harmful
          components, or that all content will always be complete, current, or suitable for a particular purpose.
        </p>
        <p>
          To the fullest extent permitted by law, Alvor Healthcare and its affiliates, officers, employees, agents, and
          licensors will not be liable for indirect, incidental, special, exemplary, punitive, or consequential loss, or
          for lost profits, revenue, data, goodwill, or business opportunity arising from or related to use of the site.
        </p>
        <p>
          Where liability cannot lawfully be excluded, it is limited to the maximum extent permitted by applicable law.
          Nothing in these terms excludes liability that cannot legally be excluded or limits rights you may have under
          mandatory consumer law.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="8. Changes, availability, and termination">
        <p>
          We may update the site, remove or correct content, suspend access, or revise these terms when reasonably
          necessary. The &ldquo;Last updated&rdquo; date identifies the current version. Changes apply when posted unless
          applicable law requires different notice.
        </p>
        <p>
          We may restrict access if we reasonably believe these terms have been violated or access presents a legal,
          security, or operational risk. Provisions that by their nature should continue after access ends will survive.
        </p>
      </LegalSection>

      <LegalSection id="law" title="9. Governing law, general terms, and contact">
        <p>
          These terms are interpreted under the law that applies to Alvor Healthcare and your use of the website.
          Any dispute will be handled by a court or authority with jurisdiction under applicable law.
        </p>
        <p>
          If a provision is unenforceable, it will be limited or removed only to the minimum extent necessary, and the
          remaining provisions will continue. A failure to enforce a provision is not a waiver. These terms do not create
          third-party beneficiary rights.
        </p>
        <p>For questions about these terms, contact us with the subject &ldquo;Website Terms.&rdquo;</p>
        <LegalContact subject="Website Terms" />
      </LegalSection>
    </LegalPage>
  );
}
