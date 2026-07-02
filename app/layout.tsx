import type { Metadata } from "next";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/sora/800.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const title =
  "Super Clean JP | Higienização Profissional de Estofados em João Pessoa - PB";
const description =
  "Higienização profissional de sofás, colchões, tapetes, carpetes e bancos automotivos em João Pessoa - PB. Remoção de manchas, ácaros e odores com produtos seguros. Peça seu orçamento pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: title,
    template: "%s | Super Clean JP",
  },
  description,
  keywords: [
    "higienização de estofados João Pessoa",
    "limpeza de sofá João Pessoa",
    "limpeza de colchão João Pessoa",
    "higienização de carpete e tapete",
    "limpeza automotiva estofado",
    "Super Clean JP",
    "lavagem de sofá PB",
  ],
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: "Serviços de limpeza",
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    title,
    description,
    images: [
      {
        url: "/logo.png",
        width: 488,
        height: 482,
        alt: "Logo Super Clean JP",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon-180.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    image: `${BUSINESS.siteUrl}/logo.png`,
    logo: `${BUSINESS.siteUrl}/logo.png`,
    description,
    url: BUSINESS.siteUrl,
    telephone: "+558387168492",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "João Pessoa",
      addressRegion: "PB",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.1195,
      longitude: -34.845,
    },
    areaServed: {
      "@type": "City",
      name: "João Pessoa",
    },
    sameAs: [BUSINESS.instagramUrl],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-[var(--brand-navy)]">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
