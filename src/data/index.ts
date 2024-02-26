export interface Article {
  id: string;
  en: boolean;
  ja: boolean;
  author: string;
  created_at: string;
  updated_at?: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  read_time_min: number;
  summary: Record<Language, string>;
  type: "Essay" | "Blog" | "Book" | "Movie" | "Music" | "Show";
}

export type Language = "en" | "ja";

const data: Article[] = [
  {
    id: "planned-happenstance",
    en: false,
    ja: true,
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
    type: "Essay",
  },
  {
    id: "about-english",
    en: false,
    ja: true,
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
    type: "Essay",
  },
];

export const getArticlesByLanguage = (lang: Language): Article[] => {
  return data.filter((article) => article[lang]);
};

export const getArticleById = (id: string): Article | undefined => {
  return data.find((article) => article.id === id);
};
