"use client";

import "@/app/globals.css";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Language, data } from "../../data";

const LocaleHome = () => {
  const params = useParams<{ lang: string }>();
  const lang = params.lang as Language;

  const availableArticles = data.filter((article) => {
    return (article.en && lang === "en") || (article.ja && lang === "ja");
  });

  return (
    <div className="container">
      <p className="mt-10 text-3xl text-center">Articles</p>
      <div></div>
      {availableArticles.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <Link href={`/${lang}/${item.id}`} className="text-black">
            <h2 className="text-xl mb-1">{item.title[lang]}</h2>
          </Link>
          <p className="text-md mb-0">{item.description[lang]}</p>
          <p className="text-xs">{item.summary[lang]}</p>
        </div>
      ))}
    </div>
  );
};

export default LocaleHome;
