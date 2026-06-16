# Hamburgs GaRage – Website (Next.js, Version 2)

Cineastische, SEO-optimierte Website für die **Hamburgs GaRage**, KFZ-Meisterbetrieb in Hamburg-Eimsbüttel.
Statisch exportierte Next.js-App (kein Server, kein CMS) – für **Netlify** vorbereitet.

## Tech-Stack
- **Next.js 16** (App Router) + **TypeScript**
- **Pure CSS** Designsystem (`src/app/globals.css`) – kein Tailwind, minimale Build-Abhängigkeiten
- **Statischer Export** (`output: 'export'`) → `out/`
- Inhalte als typisierte Daten (`src/lib/*`)

## Schnellstart
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # erzeugt /out (statisch)
npm run preview    # /out lokal ansehen
```

## Deployment (Netlify)
Repo auf GitHub pushen, in Netlify verbinden. `netlify.toml` ist bereits konfiguriert:
- Build: `npm run build` · Publish: `out` · Node 22
- 301-Redirects der alten URLs (`/index`, `/unser-service`, `/uber-uns`, `/anfahrt`)
- Security- und Caching-Header

## Projektstruktur
```
src/
  app/            Seiten (Start, leistungen/[slug], ueber-uns, faq, kontakt,
                  kostenvoranschlag, termin, ratgeber/[slug], impressum, datenschutz)
                  + layout.tsx, globals.css, sitemap.ts, robots.ts, not-found.tsx
  components/     Header, Footer, IntroOverlay, ServiceCard, PriceTable, CtaBand,
                  GhlForm, ChatWidget, ConsentBanner, MapEmbed, WhatsAppFab, icons …
  lib/            site.ts (NAP/Integrationen) · services.ts (Leistungen + Preise)
                  ratgeber.ts · schema.ts (JSON-LD)
public/images/    optimierte WebP-Bilder + Logo
public/videos/    hero.mp4 (Header) · intro.mp4 (Logo-Intro)
```

## Wichtige Stellen zum Pflegen
- **NAP, Telefon, WhatsApp, Umami, GHL, Place ID:** `src/lib/site.ts`
- **Leistungen + Richtpreise + Online-Buchbarkeit (`bookable`):** `src/lib/services.ts`
- **Ratgeber-Artikel:** `src/lib/ratgeber.ts`

## Integrationen
- **Umami** (cookieless): in `layout.tsx`, Konfiguration in `site.ts`.
- **GoHighLevel-Formular** (`GhlForm`): auf `/kontakt/`, `/kostenvoranschlag/`, `/termin/`. Das Innendesign wird in GHL gepflegt.
- **GHL-Chat-Widget** (`ChatWidget`, Variante „via Code“): lädt **erst nach Consent**.
- **WhatsApp**: Button (`wa.me`) – Nummer in `site.ts`.
- **Google Maps** (`MapEmbed`): Klick-zum-Laden (DSGVO).
- **Service-Kalender (GHL):** sobald verfügbar, `calendarSrc` in `site.ts` setzen und auf `/termin/` einbinden.

## Vor dem Go-Live
- [ ] **Preise** vom Kunden final bestätigen lassen (`services.ts`; aktuell Platzhalter mit Disclaimer).
- [ ] **Datenschutzerklärung** rechtlich prüfen und Dienste konkret benennen.
- [ ] **GHL-Service-Kalender** einbinden (sobald fertig).
- [ ] Eigene **favicon.ico** / **OG-Bild** ergänzen (aktuell Logo).
- [ ] Optional: GHL-Formular-Farben in GHL auf Anthrazit/Rot stellen (100 % Match).
