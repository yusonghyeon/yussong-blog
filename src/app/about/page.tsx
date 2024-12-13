import { Metadata } from "next";
import Link from "next/link";
import Text from "@/components/Text";

type ExperienceItem = {
  title: string;
  period?: string;
  descriptions?: string[];
};

type Experience = {
  id: string;
  category: string;
  items: ExperienceItem[];
};

const experienceData: Experience[] = [
  {
    id: "workExperience",
    category: "Work Experience",
    items: [
      {
        title: "원프레딕트",
        period: "2022.07 - 2024.07",
        descriptions: [
          "예지보전(PHM) 솔루션 개발",
          "디자인 시스템 구축 및 CI/CD 개선",
          "Scrum 기반 애자일 프로세스 경험",
          "Confluence와 JIRA를 활용한 문서화 및 작업 관리",
        ],
      },
    ],
  },
  {
    id: "education",
    category: "Education",
    items: [
      {
        title: "제로베이스 - 프론트엔드 스쿨",
        period: "2021.10 - 2021.12",
      },
      {
        title: "청운대학교 - 컴퓨터공학과",
        period: "2016.03 - 2022.02",
      },
    ],
  },
  {
    id: "certificates",
    category: "Certificates",
    items: [
      {
        title: "정보처리기사 - 한국산업인력공단",
        period: "2021.07 취득",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "about | yussong",
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
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-slate-100 p-2 text-black delay-75 ease-in-out hover:bg-slate-200"
          >
            <Text size="sm">Github</Text>
          </Link>
          <Link
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-slate-100 p-2 text-black delay-75 ease-in-out hover:bg-slate-200"
          >
            <Text size="sm">Portfolio</Text>
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <Text as="h2" size="xl" weight="bold" color="primary" className="">
          Introduce
        </Text>
        <Text as="p" size="md" color="gray" className="">
          - 방대한 데이터를 사용자에게 의미 있게 전달하며, 복잡한 비즈니스
          로직을 함수형 프로그래밍 기반으로 데이터, 계산, 액션 영역으로 분리하는
          것을 지향합니다.
        </Text>
        <Text as="p" size="md" color="gray" className="">
          - 기획, 디자인, 개발 팀과의 협업을 통해 사용자 경험과 서비스 품질을
          지속적으로 향상시키는 것을 목표로 하고 있습니다.
        </Text>
        <Text as="p" size="md" color="gray">
          - 자동화 환경 구축과 테스트 코드 도입으로 서비스의 안정성과 업무
          효율성을 높이기 위해 노력하고 있습니다.
        </Text>
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
