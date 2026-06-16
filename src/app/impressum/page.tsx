import type { Metadata } from "next";
import { Container } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Hamburgs GaRage G.B. & R.S. GmbH, Hamburg-Eimsbüttel.",
  alternates: { canonical: "/impressum/" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Start", path: "/" }, { name: "Impressum", path: "/impressum/" }]} />
      <section className="section">
        <Container narrow>
          <h1 className="h1">Impressum</h1>
          <div className="prose mt-8">
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>{site.legalName}<br />{site.address.street}<br />{site.address.postalCode} {site.address.city}</p>
            <h2>Handelsregister</h2>
            <p>Registergericht: {site.register.court}<br />Registernummer: {site.register.hrb}</p>
            <h2>Vertreten durch</h2>
            <p>{site.owners.join(", ")}</p>
            <h2>Kontakt</h2>
            <p>Telefon: {site.phone.display}<br />E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a></p>
            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>{site.owners[0]}<br />{site.address.street}, {site.address.postalCode} {site.address.city}</p>
            <h2>EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
