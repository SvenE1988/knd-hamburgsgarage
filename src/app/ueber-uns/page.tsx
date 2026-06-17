import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading, Eyebrow, Button } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die Hamburgs GaRage ist Ihr inhabergeführter KFZ-Meisterbetrieb mitten in Hamburg-Eimsbüttel. Lernen Sie unser Team und unsere Werte kennen.",
  alternates: { canonical: "/ueber-uns/" },
};

const gallery: [string, string][] = [
  ["/images/werkstatt-01.webp", "Reparaturannahme der Hamburgs GaRage in Hamburg-Eimsbüttel"],
  ["/images/werkstatt-02.webp", "Blick in die geräumige Werkstatthalle in Hamburg-Eimsbüttel"],
  ["/images/werkstatt-08.webp", "Hochwertiges Werkzeug in der Werkstatt der Hamburgs GaRage"],
  ["/images/werkstatt-07.webp", "Werkstattbetrieb der Hamburgs GaRage in Hamburg-Eimsbüttel"],
];

export default function UeberUnsPage() {
  const crumbs = [{ name: "Start", path: "/" }, { name: "Über uns", path: "/ueber-uns/" }];
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="section">
        <Container>
          <div className="split">
            <div>
              <SectionHeading as="h1" eyebrow="Über uns" title="Ihr Meisterbetrieb mitten in Eimsbüttel" intro="Die Hamburgs GaRage ist eine inhabergeführte freie Werkstatt an der Osterstraße. Solides Handwerk trifft moderne Technik – und ein ehrlicher Umgang mit Ihnen und Ihrem Auto." />
              <p className="mt-6" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                Als Meisterbetrieb betreuen wir alle gängigen Marken und Modelle. Wir arbeiten nach Herstellervorgaben,
                verwenden Originalteile in Erstausrüsterqualität und erklären Ihnen verständlich, was an Ihrem Fahrzeug zu tun ist – und was nicht.
              </p>
              <ul className="ticks">
                <li><CheckIcon width={20} height={20} /> Inhabergeführt von Rade Stojkovic und Gabor Böhm</li>
                <li><CheckIcon width={20} height={20} /> Eingespieltes, geschultes Team mit Leidenschaft fürs Handwerk</li>
                <li><CheckIcon width={20} height={20} /> Fest verwurzelt im Stadtteil Eimsbüttel</li>
              </ul>
              <div className="mt-8"><Button href="/leistungen/" withArrow>Unsere Leistungen</Button></div>
            </div>
            <div className="imgcard" style={{ minHeight: 460 }}>
              <Image src="/images/eimsbuettel-altbau.webp" alt="Typischer Eimsbütteler Altbau in der Nachbarschaft der Hamburgs GaRage" width={1100} height={1400} priority sizes="(max-width: 860px) 100vw, 600px" />
            </div>
          </div>
        </Container>
      </section>

      <section className="section alt">
        <Container>
          <SectionHeading center eyebrow="Wofür wir stehen" title="Unsere Werte" />
          <div className="grid cols-3 mt-12">
            {[
              ["Ehrlichkeit", "Transparente Preise und nur die Arbeiten, die wirklich nötig sind."],
              ["Qualität", "Meisterhafte Ausführung mit Originalteilen und moderner Technik."],
              ["Nähe", "Persönlicher Kontakt statt Hotline – mitten in Eimsbüttel."],
            ].map(([t, d]) => (
              <div className="card center" key={t}><h4>{t}</h4><p>{d}</p></div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="split">
            <div className="imgcard" style={{ background: "#000", minHeight: 320 }}>
              <video controls preload="metadata" poster="/images/hero-poster.webp" style={{ width: "100%", height: "100%" }}>
                <source src="/videos/intro.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <Eyebrow>Einblick</Eyebrow>
              <h2 className="h2">Lernen Sie uns kennen</h2>
              <p className="lead mt-4">Ein kurzer Blick hinter die Kulissen der Hamburgs GaRage. Fragen zu Ihrem Fahrzeug oder einen Termin? Rufen Sie uns einfach an.</p>
              <div className="mt-6"><Button href={`tel:${site.phone.e164}`}>Jetzt anrufen: {site.phone.display}</Button></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section alt">
        <Container>
          <SectionHeading eyebrow="Einblicke" title="Aus unserer Werkstatt" />
          <div className="grid cols-4 mt-8">
            {gallery.map(([src, alt]) => (
              <div className="imgcard" key={src} style={{ height: 220 }}>
                <Image src={src} alt={alt} width={600} height={450} sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 280px" style={{ height: "100%" }} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
