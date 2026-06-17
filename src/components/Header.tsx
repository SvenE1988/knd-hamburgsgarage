"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site, mainNav } from "@/lib/site";
import { PhoneIcon, MenuIcon, CloseIcon, ClockIcon } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="site-header" id="site-header">
      <div className="topbar">
        <div className="container">
          <span className="ib"><ClockIcon width={14} height={14} /> Mo–Do 8:00–17:15 · Fr 8:00–15:15</span>
          <span>{site.claim}</span>
        </div>
      </div>
      <div className="container header-bar">
        <Link href="/" className="brand" aria-label="Zur Startseite">
          <Image src="/images/logo.png" alt="Hamburgs GaRage – KFZ-Meisterbetrieb in Hamburg-Eimsbüttel" width={44} height={44} />
          <span>Hamburgs<span className="gr"> GaRage</span></span>
        </Link>

        <nav className="nav" aria-label="Hauptnavigation">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : ""}>{item.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn primary callbtn" href={`tel:${site.phone.e164}`} data-umami-event="Anruf"><PhoneIcon width={18} height={18} /> {site.phone.display}</a>
          <button type="button" className="burger" aria-label="Menü" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav${open ? " open" : ""}`}>
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
        <a className="btn primary" href={`tel:${site.phone.e164}`} onClick={() => setOpen(false)} data-umami-event="Anruf"><PhoneIcon width={18} height={18} /> {site.phone.display}</a>
      </div>
    </header>
  );
}
