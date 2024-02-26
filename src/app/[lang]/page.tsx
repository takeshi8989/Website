"use client";

import "@/app/globals.css";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Language, getArticlesByLanguage } from "../../data";

const LocaleHome = () => {
  const params = useParams<{ lang: string }>();
  const lang = params.lang as Language;

  const availableArticles = getArticlesByLanguage(lang);

  if (lang === "en") {
    return (
      <div className="container">
        <p className="">
          {`Once my English gets better, I'll translate existing articles I've written. I don't want to rely on machine translations or any other helps. Sorry, hang tight!`}
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="">
        <ul>
          {availableArticles.map((item) => (
            <li key={item.id} className="">
              <Link href={`/${lang}/${item.id}`} className="">
                <p className="text-sm mb-2">{item.title[lang]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocaleHome;
