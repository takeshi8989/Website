import React from "react";
import { Article, Language } from "@/data/index";

interface Props {
  article: Article;
  language: Language;
}

const Heading = ({ article, language }: Props) => {
  return (
    <div className="mb-10">
      <h1 className="mt-10">{article.title[language]}</h1>
    </div>
  );
};

export default Heading;
