"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { MapPinIcon } from "./icons";

// DSGVO-freundlich: Google Maps lädt erst nach aktivem Klick.
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);
  const q = encodeURIComponent(`${site.address.street}, ${site.address.postalCode} ${site.address.city}`);

  if (!loaded) {
    return (
      <div className="embed-gate">
        <MapPinIcon width={30} height={30} style={{ color: "var(--red)" }} />
        <div>
          <p style={{ color: "#fff", fontWeight: 700 }}>Standort auf Google Maps</p>
          <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>Beim Laden werden Daten an Google übertragen.</p>
        </div>
        <button type="button" className="btn primary sm" onClick={() => setLoaded(true)}>Karte laden</button>
      </div>
    );
  }

  return (
    <iframe
      title="Standort Hamburgs GaRage auf Google Maps"
      src={`https://www.google.com/maps?q=${q}&output=embed`}
      style={{ width: "100%", minHeight: 340, border: 0, borderRadius: 12, display: "block" }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
