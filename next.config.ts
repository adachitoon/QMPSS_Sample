import type { NextConfig } from "next";

const repoName = "QMPSS_Sample";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
