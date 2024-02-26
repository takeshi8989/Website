import React from "react";
import { Language } from "../data/index";
import Link from "next/link";

interface Props {
  language: Language;
}

const Recommender = ({ language }: Props) => {
  // const getRecentArticles = () => {
  //   const recentArticles = data
  //     .sort((a, b) => {
  //       return b.created_at.localeCompare(a.created_at);
  //     })
  //     .slice(0, 4);
  //   return recentArticles;
  // };

  return (
    <div className="mt-16">
      {/* <p className="font-bold underline mb-4">READ THIS NEXT</p>
      {getRecentArticles().map((article) => {
        return (
          <div key={article.id} className="">
            <Link href={`/${language}/${article.id}`} className="text-black">
              <p className="font-bold text-lg mb-0">
                {article.title[language]}
              </p>
            </Link>
            <p className="text-xs">{article.description[language]}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Recommender;
