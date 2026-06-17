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
      <button type="button" className="btn primary" onClick={() => setOpen(true)} data-umami-event="Termin-Buchung">
        <CalendarIcon width={18} height={18} /> {label}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Online-Terminbuchung"
          className="modal-overlay"
          onClick={() => setOpen(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Fenster schließen" onClick={() => setOpen(false)}>
              ×
            </button>
            <h3 className="h3 modal-head">
              Online-Termin buchen
            </h3>
            <CalendarEmbed title="Online-Terminbuchung" />
          </div>
        </div>
      )}
    </>
  );
}
