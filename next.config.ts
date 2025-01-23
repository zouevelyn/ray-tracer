import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/ray-tracer",
  output: "export",  // <=== enables static exports
};

export default nextConfig;
