import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://yussong-blog-6o1t0lz2b-yusonghyeons-projects.vercel.app",
    sitemap:
      "https://yussong-blog-6o1t0lz2b-yusonghyeons-projects.vercel.app/sitemap.xml",
  };
}
