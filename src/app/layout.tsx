import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";
import WhatsAppFab from "@/components/WhatsAppFab";
import ConsentBanner from "@/components/ConsentBanner";
import ChatWidget from "@/components/ChatWidget";
import JsonLd from "@/components/JsonLd";
import { autoRepairSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "KFZ-Meisterbetrieb in Hamburg-Eimsbüttel | Hamburgs GaRage",
    template: "%s | Hamburgs GaRage",
  },
  description:
    "Hamburgs GaRage – Ihr KFZ-Meisterbetrieb in Hamburg-Eimsbüttel. Inspektion, HU/AU, Bremsen, Reifen, Klima & mehr für alle Marken. Jetzt Termin vereinbaren.",
  alternates: { canonical: "/" },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Hamburgs GaRage",
    url: site.url,
    title: "KFZ-Meisterbetrieb in Hamburg-Eimsbüttel | Hamburgs GaRage",
    description: "Ihr KFZ-Meisterbetrieb in Hamburg-Eimsbüttel. Inspektion, HU/AU, Bremsen, Reifen, Klima & mehr für alle Marken.",
    images: ["/images/schaufenster-werkstatt.webp"],
  },
};

export const viewport: Viewport = { themeColor: "#e11d2a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
        />
        <noscript><style>{`#intro{display:none!important}`}</style></noscript>

        <JsonLd data={autoRepairSchema()} />
        <IntroOverlay />
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
