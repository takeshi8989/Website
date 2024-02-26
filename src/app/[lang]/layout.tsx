import "@/app/globals.css";

import React from "react";
import { Metadata } from "next";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "Takeshi",
  description: "Home"
};


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
