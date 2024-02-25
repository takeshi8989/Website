import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Takeshi Blog",
  description: "Home",
};

export default async function Home() {
  redirect("/en");
  return null;
}
