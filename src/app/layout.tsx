"use client";

import React from "react";
import { Inter } from "next/font/google";
import { useParams } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const params = useParams<{ lang: string }>();
  const lang: string = params.lang ? params.lang : "en";
  return (
    <html lang={lang}>
      <body
        className={inter.className}
        suppressContentEditableWarning
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
