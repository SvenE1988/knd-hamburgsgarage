---
paths:
  - "netlify.toml"
  - "next.config*"
---

# Netlify Deployment & Build-Überwachung

## Projekt
- Site: `entwurf-hamburg-garage`, ID `d914618d-40be-49a7-bb63-a5c943686c02`, Team `se-Website-Team`
- Continuous Deployment über GitHub: Push auf `main` baut automatisch. Kein `netlify init` nötig.
- Build-Konfiguration in `netlify.toml` (nicht im Dashboard): Build `npm run build`, Publish `.next`, Node 22, 301-Redirects + Security-/Cache-Header. Netlify Next.js Runtime (OpenNext), zero-config.
- Admin: https://app.netlify.com/projects/entwurf-hamburg-garage · Live: https://entwurf-hamburg-garage.netlify.app

## CLI-Verknüpfung
Der `.netlify`-Ordner ist gitignored, die lokale Verknüpfung geht bei frischem Clone verloren. Re-Link für CLI-Zugriff:

```
netlify link --id d914618d-40be-49a7-bb63-a5c943686c02
```

## Build nach Push überwachen
Verlässlicher Status-Check (ein Aufruf, liefert State + Commit + Build-Zeit):

```
netlify api listSiteDeploys --data '{"site_id":"d914618d-40be-49a7-bb63-a5c943686c02","per_page":2}'
```

`state: ready` = Build grün, `state: error` = fehlgeschlagen (dann `error_message` lesen). `building`/`enqueued` = läuft noch, erneut prüfen. **Nicht** `getSiteDeploy` zum Pollen nehmen — gab in der Praxis kein verwertbares JSON. Build dauert typisch 30–90 s, auch bei reinen Doku-Änderungen (voller Rebuild).

## Passende Skills (Plugin `netlify-skills`, in settings.local.json aktiviert)
- `netlify-cli-and-deploy` — CLI-Grundlagen: linken, deployen, Env-Vars, local dev. Erste Anlaufstelle für CLI-Fragen.
- `netlify-frameworks` — Next.js auf Netlify (Adapter/Runtime, SSR).
- `netlify-config` — `netlify.toml`-Syntax: Redirects, Header, Deploy-Kontexte.
- `netlify-checkup` (globaler Skill) — Projekt-Checkup bei Wiederaufnahme.

Hinweis: Diese Skills decken Setup/Deploy/Config ab, **nicht** den Status-Poll oben. Der Monitoring-Workflow (`listSiteDeploys`) ist projekteigene, verifizierte Praxis.
