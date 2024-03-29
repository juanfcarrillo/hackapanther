import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link href="https://esm.sh/github-markdown-css@5/github-markdown.css" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css" rel="stylesheet"/>
      <Providers>
        <body className={`${inter.className} dark text-foreground bg-background flex flex-col max-h-[100vh] h-[100vh]`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
