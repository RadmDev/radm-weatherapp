/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "openweathermap.org",
      },
    ],
  },
};

module.exports = nextConfig;
