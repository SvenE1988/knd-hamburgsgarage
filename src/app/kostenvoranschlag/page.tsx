import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import GhlForm from "@/components/GhlForm";
import { site, whatsappUrl } from "@/lib/site";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kostenvoranschlag anfragen",
  description:
    "Kostenlosen, unverbindlichen Kostenvoranschlag bei der Hamburgs GaRage in Hamburg-Eimsbüttel anfragen – für Reparatur, Unfallschaden, Lack oder Service.",
  alternates: { canonical: "/kostenvoranschlag/" },
};

export default function KostenvoranschlagPage() {
  const crumbs = [{ name: "Start", path: "/" }, { name: "Kostenvoranschlag", path: "/kostenvoranschlag/" }];
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="section">
        <Container>
          <SectionHeading as="h1" eyebrow="Kostenvoranschlag" title="Unverbindlich anfragen" intro="Schildern Sie uns Ihr Anliegen – wir melden uns mit einer transparenten Einschätzung zurück. Je mehr Angaben, desto genauer." />
          <div className="split mt-12" style={{ alignItems: "start" }}>
            <div>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>Diese Angaben helfen uns für eine schnelle, präzise Rückmeldung:</p>
              <ul className="ticks">
                <li><CheckIcon width={20} height={20} /> Fahrzeug: Marke, Modell, Baujahr (oder HSN/TSN)</li>
                <li><CheckIcon width={20} height={20} /> Kennzeichen und ungefähre Laufleistung</li>
                <li><CheckIcon width={20} height={20} /> Was ist das Anliegen? (Service, Reparatur, Unfall, Lack, Glas)</li>
                <li><CheckIcon width={20} height={20} /> Bei Schäden gern Fotos – am einfachsten per WhatsApp</li>
              </ul>
              <div className="mt-8" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn primary" href={`tel:${site.phone.e164}`}><PhoneIcon width={18} height={18} /> {site.phone.display}</a>
                <a className="btn ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon width={18} height={18} /> Fotos per WhatsApp</a>
              </div>
            </div>
            <div>
              <GhlForm title="Kostenvoranschlag-Anfrage" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
