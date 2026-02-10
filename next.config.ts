import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://iamtechie.com/wp-content/uploads/2023/06/Arabic-Logo.png",
      ),
    ],
  },
};

export default nextConfig;
