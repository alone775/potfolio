import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/potfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
