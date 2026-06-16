import Link from "next/link";

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Brotkrumen" className="breadcrumbs">
      <div className="container">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <span key={item.path} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              {last ? (
                <span className="cur" aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
              {!last && <span className="sep">/</span>}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
