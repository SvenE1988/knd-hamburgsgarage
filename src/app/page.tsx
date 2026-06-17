import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { articles } from "@/lib/ratgeber";
import { site } from "@/lib/site";
import { Container, Button, SectionHeading, Eyebrow } from "@/components/ui";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { CheckIcon, PhoneIcon } from "@/components/icons";

const usps = [
  ["Meisterbetrieb", "Geprüfte Qualität und ehrliche Beratung aus einer Hand."],
  ["Alle Marken & Modelle", "Vom Kleinwagen bis zum Transporter – markenunabhängig."],
  ["Garantie bleibt erhalten", "Service nach Herstellervorgabe mit Originalteilen."],
  ["Werkstattersatzwagen", "Auf Wunsch bleiben Sie während der Reparatur mobil."],
];

const values = [
  ["Ehrliche Beratung", "Wir reparieren nur, was wirklich nötig ist – mit Kostenvoranschlag vorab."],
  ["Moderne Technik", "Diagnose und Achsvermessung mit aktueller Werkstatttechnik."],
  ["Originalteile", "Erstausrüsterqualität für Sicherheit und Werterhalt."],
  ["Alles aus einer Hand", "Von Inspektion über HU/AU bis Unfall, Lack & Glas."],
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <video autoPlay muted loop playsInline preload="metadata" poster="/images/hero-poster.webp">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="veil" />
        <Container>
          <div className="hero-inner">
            <p className="eyebrow">KFZ-Meisterbetrieb · Hamburg-Eimsbüttel</p>
            <h1 className="display">Deine Werkstatt<span className="r">in Eimsbüttel</span></h1>
            <p className="sub">
              Inspektion, HU/AU, Bremsen, Reifen, Klima &amp; mehr – zuverlässig für alle Marken.
              Ehrliches Handwerk, faire Preise, mitten an der Osterstraße.
            </p>
            <div className="cta">
              <a className="btn primary" href={`tel:${site.phone.e164}`} data-umami-event="Anruf"><PhoneIcon width={18} height={18} /> Termin: {site.phone.display}</a>
              <Button href="/leistungen/" variant="ghost" withArrow>Leistungen entdecken</Button>
            </div>
            <ul className="trust">
              <li><span className="dot" /> Alle Marken &amp; Modelle</li>
              <li><span className="dot" /> Originalteile · Garantie bleibt erhalten</li>
              <li><span className="dot" /> Eigenes Reifenlager</li>
            </ul>
          </div>
        </Container>
        <div className="scrolldn">scrollen ↓</div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((k) => (
            <span key={k}>
              <span>Inspektion</span>·<span>HU / AU</span>·<span>Bremsenservice</span>·<span>Achsvermessung</span>·<span>Reifenservice</span>·<span>Klimaservice</span>·<span>Unfall · Lack · Glas</span>·<span>Werkstattersatzwagen</span>·
            </span>
          ))}
        </div>
      </div>

      {/* USP */}
      <section className="section tight alt">
        <Container>
          <div className="usps">
            {usps.map(([t, d]) => (
              <div className="usp" key={t}>
                <CheckIcon className="ic" width={22} height={22} />
                <div><b>{t}</b><p>{d}</p></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LEISTUNGEN */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Unsere Leistungen"
            title={<>Alles fürs Auto.<br />An einem Ort in Eimsbüttel.</>}
            intro="Vom kleinen Service bis zur Unfallinstandsetzung: Als Meisterbetrieb übernehmen wir das komplette Spektrum – markenunabhängig."
          />
          <div className="grid cols-4 mt-12">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </Container>
      </section>

      {/* EIMSBÜTTEL */}
      <section className="section alt">
        <Container>
          <div className="split">
            <div className="imgcard reveal" style={{ minHeight: 420 }}>
              <Image src="/images/eimsbuettel-osterstrasse.webp" alt="Straße in Hamburg-Eimsbüttel nahe der Hamburgs GaRage" width={1200} height={800} sizes="(max-width: 860px) 100vw, 600px" />
            </div>
            <div className="reveal">
              <SectionHeading eyebrow="Fest verwurzelt in Eimsbüttel" title="Ihre Nachbarschaftswerkstatt an der Osterstraße" intro="Keine anonyme Kette – wir sind Teil von Eimsbüttel. Auto abgeben, die Osterstraße entlangschlendern, Kaffee trinken." />
              <ul className="ticks">
                <li><CheckIcon width={20} height={20} /> Zentral an der Osterstraße 62-64 – Auto, Bus &amp; U2 (Haltestelle Osterstraße).</li>
                <li><CheckIcon width={20} height={20} /> Eigenes Reifenlager direkt vor Ort – ideal ohne Keller oder Garage.</li>
                <li><CheckIcon width={20} height={20} /> Persönliche Beratung statt Hotline – direkt mit der Werkstatt.</li>
              </ul>
              <div className="mt-8"><Button href="/kontakt/" withArrow>Anfahrt &amp; Kontakt</Button></div>
            </div>
          </div>
        </Container>
      </section>

      {/* BRAND MOMENT */}
      <section className="brandmoment reveal">
        <Container>
          <Image src="/images/logo.png" alt="Hamburgs GaRage Logo" width={128} height={128} />
          <div className="wm">Hamburgs<span className="gr"> GaRage</span></div>
          <p className="lead center mt-4">Handwerk mit Hamburger Wappen. Vertrauen, das man sieht – und fährt.</p>
        </Container>
      </section>

      {/* VERTRAUEN */}
      <section className="section">
        <Container>
          <div className="split">
            <div className="reveal">
              <Eyebrow>Warum Hamburgs GaRage</Eyebrow>
              <h2 className="h2">Werkstattqualität, der man vertraut</h2>
              <div className="grid cols-2 mt-8">
                {values.map(([t, d]) => (
                  <div className="card" key={t}><h4>{t}</h4><p>{d}</p></div>
                ))}
              </div>
            </div>
            <div className="imgcard reveal" style={{ minHeight: 380 }}>
              <Image src="/images/neon-reparaturannahme.webp" alt="Leuchtschrift Reparaturannahme der Hamburgs GaRage in Hamburg-Eimsbüttel" width={1200} height={900} sizes="(max-width: 860px) 100vw, 600px" />
            </div>
          </div>
        </Container>
      </section>

      {/* RATGEBER */}
      <section className="section alt">
        <Container>
          <SectionHeading eyebrow="Ratgeber" title="Tipps rund ums Auto" />
          <div className="grid cols-3 mt-12">
            {articles.slice(0, 3).map((a) => (
              <Link key={a.slug} href={`/ratgeber/${a.slug}/`} className="lcard" style={{ padding: 0, overflow: "hidden" }}>
                <Image src={a.heroImage} alt={a.heroAlt} width={600} height={360} sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 380px" style={{ height: 170, width: "100%", objectFit: "cover" }} />
                <div style={{ padding: "18px 20px" }}>
                  <h3 style={{ marginTop: 0 }}>{a.title}</h3>
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
