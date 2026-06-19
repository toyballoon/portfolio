export type WorkLink = {
  label: string;
  url: string;
};

export type Work = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  body: string;
  links: WorkLink[];
};

export const works: Work[] = [
  {
    slug: "stretch-clock",
    title: "#StretchClock",
    description:
      "인물, 반려동물과 같은 이미지 속 피사체의 실루엣을 인식해 그 외곽을 따라 숫자가 아래로 흐르는 반응형 타이포그래피",
    thumbnail: "/StretchedClock.png",
    body: "시계를 이미지의 일부처럼 자연스럽게 녹여내는 디자인으로, 인물·반려동물 등 피사체의 실루엣을 인식해 그 외곽을 따라 시계가 유기적으로 배치됩니다. 이미지의 빈 공간(Negative Space)에서 숫자가 유려하게 아래로 흐르는 반응형 타이포그래피이며, One UI 7의 캡슐형 디자인 언어를 계승하면서 더욱 밀도 높은 디지털 감성으로 풀어냈습니다. Galaxy Z Flip7·Z Fold7 FlexWindow Wallpaper 프로젝트의 일부입니다.",
    links: [
      {
        label: "Samsung Design",
        url: "https://www.design.samsung.com/kr/contents/flexwindow-wallpaper/",
      },
    ],
  },
  {
    slug: "now-bar",
    title: "#NowBar",
    description:
      "잠금화면에서 필요한 정보를 즉시 확인하고 작업을 처리할 수 있는 Galaxy AI의 시작점",
    thumbnail: "/NowBar.mp4",
    body: "갤럭시 AI에 보다 쉽게 접근할 수 있도록 잠금 화면 하단에 캡슐 형태의 Now Bar가 추가되었습니다. 운동 경과, 실시간 스포츠 스코어, 미디어 제어 등 사용자가 필요하거나 관심 있는 정보와 현재 진행 중인 기기 활동을 실시간으로 보여줍니다. 불필요한 화면 전환 없이 잠금 화면에서 필요한 정보를 즉시 확인하고 작업을 처리할 수 있어 AI 경험의 차원을 한층 업그레이드합니다. Galaxy S25 갤럭시 AI 프로젝트의 일부입니다.",
    links: [
      {
        label: "Samsung Design",
        url: "https://www.design.samsung.com/kr/contents/galaxy-ai/",
      },
    ],
  },
  {
    slug: "project-03",
    title: "Project 03",
    description: "Placeholder description for the third project.",
    thumbnail: "/works/project-03.jpg",
    body: "This is a placeholder for the third project. Replace with a longer description of the work, process, and outcomes when ready.",
    links: [{ label: "Behance", url: "#" }],
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}

export function isVideoThumbnail(thumbnail: string): boolean {
  return /\.(mp4|webm|mov)$/i.test(thumbnail);
}
