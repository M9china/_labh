import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, TopNav } from "@/components";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib";
import { Session } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Let's All Be Happy",
  description: `Spread joy and positivity with our "Let's All Be Happy" collection, designed to brighten every day.`,
};

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = (await auth()) as Session;
  


  return (
    <html lang="en">
      <SessionProvider session={session}>
          <body className={inter.className}>
            <TopNav user={session} />
            {children}
            <Footer />
          </body>
      </SessionProvider>
    </html>
  );
}

export default RootLayout;
