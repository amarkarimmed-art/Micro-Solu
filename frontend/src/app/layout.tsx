import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";

export const metadata: Metadata = {
  title: "Micro-Solu — Plateforme B2B de micro-solutions digitales",
  description: "Décrivez votre problème digital, nous concevons et développons la solution sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">{children}</div>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
