import { Accessibility } from "lucide-react";
import { LegalCallout, LegalContact, LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Accessibility Statement",
  description: "Alvor Healthcare's accessibility commitment, current measures, known limitations, and feedback process.",
  path: "/accessibility",
});

const sections = [
  { id: "commitment", title: "Our commitment" },
  { id: "standard", title: "Standard and status" },
  { id: "measures", title: "Measures in place" },
  { id: "limitations", title: "Known limitations" },
  { id: "compatibility", title: "Compatibility" },
  { id: "feedback", title: "Feedback and assistance" },
  { id: "assessment", title: "Assessment and updates" },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Inclusive access"
      title="Accessibility Statement"
      summary="Our goal is to make Alvor Healthcare's website understandable, navigable, and usable by the widest practical range of people, devices, and assistive technologies."
      updated="July 25, 2026"
      icon={Accessibility}
      sections={sections}
    >
      <LegalCallout title="Accessibility is an ongoing responsibility, not a one-time claim." tone="teal">
        If any content or interaction prevents you from getting information, tell us. We will work with you to provide
        the information through a reasonable alternative.
      </LegalCallout>

      <LegalSection id="commitment" title="1. Our commitment">
        <p>
          Alvor Healthcare is committed to providing a website that supports people with visual, hearing, motor,
          cognitive, speech, and neurological disabilities. We aim to include accessibility in design, content, and
          engineering decisions and to address reported barriers in a practical and timely way.
        </p>
        <p>
          This statement applies to the public Alvor Healthcare website. Third-party destinations reached through external
          links are controlled by their respective owners.
        </p>
      </LegalSection>

      <LegalSection id="standard" title="2. Standard and current status">
        <p>
          We use the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA as our target. WCAG organizes accessibility
          around content that is perceivable, operable, understandable, and robust.
        </p>
        <p>
          We are working toward that target, but we do not currently make a formal claim that every page and document
          fully conforms to WCAG 2.2 AA. This wording is intentional: a reliable conformance claim requires representative
          testing across content, browsers, and assistive technologies.
        </p>
      </LegalSection>

      <LegalSection id="measures" title="3. Measures currently in place">
        <p>The website includes measures intended to support accessible use, including:</p>
        <ul>
          <li>a skip link and semantic header, navigation, main-content, section, and footer landmarks;</li>
          <li>logical headings, descriptive page titles, and consistent navigation labels;</li>
          <li>keyboard-operable links, controls, menus, filters, accordions, and visible focus indicators;</li>
          <li>programmatic form labels, validation messages, status announcements, and required-field guidance;</li>
          <li>text alternatives for meaningful images and hidden treatment for decorative graphics;</li>
          <li>responsive layouts that support browser zoom and reflow across phone, tablet, and desktop widths;</li>
          <li>light and dark display modes with a system-preference option; and</li>
          <li>reduced or removed animation when the device requests reduced motion.</li>
        </ul>
      </LegalSection>

      <LegalSection id="limitations" title="4. Known limitations">
        <p>Despite our efforts, some barriers may remain:</p>
        <ul>
          <li>product brochures or other downloadable documents may be unavailable or may not yet have complete document accessibility;</li>
          <li>complex animated, filtering, or carousel interfaces may behave differently with some assistive-technology combinations;</li>
          <li>older content may contain incomplete alternative text, heading structure, or color-contrast treatment; and</li>
          <li>external social, messaging, map, or linked services may not meet the same accessibility target.</li>
        </ul>
        <p>
          If a document is inaccessible or a feature does not work for you, request the information in an alternative
          format using the contact details below.
        </p>
      </LegalSection>

      <LegalSection id="compatibility" title="5. Technical compatibility">
        <p>
          The website is designed for current versions of major browsers and for common platform accessibility features,
          including keyboard navigation, screen readers, browser zoom, high-contrast settings, and reduced-motion
          preferences. Results can vary with older browsers, unsupported operating systems, browser extensions, or unusual
          combinations of assistive technology.
        </p>
        <p>
          For the best experience, use an up-to-date browser and operating system. No specific assistive technology is
          required to contact us for help.
        </p>
      </LegalSection>

      <LegalSection id="feedback" title="6. Feedback and assistance">
        <p>
          We welcome reports about accessibility barriers. Please include the page address, a short description of the
          problem, the browser or assistive technology used if relevant, and the format or outcome you need. Do not include
          unnecessary medical or confidential information.
        </p>
        <p>
          We will review the report, acknowledge it when contact details are provided, and work toward a reasonable
          response or alternative. Resolution time depends on the nature and technical complexity of the issue.
        </p>
        <LegalContact subject="Accessibility Feedback" />
      </LegalSection>

      <LegalSection id="assessment" title="7. Assessment and statement updates">
        <p>
          Our accessibility approach includes semantic implementation, code review, keyboard-conscious interaction design,
          responsive testing, and remediation of issues identified during development or reported by users. A formal
          independent conformance audit has not been represented as completed in this statement.
        </p>
        <p>
          We will update this statement when the site, our assessment status, known limitations, or contact process changes.
          The date at the top identifies the current version.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
