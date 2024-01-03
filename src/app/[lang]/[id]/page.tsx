import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Language, data } from "../../../data/index";
import Heading from "../../../components/Heading";
import Recommender from "../../../components/Recommender";

export const metadata: Metadata = {
  title: "Article Title",
  description: "Generated by create next app",
};

const Article = ({ params }: { params: { id: string; lang: string } }) => {
  const id = params.id;
  const lang = params.lang as Language;

  const article = data.find((article) => article.id === params.id);

  if (!article || !lang) {
    return <div>404 {id}</div>;
  }

  if ((!article.en && lang === "en") || (!article.ja && lang === "ja")) {
    return (
      <div>
        404 {id} not ready in {lang} format
      </div>
    );
  }

  metadata.title = article.title[lang];
  metadata.description = article.description[lang];

  const MDXContent = dynamic(
    () => import(`@/data/articles/${id}/${lang}.mdx`),
    {
      ssr: false,
    }
  );

  return (
    <div className="mt-24 container">
      <Heading article={article} language={lang} />
      <MDXContent />
      <Recommender language={lang} />
    </div>
  );
};

export default Article;