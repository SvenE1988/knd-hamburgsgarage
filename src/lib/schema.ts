// Builder-Funktionen für strukturierte Daten (JSON-LD / schema.org).
import { site, googleMapsUrl } from "./site";
import type { Service } from "./services";

const fullUrl = (path: string) => `${site.url}${path}`;
const dayMap: Record<string, string> = {
  Mo: "Monday", Tu: "Tuesday", We: "Wednesday", Th: "Thursday", Fr: "Friday", Sa: "Saturday", Su: "Sunday",
};

export function autoRepairSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: fullUrl("/images/schaufenster-werkstatt.webp"),
    logo: fullUrl("/images/logo.png"),
    telephone: site.phone.e164,
    email: site.email,
    priceRange: "€€",
    hasMap: googleMapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: "Hamburg",
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      { "@type": "City", name: "Hamburg" },
      "Eimsbüttel", "Hoheluft", "Harvestehude", "Rotherbaum",
    ],
    openingHoursSpecification: site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dow.map((d) => dayMap[d]),
      opens: h.open,
      closes: h.close,
    })),
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export function serviceSchema(service: Service) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.navLabel,
    description: service.metaDescription,
    provider: { "@type": "AutoRepair", name: site.name, "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: "Hamburg" },
    url: fullUrl(`/leistungen/${service.slug}/`),
  };
  if (service.price) {
    base.offers = {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: service.price.from,
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", minPrice: service.price.from },
      availability: "https://schema.org/InStock",
      description: "ab-Preis; der Endpreis erfolgt nach Fahrzeugdaten und Sichtprüfung in der Werkstatt.",
    };
  }
  return base;
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: fullUrl(item.path),
    })),
  };
}
