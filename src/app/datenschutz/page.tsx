import type { Metadata } from "next";
import { Container } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Hamburgs GaRage in Hamburg-Eimsbüttel.",
  alternates: { canonical: "/datenschutz/" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Start", path: "/" }, { name: "Datenschutz", path: "/datenschutz/" }]} />
      <section className="section">
        <Container narrow>
          <h1 className="h1">Datenschutzerklärung</h1>
          <p className="mt-6" style={{ border: "1px solid rgba(225,29,42,.4)", background: "rgba(225,29,42,.08)", borderRadius: 10, padding: 16, fontSize: 14, color: "var(--muted)" }}>
            <strong style={{ color: "#fff" }}>Hinweis:</strong> Diese Datenschutzerklärung ist eine sorgfältig vorbereitete Vorlage. Bitte vor der Veröffentlichung rechtlich prüfen lassen (z. B. eRecht24 oder anwaltlich) und an die tatsächlich eingesetzten Dienste anpassen.
          </p>

          <div className="prose mt-8">
            <h2>1. Verantwortlicher</h2>
            <p>{site.legalName}<br />{site.address.street}, {site.address.postalCode} {site.address.city}<br />Telefon: {site.phone.display} · E-Mail: {site.email}</p>

            <h2>2. Hosting &amp; Server-Logfiles</h2>
            <p>Diese Website wird bei einem Dienstleister gehostet (Auftragsverarbeitung). Beim Aufruf werden technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt, abgerufene Seite) in Server-Logfiles verarbeitet (Art. 6 Abs. 1 lit. f DSGVO). <span style={{ fontStyle: "italic" }}>[Hosting-Anbieter konkret benennen, z. B. Netlify, inkl. Auftragsverarbeitungsvertrag.]</span></p>

            <h2>3. Reichweitenmessung mit Umami</h2>
            <p>Wir nutzen die selbstgehostete, cookielose Analyse-Software <strong>Umami</strong> (gehostet auf einem Server in Deutschland, analytics.erkens.cloud). Es werden keine Cookies gesetzt und keine personenbezogenen Profile gebildet; die Erfassung erfolgt anonymisiert zur Reichweitenmessung (Art. 6 Abs. 1 lit. f DSGVO).</p>

            <h2>4. Kontakt- und Terminformular (GoHighLevel)</h2>
            <p>Für Anfragen und Terminwünsche binden wir ein Formular des Dienstes <strong>GoHighLevel</strong> (HighLevel) ein. Ihre Angaben werden zur Bearbeitung der Anfrage verarbeitet (Art. 6 Abs. 1 lit. b und f DSGVO). <span style={{ fontStyle: "italic" }}>[Anbieter/Subunternehmer, Serverstandort und ggf. Standardvertragsklauseln ergänzen.]</span></p>

            <h2>5. Chat-Widget (GoHighLevel)</h2>
            <p>Optional bieten wir einen Chat (inkl. WhatsApp/KI-Assistent) über GoHighLevel an. Das Chat-Widget wird <strong>erst nach Ihrer Einwilligung</strong> geladen (Art. 6 Abs. 1 lit. a DSGVO). Sie können die Einwilligung jederzeit widerrufen.</p>

            <h2>6. Google Maps</h2>
            <p>Zur Standortdarstellung binden wir Google Maps ein. Die Karte wird erst nach Klick auf „Karte laden“ geladen; erst dann werden Daten – ggf. in die USA – an Google übertragen (Art. 6 Abs. 1 lit. a DSGVO). Anbieter: Google Ireland Limited.</p>

            <h2>7. WhatsApp</h2>
            <p>Über den WhatsApp-Button nehmen Sie auf eigenen Wunsch Kontakt auf. Es gelten die Datenschutzbestimmungen von WhatsApp/Meta.</p>

            <h2>8. Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (für Hamburg: Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit). Eine erteilte Einwilligung können Sie jederzeit widerrufen.</p>

            <p style={{ fontSize: 14 }}>Stand: Juni 2026</p>
          </div>
        </Container>
      </section>
    </>
  );
}
