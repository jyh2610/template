/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dld3l66jf7t9m.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "cuchencdn.wisacdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
