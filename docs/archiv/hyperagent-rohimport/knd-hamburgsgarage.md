# knd - HamburgsGaraGe

Project document for knd - HamburgsGaraGe

## Goals

SEO-orientierter Relaunch der Website hamburgsgarage.de (Hamburgs GaRage, KFZ-Meisterbetrieb in Hamburg-Eimsbüttel). Ziel: moderne, schnelle, wartbare Next.js-Seite mit solider SEO-Substanz. Go-Live unter hamburgsgarage.de nach finaler Kundenfreigabe; aktuell als Netlify-Draft live (entwurf-hamburg-garage.netlify.app).

## Critical Facts

- Code (Source of Truth): https://github.com/SvenE1988/knd-hamburgsgarage – über die GitHub-Integration les-/schreibbar (nur Text, s. Notes); aktuellen Stand immer aus dem Repo ziehen. main-HEAD nach Merge der Umstellung: 9b078111.
- Stack: Next.js 16 (App Router) + TypeScript, pure CSS (kein Tailwind). KEIN statischer Export mehr (seit 2026-06-17) – läuft als Standard-Next.js auf der Netlify Next.js Runtime (OpenNext, zero-config). netlify.toml: Build „npm run build", Publish „.next", Node 22, 301-Redirects (alte WordPress-URLs) + Security-/Cache-Header. Draft: entwurf-hamburg-garage.netlify.app.
- Assets (Bilder/Videos) liegen im Repo unter public/images und public/videos. Wichtig: Die GitHub-Integration kann nur TEXT schreiben – Binärdateien daher per git-push (Claude Code/lokal) oder via PAT-Skill (REST git blobs API, base64), NICHT über die Integrations-Schreibtools.
- Zentrale Konfiguration & alle Integrations-IDs in src/lib/site.ts (nicht hartkodieren/duplizieren). Leistungen+Preise: src/lib/services.ts; Ratgeber: src/lib/ratgeber.ts; JSON-LD: src/lib/schema.ts; Designsystem: src/app/globals.css.
- Integrationen: Umami (cookieless, analytics.erkens.cloud – in site.ts gesetzt), GoHighLevel (Formular + Chat hinter Consent; Service-Kalender folgt → calendarSrc in site.ts noch leer), WhatsApp (wa.me/4940407173), Google Maps (Klick-zum-Laden), Google Place ID ChIJ3ZroK1GPsUcRyTYVGltVy-4.
- Projekt-Agent: „knd · Hamburgs GaRage". Tieferes Konzept: Dokument „Hamburgs GaRage – Gesamtkonzept & Go-Live-Roadmap".

