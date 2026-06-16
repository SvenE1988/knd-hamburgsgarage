"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

// Bindet das GoHighLevel-Formular (link.linkty.ai) ein und lädt das Resize-Script einmalig.
// Das Innendesign des Formulars wird in GoHighLevel selbst gepflegt; hier matchen wir den Rahmen.
export default function GhlForm({ title = "Anfrageformular" }: { title?: string }) {
  useEffect(() => {
    if (!document.querySelector(`script[src="${site.ghl.formScript}"]`)) {
      const s = document.createElement("script");
      s.src = site.ghl.formScript;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

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
