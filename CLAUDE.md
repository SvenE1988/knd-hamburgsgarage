# Hamburgs GaRage — Projektregeln für Claude

Website der **Hamburgs GaRage**, KFZ-Meisterbetrieb in Hamburg-Eimsbüttel. SEO-orientierter Relaunch als Next.js-App. Aktuell als Netlify-Draft live, Go-Live unter hamburgsgarage.de nach Kundenfreigabe.

## Stack & Befehle
- **Next.js 16** (App Router) + **TypeScript**, **pure CSS** (kein Tailwind), kein CMS.
- Läuft als Standard-Next.js auf der **Netlify Next.js Runtime** (OpenNext, zero-config) — kein statischer Export.

```bash
npm run dev        # http://localhost:3000
npm run build      # Production-Build (.next)
npm run lint       # ESLint (Flat-Config)
```

Build nach jeder signifikanten Änderung verifizieren. Deployment: Push auf `main` → Netlify baut automatisch (Continuous Deployment via GitHub). Build-/Deploy-Status liest Claude über das Netlify CLI aus.

## Source of Truth — nicht hartkodieren, nicht duplizieren
- `src/lib/site.ts` — NAP, Telefon, WhatsApp, Umami, Place ID, Buchungs-URLs (`calendarSrc`).
- `src/lib/services.ts` — Leistungen, Richtpreise, Online-Buchbarkeit (`bookable`).
- `src/lib/ratgeber.ts` — Ratgeber-Artikel.
- `src/lib/schema.ts` — JSON-LD.
- `src/app/globals.css` — Designsystem (CSS-Variablen, Fonts via `--font-*`).

## Harte Konventionen
- **Kein „GoHighLevel" kundenseitig.** Sichtbar nur „Online-Terminbuchung" / „Kontaktformular" / „Chat". Im Datenschutz heißt der Auftragsverarbeiter ausschließlich **linkty.ai** (nicht GoHighLevel/HighLevel, nicht Erkens Consulting). Code-intern darf der `ghl`-Key in site.ts bleiben (für Besucher unsichtbar).
- **Buchungslogik** (`bookable` in services.ts): online buchbar = Inspektion, Bremsen, Achsvermessung, Reifen, Klima. Nur telefonisch/Anfrage = HU/AU, Unfall-Lack-Glas, Werkstattersatzwagen.
- **Preise** sind Richtpreise mit Pflicht-Disclaimer, bis der Kunde final freigibt.
- **Kundenvorgaben für Texte:** Eimsbüttel betonen; keine Oldtimer/Exoten; Lackierarbeiten = Partnerunternehmen; eigenes Reifenlager hervorheben.
- **SEO-Grundregel:** genau ein H1 je Seite; Title/Meta/Canonical/OG je Seite; crawlbarer Text; JSON-LD aus schema.ts. `datenschutz/` bleibt noindex.

## Sprache
Code Englisch (Variablen, Funktionen). Content/UI-Strings/Routes Deutsch (`/leistungen`, `/kontakt`). Echte Umlaute überall.

## Weiterführende Doku
- [docs/projekt-konzept.md](docs/projekt-konzept.md) — Positionierung, Informationsarchitektur, SEO-Konzept, Integrationen, Architektur-Entscheidungen.
- [docs/go-live-checkliste.md](docs/go-live-checkliste.md) — Stand und offene Punkte bis zum Go-Live.
