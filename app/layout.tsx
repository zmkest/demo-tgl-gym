import type { Metadata } from "next";
import { Geist, Anton } from "next/font/google";
import { seo } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),

  title: {
    default: seo.title,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: seo.keywords,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: seo.siteUrl,
    siteName: seo.business.name,
    title: seo.title,
    description: seo.description,
    locale: seo.locale,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: seo.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  ...(seo.googleVerification && {
    verification: {
      google: seo.googleVerification,
    },
  }),

  icons: {
    icon: "/imgs/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": seo.business.type,
  name: seo.business.name,
  description: seo.description,
  url: seo.siteUrl,
  telephone: seo.business.phone,
  ...(seo.business.email && { email: seo.business.email }),
  priceRange: seo.business.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: seo.business.address.street,
    addressLocality: seo.business.address.city,
    addressRegion: seo.business.address.state,
    postalCode: seo.business.address.zip,
    addressCountry: seo.business.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: seo.business.geo.latitude,
    longitude: seo.business.geo.longitude,
  },
  openingHours: seo.business.openingHours,
  image: `${seo.siteUrl}${seo.ogImage}`,
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${anton.variable}`}>
      <head>
        <link rel="icon" href="/imgs/logo.png" type="image/png" sizes="64x64" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
