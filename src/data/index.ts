export interface Article {
    id: string;
    en: boolean;
    ja: boolean;
    author : string;
    created_at: string;
    updated_at?: string;
    title: Record<Language, string>;
    description?: Record<Language, string>;
    read_time_min?: number;
    summary?: Record<Language, string>;
    type: "Blog" | "Review" | "Memo";
  }
  
  export type Language = "en" | "ja";
  
  const blogs: Article[] = [
    {
      id: "planned-happenstance",
      en: false,
      ja: false,
      author: "Takeshi Hashimoto",
      created_at: "2024-02-25",
      updated_at: "2024-02-25",
      title: {
        en: "Planned Happenstance",
        ja: "計画的偶発性",
      },
      description: {
        en: "Utilize random events to create new ideas and opportunities.",
        ja: "偶然の出来事を計画しておく。",
      },
      read_time_min: 5,
      summary: {
        en: "",
        ja: "",
      },
      type: "Blog",
    },
    {
      id: "about-english",
      en: false,
      ja: false,
      author: "Takeshi Hashimoto",
      created_at: "2024-02-26",
      updated_at: "2024-02-26",
      title: {
        en: "About English",
        ja: "英語について",
      },
      description: {
        en: "English and my thoughts.",
        ja: "自身の経験を踏まえた英語についての考察",
      },
      read_time_min: 5,
      summary: {
        en: "",
        ja: "",
      },
      type: "Blog",
    },
    {
      id: "why-naruto-is-the-best",
      en: false,
      ja: false,
      author: "Takeshi Hashimoto",
      created_at: "2024-02-27",
      updated_at: "2024-02-27",
      title: {
        en: "Why Naruto is the Best",
        ja: "なぜNarutoが最高なのか",
      },
      description: {
        en: "Naruto is the best.",
        ja: "ナルトは最高だ。",
      },
      read_time_min: 5,
      summary: {
        en: "",
        ja: "",
      },
      type: "Blog",
    },
    {
      id: "how-we-shape-ourselves",
      en: false,
      ja: false,
      author: "Takeshi Hashimoto",
      created_at: "2024-02-29",
      updated_at: "2024-02-29",
      title: {
        en: "How We Shape Ourselves",
        ja: "エゴと環境",
      },
      description: {
        en: "How we shape ourselves.",
        ja: "自分を形作るもの。",
      },
      read_time_min: 5,
      summary: {
        en: "",
        ja: "",
      },
      type: "Blog",
    },
    {
      id: "ai-and-capitalism",
      en: false,
      ja: false,
      author: "Takeshi Hashimoto",
      created_at: "2024-03-02",
      updated_at: "2024-03-02",
      title: {
        en: "AI and Capitalism",
        ja: "AIと資本主義",
      },
      description: {
        en: "AI and capitalism.",
        ja: "AIと資本主義。",
      },
      read_time_min: 5,
      summary: {
        en: "",
        ja: "",
      },
      type: "Blog",
    },
    {
      id: "the-power-of-unconscious-mind",
      en: false,
      ja: false,
      author: "Takeshi Hashimoto",
      created_at: "2024-04-01",
      updated_at: "2024-04-01",
      title: {
        en: "The Power of Unconscious Mind",
        ja: "無意識の力",
      },
      description: {
        en: "The power of unconscious mind.",
        ja: "無意識の力。",
      },
      read_time_min: 10,
      summary: {
        en: "",
        ja: "",
      },
      type: "Blog",
    },
  ];

  const memos: Article[] = [
    {
        id: "just-take-action",
        en: false,
        ja: true,
        author: "Takeshi Hashimoto",
        created_at: "2024-06-13",
        title: {
          en: "Just take action",
          ja: "とりあえず決めて動く",
        },
        type: "Memo",
    }

    ]
  
  export const getBlogsByLanguage = (lang: Language): Article[] => {
    return blogs.filter((blog) => blog[lang]);
  };
  
  export const getBlogById = (id: string): Article | undefined => {
    return blogs.find((b) => b.id === id);
  };
  
  export const getMemoById = (id: string): Article | undefined => {
    return memos.find((b) => b.id === id);
  }