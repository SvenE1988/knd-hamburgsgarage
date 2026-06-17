# Go-Live-Checkliste

Lebendes Dokument. Stand gegen `main` verifiziert (2026-06-17). Die code-seitige Arbeit ist abgeschlossen; offen sind Kunden-, Rechts- und Domain-Punkte.

## Erledigt (im Repo verifiziert)
- [x] V2-Design in Mehrseiten-Architektur (16 Routen inkl. 8 Leistungsseiten), Intro-Overlay, technische SEO + JSON-LD, 7 Ratgeber-Artikel.
- [x] Architektur auf Netlify Next.js Runtime umgestellt (kein statischer Export).
- [x] Online-Terminbuchung: Kalender auf `/termin/` + Buchungs-Popup auf den buchbaren Leistungsseiten (`calendarSrc` in site.ts gesetzt).
- [x] „GoHighLevel" kundenseitig entfernt; Datenschutz nennt Auftragsverarbeiter nur „linkty.ai".
- [x] Bilder auf `next/image`; ESLint-Flat-Config; Code-Cleanup; Umami-Events auf Anruf/WhatsApp/Buchung.
- [x] `next/font` (selbstgehostete Schriften) aktiv.
- [x] favicon.png (512×512) + og-default.png (1200×630) in `public/images/` committet, Metadaten in layout.tsx.
- [x] postcss-Sicherheitsfix (CVE-2026-41305) via overrides auf 8.5.x.

## Offen — Kunde / Recht
- [ ] **Finale Preise** in `services.ts` bestätigen (bis dahin Richtpreise + Disclaimer live).
- [ ] **Datenschutzerklärung** rechtlich freigeben; Hinweis-Banner erst danach entfernen.
- [ ] **Impressum** final prüfen (HRB, Inhaber, ggf. USt-IdNr.).
- [ ] Inhalte/Texte final abnehmen.
- [ ] Entscheidung: Chat-Widget zum Launch aktiv oder später?

## Offen — Domain & DNS
- [ ] hamburgsgarage.de (+ www) in Netlify als Custom Domain.
- [ ] DNS umstellen (A/ALIAS bzw. CNAME laut Netlify); kanonische Variante festlegen (Empfehlung: ohne www, www → Apex).
- [ ] TLS aktiv, HTTP→HTTPS-Redirect greift. `site.url` steht bereits auf https://hamburgsgarage.de.

## Offen — Redirects der Alt-URLs (WordPress)
- [ ] Alte indexierte URLs ziehen (alte Search Console / WP-Sitemap / Screaming Frog).
- [ ] Mapping prüfen: `/unser-service/` → `/leistungen/`, `/uber-uns/` → `/ueber-uns/`, `/anfahrt/` → `/kontakt/`, `/index/` → `/`. Detailseiten möglichst spezifisch.
- [ ] Nach Launch jede Alt-URL testen: 301 aufs richtige Ziel (kein 404, keine Kette).
- [ ] autowerkstatt-weiland.de (falls zugänglich) 301 auf hamburgsgarage.de.

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
- [ ] GBP-Zugang sichern, NAP exakt, Kategorie, Zeiten, Fotos, Leistungen.
- [ ] Alt-Marke „Olaf Weiland" (gleiche Adresse/Telefon) konsolidieren statt Dublette anlegen.
- [ ] NAP-Konsistenz über Citations; `sameAs` in site.ts füllen (aktuell leer); Bewertungslink testen.

## Nach dem Launch (Monitoring)
- [ ] 24–72 h: Search Console auf Crawl-Fehler/404; Indexierung der Kernseiten.
- [ ] Umami: Traffic/Conversions; Events korrekt.
- [ ] Einmaliger Broken-Link-/Crawl-Check.
- [ ] Rollback klar: Netlify Deploy-History → vorheriges Deploy publishen.
