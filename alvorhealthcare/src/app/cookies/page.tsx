import { Metadata } from "next";
import { Cookie } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Alvor Healthcare",
  description: "How Alvor Healthcare uses cookies and similar tracking technologies on our website.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
              <Cookie className="w-7 h-7" />
            </div>
            <div>
              <h1 className="display-lg font-bold text-neutral-900">Cookie Policy</h1>
              <p className="text-neutral-500">Last updated: January 1, 2025</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container max-w-4xl prose prose-lg prose-neutral max-w-none">
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences, understand how you use the site, and improve your browsing experience.
          </p>

          <h2>How We Use Cookies</h2>
          <p>We use the following types of cookies on our website:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly. These include session cookies and security cookies.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous usage data.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences to provide a personalized experience.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and measure campaign effectiveness.</li>
          </ul>

          <h2>Third-Party Cookies</h2>
          <p>
            We may use third-party services such as Google Analytics to analyze website traffic and user behavior. These providers may set their own cookies on your device. We do not control these cookies and recommend reviewing the privacy policies of these third-party providers.
          </p>

          <h2>Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul>
            <li>Block all cookies</li>
            <li>Delete existing cookies</li>
            <li>Set preferences for specific websites</li>
            <li>Receive notifications when cookies are set</li>
          </ul>
          <p>
            Please note that blocking essential cookies may affect the functionality of our website.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about our use of cookies, please contact us at privacy@alvorhealthcare.com.
          </p>
        </div>
      </section>
    </div>
  );
}
