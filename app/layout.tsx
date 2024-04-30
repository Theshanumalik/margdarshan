import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subodhians - Don't Just Survive, Thrive in College",
  description:
    "Subodhians is plateform built by subodhians for subodhians to survive in subodh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(cn(inter.className), "bg-slate-50")}>{children}</body>
    </html>
  );
}
