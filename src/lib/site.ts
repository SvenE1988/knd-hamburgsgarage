// Zentrale Geschäftsdaten – "Single Source of Truth".
// Wird in Header, Footer, Kontakt, Impressum, Integrationen und im JSON-LD verwendet.

export const site = {
  name: "Hamburgs GaRage",
  legalName: "Hamburgs GaRage G.B. & R.S. GmbH",
  claim: "Ihr KFZ-Meisterbetrieb in Hamburg-Eimsbüttel",
  url: "https://hamburgsgarage.de",
  email: "info@hamburgsgarage.de",
  phone: {
    display: "040 40 71 73",
    e164: "+4940407173",
  },
  whatsapp: {
    display: "040 40 71 73",
    // wa.me erwartet die Nummer ohne + und ohne führende 0, mit Ländervorwahl
    number: "4940407173",
    text: "Hallo, ich habe eine Frage zu meinem Auto und würde gern einen Termin vereinbaren.",
  },
  address: {
    street: "Osterstraße 62-64",
    postalCode: "20259",
    city: "Hamburg",
    district: "Eimsbüttel",
    country: "DE",
  },
  // exakt geocodiert
  geo: { lat: 53.5755426, lng: 9.9566515 },
  googlePlaceId: "ChIJ3ZroK1GPsUcRyTYVGltVy-4",
  openingHours: [
    { days: "Montag – Donnerstag", time: "08:00 – 17:15 Uhr", dow: ["Mo", "Tu", "We", "Th"], open: "08:00", close: "17:15" },
    { days: "Freitag", time: "08:00 – 15:15 Uhr", dow: ["Fr"], open: "08:00", close: "15:15" },
  ],
  owners: ["Rade Stojkovic", "Gabor Böhm"],
  register: { hrb: "HRB 166741", court: "Amtsgericht Hamburg" },
  sameAs: [] as string[],

  // Chat-Widget (linkty.ai) zum Launch deaktiviert. true = reaktivieren (Widget + Consent-Kategorie).
  chatWidgetEnabled: false,

  // Analytics – selbstgehostetes Umami (cookieless / DSGVO-freundlich)
  umami: {
    src: "https://analytics.erkens.cloud/script.js",
    websiteId: "800a1045-e0ff-4c7d-90b9-a92f194ce0de",
  },

  // Buchungs-, Formular- und Chat-System (White-Label-Domain link.linkty.ai)
  ghl: {
    formSrc: "https://link.linkty.ai/widget/form/uflggnnypf2FKlOldAWF",
    formId: "uflggnnypf2FKlOldAWF",
    formScript: "https://link.linkty.ai/js/form_embed.js",
    formHeight: 734,
    chatLoader: "https://widgets.leadconnectorhq.com/loader.js",
    chatResources: "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
    chatWidgetId: "6a319c1efca726332cba828e",
    // Online-Terminbuchung (Kalender-Widget + Resize-Script)
    calendarSrc: "https://link.linkty.ai/widget/booking/8EPXYEVp4afKCoHyCGDh",
    calendarScript: "https://link.linkty.ai/js/embed.js",
  },
};

export const googleReviewsUrl = `https://search.google.com/local/reviews?placeid=${site.googlePlaceId}`;
export const googleWriteReviewUrl = `https://search.google.com/local/writereview?placeid=${site.googlePlaceId}`;
export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.street + ", " + site.address.postalCode + " " + site.address.city
)}&query_place_id=${site.googlePlaceId}`;
export const whatsappUrl = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.text)}`;

// Kompakte Öffnungszeiten für Header/Footer (Kurztage, ohne führende Null), z. B.
// "Mo–Do 8:00–19:00 · Fr 8:00–18:00". Quelle bleibt site.openingHours.
const shortDay: Record<string, string> = { Mo: "Mo", Tu: "Di", We: "Mi", Th: "Do", Fr: "Fr", Sa: "Sa", Su: "So" };
const stripLeadingZero = (t: string) => t.replace(/^0/, "");
export const openingHoursShort = site.openingHours
  .map((h) => {
    const days = h.dow.length > 1 ? `${shortDay[h.dow[0]]}–${shortDay[h.dow[h.dow.length - 1]]}` : shortDay[h.dow[0]];
    return `${days} ${stripLeadingZero(h.open)}–${stripLeadingZero(h.close)}`;
  })
  .join(" · ");

export const priceDisclaimer =
  "Alle Preise sind ab-Preise als Platzhalter und werden je nach Fahrzeugmodell, Verschleißzustand und Material individuell bestätigt. Der Endpreis erfolgt nach Fahrzeugdaten und Sichtprüfung in der Werkstatt.";

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Leistungen", href: "/leistungen/" },
  { label: "Über uns", href: "/ueber-uns/" },
  { label: "Ratgeber", href: "/ratgeber/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Kontakt", href: "/kontakt/" },
];
