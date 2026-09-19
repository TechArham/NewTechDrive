import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TechDrive - Digital Transformation & Software Engineering Solutions",
    template: "%s | TechDrive"
  },
  description: "Leading technology partner delivering innovative software engineering, product design, AI solutions, and interior design services. Transform your business with scalable, cutting-edge digital solutions.",
  keywords: ["software engineering", "product design", "AI solutions", "AI automation", "interior design", "AutoCAD", "3D visualization", "digital transformation", "cloud computing", "web development", "mobile apps", "machine learning"],
  authors: [{ name: "TechDrive" }],
  creator: "TechDrive",
  publisher: "TechDrive",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techdrive.com",
    siteName: "TechDrive",
    title: "TechDrive - Digital Transformation & Software Engineering Solutions",
    description: "Leading technology partner delivering innovative software engineering, product design, AI solutions, and interior design services.",
    images: [
      {
        url: "/img/hero-slide-1.png",
        width: 1200,
        height: 630,
        alt: "TechDrive - Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechDrive - Digital Transformation & Software Engineering Solutions",
    description: "Leading technology partner delivering innovative software engineering, product design, AI solutions, and interior design services.",
    images: ["/img/hero-slide-1.png"],
    creator: "@techdrive",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://techdrive.com" />
        <meta name="theme-color" content="#11111a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TechDrive",
              "url": "https://techdrive.com",
              "logo": "https://techdrive.com/img/logo.png",
              "description": "Leading technology partner delivering innovative software engineering, product design, AI solutions, and consulting services.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/techdrive",
                "https://linkedin.com/company/techdrive",
                "https://github.com/techdrive"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["English"]
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
