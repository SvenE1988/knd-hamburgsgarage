"use client";

import { useEffect, useState } from "react";
import CalendarEmbed from "./CalendarEmbed";
import { CalendarIcon } from "./icons";

// Buchungs-Popup für die online-buchbaren Leistungsseiten: Button öffnet ein Modal
// mit der Online-Terminbuchung (Kalender). Schließt per Klick außerhalb oder ESC.
export default function BookingDialog({ label = "Online-Termin buchen" }: { label?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button type="button" className="btn primary" onClick={() => setOpen(true)}>
        <CalendarIcon width={18} height={18} /> {label}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Online-Terminbuchung"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,.66)",
            backdropFilter: "blur(3px)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "clamp(16px,5vh,64px) 16px",
            overflowY: "auto",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 760,
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius)",
              padding: 24,
              boxShadow: "0 30px 80px rgba(0,0,0,.6)",
            }}
          >
            <button
              type="button"
              aria-label="Fenster schließen"
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 12,
                width: 38,
                height: 38,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--line)",
                borderRadius: 9,
                background: "transparent",
                color: "#fff",
                fontSize: 24,
                lineHeight: 1,
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <h3 className="h3" style={{ marginBottom: 14, paddingRight: 40 }}>
              Online-Termin buchen
            </h3>
            <CalendarEmbed title="Online-Terminbuchung" />
          </div>
        </div>
      )}
    </>
  );
}
