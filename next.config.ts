import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org", "example.com"], // Add the allowed domain here
  },
};

export default nextConfig;
