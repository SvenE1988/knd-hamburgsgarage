import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

export function Container({ children, narrow = false, className = "" }: { children: ReactNode; narrow?: boolean; className?: string }) {
  return <div className={`container${narrow ? " narrow" : ""} ${className}`}>{children}</div>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  withArrow?: boolean;
  sm?: boolean;
  block?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", withArrow = false, sm = false, block = false, className = "" }: ButtonProps) {
  const cls = `btn ${variant}${sm ? " sm" : ""}${block ? " block" : ""} ${className}`.trim();
  const inner = (
    <>
      {children}
      {withArrow && <ArrowRightIcon width={18} height={18} />}
    </>
  );
  if (href.startsWith("/")) return <Link href={href} className={cls}>{inner}</Link>;
  return <a href={href} className={cls}>{inner}</a>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as = "h2",
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  as?: "h1" | "h2";
  center?: boolean;
}) {
  const headingClass = as === "h1" ? "h1" : "h2";
  return (
    <div className={center ? "center maxw" : "maxw"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {as === "h1" ? <h1 className={headingClass}>{title}</h1> : <h2 className={headingClass}>{title}</h2>}
      {intro && <p className="lead mt-4">{intro}</p>}
    </div>
  );
}
