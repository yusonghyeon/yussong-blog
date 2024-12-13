import { allPosts } from "content-collections";

export const getPostsSortedByDate = () =>
  allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export const getPostBySlug = (slug: string) =>
  allPosts.find((post) => post.slug === slug);

export const getRecentPosts = (recent: number) =>
  getPostsSortedByDate().slice(0, recent);

export const getAllSlugs = () => allPosts.map((post) => post.slug);
