"use client";

import React from "react";
import { Language, data } from "../../data";
import { useParams } from "next/navigation";
import Link from "next/link";

const LocaleHome = () => {
  const params = useParams<{ language: string }>();
  const lang = params.language as Language;
  return (
    <div className="">
      <p className="mt-10 text-3xl text-center">Articles</p>
      <div></div>
      {data.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <Link href={`/${lang}/${item.id}`} className="text-black">
            <h2 className="text-xl mb-1">{item.title[lang]}</h2>
          </Link>
          <p className="text-sm">{item.description[lang]}</p>
          <p className="text-xs">{item.summary[lang]}</p>
        </div>
      ))}
    </div>
  );
};

export default LocaleHome;
