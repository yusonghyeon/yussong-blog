import { Metadata } from "next";
import { getPostsSortedByDate } from "@/lib/posts";
import PostCards from "@/components/PostCards";

export const metadata: Metadata = {
  title: "Post | yussong",
};

const PostPage = () => {
  const posts = getPostsSortedByDate();

  return <PostCards list={posts} />;
};

export default PostPage;
