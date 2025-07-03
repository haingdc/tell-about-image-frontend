import type { NextConfig } from "next";
import NextBundleAnalyzer from "@next/bundle-analyzer";
import process from "node:process";

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // experimental: {
  //   turbo: {
  //     minify: false,
  //   }
  // },
  turbopack: {
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack: (config, { dev, isServer }) => {
    // Trong production build, không minimize code
    config.optimization.minimize = false;

    // Thêm loader cho SVG files khi dùng webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
