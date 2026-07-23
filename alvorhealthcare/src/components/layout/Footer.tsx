import Link from "next/link";
import { Mail, Phone, MapPin, Truck, Shield, Award, Leaf, Building2, Globe, Users, HeartPulse, Building } from "lucide-react";
import { clsx } from "clsx";

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zm-.792 22.543H2.545V1.731h18.888v20.812z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24-1.926 1.799-10.784-10.91-1.987 1.731 10.95 10.548-8.317 9.12-2.83-2.684-7.043-8.25 8.192-9.275L22 1.55l-1.756 0.7z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.046V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.617-6.78-6.979-6.98-.1281-.058-1.69-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 7.649 0 12 0 12s0 4.351.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 16.351 24 12 24 12s0-4.351-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Quality Assurance", href: "/about#quality" },
    { label: "Manufacturing", href: "/about#manufacturing" },
    { label: "Certifications", href: "/about#certifications" },
    { label: "Careers", href: "/careers" },
  ],
  products: [
    { label: "All Products", href: "/products" },
    { label: "Tablets", href: "/categories/tablets" },
    { label: "Capsules", href: "/categories/capsules" },
    { label: "Syrups", href: "/categories/syrups" },
    { label: "Injections", href: "/categories/injections" },
    { label: "Supplements", href: "/categories/supplements" },
  ],
  resources: [
    { label: "Healthcare Professionals", href: "/resources/hcp" },
    { label: "Patient Support", href: "/resources/patients" },
    { label: "Clinical Studies", href: "/resources/clinical-studies" },
    { label: "Medical Education", href: "/resources/education" },
    { label: "Product Catalog", href: "/catalog.pdf" },
    { label: "FAQ", href: "/faq" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Distributors", href: "/contact#distributors" },
    { label: "Product Inquiries", href: "/contact#inquiries" },
    { label: "Adverse Events", href: "/contact#safety" },
    { label: "Compliance", href: "/compliance" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const certifications = [
  { name: "WHO GMP", icon: Award },
  { name: "ISO 9001:2015", icon: Shield },
  { name: "FDA Registered", icon: Shield },
  { name: "EMA Compliant", icon: Award },
  { name: "Halal Certified", icon: Leaf },
  { name: "Green Manufacturing", icon: Leaf },
];

const socialLinks = [
  { platform: "LinkedIn", url: "https://linkedin.com/company/alvorhealthcare", icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zm-.792 22.543H2.545V1.731h18.888v20.812z"/></svg> },
  { platform: "Twitter", url: "https://twitter.com/alvorhealthcare", icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24-1.926 1.799-10.784-10.91-1.987 1.731 10.95 10.548-8.317 9.12-2.83-2.684-7.043-8.25 8.192-9.275L22 1.55l-1.756 0.7z"/></svg> },
  { platform: "Facebook", url: "https://facebook.com/alvorhealthcare", icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.046V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { platform: "Instagram", url: "https://instagram.com/alvorhealthcare", icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.617-6.78-6.979-6.98-.1281-.058-1.69-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { platform: "YouTube", url: "https://youtube.com/@alvorhealthcare", icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 7.649 0 12 0 12s0 4.351.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 16.351 24 12 24 12s0-4.351-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
];

const paymentMethods = [
  { name: "Visa", icon: () => <svg className="w-6 h-4" viewBox="0 0 32 20"><text x="0" y="14" fontSize="14" fontWeight="bold" fill="currentColor">VISA</text></svg> },
  { name: "Mastercard", icon: () => <svg className="w-6 h-4" viewBox="0 0 32 20"><text x="0" y="14" fontSize="14" fontWeight="bold" fill="currentColor">MC</text></svg> },
  { name: "Bank Transfer", icon: () => <svg className="w-6 h-4" viewBox="0 0 32 20"><text x="0" y="14" fontSize="12" fill="currentColor">BANK</text></svg> },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300" role="contentinfo">
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2" aria-label="Alvor Healthcare Home">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">Alvor Healthcare</span>
            </Link>
            <p className="text-neutral-400 text-body-md leading-relaxed max-w-xs">
              Dedicated to improving global health through innovative, high-quality pharmaceutical products. 
              Trusted by healthcare professionals worldwide for over 25 years.
            </p>
            <div className="flex items-center gap-6 pt-2">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-400 transition-colors" aria-label={social.platform}>
                  {social.icon()}
                </a>
              ))}
            </div>
          </div>

          <nav className="space-y-4" aria-labelledby="company-heading">
            <h3 id="company-heading" className="font-heading font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-primary-400 transition-colors text-body-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-4" aria-labelledby="products-heading">
            <h3 id="products-heading" className="font-heading font-semibold text-white">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-primary-400 transition-colors text-body-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-4" aria-labelledby="resources-heading">
            <h3 id="resources-heading" className="font-heading font-semibold text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-primary-400 transition-colors text-body-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-4" aria-labelledby="support-heading">
            <h3 id="support-heading" className="font-heading font-semibold text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-primary-400 transition-colors text-body-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4" aria-labelledby="contact-heading">
            <h3 id="contact-heading" className="font-heading font-semibold text-white">Contact Info</h3>
            <address className="not-italic space-y-3 text-body-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>123 Healthcare Boulevard, Medical District, New York, NY 10001, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+18005550123" className="hover:text-primary-400 transition-colors">+1 (800) 555-0123</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@alvorhealthcare.com" className="hover:text-primary-400 transition-colors">info@alvorhealthcare.com</a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-neutral-500 text-sm">Certifications & Standards:</span>
              <div className="flex flex-wrap items-center gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 rounded-full border border-neutral-800">
                    <cert.icon className="w-4 h-4 text-primary-400" aria-hidden="true" />
                    <span className="text-xs font-medium text-neutral-200">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-center gap-4">
              <span className="text-neutral-500 text-sm">Payment Methods:</span>
              <div className="flex items-center gap-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-1 px-3 py-1.5 bg-neutral-900 rounded-lg border border-neutral-800">
                    {method.icon()}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm text-neutral-500">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Use</Link>
              <Link href="/cookies" className="hover:text-primary-400 transition-colors">Cookie Policy</Link>
              <Link href="/accessibility" className="hover:text-primary-400 transition-colors">Accessibility</Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} Alvor Healthcare Inc. All rights reserved.
            </p>
            <p className="text-neutral-600 text-xs mt-1">
              This website is intended for healthcare professionals and informational purposes only. 
              Products may not be available in all markets.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <a href="tel:+18005550123" className="btn-primary shadow-large rounded-full p-3" aria-label="Call us">
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}