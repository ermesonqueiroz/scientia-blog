/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unavatar.io',
        pathname: '/instagram/willsmith',
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
