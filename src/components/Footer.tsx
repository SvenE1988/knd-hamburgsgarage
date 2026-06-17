import Link from "next/link";
import Image from "next/image";
import { site, whatsappUrl, googleReviewsUrl, openingHoursShort } from "@/lib/site";
import { services } from "@/lib/services";
import { Container } from "./ui";
import ConsentSettingsLink from "./ConsentSettingsLink";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, WhatsAppIcon, StarIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Container>
        <div className="fgrid">
          <div>
            <div className="brand" style={{ fontSize: 20 }}>
              <Image src="/images/logo.png" alt="Hamburgs GaRage Logo" width={44} height={44} />
              <span>Hamburgs<span className="gr"> GaRage</span></span>
            </div>
            <p style={{ marginTop: 14, maxWidth: 300 }}>
              Ihr KFZ-Meisterbetrieb mitten in Hamburg-Eimsbüttel. Ehrliche Arbeit, faire Preise – für alle Marken.
            </p>
            <a className="btn ghost sm" style={{ marginTop: 16 }} href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
              <StarIcon width={16} height={16} /> Google-Bewertungen
            </a>
          </div>

          <div>
            <h5>Leistungen</h5>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/leistungen/${s.slug}/`}>{s.navLabel}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Kontakt</h5>
            <p style={{ display: "flex", gap: 8 }}><MapPinIcon width={18} height={18} /> {site.address.street}, {site.address.postalCode} {site.address.city}-{site.address.district}</p>
            <p><a href={`tel:${site.phone.e164}`} data-umami-event="Anruf" style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><PhoneIcon width={18} height={18} /> {site.phone.display}</a></p>
            <p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-umami-event="WhatsApp" style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><WhatsAppIcon width={18} height={18} /> WhatsApp</a></p>
            <p><a href={`mailto:${site.email}`} style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><MailIcon width={18} height={18} /> {site.email}</a></p>
            <p style={{ display: "flex", gap: 8 }}><ClockIcon width={18} height={18} /> {openingHoursShort}</p>
          </div>
        </div>

        <div className="fbtm">
          <span>© {year} {site.legalName}</span>
          <span style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Link href="/impressum/">Impressum</Link>
            <Link href="/datenschutz/">Datenschutz</Link>
            <ConsentSettingsLink />
          </span>
        </div>
      </Container>
    </footer>
  );
}
