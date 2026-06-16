import { site, whatsappUrl } from "@/lib/site";
import { Container } from "./ui";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export default function CtaBand({
  title = "Termin vereinbaren – ganz unkompliziert",
  text = "Rufen Sie an oder schreiben Sie uns per WhatsApp. Wir beraten Sie ehrlich und melden uns schnell zurück.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <Container>
        <div className="cta-band__row">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="btns">
            <a className="btn light" href={`tel:${site.phone.e164}`}><PhoneIcon width={18} height={18} /> {site.phone.display}</a>
            <a className="btn ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon width={18} height={18} /> WhatsApp</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
