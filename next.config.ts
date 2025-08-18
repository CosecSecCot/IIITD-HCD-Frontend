import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [new URL(`${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/**`)],
  },
};

export default nextConfig;
