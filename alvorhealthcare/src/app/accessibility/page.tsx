import { Metadata } from "next";
import { Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility | Alvor Healthcare",
  description: "Alvor Healthcare's commitment to web accessibility and inclusive design.",
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
              <Eye className="w-7 h-7" />
            </div>
            <div>
              <h1 className="display-lg font-bold text-neutral-900">Accessibility Statement</h1>
              <p className="text-neutral-500">Last updated: January 1, 2025</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container max-w-4xl prose prose-lg prose-neutral max-w-none">
          <h2>Our Commitment</h2>
          <p>
            Alvor Healthcare is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure our website is accessible to all visitors.
          </p>

          <h2>Accessibility Standards</h2>
          <p>
            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines outline best practices for making web content accessible to people with a wide range of disabilities.
          </p>

          <h2>Accessibility Features</h2>
          <p>Our website includes the following accessibility features:</p>
          <ul>
            <li>Clear and consistent navigation structure</li>
            <li>Descriptive alternative text for images</li>
            <li>Proper heading hierarchy for screen reader compatibility</li>
            <li>Sufficient color contrast between text and background</li>
            <li>Keyboard navigable interface</li>
            <li>Resizable text without loss of functionality</li>
            <li>ARIA labels and roles for interactive elements</li>
          </ul>

          <h2>Ongoing Improvements</h2>
          <p>
            We regularly evaluate our website using automated testing tools and manual review to identify and fix accessibility issues. Our development team receives ongoing training on accessible design and development practices.
          </p>

          <h2>Third-Party Content</h2>
          <p>
            While we strive to ensure accessibility across our entire website, some third-party content or services may not be fully accessible. We encourage feedback on any accessibility barriers encountered with third-party content.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you encounter any accessibility barriers on our website or have suggestions for improvement, please contact us:
          </p>
          <ul>
            <li>Email: accessibility@alvorhealthcare.com</li>
            <li>Phone: +1 (555) 123-4567</li>
          </ul>
          <p>
            We aim to respond to accessibility feedback within 5 business days and resolve issues as quickly as possible.
          </p>
        </div>
      </section>
    </div>
  );
}
