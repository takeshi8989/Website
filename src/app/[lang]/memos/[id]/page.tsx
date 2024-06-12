"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Language, getMemoById } from "@/data";
import Link from "next/link";

const MEMO_PASSWORD = process.env.MEMO_PASSWORD as string;

const Memo = ({ params }: { params: { id: string; lang: string } }) => {
  const id = params.id;
  const lang = params.lang as Language;

  const memo = getMemoById(id);

  if (localStorage.getItem("auth") !== MEMO_PASSWORD) {
    return (
      <div>
        <Link href={`/${lang}/memos`}>Unauthorized</Link>
      </div>
    );
  }

  if (!memo || !lang) {
    return <div>404 {id}</div>;
  }

  if ((!memo.en && lang === "en") || (!memo.ja && lang === "ja")) {
    return (
      <div>
        404 {id} not ready in {lang} format
      </div>
    );
  }

  const MDXContent = dynamic(() => import(`@/data/memos/${id}/${lang}.mdx`), {
    ssr: false,
  });

  return (
    <div className="container">
        {memo.created_at}
      <MDXContent />
    </div>
  );
};

export default Memo;
