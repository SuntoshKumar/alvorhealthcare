import { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Alvor Healthcare",
  description: "Alvor Healthcare's privacy policy outlines how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h1 className="display-lg font-bold text-neutral-900">Privacy Policy</h1>
              <p className="text-neutral-500">Last updated: January 1, 2025</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container max-w-4xl prose prose-lg prose-neutral max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Alvor Healthcare (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy of all individuals who interact with our website, products, and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you fill out forms on our website.</li>
            <li><strong>Professional Information:</strong> Organization name, job title, and professional credentials when you interact with us as a healthcare professional or business partner.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data collected through cookies and similar technologies.</li>
            <li><strong>Communication Data:</strong> Records of your communications with us, including inquiries, feedback, and support requests.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your personal information for the following purposes:</p>
          <ul>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To process orders, requests, and transactions</li>
            <li>To send marketing communications and updates with your consent</li>
            <li>To improve our website, products, and services</li>
            <li>To comply with legal and regulatory obligations</li>
            <li>To protect our rights, property, and safety</li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist us in operating our business (e.g., hosting, analytics, customer support)</li>
            <li>Regulatory authorities as required by applicable laws and regulations</li>
            <li>Business partners with your consent or as necessary to provide requested services</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and regular security assessments.
          </p>

          <h2>6. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access your personal information held by us</li>
            <li>Correct inaccurate or incomplete personal information</li>
            <li>Delete your personal information under certain circumstances</li>
            <li>Restrict or object to processing of your personal information</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. For more details, please see our <a href="/cookies">Cookie Policy</a>.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
          </p>
          <ul>
            <li>Email: privacy@alvorhealthcare.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Healthcare Avenue, Suite 100, Pharma City, PC 12345</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
