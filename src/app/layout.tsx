import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Anton, Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ConsentBanner from "@/components/ConsentBanner";
import ChatWidget from "@/components/ChatWidget";
import JsonLd from "@/components/JsonLd";
import { autoRepairSchema } from "@/lib/schema";
import { site } from "@/lib/site";

// Selbstgehostete Schriften via next/font (kein externer Google-Fonts-Request zur Laufzeit,
// kein Layout-Shift). Die Variablen werden in globals.css als --font-* verwendet.
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-inter", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-archivo", display: "swap" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "KFZ-Meisterbetrieb in Hamburg-Eimsbüttel | Hamburgs GaRage",
    template: "%s | Hamburgs GaRage",
  },
  description:
    "Hamburgs GaRage – Ihr KFZ-Meisterbetrieb in Hamburg-Eimsbüttel. Inspektion, HU/AU, Bremsen, Reifen, Klima & mehr für alle Marken. Jetzt Termin vereinbaren.",
  alternates: { canonical: "/" },
  icons: { icon: "/images/favicon.png", apple: "/images/apple-icon.png" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Hamburgs GaRage",
    url: site.url,
    title: "KFZ-Meisterbetrieb in Hamburg-Eimsbüttel | Hamburgs GaRage",
    description: "Ihr KFZ-Meisterbetrieb in Hamburg-Eimsbüttel. Inspektion, HU/AU, Bremsen, Reifen, Klima & mehr für alle Marken.",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Hamburgs GaRage – KFZ-Meisterbetrieb in Hamburg-Eimsbüttel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KFZ-Meisterbetrieb in Hamburg-Eimsbüttel | Hamburgs GaRage",
    description: "Ihr KFZ-Meisterbetrieb in Hamburg-Eimsbüttel. Inspektion, HU/AU, Bremsen, Reifen, Klima & mehr für alle Marken.",
    images: ["/images/og-default.png"],
  },
};

export const viewport: Viewport = { themeColor: "#e11d2a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${archivo.variable} ${anton.variable}`}>
      <body>
        <JsonLd data={autoRepairSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
        <ConsentBanner />
        <ChatWidget />

        {/* Umami – selbstgehostet, cookieless */}
        <Script defer src={site.umami.src} data-website-id={site.umami.websiteId} strategy="afterInteractive" />
      </body>
    </html>
  );
}
