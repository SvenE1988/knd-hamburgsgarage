import Link from "next/link";
import type { Service } from "@/lib/services";
import { ServiceIcon, ArrowRightIcon } from "./icons";

export default function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <Link href={`/leistungen/${service.slug}/`} className="lcard">
      {typeof index === "number" && <span className="num">{String(index + 1).padStart(2, "0")}</span>}
      <span className="ic"><ServiceIcon slug={service.slug} width={24} height={24} /></span>
      <h3>{service.navLabel}</h3>
      <p>{service.tagline}</p>
      <span className="arr">Mehr erfahren <ArrowRightIcon width={16} height={16} /></span>
    </Link>
  );
}
