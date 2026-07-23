import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageLoader } from "@/components/ui/LoadingAnimation";
import { OrganizationStructuredData } from "@/components/ui/StructuredData";
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
  title: {
    default: "Alvor Healthcare | Premium Pharmaceutical Products & Healthcare Solutions",
    template: "%s | Alvor Healthcare",
  },
  description:
    "Alvor Healthcare is a leading global pharmaceutical company dedicated to improving health through innovative, high-quality medicines. Explore our 50+ products across tablets, capsules, syrups, injections, and supplements.",
  keywords: [
    "pharmaceutical",
    "healthcare",
    "medicines",
    "tablets",
    "capsules",
    "injections",
    "syrups",
    "supplements",
    "pharma company",
    "drug manufacturer",
    "WHO GMP certified",
  ],
  authors: [{ name: "Alvor Healthcare" }],
  creator: "Alvor Healthcare",
  publisher: "Alvor Healthcare",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alvorhealthcare.com",
    siteName: "Alvor Healthcare",
    title: "Alvor Healthcare | Premium Pharmaceutical Products",
    description:
      "Leading global pharmaceutical company with 50+ high-quality products. WHO GMP certified, trusted by healthcare professionals worldwide.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Alvor Healthcare - Premium Pharmaceutical Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvor Healthcare | Premium Pharmaceutical Products",
    description:
      "Leading global pharmaceutical company with 50+ high-quality products. WHO GMP certified.",
    images: ["/images/og-image.svg"],
    creator: "@alvorhealthcare",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 antialiased">
        <OrganizationStructuredData />
        <PageLoader />
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 btn-primary"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1 pt-14 lg:pt-16" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}