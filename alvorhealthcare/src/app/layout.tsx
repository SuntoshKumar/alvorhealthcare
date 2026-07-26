import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationStructuredData } from "@/components/ui/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alvorhealthcare.com"),
  title: {
    default: "Alvor Healthcare | Pharmaceutical & Healthcare Distribution in Myanmar",
    template: "%s | Alvor Healthcare",
  },
  description:
    "Alvor Healthcare Company Limited imports, markets, and distributes pharmaceutical products, medical supplies, diagnostics, and consumer healthcare products in Myanmar.",
  keywords: [
    "Myanmar pharmaceutical supplier", "Yangon medical equipment", "healthcare distribution Myanmar",
    "medicine supplier", "pharmaceutical distribution", "medical supplies Myanmar",
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
    locale: "en_MM",
    url: "https://alvorhealthcare.com",
    siteName: "Alvor Healthcare",
    title: "Alvor Healthcare | Healthcare Distribution in Myanmar",
    description: "Pharmaceutical products, medical supplies, diagnostics, and consumer healthcare distribution across Myanmar.",
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630, alt: "Alvor Healthcare" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvor Healthcare | Healthcare Distribution in Myanmar",
    description: "A Myanmar healthcare company supporting pharmacies, hospitals, clinics, and healthcare organizations.",
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
        <OrganizationStructuredData />
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
