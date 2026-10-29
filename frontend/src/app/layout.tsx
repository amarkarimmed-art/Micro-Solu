import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/context/NavigationContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.Normina.ma"),
  title: "Normina — Regagnez vos ressources | Solutions numériques ciblées",
  description:
    "Un problème visé. Un coût en moins. Des micro-solutions logicielles ciblées pour éliminer les tâches chronophages et regagner la rentabilité de votre entreprise. www.Normina.ma",
  alternates: {
    canonical: "https://www.Normina.ma",
  },
  openGraph: {
    title: "Normina — Regagnez vos ressources",
    description:
      "Des solutions numériques sur mesure pour éliminer les pertes de temps et les surcoûts opérationnels de votre entreprise.",
    url: "https://www.Normina.ma",
    siteName: "Normina",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Normina — Regagnez vos ressources | Solutions numériques ciblées",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Normina — Regagnez vos ressources",
    description: "Un problème visé. Un coût en moins. Des micro-solutions logicielles ciblées.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Normina",
  "url": "https://www.Normina.ma",
  "telephone": "+212661574247",
  "email": "contact@normina.ma",
  "description": "Des micro-solutions numériques sur mesure pour éliminer les pertes de temps et les surcoûts opérationnels.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Casablanca",
    "addressCountry": "MA"
  },
  "sameAs": [
    "https://www.Normina.ma"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#1A2838] font-sans antialiased selection:bg-[#FF9500]/20 selection:text-[#1A2838]">
        <NavigationProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <FloatingContact />
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
