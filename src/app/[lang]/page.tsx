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
