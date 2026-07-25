import type { Metadata } from "next";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { LegalCallout, LegalContact, LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "The cookies and browser storage used by the Alvor Healthcare website.",
};

const sections = [
  { id: "summary", title: "Current use" },
  { id: "definitions", title: "Cookies and local storage" },
  { id: "inventory", title: "Storage inventory" },
  { id: "hosting", title: "Hosting and external services" },
  { id: "controls", title: "Your controls" },
  { id: "changes", title: "Future changes and contact" },
];

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Browser storage"
      title="Cookie Policy"
      summary="A clear inventory of the cookies and similar browser technologies used by the current Alvor Healthcare website."
      updated="July 25, 2026"
      icon={Cookie}
      sections={sections}
    >
      <LegalCallout title="The current Alvor Healthcare website does not set first-party cookies.">
        It does not deploy advertising, remarketing, or first-party analytics cookies. One local-storage value may be
        saved when you choose a display theme.
      </LegalCallout>

      <LegalSection id="summary" title="1. Current use">
        <p>
          This policy describes browser storage used by the website published at the Alvor Healthcare web address. It
          should be read with our{" "}
          <Link href="/privacy" className="font-bold text-blue-700 underline underline-offset-4 dark:text-blue-300">
            Privacy Policy
          </Link>
          .
        </p>
        <p>
          Based on the current site configuration, Alvor Healthcare does not use cookies for advertising, audience
          profiling, cross-site tracking, analytics, login sessions, shopping carts, or payments.
        </p>
      </LegalSection>

      <LegalSection id="definitions" title="2. Cookies and local storage">
        <p>
          A cookie is a small text record a website asks a browser to store and return with later requests. Other browser
          technologies, including local storage, can also save information on a device but operate differently from
          cookies.
        </p>
        <p>
          This site uses local storage for a user-requested display preference. The value is read by the site in your
          browser but is not attached to network requests and is not sent to Alvor Healthcare.
        </p>
      </LegalSection>

      <LegalSection id="inventory" title="3. Storage inventory">
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <caption className="sr-only">Browser storage used by the Alvor Healthcare website</caption>
            <thead className="bg-neutral-50 text-neutral-950 dark:bg-neutral-900 dark:text-white">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">Name</th>
                <th scope="col" className="px-4 py-3 font-bold">Technology</th>
                <th scope="col" className="px-4 py-3 font-bold">Purpose</th>
                <th scope="col" className="px-4 py-3 font-bold">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-200 align-top dark:border-neutral-800">
                <td className="px-4 py-4 font-mono text-xs text-neutral-950 dark:text-white">alvor-theme</td>
                <td className="px-4 py-4">Local storage</td>
                <td className="px-4 py-4">Remembers light, dark, or system display mode after you use the theme control.</td>
                <td className="px-4 py-4">Until you change the setting or clear site data.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The theme value is functional, contains no direct identifier, and is not used to track browsing activity. If
          browser storage is blocked, theme switching can still work for the current visit, but the preference may not be
          remembered.
        </p>
      </LegalSection>

      <LegalSection id="hosting" title="4. Hosting and external services">
        <p>
          The current public site is delivered through GitHub Pages. A hosting provider may process ordinary network and
          security information when delivering a page, but server logs are not the same as a cookie stored by this
          website. See the provider&apos;s privacy documentation for its own practices.
        </p>
        <p>
          The site contains links to third-party destinations such as social networks and WhatsApp. Those services are not
          loaded merely because a link appears on the page. If you follow a link, the third party may use cookies or other
          technologies under its own policy and controls.
        </p>
      </LegalSection>

      <LegalSection id="controls" title="5. Your controls">
        <p>You can control the current site storage in several ways:</p>
        <ul>
          <li>use the header theme button to replace the saved theme choice;</li>
          <li>clear cookies and site data for this website in your browser settings;</li>
          <li>configure your browser to block or limit cookies and local storage; or</li>
          <li>use private-browsing controls, noting that storage behavior varies by browser.</li>
        </ul>
        <p>
          Clearing the <code>alvor-theme</code> value resets the website to its system-based default. Because the current
          site does not set non-essential cookies, it does not display a cookie-consent banner.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="6. Future changes and contact">
        <p>
          If we add analytics, embedded media, advertising, or another technology that requires notice or consent, we will
          update this policy and implement appropriate controls before using it. The &ldquo;Last updated&rdquo; date
          identifies the current inventory.
        </p>
        <p>For questions about browser storage, contact us with the subject &ldquo;Cookie Policy.&rdquo;</p>
        <LegalContact subject="Cookie Policy" />
      </LegalSection>
    </LegalPage>
  );
}
