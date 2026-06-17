/** @type {import('next').NextConfig} */
// Standard-Next.js auf der Netlify Next.js Runtime (OpenNext).
// Kein statischer Export mehr → next/image-Optimierung, ISR & Route Handler verfügbar.
const nextConfig = {
  // Saubere URLs mit abschließendem Slash (/leistungen/, /kontakt/ ...).
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