- UPDATE 2026-06-17 (Session 2): main-HEAD jetzt a5f07e0b (nach Merge PR #3–#7, je squash). calendarSrc/calendarScript in site.ts gesetzt (link.linkty.ai/widget/booking/8EPXYEVp4afKCoHyCGDh + embed.js). Alle Bilder auf next/image (priority auf Hero-Bildern). ESLint-Flat-Config aktiv → npm run lint. „GoHighLevel" kundenseitig entfernt; Datenschutz nennt den Auftragsverarbeiter ausschließlich „linkty.ai", Hosting = Netlify konkret. Lokaler Build-Workflow in der Sandbox: Quellcode via codeload.github.com-Tarball ziehen, npm nutzen (registry.npmjs.org muss PRO THREAD via Netzwerk-Freigabe erlaubt werden; git clone von github.com bleibt proxy-geblockt mit 407, api.github.com ebenfalls).

- UPDATE Session 2 (Teil 2): main-HEAD db177be6 (nach PR #8 Umami-Events). PR #9 (next/font + Marken-OG/Favicon) ist OFFEN und wartet auf zwei Binär-Commits (public/images/favicon.png, public/images/og-default.png) + Netlify-Build. Dauerhafter Hinweis fürs Weiterarbeiten: next/font baut NICHT lokal in der Sandbox (next/font lädt Fonts via Node-fetch, das HTTPS_PROXY ignoriert) → next/font-Änderungen immer über die Netlify Deploy Preview verifizieren; Code vorab mit „npx tsc --noEmit" + „npm run lint" prüfen. Normale Builds lokal weiterhin via codeload.github.com-Tarball + npm (registry.npmjs.org pro Thread freigeben). Bilder zu favicon/OG wurden generiert (im Thread als Download)."

## Research & Findings

## Ist-Analyse der alten Website (vor Relaunch)
- Technik: WordPress + Elementor Pro (Hello-Elementor-Child-Theme); kein SEO-Plugin (nur WP-Core-Sitemap).
- Struktur (8 Seiten): /, /index/ (Dublette), /uber-uns/, /unser-service/ (EINE Sammelseite, keine Einzel-Leistungsseiten), /kontakt/, /anfahrt/ (fast leer), /impressum/, /datenschutz/.
- On-Page-SEO faktisch null: keine Meta-Descriptions, KEIN H1 (oberste Überschrift jeweils H2), Titles nur Seitenname+Marke, kein strukturiertes Markup, sehr dünner Content, Leistungen als Bilder (kaum crawlbar).
- NAP: Hamburgs GaRage G.B. & R.S. GmbH, Osterstraße 62-64, 20259 Hamburg-Eimsbüttel, Tel 040 407173, info@hamburgsgarage.de, Mo–Do 8:00–17:15 / Fr 8:00–15:15. Inhaber Rade Stojkovic & Gabor Böhm, HRB 166741 (AG Hamburg). On-Site NAP-Inkonsistenzen (Schreibweisen/Telefonformate).
- Tatsächliche Leistungen lt. Altseite: Achsvermessung, HU/AU, Ölservice, Inspektion, Klimaservice, Reifenservice, Unfallschäden, Glasschäden, Lackierarbeiten, Original-Ersatzteile, Werkstattersatzwagen. (Bremsenservice war NICHT gelistet → vom Kunden bestätigt: ist im Angebot.)
- Wichtiger Befund (Local SEO): gleiche Adresse + Telefon wie früherer Betrieb „Olaf Weiland" (autowerkstatt-weiland.de) → Hamburgs GaRage ist offenbar Nachfolger/Rebrand. Alt-Listings/Citations/ggf. altes Google-Profil konsolidieren bzw. umleiten.

## Wettbewerb (Eimsbüttel / Hamburg-West)
- KFZ Gollnick (Goebenstraße, sehr geringe Sichtbarkeit ~300 Besuche/Monat), autoPRO S.Thomas (Henriettenstraße, Meister + Lackiererei), Eger & Hornung / autoservice-eimsbuettel.de (TYPO3, hat News/Ratgeber → stärkster Content-Player), Auto Haake (Stellingen, starkes Stadtteil-Targeting), HS KFZ (Eidelstedt), First Stop, EGE KFZ.
- Meist WordPress-/Baukasten-Seiten, technisch dünn, geringe Sichtbarkeit → lokaler Markt ist gut gewinnbar.

## Abgeleitete SEO-Chancen
- Dedizierte Leistungsseiten je Service statt Sammelseite (lokaler Keyword-Fokus „… Hamburg-Eimsbüttel").
- Local SEO: konsistente NAP, optimiertes Google Business Profil, LocalBusiness/AutoRepair-Schema.
- HU/AU als eigene Seite (hohes lokales Suchvolumen, klare Kaufabsicht).
- USP Unfall/Lack/Glas bündeln; Ratgeber als Content-/Long-Tail-Motor (schlägt den Wettbewerb inhaltlich).

(Tiefere Ausführung im Dokument „Hamburgs GaRage – Gesamtkonzept & Go-Live-Roadmap".)

## Decisions

- Designrichtung: Version 2 (cineastisch, dunkel, Signalrot/Anthrazit, Logo-Vollbild-Intro).
- Pure CSS statt Tailwind (geringeres Build-Risiko, validiertes Design wiederverwendet).
- Kein CMS – Inhalte als typisierte Daten im Repo.
- Workflow: Agent arbeitet auf Branches + Pull Requests gegen main; Nutzer macht Schnellkorrekturen via Claude Code/IDE.
- npm in der Sandbox freigegeben (registry.npmjs.org) → Build-Verifikation vor PR möglich.
- Dedizierter Projekt-Agent statt geteiltem Default-„Developer"; volatiler Stand in diesem Doc, nicht im System-Prompt.
- Architektur (umgesetzt & gemerged am 2026-06-17, PR #1, main 9b078111): Standard-Next.js auf der Netlify Next.js Runtime statt statischem Export. Grund: output:"export" war ein Relikt der initialen ZIP-Übergabe, bevor GitHub/Netlify verbunden waren. Damit entfallen force-static (robots/sitemap), images.unoptimized und Header-Workarounds; next/image-Optimierung, ISR & Route Handler sind nun möglich. Geändert: next.config.mjs, robots.ts, sitemap.ts, netlify.toml (publish out→.next), package.json, README.



- Online-Terminbuchung & Naming (2026-06-17): Buchungskalender eingebunden (calendarSrc + calendarScript in site.ts: link.linkty.ai/widget/booking/8EPXYEVp4afKCoHyCGDh + link.linkty.ai/js/embed.js). Kundenseitige Bezeichnung durchgängig „Online-Terminbuchung" / „Online-Termin buchen" — KEIN Markenname „GoHighLevel" im Frontend (Wunsch Kunde). Im Rechtstext (Datenschutz) wird der Auftragsverarbeiter AUSSCHLIESSLICH als „linkty.ai" benannt — NICHT „Erkens Consulting", NICHT „GoHighLevel/HighLevel". Umgesetzt in PR #3 (Kalender) und PR #4 (Datenschutz/Consent-Naming). Code-intern darf der site.ts-Key „ghl" bleiben (für Besucher unsichtbar); Chat-Widget lädt technisch weiterhin von widgets.leadconnectorhq.com (nur im Netzwerk-Tab sichtbar).

## Tasks

ERLEDIGT:
- Phase-1-Code (V2-Design, 16 Routen, technische SEO + Schema), 7 Ratgeber-Artikel, Code + Assets in GitHub, Netlify verbunden (Draft live).
- Architektur-Umstellung statischer Export → Netlify Next.js Runtime (PR #1 gemerged, main 9b078111). Server-Build verifiziert. Repo sauber: nur Branch main, keine offenen Branches.

NÄCHSTE SCHRITTE (Stand 2026-06-17, priorisiert):

A) Direkt umsetzbar durch den Agent (je eigener Branch + PR, Build vor PR):
1. Bilder auf next/image umstellen — rohe <img> (page.tsx, ServiceCard, Leistungs-/Ratgeber-Seiten) schrittweise auf next/image (width/height/sizes; priority fürs Hero-Poster). Erst damit greift die mit der Runtime gewonnene automatische Bildoptimierung (AVIF/responsive). Wichtigster Performance-/CWV-Hebel der Umstellung.
2. ESLint ergänzen — standalone eslint.config.mjs (Flat-Config) + eslint-config-next + npm-Script "lint". Aktuell gibt es gar kein Linting (der alte eslint-Key in next.config wurde mit Next 16 entfernt — korrekt, aber Ersatz fehlt). Ermöglicht Selbst-Check vor PRs.
3. Code-Cleanup — Inline-Styles (z. B. style minHeight 420 in page.tsx) → CSS-Klassen in globals.css; Doppelungen konsequent aus site.ts ableiten.

B) Braucht Kunden-/Extern-Input (jetzt anstoßen):
4. GoHighLevel-Service-Kalender — sobald Booking-URL/Region vorliegt: calendarSrc in site.ts setzen, auf /termin/ einbinden + Popup auf den buchbaren Leistungsseiten (Inspektion, Bremsen, Achsvermessung, Reifen, Klima).
5. Finale Preisfreigabe durch den Kunden (services.ts; bis dahin Richtpreise + Disclaimer live).
6. Datenschutzerklärung rechtlich prüfen und Dienste konkret benennen (GoHighLevel/LeadConnector, Umami, WhatsApp, Google Maps).
7. Local SEO: Google Business Profil optimieren; NAP/Citations vereinheitlichen; Alt-Marke „Olaf Weiland" (gleiche Adresse/Telefon) konsolidieren/umleiten.

C) Vor Go-Live:
8. Eigenes favicon.ico + OG-Bild ergänzen (Anthrazit/Signalrot, Logo). Binär → per git-push committen oder via PAT-Skill (s. Notes).
9. Optional: PAT-Skill für Binär-Commits einrichten, damit der Agent Assets selbst ins Repo schreiben kann (sonst manueller git-push nötig).
10. Domain hamburgsgarage.de scharf schalten (nach Kundenfreigabe) → Google Search Console, Redirect-Check, CWV-Check, Monitoring.



UPDATE 2026-06-17 (Session 2):
- ERLEDIGT (offen zum Merge) — PR #3: Online-Terminbuchung. calendarSrc/calendarScript in site.ts gesetzt; neue Komponenten CalendarEmbed (lädt embed.js) + BookingDialog (Modal-Popup); /termin/ zeigt echten Kalender statt Platzhalter; die 5 buchbaren Leistungsseiten öffnen das Buchungs-Popup. Damit ist der frühere Punkt B4 (Service-Kalender) erledigt.
- ERLEDIGT (offen zum Merge) — PR #4: „GoHighLevel" kundenseitig entfernt (ConsentBanner neutral) + Datenschutz konkretisiert (Abschnitt 2 Netlify inkl. AVV/US-Transfer; Abschnitt 4/5 Auftragsverarbeiter nur „linkty.ai", Art. 28, Server DE; Platzhalter entfernt). Punkt B6 damit bis auf die finale rechtliche Freigabe abgeschlossen.
- OFFEN (Agent, direkt umsetzbar): next/image-Umstellung; ESLint-Flat-Config; Code-Cleanup (inkl. Modal-Styles aus BookingDialog nach globals.css überführen); optional Umami-Events auf Anruf/WhatsApp/Buchung.
- OFFEN (braucht Asset-Commit): eigenes favicon.ico + OG-Bild — binär, daher PAT-Skill oder lokaler git-push nötig (Integration schreibt nur Text).
- WICHTIGER BLOCKER für lokale Build-Verifikation: Repo ist privat; Sandbox-Proxy blockt git clone von github.com (407). raw.githubusercontent.com IST erreichbar (Text-Reads via download_url-Token funktionieren), npm-Install teils gesperrt (esbuild E403). Build-Gate aktuell = Netlify Deploy Preview je PR. Empfehlung: PAT-Skill einrichten → entsperrt sowohl lokales „npm run build" als auch die Binär-Commits (Favicon/OG).



ABSCHLUSS 2026-06-17 (Session 2) — alle Agent-seitigen Code-Aufgaben erledigt und in main gemergt (HEAD a5f07e0b). Lokale Build-Verifikation war möglich: registry.npmjs.org für diesen Thread freigegeben, Quellcode via codeload.github.com-Tarball (github.com-Clone bleibt proxy-geblockt 407). Gemergte PRs: #3 Online-Terminbuchung (Kalender + Buchungs-Popup), #4 GoHighLevel-Naming + Datenschutz konkretisiert, #5 Bilder auf next/image, #6 ESLint-Flat-Config, #7 Code-Cleanup. Finaler Stand verifiziert: npm ci + npm run build + npm run lint grün (0 Fehler, 3 bewusste Warnungen: 2x SSR-sicheres set-state-in-effect, 1x no-page-custom-font).

OFFEN — nur noch Kunde/extern:
- favicon.ico + OG-Bild committen (binär; Sven macht das separat per Claude Code/git-push).
- Finale Preisfreigabe (services.ts; bis dahin Richtpreise + Disclaimer live).
- Rechtliche Freigabe der Datenschutzerklärung (Hinweis-Banner bleibt bis dahin).
- Local SEO: GBP-Zugang, NAP/Citations + Alt-Marke „Olaf Weiland" konsolidieren.
- Domain hamburgsgarage.de scharf schalten (Search Console, Redirect-Check, CWV-Check, Monitoring).
- Optional (Agent kann): next/font-Migration (behebt letzte Lint-Warnung no-page-custom-font + Font-Performance); Umami-Events auf Anruf/WhatsApp/Buchung.



UPDATE 2026-06-17 (Session 2, Teil 2) — Zusatz-PRs & Assets:
- ERLEDIGT & gemergt: PR #8 Umami-Events (data-umami-event: Anruf/WhatsApp/Termin-Buchung) → main db177be6.
- OFFEN: PR #9 (next/font + Marken-OG/Favicon) — bewusst NICHT gemergt. Braucht zwei Binärdateien (public/images/favicon.png 512×512, og-default.png 1200×630 — vom Agent generiert, im Chat als Download) und die Netlify-Preview als Build-Gate. Grund: next/font lädt Fonts via Node-fetch, der den Sandbox-Proxy nicht nutzt → lokal nicht baubar; Code ist per tsc --noEmit + eslint verifiziert (0 Fehler).
- Marken-Assets generiert: Emblem-Favicon (neutraler Oldtimer, kein Fremdmarken-Stern) + OG-Karte (Logo + „KFZ-Meisterbetrieb in Hamburg-Eimsbüttel").
- Go-Live-Checkliste erstellt: im Dokument „Hamburgs GaRage – Gesamtkonzept & Go-Live-Roadmap", Abschnitt „Go-Live-Roadmap (Phasen)".

## Notes

Arbeitsweise & dauerhafte Hinweise:
- Workflow: Agent arbeitet auf Branch + Pull Request gegen main; Build (npm run build) vor PR verifizieren; Status/To-dos in diesem Projekt-Dokument pflegen (nicht im System-Prompt). main-Stand immer frisch aus dem Repo ziehen.
- GitHub-Integration schreibt nur Text: Binärdateien (Bilder/Videos/favicon/OG) nie über die Integrations-Tools (create_or_update_file/push_files) committen — sie landen sonst als base64-Text. Stattdessen git-push (Claude Code/lokal) oder PAT-Skill (REST git blobs API, encoding=base64). Empirisch getestet am 2026-06-17.
- Kundenvorgaben strikt: Eimsbüttel betonen; keine Oldtimer/Exoten in Texten; Lackierarbeiten = Partnerunternehmen; eigenes Reifenlager hervorheben.
- Local-SEO-Befund: gleiche Adresse/Telefon wie früherer Betrieb „Olaf Weiland" → Alt-Listings/Citations konsolidieren.
- Buchungslogik (services.ts, bookable): online buchbar = Inspektion, Bremsen, Achsvermessung, Reifen, Klima; nur telefonisch/Anfrage = HU/AU, Unfall-Lack-Glas, Werkstattersatzwagen.
- Erledigte frühere „Quirks": force-static in robots/sitemap und der eslint-Key in next.config sind mit der Umstellung auf die Netlify Next.js Runtime gegenstandslos (force-static entfernt; ESLint künftig als separate Flat-Config, nicht über next.config). Hinweis zur Historie: main enthält zwei harmlose No-op-Test-Commits (Binär-API-Check, Datei wieder entfernt).
