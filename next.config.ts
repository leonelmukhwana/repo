/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { turbo: false }, // disables Turbopack
  images: {
    domains: [
      "images.unsplash.com",
      "cdn-icons-png.flaticon.com"
    ],
  },
};

module.exports = nextConfig;
