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
            <p>Diese Website wird bei Netlify (Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA) im Rahmen einer Auftragsverarbeitung gehostet. Beim Aufruf werden technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt, abgerufene Seite, Browsertyp) in Server-Logfiles verarbeitet (Art. 6 Abs. 1 lit. f DSGVO; berechtigtes Interesse an einem sicheren und stabilen Betrieb). Mit Netlify besteht ein Auftragsverarbeitungsvertrag; eine etwaige Übermittlung in die USA ist durch das EU-US Data Privacy Framework bzw. Standardvertragsklauseln abgesichert.</p>

            <h2>3. Reichweitenmessung mit Umami</h2>
            <p>Wir nutzen die selbstgehostete, cookielose Analyse-Software <strong>Umami</strong> (gehostet auf einem Server in Deutschland, analytics.erkens.cloud). Es werden keine Cookies gesetzt und keine personenbezogenen Profile gebildet; die Erfassung erfolgt anonymisiert zur Reichweitenmessung (Art. 6 Abs. 1 lit. f DSGVO).</p>

            <h2>4. Kontakt-, Termin- und Buchungsformular</h2>
            <p>Für Anfragen, Termin- und Buchungswünsche binden wir Formulare und einen Online-Terminkalender unseres Dienstleisters <strong>linkty.ai</strong> ein. Ihre dort eingegebenen Angaben (z. B. Name, Kontaktdaten, Anliegen, Wunschtermin) verarbeiten wir zur Bearbeitung Ihrer Anfrage bzw. zur Durchführung der Terminbuchung (Art. 6 Abs. 1 lit. b und f DSGVO). Die Verarbeitung erfolgt auf Grundlage eines Auftragsverarbeitungsvertrags (Art. 28 DSGVO); die Plattform wird auf Servern in Deutschland betrieben. Sofern im Einzelfall eine Übermittlung in Drittländer erfolgt, ist diese durch geeignete Garantien (EU-US Data Privacy Framework bzw. Standardvertragsklauseln) abgesichert.</p>

            <h2>5. Chat-Widget</h2>
            <p>Optional bieten wir einen Chat (inkl. WhatsApp/KI-Assistent) über unseren Dienstleister <strong>linkty.ai</strong> an. Das Chat-Widget wird <strong>erst nach Ihrer Einwilligung</strong> geladen (Art. 6 Abs. 1 lit. a DSGVO); dabei können Daten an die Plattform und ggf. eingebundene Dritte übertragen werden. Sie können die Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</p>

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
