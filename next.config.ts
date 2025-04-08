import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  experimental: {
    turbo: {
      minify: false,
    }
  },
  webpack: (config, { dev, isServer }) => {
    // Trong production build, không minimize code
    config.optimization.minimize = false;

    return config;
  }
};

export default nextConfig;
