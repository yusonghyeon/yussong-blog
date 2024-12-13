// import { defineCollection, defineConfig } from "@content-collections";
import { defineCollection, defineConfig } from "@content-collections/core";

const posts = defineCollection({
  name: "posts",
  directory: "contents",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    subTitle: z.string(),
    date: z.string(),
    categories: z.array(z.string()).optional(),
  }),

  transform: async (document) => {
    const { title, subTitle, date, categories, content } = document;
    return {
      slug: document._meta.path,
      title,
      content,
      subTitle,
      date,
      categories,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
