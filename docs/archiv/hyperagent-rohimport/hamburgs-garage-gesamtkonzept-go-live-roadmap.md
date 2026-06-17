# Hamburgs GaRage – Gesamtkonzept & Go-Live-Roadmap

## Leitidee & Positionierung

Inhabergefuehrter KFZ-Meisterbetrieb mitten in Hamburg-Eimsbuettel. Kernbotschaft: Deine Werkstatt in Eimsbuettel. Vertrauen, ehrliches Handwerk, lokale Naehe, alle Marken. Tonalitaet bodenstaendig und persoenlich, keine anonyme Kette. Visuell markant und cineastisch (Version 2) mit dem Logo-Video als Wiedererkennung.

## Design-Konzept (Version 2)

Gewählt: dunkle Filmoptik, Signalrot auf Anthrazit, viel Weißraum, große Display-Typo. Logo-Vollbild-Intro beim ersten Besuch (einmal pro Sitzung, Überspringen-Button, respektiert prefers-reduced-motion), endet auf dem Logo. Video-Hero, Scroll-Inszenierung, Leistungs-Laufband, sticky Anruf/WhatsApp-Button. Status: Die Mehrseiten-Architektur ist umgesetzt (16 Routen im Repo; Go-Live noch ausstehend) – das Design ist die „Haut", die SEO-Struktur das „Skelett".

## Informationsarchitektur / Sitemap

Mehrseitig, jede Leistung eigene indexierbare URL: / (Start), /leistungen/ plus 8 Leistungsseiten (Inspektion & Wartung, HU/AU, Bremsen, Achsvermessung, Reifen, Klima, Unfall/Lack/Glas, Werkstattersatzwagen), /ueber-uns/ (inkl. Team), /ratgeber/ plus Artikel, /faq/, /kontakt/, /termin/ (GHL-Buchung), /kostenvoranschlag/ (zentrales GHL-Formular, optional), /impressum/, /datenschutz/.

## SEO-Konzept – so wird Version 2 sauber

V1 hatte das komplette SEO-Fundament; V2 wurde in die Mehrseiten-Architektur überführt (umgesetzt). Dabei umgesetzt/erhalten: mehrseitig statt Onepager (jede Leistung eigene URL mit lokalem Keyword-Fokus); pro Seite genau ein H1, eigener Title und Meta-Description, Canonical, OpenGraph; echter crawlbarer Text (Design ist nur Gestaltung); JSON-LD (AutoRepair/LocalBusiness, Service, FAQPage, BreadcrumbList, BlogPosting; optional Offer/PriceSpecification bei Preisen); sitemap.xml, robots.txt, 301-Redirects; interne Verlinkung Hub-and-Spoke; Performance/CWV (Poster-Bild als LCP, Video sparsam laden, optimierte WebP; das Intro ist ein rein clientseitiges Overlay über gerendertem HTML und blockiert weder Indexierung noch Inhalt); Barrierefreiheit und prefers-reduced-motion; Drittanbieter-Embeds (GHL, Maps) lazy und hinter Consent; Local SEO mit konsistenter NAP, optimiertem Google Business Profil und Eimsbüttel plus Nachbarstadtteilen als Inhalt (keine Doorway-Pages). Offen/Folge-Schritt: Bilder von rohem <img> auf next/image umstellen, damit die mit der Netlify Next.js Runtime gewonnene automatische Bildoptimierung (AVIF/responsive) tatsächlich greift.

## Integrationen mit GoHighLevel (GHL)

Online-Buchung (Logik, abgestimmt): Online buchbar = 01 Inspektion & Wartung, 03 Bremsenservice, 04 Achsvermessung, 05 Reifenservice, 06 Klimaservice. Nur telefonisch/Koordination = 02 HU/AU (externer Prüfer kommt zu festen Terminen), 07 Unfall/Lack/Glas (Begutachtung nötig), 08 Werkstattersatzwagen (Add-on zu anderer Buchung). Online-Leistungen erhalten einen GHL-Booking-Button, die übrigen einen Anruf-/Anfrage-CTA.

