# Go-Live-Checkliste

Lebendes Dokument. Stand gegen `main` verifiziert (2026-06-19). Die code-seitige Arbeit ist abgeschlossen; offen sind Kunden-, Rechts- und Domain-Punkte.

## Erledigt (im Repo verifiziert)
- [x] V2-Design in Mehrseiten-Architektur (16 Routen inkl. 8 Leistungsseiten), Intro-Overlay, technische SEO + JSON-LD, 7 Ratgeber-Artikel.
- [x] Architektur auf Netlify Next.js Runtime umgestellt (kein statischer Export).
- [x] Online-Terminbuchung: Kalender auf `/termin/` + Buchungs-Popup auf den buchbaren Leistungsseiten (`calendarSrc` in site.ts gesetzt).
- [x] „GoHighLevel" kundenseitig entfernt; Datenschutz nennt Auftragsverarbeiter nur „linkty.ai".
- [x] Bilder auf `next/image`; ESLint-Flat-Config; Code-Cleanup; Umami-Events auf Anruf/WhatsApp/Buchung.
- [x] `next/font` (selbstgehostete Schriften) aktiv.
- [x] favicon.png (512×512) + og-default.png (1200×630) in `public/images/` committet, Metadaten in layout.tsx.
- [x] postcss-Sicherheitsfix (CVE-2026-41305) via overrides auf 8.5.x.
- [x] **Öffnungszeiten korrigiert** auf Mo–Do 8:00–17:15, Fr 8:00–15:15 (gegen Live-Site + Google verifiziert; vorheriger Stand 19:00/18:00 war falsch).
- [x] **Chat-Widget zum Launch deaktiviert** via Flag `chatWidgetEnabled: false` in site.ts (Widget lädt nicht, Consent-Kategorie „Chat" ausgeblendet). Reaktivierung = Flag auf `true`.
- [x] **Intro-Video Mobil**: auf schmalen Viewports `object-fit:contain` statt `cover` — das volle Videobild ist sichtbar statt nur der Bildmitte (verifiziert per Mobil-Screenshot).
- [x] **Impressum-Daten gegen Handelsregister/NorthData verifiziert**: HRB 166741 (AG Hamburg), GF Gabor Böhm + Rade Stojkovic, Osterstraße 62-64. Zusatz: Eintragung 22.01.2021, Stammkapital 25.000 €.

## Offen — Kunde / Recht
- [ ] **Finale Preise** in `services.ts` bestätigen (Disclaimer nennt sie aktuell „Platzhalter"; bis Freigabe ein Risiko).
- [ ] **Datenschutzerklärung** rechtlich freigeben; Hinweis-Banner erst danach entfernen. AV-Verträge (Netlify, linkty.ai, Umami/Erkens) bestätigen.
- [ ] **USt-IdNr beim Kunden abfragen** und ins Impressum (Pflichtangabe sobald vorhanden; nicht öffentlich auffindbar). Ggf. Berufshaftpflicht-Versicherer ergänzen.
- [ ] Inhalte/Texte final abnehmen.
- [ ] **Intro-Video-Inhalt prüfen**: zeigt Oldtimer/Exoten (gelber Klassiker, Jeep) — widerspricht der Kundenvorgabe „keine Oldtimer/Exoten". Mit Kunde klären, ob anderes Material gewünscht.

## Offen — Domain & DNS
- [ ] **Beim Kunden erfragen, wo die Domain hamburgsgarage.de liegt (Registrar/Provider) und Zugang sichern.**
- [ ] hamburgsgarage.de (+ www) in Netlify als Custom Domain.
- [ ] DNS umstellen (A/ALIAS bzw. CNAME laut Netlify); kanonische Variante festlegen (Empfehlung: ohne www, www → Apex).
- [ ] TLS aktiv, HTTP→HTTPS-Redirect greift. `site.url` steht bereits auf https://hamburgsgarage.de.

## Offen — Redirects der Alt-URLs (WordPress)
Alte Sitemap gezogen (`hamburgsgarage.de/wp-sitemap.xml`, via firecrawl map bestätigt). Vollständiges Mapping (8 Inhaltsseiten + Author-Archiv):
- [ ] `/index/` → `/` · `/uber-uns/` → `/ueber-uns/` · `/unser-service/` → `/leistungen/` · `/kontakt/` → `/kontakt/` · `/anfahrt/` → `/kontakt/` · `/impressum/` → `/impressum/` · `/datenschutz/` → `/datenschutz/`
- [ ] `/author/faridmodarressi/` → `/` (WP-Author-Archiv, raus). WP-Feeds `/feed/`, `/comments/feed/` → `/` oder 410.
- [ ] Vor Launch optional mit alter Search Console abgleichen, falls Zugang (deckt verwaiste URLs ab).
- [ ] Nach Launch jede Alt-URL testen: 301 aufs richtige Ziel (kein 404, keine Kette).
- [ ] autowerkstatt-weiland.de: eigener noch laufender Betrieb (Olaf Weiland), keine XML-Sitemap, 9 Pfade via firecrawl map gefunden. 301 auf hamburgsgarage.de ist **Geschäftsentscheidung des Kunden** — erst klären, ob gewünscht/zulässig.

## Offen — SEO & Indexierung
- [ ] robots.txt + sitemap.xml prüfen (alle Routen, richtige Domain).
- [ ] Search Console: Property + Verifizierung + Sitemap.
- [ ] Rich-Results-Test JSON-LD (AutoRepair, Service, FAQPage, Breadcrumb, BlogPosting).
- [ ] Stichprobe: ein H1/Seite, Title/Meta/Canonical; `datenschutz/` bleibt noindex.

## Offen — Performance & CWV
- [ ] Lighthouse Mobil (Start/Leistung/Ratgeber): LCP/CLS/INP grün.
- [ ] `next/image` liefert AVIF/WebP + srcset.
- [ ] Hero-Video sparsam (preload=metadata, Poster=LCP); Kontrastprüfung Rot-auf-Anthrazit.
- [ ] Security-/Cache-Header (netlify.toml) greifen.

## Offen — Funktionstests (Desktop + Mobil)
- [ ] `/termin/`: Termin buchbar, Bestätigung in linkty.ai.
- [ ] Buchungs-Popup auf buchbarer Leistungsseite öffnet/schließt, Kalender lädt.
- [ ] Kontakt-/Kostenvoranschlag-Formular: Lead landet in linkty.ai.
- [ ] WhatsApp, Google Maps (Klick-zum-Laden), Consent-Banner → Chat erst nach Zustimmung.
- [ ] Intro-Overlay (1×/Sitzung, Skip, reduced-motion); 404, Breadcrumbs, mobiles Menü.
- [ ] Umami: Pageviews + Events (Anruf, WhatsApp, Termin-Buchung) erscheinen.

## Offen — Local SEO
- [ ] **Kunde fragen: Search-Console-Property für hamburgsgarage.de vorhanden?** Falls ja, Zugriff geben lassen (Alt-URLs/verwaiste Seiten abgleichen); falls nein, neu anlegen.
- [ ] **Kunde fragen: Facebook-/Instagram-Profile zum Verlinken?** → `sameAs` in site.ts füllen (aktuell leer), plus Google-Profil-URL.
- [ ] GBP-Zugang sichern, NAP exakt, Kategorie, Zeiten, Fotos, Leistungen.
- [ ] Alt-Marke „Olaf Weiland" (gleiche Adresse/Telefon) konsolidieren statt Dublette anlegen. Dem Kunden erklären: Vorgängerbetrieb, Alt-Profil wird zusammengeführt statt neu angelegt.
- [ ] NAP-Konsistenz über Citations; Bewertungslink testen.

## Nach dem Launch (Monitoring)
- [ ] 24–72 h: Search Console auf Crawl-Fehler/404; Indexierung der Kernseiten.
- [ ] Umami: Traffic/Conversions; Events korrekt.
- [ ] Einmaliger Broken-Link-/Crawl-Check.
- [ ] Rollback klar: Netlify Deploy-History → vorheriges Deploy publishen.
