"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

// Bindet die Online-Terminbuchung (Kalender-Widget, White-Label-Domain link.linkty.ai) ein
// und lädt das Resize-Script einmalig. Genutzt auf /termin/ und im Buchungs-Popup der Leistungsseiten.
export default function CalendarEmbed({ title = "Online-Terminbuchung" }: { title?: string }) {
  useEffect(() => {
    if (!site.ghl.calendarScript) return;
    if (!document.querySelector(`script[src="${site.ghl.calendarScript}"]`)) {
      const s = document.createElement("script");
      s.src = site.ghl.calendarScript;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  if (!site.ghl.calendarSrc) return null;

  return (
    <div className="embed-card">
      <iframe
        src={site.ghl.calendarSrc}
        id="msgsndr-calendar"
        title={title}
        scrolling="no"
        style={{ width: "100%", minHeight: 720, border: "none", overflow: "hidden" }}
      />
      <p className="embed-note">
        Mit der Terminbuchung stimmst du der Verarbeitung deiner Daten gemäß{" "}
        <a href="/datenschutz/">Datenschutzerklärung</a> zu.
      </p>
    </div>
  );
}
