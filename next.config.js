/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep your existing image configuration
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // Add these new configurations for GitHub Pages
  output: 'export',
  basePath: '/Apollo',
  assetPrefix: '/Apollo/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 