"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
  const availableLangs = ["en", "ja"];
  const router = useRouter();

  const onLangChange = (lang: string) => {
    localStorage.setItem("lang", lang);
    router.push("/" + lang);
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (!lang) return;
    const pathLang = location.pathname.split("/")[1];
    if (location.pathname === "/" || pathLang !== lang) {
      router.push("/" + lang);
    }
  }, [router]);

  return (
    <div className="h-16 bg-white">
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center"></div>
        <div className="flex items-center">
          {availableLangs.map((lang) => (
            <div
              key={lang}
              onClick={() => onLangChange(lang)}
              className="px-4 py-2 text-sm font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
