import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ✅ Keep your options, but add this for Tailwind v4 */
  experimental: {
    optimizeCss: true, // <--- ADD THIS
  },
};

export default nextConfig;
