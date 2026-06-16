import type { SVGProps } from "react";

const base = (props: SVGProps<SVGSVGElement>) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 5c0 8.3 6.7 15 15 15a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-.8-1l-3.3-.7a1 1 0 0 0-1 .3l-1 1.2A12 12 0 0 1 8.4 9.1l1.2-1a1 1 0 0 0 .3-1l-.7-3.3a1 1 0 0 0-1-.8H5.7A2 2 0 0 0 3 5Z" /></svg>
);
export const MailIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
);
export const ClockIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const MapPinIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const ArrowRightIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
);
export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="m5 13 4 4L19 7" /></svg>
);
export const MenuIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
);
export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M6 6 18 18M18 6 6 18" /></svg>
);
export const CalendarIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>
);
export function WhatsAppIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...p}>
      <path d="M19.05 4.91A10 10 0 0 0 3.5 17.4L2 22l4.7-1.45A10 10 0 1 0 19.05 4.9Zm-7.02 15.3h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-2.8.86.86-2.72-.2-.31a8.3 8.3 0 1 1 6.9 3.71Zm4.55-6.2c-.25-.13-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06a6.8 6.8 0 0 1-3.4-2.98c-.26-.44.26-.41.74-1.37.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43l-.48-.01c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.9 2.42 1.02 2.59.13.16 1.76 2.69 4.27 3.77.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
export function StarIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...p}>
      <path d="m12 3 2.6 5.27 5.82.85-4.21 4.1.99 5.8L12 17.77 6.8 19.5l.99-5.8-4.21-4.1 5.82-.85z" />
    </svg>
  );
}

// Leistungs-Icons je Slug
export function ServiceIcon({ slug, ...p }: { slug: string } & SVGProps<SVGSVGElement>) {
  switch (slug) {
    case "inspektion-wartung":
      return <svg {...base(p)}><path d="M9 4h6v3H9zM7 7h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" /><path d="m9 13 2 2 4-4" /></svg>;
    case "hu-au":
      return <svg {...base(p)}><path d="M12 3 5 6v5c0 4.4 3 8.4 7 10 4-1.6 7-5.6 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "bremsenservice":
      return <svg {...base(p)}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>;
    case "achsvermessung":
      return <svg {...base(p)}><circle cx="12" cy="12" r="8" /><path d="M12 4v16M4 12h16" /></svg>;
    case "reifenservice":
      return <svg {...base(p)}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" /><path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21" /></svg>;
    case "klimaservice":
      return <svg {...base(p)}><path d="M12 3v18M5 7l14 10M19 7 5 17" /><path d="M12 3l-2 2m2-2 2 2M12 21l-2-2m2 2 2-2" /></svg>;
    case "unfall-lack-glas":
      return <svg {...base(p)}><path d="M5 13l1.5-4A2 2 0 0 1 8.4 8h7.2a2 2 0 0 1 1.9 1l1.5 4" /><path d="M4 13h16v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z" /></svg>;
    case "werkstattersatzwagen":
      return <svg {...base(p)}><path d="M5 13l1.5-4A2 2 0 0 1 8.4 8h7.2a2 2 0 0 1 1.9 1l1.5 4" /><circle cx="7.5" cy="16.5" r="1.5" /><circle cx="16.5" cy="16.5" r="1.5" /><path d="M4 16h2m12 0h2" /></svg>;
    default:
      return <svg {...base(p)}><circle cx="12" cy="12" r="9" /></svg>;
  }
}
