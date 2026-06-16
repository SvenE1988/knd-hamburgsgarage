import type { Service } from "@/lib/services";
import { priceDisclaimer } from "@/lib/site";

export default function PriceTable({ service }: { service: Service }) {
  if (!service.price) return null;
  return (
    <div className="price">
      <div className="price__from">
        <span className="lbl">ab</span>
        <span className="val">{service.price.from} €</span>
      </div>
      {service.price.items && (
        <ul className="price__items">
          {service.price.items.map((it) => (
            <li key={it.label}>
              <span>{it.label}</span>
              <span>ab {it.from} €</span>
            </li>
          ))}
        </ul>
      )}
      <p className="price__note">{priceDisclaimer}</p>
    </div>
  );
}
