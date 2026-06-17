"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { SoundOnIcon, SoundOffIcon } from "@/components/icons";

export default function IntroOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<"show" | "hiding" | "gone">("show");
  const [muted, setMuted] = useState(true);

  const hide = useCallback(() => setPhase((p) => (p === "show" ? "hiding" : p)), []);

  // Ton erst nach Klick (Browser-Autoplay-Regel: Autoplay nur stumm)
  const toggleSound = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  // einmal pro Sitzung
  useEffect(() => {
    let seen: string | null = null;
    try { seen = sessionStorage.getItem("hg_intro"); } catch {}
    if (seen) { setPhase("gone"); return; }

    // Wer „Bewegung reduzieren" aktiv hat (auf iOS verbreitet), bekommt kein Intro –
    // direkt zur Startseite, und das Video wird gar nicht erst geladen (kein vergeudeter Download).
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      return;
    }

    const v = videoRef.current;
    let raf = 0;
    if (v) {
      v.addEventListener("ended", hide);
      v.addEventListener("error", hide);
      // Start erst nach dem ersten Paint: das Poster ist das LCP, der 2,9-MB-Download
      // soll den initialen Render nicht blockieren (gilt auch mobil, Intro läuft weiter).
      raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(() => {
          const p = v.play();
          // Lehnt der Browser Autoplay ab (z.B. iOS im Stromsparmodus), nicht 9 s
          // schwarz stehen bleiben, sondern Intro sofort überspringen.
          if (p && typeof p.catch === "function") p.catch(hide);
        });
      });
    }
    const t = setTimeout(hide, 9000); // harte Obergrenze
    return () => {
      clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
      if (v) { v.removeEventListener("ended", hide); v.removeEventListener("error", hide); }
    };
  }, [hide]);

  // nach dem Ausblenden entfernen
  useEffect(() => {
    if (phase !== "hiding") return;
    try { sessionStorage.setItem("hg_intro", "1"); } catch {}
    const t = setTimeout(() => setPhase("gone"), 950);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <>
    <noscript><style>{`#intro{display:none!important}`}</style></noscript>
    <div id="intro" className={phase === "hiding" ? "hide" : ""}>
      <video id="introVid" ref={videoRef} muted playsInline preload="metadata" poster="/images/hero-poster.webp">
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        className="intro-sound"
        onClick={toggleSound}
        aria-label={muted ? "Ton einschalten" : "Ton ausschalten"}
      >
        {muted ? <SoundOffIcon width={18} height={18} /> : <SoundOnIcon width={18} height={18} />}
        {muted ? "Ton an" : "Ton aus"}
      </button>
      <button type="button" className="intro-skip" onClick={hide}>Intro überspringen</button>
    </div>
    </>
  );
}
