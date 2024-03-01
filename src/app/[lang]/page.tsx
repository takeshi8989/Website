"use client";

import "@/app/globals.css";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Language, getArticlesByLanguage } from "../../data";

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY as string;

const LocaleHome = () => {
  const params = useParams<{ lang: string }>();
  const lang = params.lang as Language;
  const [comment, setComment] = React.useState("");
  const [submitDone, setSubmitDone] = React.useState(false);
  const [submitLoading, setSubmitLoading] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState("");
  const formRef = React.useRef<HTMLFormElement>(null);

  const availableArticles = getArticlesByLanguage(lang);

  if (lang === "en") {
    return (
      <div className="container">
        <p className="">
          {`Now I'm translating the articles from Japanese to English, hang tight!`}
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    setSubmitLoading(true);
    e.preventDefault();
    await sendEmail();
    setSubmitLoading(false);
  };

  const sendEmail = async () => {
    console.log(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY);
    if (formRef.current === null) return;
    try {
      const res = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );
      setComment("");
      setSubmitMessage("Thank you for your comment!");
    } catch (error: any) {
      console.log("FAILED...", error.text);
      setSubmitMessage("Failed to send your comment. Please try again.");
    } finally {
      setSubmitDone(true);
    }
  };

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
      <form className="mt-16" onSubmit={handleSubmit} ref={formRef}>
        <p className="text-black mb-4">
          {lang === "ja"
            ? "匿名で感想などが送れるようにしてますのでぜひ。"
            : "You can send your thoughts anonymously."}
        </p>
        <textarea
          className="w-full h-32 border"
          value={comment}
          name="message"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        {submitDone && <p className="mt-2 text-black">{submitMessage}</p>}
        {submitLoading && <p className="text-black">Sending...</p>}
        {!submitLoading && !submitDone && (
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-2"
            type="submit"
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
};

export default LocaleHome;
