# Performance-Baseline & Lighthouse-Messung

Stand: 2026-06-17. Nach der Performance-Optimierungs-Session (Intro/Hero-Video-Re-Encode, Favicon, Fonts, Form/Calendar-Gates, Hero-Poster via next/image).

## Messaufbau

- Gegen **Production-Build** gemessen (`next build` + `next start -p 3100`), NICHT Dev-Server.
- Lighthouse 13.4 (via `npx lighthouse@13`), Headless Chrome.
- Mobil: `--form-factor=mobile --throttling-method=simulate` (Lighthouse-Default: ~1,6 Mbit/s, 4× CPU-Drossel).
- Desktop: `--preset=desktop`.
- **Lokal gemessen** — die echte Baseline kommt nach dem Netlify-Deploy gegen die Live-URL (CDN, echte Latenz). Lokal fehlen CDN-Edge und Durable-Cache, dafür auch keine echte Netzwerk-Latenz.

## Ergebnisse

| Seite | Form-Faktor | Score | FCP | LCP | TBT | CLS | SI |
|-------|-------------|-------|-----|-----|-----|-----|-----|
| Startseite | Desktop | **100** | 0,2 s | 0,7 s | 0 ms | 0 | 0,5 s |
| Leistungen | Desktop | **100** | 0,2 s | 0,7 s | 0 ms | 0 | 0,5 s |
| Startseite | Mobil | **83** | 1,4 s | **4,5 s** | 0 ms | 0 | 2,7 s |
| Leistungen | Mobil | **91** | 0,8 s | **3,5 s** | 0 ms | 0 | 1,3 s |

## Befund

**Desktop ist perfekt (100/100).** TBT 0 ms und CLS 0 auf allen vier Läufen — die Rendering-Strategie (statisch), Font-Loading (next/font, swap), Widget-Gating und die feste Höhe der Embeds zahlen sich aus. Keine Layout-Shifts, kein blockierendes JS.

**Mobil ist der LCP der Engpass.** Score 83 (Start) / 91 (Leistungen), allein durch LCP über dem 2,5-s-Ziel. Alles andere (TBT, CLS) ist mobil ebenfalls top.

### Ursache des Mobil-LCP — dominanter Faktor: Video

Die größten Ressourcen im Netzwerk (Mobil-Startseite):

| Größe | Typ | Datei |
|-------|-----|-------|
| 2,9 MB | Media | `/videos/hero.mp4` |
| 2,8 MB | Media | `/videos/intro.mp4` |
| 135 KB | Image | `/images/hero-poster.webp` (rohes `poster`-Attribut) |
| 45 KB | Image | next/image-Variante des Posters (`w=750`) |

**Beide Videos laden auch mobil voll** (zusammen 5,6 MB). Grund: `preload="metadata"` begrenzt nur das Vorab-Laden, nicht das Abspielen. Das Hero-Video hat `autoPlay` → zieht die ganze Datei; das Intro wird per JS `.play()` gestartet → ebenso. Auf der simulierten ~1,6-Mbit/s-Mobilverbindung sättigen die 5,6 MB die Bandbreite und ziehen LCP/TTI nach oben, obwohl Video selbst kein LCP-Element ist (es konkurriert um die Leitung).

### Bekanntes Folge-Problem: Poster lädt doppelt

Das Hero-Poster wird zweimal geladen: einmal als rohes `poster="/images/hero-poster.webp"`-Attribut am `<video>` (135 KB) und einmal als next/image-optimierte Variante (45 KB), die in dieser Session ergänzt wurde. Redundanz — das rohe `poster`-Attribut könnte entfernt werden, da das next/image-Element bereits den ersten Frame liefert.

## Offene Hebel (nicht in dieser Session umgesetzt)

Priorisiert nach Mobil-LCP-Wirkung:

1. **Video mobil nicht voll laden** (hoch). Optionen: Hero-Video auf schmalen Viewports per Media-Query / JS gar nicht abspielen (nur Poster zeigen), oder `autoPlay` mobil aussetzen. Das ist der größte verbliebene Mobil-Hebel. (User hatte sich in der Session für „Video auch mobil" entschieden — das ist der Trade-off, der den Mobil-LCP kostet. Bei Bedarf neu abwägen.)
2. **Doppeltes Poster auflösen** (niedrig). Rohes `poster`-Attribut am `<video>` entfernen, da next/image-Poster den Erst-Frame liefert. Spart 135 KB.
3. **Intro-Video auf der Startseite** (mittel). Das Intro liegt global im Layout und lädt mit. Wenn es nur auf `/` nötig ist, dort scoped einbinden; auf Unterseiten fällt es weg.
4. **Unused JS** (niedrig): Lighthouse meldet ~28 KB / 150 ms ungenutztes JS — React-19-Baseline, geringe Priorität.

## Reproduktion

```bash
npm run build
npx next start -p 3100 &
# Mobil:
npx lighthouse@13 http://localhost:3100/ --only-categories=performance \
  --form-factor=mobile --throttling-method=simulate \
  --chrome-flags="--headless=new" --output=json --output-path=/tmp/lh-mobile
# Desktop:
npx lighthouse@13 http://localhost:3100/ --only-categories=performance \
  --preset=desktop --chrome-flags="--headless=new" --output=json --output-path=/tmp/lh-desktop
```

Chrome muss installiert sein (`CHROME_PATH` ggf. setzen). Lighthouse ist nicht global installiert, läuft on-demand via npx.
