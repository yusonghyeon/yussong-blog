import { Metadata } from "next";
import Text from "@/components/Text";
import Tag from "@/components/Tag";
import Link from "next/link";
import { experienceData } from "./lib/staticData";
import { BASE_URL } from "@/lib/base";

export const metadata: Metadata = {
  title: "about | yussong",
  description:
    "유송현의 블로그 - 프론트엔드 개발자로서의 경험, 기술 스택, 프로젝트, 그리고 목표를 소개합니다.",
  openGraph: {
    title: "About | yussong",
    description: "프론트엔드 개발자로서의 경험을 공유합니다.",
    url: `${BASE_URL}/about`,
    siteName: "유송현의 블로그",
    locale: "ko_KR",
    type: "profile",
  },
};

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto ">
      <section className="flex items-center flex-col gap-4">
        <div className="flex items-center flex-col">
          <Text size="2xl" weight="extrabold">
            유송현
          </Text>
          <Text size="sm" color="gray">
            Frontend Engineer
          </Text>
        </div>
        <div className="flex gap-2">
          <Link
            href="https://github.com/yusonghyeon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tag variants="secondary" hoverable>
              Github
            </Tag>
          </Link>
          <Link
            href="https://olive-flower-6cc.notion.site/d5712896345f4d3fa7441a1cacc71753"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tag variants="secondary" hoverable>
              Portfolio
            </Tag>
          </Link>
        </div>
      </section>
      {experienceData.map(({ id, category, items }) => (
        <section key={id} className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary">{category}</h2>
          {items.map(({ title, period, descriptions }, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">{title}</h3>
              {period && <p className="text-sm text-gray-600">{period}</p>}
              {descriptions &&
                descriptions.map((desc, idx) => (
                  <p key={idx} className="text-md text-gray-700">
                    - {desc}
                  </p>
                ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default AboutPage;
