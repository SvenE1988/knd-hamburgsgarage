import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading, Eyebrow } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import GhlForm from "@/components/GhlForm";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Termin vereinbaren",
  description:
    "Termin bei der Hamburgs GaRage in Hamburg-Eimsbüttel vereinbaren – planbare Leistungen online anfragen, HU/AU und Unfallreparatur telefonisch abstimmen.",
  alternates: { canonical: "/termin/" },
};

export default function TerminPage() {
  const crumbs = [{ name: "Start", path: "/" }, { name: "Termin", path: "/termin/" }];
  const bookable = services.filter((s) => s.bookable);
  const byPhone = services.filter((s) => !s.bookable);

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="section">
        <Container>
          <SectionHeading as="h1" eyebrow="Termin" title="Termin vereinbaren" intro="Planbare Leistungen können Sie direkt online anfragen. Für HU/AU und Unfall, Lack & Glas stimmen wir den Termin kurz persönlich mit Ihnen ab." />

          <div className="split mt-12" style={{ alignItems: "start" }}>
            <div>
              <div className="card">
                <h4 style={{ color: "var(--red)" }}>Online anfragen</h4>
                <ul className="ticks" style={{ marginTop: 12 }}>
                  {bookable.map((s) => (
                    <li key={s.slug}><CheckIcon width={18} height={18} /> <Link href={`/leistungen/${s.slug}/`}>{s.navLabel}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="card mt-6">
                <h4>Bitte telefonisch</h4>
                <p>Wegen Koordination (externer Prüfer) bzw. nötiger Begutachtung:</p>
                <ul className="ticks" style={{ marginTop: 12 }}>
                  {byPhone.map((s) => (
                    <li key={s.slug}><CheckIcon width={18} height={18} /> <Link href={`/leistungen/${s.slug}/`}>{s.navLabel}</Link></li>
                  ))}
                </ul>
                <a className="btn primary block mt-6" href={`tel:${site.phone.e164}`}><PhoneIcon width={18} height={18} /> {site.phone.display}</a>
              </div>
            </div>

            <div>
              <Eyebrow>Terminanfrage</Eyebrow>
              <h2 className="h2" style={{ marginBottom: 8 }}>Ihr Wunschtermin</h2>
              <p className="muted" style={{ marginBottom: 16, fontSize: 14 }}>
                Die direkte Online-Buchung über unseren Kalender folgt in Kürze. Bis dahin senden Sie uns einfach Ihre Terminanfrage:
              </p>
              <GhlForm title="Terminanfrage" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
