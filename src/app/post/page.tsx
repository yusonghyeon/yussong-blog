import { Metadata } from "next";
import { getPostsSortedByDate } from "@/lib/posts";
import PostCards from "@/components/PostCards";
import { BASE_URL } from "@/lib/base";

export const metadata: Metadata = {
  title: "Post | yussong",
  description:
    "유송현님의 블로그에서 최신 기술 트렌드와 개인적인 이야기를 만나보세요.",
  openGraph: {
    title: "Post | yussong",
    description:
      "유송현님의 블로그에서 최신 기술 트렌드와 개인적인 이야기를 만나보세요.",
    url: `${BASE_URL}/post`,
    siteName: "유송현의 블로그",
    locale: "ko_KR",
    type: "website",
  },
};

const PostPage = () => {
  const posts = getPostsSortedByDate();

  return <PostCards list={posts} />;
};

export default PostPage;
