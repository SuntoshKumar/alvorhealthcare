import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alvorhealthcare.com"),
  title: {
    default: "Alvor Healthcare | Premium Pharmaceutical Products & Healthcare Solutions",
    template: "%s | Alvor Healthcare",
  },
  description:
    "Alvor Healthcare is a pharmaceutical distributor connecting healthcare providers and supply partners with a broad portfolio of medicines and healthcare products.",
  keywords: [
    "pharmaceutical", "healthcare", "medicines", "pharma company",
    "medicine supplier", "pharmaceutical distribution", "pharmaceutical distributor",
  ],
  authors: [{ name: "Alvor Healthcare" }],
  creator: "Alvor Healthcare",
  publisher: "Alvor Healthcare",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alvorhealthcare.com",
    siteName: "Alvor Healthcare",
    title: "Alvor Healthcare | Premium Pharmaceutical Products",
    description: "Pharmaceutical distribution, product sourcing, documentation support, and dependable supply for healthcare organizations.",
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630, alt: "Alvor Healthcare" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvor Healthcare | Premium Pharmaceutical Products",
    description: "A pharmaceutical distributor supporting healthcare organizations with dependable product supply.",
    images: ["/images/og-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthcareOrganization",
              name: "Alvor Healthcare",
              alternateName: "Alvor Healthcare Ltd.",
              url: "https://alvorhealthcare.com",
              description: "Pharmaceutical distributor supporting healthcare organizations with product sourcing, documentation, and dependable supply.",
              logo: "https://alvorhealthcare.com/images/logo.svg",
              foundingDate: "1998",
              numberOfEmployees: "200+",
              areaServed: "Worldwide",
              medicalSpecialty: "Pharmaceutical Distribution",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://linkedin.com/company/alvorhealthcare",
                "https://facebook.com/alvorhealthcare",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased">
        <Providers>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 btn-primary focus-ring">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
