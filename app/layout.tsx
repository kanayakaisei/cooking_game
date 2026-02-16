import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import './reset.css';

const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const metadata: Metadata = {
  title: "ちっちゃなコックさん",
  description: "子供向けの料理ゲーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenMaru.className}`}
      >
        {children}
      </body>
    </html>
  );
}
