import { Metadata } from 'next';
import Text from "@/components/Text";
import PostCards from "@/components/PostCards";
import { getRecentPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "yussong.dev",
  description: "유송현 블로그",
};

const HomePage = () => {
  const recentPosts = getRecentPosts(4);
  return (
    <div className="flex flex-col gap-8">
      <section className="text-center flex flex-col gap-4">
        <Text as="h1" size="2xl" weight="bold" className="text-center">
          안녕하세요, 프론트엔드 개발자 유송현입니다.
        </Text>
        <Text size="md" color="gray" className=" text-center">
          이 블로그는 제가 배우고 경험한 내용을 기록하고, 얻은 인사이트를 나누는
          공간입니다. 새로운 기술과 개발 이야기, 그리고 성장 과정에서 배운
          점들을 정리하며, 저의 같은 관심사를 가진 분들에게 도움이 되기를
          바랍니다.
        </Text>
      </section>

      <section className="container py-8 flex flex-col gap-4">
        <Text as="h2" size="2xl" weight="bold">
          최신 포스트
        </Text>
        <PostCards list={recentPosts} />
      </section>
    </div>
  );
};

export default HomePage;
