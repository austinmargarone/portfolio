/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /.svg$/i,
      // use: ['@svgr/webpack'],
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

module.exports = nextConfig;
