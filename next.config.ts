import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Client-facing update walkthroughs are static pages under public/updates/<slug>/.
  // Serve the folder's index.html at the clean URL (public files have no directory index).
  async rewrites() {
    return [{ source: "/updates/:slug", destination: "/updates/:slug/index.html" }];
  },
};

export default nextConfig;
