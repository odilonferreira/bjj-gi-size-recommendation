import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tamanho de kimono ideal",
  description: "Recomendação de tamanho kimonos para jiu-jitsu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(inter.variable, "w-screen h-screen")}>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId={`${process.env.GA_MEASUREMENT_ID}`} />
    </html>
  );
}
