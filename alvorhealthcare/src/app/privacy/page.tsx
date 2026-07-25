import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { LegalCallout, LegalContact, LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Alvor Healthcare handles personal information when you visit our website or contact our team.",
};

const sections = [
  { id: "scope", title: "Scope and who we are" },
  { id: "information", title: "Information we handle" },
  { id: "use", title: "How we use information" },
  { id: "sharing", title: "When information is disclosed" },
  { id: "retention", title: "Retention and security" },
  { id: "rights", title: "Your privacy rights" },
  { id: "health", title: "Health and safety information" },
  { id: "children", title: "Children and international use" },
  { id: "changes", title: "Changes and contact" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Trust and transparency"
      title="Privacy Policy"
      summary="This policy explains what personal information may be handled when you browse the Alvor Healthcare website, contact us, or follow a link to a third-party service."
      updated="July 25, 2026"
      icon={ShieldCheck}
      sections={sections}
    >
      <LegalCallout title="The current website does not use advertising pixels or first-party analytics cookies.">
        The site stores a theme preference in your browser only when you use the light/dark theme control. See our{" "}
        <Link href="/cookies" className="font-bold text-blue-700 underline underline-offset-4 dark:text-blue-300">
          Cookie Policy
        </Link>{" "}
        for the exact storage details.
      </LegalCallout>

      <LegalSection id="scope" title="1. Scope and who we are">
        <p>
          This Privacy Policy applies to the public Alvor Healthcare website and to personal information we receive when
          you use the contact options provided on it. In this policy, &ldquo;Alvor Healthcare,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to the operator of this website.
        </p>
        <p>
          This policy does not govern independent websites, platforms, or services that we link to. Those services apply
          their own privacy notices when you choose to visit or use them.
        </p>
      </LegalSection>

      <LegalSection id="information" title="2. Information we handle">
        <h3>Information you choose to send</h3>
        <p>
          You may provide your name, email address, phone number, organization, subject, inquiry type, and message when
          contacting us. You may also send product, quality, safety, career, partnership, media, or accessibility
          information in your communication.
        </p>
        <p>
          The website contact form prepares a draft in your device&apos;s email application. The form does not upload or
          submit its contents to Alvor Healthcare through the website. We receive the information only if you review and
          send the email using your email provider.
        </p>

        <h3>Browser preference</h3>
        <p>
          If you select a light, dark, or system theme, the site stores that choice under the key{" "}
          <code>alvor-theme</code> in your browser&apos;s local storage. That value stays on your device and is used only
          to restore your display preference.
        </p>

        <h3>Hosting and request data</h3>
        <p>
          Our hosting and network providers may automatically process ordinary request information needed to deliver and
          protect the site, such as IP address, request date and time, requested page, browser or device type, referrer,
          and security logs. The current public deployment is hosted using GitHub Pages. Alvor Healthcare does not add a
          separate website analytics service to this deployment.
        </p>
      </LegalSection>

      <LegalSection id="use" title="3. How we use information">
        <p>We may use information we receive to:</p>
        <ul>
          <li>respond to your question and route it to the appropriate business, medical, safety, or support contact;</li>
          <li>evaluate product inquiries, quality complaints, adverse-event reports, partnership requests, and job inquiries;</li>
          <li>meet legal, regulatory, pharmacovigilance, recordkeeping, and compliance obligations that apply to us;</li>
          <li>protect the website, our communications, our rights, and the safety of users or others; and</li>
          <li>maintain and improve the clarity, accessibility, security, and operation of the site.</li>
        </ul>
        <p>
          Where applicable law requires a legal basis, we rely on the basis appropriate to the activity, which may include
          your request or consent, steps related to a contract, compliance with law, protection of vital interests, or our
          legitimate interests in operating and protecting our organization.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="4. When information is disclosed">
        <p>We may disclose relevant information only as reasonably necessary to:</p>
        <ul>
          <li>employees and authorized personnel who need it to handle your request;</li>
          <li>service providers supporting email, hosting, security, legal, compliance, or business operations;</li>
          <li>regulators, law enforcement, courts, or other parties when required by law or necessary to protect rights and safety;</li>
          <li>a successor or adviser in connection with a proposed or completed merger, financing, reorganization, or transfer of business assets; or</li>
          <li>another party when you direct us or give valid consent.</li>
        </ul>
        <p>
          Based on the current operation of this website, Alvor Healthcare does not sell personal information or share it
          for cross-context behavioral advertising, and does not use the site to serve targeted advertisements.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="5. Retention and security">
        <p>
          We keep communications and related records only for as long as reasonably necessary for the purpose collected,
          applicable legal or regulatory requirements, dispute resolution, safety reporting, and enforcement of our
          agreements. Retention periods vary according to the type and sensitivity of the information and the reason it is
          needed.
        </p>
        <p>
          We use reasonable administrative, technical, and organizational measures designed to protect information under
          our control. No website, email, transmission, or storage system can be guaranteed completely secure. Do not send
          passwords, payment-card details, government identification numbers, or other information that is not needed for
          your inquiry.
        </p>
        <p>
          The theme preference remains in your browser until you change it, clear site data, or your browser removes it.
          Alvor Healthcare does not receive that stored value.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="6. Your privacy rights">
        <p>
          Depending on where you live and subject to legal exceptions, you may have rights to request access, correction,
          deletion, restriction, portability, or a copy of personal information; object to or opt out of certain
          processing; withdraw consent; or appeal a decision about a privacy request.
        </p>
        <p>
          To make a request, use the contact details below and describe the right you wish to exercise. We may need to
          verify your identity and authority before acting. We will not discriminate against you for exercising a right
          provided by applicable law. You may also contact the data-protection or consumer-protection regulator in your
          jurisdiction.
        </p>
      </LegalSection>

      <LegalSection id="health" title="7. Health and safety information">
        <p>
          This public website is not a patient portal and is not intended for confidential clinical care. If you send
          information about an adverse event, product complaint, or health concern, provide only what is reasonably
          necessary. We may be legally required to retain, evaluate, follow up on, or report certain safety information
          to health authorities.
        </p>
        <LegalCallout title="Do not use this website or ordinary email for a medical emergency." tone="amber">
          Contact local emergency services or a qualified healthcare professional. Website content and email responses do
          not replace medical advice, diagnosis, or treatment.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="children" title="8. Children and international use">
        <p>
          The website is intended for a general and professional audience and is not directed to children under 13. We do
          not knowingly use the site to collect personal information from children. A parent or guardian who believes a
          child has provided information may contact us to request review and deletion.
        </p>
        <p>
          If you access the site from outside the United States, information you send to us may be processed in the United
          States or another country where we or our providers operate. Those countries may have different data-protection
          laws. Where required, we use an appropriate legal mechanism for international transfers.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="9. Changes and contact">
        <p>
          We may revise this policy when the website, our practices, or legal requirements change. The &ldquo;Last
          updated&rdquo; date identifies the current version. Material changes will be presented in a reasonably prominent
          way when required.
        </p>
        <p>
          For privacy questions or rights requests, contact us with the subject &ldquo;Privacy Request.&rdquo;
        </p>
        <LegalContact subject="Privacy Request" />
      </LegalSection>
    </LegalPage>
  );
}
