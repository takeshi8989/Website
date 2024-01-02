"use client";

import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import { useParams } from "next/navigation";

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
