"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function IntroOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<"show" | "hiding" | "gone">("show");

  const hide = useCallback(() => setPhase((p) => (p === "show" ? "hiding" : p)), []);

  // einmal pro Sitzung
  useEffect(() => {
    let seen: string | null = null;
    try { seen = sessionStorage.getItem("hg_intro"); } catch {}
    if (seen) { setPhase("gone"); return; }

    const v = videoRef.current;
    if (v) {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
      v.addEventListener("ended", hide);
      v.addEventListener("error", hide);
    }
    const t = setTimeout(hide, 9000); // harte Obergrenze
    return () => {
      clearTimeout(t);
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
    <div id="intro" className={phase === "hiding" ? "hide" : ""}>
      <video id="introVid" ref={videoRef} muted playsInline preload="auto" poster="/images/hero-poster.webp">
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>
      <button type="button" className="intro-skip" onClick={hide}>Intro überspringen</button>
    </div>
  );
}
