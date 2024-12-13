import Mdx from "@/components/Mdx";
import Text from "@/components/Text";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Post | yussong",
};

export const generateStaticParams = () => {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
};

type PostDetailPageParams = {
  slug: string;
};

const PostDetailPage = async ({
  params,
}: {
  params: Promise<PostDetailPageParams>;
}) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { title, date, content } = post;

  return (
    <main className="container mx-auto py-4 flex flex-col gap-4">
      <Text as="h1" weight="bold" size="3xl">
        {title}
      </Text>
      <Text size="sm" color="gray">
        {date}
      </Text>
      <article className="prose max-w-none">
        <Mdx source={content} />
      </article>
    </main>
  );
};

export default PostDetailPage;
