import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/ratgeber";
import { Container, SectionHeading } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ratgeber",
  description:
    "Tipps und Wissen rund ums Auto von Ihrem KFZ-Meisterbetrieb in Hamburg-Eimsbüttel: Inspektion, HU/AU, Reifen, Achsvermessung, Klima, Bremsen und mehr.",
  alternates: { canonical: "/ratgeber/" },
};

export default function RatgeberPage() {
  const crumbs = [{ name: "Start", path: "/" }, { name: "Ratgeber", path: "/ratgeber/" }];
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="section">
        <Container>
          <SectionHeading as="h1" eyebrow="Ratgeber" title="Tipps rund ums Auto" intro="Praktisches Wissen aus unserer Werkstatt in Eimsbüttel – verständlich erklärt." />
          <div className="grid cols-3 mt-12">
            {articles.map((a) => (
              <Link key={a.slug} href={`/ratgeber/${a.slug}/`} className="lcard" style={{ padding: 0, overflow: "hidden" }}>
                <img src={a.heroImage} alt={a.heroAlt} width={600} height={360} loading="lazy" style={{ height: 180, width: "100%", objectFit: "cover" }} />
                <div style={{ padding: "18px 20px" }}>
                  <time style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em" }}>
                    {new Date(a.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}
                  </time>
                  <h3 style={{ marginTop: 8 }}>{a.title}</h3>
                  <p>{a.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
