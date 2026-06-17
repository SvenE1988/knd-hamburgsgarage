"use client";

import { useConsent } from "./ConsentProvider";

// Öffnet den Consent-Banner erneut (Widerruf / Änderung der Einwilligung).
export default function ConsentSettingsLink() {
  const { reopen } = useConsent();
  return (
    <button type="button" className="footer-link-btn" onClick={reopen}>
      Cookie-Einstellungen
    </button>
  );
}
