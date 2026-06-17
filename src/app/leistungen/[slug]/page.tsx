import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getService, serviceSlugs } from "@/lib/services";
import { site, whatsappUrl } from "@/lib/site";
import { Container, Button, Eyebrow } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import PriceTable from "@/components/PriceTable";
import BookingDialog from "@/components/BookingDialog";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { CheckIcon, ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/leistungen/${service.slug}/` },
    openGraph: { title: service.metaTitle, description: service.metaDescription, images: [service.heroImage] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Start", path: "/" },
    { name: "Leistungen", path: "/leistungen/" },
    { name: service.navLabel, path: `/leistungen/${service.slug}/` },
  ];
  const related = service.related.map(getService).filter(Boolean) as NonNullable<ReturnType<typeof getService>>[];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <JsonLd data={[breadcrumbSchema(crumbs), serviceSchema(service), ...(service.faq.length ? [faqSchema(service.faq)] : [])]} />

      {/* Hero */}
      <section className="section alt">
        <Container>
          <div className="split">
            <div>
              <Eyebrow>Leistung in Hamburg-Eimsbüttel</Eyebrow>
              <h1 className="h1">{service.name}</h1>
              <p className="lead mt-4">{service.tagline}</p>
              <div className="cta mt-8" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {service.bookable ? (
                  <BookingDialog label="Online-Termin buchen" />
                ) : (
                  <Button href="/kostenvoranschlag/">Kostenvoranschlag anfragen</Button>
                )}
                <a className="btn ghost" href={`tel:${site.phone.e164}`} data-umami-event="Anruf"><PhoneIcon width={18} height={18} /> {site.phone.display}</a>
              </div>
            </div>
            <div className="imgcard" style={{ minHeight: 320 }}>
              <Image src={service.heroImage} alt={service.heroAlt} width={1200} height={900} preload sizes="(max-width: 860px) 100vw, 600px" />
            </div>
          </div>
        </Container>
      </section>

      {/* Inhalt */}
      <section className="section">
        <Container>
          <div className="split" style={{ gridTemplateColumns: "1.5fr 1fr", alignItems: "start" }}>
            <div>
              <div className="flow" style={{ fontSize: 18, color: "var(--text)", lineHeight: 1.7 }}>
                {service.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              <h2 className="h3 mt-12">Das ist enthalten</h2>
              <div className="grid cols-2 mt-6">
                {service.blocks.map((b) => (
                  <div className="card" key={b.title}><h4>{b.title}</h4><p>{b.text}</p></div>
                ))}
              </div>

              {service.faq.length > 0 && (
                <>
                  <h2 className="h3 mt-12">Häufige Fragen</h2>
                  <div className="faq mt-6">
                    {service.faq.map((f) => (
                      <details key={f.q}>
                        <summary>{f.q}<span className="plus">+</span></summary>
                        <p className="ans">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <aside className="flow">
              {service.price && (
                <div>
                  <h2 className="h3" style={{ marginBottom: 12 }}>Richtpreise</h2>
                  <PriceTable service={service} />
                </div>
              )}
              <div className="card">
                <h4>Ihre Vorteile</h4>
                <ul className="ticks" style={{ marginTop: 14 }}>
                  {service.bullets.map((b) => (
                    <li key={b}><CheckIcon width={18} height={18} /> {b}</li>
                  ))}
                </ul>
                <div className="mt-6" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a className="btn primary block" href={`tel:${site.phone.e164}`} data-umami-event="Anruf"><PhoneIcon width={18} height={18} /> {site.phone.display}</a>
                  <a className="btn ghost block" href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-umami-event="WhatsApp"><WhatsAppIcon width={18} height={18} /> WhatsApp</a>
                </div>
              </div>

              {related.length > 0 && (
                <div className="card">
                  <h4>Passende Leistungen</h4>
                  <ul style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 9 }}>
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={`/leistungen/${r.slug}/`} style={{ color: "var(--red)", fontWeight: 600, display: "inline-flex", gap: 6, alignItems: "center" }}>
                          <ArrowRightIcon width={16} height={16} /> {r.navLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>

      <CtaBand title={`${service.navLabel} in Eimsbüttel – jetzt anfragen`} />
    </>
  );
}
