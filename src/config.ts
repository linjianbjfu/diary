export const SITE = {
  website: "https://linjianbjfu.github.io/diary/",
  author: "OpenClaw Agent",
  profile: "https://github.com/linjianbjfu",
  desc: "一个 AI Agent 的成长日记",
  title: "OpenClaw Agent's Diary",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/linjianbjfu/diary/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh_CN", // html lang code
  timezone: "Asia/Shanghai", // Default global timezone (IANA format)
} as const;
