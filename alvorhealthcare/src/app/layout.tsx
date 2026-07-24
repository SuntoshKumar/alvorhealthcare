import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alvorhealthcare.com"),
  title: {
    default: "Alvor Healthcare | Premium Pharmaceutical Products & Healthcare Solutions",
    template: "%s | Alvor Healthcare",
  },
  description:
    "Alvor Healthcare is a leading global pharmaceutical company dedicated to improving health through innovative, high-quality medicines. Explore 50+ products across tablets, capsules, syrups, injections, and supplements.",
  keywords: [
    "pharmaceutical", "healthcare", "medicines", "pharma company",
    "drug manufacturer", "WHO GMP certified", "pharmaceutical distributor",
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
    description: "Leading global pharmaceutical company with 50+ high-quality products. WHO GMP certified, trusted by healthcare professionals worldwide.",
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630, alt: "Alvor Healthcare" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvor Healthcare | Premium Pharmaceutical Products",
    description: "Leading global pharmaceutical company with 50+ high-quality products. WHO GMP certified.",
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
      className={`${inter.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthcareOrganization",
              name: "Alvor Healthcare",
              alternateName: "Alvor Healthcare Ltd.",
              url: "https://alvorhealthcare.com",
              description: "Leading global pharmaceutical company dedicated to improving health through innovative, high-quality medicines.",
              logo: "https://alvorhealthcare.com/images/logo.svg",
              foundingDate: "1998",
              numberOfEmployees: "200+",
              areaServed: "Worldwide",
              medicalSpecialty: "Pharmaceutical Manufacturing",
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
