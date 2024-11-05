/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Apollo',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
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