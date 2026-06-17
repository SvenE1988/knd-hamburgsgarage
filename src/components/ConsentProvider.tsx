"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

// Zentrale Einwilligungsverwaltung. Zwei Kategorien:
// - chat: GoHighLevel/linkty.ai Chat-Widget
// - externalEmbeds: Google Maps, linkty.ai Formulare und Online-Terminbuchung
// Die Reichweitenmessung (Umami) ist cookielos und braucht keine Einwilligung.
export type ConsentCategory = "chat" | "externalEmbeds";

export type ConsentState = Record<ConsentCategory, boolean>;

const STORAGE_KEY = "hg_consent";

const DENIED: ConsentState = { chat: false, externalEmbeds: false };
const GRANTED: ConsentState = { chat: true, externalEmbeds: true };

type ConsentContextValue = {
  /** Erteilte Einwilligungen pro Kategorie. */
  consent: ConsentState;
  /** Wurde aus localStorage gelesen? Vor `ready` keine Consent-abhängige UI anzeigen (kein Hydration-Flicker). */
  ready: boolean;
  /** Wurde überhaupt schon eine Entscheidung gespeichert? Steuert die Banner-Anzeige. */
  decided: boolean;
  /** Einwilligung pro Kategorie setzen (und persistieren). */
  set: (next: ConsentState) => void;
  /** Banner erneut öffnen (Widerruf / Änderung). */
  reopen: () => void;
  /** Soll der Banner gerade sichtbar sein? */
  bannerOpen: boolean;
  /** Banner schließen, ohne Entscheidung zu ändern. */
  closeBanner: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

// Alten String-Wert ("granted"/"denied") auf das neue Kategorien-Objekt migrieren.
function parseStored(raw: string | null): ConsentState | null {
  if (!raw) return null;
  if (raw === "granted") return GRANTED;
  if (raw === "denied") return DENIED;
  try {
    const obj = JSON.parse(raw);
    return {
      chat: obj?.chat === true,
      externalEmbeds: obj?.externalEmbeds === true,
    };
  } catch {
    return null;
  }
}

export default function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(DENIED);
  const [ready, setReady] = useState(false);
  const [decided, setDecided] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    let raw: string | null = null;
    try { raw = localStorage.getItem(STORAGE_KEY); } catch {}
    const parsed = parseStored(raw);
    if (parsed) {
      setConsent(parsed);
      setDecided(true);
    } else {
      setBannerOpen(true);
    }
    setReady(true);
  }, []);

  const set = useCallback((next: ConsentState) => {
    setConsent(next);
    setDecided(true);
    setBannerOpen(false);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  }, []);

  const reopen = useCallback(() => setBannerOpen(true), []);
  const closeBanner = useCallback(() => setBannerOpen(false), []);

  return (
    <ConsentContext.Provider value={{ consent, ready, decided, set, reopen, bannerOpen, closeBanner }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}

export { GRANTED as CONSENT_ALL, DENIED as CONSENT_NONE };
