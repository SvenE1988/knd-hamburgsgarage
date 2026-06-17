"use client";

import { useEffect, useState } from "react";

export const CONSENT_EVENT = "hg-consent";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let v: string | null = null;
    try { v = localStorage.getItem("hg_consent"); } catch {}
    if (!v) setShow(true);
  }, []);

  const choose = (val: "granted" | "denied") => {
    try { localStorage.setItem("hg_consent", val); } catch {}
    try { window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: val })); } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="consent" role="dialog" aria-label="Einwilligung">
      <p>
        Wir setzen optional einen Chat-Dienst ein, um dir schnell zu helfen – dabei können Daten an Dritte
        übertragen werden. Unsere Reichweitenmessung (Umami) ist cookielos. Details in der{" "}
        <a href="/datenschutz/">Datenschutzerklärung</a>.
      </p>
      <div className="btns">
        <button type="button" className="btn primary sm" onClick={() => choose("granted")}>Akzeptieren</button>
        <button type="button" className="btn ghost sm" onClick={() => choose("denied")}>Nur Notwendige</button>
      </div>
    </div>
  );
}
