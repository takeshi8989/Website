import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Takeshi Hashimoto",
  description: "Home",
};

export default async function Home() {
  redirect("/en/blogs");
  return null;
}
