type ExperienceItem = {
  title?: string;
  period?: string;
  descriptions?: string[];
};

type Experience = {
  id: string;
  category: string;
  items: ExperienceItem[];
};

export const experienceData: Experience[] = [
  {
    id: "introduce",
    category: "Introduce",
    items: [
      {
        descriptions: [
          "방대한 데이터를 사용자에게 의미 있게 전달하며, 복잡한 비즈니스 로직을 함수형 프로그래밍 기반으로 데이터, 계산, 액션 영역으로 분리하는 것을 지향합니다.",
          "기획, 디자인, 개발 팀과의 협업을 통해 사용자 경험과 서비스 품질을 지속적으로 향상시키는 것을 목표로 하고 있습니다.",
          "자동화 환경 구축과 테스트 코드 도입으로 서비스의 안정성과 업무효율성을 높이기 위해 노력하고 있습니다.",
        ],
      },
    ],
  },
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
    id: "projects",
    category: "Projects",
    items: [
      {
        title: "원프레딕트 디자인 시스템(OPDS)",
        period: "2024.03 - 2024.06",
        descriptions: [
          "Button, Switch, Input 등 10여 개의 UI 컴포넌트 개발",
          "컴포넌트 문서화를 위한 Storybook 구성",
          "테스트 코드 작성으로 UI 컴포넌트 안정성 확보",
        ],
      },
      {
        title: "가디원 터보",
        period: "2023.11 - 2024.02",
        descriptions: [
          "서비스 개선을 위한 신규 기능 개발",
          "대용량 데이터를 차트로 시각화(ECharts)",
          "Server Driven UI를 활용한 커스텀 대시보드 설계",
          "E2E 테스트 코드 작성 (Playwright)",
        ],
      },
      {
        title: "가디원 모터",
        period: "2022.10 - 2023.10",
        descriptions: [
          "대시보드 유지보수 및 신규 기능 개발",
          "대용량 데이터를 차트로 시각화(ECharts)",
          "다국어 지원(i18n) 및 예외처리 적용",
          "svgo를 활용한 아이콘 제너레이트 개발",
          "함수형 프로그래밍 기반 리팩토링",
          "백오피스 기능 기획 및 개발",
          "CI/CD 파이프라인 구축 (GitHub Actions)",
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
