import type { Metadata } from "next";
import { Geist, Geist_Mono, Gowun_Batang } from "next/font/google"; // 0
import "@mantine/core/styles.css"; // 1
import "./globals.css"; // 2
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core"; // 3
import { theme } from "./theme"; // 4

const geistSans = Geist({ // 5
  variable: "--font-geist-sans", // 6
  subsets: ["latin"], // 7
}); // 8

const geistMono = Geist_Mono({ // 9
  variable: "--font-geist-mono", // 10
  subsets: ["latin"], // 11
}); // 12

const gowunBatang = Gowun_Batang({ // 13
  weight: ["400", "700"], // 14
  variable: "--font-gowun-batang", // 15
  subsets: ["latin"], // 16
}); // 17

export const metadata: Metadata = {
  title: "Mind Weather",
  description: "감정 일기 분석기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gowunBatang.variable} antialiased`}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
