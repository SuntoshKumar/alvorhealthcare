import { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Alvor Healthcare",
  description: "Terms and conditions for using the Alvor Healthcare website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h1 className="display-lg font-bold text-neutral-900">Terms of Use</h1>
              <p className="text-neutral-500">Last updated: January 1, 2025</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container max-w-4xl prose prose-lg prose-neutral max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Alvor Healthcare website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our website.
          </p>

          <h2>2. Use of Website</h2>
          <p>You agree to use our website for lawful purposes only and in a manner that does not infringe the rights of others or restrict their use of the website.</p>
          <ul>
            <li>You must not use the website for any fraudulent or unlawful purpose</li>
            <li>You must not interfere with the proper functioning of the website</li>
            <li>You must not attempt to gain unauthorized access to any part of the website</li>
            <li>You must not distribute viruses or harmful code through the website</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of Alvor Healthcare or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
          </p>

          <h2>4. Product Information</h2>
          <p>
            Product information provided on this website is for informational purposes only and does not constitute medical advice. Healthcare professionals should consult official prescribing information and applicable regulations before prescribing any medication. Patients should consult their healthcare provider for medical advice.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Alvor Healthcare shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website. We make no warranties or representations about the accuracy or completeness of the content.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of use of these external sites. Accessing third-party links is at your own risk.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms of Use are governed by and construed in accordance with applicable international laws and regulations. Any disputes arising from these terms shall be resolved through arbitration.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            For questions about these Terms of Use, please contact us at legal@alvorhealthcare.com.
          </p>
        </div>
      </section>
    </div>
  );
}
