import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon, PhoneIcon } from "./icons";

export default function WhatsAppFab() {
  return (
    <div className="fabs">
      <a className="fab wa" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Per WhatsApp schreiben">
        <WhatsAppIcon width={28} height={28} />
      </a>
      <a className="fab call" href={`tel:${site.phone.e164}`} aria-label="Anrufen">
        <PhoneIcon width={24} height={24} />
      </a>
    </div>
  );
}
