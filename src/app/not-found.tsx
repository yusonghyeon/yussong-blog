import Text from "@/components/Text";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <Text as="h1" weight="bold" size="3xl">
        페이지를 찾을 수 없습니다
      </Text>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;
