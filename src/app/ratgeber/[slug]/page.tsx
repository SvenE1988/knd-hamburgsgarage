import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, articleSlugs } from "@/lib/ratgeber";
import { getService } from "@/lib/services";
import { Container, Button } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { ArrowRightIcon } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/ratgeber/${article.slug}/` },
    openGraph: { title: article.title, description: article.description, images: [article.heroImage], type: "article" },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const crumbs = [
    { name: "Start", path: "/" },
    { name: "Ratgeber", path: "/ratgeber/" },
    { name: article.title, path: `/ratgeber/${article.slug}/` },
  ];
  const related = article.relatedServices.map(getService).filter(Boolean) as NonNullable<ReturnType<typeof getService>>[];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            image: `${site.url}${article.heroImage}`,
            author: { "@type": "Organization", name: site.name },
            publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/images/logo.png` } },
            mainEntityOfPage: `${site.url}/ratgeber/${article.slug}/`,
          },
        ]}
      />
      <article className="section">
        <Container narrow>
          <time style={{ color: "var(--red)", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em" }}>
            {new Date(article.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}
          </time>
          <h1 className="h1 mt-2">{article.title}</h1>

          <div className="imgcard mt-8" style={{ maxHeight: 420 }}>
            <img src={article.heroImage} alt={article.heroAlt} width={1200} height={700} />
          </div>

          <div className="prose mt-8">
            {article.intro.map((p, i) => <p key={i}>{p}</p>)}
            {article.sections.map((sec, i) => (
              <section key={i}>
                {sec.h2 && <h2>{sec.h2}</h2>}
                {sec.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                {sec.bullets && <ul>{sec.bullets.map((b, k) => <li key={k}>{b}</li>)}</ul>}
              </section>
            ))}
          </div>

          {related.length > 0 && (
            <div className="card mt-12">
              <h4>Passende Leistungen</h4>
              <ul style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 9 }}>
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/leistungen/${r.slug}/`} style={{ color: "var(--red)", fontWeight: 600, display: "inline-flex", gap: 6, alignItems: "center" }}>
                      <ArrowRightIcon width={16} height={16} /> {r.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8"><Button href="/ratgeber/" variant="ghost">← Zurück zum Ratgeber</Button></div>
        </Container>
      </article>
      <CtaBand />
    </>
  );
}
