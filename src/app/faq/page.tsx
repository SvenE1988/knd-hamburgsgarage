import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ)",
  description:
    "Antworten auf häufige Fragen an die Hamburgs GaRage in Hamburg-Eimsbüttel: Marken, Garantie, Termine, HU/AU, Ersatzwagen, Reifeneinlagerung und Anfahrt.",
  alternates: { canonical: "/faq/" },
};

const faqs = [
  { q: "Repariert ihr alle Automarken?", a: "Ja. Als freie Werkstatt betreuen wir alle gängigen Marken und Modelle – vom Kleinwagen über Kombi und SUV bis zum Transporter." },
  { q: "Bleibt meine Herstellergarantie erhalten?", a: "Ja. Wir führen Inspektionen und Wartungen nach Herstellervorgaben mit Originalersatzteilen in Erstausrüsterqualität durch und dokumentieren sie. Ihre Neuwagen- bzw. Herstellergarantie bleibt erhalten." },
  { q: "Wie vereinbare ich einen Termin?", a: `Am schnellsten telefonisch unter ${site.phone.display} oder per WhatsApp. Für planbare Leistungen können Sie auch online eine Terminanfrage stellen.` },
  { q: "Bekomme ich für die Reparaturzeit ein Ersatzfahrzeug?", a: "Auf Wunsch stellen wir Ihnen einen Werkstattersatzwagen bereit. Bitte fragen Sie diesen bei der Terminvereinbarung an, da die Zahl der Fahrzeuge begrenzt ist." },
  { q: "Macht ihr auch HU und AU?", a: "Ja. Die Abgasuntersuchung führen wir im Betrieb durch, die Hauptuntersuchung nimmt eine amtlich anerkannte Prüforganisation direkt bei uns ab. Diesen Termin koordinieren wir kurz telefonisch." },
  { q: "Kann ich meine Reifen bei euch einlagern?", a: "Ja, wir verfügen über ein eigenes Reifenlager direkt am Betrieb. Sie müssen Ihre Räder nicht transportieren – wir lagern sie ein und montieren sie zum nächsten Saisonwechsel wieder." },
  { q: "Wo finde ich euch und wie sind die Öffnungszeiten?", a: `Sie finden uns in der ${site.address.street}, ${site.address.postalCode} ${site.address.city}-${site.address.district}. Geöffnet ist Montag bis Donnerstag von 8:00 bis 17:15 Uhr und freitags von 8:00 bis 15:15 Uhr.` },
  { q: "Wie komme ich mit öffentlichen Verkehrsmitteln zu euch?", a: "Wir liegen verkehrsgünstig an der Osterstraße. Mit der U-Bahn erreichen Sie uns über die Linie U2, Haltestelle Osterstraße." },
];

export default function FaqPage() {
  const crumbs = [{ name: "Start", path: "/" }, { name: "FAQ", path: "/faq/" }];
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <section className="section">
        <Container narrow>
          <SectionHeading as="h1" eyebrow="FAQ" title="Häufige Fragen" intro="Die wichtigsten Antworten rund um Ihren Werkstattbesuch in Eimsbüttel. Ist Ihre Frage nicht dabei? Rufen Sie uns gern an." />
          <div className="faq mt-12">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}<span className="plus">+</span></summary>
                <p className="ans">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
