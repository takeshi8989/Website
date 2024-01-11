export interface Article {
  id: string;
  en: boolean;
  ja: boolean;
  author: string;
  created_at: string;
  updated_at: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  tags: Tag[];
  read_time_min: number;
  summary: Record<Language, string>;
}

export type Language = "en" | "ja";

type Tag = "New Year Resolution";

export const data: Article[] = [
  {
    id: "new-year-resolution-2024",
    en: false,
    ja: false,
    author: "Takeshi Hashimoto",
    created_at: "2024-01-02",
    updated_at: "2024-01-02",
    title: {
      en: "My New Year Resolution 2024",
      ja: "2024年の抱負「殻を破って成果を出す」",
    },
    description: {
      en: "I will start a new project in 2024.",
      ja: "2023年の軽いまとめと2024年の抱負と目標",
    },
    tags: ["New Year Resolution"],
    read_time_min: 5,
    summary: {
      en: "I will start a new project in 2024.",
      ja: "新しいことをどんどんやる。ビジネス、英語、対人能力、人間力、あらゆるモノを継続的に成長させる。そしてビジネスにおいて目にみえる成果を出す。やるぞ！",
    },
  },
];
