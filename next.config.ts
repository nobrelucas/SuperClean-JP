import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/SuperClean-JP",
  assetPrefix: "/SuperClean-JP",
};

export default nextConfig;
