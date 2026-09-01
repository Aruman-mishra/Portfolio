const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  output: isGithubPages
    ? "export"
    : process.env.BUILD_STANDALONE === "true"
    ? "standalone"
    : undefined,
  basePath: isGithubPages ? "/Portfolio" : "",
  assetPrefix: isGithubPages ? "/Portfolio/" : "",
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],
  eslint: {
    dirs: ["src"],
  },
  images: {
    unoptimized: isGithubPages,
    domains: ["flagcdn.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
});

module.exports = nextConfig;
