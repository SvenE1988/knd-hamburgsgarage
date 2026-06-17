# Thread Context

Key facts and notes for this thread. Updated by agent, survives context compaction.

## Plan Overview

Stand (frischer Repo-Abgleich, main 9b078111): Phase 1 ist fertig und gemergt — V2-Design (cineastisch, dunkel, Signalrot/Anthrazit, Logo-Intro), 16 Routen inkl. 8 Leistungsseiten, technische SEO (genau ein H1 je Seite, Title/Meta/Canonical/OG, JSON-LD, sitemap/robots, 301-Redirects) und 7 Ratgeber-Artikel. Die Architektur läuft jetzt als Standard-Next.js auf der Netlify Next.js Runtime (kein statischer Export mehr). Draft live auf entwurf-hamburg-garage.netlify.app. Inhalte liegen typisiert in src/lib (site.ts, services.ts, ratgeber.ts, schema.ts). Buchungslogik steht: online buchbar sind Inspektion, Bremsen, Achsvermessung, Reifen und Klima; nur telefonisch HU/AU, Unfall-Lack-Glas und Werkstattersatzwagen.

Offen und sofort durch mich umsetzbar: Der Terminkalender war blockiert, weil die Booking-URL fehlte — die liegt jetzt vor. Zusätzlich offen sind die next/image-Umstellung (größter CWV-Hebel), eine ESLint-Flat-Config, ein Code-Cleanup und ein eigenes OG-Bild/Favicon. Neu von dir: der Name GoHighLevel soll kundenseitig nicht mehr auftauchen.

Deine zwei neuen Inputs. (1) Terminkalender: Ich setze die Booking-URL als calendarSrc in site.ts, baue eine CalendarEmbed-Komponente (lädt link.linkty.ai/js/embed.js), ersetze den Platzhalter-Hinweis auf /termin/ durch den echten Kalender und ergänze ein Buchungs-Popup auf den fünf online-buchbaren Leistungsseiten. (2) GoHighLevel-Name: Kundenseitig steht der Name nur in der Datenschutzerklärung (Abschnitt 4 Formular, Abschnitt 5 Chat). Empfehlung: sichtbare Funktionsbezeichnungen ohne Markenname (z. B. Online-Terminbuchung, Kontaktformular, Chat) und im Rechtstext den Auftragsverarbeiter sauber als linkty.ai (Betreiber: Erkens Consulting GmbH) benennen. Das ist die ehrliche und korrekte Kette: linkty.ai ist eure White-Label-Plattform, die technische Subverarbeitung gehört in den AVV, nicht auf die öffentliche Seite. Die White-Label-URLs (link.linkty.ai) zeigen ohnehin keinen Fremdnamen; lediglich das Chat-Widget lädt technisch von leadconnectorhq.com, was für Besuchertexte irrelevant ist. Den finalen Rechtstext bitte wie gehabt rechtlich freigeben lassen.

Weitere begründete Empfehlungen: next/image zuerst (direkter LCP-/CWV- und Ranking-Hebel, jetzt erst durch die Runtime möglich); OG-Bild und Favicon (saubere Linkvorschau bei WhatsApp/Google, schneller Win); Umami-Events auf Anruf, WhatsApp und Buchung (macht den ROI für den Kunden messbar); ein Lighthouse-/Accessibility-Pass inkl. Kontrastprüfung Rot-auf-Anthrazit; Ladeverhalten der Videos prüfen (schwerstes Asset, darf LCP nicht blockieren); Redirect-QA der Alt-URLs vor Go-Live; und die Alt-Marke Olaf Weiland konsolidieren statt ein neues Profil anzulegen (erhält lokale Signale). Am Rande: kurz prüfen, ob das BFSG (Barrierefreiheit, seit 28.06.2025) für die Seite relevant ist — bei reiner Terminanfrage eher gering, aber erwähnenswert.

Ziel: Nach diesen PRs ist alles Agent-seitige erledigt. Offen bleiben nur Punkte mit zwingender Kundenfreigabe: finale Preise, rechtliche Freigabe der Datenschutzerklärung, GBP-Zugang für Live-Bewertungen und das scharfe Schalten der Domain hamburgsgarage.de.

Arbeitsweise: je logische Änderung ein eigener Branch und Pull Request gegen main, der Build (npm run build) wird vor jedem PR verifiziert. Binärdateien (OG/Favicon) kommen per git-push oder PAT-Skill ins Repo, nicht über die Text-Integration.

## Plan Tasks

- [x] Online-Terminbuchung: Kalender + Buchungs-Popup (PR #3, gemergt).
- [x] GoHighLevel kundenseitig entfernt + Datenschutz konkretisiert (PR #4, gemergt).
- [x] Bilder auf next/image (PR #5, gemergt).
- [x] ESLint Flat-Config + lint-Script (PR #6, gemergt).
- [x] Code-Cleanup: Modal-Styles in CSS, ungenutzte Importe (PR #7, gemergt).
- [x] Umami-Events auf CTAs (PR #8, gemergt).
- [x] favicon + OG-Bild generiert (Emblem-Favicon 512, OG-Karte 1200x630) - als Download im Chat.
- [x] next/font-Migration + Marken-OG/Favicon-Metadaten: PR #9 OFFEN (braucht die 2 Bild-Commits + Netlify-Build, da next/font lokal nicht baut).
- [x] Go-Live-Checkliste erstellt (im Gesamtkonzept-Dokument, Abschnitt Go-Live-Roadmap).
- [x] Beide Projektdokumente aktualisiert.
- [ ] DU: favicon.png + og-default.png nach public/images/ committen, PR #9 nach grüner Netlify-Preview mergen.
- [ ] Kunde/extern: Preise, Datenschutz-Freigabe, GBP/NAP + Weiland, Domain scharf schalten (siehe Checkliste).
