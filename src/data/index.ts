export interface Article {
  id: string;
  author: string;
  created_at: string;
  updated_at: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  tags: string[];
  read_time_min: number;
  summary: Record<Language, string>;
}

export type Language = "en" | "ja";

export const data = [
  {
    id: "my-first-article",
    author: "Takeshi Hashimoto",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    title: {
      en: "My message at COP: Invest in innovations that save and improve the most lives",
      ja: "My First Article",
    },
    description: {
      en: "At the COP World Climate Action Summit, I spoke about how innovation is the key to tackling emissions and improving human welfare at the same time.",
      ja: "This is my first article",
    },
    tags: ["Next.js", "TypeScript"],
    read_time_min: 5,
    summary: {
      en: "This is my first article",
      ja: "This is my first article",
    },
  },
  {
    id: "my-second-article",
    author: "Takeshi Hashimoto",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    title: {
      en: "Now, our team is working on a new project",
      ja: "My Second Article",
    },
    description: {
      en: "Our team started a new project. We are very excited about it.",
      ja: "This is my second article",
    },
    tags: ["Next.js", "TypeScript"],
    read_time_min: 5,
    summary: {
      en: "This is my second article",
      ja: "This is my second article",
    },
  },
];
