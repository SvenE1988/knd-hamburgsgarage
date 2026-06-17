# Hamburgs GaRage — Projekt-Konzept

Strategischer Rahmen des Relaunchs. Langlebiges Wissen; der aktuelle Arbeitsstand und die offenen Punkte stehen in [go-live-checkliste.md](go-live-checkliste.md).

## Positionierung
Inhabergeführter KFZ-Meisterbetrieb mitten in Hamburg-Eimsbüttel. Kernbotschaft: „Deine Werkstatt in Eimsbüttel." Vertrauen, ehrliches Handwerk, lokale Nähe, alle Marken. Tonalität bodenständig und persönlich. Visuell cineastisch (Version 2): dunkle Filmoptik, Signalrot auf Anthrazit, große Display-Typo, Logo-Vollbild-Intro beim ersten Besuch (einmal pro Sitzung, Skip-Button, respektiert `prefers-reduced-motion`).

## Stammdaten (NAP)
- **Firma:** Hamburgs GaRage G.B. & R.S. GmbH
- **Adresse:** Osterstraße 62-64, 20259 Hamburg-Eimsbüttel
- **Telefon / WhatsApp:** 040 407173 (`wa.me/4940407173`, gleiche Festnetznummer)
- **Inhaber:** Rade Stojkovic & Gabor Böhm · HRB 166741 (AG Hamburg)
- **Öffnungszeiten:** Mo–Do 8:00–17:15, Fr 8:00–15:15
- **Google Place ID:** ChIJ3ZroK1GPsUcRyTYVGltVy-4

Local-SEO-Befund: gleiche Adresse und Telefonnummer wie der frühere Betrieb „Olaf Weiland" (autowerkstatt-weiland.de). Hamburgs GaRage ist offenbar Nachfolger/Rebrand. Alt-Listings, Citations und ggf. das alte Google-Profil konsolidieren statt ein neues anzulegen.

## Informationsarchitektur
Mehrseitig, jede Leistung mit eigener indexierbarer URL:
`/` · `/leistungen/` + 8 Leistungsseiten (Inspektion & Wartung, HU/AU, Bremsen, Achsvermessung, Reifen, Klima, Unfall/Lack/Glas, Werkstattersatzwagen) · `/ueber-uns/` · `/ratgeber/` + Artikel · `/faq/` · `/kontakt/` · `/termin/` · `/kostenvoranschlag/` · `/impressum/` · `/datenschutz/`.

Buchungslogik: online buchbar = Inspektion, Bremsen, Achsvermessung, Reifen, Klima. Nur telefonisch/Anfrage = HU/AU (externer Prüfer zu festen Terminen), Unfall/Lack/Glas (Begutachtung nötig), Werkstattersatzwagen (Add-on).

## SEO-Konzept
Mehrseitig statt Onepager, jede Leistung mit lokalem Keyword-Fokus („… Hamburg-Eimsbüttel"). Pro Seite genau ein H1, eigener Title, Meta-Description, Canonical, OpenGraph. Echter crawlbarer Text (Design ist Gestaltung, das Intro ist ein clientseitiges Overlay über gerendertem HTML und blockiert weder Indexierung noch Inhalt). JSON-LD: AutoRepair/LocalBusiness, Service, FAQPage, BreadcrumbList, BlogPosting, optional Offer/PriceSpecification. sitemap.xml, robots.txt, 301-Redirects der alten WordPress-URLs. Interne Verlinkung Hub-and-Spoke. Local SEO mit konsistenter NAP und optimiertem Google Business Profil.

Ausgangslage Altseite (WordPress + Elementor): kein SEO-Plugin, keine Meta-Descriptions, kein H1, dünner Content, Leistungen nur als Bilder. Wettbewerb in Eimsbüttel/Hamburg-West technisch dünn und mit geringer Sichtbarkeit, der lokale Markt ist gut gewinnbar. Stärkster Content-Player: autoservice-eimsbuettel.de (TYPO3, mit Ratgeber). Daraus die Hebel: dedizierte Leistungsseiten, HU/AU als eigene Seite (hohes lokales Suchvolumen), Ratgeber als Long-Tail-Motor.

## Integrationen
- **Umami** (selbstgehostet, cookieless, DSGVO-freundlich, i.d.R. ohne Consent-Banner): `analytics.erkens.cloud`, Website-ID in `site.ts`. Events via `data-umami-event` auf Anruf, WhatsApp, Terminbuchung.
- **Online-Terminbuchung** über linkty.ai-Widget (`calendarSrc` in site.ts, Komponenten `CalendarEmbed` + `BookingDialog`): auf `/termin/` und als Popup auf den buchbaren Leistungsseiten. Kundenseitig nie „GoHighLevel" nennen; im Datenschutz ausschließlich „linkty.ai". Technisch lädt das Chat-Widget weiterhin von `widgets.leadconnectorhq.com` (nur im Netzwerk-Tab sichtbar).
- **WhatsApp:** Button via `wa.me/4940407173`.
- **Google Maps:** Klick-zum-Laden (DSGVO).
- **Google-Bewertungen:** Place ID gesetzt; Live-Bewertungs-Widget folgt, sobald der GBP-Zugang da ist.

Consent: Buchungs-/Chat-Embeds und Maps erst nach Einwilligung; Umami cookieless.

## Architektur-Entscheidungen
- **Netlify Next.js Runtime statt statischem Export** (umgesetzt 2026-06-17). `output: "export"` war ein Relikt der initialen ZIP-Übergabe, bevor GitHub/Netlify verbunden waren. Damit entfallen `force-static`, `images.unoptimized` und Header-Workarounds; `next/image`-Optimierung (AVIF/responsive), ISR und Route Handler sind verfügbar. `netlify.toml`: Build `npm run build`, Publish `.next`, Node 22, 301-Redirects + Security-/Cache-Header.
- **Pure CSS statt Tailwind:** geringeres Build-Risiko, validiertes Design wiederverwendet.
- **Kein CMS:** Inhalte als typisierte Daten in `src/lib`.
- **Selbstgehostete Schriften via `next/font/google`** (Anton, Archivo, Inter): kein externer Google-Request zur Laufzeit, kein Layout-Shift. Mapping in globals.css über `--font-*`.
- **Workflow:** Änderungen je logischer Einheit als Branch + PR gegen `main`, Build vor dem PR verifiziert.
