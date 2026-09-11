import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Client-facing update walkthroughs are static pages under public/updates/<slug>/.
  // Public files have no directory index, and the pages use relative media paths,
  // so the clean URL redirects to the folder's index.html (a rewrite would leave the
  // browser resolving "media/..." against /updates/ and break every image).
  async redirects() {
    return [{ source: "/updates/:slug", destination: "/updates/:slug/index.html", permanent: false }];
  },
};

export default nextConfig;
