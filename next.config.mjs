/** @type {import('next').NextConfig} */

// next.config.mjs
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },
  images: {
    domains: ["spare-parts-sugthi-bucket.s3.ap-south-1.amazonaws.com"],
  },
};

export default nextConfig;
