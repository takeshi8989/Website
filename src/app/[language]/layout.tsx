"use client";

import React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const params = useParams<{ language: string }>();

  return (
    <html lang={params.language}>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
