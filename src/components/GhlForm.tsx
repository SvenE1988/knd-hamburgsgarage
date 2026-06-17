"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { useConsent } from "./ConsentProvider";
import { MailIcon } from "./icons";

// Bindet das GoHighLevel-Formular (link.linkty.ai) ein und lädt das Resize-Script einmalig.
// Das Innendesign des Formulars wird in GoHighLevel selbst gepflegt; hier matchen wir den Rahmen.
// DSGVO-freundlich: das iframe lädt nach zentraler Einwilligung (Kategorie „externalEmbeds")
// oder per Einzelfreigabe-Klick (Gate).
export default function GhlForm({ title = "Anfrageformular" }: { title?: string }) {
  const { consent } = useConsent();
  const [clicked, setClicked] = useState(false);
  const loaded = consent.externalEmbeds || clicked;

  useEffect(() => {
    if (!loaded) return;
    if (!document.querySelector(`script[src="${site.ghl.formScript}"]`)) {
      const s = document.createElement("script");
      s.src = site.ghl.formScript;
      s.async = true;
      document.body.appendChild(s);
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <div className="embed-gate" style={{ minHeight: site.ghl.formHeight }}>
        <MailIcon width={30} height={30} style={{ color: "var(--red)" }} />
        <div>
          <p style={{ color: "#fff", fontWeight: 700 }}>{title}</p>
          <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>Beim Laden werden Daten an linkty.ai übertragen.</p>
        </div>
        <button type="button" className="btn primary sm" onClick={() => setClicked(true)}>Formular laden</button>
      </div>
    );
  }

  return (
    <div className="embed-card">
      <iframe
        src={site.ghl.formSrc}
        id={`inline-${site.ghl.formId}`}
        title={title}
        style={{ width: "100%", height: site.ghl.formHeight, border: "none", borderRadius: 8 }}
        data-layout="{'id':'INLINE'}"
        data-form-id={site.ghl.formId}
        data-height={site.ghl.formHeight}
        data-layout-iframe-id={`inline-${site.ghl.formId}`}
        data-form-name={title}
      />
      <p className="embed-note">
        Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß <a href="/datenschutz/">Datenschutzerklärung</a> zu.
      </p>
    </div>
  );
}
