import type { Metadata } from "next";
import { services } from "@/lib/services";
import { Container, SectionHeading } from "@/components/ui";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Alle Leistungen der Hamburgs GaRage in Hamburg-Eimsbüttel: Inspektion & Wartung, HU/AU, Bremsen, Achsvermessung, Reifenservice, Klima, Unfall/Lack/Glas und Werkstattersatzwagen.",
  alternates: { canonical: "/leistungen/" },
};

export default function LeistungenPage() {
  const crumbs = [{ name: "Start", path: "/" }, { name: "Leistungen", path: "/leistungen/" }];
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="section">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Unsere Leistungen"
            title="Werkstattleistungen in Hamburg-Eimsbüttel"
            intro="Als KFZ-Meisterbetrieb bieten wir das komplette Spektrum rund um Wartung, Sicherheit und Reparatur – für alle Marken. Wählen Sie eine Leistung für Details und Richtpreise."
          />
          <div className="grid cols-3 mt-12">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
