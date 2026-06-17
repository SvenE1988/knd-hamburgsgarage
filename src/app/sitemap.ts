import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { serviceSlugs } from "@/lib/services";
import { articleSlugs } from "@/lib/ratgeber";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/leistungen/",
    "/ueber-uns/",
    "/faq/",
    "/kontakt/",
    "/termin/",
    "/kostenvoranschlag/",
    "/ratgeber/",
    "/impressum/",
    "/datenschutz/",
  ];
  const servicePaths = serviceSlugs.map((s) => `/leistungen/${s}/`);
  const articlePaths = articleSlugs.map((s) => `/ratgeber/${s}/`);

  return [...staticPaths, ...servicePaths, ...articlePaths].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/ratgeber") ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.startsWith("/leistungen/") ? 0.8 : 0.6,
  }));
}
