"use client";

import { useState } from "react";
import { useConsent, CONSENT_ALL, CONSENT_NONE } from "./ConsentProvider";

export default function ConsentBanner() {
  const { ready, bannerOpen, decided, consent, set, closeBanner } = useConsent();
  const [settings, setSettings] = useState(false);
  const [chat, setChat] = useState(consent.chat);
  const [externalEmbeds, setExternalEmbeds] = useState(consent.externalEmbeds);

  if (!ready || !bannerOpen) return null;

  const openSettings = () => {
    setChat(consent.chat);
    setExternalEmbeds(consent.externalEmbeds);
    setSettings(true);
  };

  return (
    <div className="consent" role="dialog" aria-label="Einwilligung">
      <p>
        Wir binden optional externe Inhalte ein – Google Maps, Kontakt- und Buchungsformulare sowie einen Chat-Dienst.
        Dabei können Daten an Dritte übertragen werden. Unsere Reichweitenmessung (Umami) ist cookielos. Details in der{" "}
        <a href="/datenschutz/">Datenschutzerklärung</a>.
      </p>

      {settings && (
        <div className="consent-cats">
          <label className="consent-cat">
            <input type="checkbox" checked={externalEmbeds} onChange={(e) => setExternalEmbeds(e.target.checked)} />
            <span>
              <strong>Externe Inhalte</strong>
              <span className="muted">Google Maps, Kontakt-, Kostenvoranschlag- und Terminbuchungsformulare (linkty.ai).</span>
            </span>
          </label>
          <label className="consent-cat">
            <input type="checkbox" checked={chat} onChange={(e) => setChat(e.target.checked)} />
            <span>
              <strong>Chat-Dienst</strong>
              <span className="muted">Chat- und WhatsApp-Assistent (linkty.ai).</span>
            </span>
          </label>
        </div>
      )}

      <div className="btns">
        {settings ? (
          <>
            <button type="button" className="btn primary sm" onClick={() => set({ chat, externalEmbeds })}>Auswahl speichern</button>
            <button type="button" className="btn ghost sm" onClick={() => set(CONSENT_ALL)}>Alle akzeptieren</button>
          </>
        ) : (
          <>
            <button type="button" className="btn primary sm" onClick={() => set(CONSENT_ALL)}>Alle akzeptieren</button>
            <button type="button" className="btn ghost sm" onClick={() => set(CONSENT_NONE)}>Nur Notwendige</button>
            <button type="button" className="btn ghost sm" onClick={openSettings}>Einstellungen</button>
          </>
        )}
        {decided && (
          <button type="button" className="consent-close" aria-label="Schließen" onClick={closeBanner}>×</button>
        )}
      </div>
    </div>
  );
}
