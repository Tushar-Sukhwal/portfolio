import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play.google.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
