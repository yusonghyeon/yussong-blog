import { BASE_URL } from "@/lib/base";
import { allPosts } from "content-collections";
import type { MetadataRoute } from "next";

const formatDate = (date: string | Date): string => {
  return new Date(date).toISOString().split("T")[0];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `${BASE_URL}/post/${post.slug}`,
    lastModified: formatDate(post.date),
  }));

  const staticRoutes = ["", "/post", "/about"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: formatDate(new Date()),
  }));

  return [...staticRoutes, ...posts];
}
