/** @type {import('next').NextConfig} */
const nextConfig = {
  // Built-in image optimisation is disabled (Vercel free-plan quota). The site serves
  // pre-resized WebP derivatives from public/images/site (see scripts/optimize-images.mjs).
  images: {
    unoptimized: true,
  },

  // Legacy Wix URLs found in the audit (docs/source-audit/01-page-inventory.md).
  // Placeholder bookings services and empty store pages are not rebuilt.
  async redirects() {
    return [
      { source: "/service-page/service-name", destination: "/book-online", permanent: true },
      { source: "/service-page/service-name-1", destination: "/book-online", permanent: true },
      { source: "/service-page/service-name-2", destination: "/book-online", permanent: true },
      { source: "/category/all-products", destination: "/", permanent: true },
      { source: "/category/yoga-props", destination: "/", permanent: true },
      { source: "/cart-page", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
