"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";
import { useConsent } from "./ConsentProvider";

// GoHighLevel Chat-Widget (Variante 2 / via Code). Lädt erst nach Einwilligung (Kategorie „chat").
export default function ChatWidget() {
  const { consent, ready } = useConsent();

  useEffect(() => {
    if (!ready || !consent.chat) return;
    if (document.getElementById("ghl-chat-loader")) return;
    const s = document.createElement("script");
    s.id = "ghl-chat-loader";
    s.src = site.ghl.chatLoader;
    s.async = true;
    s.setAttribute("data-resources-url", site.ghl.chatResources);
    s.setAttribute("data-widget-id", site.ghl.chatWidgetId);
    document.body.appendChild(s);
  }, [ready, consent.chat]);

  return null;
}