GoHighLevel: Terminbuchung über GHL-Booking-Widget (iframe + form_embed.js) auf /termin/ und als Popup auf den online-buchbaren Leistungsseiten. Kostenvoranschlag über ein zentrales GHL-Formular (Feld „Leistung", je Seite vorbelegt). GHL-Chat-Widget optional, hinter Consent. Benötigt: Beispiel-Snippets + GHL-Region/Domain.

WhatsApp: Button via wa.me/4940407173 (gleiche Festnetznummer). 24/7-KI-Bot läuft in GHL/WhatsApp.

Analytics – Umami (selbstgehostet): Website-ID 800a1045-e0ff-4c7d-90b9-a92f194ce0de. Cookieless & DSGVO-freundlich → i.d.R. ohne Consent-Banner. Instanz-URL gesetzt: analytics.erkens.cloud (in site.ts).

Google-Bewertungen: Place ID ChIJ3ZroK1GPsUcRyTYVGltVy-4 → „Auf Google bewerten / Bewertungen ansehen"-Link jetzt baubar; Live-Bewertungs-Widget später, sobald GBP-Zugang da ist.

Hosting: Netlify über die Next.js Runtime (Repo auf GitHub), zero-config. netlify.toml: Build npm run build, Publish .next, 301-Redirects, Security-Header (kein public/_redirects nötig).

Preise (Richtpreise/Platzhalter): Für 01–06 kompakte Preistabelle je Leistungsseite (Haupt-„ab"-Preis prominent + Unterpositionen) inkl. Offer/PriceSpecification-Schema. Pflicht-Disclaimer darunter: „Alle Preise sind ab-Preise als Platzhalter und werden je nach Fahrzeugmodell, Verschleißzustand und Material individuell bestätigt. Der Endpreis erfolgt nach Fahrzeugdaten und Sichtprüfung in der Werkstatt." 07 & 08: kein Festpreis, stattdessen „individuelles Angebot / Kostenvoranschlag". Preise zentral in einer Datei pflegbar.

Consent/DSGVO: GHL-Embeds/Chat + Google Maps erst nach Einwilligung; Umami cookieless (i.d.R. ohne Banner).



---

UPDATE Session 2: Terminbuchung ist umgesetzt — calendarSrc/calendarScript in site.ts (link.linkty.ai/widget/booking/8EPXYEVp4afKCoHyCGDh + embed.js), Komponente CalendarEmbed auf /termin/ + BookingDialog-Popup auf den buchbaren Leistungsseiten. WICHTIG (Kundenvorgabe): kundenseitig wird KEIN „GoHighLevel" mehr genannt — sichtbare Bezeichnung „Online-Terminbuchung"; im Datenschutz heißt der Auftragsverarbeiter ausschließlich „linkty.ai" (nicht GoHighLevel/HighLevel, nicht Erkens Consulting). Technisch lädt das Chat-Widget weiterhin von widgets.leadconnectorhq.com (nur im Netzwerk-Tab sichtbar). Umami-Events (Anruf/WhatsApp/Termin-Buchung) via data-umami-event ergänzt (cookieless, kein Consent nötig)."

## Ratgeber / Content-Plan

Ziel: lokaler Themen-Hub, der den Wettbewerb inhaltlich schlaegt. Themen-Ideen (Leistung plus Eimsbuettel/Hamburg): Achsvermessung wann sinnvoll (vorhanden), HU/AU vorbereiten Checkliste (vorhanden), Inspektion was gehoert dazu und Garantie erhalten, Reifenwechsel und Einlagerung in der Stadtwohnung, Klimaservice wann und warum, Bremsen Warnzeichen erkennen, Winter-/Urlaubscheck (saisonal), Steinschlag reparieren oder tauschen. Je Artikel BlogPosting-Schema, interne Links, CTA. Offen: wer schreibt/gibt frei, Frequenz.

## Technik, Hosting, Performance, Consent

Next.js 16 (App Router) als Standard-Next.js auf der Netlify Next.js Runtime (OpenNext) – seit 2026-06-17 (vorher statischer Export, ein Relikt der initialen ZIP-Übergabe ohne verbundenes Repo/Hosting). Hosting steht fest auf Netlify (Repo auf GitHub); die Runtime wird automatisch erkannt (zero-config). netlify.toml trägt Build „npm run build", Publish „.next", Node 22, die 301-Redirects und Security-/Cache-Header. Vorteile gegenüber dem Export: next/image-Optimierung, ISR und Route Handler verfügbar; force-static- und unoptimized-Workarounds entfallen. Consent-Management nötig wegen GHL-Embeds, Chat-Widget und Maps; Umami ist cookieless. Tracking primär über Umami + GHL-Lead-Tracking. Build-Verifikation in der Sandbox ist möglich (registry.npmjs.org freigegeben); Netlify baut beim Deploy ohnehin und liefert je PR eine Deploy Preview.

## Go-Live-Roadmap (Phasen)

STATUS (2026-06-17): Phase 1 (Design in Code – alle Seiten, Intro, SEO-Grundgerüst + Schema) erledigt und in GitHub gemerged; Architektur auf die Netlify Next.js Runtime umgestellt (statt statischem Export). Aktuelle, priorisierte To-dos stehen im Projekt-Dokument „knd - HamburgsGaraGe" → Tasks. Die folgenden Phasen bleiben als strategischer Rahmen:



1. Design in Code: V2 in Mehrseiten-Architektur (alle Seiten, Intro, SEO-Grundgeruest und Schema), Build verifizieren. 2. Inhalte und Feinschliff: Texte, Fotos, Ueber uns/Team, FAQ, optional Preise. 3. GHL-Integration: Terminbuchung, Kostenvoranschlag-Formular, WhatsApp/Chat, Consent. 4. Ratgeber-Ausbau: Themenplan plus erste 4-6 Artikel. 5. Local SEO: Google Business Profil, NAP/Citations, Alt-Marke Weiland konsolidieren. 6. Launch: Redirects, Search Console, CWV-Check, Monitoring.



---

## Konkrete Go-Live-Checkliste (Stand Session 2, main db177be6+)

**0. Voraussetzungen (Kundenfreigaben)**
- [ ] Finale Preise in services.ts bestätigt (sonst Richtpreise + Disclaimer live).
- [ ] Datenschutzerklärung rechtlich freigegeben; Hinweis-Banner erst danach entfernen.
- [ ] Impressum final geprüft (HRB, Inhaber, ggf. USt-IdNr.).
- [ ] Inhalte/Texte final abgenommen.
- [ ] Entscheidung: Chat-Widget zum Launch aktiv oder später?

**1. Assets & offener PR #9**
- [ ] favicon.png (512×512) + og-default.png (1200×630) nach public/images/ committen (vom Agent generiert, im Chat als Download).
- [ ] PR #9 (next/font + Marken-OG/Favicon) mergen — erst wenn die zwei Bilder im Repo sind UND die Netlify Deploy Preview grün ist (next/font baut nur mit Internet; Sandbox kann den Font-Download nicht).

**2. Domain, DNS & TLS**
- [ ] hamburgsgarage.de (+ www) in Netlify als Custom Domain.
- [ ] DNS umstellen (A/ALIAS bzw. CNAME laut Netlify).
- [ ] Kanonische Variante festlegen (Empfehlung: ohne www; www → Apex) + Redirect prüfen.
- [ ] TLS aktiv, HTTP→HTTPS-Redirect greift. site.url = https://hamburgsgarage.de (passt).

**3. Redirects der Alt-URLs (WordPress)**
- [ ] Alte indexierte URLs ziehen (alte Search Console, altes WP-Sitemap, Screaming Frog).
- [ ] Mapping: /unser-service/ → /leistungen/, /uber-uns/ → /ueber-uns/, /anfahrt/ → /kontakt/, /index/ → /; Detailseiten möglichst spezifisch.
- [ ] Nach Launch jede Alt-URL testen: 301 auf richtiges Ziel (kein 404, keine Kette).
- [ ] autowerkstatt-weiland.de (falls zugänglich) 301 auf hamburgsgarage.de.

**4. SEO & Indexierung**
- [ ] robots.txt + sitemap.xml prüfen (alle Routen, richtige Domain).
- [ ] Search Console: Property + Verifizierung + Sitemap; Bing optional.
- [ ] Rich-Results-Test JSON-LD (AutoRepair, Service, FAQPage, Breadcrumb, BlogPosting).
- [ ] Stichprobe: ein H1/Seite, Title/Meta/Canonical; datenschutz/ bleibt noindex.

**5. Performance & CWV**
- [ ] Lighthouse Mobil (Start/Leistung/Ratgeber): LCP/CLS/INP grün.
- [ ] next/image liefert AVIF/WebP + srcset (/_next/image?...).
- [ ] Hero-Video sparsam (preload=metadata, Poster=LCP); Fonts self-hosted (next/font), kein FOUT.
- [ ] Security-/Cache-Header (netlify.toml) greifen.

**6. Funktionstests (Desktop + Mobil)**
- [ ] /termin/ Kalender: Termin buchbar, Bestätigung in linkty.ai.
- [ ] Buchungs-Popup auf buchbarer Leistungsseite öffnet/schließt, Kalender lädt.
- [ ] Kostenvoranschlag-/Kontaktformular: Lead landet in linkty.ai.
- [ ] WhatsApp (Button/FAB), Google Maps (Klick-zum-Laden), Consent-Banner → Chat erst nach Zustimmung.
- [ ] Intro-Overlay (1×/Sitzung, Skip, reduced-motion); 404, Breadcrumbs, mobiles Menü.
- [ ] Umami: Pageviews + Events (Anruf, WhatsApp, Termin-Buchung) erscheinen.

**7. Local SEO**
- [ ] GBP: Zugang sichern, NAP exakt (Hamburgs GaRage G.B. & R.S. GmbH, Osterstraße 62-64, 20259 Hamburg, 040 407173), Kategorie, Zeiten, Fotos, Leistungen.
- [ ] Alt-Marke „Olaf Weiland" (gleiche Adresse/Telefon) konsolidieren: GBP übernehmen/zusammenführen statt Dublette; Citations aktualisieren.
- [ ] NAP-Konsistenz über Citations; sameAs in site.ts füllen (aktuell leer); Bewertungslink testen.

**8. Nach dem Launch (Monitoring)**
- [ ] 24–72 h: Search Console auf Crawl-Fehler/404; Indexierung Kernseiten.
- [ ] Umami: Traffic/Conversions; Events korrekt.
- [ ] Einmaliger Broken-Link-/Crawl-Check (Screaming Frog).
- [ ] Rollback klar: Netlify Deploy-History → vorheriges Deploy publishen.

## Offene Fragen & Was ich von dir brauche

Erledigt: Domain (hamburgsgarage.de), Host (Netlify, Next.js Runtime), Bremsenservice (ja), Öffnungszeiten, WhatsApp-Nr (= Festnetz 040 407173), Place ID, Umami-Website-ID UND Umami-Instanz-URL (analytics.erkens.cloud, in site.ts gesetzt), exakte Geo-Koordinaten, Branding (Anton/Archivo + Logo-Rot), Team-Fotos (keine), Online-Buchungs-Logik (abgestimmt), Preis-Platzhalter, npm-Sandbox-Freigabe, Architektur-Umstellung auf die Netlify Next.js Runtime.

Noch offen / benötigt:
1. GHL-Service-Kalender: Booking-URL/Region + Beispiel-Snippets (Booking, Formular, Chat) → calendarSrc in site.ts + /termin/.
2. Finale Preisfreigabe durch den Kunden (bis dahin Richtpreise + Disclaimer live).
3. GBP-Zugang / Bewertungslink (für Live-Reviews-Widget; dazu Local-SEO-Konsolidierung der Alt-Marke „Olaf Weiland").

Konkrete, priorisierte nächste Arbeitsschritte: siehe Projekt-Dokument „knd - HamburgsGaraGe" → Abschnitt Tasks.



---

UPDATE Session 2 (2026-06-17) — Abschluss der Agent-seitigen Code-Arbeit:
- ERLEDIGT & in main gemergt: Online-Terminbuchung (Kalender + Popup, calendarSrc gesetzt); „GoHighLevel" kundenseitig entfernt (Datenschutz/Consent → Auftragsverarbeiter nur „linkty.ai"); Datenschutz konkretisiert (Netlify); Bilder auf next/image; ESLint-Flat-Config; Code-Cleanup; Umami-Events auf CTAs. Jeder PR lokal build-verifiziert (npm ci/build/lint grün).
- OFFEN als PR #9 (Review/Merge durch Kunde): next/font + Marken-OG/Favicon. Braucht zwei Binär-Commits (public/images/favicon.png 512×512, og-default.png 1200×630 — vom Agent generiert) und die Netlify-Preview als Build-Gate (next/font lädt Fonts nur mit echtem Internet, nicht in der Sandbox).
- NOCH BENÖTIGT (Kunde/extern): finale Preisfreigabe; rechtliche Datenschutz-Freigabe; GBP-Zugang + Alt-Marke „Olaf Weiland"/NAP konsolidieren; Domain hamburgsgarage.de scharf schalten (Details in der Go-Live-Checkliste im Abschnitt „Go-Live-Roadmap")."
