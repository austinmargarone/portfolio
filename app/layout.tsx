import Navbar from "@/components/Navbar";
import "./globals.css";
import React from "react";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import ThemeProvider from "@/providers/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://austinmargarone.com"),
  title: "Full Stack Developer | NextJS | React",
  description:
    "Welcome to my Full Stack Developer porfolio, showcasing my work. I specialize in building NextJS and React web applications.",
  keywords:
    "Full Stack Developer, NextJS, React, TypeScript, TailwindCSS, GraphQl, MongoDB, NodeJS, Web Development, Frontend",
  openGraph: {
    images: [
      {
        url: `https://austinmargarone.com/meta.png`,
        width: 1200,
        height: 630,
        alt: "Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <div className={`bg-white dark:bg-darkbg2`}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
