"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";
import { CONSENT_EVENT } from "./ConsentBanner";

// GoHighLevel Chat-Widget (Variante 2 / via Code). Lädt erst nach Einwilligung.
export default function ChatWidget() {
  useEffect(() => {
    let loaded = false;
    const load = () => {
      if (loaded || document.getElementById("ghl-chat-loader")) return;
      loaded = true;
      const s = document.createElement("script");
      s.id = "ghl-chat-loader";
      s.src = site.ghl.chatLoader;
      s.async = true;
      s.setAttribute("data-resources-url", site.ghl.chatResources);
      s.setAttribute("data-widget-id", site.ghl.chatWidgetId);
      document.body.appendChild(s);
    };

    let consent: string | null = null;
    try { consent = localStorage.getItem("hg_consent"); } catch {}
    if (consent === "granted") load();

    const onChange = (e: Event) => {
      if ((e as CustomEvent).detail === "granted") load();
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  return null;
}
