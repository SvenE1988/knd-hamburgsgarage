/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vollständig statischer Export -> host-agnostisch (Vercel, Netlify, jeder Static-Host).
  output: "export",
  // Saubere URLs mit abschließendem Slash (/leistungen/, /kontakt/ ...).
  trailingSlash: true,
  // Bei statischem Export findet keine serverseitige Bildoptimierung statt;
  // die Bilder sind bereits vorab als WebP optimiert.
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
