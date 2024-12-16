import { notFound } from "next/navigation";
import Mdx from "@/components/Mdx";
import Text from "@/components/Text";
import { BASE_URL } from "@/lib/base";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<PostDetailPageParams>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | yussong",
      description: "해당 포스트를 찾을 수 없습니다.",
    };
  }

  return {
    title: `${post.title} | yussong`,
    description: post.title || "유송현의 블로그 포스트",
    openGraph: {
      title: `${post.title} | yussong`,
      description: post.subTitle || "유송현의 블로그 포스트",
      url: `${BASE_URL}/post/${slug}`,
      siteName: "유송현의 블로그",
      type: "article",
      locale: "ko_KR",
      publishedTime: post.date,
    },
  };
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
