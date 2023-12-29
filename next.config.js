/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/signin",
      },
      {
        source: "/index",
        destination: "/_index",
      },
    ];
  },
};

module.exports = nextConfig;
