"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { CalendarIcon } from "./icons";

// Bindet die Online-Terminbuchung (Kalender-Widget, White-Label-Domain link.linkty.ai) ein
// und lädt das Resize-Script einmalig. Genutzt auf /termin/ und im Buchungs-Popup der Leistungsseiten.
// DSGVO-freundlich: das iframe lädt erst nach aktivem Klick (Gate), außer autoload=true
// (z.B. im Buchungs-Modal, wo das Öffnen bereits die aktive Geste ist).
export default function CalendarEmbed({
  title = "Online-Terminbuchung",
  autoload = false,
}: {
  title?: string;
  autoload?: boolean;
}) {
  const [loaded, setLoaded] = useState(autoload);

  useEffect(() => {
    if (!loaded) return;
    if (!site.ghl.calendarScript) return;
    if (!document.querySelector(`script[src="${site.ghl.calendarScript}"]`)) {
      const s = document.createElement("script");
      s.src = site.ghl.calendarScript;
      s.async = true;
      document.body.appendChild(s);
    }
  }, [loaded]);

  if (!site.ghl.calendarSrc) return null;

  if (!loaded) {
    return (
      <div className="embed-gate" style={{ minHeight: 720 }}>
        <CalendarIcon width={30} height={30} style={{ color: "var(--red)" }} />
        <div>
          <p style={{ color: "#fff", fontWeight: 700 }}>Online-Terminbuchung</p>
          <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>Beim Laden werden Daten an linkty.ai übertragen.</p>
        </div>
        <button type="button" className="btn primary sm" onClick={() => setLoaded(true)}>Kalender laden</button>
      </div>
    );
  }

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
