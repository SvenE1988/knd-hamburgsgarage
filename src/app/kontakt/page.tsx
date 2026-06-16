import type { Metadata } from "next";
import { Container, SectionHeading, Eyebrow } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import MapEmbed from "@/components/MapEmbed";
import GhlForm from "@/components/GhlForm";
import { site, whatsappUrl } from "@/lib/site";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "Kontakt zur Hamburgs GaRage in Hamburg-Eimsbüttel: Osterstraße 62-64. Telefon, WhatsApp, E-Mail, Öffnungszeiten, Anfahrt (U2 Osterstraße) und Terminanfrage.",
  alternates: { canonical: "/kontakt/" },
};

export default function KontaktPage() {
  const crumbs = [{ name: "Start", path: "/" }, { name: "Kontakt", path: "/kontakt/" }];
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="section">
        <Container>
          <SectionHeading as="h1" eyebrow="Kontakt" title="So erreichen Sie uns" intro="Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie das Formular – wir melden uns schnellstmöglich zurück." />

          <div className="split mt-12" style={{ alignItems: "stretch" }}>
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <a className="card" href={`tel:${site.phone.e164}`}><h4 style={{ display: "flex", gap: 8, alignItems: "center" }}><PhoneIcon width={20} height={20} /> Telefon</h4><p style={{ color: "#fff", fontSize: 17 }}>{site.phone.display}</p></a>
              <a className="card" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><h4 style={{ display: "flex", gap: 8, alignItems: "center" }}><WhatsAppIcon width={20} height={20} /> WhatsApp</h4><p style={{ color: "#fff", fontSize: 17 }}>{site.phone.display}</p></a>
              <a className="card" href={`mailto:${site.email}`}><h4 style={{ display: "flex", gap: 8, alignItems: "center" }}><MailIcon width={20} height={20} /> E-Mail</h4><p style={{ color: "#fff", fontSize: 15 }}>{site.email}</p></a>
              <div className="card"><h4 style={{ display: "flex", gap: 8, alignItems: "center" }}><MapPinIcon width={20} height={20} /> Adresse</h4><p style={{ color: "#fff" }}>{site.address.street}<br />{site.address.postalCode} {site.address.city}-{site.address.district}</p></div>
              <div className="card" style={{ gridColumn: "1 / -1" }}><h4 style={{ display: "flex", gap: 8, alignItems: "center" }}><ClockIcon width={20} height={20} /> Öffnungszeiten</h4>
                {site.openingHours.map((h) => <p key={h.days} style={{ color: "#fff" }}><strong>{h.days}:</strong> {h.time}</p>)}
                <p>Andere Zeiten zum Abstellen oder Einschleppen nach Absprache.</p>
              </div>
            </div>
            <div><MapEmbed /></div>
          </div>
        </Container>
      </section>

      <section className="section alt">
        <Container>
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <Eyebrow>Anfahrt</Eyebrow>
              <h2 className="h2">Mitten in Eimsbüttel</h2>
              <p className="lead mt-4">Sie finden uns zentral an der Osterstraße 62-64. Mit dem Auto sind wir aus Hamburg-West gut über die B431/Stresemannstraße erreichbar.</p>
              <p className="mt-4" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                Mit öffentlichen Verkehrsmitteln steigen Sie an der U-Bahn-Haltestelle <strong>Osterstraße (U2)</strong> aus – von dort sind es wenige Gehminuten.
                Benötigen Sie für die Reparaturdauer ein Fahrzeug? Fragen Sie bei der Terminvereinbarung nach unserem Werkstattersatzwagen.
              </p>
            </div>
            <div>
              <Eyebrow>Nachricht senden</Eyebrow>
              <h2 className="h2" style={{ marginBottom: 16 }}>Anfrage &amp; Terminwunsch</h2>
              <GhlForm title="Kontakt- und Terminanfrage" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
