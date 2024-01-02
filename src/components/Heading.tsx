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
      <p className="my-3">{article.description[language]}</p>
      <p className="text-sm">
        By {article.author} | {article.created_at} ・ {article.read_time_min}{" "}
        min read
      </p>
    </div>
  );
};

export default Heading;
