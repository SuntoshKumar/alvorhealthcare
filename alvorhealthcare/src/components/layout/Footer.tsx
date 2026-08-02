"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Copy } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaViber, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { categories, companyInfo, siteContent } from "@/data";
import { publicAssetPath } from "@/lib/paths";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    const mailto = `mailto:${companyInfo.contact.email}?subject=${encodeURIComponent("Newsletter Subscription")}&body=${encodeURIComponent(`Please add me to your newsletter mailing list.\n\nEmail: ${newsletterEmail}`)}`;
    window.location.assign(mailto);
    setNewsletterSubmitted(true);
    toast.success("Opening your email app to subscribe...");
  }, [newsletterEmail]);

  const copyNewsletterEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(companyInfo.contact.email);
      toast.success("Email address copied to clipboard");
    } catch {
      toast.error("Unable to copy. Please copy manually: " + companyInfo.contact.email);
    }
  }, []);
  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="relative h-11 w-11">
                <Image
                  src={publicAssetPath("/images/alvor.svg")}
                  alt=""
                  fill
                  className="object-contain drop-shadow-[0_10px_16px_rgba(14,116,144,0.22)]"
                  sizes="44px"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-lg leading-tight block -mb-0.5">Alvor</span>
                <span className="text-[10px] font-medium text-neutral-400 tracking-wider uppercase leading-tight block">Healthcare</span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
              {siteContent.footer.description}
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-neutral-400">
              {companyInfo.contact.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\D/g, "")}`} className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  {phone}
                </a>
              ))}
              <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                {companyInfo.contact.email}
              </a>
              <span className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>{companyInfo.contact.address}, {companyInfo.contact.city}, {companyInfo.contact.country}</span>
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-neutral-300 mb-5">
              Categories
            </h3>
            <ul className="space-y-3">
              {categories
                .sort((a, b) => a.order - b.order)
                .slice(0, 6)
                .map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/categories"
                  className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  +{categories.length - 6} more
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-neutral-300 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-neutral-300 mb-5">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {companyInfo.socialLinks.slice(0, 4).map((link) => {
                const icons: Record<string, React.ReactNode> = {
                  LinkedIn: <FaLinkedinIn className="w-4 h-4" />,
                  Twitter: <FaTwitter className="w-4 h-4" />,
                  Facebook: <FaFacebookF className="w-4 h-4" />,
                  Instagram: <FaInstagram className="w-4 h-4" />,
                  YouTube: <FaYoutube className="w-4 h-4" />,
                };
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-primary-600 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
                    aria-label={link.platform}
                  >
                    {icons[link.platform] || <span className="text-xs font-semibold">{link.platform.charAt(0)}</span>}
                  </a>
                );
              })}
              <a
                href="viber://chat?number=09952845242"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-violet-600 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
                aria-label="Viber"
              >
                <FaViber className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/959952845242"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-green-600 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-neutral-400 mb-3">
              {siteContent.footer.newsletterTitle}
            </h4>
            {newsletterSubmitted ? (
              <div className="flex items-center gap-2 rounded-xl bg-neutral-800 px-3.5 py-2.5 text-sm text-emerald-400">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Thank you! Check your email app.</span>
              </div>
            ) : (
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={siteContent.footer.newsletterPlaceholder}
                  className="flex-1 px-3.5 py-2.5 bg-neutral-800 border border-neutral-700 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Email for newsletter"
                  required
                />
                <button
                  type="submit"
                  className="px-3.5 py-2.5 bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={copyNewsletterEmail}
                className="inline-flex items-center gap-1 text-[10px] text-neutral-500 hover:text-primary-400 transition-colors"
              >
                <Copy className="w-3 h-3" />
                Or email us directly
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Legal">
            {siteContent.footer.legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
