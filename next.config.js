/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This is crucial for static HTML export
  basePath: '/Apollo',
  assetPrefix: '/Apollo/',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["localhost"],
    loader: 'custom',
    loaderFile: './image-loader.js',
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