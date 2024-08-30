import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, TopNav } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Let's All Be Happy",
  description: `Spread joy and positivity with our "Let's All Be Happy" collection, designed to brighten every day.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
