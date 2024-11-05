/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This is crucial for static HTML export
  basePath: '/Apollo',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig